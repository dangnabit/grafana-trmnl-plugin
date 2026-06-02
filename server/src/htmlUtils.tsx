import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  BaseTemplate,
  ErrorTemplate,
  TimeseriesChartContent,
  StatChartContent,
  GaugeChartContent,
  BarGaugeChartContent,
  PiechartChartContent,
  TableChartContent,
} from './components';

const TRMNL_PATTERN_IMAGES = [
  'https://usetrmnl.com/images/grayscale/gray-1.png',
  'https://usetrmnl.com/images/grayscale/black.png',
  'https://usetrmnl.com/images/grayscale/gray-3.png',
  'https://usetrmnl.com/images/grayscale/gray-7.png',
  'https://usetrmnl.com/images/grayscale/gray-2.png',
  'https://usetrmnl.com/images/grayscale/gray-6.png',
  'https://usetrmnl.com/images/grayscale/gray-4.png',
  'https://usetrmnl.com/images/grayscale/gray-5.png',
];

function getFullHtml(title: string, content: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <link rel="stylesheet" href="https://usetrmnl.com/css/latest/plugins.css">
  <script src="https://usetrmnl.com/js/latest/plugins.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;350;375;400;450;600;700&display=swap" rel="stylesheet">
</head>
<body class="environment trmnl">
<div class="screen">
  ${content}
  </div>
</body>
</html>`;
}

export function generateErrorHtml(
  errorMessage: string,
  title = 'Error',
  fullHtml = false,
): string {
  const errorHtml = `
        <p class="text--black">${errorMessage}</p>
    `;

  if (fullHtml) {
    return getFullHtml(
      title,
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(ErrorTemplate, {
          title,
          errorHtml,
        }),
      ),
    );
  }

  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(ErrorTemplate, {
      title,
      errorHtml,
    }),
  );
}

function renderBaseHtml(title: string, chartContent: string): string {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(BaseTemplate, {
      title,
      chartContent,
    }),
  );
}

export function generateStatHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const statValue = dataSeries.stat_value;
  const formattedValue =
    typeof statValue === 'number'
      ? statValue.toLocaleString()
      : String(statValue);

  const chartData = { value: statValue, formatted: formattedValue };

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(StatChartContent, { chartData }),
  );

  return renderBaseHtml(title, chartContent);
}

export function generateGaugeHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const statValue = dataSeries.stat_value;
  const chartData = {
    value: typeof statValue === 'number' ? statValue : Number(statValue) || 0,
  };

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(GaugeChartContent, { chartData }),
  );

  return renderBaseHtml(title, chartContent);
}

export function generateTimeseriesHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const isMultiSeries =
    dataSeries &&
    typeof dataSeries === 'object' &&
    !Array.isArray(dataSeries) &&
    Object.keys(dataSeries).length > 1 &&
    !('stat_value' in dataSeries);

  if (isMultiSeries) {
    const seriesConfig = Object.entries(dataSeries).map(
      ([seriesName, seriesData], index) => {
        if (index === 0) {
          return {
            name: seriesName,
            data: seriesData,
            lineWidth: 4,
            color: '#000000',
            zIndex: Object.keys(dataSeries).length,
          };
        }

        return {
          name: seriesName,
          data: seriesData,
          lineWidth: 5,
          color: {
            pattern: {
              image:
                TRMNL_PATTERN_IMAGES[(index - 1) % TRMNL_PATTERN_IMAGES.length],
              width: 12,
              height: 12,
            },
          },
          zIndex: Object.keys(dataSeries).length - index,
        };
      },
    );

    const chartData = seriesConfig;

    const chartContent = ReactDOMServer.renderToStaticMarkup(
      React.createElement(TimeseriesChartContent, { chartData }),
    );

    return renderBaseHtml(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(TimeseriesChartContent, { chartData }),
  );

  console.log(chartContent);

  return renderBaseHtml(title, chartContent);
}

export function generateBarGaugeHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const isMultiSeries =
    dataSeries &&
    typeof dataSeries === 'object' &&
    !Array.isArray(dataSeries) &&
    Object.keys(dataSeries).length > 1 &&
    !('stat_value' in dataSeries);

  if (isMultiSeries) {
    const seriesConfig = Object.entries(dataSeries).map(
      ([seriesName, seriesData], index) => {
        return {
          name: seriesName,
          data: seriesData,
          color:
            index === 0
              ? '#000000'
              : {
                  pattern: {
                    image:
                      TRMNL_PATTERN_IMAGES[
                        (index - 1) % TRMNL_PATTERN_IMAGES.length
                      ],
                    width: 12,
                    height: 12,
                  },
                },
        };
      },
    );

    const chartData = seriesConfig;

    const chartContent = ReactDOMServer.renderToStaticMarkup(
      React.createElement(BarGaugeChartContent, { chartData }),
    );

    return renderBaseHtml(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(BarGaugeChartContent, { chartData }),
  );

  return renderBaseHtml(title, chartContent);
}

export function generatePiechartHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(PiechartChartContent, { chartData }),
  );

  return renderBaseHtml(title, chartContent);
}

export function generateTableHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(TableChartContent, { chartData }),
  );

  return renderBaseHtml(title, chartContent);
}

export function generateHtml(
  dataSeries: any,
  panelType: string,
  title = 'Grafana Panel',
  fullHtml = false,
): string {
  const isStat =
    dataSeries && typeof dataSeries === 'object' && 'stat_value' in dataSeries;

  let baseHtml = '';

  if (panelType === 'stat' && isStat) {
    baseHtml = generateStatHtml(dataSeries, title);
  } else if (panelType === 'gauge' && isStat) {
    baseHtml = generateGaugeHtml(dataSeries, title);
  } else if (panelType === 'timeseries' || panelType === 'graph') {
    baseHtml = generateTimeseriesHtml(dataSeries, title);
  } else if (panelType === 'bar gauge') {
    baseHtml = generateBarGaugeHtml(dataSeries, title);
  } else if (panelType === 'piechart') {
    baseHtml = generatePiechartHtml(dataSeries, title);
  } else if (panelType === 'table') {
    baseHtml = generateTableHtml(dataSeries, title);
  } else {
    baseHtml = generateTimeseriesHtml(dataSeries, title);
  }

  return fullHtml ? getFullHtml(title, baseHtml) : baseHtml;
}
