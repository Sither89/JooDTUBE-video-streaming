const request = require("supertest")
const baseURL = "http://localhost:9090"



describe("GET /", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /login", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/login");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /watch_vdo", () => {
    it("should return 400", async () => {
        const response = await request(baseURL).get("/watch_vdo");
        expect(response.statusCode).toBe(400);
    });
});

describe("GET /upload_vdo", () => {
    it("should return 400", async () => {
        const response = await request(baseURL).get("/upload_vdo");
        expect(response.statusCode).toBe(400);
    });
});

describe("POST /upload-vdo", () => {
    it("Uploaded success should return 200", async () => {
        const response = await request(baseURL).post("/upload-vdo")
            .attach(
                'video', './test-upload/test.mp4'
            )
        expect(response.statusCode).toBe(200)
    });
});
