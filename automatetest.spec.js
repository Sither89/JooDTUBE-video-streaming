
describe('JoodTUBE', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9090/')
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

 /* it('Test Login', async () => {
   // const btn = document.querySelector('#btnlogin');
    let selector = 'Button[id=btnfake]';
    await page.goto('http://localhost:9090/login')
    await page.type('input[id=username]', "phaswich.sir@dome.tu.ac.th");
    await page.type('input[id=password]', "12345");

    //wait Promise.all([
      //page.$eval('button#btnlogin.btn1.btn-primary.mx-auto.btn-lg.btn-block', element =>
    //  page.$eval('button#btnfake', element =>
     // element.click()
    //  ),
     // await page.waitForNavigation(),
   // ]);
    //await page.evaluate((selector) => document.querySelector(selector).click(), selector); 
   // await Promise.all([
    //const form = await page.$('Button[id=btnfake]');
    //await form.evaluate( form => form.click() );
     // await page.click('Button[id=btnfake]'),
    //      page.waitForNavigation()
    //  ])
    
    expect( page.url() ).toBe('http://localhost:9090/register')
  
   

  })*/

})