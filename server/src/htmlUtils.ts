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
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="28px" viewBox="0 0 26 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(3.921569%,3.921569%,3.921569%);fill-opacity:1;" d="M 25.753906 12.328125 C 25.703125 11.878906 25.652344 11.328125 25.453125 10.730469 C 25.304688 10.132812 25.054688 9.484375 24.753906 8.785156 C 24.40625 8.136719 23.957031 7.386719 23.40625 6.738281 C 23.207031 6.488281 22.957031 6.1875 22.65625 5.9375 C 23.058594 4.390625 22.160156 3.042969 22.160156 3.042969 C 20.660156 2.945312 19.714844 3.492188 19.363281 3.792969 C 19.3125 3.792969 19.265625 3.742188 19.164062 3.695312 C 18.914062 3.59375 18.664062 3.492188 18.367188 3.394531 C 18.066406 3.292969 17.816406 3.246094 17.515625 3.144531 C 17.21875 3.09375 16.96875 3.042969 16.667969 2.996094 C 16.617188 2.996094 16.570312 2.996094 16.519531 2.996094 C 15.871094 0.898438 14.023438 0 14.023438 0 C 11.925781 1.347656 11.527344 3.195312 11.527344 3.195312 C 11.527344 3.195312 11.527344 3.246094 11.527344 3.292969 C 11.429688 3.34375 11.277344 3.34375 11.179688 3.394531 C 11.027344 3.445312 10.878906 3.492188 10.679688 3.542969 C 10.53125 3.59375 10.378906 3.644531 10.179688 3.742188 C 9.878906 3.894531 9.53125 4.042969 9.230469 4.191406 C 8.933594 4.34375 8.632812 4.542969 8.332031 4.742188 C 8.285156 4.742188 8.285156 4.691406 8.285156 4.691406 C 5.386719 3.59375 2.792969 4.941406 2.792969 4.941406 C 2.542969 8.085938 3.941406 10.03125 4.242188 10.382812 C 4.191406 10.582031 4.089844 10.78125 4.039062 10.980469 C 3.839844 11.679688 3.640625 12.378906 3.542969 13.125 C 3.542969 13.226562 3.542969 13.328125 3.542969 13.425781 C 0.847656 14.773438 0.046875 17.46875 0.046875 17.46875 C 2.292969 20.0625 4.890625 20.214844 4.890625 20.214844 C 5.238281 20.8125 5.589844 21.363281 6.039062 21.910156 C 6.238281 22.109375 6.386719 22.359375 6.585938 22.558594 C 5.789062 24.90625 6.6875 26.851562 6.6875 26.851562 C 9.183594 26.953125 10.828125 25.753906 11.179688 25.503906 C 11.429688 25.605469 11.675781 25.652344 11.925781 25.753906 C 12.675781 25.953125 13.472656 26.054688 14.273438 26.101562 C 14.472656 26.101562 14.671875 26.101562 14.871094 26.101562 L 15.269531 26.101562 C 16.46875 27.800781 18.515625 28 18.515625 28 C 19.960938 26.453125 20.0625 24.90625 20.0625 24.554688 C 20.0625 24.507812 20.0625 24.507812 20.0625 24.507812 L 20.0625 24.457031 C 20.363281 24.257812 20.660156 24.007812 20.960938 23.757812 C 21.558594 23.207031 22.058594 22.609375 22.507812 21.960938 C 22.558594 21.910156 22.609375 21.859375 22.609375 21.761719 C 24.253906 21.859375 25.453125 20.714844 25.453125 20.714844 C 25.152344 18.964844 24.203125 18.117188 24.003906 17.96875 C 24.003906 17.96875 24.003906 17.96875 23.957031 17.96875 C 23.957031 17.867188 23.957031 17.769531 23.957031 17.667969 C 23.957031 17.46875 23.957031 17.320312 23.957031 17.121094 L 23.957031 16.871094 C 23.957031 16.820312 23.957031 16.820312 23.957031 16.820312 L 23.957031 16.570312 C 23.957031 16.519531 23.957031 16.46875 23.957031 16.421875 C 23.957031 16.371094 23.957031 16.320312 23.957031 16.269531 L 23.957031 15.972656 C 23.90625 15.773438 23.90625 15.570312 23.855469 15.421875 C 23.707031 14.671875 23.40625 13.976562 23.007812 13.328125 C 22.609375 12.675781 22.160156 12.128906 21.609375 11.628906 C 21.0625 11.128906 20.460938 10.78125 19.8125 10.480469 C 19.164062 10.183594 18.515625 10.03125 17.867188 9.933594 C 17.515625 9.882812 17.21875 9.882812 16.867188 9.882812 L 16.519531 9.882812 C 16.46875 9.882812 16.417969 9.882812 16.367188 9.882812 C 16.21875 9.882812 16.019531 9.933594 15.871094 9.933594 C 15.222656 10.03125 14.570312 10.28125 14.023438 10.632812 C 13.472656 10.980469 12.976562 11.378906 12.625 11.828125 C 12.226562 12.277344 11.925781 12.828125 11.726562 13.328125 C 11.527344 13.875 11.429688 14.425781 11.378906 14.921875 C 11.378906 15.074219 11.378906 15.171875 11.378906 15.324219 C 11.378906 15.371094 11.378906 15.371094 11.378906 15.421875 L 11.378906 15.523438 C 11.378906 15.570312 11.378906 15.671875 11.378906 15.722656 C 11.429688 15.972656 11.476562 16.269531 11.527344 16.519531 C 11.675781 17.019531 11.925781 17.46875 12.175781 17.867188 C 12.476562 18.265625 12.824219 18.566406 13.175781 18.816406 C 13.523438 19.066406 13.921875 19.265625 14.324219 19.367188 C 14.722656 19.464844 15.070312 19.515625 15.46875 19.515625 C 15.519531 19.515625 15.570312 19.515625 15.621094 19.515625 L 15.71875 19.515625 C 15.769531 19.515625 15.820312 19.515625 15.820312 19.515625 C 15.820312 19.515625 15.820312 19.515625 15.871094 19.515625 L 15.96875 19.515625 C 16.019531 19.515625 16.070312 19.515625 16.121094 19.515625 C 16.167969 19.515625 16.21875 19.515625 16.269531 19.464844 C 16.367188 19.464844 16.417969 19.414062 16.519531 19.414062 C 16.667969 19.367188 16.816406 19.316406 16.96875 19.214844 C 17.117188 19.164062 17.21875 19.066406 17.367188 18.964844 C 17.417969 18.964844 17.417969 18.917969 17.46875 18.867188 C 17.617188 18.765625 17.617188 18.566406 17.515625 18.46875 C 17.417969 18.367188 17.265625 18.316406 17.167969 18.417969 C 17.117188 18.417969 17.117188 18.46875 17.066406 18.46875 C 16.96875 18.515625 16.867188 18.566406 16.71875 18.617188 C 16.617188 18.667969 16.46875 18.667969 16.367188 18.714844 C 16.320312 18.714844 16.21875 18.714844 16.167969 18.714844 C 16.121094 18.714844 16.121094 18.714844 16.070312 18.714844 C 16.019531 18.714844 16.019531 18.714844 15.96875 18.714844 C 15.917969 18.714844 15.917969 18.714844 15.871094 18.714844 C 15.820312 18.714844 15.769531 18.714844 15.769531 18.714844 L 15.671875 18.714844 C 15.621094 18.714844 15.621094 18.714844 15.570312 18.714844 C 15.269531 18.667969 15.019531 18.617188 14.722656 18.46875 C 14.421875 18.367188 14.171875 18.167969 13.921875 17.96875 C 13.671875 17.769531 13.472656 17.519531 13.324219 17.21875 C 13.175781 16.917969 13.023438 16.621094 12.976562 16.269531 C 12.925781 16.121094 12.925781 15.921875 12.925781 15.773438 C 12.925781 15.722656 12.925781 15.671875 12.925781 15.621094 L 12.925781 15.523438 C 12.925781 15.421875 12.925781 15.324219 12.976562 15.222656 C 13.125 14.472656 13.472656 13.777344 14.074219 13.226562 C 14.222656 13.078125 14.371094 12.976562 14.523438 12.828125 C 14.671875 12.726562 14.871094 12.628906 15.019531 12.527344 C 15.222656 12.429688 15.371094 12.378906 15.570312 12.328125 C 15.769531 12.277344 15.96875 12.226562 16.167969 12.226562 C 16.269531 12.226562 16.367188 12.226562 16.46875 12.226562 C 16.519531 12.226562 16.519531 12.226562 16.519531 12.226562 L 16.769531 12.226562 C 16.96875 12.226562 17.21875 12.277344 17.417969 12.328125 C 17.867188 12.429688 18.265625 12.578125 18.664062 12.777344 C 19.464844 13.226562 20.113281 13.875 20.511719 14.722656 C 20.710938 15.121094 20.859375 15.570312 20.910156 16.019531 C 20.910156 16.121094 20.960938 16.269531 20.960938 16.371094 L 20.960938 16.570312 C 20.960938 16.621094 20.960938 16.621094 20.960938 16.671875 C 20.960938 16.71875 20.960938 16.71875 20.960938 16.769531 L 20.960938 16.96875 C 20.960938 17.019531 20.960938 17.121094 20.960938 17.167969 C 20.960938 17.320312 20.960938 17.417969 20.910156 17.570312 C 20.910156 17.667969 20.859375 17.816406 20.859375 17.917969 C 20.859375 18.019531 20.8125 18.167969 20.761719 18.265625 C 20.710938 18.515625 20.613281 18.765625 20.511719 18.964844 C 20.3125 19.414062 20.0625 19.863281 19.761719 20.265625 C 19.164062 21.0625 18.367188 21.761719 17.417969 22.160156 C 16.96875 22.359375 16.46875 22.511719 15.96875 22.609375 C 15.71875 22.660156 15.46875 22.660156 15.222656 22.710938 L 14.972656 22.710938 C 15.019531 22.710938 14.972656 22.710938 14.972656 22.710938 C 14.820312 22.710938 14.722656 22.710938 14.570312 22.710938 C 14.023438 22.660156 13.472656 22.558594 12.976562 22.410156 C 12.476562 22.261719 11.976562 22.0625 11.476562 21.8125 C 10.53125 21.3125 9.679688 20.613281 9.03125 19.765625 C 8.683594 19.367188 8.382812 18.917969 8.183594 18.417969 C 7.933594 17.96875 7.734375 17.46875 7.632812 16.917969 C 7.484375 16.421875 7.386719 15.871094 7.386719 15.371094 L 7.386719 14.625 C 7.386719 14.574219 7.386719 14.472656 7.386719 14.425781 C 7.386719 14.175781 7.433594 13.925781 7.433594 13.625 C 7.484375 13.375 7.535156 13.078125 7.585938 12.828125 C 7.632812 12.578125 7.683594 12.277344 7.785156 12.027344 C 7.933594 11.53125 8.132812 11.03125 8.332031 10.53125 C 8.78125 9.582031 9.332031 8.734375 10.03125 8.085938 C 10.179688 7.9375 10.378906 7.734375 10.578125 7.585938 C 10.777344 7.4375 10.980469 7.285156 11.179688 7.1875 C 11.378906 7.039062 11.578125 6.9375 11.777344 6.835938 C 11.878906 6.789062 11.976562 6.738281 12.078125 6.6875 C 12.125 6.6875 12.175781 6.636719 12.226562 6.636719 C 12.277344 6.636719 12.328125 6.589844 12.375 6.589844 C 12.574219 6.488281 12.824219 6.4375 13.023438 6.339844 C 13.074219 6.339844 13.125 6.289062 13.175781 6.289062 C 13.222656 6.289062 13.273438 6.238281 13.324219 6.238281 C 13.425781 6.1875 13.574219 6.1875 13.671875 6.140625 C 13.722656 6.140625 13.773438 6.089844 13.824219 6.089844 C 13.875 6.089844 13.921875 6.089844 13.972656 6.039062 C 14.023438 6.039062 14.074219 6.039062 14.171875 5.988281 L 14.371094 5.988281 C 14.421875 5.988281 14.472656 5.988281 14.570312 5.9375 C 14.621094 5.9375 14.722656 5.9375 14.773438 5.890625 C 14.820312 5.890625 14.921875 5.890625 14.972656 5.890625 C 15.019531 5.890625 15.070312 5.890625 15.121094 5.890625 L 15.320312 5.890625 C 15.371094 5.890625 15.46875 5.890625 15.519531 5.890625 L 15.621094 5.890625 C 15.621094 5.890625 15.671875 5.890625 15.621094 5.890625 L 15.671875 5.890625 C 15.71875 5.890625 15.769531 5.890625 15.820312 5.890625 C 16.070312 5.890625 16.269531 5.890625 16.519531 5.890625 C 16.96875 5.890625 17.417969 5.9375 17.816406 6.039062 C 18.664062 6.1875 19.464844 6.488281 20.210938 6.835938 C 20.960938 7.1875 21.609375 7.636719 22.160156 8.085938 C 22.207031 8.136719 22.207031 8.136719 22.257812 8.183594 C 22.308594 8.234375 22.308594 8.234375 22.359375 8.285156 C 22.40625 8.335938 22.507812 8.386719 22.558594 8.484375 C 22.609375 8.535156 22.707031 8.585938 22.757812 8.683594 C 22.808594 8.734375 22.90625 8.835938 22.957031 8.882812 C 23.207031 9.132812 23.40625 9.382812 23.605469 9.632812 C 24.003906 10.132812 24.355469 10.679688 24.605469 11.179688 C 24.605469 11.230469 24.652344 11.230469 24.652344 11.28125 C 24.652344 11.328125 24.703125 11.328125 24.703125 11.378906 C 24.753906 11.429688 24.753906 11.480469 24.804688 11.578125 C 24.855469 11.628906 24.855469 11.679688 24.902344 11.777344 C 24.953125 11.828125 24.953125 11.878906 25.003906 11.929688 C 25.101562 12.179688 25.203125 12.378906 25.253906 12.578125 C 25.351562 12.925781 25.453125 13.226562 25.503906 13.476562 C 25.550781 13.574219 25.652344 13.625 25.753906 13.625 C 25.851562 13.625 25.953125 13.527344 25.953125 13.425781 C 25.800781 13.027344 25.753906 12.726562 25.753906 12.328125 Z M 25.753906 12.328125 "/></g></svg>';

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
      <script src="https://trmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
      <script src="https://trmnl.com/js/highcharts/12.3.0/highcharts-more.js"></script>
      <script src="https://trmnl.com/js/highcharts/12.3.0/pattern-fill.js"></script>
      <script src="https://trmnl.com/js/chartkick/5.0.1/chartkick.min.js"></script>

        <div class="layout">
          <div id="chart" class="w--full h--64"></div>
        </div>
        <div class="title_bar">
            ${GRAFANA_LOGO_SVG}
          <span class="title">${title}</span>
        </div>

      <script>
        ${chartContent}
          // ensure your chart loads before plugin render is generated
  if ("Chartkick" in window) {
    createChart();
  } else {
    window.addEventListener("chartkick:load", createChart, true);
  }
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

        // Stat panel rendering using Chartkick with Highcharts adapter
        var createChart = function() {
        new Chartkick.LineChart("chart", [[1, chartData.value]], {
          adapter: "highcharts",
           prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            animation: false,
            chart: {
              height: null,
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
              line: {
                animation: false,
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

        // Gauge panel rendering using Chartkick with Highcharts adapter
        var createChart = function() {
        new Chartkick.LineChart("chart", [[1, chartData.value]], {
          adapter: "highcharts",
           prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            animation: false,
            chart: {
              height: null,
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

            // Multi-series timeseries rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.LineChart("chart", chartData, {
              adapter: "highcharts",
               prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                animation: false,
                chart: {
                  height: null,
                  type: "spline",
                  animation: false,
                  spacing: [10, 10, 5, 10],
                  height: 203
                },
                title: {
                  text: null
                },
                plotOptions: {
                  line: {
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
        `;

    return generateBaseHtmlTemplate(title, chartContent);
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
               prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                animation: false,
                chart: {
                  height: null,
                  type: "spline",
                  animation: false,
                  spacing: [10, 10, 5, 10],
                  height: 203
                },
                title: {
                  text: null
                },
                plotOptions: {
                  line: {
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
}

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

            // Multi-series bar gauge rendered with Chartkick + Highcharts adapter
            var createChart = function() {
            new Chartkick.ColumnChart("chart", chartData, {
              adapter: "highcharts",
               prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                animation: false,
                chart: {
                  height: null,
                  type: "column",
                  animation: false,
                  spacing: [10, 10, 5, 10]
                },
                title: {
                  text: null
                },
                plotOptions: {
                  column: {
                    animation: false,
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
        `;

    return generateBaseHtmlTemplate(title, chartContent);
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
               prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
              library: {
                animation: false,
                chart: {
                  height: null,
                  type: "column",
                  animation: false,
                  spacing: [10, 10, 5, 10]
                },
                title: {
                  text: null
                },
                plotOptions: {
                  column: {
                    animation: false,
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

        var createChart = function() {
        new Chartkick.PieChart("chart", pieData, {
          adapter: "highcharts",
           prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            animation: false,
            chart: {
              height: null,
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
            if (Object.prototype.hasOwnProperty.call(chartData, key)) {
              seriesData.push([key, chartData[key]]);
            }
          }
        }

        var createChart = function() {
        new Chartkick.ColumnChart("chart", seriesData, {
          adapter: "highcharts",
           prefix: "",
              thousands: ",",
              points: false,
              colors: ["black"],
              curve: true,
          library: {
            animation: false,
            chart: {
              height: null,
              type: "column",
              animation: false,
              spacing: [10, 10, 5, 10]
            },
            title: {
              text: null
            },
            plotOptions: {
              column: {
                animation: false,
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
