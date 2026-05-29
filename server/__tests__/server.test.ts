import fs from 'fs';
import path from 'path';
import request from 'supertest';
import * as serverModule from '../src/index';
import * as grafanaUtils from '../src/grafanaUtils';

const app = serverModule.default;
const testDataDir = path.resolve(__dirname, '../test_data');

function loadTestData(filename: string) {
  return JSON.parse(fs.readFileSync(path.join(testDataDir, filename), 'utf-8'));
}

function mockPanelBehavior(
  panelType: string,
  panelTitle: string,
  dataSeries: any,
) {
  jest.spyOn(grafanaUtils, 'parsePanelUrl').mockReturnValue({
    host: 'https://grafana.example.com',
    uid: 'abc123',
    panelId: '1',
    variables: {},
  });

  jest.spyOn(grafanaUtils, 'getDashboardMetadata').mockResolvedValue({
    dashboard: {
      panels: [
        {
          id: 1,
          title: panelTitle,
          type: panelType,
          targets: [
            {
              refId: 'A',
              format: panelType === 'table' ? 'table' : 'time_series',
              expr: 'test',
            },
          ],
        },
      ],
    },
  });

  jest
    .spyOn(grafanaUtils, 'applyTemplateVariables')
    .mockImplementation((data) => data);
  jest
    .spyOn(grafanaUtils, 'queryGrafanaPanel')
    .mockResolvedValue([{}, dataSeries]);
}

describe('Grafana TRMNL Plugin Server', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a stat panel', async () => {
    const testData = loadTestData('stat_panel_data.json');
    mockPanelBehavior('stat', 'Stat Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('html');
    expect(response.body).toHaveProperty('generated_at');
    expect(response.body.html).toContain('chart');
  });

  it('renders a gauge panel', async () => {
    const testData = loadTestData('gauge_panel_data.json');
    mockPanelBehavior('gauge', 'Gauge Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.html).toContain('gauge');
    expect(response.body.html).toContain('chart');
  });

  it('renders a timeseries panel', async () => {
    const testData = loadTestData('timeseries_panel_data.json');
    mockPanelBehavior('timeseries', 'Timeseries Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.html).toContain('chart');
  });

  it('renders a bar gauge panel', async () => {
    const testData = loadTestData('bar_gauge_panel_data.json');
    mockPanelBehavior('bar gauge', 'Bar Gauge Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.html).toContain('chart');
  });

  it('renders a piechart panel', async () => {
    const testData = loadTestData('piechart_panel_data.json');
    mockPanelBehavior('piechart', 'Piechart Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.html).toContain('chart');
  });

  it('renders a table panel', async () => {
    const testData = loadTestData('table_panel_data.json');
    mockPanelBehavior('table', 'Table Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: false,
    });

    expect(response.status).toBe(200);
    expect(response.body.html).toContain('chart');
  });

  it('returns full HTML when full_html=true', async () => {
    const testData = loadTestData('stat_panel_data.json');
    mockPanelBehavior('stat', 'Stat Panel', testData.data_series);

    const response = await request(app).post('/render').send({
      grafana_token: 'test_token',
      panel_url:
        'https://grafana.example.com/d/abc123/my-dashboard?orgId=1&viewPanel=1',
      full_html: true,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('text/html');
    expect(response.text).toContain('<!DOCTYPE html>');
    expect(response.text).toContain('<html>');
  });
});
