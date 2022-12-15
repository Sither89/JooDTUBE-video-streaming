const request = require("supertest");
const baseURL = "http://localhost:9090"
describe('JoodTUBE End 2 End test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9090/')
  })



  it('should display login page', async () => {
    await page.goto('http://localhost:9090/')
    await Promise.all([
      page.$eval('a[id=loginpage]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/login')
  })


  it('should display login page on button', async () => {
    await page.goto('http://localhost:9090/')
    await page.$eval('a[id=btnloginpage]', form => form.click());
    expect(page.url()).toBe('http://localhost:9090/login')
  })

  it('should display Register page on button', async () => {
    await page.goto('http://localhost:9090/')
    await page.$eval('a[id=btnRegisterpage]', form => form.click());
    expect(page.url()).toBe('http://localhost:9090/register')
  })

  it('should display register page', async () => {
    await page.goto('http://localhost:9090/login')
    await Promise.all([
      page.$eval('a[id=registerpage]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/register')
  })



  it('should display courseguest page', async () => {
    await page.goto('http://localhost:9090/course_guest')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/login')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/register')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
    ]);
    expect(page.url()).toBe('http://localhost:9090/course_guest')
  })


});



describe("BackEndTest", () => {
  it("test / page return 200", async () => {
    const response = await request(baseURL).get("/");
    expect(response.statusCode).toBe(200);
  });


  describe("GET /login", () => {
    it("test /login page should return 200", async () => {
      const response = await request(baseURL).get("/login");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /register", () => {
    it("test /register page should return 200", async () => {
      const response = await request(baseURL).get("/register");
      expect(response.statusCode).toBe(200);
    })
  });

  describe("GET /watch_vdo", () => {
    it("test /watch_vdo page should return 500", async () => {
      const response = await request(baseURL).get("/watch_vdo");
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /upload_vdo", () => {
    it("test /upload_vdo page should return 302", async () => {
      const response = await request(baseURL).get("/upload_vdo");
      expect(response.statusCode).toBe(302);
    });
  });



  describe("GET /works-in-chrome", () => {
    it("test /works-in-chrome page should return 500", async () => {
      const response = await request(baseURL).get("/works-in-chrome");
      expect(response.statusCode).toBe(500);
    });
  });

});

