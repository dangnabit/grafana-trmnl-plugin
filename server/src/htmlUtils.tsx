import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { BaseTemplate, ErrorTemplate, GrafanaLogo } from './components';

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
          logoSvg: <GrafanaLogo />,
          errorHtml,
        }),
      ),
    );
  }

  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(ErrorTemplate, {
      title,
      logoSvg: <GrafanaLogo />,
      errorHtml,
    }),
  );
}

function renderBaseHtml(title: string, chartContent: string): string {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(BaseTemplate, {
      title,
      logoSvg: <GrafanaLogo />,
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

  const chartContent = `
        var chartData = ${JSON.stringify(chartData)};

        // Stat panel rendering using Chartkick with Highcharts adapter
        var createChart = function() {
        new Chartkick.LineChart("chart", [[1, chartData.value]], {
          adapter: "highcharts",
            thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            chart: {
              height: null,
              type: "line",
              backgroundColor: "transparent"
            },
            title: {
              text: null
            },
            xAxis: {
              visible: false
            },
            yAxis: {
              visible: false
            },
            legend: {
              enabled: false
            },
            plotOptions: {
                      series: {
            animation: false,
          },
              line: {
                enableMouseTracking: false,
                states: {
                  hover: {
                    enabled: false
                  }
                },
                marker: {
                  enabled: false
                },
                dataLabels: {
                  enabled: true,
                  formatter: function() {
                    return chartData.formatted;
                  },
                  style: {
                    fontSize: "120px",
                    fontWeight: "bold",
                    color: "#000000",
                    textOutline: "none"
                  },
                  x: 0,
                  y: 0,
                  verticalAlign: "middle",
                  align: "center"
                }
              }
            },
            credits: {
              enabled: false
            }
          }
        });
        };

        if ("Chartkick" in window) {
          createChart();
        } else {
          window.addEventListener("chartkick:load", createChart, true);
        }
    `;

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

  const chartContent = `
        var chartData = ${JSON.stringify(chartData)};

        // Gauge panel rendering using Chartkick with Highcharts adapter
        var createChart = function() {
        new Chartkick.LineChart("chart", [[1, chartData.value]], {
          adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            chart: {
              height: null,
              type: "gauge",
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            pane: {
              startAngle: -150,
              endAngle: 150,
              background: {
                backgroundColor: "transparent",
                borderWidth: 0
              }
            },
            plotOptions: {
                      series: {
            animation: false,
          },
              gauge: {
                pivot: {
                  backgroundColor: "transparent"
                },
                dial: {
                  backgroundColor: "transparent",
                  baseWidth: 0
                }
              }
            },
            yAxis: {
              min: 0,
              max: 100,
              minorTickInterval: 0,
              tickColor: "#000000",
              tickLength: 40,
              tickPixelInterval: 40,
              tickWidth: 2,
              lineWidth: 0,
              title: {
                text: null
              },
              labels: {
                distance: 15,
                style: {
                  fontSize: "16px",
                  color: "#000000"
                }
              },
              plotBands: [{
                from: 1,
                to: chartData.value,
                color: "#666666",
                innerRadius: "82%",
                borderRadius: "50%"
              }, {
                from: chartData.value + 1,
                to: 100,
                color: "#CCCCCC",
                innerRadius: "82%",
                borderRadius: "50%"
              }]
            },
            series: [{
              name: "Value",
              data: [chartData.value],
              dataLabels: {
                format: "{point.y:.2f}",
                borderWidth: 0,
                style: {
                  fontSize: "2em",
                  fontWeight: "400",
                  color: "#000000"
                }
              }
            }],
            credits: {
              enabled: false
            }
          }
        });
        };

        if ("Chartkick" in window) {
          createChart();
        } else {
          window.addEventListener("chartkick:load", createChart, true);
        }
    `;

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

    const chartContent = `
            var chartData = ${JSON.stringify(chartData)};

            // Multi-series timeseries rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.LineChart("chart", chartData, {
              adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                chart: {
                  height: null,
                  type: "spline",
                  spacing: [10, 10, 5, 10],
                },
                title: {
                  text: null
                },
                plotOptions: {
                          series: {
            animation: false,
          },
                  line: {
                    enableMouseTracking: false,
                    states: {
                      hover: { enabled: false }
                    },
                    marker: {
                      enabled: false
                    }
                  }
                },
                tooltip: {
                  enabled: false
                },
                legend: {
                  enabled: true,
                  align: "left",
                  verticalAlign: "top",
                  layout: "horizontal",
                  itemStyle: {
                    fontSize: "14px",
                    color: "#000000"
                  }
                },
                yAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  gridLineDashStyle: "shortdot",
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickAmount: 5,
                  title: {
                    text: null
                  }
                },
                xAxis: {
                  type: "datetime",
                  labels: {
                    style: { fontSize: "16px", color: "#000000" },
                    padding: 5,
                    y: 25
                  },
                  lineWidth: 0,
                  gridLineDashStyle: "dot",
                  tickWidth: 1,
                  tickLength: 0,
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickPixelInterval: 120,
                  title: {
                    text: null
                  }
                },
                credits: {
                  enabled: false
                }
              }
            });
            };

            if ("Chartkick" in window) {
              createChart();
            } else {
              window.addEventListener("chartkick:load", createChart, true);
            }
        `;

    return renderBaseHtml(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
            var chartData = ${JSON.stringify(chartData)};

            // Single series timeseries rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.LineChart("chart", chartData, {
              adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                chart: {
                  height: null,
                  type: "spline",
                  spacing: [10, 10, 5, 10],
                },
                title: {
                  text: null
                },
                plotOptions: {
                          series: {
            animation: false,
          },
                  line: {
                    enableMouseTracking: false,
                    states: {
                      hover: { enabled: false }
                    },
                    marker: {
                      enabled: false
                    }
                  }
                },
                tooltip: {
                  enabled: false
                },
                legend: {
                  enabled: false
                },
                yAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  gridLineDashStyle: "shortdot",
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickAmount: 5,
                  title: {
                    text: null
                  }
                },
                xAxis: {
                  type: "datetime",
                  labels: {
                    style: { fontSize: "16px", color: "#000000" },
                    padding: 5,
                    y: 25
                  },
                  lineWidth: 0,
                  gridLineDashStyle: "dot",
                  tickWidth: 1,
                  tickLength: 0,
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickPixelInterval: 120,
                  title: {
                    text: null
                  }
                },
                credits: {
                  enabled: false
                }
              }
            });
            };

            if ("Chartkick" in window) {
              createChart();
            } else {
              window.addEventListener("chartkick:load", createChart, true);
            }

        `;

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

    const chartContent = `
            var chartData = ${JSON.stringify(seriesConfig)};

            // Multi-series bar gauge rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.ColumnChart("chart", chartData, {
              adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                chart: {
                  height: null,
                  type: "column",
                  spacing: [10, 10, 5, 10]
                },
                title: {
                  text: null
                },
                plotOptions: {
                          series: {
            animation: false,
          },
                  column: {
                    enableMouseTracking: false,
                    states: {
                      hover: { enabled: false }
                    }
                  }
                },
                tooltip: {
                  enabled: false
                },
                legend: {
                  enabled: true,
                  align: "left",
                  verticalAlign: "top",
                  layout: "horizontal",
                  itemStyle: {
                    fontSize: "14px",
                    color: "#000000"
                  }
                },
                yAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  gridLineDashStyle: "shortdot",
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickAmount: 5,
                  title: {
                    text: null
                  }
                },
                xAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  lineWidth: 0,
                  gridLineDashStyle: "dot",
                  tickWidth: 1,
                  tickLength: 0,
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  title: {
                    text: null
                  }
                },
                credits: {
                  enabled: false
                }
              }
            });
            };

            if ("Chartkick" in window) {
              createChart();
            } else {
              window.addEventListener("chartkick:load", createChart, true);
            }
        `;

    return renderBaseHtml(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
            var chartData = ${JSON.stringify(chartData)};

            // Convert data to chart format for Chartkick
            var seriesData = [];
            if (Array.isArray(chartData)) {
              seriesData = chartData;
            } else {
              for (var key in chartData) {
                if (Object.prototype.hasOwnProperty.call(chartData, key)) {
                  seriesData.push([key, chartData[key]]);
                }
              }
            }

            // Single series bar gauge rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.ColumnChart("chart", seriesData, {
              adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                chart: {
                  height: null,
                  type: "column",
                  spacing: [10, 10, 5, 10]
                },
                title: {
                  text: null
                },
                plotOptions: {
                          series: {
            animation: false,
          },
                  column: {
                    enableMouseTracking: false,
                    states: {
                      hover: { enabled: false }
                    }
                  }
                },
                tooltip: {
                  enabled: false
                },
                legend: {
                  enabled: false
                },
                yAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  gridLineDashStyle: "shortdot",
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  tickAmount: 5,
                  title: {
                    text: null
                  }
                },
                xAxis: {
                  labels: {
                    style: { fontSize: "16px", color: "#000000" }
                  },
                  lineWidth: 0,
                  gridLineDashStyle: "dot",
                  tickWidth: 1,
                  tickLength: 0,
                  gridLineWidth: 1,
                  gridLineColor: "#000000",
                  title: {
                    text: null
                  }
                },
                credits: {
                  enabled: false
                }
              }
            });
            };

            if ("Chartkick" in window) {
              createChart();
            } else {
              window.addEventListener("chartkick:load", createChart, true);
            }
        `;

  return renderBaseHtml(title, chartContent);
}

export function generatePiechartHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
        var chartData = ${JSON.stringify(chartData)};
        var patternImages = ${JSON.stringify(TRMNL_PATTERN_IMAGES)};

        var pieData = [];

        if (Array.isArray(chartData)) {
          for (var i = 0; i < chartData.length; i++) {
            var item = chartData[i];
            var name = item[0];
            var value = item[1];
            var color;

            if (i === 0) {
              color = "#000000";
            } else {
              color = {
                pattern: {
                  image: patternImages[(i - 1) % patternImages.length],
                  width: 12,
                  height: 12
                }
              };
            }

            pieData.push({
              name: name,
              y: value,
              color: color
            });
          }
        } else {
          var dataKeys = Object.keys(chartData);
          for (var i = 0; i < dataKeys.length; i++) {
            var key = dataKeys[i];
            var value = chartData[key];
            var color;

            if (i === 0) {
              color = "#000000";
            } else {
              color = {
                pattern: {
                  image: patternImages[(i - 1) % patternImages.length],
                  width: 12,
                  height: 12
                }
              };
            }

            pieData.push({
              name: key,
              y: value,
              color: color
            });
          }
        }

        var createChart = function() {
        new Chartkick.PieChart("chart", pieData, {
          adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            chart: {
              height: null,
              type: "pie",
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            plotOptions: {
                      series: {
            animation: false,
          },
              pie: {
                enableMouseTracking: false,
                states: {
                  hover: { enabled: false }
                },
                dataLabels: {
                  enabled: true,
                  distance: 30,
                  style: {
                    fontSize: "14px",
                    color: "#000000",
                    fontWeight: "400"
                  },
                  formatter: function() {
                    return this.point.name + ": " + Highcharts.numberFormat(this.percentage, 1) + "%";
                  },
                  connectorStyle: {
                    color: "#000000",
                    width: 1
                  }
                },
                showInLegend: false,
                borderWidth: 0,
                innerSize: 0,
                size: "85%"
              }
            },
            tooltip: {
              enabled: false
            },
            legend: {
              enabled: false
            },
            credits: {
              enabled: false
            }
          }
        });
        };

        if ("Chartkick" in window) {
          createChart();
        } else {
          window.addEventListener("chartkick:load", createChart, true);
        }
    `;

  return renderBaseHtml(title, chartContent);
}

export function generateTableHtml(
  dataSeries: any,
  title = 'Grafana Panel',
): string {
  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
        var chartData = ${JSON.stringify(chartData)};

        var seriesData = [];
        if (Array.isArray(chartData)) {
          seriesData = chartData;
        } else {
          for (var key in chartData) {
            if (Object.prototype.hasOwnProperty.call(chartData, key)) {
              seriesData.push([key, chartData[key]]);
            }
          }
        }

        var createChart = function() {
        new Chartkick.ColumnChart("chart", seriesData, {
          adapter: "highcharts",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            chart: {
              height: null,
              type: "column",
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            plotOptions: {
                      series: {
            animation: false,
          },
              column: {
                enableMouseTracking: false,
                states: {
                  hover: { enabled: false }
                }
              }
            },
            tooltip: {
              enabled: false
            },
            legend: {
              enabled: false
            },
            yAxis: {
              labels: {
                style: { fontSize: "16px", color: "#000000" }
              },
              gridLineDashStyle: "shortdot",
              gridLineWidth: 1,
              gridLineColor: "#000000",
              tickAmount: 5,
              title: {
                text: null
              }
            },
            xAxis: {
              labels: {
                style: { fontSize: "16px", color: "#000000" }
              },
              lineWidth: 0,
              gridLineDashStyle: "dot",
              tickWidth: 1,
              tickLength: 0,
              gridLineWidth: 1,
              gridLineColor: "#000000",
              title: {
                text: null
              }
            },
            credits: {
              enabled: false
            }
          }
        });
        };

        if ("Chartkick" in window) {
          createChart();
        } else {
          window.addEventListener("chartkick:load", createChart, true);
        }
    `;

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
