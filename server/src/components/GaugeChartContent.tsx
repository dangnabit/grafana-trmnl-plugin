import React from 'react';
import { Options } from 'highcharts';

const options = (value: number): Options => ({
  chart: {
    height: null,
    type: 'gauge',
    spacing: [10, 10, 5, 10],
  },
  title: {
    text: '',
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },
  plotOptions: {
    series: {
      animation: false,
    },
    gauge: {
      pivot: {
        backgroundColor: 'transparent',
      },
      dial: {
        backgroundColor: 'transparent',
        baseWidth: 0,
      },
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    minorTickInterval: 0,
    tickColor: '#000000',
    tickLength: 40,
    tickPixelInterval: 40,
    tickWidth: 2,
    lineWidth: 0,
    title: {
      text: '',
    },
    labels: {
      distance: 15,
      style: {
        fontSize: '16px',
        color: '#000000',
      },
    },
    plotBands: [
      {
        from: 1,
        to: value,
        color: '#666666',
        innerRadius: '82%',
        borderRadius: '50%',
      },
      {
        from: value + 1,
        to: 100,
        color: '#CCCCCC',
        innerRadius: '82%',
        borderRadius: '50%',
      },
    ],
  },
  series: [
    {
      name: 'Value',
      data: [value],
      dataLabels: {
        format: '{point.y:.2f}',
        borderWidth: 0,
        style: {
          fontSize: '2em',
          fontWeight: '400',
          color: '#000000',
        },
      },
    },
  ],
  credits: {
    enabled: false,
  },
});

export function GaugeChartContent({ chartData }: { chartData: any }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        var chartData = ${JSON.stringify(chartData)};

        // Gauge panel rendering using Chartkick with Highcharts adapter
        function createChart() {
          new Chartkick.LineChart("chart", [[1, chartData.value]], {
            adapter: "highcharts",
            thousands: ",",
            points: false,
            colors: ["black"],
            curve: true,
            library: ${JSON.stringify(options(chartData.value))}
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
