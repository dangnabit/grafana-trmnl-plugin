import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import * as grafanaUtils from './grafanaUtils';
import {
  generateErrorHtml,
  generateHtml,
  renderScripts,
  renderTitleBar,
} from './htmlUtils';
import {
  DashboardMetadataException,
  GrafanaException,
  InvalidPanelUrlException,
  NoTargetsException,
  PanelNotFoundException,
  GrafanaQueryException,
} from './exceptions';

const app = express();
app.use(express.json());

function isGrafanaException(error: unknown): error is GrafanaException {
  return error instanceof GrafanaException;
}

function buildHtmlErrorResponse(message: string, fullHtml: boolean): string {
  return generateErrorHtml(message, 'Error', fullHtml);
}

async function getPanelData(data: any) {
  const token = data.grafana_token;
  const panelUrl = data.panel_url;
  const fr = data.from ?? 'now-6h';
  const to = data.to ?? 'now';

  const { host, uid, panelId, variables } =
    grafanaUtils.parsePanelUrl(panelUrl);
  if (!uid || !panelId) {
    throw new InvalidPanelUrlException();
  }

  let dashboard;
  try {
    dashboard = await grafanaUtils.getDashboardMetadata(host, uid, token);
  } catch (error: unknown) {
    throw new DashboardMetadataException(
      `Error fetching dashboard metadata: ${String(error)}`,
    );
  }

  const panel = dashboard?.dashboard?.panels?.find(
    (p: any) => String(p.id) === panelId,
  );
  if (!panel) {
    throw new PanelNotFoundException();
  }

  const targets = panel.targets ?? [];
  if (!Array.isArray(targets) || targets.length === 0) {
    throw new NoTargetsException();
  }

  const panelType = String(panel.type ?? 'timeseries').toLowerCase();
  const processedTargets = grafanaUtils.applyTemplateVariables(
    targets,
    variables,
  );

  let responseData;
  let dataSeries;
  try {
    [responseData, dataSeries] = await grafanaUtils.queryGrafanaPanel(
      host,
      token,
      processedTargets,
      fr,
      to,
      panelType,
    );
  } catch (error: unknown) {
    throw new GrafanaQueryException(
      `Error querying Grafana panel: ${String(error)}`,
    );
  }

  return {
    panel_type: panelType,
    panel_title: panel.title ?? 'Grafana Panel',
    data_series: dataSeries,
    raw_response: responseData,
    processed_targets: processedTargets,
    variables,
  };
}

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../templates/index.html'));
});

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

function formatSumValue(
  value: number | string,
  param: 'dollar' | 'percentage' | 'kwh',
): string {
  if (param === 'dollar') {
    const numValue = typeof value === 'number' ? value : Number(value);
    if (isNaN(numValue)) {
      return String(value);
    }
    return `$${Math.round(numValue * 100) / 100}`;
  }
  if (param === 'percentage') {
    const numValue = typeof value === 'number' ? value : Number(value);
    if (isNaN(numValue)) {
      return String(value);
    }
    return `${numValue}%`;
  }
  if (param === 'kwh') {
    const numValue = typeof value === 'number' ? value : Number(value);
    if (isNaN(numValue)) {
      return String(value);
    }
    return `${numValue} kWh`;
  }
  return String(value);
}

app.post('/render', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const fullHtml = data?.full_html ?? false;

    const sumValueParam = new URL(data.panel_url).searchParams.get('sumValue');

    const panelData = await getPanelData(data);
    const html = generateHtml(
      panelData.data_series,
      panelData.panel_type,
      panelData.panel_title,
      fullHtml,
    );

    const title_bar = renderTitleBar(panelData.panel_title);

    const scripts = renderScripts();

    if (fullHtml) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(html);
      return;
    }

    let sumValue: number | null = null;

    if (sumValueParam) {
      const panel_values = Array.isArray(panelData.data_series)
        ? panelData.data_series
        : Object.values(panelData.data_series)[0];

      if (Array.isArray(panel_values)) {
        sumValue = panel_values.reduce((acc: number, item: any) => {
          if (typeof item === 'number') {
            return acc + item;
          } else if (
            Array.isArray(item) &&
            item.length === 2 &&
            typeof item[1] === 'number'
          ) {
            return acc + item[1];
          } else if ('value' in item && typeof item.value === 'number') {
            return acc + item.value;
          }
          return acc;
        }, 0);
      }
    }

    const sumFields = sumValueParam
      ? {
          sum_value: formatSumValue(
            sumValue || 0,
            sumValueParam as 'dollar' | 'percentage' | 'kwh',
          ),
        }
      : {};

    res.json({
      html,
      title_bar,
      scripts,
      generated_at: new Date().toISOString(),
      ...sumFields,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/query', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const panelData = await getPanelData(req.body);
    res.json(panelData);
  } catch (error) {
    next(error);
  }
});

app.use((error: unknown, req: Request, res: Response, _next: NextFunction) => {
  const grafanaError = isGrafanaException(error);
  const statusCode = grafanaError ? error.statusCode : 500;
  const errorMsg = grafanaError ? error.message : String(error);

  if (!grafanaError) {
    console.error('Unexpected exception:', errorMsg);
    console.error(error);
  }

  if (req.path === '/render' && req.method === 'POST') {
    const fullHtml = req.body?.full_html ?? false;
    if (fullHtml) {
      const errorHtml = buildHtmlErrorResponse(errorMsg, true);
      res.status(statusCode).type('text/html; charset=utf-8').send(errorHtml);
      return;
    }
    const errorHtml = buildHtmlErrorResponse(errorMsg, false);
    res
      .status(statusCode)
      .json({ html: errorHtml, generated_at: new Date().toISOString() });
    return;
  }

  const jsonResponse: Record<string, any> = { error: errorMsg };
  if (!grafanaError) {
    jsonResponse.traceback = new Error().stack;
  }

  res.status(statusCode).json(jsonResponse);
});

const port = Number(process.env.PORT ?? 8080);

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

export default app;
export { getPanelData as _getPanelData };
