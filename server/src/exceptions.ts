export class GrafanaException extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidPanelUrlException extends GrafanaException {
  constructor(message = 'Invalid panel_url') {
    super(message, 400);
  }
}

export class PanelNotFoundException extends GrafanaException {
  constructor(message = 'Panel not found') {
    super(message, 404);
  }
}

export class NoTargetsException extends GrafanaException {
  constructor(message = 'No targets found in panel') {
    super(message, 400);
  }
}

export class GrafanaQueryException extends GrafanaException {
  constructor(message = 'Error querying Grafana') {
    super(message, 500);
  }
}

export class DashboardMetadataException extends GrafanaException {
  constructor(message = 'Error fetching dashboard metadata') {
    super(message, 500);
  }
}
