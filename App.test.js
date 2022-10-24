const request = require("supertest")
const baseURL = "http://localhost:9090"

describe("GET /", () => {
    it("test / page return 200", async () => {
        const response = await request(baseURL).get("/");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /login", () => {
    it("test /login page should return 200", async () => {
        const response = await request(baseURL).get("/login");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /watch_vdo", () => {
    it("test /watch_vdo page should return 200", async () => {
        const response = await request(baseURL).get("/watch_vdo");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /upload_vdo", () => {
    it("test /upload_vdo page should return 200", async () => {
        const response = await request(baseURL).get("/upload_vdo");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /register", () => {
    it("test /register page should return 200", async () => {
        const response = await request(baseURL).get("/register");
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /works-in-chrome", () => {
    it("test /works-in-chrome page should return 200", async () => {
        const response = await request(baseURL).get("/works-in-chrome");
        expect(response.statusCode).toBe(200);
    });
});

describe("POST /upload-vdo", () => {
    it("test upload video post /upload-vdo", async () => {
        const response = await request(baseURL).post("/upload-vdo")
            .attach('video', './test-upload/test.mp4')
            console.log(response.body)
        expect(response.status).toBe(200);
    });
});

describe("POST /upload-vdo wrong path", () => {
    it("test upload video post /upload-vdo no path show 'NO file uploaded'", async () => {
        const response = await request(baseURL).post("/upload-vdo")
            .attach('videos', './test-upload/test.mp4')
            console.log(response.body)
        expect(response.text).toEqual("Error uploading file.");
    });
});
