import React from 'react';
import { Options } from 'highcharts';

const options: Options = {
  chart: {
    height: null,
    type: 'line',
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      animation: false,
    },
    line: {
      enableMouseTracking: false,
      states: {
        hover: {
          enabled: false,
        },
      },
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '120px',
          fontWeight: 'bold',
          color: '#000000',
          textOutline: 'none',
        },
        x: 0,
        y: 0,
        verticalAlign: 'middle',
        align: 'center',
      },
    },
  },
  credits: {
    enabled: false,
  },
};

export function StatChartContent({
  chartData,
  id = 'chart',
}: {
  chartData: any;
  id?: string;
}) {
  const functionString = id.replace(/[^a-zA-Z0-9_]/g, '_');
  return `
        var chartData = ${JSON.stringify(chartData)};

        // Stat panel rendering using Chartkick with Highcharts adapter
        function createChart_${functionString}() {
          new Chartkick.LineChart("${id}", [[1, chartData.value]], {
            adapter: "highcharts",
            thousands: ",",
            points: false,
            colors: ["black"],
            curve: true,
            library: ${JSON.stringify(options)}
          });
        };

        if ("Chartkick" in window) {
          createChart_${functionString}();
        } else {
          window.addEventListener("chartkick:load", createChart_${functionString}, true);
        }`;
}
