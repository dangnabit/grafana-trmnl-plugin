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

const GRAFANA_LOGO_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="28px" viewBox="0 0 26 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(3.921569%,3.921569%,3.921569%);fill-opacity:1;" d="M 25.753906 12.328125 C 25.703125 11.878906 25.652344 11.328125 25.453125 10.730469 C 25.304688 10.132812 25.054688 9.484375 24.753906 8.785156 C 24.40625 8.136719 23.957031 7.386719 23.40625 6.738281 C 23.207031 6.488281 22.957031 6.1875 22.65625 5.9375 C 23.058594 4.390625 22.160156 3.042969 22.160156 3.042969 C 20.660156 2.945312 19.714844 3.492188 19.363281 3.792969 C 19.3125 3.792969 19.265625 3.742188 19.164062 3.695312 C 18.914062 3.59375 18.664062 3.492188 18.367188 3.394531 C 18.066406 3.292969 17.816406 3.246094 17.515625 3.144531 C 17.21875 3.09375 16.96875 3.042969 16.667969 2.996094 C 16.617188 2.996094 16.570312 2.996094 16.519531 2.996094 C 15.871094 0.898438 14.023438 0 14.023438 0 C 11.925781 1.347656 11.527344 3.195312 11.527344 3.195312 C 11.527344 3.195312 11.527344 3.246094 11.527344 3.292969 C 11.429688 3.34375 11.277344 3.34375 11.179688 3.394531 C 11.027344 3.445312 10.878906 3.492188 10.679688 3.542969 C 10.53125 3.59375 10.378906 3.644531 10.179688 3.742188 C 9.878906 3.894531 9.53125 4.042969 9.230469 4.191406 C 8.933594 4.34375 8.632812 4.542969 8.332031 4.742188 C 8.285156 4.742188 8.285156 4.691406 8.285156 4.691406 C 5.386719 3.59375 2.792969 4.941406 2.792969 4.941406 C 2.542969 8.085938 3.941406 10.03125 4.242188 10.382812 C 4.191406 10.582031 4.089844 10.78125 4.039062 10.980469 C 3.839844 11.679688 3.640625 12.378906 3.542969 13.125 C 3.542969 13.226562 3.542969 13.328125 3.542969 13.425781 C 0.847656 14.773438 0.046875 17.46875 0.046875 17.46875 C 2.292969 20.0625 4.890625 20.214844 4.890625 20.214844 C 5.238281 20.8125 5.589844 21.363281 6.039062 21.910156 C 6.238281 22.109375 6.386719 22.359375 6.585938 22.558594 C 5.789062 24.90625 6.6875 26.851562 6.6875 26.851562 C 9.183594 26.953125 10.828125 25.753906 11.179688 25.503906 C 11.429688 25.605469 11.675781 25.652344 11.925781 25.753906 C 12.675781 25.953125 13.472656 26.054688 14.273438 26.101562 C 14.472656 26.101562 14.671875 26.101562 14.871094 26.101562 L 15.269531 26.101562 C 16.46875 27.800781 18.515625 28 18.515625 28 C 19.960938 26.453125 20.0625 24.90625 20.0625 24.554688 C 20.0625 24.507812 20.0625 24.507812 20.0625 24.507812 L 20.0625 24.457031 C 20.363281 24.257812 20.660156 24.007812 20.960938 23.757812 C 21.558594 23.207031 22.058594 22.609375 22.507812 21.960938 C 22.558594 21.910156 22.609375 21.859375 22.609375 21.761719 C 24.253906 21.859375 25.453125 20.714844 25.453125 20.714844 C 25.152344 18.964844 24.203125 18.117188 24.003906 17.96875 C 24.003906 17.96875 24.003906 17.96875 23.957031 17.96875 C 23.957031 17.867188 23.957031 17.769531 23.957031 17.667969 C 23.957031 17.46875 23.957031 17.320312 23.957031 17.121094 L 23.957031 16.871094 C 23.957031 16.820312 23.957031 16.820312 23.957031 16.820312 L 23.957031 16.570312 C 23.957031 16.519531 23.957031 16.46875 23.957031 16.421875 C 23.957031 16.371094 23.957031 16.320312 23.957031 16.269531 L 23.957031 15.972656 C 23.90625 15.773438 23.90625 15.570312 23.855469 15.421875 C 23.707031 14.671875 23.40625 13.976562 23.007812 13.328125 C 22.609375 12.675781 22.160156 12.128906 21.609375 11.628906 C 21.0625 11.128906 20.460938 10.78125 19.8125 10.480469 C 19.164062 10.183594 18.515625 10.03125 17.867188 9.933594 C 17.515625 9.882812 17.21875 9.882812 16.867188 9.882812 L 16.519531 9.882812 C 16.46875 9.882812 16.417969 9.882812 16.367188 9.882812 C 16.21875 9.882812 16.019531 9.933594 15.871094 9.933594 C 15.222656 10.03125 14.570312 10.28125 14.023438 10.632812 C 13.472656 10.980469 12.976562 11.378906 12.625 11.828125 C 12.226562 12.277344 11.925781 12.828125 11.726562 13.328125 C 11.527344 13.875 11.429688 14.425781 11.378906 14.921875 C 11.378906 15.074219 11.378906 15.171875 11.378906 15.324219 C 11.378906 15.371094 11.378906 15.371094 11.378906 15.421875 L 11.378906 15.523438 C 11.378906 15.570312 11.378906 15.671875 11.378906 15.722656 C 11.429688 15.972656 11.476562 16.269531 11.527344 16.519531 C 11.675781 17.019531 11.925781 17.46875 12.175781 17.867188 C 12.476562 18.265625 12.824219 18.566406 13.175781 18.816406 C 13.523438 19.066406 13.921875 19.265625 14.324219 19.367188 C 14.722656 19.464844 15.070312 19.515625 15.46875 19.515625 C 15.519531 19.515625 15.570312 19.515625 15.621094 19.515625 L 15.71875 19.515625 C 15.769531 19.515625 15.820312 19.515625 15.820312 19.515625 C 15.820312 19.515625 15.820312 19.515625 15.871094 19.515625 L 15.96875 19.515625 C 16.019531 19.515625 16.070312 19.515625 16.121094 19.515625 C 16.167969 19.515625 16.21875 19.515625 16.269531 19.515625 C 16.320312 19.515625 16.320312 19.515625 16.320312 19.515625 L 16.519531 19.515625 C 16.96875 19.515625 17.417969 19.5625 17.816406 19.664062 C 18.664062 19.8125 19.464844 20.113281 20.210938 20.460938 C 20.960938 20.808594 21.609375 21.257812 22.160156 21.707031 C 22.207031 21.757812 22.207031 21.757812 22.257812 21.804688 C 22.308594 21.855469 22.308594 21.855469 22.359375 21.90625 C 22.40625 21.957031 22.507812 22.007812 22.558594 22.105469 C 22.609375 22.15625 22.707031 22.207031 22.757812 22.304688 C 22.808594 22.355469 22.90625 22.457031 22.957031 22.503906 C 23.207031 22.753906 23.40625 23.003906 23.605469 23.253906 C 24.003906 23.753906 24.355469 24.300781 24.605469 24.800781 C 24.605469 24.851562 24.652344 24.851562 24.652344 24.902344 C 24.652344 24.949219 24.703125 24.949219 24.703125 24.999999 C 24.753906 25.050781 24.753906 25.101562 24.804688 25.199219 C 24.855469 25.25 24.855469 25.300781 24.902344 25.398438 C 24.953125 25.449219 24.953125 25.5 25.003906 25.550781 C 25.101562 25.800781 25.203125 26.0 25.253906 26.199219 C 25.351562 26.546875 25.453125 26.847656 25.503906 27.097656 C 25.550781 27.195312 25.652344 27.246094 25.753906 27.246094 C 25.851562 27.246094 25.953125 27.148438 25.953125 27.046875 C 25.800781 26.648438 25.753906 26.347656 25.753906 25.949219 Z M 25.753906 12.328125 "/><\/g></svg>';

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
        <div class="layout">
          <p class="text--black">${errorMessage}</p>
        </div>
        <div class="title_bar">
            ${GRAFANA_LOGO_SVG}
          <span class="title">${title}</span>
        </div>
    `;

  return fullHtml ? getFullHtml(title, errorHtml) : errorHtml;
}

function generateBaseHtmlTemplate(title: string, chartContent: string): string {
  return `
      <script src="https://code.highcharts.com/highcharts.js"></script>
      <script src="https://code.highcharts.com/highcharts-more.js"></script>
      <script src="https://code.highcharts.com/modules/pattern-fill.js"></script>

        <div class="layout">
          <div id="chart" class="w--full h--64"></div>
        </div>
        <div class="title_bar">
            ${GRAFANA_LOGO_SVG}
          <span class="title">${title}</span>
        </div>

      <script>
        ${chartContent}
      </script>
    `;
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

        // Stat panel configuration using Highcharts
        Highcharts.chart("chart", {
          chart: {
            type: "line",
            animation: false,
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
              enableMouseTracking: false,
              states: {
                hover: {
                  enabled: false
                }
              }
            }
          },
          series: [{
            data: [0],
            showInLegend: false,
            marker: {
              enabled: false
            },
            lineWidth: 0,
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
          }],
          credits: {
            enabled: false
          }
        });
    `;

  return generateBaseHtmlTemplate(title, chartContent);
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

        // Gauge chart configuration
        Highcharts.chart("chart", {
          chart: {
            type: "gauge",
            animation: false,
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
            gauge: {
              animation: false,
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
        });
    `;

  return generateBaseHtmlTemplate(title, chartContent);
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

            // Multi-series Highcharts configuration with pattern fills
            Highcharts.chart("chart", {
              chart: {
                type: "spline",
                animation: false,
                spacing: [10, 10, 5, 10],
                height: 203
              },
              title: {
                text: null
              },
              plotOptions: {
                series: {
                  animation: false,
                  enableMouseTracking: false,
                  states: {
                    hover: { enabled: false }
                  },
                  marker: {
                    enabled: false
                  }
                }
              },
              series: chartData,
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
            });
        `;

    return generateBaseHtmlTemplate(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
            var chartData = ${JSON.stringify(chartData)};

            // Single series Highcharts configuration
            Highcharts.chart("chart", {
              chart: {
                type: "spline",
                animation: false,
                spacing: [10, 10, 5, 10],
                height: 203
              },
              title: {
                text: null
              },
              plotOptions: {
                series: {
                  animation: false,
                  enableMouseTracking: false,
                  states: {
                    hover: { enabled: false }
                  },
                  marker: {
                    enabled: false
                  }
                }
              },
              series: [{
                name: "Data",
                data: chartData,
                lineWidth: 4,
                color: "#000000"
              }],
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
            });
        `;

  return generateBaseHtmlTemplate(title, chartContent);
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

            // Multi-series Bar chart Highcharts configuration with pattern fills
            Highcharts.chart("chart", {
              chart: {
                type: "column",
                animation: false,
                spacing: [10, 10, 5, 10]
              },
              title: {
                text: null
              },
              plotOptions: {
                series: {
                  animation: false,
                  enableMouseTracking: false,
                  states: {
                    hover: { enabled: false }
                  }
                }
              },
              series: chartData,
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
            });
        `;

    return generateBaseHtmlTemplate(title, chartContent);
  }

  const chartData = Array.isArray(dataSeries)
    ? dataSeries
    : Object.values(dataSeries)[0];

  const chartContent = `
            var chartData = ${JSON.stringify(chartData)};

            // Convert data to Highcharts format
            var seriesData = [];
            if (Array.isArray(chartData)) {
              seriesData = chartData;
            } else {
              for (var key in chartData) {
                seriesData.push([key, chartData[key]]);
              }
            }

            // Single series Bar chart Highcharts configuration
            Highcharts.chart("chart", {
              chart: {
                type: "column",
                animation: false,
                spacing: [10, 10, 5, 10]
              },
              title: {
                text: null
              },
              plotOptions: {
                series: {
                  animation: false,
                  enableMouseTracking: false,
                  states: {
                    hover: { enabled: false }
                  }
                }
              },
              series: [{
                name: "Data",
                data: seriesData,
                color: "#000000"
              }],
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
            });
        `;

  return generateBaseHtmlTemplate(title, chartContent);
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

        Highcharts.chart("chart", {
          chart: {
            type: "pie",
            animation: false,
            spacing: [10, 10, 5, 10]
          },
          title: {
            text: null
          },
          plotOptions: {
            pie: {
              animation: false,
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
          series: [{
            name: "Data",
            data: pieData
          }],
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          }
        });
    `;

  return generateBaseHtmlTemplate(title, chartContent);
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
            seriesData.push([key, chartData[key]]);
          }
        }

        Highcharts.chart("chart", {
          chart: {
            type: "column",
            animation: false,
            spacing: [10, 10, 5, 10]
          },
          title: {
            text: null
          },
          plotOptions: {
            series: {
              animation: false,
              enableMouseTracking: false,
              states: {
                hover: { enabled: false }
              }
            }
          },
          series: [{
            name: "Data",
            data: seriesData,
            color: "#000000"
          }],
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
        });
    `;

  return generateBaseHtmlTemplate(title, chartContent);
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
