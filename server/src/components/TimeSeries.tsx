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

export function TimeseriesChartContent({ chartData }: { chartData: any }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: ` 
      var chartData = ${JSON.stringify(chartData)};
      function createChart() {
      
      new Chartkick.LineChart('chart', chartData, {
        adapter: 'highcharts',
        thousands: ',',
        points: false,
        colors: ['black'],
        curve: true,
        library: ${JSON.stringify(options)},
      });
    }

    if ('Chartkick' in window) {
      createChart();
    } else {
      window.addEventListener('chartkick:load', createChart, true);
    }`,
      }}
    />
  );
}
