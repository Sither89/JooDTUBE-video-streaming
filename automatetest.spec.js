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
      page.$eval('a[id=logo]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/login')
    await Promise.all([
      page.$eval('a[id=logo]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/login')
    await Promise.all([
      page.$eval('a[id=homepage]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/upload_vdo')
    await Promise.all([
      page.$eval('a[id=logo]', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/upload_vdo')
    await Promise.all([
      page.$eval('a[id=homepage]', element =>
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
    page.$eval('a[id=logo]', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/watch_vdo')
    await Promise.all([
      page.$eval('a[id=homepage]', element =>
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
      page.$eval('a[id=logo]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/register')
    await Promise.all([
      page.$eval('a[id=homepage]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/course_guest')
    await Promise.all([
      page.$eval('a[id=logo]', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/course_student')
    await Promise.all([
      page.$eval('a[id=logo]', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')

    await page.goto('http://localhost:9090/course')
    await Promise.all([
      page.$eval('a[id=logo]', element =>
      element.click()
    ),
    await page.waitForNavigation(),
    ]);
    expect( page.url() ).toBe('http://localhost:9090/')
  })

  it('should display courseguest page', async () => {
    await page.goto('http://localhost:9090/course_guest')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/login')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/course_guest')

    await page.goto('http://localhost:9090/register')
    await Promise.all([
      page.$eval('a[id=courseguest]', element =>
        element.click()
      ),
      await page.waitForNavigation(),
      ]);
    expect( page.url() ).toBe('http://localhost:9090/course_guest')

    
  })

  //================== new test ==================

  it('if not have Firstname then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=status]', el => el.textContent) ).toBe('request')
  })

  it('if not have Lastname then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=status]', el => el.textContent) ).toBe('request')
  })

  it('if not have Username then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=status]', el => el.textContent) ).toBe('request')
  })

  it('if not have Email then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=status]', el => el.textContent) ).toBe('request')
  })

  it('if not have Password then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=status]', el => el.textContent) ).toBe('request')
  })

  const request = require("supertest")
const baseURL = "http://localhost:9090"

describe("BackEndTest GET /", () => {
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


describe("POST /register", () => {
  it("test register post /register", async () => {
      const response = await request(baseURL).post("/register")
          .send({
              fname: "test",
              lname: "test",
              Username: "test",
              Email: "test",
              password: "test",
              con_password: "test"
          })
          console.log(response.body)
      expect(response.status).toBe(200);
  });
});

describe("POST /register expect to login page", () => {
  it("test register post /register expect to login page", async () => {
      const response = await request(baseURL).post("/register")
          .send({
              fname: "test",
              lname: "test",
              Username: "test",
              Email: "test",
              password: "test",
              con_password: "test"
          })
          console.log(response.body)
      expect(response.text).toEqual(
`<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="views/assets/Login.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<script src="https://kit.fontawesome.com/b99e675b6e.js">

</script>

<body>
    <div class="TabBar">
        <header>
            <div class="logo">
                <a href="/" id="logo"><img href="/"
                        src="https://media.discordapp.net/attachments/1013480789062713488/1022162140867596410/unknown.png"
                        width="150" height="50"></a>
            </div>
            </form>
            <nav>
                <ul class="nav_links">
                    <li><a href="/" id="homepage" style="margin: 10px">Home</a></li>
                    <li><a href="/course_guest">Courses</a></li>
                </ul>
            </nav>
        </header>
    </div><br><br>

    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <div class="card card-body ">
                    <img class="card-img-top"
                        src="https://media.discordapp.net/attachments/1013480789062713488/1022162261839712367/unknown.png?width=1440&height=403"
                        alt="Card image cap">
                    <form id="submitForm" action="/login" method="post" data-parsley-validate=""
                        data-parsley-errors-messages-disabled="true" novalidate="" _lpchecked="1">
                        <div class="form-group required">
                            <lSabel for="username">Username / Email</lSabel>
                            <input type="text" class="form-control " id="username" required=""
                                name="username" value="">
                        </div>
                        <div class="form-group required">
                            <label class="d-flex flex-row align-items-center" for="password">Password</label>

                            <input type="password" class="form-control" required="" id="password" name="password"
                                value="">
                        </div>
                        <div class="form-group mt-4 mb-4">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="remember-me" name="remember-me"
                                    data-parsley-multiple="remember-me">
                                <label class="custom-control-label" for="remember-me">Keep me login</label>
                                <b class="ml-auto border-link small-xl" style="position: absolute; right: 0px;"
                                    href="/forget-password">Forget?</b>
                            </div>
                        </div>


                        <div class="form-group pt-1 ">
                            <button class="btn1 btn-primary mx-auto btn-lg btn-block" type="submit" id="btnlogin"
                                name="agree">Log In</button>
                        </div>

                    </form>
                    <p class="small-xl pt-3 text-center">
                        <span class="text-muted">Don’t have an account.</span>
                        <a id="registerpage" href="/register"><b>Register</b></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>

</html>
`);
  });
});

describe("POST /register wrong data", () => {
  it("test register post /register wrong data shoud thow exception", async () => {
      const response = await request(baseURL).post("/register")
          .send({
          })
          console.log(response.body)
      //throw exception
      expect(response.data).toBeUndefined();
  });
});

describe("GET /register", () => {
    it("test /register page should return 200", async () => {
        const response = await request(baseURL).get("/register");
        expect(response.statusCode).toBe(200);
    })
  });

})