import React from 'react';

export function StatChartContent({ chartData }: { chartData: any }) {
  const chartScript = `
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

  return <script dangerouslySetInnerHTML={{ __html: chartScript }} />;
}
