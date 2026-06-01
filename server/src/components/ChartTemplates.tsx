import React from 'react';

export function BaseTemplate({
  title,
  logoSvg,
  chartContent,
}: {
  title: string;
  logoSvg: React.ReactNode;
  chartContent: string;
}) {
  return (
    <>
      <script src="https://code.highcharts.com/highcharts.js"></script>
      <script src="https://code.highcharts.com/highcharts-more.js"></script>
      <script src="https://code.highcharts.com/modules/pattern-fill.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chartkick/4.1.1/chartkick.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chartkick/4.1.1/chartkick.highcharts.min.js"></script>

      <div className="layout">
        <div id="chart" className="w--full h--64"></div>
      </div>
      <div className="title_bar">
        {logoSvg}
        <span className="title">{title}</span>
      </div>

      <script dangerouslySetInnerHTML={{ __html: chartContent }} />
    </>
  );
}

export function ErrorTemplate({
  title,
  logoSvg,
  errorHtml,
}: {
  title: string;
  logoSvg: React.ReactNode;
  errorHtml: string;
}) {
  return (
    <>
      <div className="layout">
        <div dangerouslySetInnerHTML={{ __html: errorHtml }} />
      </div>
      <div className="title_bar">
        {logoSvg}
        <span className="title">{title}</span>
      </div>
    </>
  );
}

export default BaseTemplate;
