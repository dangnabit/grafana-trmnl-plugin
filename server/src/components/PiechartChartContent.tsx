import React from 'react';
import { Options } from 'highcharts';

const options: Options = {
  chart: {
    height: null,
    type: 'pie',
    spacing: [10, 10, 5, 10],
  },
  title: {
    text: '',
  },
  plotOptions: {
    series: {
      animation: false,
    },
    pie: {
      enableMouseTracking: false,
      states: {
        hover: { enabled: false },
      },
      dataLabels: {
        enabled: true,
        distance: 30,
        style: {
          fontSize: '14px',
          color: '#000000',
          fontWeight: '400',
        },
      },
      showInLegend: false,
      borderWidth: 0,
      innerSize: 0,
      size: '85%',
    },
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export function PiechartChartContent({
  chartData,
  id = 'chart',
}: {
  chartData: any;
  id?: string;
}) {
  return `
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

        function createChart() {
          new Chartkick.PieChart("${id}", pieData, {
            adapter: "highcharts",
            thousands: ",",
            points: false,
            colors: ["black"],
            curve: true,
            library: ${JSON.stringify(options)}
          });
        };

        if ("Chartkick" in window) {
          createChart();
        } else {
          window.addEventListener("chartkick:load", createChart, true);
        }
    `;
}
