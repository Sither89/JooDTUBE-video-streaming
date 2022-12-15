const puppeteer = require('puppeteer');

describe('New test', () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  afterAll(() => {
    browser.close();
  });

  it('if not have Firstname then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email@mail.com' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, '123456789' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, '123456789' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=fname_error]', el => el.textContent) ).toBe("Please enter Firstname")
  })

  it('if not have Lastname then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=lname_error]', el => el.textContent) ).toBe('Please enter Lastname')
  })

  it('if not have Username then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=user_error]', el => el.textContent) ).toBe('Please enter Username')
  })

  it('if not have Email then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=email_error]', el => el.textContent) ).toBe('Please enter Email')
  })

  it('if not have Password then click register expect request', async () => {
    await page.goto('http://localhost:9090/register')
    await page.$eval( 'input[id=fname]', ( el, value ) => el.value = value, 'firstname' );
    await page.$eval( 'input[id=lname]', ( el, value ) => el.value = value, 'lastname' );
    await page.$eval( 'input[id=Username]', ( el, value ) => el.value = value, 'test' );
    await page.$eval( 'input[id=Email]', ( el, value ) => el.value = value, 'email' );
    await page.$eval( 'input[id=con_password]', ( el, value ) => el.value = value, 'password' );
    await page.$eval( 'button[id=btnRegister]', form => form.click() );
    expect( await page.$eval('div[id=pass_error]', el => el.textContent) ).toBe('Please enter Password')
  })

  it('test login role admin', async () => {
    await page.goto('http://localhost:9090/login')
    await page.$eval( 'input[id=username]', ( el, value ) => el.value = value, 'admin@gmail.com' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'admin12345' );
    await page.$eval( 'button[id=btnlogin]', form => form.click() );
    expect( await page.url() ).toBe('http://localhost:9090/course')
  })

  it('test login role student', async () => {
    await page.goto('http://localhost:9090/login')
    await page.$eval( 'input[id=username]', ( el, value ) => el.value = value, 'user@gmail.com' );
    await page.$eval( 'input[id=password]', ( el, value ) => el.value = value, 'user12345' );
    await page.$eval( 'button[id=btnlogin]', form => form.click() );
    expect( await page.url() ).toBe('http://localhost:9090/course_student')
  })
});
