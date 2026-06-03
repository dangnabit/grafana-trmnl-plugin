import React from 'react';
import { Options } from 'highcharts';

const options: Options = {
  chart: {
    height: null,
    type: 'spline',
    spacing: [10, 10, 5, 10],
  },
  title: {
    text: '',
  },
  plotOptions: {
    series: {
      animation: false,
    },
    line: {
      enableMouseTracking: false,
      states: {
        hover: { enabled: false },
      },
      marker: {
        enabled: false,
      },
    },
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    labels: {
      style: { fontSize: '16px', color: '#000000' },
    },
    gridLineDashStyle: 'ShortDot',
    gridLineWidth: 1,
    gridLineColor: '#000000',
    tickAmount: 5,
    title: {
      text: '',
    },
  },
  xAxis: {
    type: 'datetime',
    labels: {
      style: { fontSize: '16px', color: '#000000' },
      padding: 5,
      y: 25,
    },
    lineWidth: 0,

    tickWidth: 1,
    tickLength: 0,
    gridLineWidth: 1,
    gridLineColor: '#000000',
    tickPixelInterval: 120,
    title: {
      text: null,
    },
  },
  credits: {
    enabled: false,
  },
};

export function TimeseriesChartContent({
  chartData,
  id = 'chart',
}: {
  chartData: any;
  id?: string;
}) {
  const cleanId = id.replace(/[^a-zA-Z0-9_]/g, '_');
  return ` 
      var chartData_${cleanId} = ${JSON.stringify(chartData)};
      function createChart_${cleanId}() {
      
      new Chartkick.LineChart("${cleanId}", chartData_${cleanId}, {
        adapter: 'highcharts',
        thousands: ',',
        points: false,
        colors: ['black'],
        curve: true,
        library: ${JSON.stringify(options)},
      });
    }

    if ('Chartkick' in window) {
      createChart_${cleanId}();
    } else {
      window.addEventListener('chartkick:load', createChart_${cleanId}, true);
    }`;
}
