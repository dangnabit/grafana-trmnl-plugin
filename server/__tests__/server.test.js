"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const supertest_1 = __importDefault(require("supertest"));
const serverModule = __importStar(require("../src/index"));
const app = serverModule.default;
const testDataDir = path_1.default.resolve(__dirname, "../test_data");
function loadTestData(filename) {
    return JSON.parse(fs_1.default.readFileSync(path_1.default.join(testDataDir, filename), "utf-8"));
}
describe("Grafana TRMNL Plugin Server", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it("renders a stat panel", async () => {
        const testData = loadTestData("stat_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("html");
        expect(response.body).toHaveProperty("generated_at");
        expect(response.body.html).toContain("chart");
    });
    it("renders a gauge panel", async () => {
        const testData = loadTestData("gauge_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body.html).toContain("gauge");
        expect(response.body.html).toContain("chart");
    });
    it("renders a timeseries panel", async () => {
        const testData = loadTestData("timeseries_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body.html).toContain("chart");
    });
    it("renders a bar gauge panel", async () => {
        const testData = loadTestData("bar_gauge_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body.html).toContain("chart");
    });
    it("renders a piechart panel", async () => {
        const testData = loadTestData("piechart_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body.html).toContain("chart");
    });
    it("renders a table panel", async () => {
        const testData = loadTestData("table_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: false });
        expect(response.status).toBe(200);
        expect(response.body.html).toContain("chart");
    });
    it("returns full HTML when full_html=true", async () => {
        const testData = loadTestData("stat_panel_data.json");
        jest.spyOn(serverModule, "_getPanelData").mockResolvedValue(testData);
        const response = await (0, supertest_1.default)(app)
            .post("/render")
            .send({ grafana_token: "test_token", panel_url: "test_url", full_html: true });
        expect(response.status).toBe(200);
        expect(response.headers["content-type"]).toContain("text/html");
        expect(response.text).toContain("<!DOCTYPE html>");
        expect(response.text).toContain("<html>");
    });
});
//# sourceMappingURL=server.test.js.map