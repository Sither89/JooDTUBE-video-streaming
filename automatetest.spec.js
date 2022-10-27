describe('JoodTUBE', () => {
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
    expect( page.url() ).toBe('http://localhost:9090/login')
  })

  it('should display login page on button', async () => {
    await page.goto('http://localhost:9090/')
    await page.$eval( 'a[id=btnloginpage]', form => form.click() );
    expect( page.url() ).toBe('http://localhost:9090/login')
  })

  it('should display Register page on button', async () => {
    await page.goto('http://localhost:9090/')
    await page.$eval( 'a[id=btnRegisterpage]', form => form.click() );
    expect( page.url() ).toBe('http://localhost:9090/register')
  })

  it('should display register page', async () => {
    await page.goto('http://localhost:9090/login')
    await Promise.all([  
      page.$eval('a[id=registerpage]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/register')
  })

  
  it('should display Home page', async () => {
    await Promise.all([  
      page.$eval('a#logo', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/login')
    await Promise.all([  
      page.$eval('a#logo', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/login')
    await Promise.all([  
      page.$eval('a#homepage', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/upload_vdo')
    await Promise.all([  
    page.$eval('a#logo', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')
  
    await page.goto('http://localhost:9090/upload_vdo')
    await Promise.all([  
      page.$eval('a#homepage', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/upload_vdo')
    await page.click('button[id=dropbtn]');
    await page.click('a[id=logout]');
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/watch_vdo')
    await Promise.all([  
    page.$eval('a#logo', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')
  
    await page.goto('http://localhost:9090/watch_vdo')
    await Promise.all([  
      page.$eval('a#homepage', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/watch_vdo')
    await page.click('button[id=dropbtn]');
    await page.click('a[id=logout]');
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/register')
    await Promise.all([  
      page.$eval('a#logo', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/register')
    await Promise.all([  
      page.$eval('a#homepage', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')
  })

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


})