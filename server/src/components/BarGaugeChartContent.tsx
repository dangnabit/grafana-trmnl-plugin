import React from 'react';

export function BarGaugeChartContent({ chartData }: { chartData: any }) {
  const chartScript = `
            var chartData = ${JSON.stringify(chartData)};

            // Convert data to chart format for Chartkick
            var seriesData = [];
            if (Array.isArray(chartData) && chartData.length > 0 && chartData[0] && typeof chartData[0] === 'object' && 'name' in chartData[0]) {
              seriesData = chartData;
            } else if (Array.isArray(chartData)) {
              seriesData = chartData;
            } else {
              for (var key in chartData) {
                if (Object.prototype.hasOwnProperty.call(chartData, key)) {
                  seriesData.push([key, chartData[key]]);
                }
              }
            }

            // Bar gauge rendered with Chartkick + Highcharts adapter
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

  return <script dangerouslySetInnerHTML={{ __html: chartScript }} />;
}
