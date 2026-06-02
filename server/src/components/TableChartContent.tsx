import React from 'react';
import { Options } from 'highcharts';

const options: Options = {
  chart: {
    height: null,
    type: 'column',
    spacing: [10, 10, 5, 10],
  },
  title: {
    text: '',
  },
  plotOptions: {
    series: {
      animation: false,
    },
    column: {
      enableMouseTracking: false,
      states: {
        hover: { enabled: false },
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
    labels: {
      style: { fontSize: '16px', color: '#000000' },
    },
    lineWidth: 0,
    gridLineDashStyle: 'Dot',
    tickWidth: 1,
    tickLength: 0,
    gridLineWidth: 1,
    gridLineColor: '#000000',
    title: {
      text: '',
    },
  },
  credits: {
    enabled: false,
  },
};

export function TableChartContent({ chartData }: { chartData: any }) {
  const seriesData = Array.isArray(chartData)
    ? chartData
    : Object.entries(chartData).map(([key, value]) => [key, value]);
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        var chartData = ${JSON.stringify(seriesData)};

        function createChart() {
        new Chartkick.ColumnChart("chart", chartData, {
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
        }`,
      }}
    />
  );
}
