import React from 'react';

export function PiechartChartContent({ chartData }: { chartData: any }) {
  const chartScript = `
        var chartData = ${JSON.stringify(chartData)};
        var patternImages = [];

        if (typeof window !== 'undefined') {
          patternImages = ${JSON.stringify([
            'https://usetrmnl.com/images/grayscale/gray-1.png',
            'https://usetrmnl.com/images/grayscale/black.png',
            'https://usetrmnl.com/images/grayscale/gray-3.png',
            'https://usetrmnl.com/images/grayscale/gray-7.png',
            'https://usetrmnl.com/images/grayscale/gray-2.png',
            'https://usetrmnl.com/images/grayscale/gray-6.png',
            'https://usetrmnl.com/images/grayscale/gray-4.png',
            'https://usetrmnl.com/images/grayscale/gray-5.png',
          ])};
        }

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

  return <script dangerouslySetInnerHTML={{ __html: chartScript }} />;
}
