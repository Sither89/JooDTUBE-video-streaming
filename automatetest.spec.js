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

  // it('should display Home page', async () => {
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/login')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/login')
  //   await Promise.all([
  //     page.$eval('a[id=homepage]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/upload_vdo')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/upload_vdo')
  //   await Promise.all([
  //     page.$eval('a[id=homepage]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/upload_vdo')
  //   await page.click('button[id=dropbtn]');
  //   await page.click('a[id=logout]');
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/watch_vdo')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/watch_vdo')
  //   await Promise.all([
  //     page.$eval('a[id=homepage]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/watch_vdo')
  //   await page.click('button[id=dropbtn]');
  //   await page.click('a[id=logout]');
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/register')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/register')
  //   await Promise.all([
  //     page.$eval('a[id=homepage]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/course_guest')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/course_student')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')

  //   await page.goto('http://localhost:9090/course')
  //   await Promise.all([
  //     page.$eval('a[id=logo]', element =>
  //       element.click()
  //     ),
  //     await page.waitForNavigation(),
  //   ]);
  //   expect(page.url()).toBe('http://localhost:9090/')
  // })

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


  //================== new test ==================

  // it('if not have Firstname then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=lname]', (el, value) => el.value = value, 'lastname');
  //   await page.$eval('input[id=Username]', (el, value) => el.value = value, 'test');
  //   await page.$eval('input[id=Email]', (el, value) => el.value = value, 'email@mail.com');
  //   await page.$eval('input[id=password]', (el, value) => el.value = value, '123456789');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, '123456789');
  //   await page.$eval('button[id=btnRegister]', form => form.click());
  //   expect(await page.$eval('div[id=fname_error]', el => el.textContent)).toBe('Please enter Firstname')
  // })

  // it('if not have Lastname then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=fname]', (el, value) => el.value = value, 'firstname');
  //   await page.$eval('input[id=Username]', (el, value) => el.value = value, 'test');
  //   await page.$eval('input[id=Email]', (el, value) => el.value = value, 'email');
  //   await page.$eval('input[id=password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('button[id=btnRegister]', form => form.click());
  //   expect(await page.$eval('div[id=lname_error]', el => el.textContent)).toBe('Please enter Lastname')
  // })

  // it('if not have Username then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=fname]', (el, value) => el.value = value, 'firstname');
  //   await page.$eval('input[id=lname]', (el, value) => el.value = value, 'lastname');
  //   await page.$eval('input[id=Email]', (el, value) => el.value = value, 'email');
  //   await page.$eval('input[id=password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('button[id=btnRegister]', form => form.click());
  //   expect(await page.$eval('div[id=user_error]', el => el.textContent)).toBe('Please enter Username')
  // })

  // it('if not have Email then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=fname]', (el, value) => el.value = value, 'firstname');
  //   await page.$eval('input[id=lname]', (el, value) => el.value = value, 'lastname');
  //   await page.$eval('input[id=Username]', (el, value) => el.value = value, 'test');
  //   await page.$eval('input[id=password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('button[id=btnRegister]', form => form.click());
  //   expect(await page.$eval('div[id=email_error]', el => el.textContent)).toBe('Please enter Email')
  // })

  // it('if not have Password then click register expect request', async () => {
  //   await page.goto('http://localhost:9090/register')
  //   await page.$eval('input[id=fname]', (el, value) => el.value = value, 'firstname');
  //   await page.$eval('input[id=lname]', (el, value) => el.value = value, 'lastname');
  //   await page.$eval('input[id=Username]', (el, value) => el.value = value, 'test');
  //   await page.$eval('input[id=Email]', (el, value) => el.value = value, 'email');
  //   await page.$eval('input[id=con_password]', (el, value) => el.value = value, 'password');
  //   await page.$eval('button[id=btnRegister]', form => form.click());
  //   expect(await page.$eval('div[id=pass_error]', el => el.textContent)).toBe('Please enter Password')
  // })
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

  // describe("POST /upload_vdo", () => {
  //   it("test upload video post /upload_vdo", async () => {
  //     const response = await request(baseURL).post("/upload_vdo")
  //       .attach('video', './test-upload/test.mp4')
  //     console.log(response.body)
  //     expect(response.status).toBe(302);
  //   });
  // });

  // describe("POST /upload_vdo wrong path", () => {
  //   it("test upload video post /upload_vdo no path show 'NO file uploaded'", async () => {
  //     const response = await request(baseURL).post("/upload_vdo")
  //       .attach('videos', './test-upload/test.mp4')
  //     console.log(response.body)
  //     expect(response.text).toEqual("Error uploading file.");
  //   });
  // });


  // describe("POST /register", () => {
  //   it("test register post /register", async () => {
  //     const response = await request(baseURL).post("/register")
  //       .send({
  //         fname: "test",
  //         lname: "test",
  //         Username: "test",
  //         Email: "test",
  //         password: "test",
  //         con_password: "test"
  //       })
  //     expect(response.status).toBe(302);
  //   });
  // });

  // describe("POST /register expect to login page", () => {
  //   it("test register post /register expect to login page", async () => {
  //     const response = await request(baseURL).post("/register")
  //       .send({
  //         fname: "test",
  //         lname: "test",
  //         Username: "test",
  //         Email: "test",
  //         password: "test",
  //         con_password: "test"
  //       })
  //     expect(response.header.location).toEqual("/login");
  //   });
  // });

  // describe("POST /register wrong data", () => {
  //   it("test register post /register wrong data shoud thorw exception", async () => {
  //     const response = await request(baseURL).post("/register")
  //       .send({
  //         fname: "test",
  //       })
  //     console.log(response.body)
  //     //throw exception
  //     expect(response.data).toBeUndefined();
  //   });
  // });

});

