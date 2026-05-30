import {
  DashboardMetadataException,
  GrafanaQueryException,
} from './exceptions';

export type GrafanaVariables = Record<string, string[]>;
export type GrafanaTarget = Record<string, any>;

export function parsePanelUrl(panelUrl: string): {
  host: string;
  uid: string | null;
  panelId: string | null;
  variables: GrafanaVariables;
} {
  const parsed = new URL(panelUrl);
  const pathParts = parsed.pathname
    .replace(/^\/+/g, '')
    .replace(/\/+$/g, '')
    .split('/');
  const uid = pathParts.length >= 2 ? pathParts[1] : null;
  const searchParams = new URLSearchParams(parsed.search);
  const panelIdRaw = searchParams.get('viewPanel');
  const panelId = panelIdRaw ? panelIdRaw.split('-').pop() || null : null;
  const host = `https://${parsed.host}`;

  const variables: GrafanaVariables = {};
  for (const key of Array.from(searchParams.keys())) {
    if (key.startsWith('var-')) {
      const varName = key.slice(4);
      variables[varName] = searchParams.getAll(key);
    }
  }

  return { host, uid, panelId, variables };
}

export async function getDashboardMetadata(
  host: string,
  uid: string,
  token: string,
): Promise<any> {
  const response = await fetch(`${host}/api/dashboards/uid/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json().catch(() => {
    throw new DashboardMetadataException('Invalid dashboard metadata response');
  });

  console.log(data);

  if (!response.ok) {
    throw new DashboardMetadataException(
      `Error fetching dashboard metadata: ${response.status} ${response.statusText}`,
    );
  }

  return data;
}

export function applyTemplateVariables(
  data: any,
  variables: GrafanaVariables,
): any {
  if (!variables || Object.keys(variables).length === 0) {
    return data;
  }

  const replaceVariablesInString = (text: any): any => {
    if (typeof text !== 'string') {
      return text;
    }

    let result = text;

    for (const [varName, varValue] of Object.entries(variables)) {
      const varValues = Array.isArray(varValue) ? varValue : [varValue];

      const patterns = [`\${var-${varName}}`, `\${${varName}}`, `$${varName}`];

      for (const pattern of patterns) {
        if (!result.includes(pattern)) {
          continue;
        }

        if (pattern === `\${${varName}}` || pattern === `$${varName}`) {
          const replacement =
            varValues.length > 1 ? `(${varValues.join('|')})` : varValues[0];
          result = result.split(pattern).join(replacement);
        } else {
          result = result.split(pattern).join(varValues[0]);
        }
      }
    }

    return result;
  };

  const processData = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(processData);
    }

    if (obj && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, processData(value)]),
      );
    }

    return replaceVariablesInString(obj);
  };

  return processData(data);
}

export function processSeriesData(
  xVals: any[],
  yVals: any[],
  processedTargets: GrafanaTarget[],
  refId: string,
): any[] {
  let isTimeSeries = true;

  if (Array.isArray(xVals) && xVals.length > 0) {
    const firstVal = xVals[0];
    if (
      typeof firstVal === 'string' ||
      (typeof firstVal === 'number' && firstVal < 1000000000)
    ) {
      isTimeSeries = false;
    }
  }

  let targetFormat = 'time_series';
  for (const target of processedTargets) {
    if (target.refId === refId) {
      targetFormat = target.format ?? 'time_series';
      break;
    }
  }

  if (targetFormat === 'table' || !isTimeSeries) {
    return xVals.map((x, index) => [String(x), yVals[index]]);
  }

  return xVals
    .map((x, index) => {
      const y = yVals[index];
      if (x == null || y == null) {
        return null;
      }
      return [new Date(Number(x)).toISOString(), Number(y) || 0];
    })
    .filter(Boolean) as any[];
}

export function getSeriesNameFromLabels(frame: any, refId: string): string {
  if (frame?.schema?.fields) {
    for (const field of frame.schema.fields) {
      if (field.type === 'number' && field.labels) {
        const labels = field.labels;

        if (labels.pod) {
          const podName = labels.pod as string;
          if (podName.includes('resource-allocator')) {
            const parts = podName.split('-');
            if (parts.length >= 3) {
              return `${parts[parts.length - 2].slice(-4)}-${parts[parts.length - 1]}`;
            }
            return podName;
          }
          return podName;
        }

        if (labels.__name__) {
          return labels.__name__ as string;
        }

        const labelParts = Object.entries(labels)
          .filter(([key]) => !['__name__', 'job', 'instance'].includes(key))
          .map(([key, value]) => `${key}=${value}`);

        if (labelParts.length > 0) {
          return labelParts.join(', ');
        }
        break;
      }
    }
  }

  return refId;
}

export async function queryGrafanaPanel(
  host: string,
  token: string,
  processedTargets: GrafanaTarget[],
  fr: string,
  to: string,
  panelType: string,
): Promise<[any, any]> {
  const queryUrl = `${host}/api/ds/query`;
  const body = JSON.stringify({
    queries: processedTargets,
    from: String(fr),
    to: String(to),
  });

  const response = await fetch(queryUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body,
  });

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new GrafanaQueryException(
      `Error querying Grafana panel: ${response.status} ${response.statusText} ${JSON.stringify(responseData)}`,
    );
  }

  const dataSeries: Record<string, any> = {};

  if (responseData.results) {
    const results = Object.entries(responseData.results) as [string, any][];
    for (const [refId, result] of results) {
      if (result?.frames?.length) {
        for (const frame of result.frames) {
          if (frame?.data?.values) {
            const values = frame.data.values as any[][];

            if (values.length === 1 && values[0].length === 1) {
              dataSeries.stat_value = values[0][0];
            } else if (values.length >= 2) {
              const xVals = values[0];
              const fieldNames = Array.isArray(frame?.schema?.fields)
                ? frame.schema.fields.map(
                    (field: any, index: number) =>
                      field.name ?? `Series ${index}`,
                  )
                : [];

              if (values.length > 2 && fieldNames.length > 2) {
                for (let i = 1; i < values.length; i += 1) {
                  const yVals = values[i];
                  const seriesName = fieldNames[i] ?? `Series ${i}`;
                  const frameData = processSeriesData(
                    xVals,
                    yVals,
                    processedTargets,
                    refId,
                  );
                  if (frameData.length > 0) {
                    dataSeries[seriesName] = frameData;
                  }
                }
              } else {
                const yVals = values[1];
                let seriesName = getSeriesNameFromLabels(frame, refId);

                if (seriesName === refId) {
                  for (const target of processedTargets) {
                    if (target.refId === refId) {
                      const legendFormat = target.legendFormat ?? '';
                      if (legendFormat && !legendFormat.includes('{{')) {
                        seriesName = legendFormat;
                      } else if (target.expr) {
                        const expr = String(target.expr).slice(0, 40);
                        seriesName = expr.length === 40 ? `${expr}...` : expr;
                      }
                      break;
                    }
                  }
                }

                const frameData = processSeriesData(
                  xVals,
                  yVals,
                  processedTargets,
                  refId,
                );
                if (frameData.length > 0) {
                  dataSeries[seriesName] = frameData;
                }
              }
            }
          }
        }
      } else if (result?.series?.length) {
        for (const series of result.series) {
          const seriesData: any[] = [];
          let seriesName = refId;

          if (series?.tags) {
            const tags = series.tags;
            if (tags.pod) {
              const podName = String(tags.pod);
              if (podName.includes('resource-allocator')) {
                const parts = podName.split('-');
                seriesName =
                  parts.length >= 3
                    ? `${parts[parts.length - 2].slice(-4)}-${parts[parts.length - 1]}`
                    : podName;
              } else {
                seriesName = podName;
              }
            }
          }

          for (const datapoint of series.datapoints ?? []) {
            if (
              Array.isArray(datapoint) &&
              datapoint.length >= 2 &&
              datapoint[0] != null
            ) {
              const [value, timestamp] = datapoint;
              seriesData.push([
                new Date(Number(timestamp)).toISOString(),
                value,
              ]);
            }
          }

          if (seriesData.length > 0) {
            dataSeries[seriesName] = seriesData;
          }
        }
      }
    }
  }

  if (Object.keys(dataSeries).length === 0) {
    dataSeries['No Data'] = [];
  }

  return [responseData, dataSeries];
}
