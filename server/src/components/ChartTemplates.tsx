import React from 'react';
import { GrafanaLogo } from './GrafanaLogo';

export function BaseTemplate({
  chartContent,
}: {
  title: string;
  logoSvg?: React.ReactNode;
  chartContent: string;
}) {
  return (
    <>
      <div id="chart" className="w--full" style={{ maxHeight: '100%' }}></div>

      <div dangerouslySetInnerHTML={{ __html: chartContent }} />
    </>
  );
}

export function Scripts() {
  return (
    <>
      <script src="https://trmnl.com/js/highcharts/12.3.0/highcharts.js"></script>
      <script src="https://trmnl.com/js/highcharts/12.3.0/highcharts-more.js"></script>
      <script src="https://trmnl.com/js/highcharts/12.3.0/pattern-fill.js"></script>
      <script src="https://trmnl.com/js/chartkick/5.0.1/chartkick.min.js"></script>
    </>
  );
}

export function TitleBar({
  title,
  logoSvg = <GrafanaLogo />,
}: {
  title: string;
  logoSvg?: React.ReactNode;
}) {
  return (
    <div className="title_bar">
      {logoSvg}
      <span className="title">{title}</span>
    </div>
  );
}

export function ErrorTemplate({
  title,
  logoSvg = <GrafanaLogo />,
  errorHtml,
}: {
  title: string;
  logoSvg?: React.ReactNode;
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
