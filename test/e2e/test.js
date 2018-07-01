import puppeteer from 'puppeteer'
const pageUrl = 'http://localhost:8080/'

describe('My Page', () => {
  let browser = {}
  
  beforeEach(async () => {
     browser = await puppeteer.launch({headless: false})
  })
  
  afterEach(() => {
    return browser.close()
  })

  it('should have a valid title', async () => {
    const page = await browser.newPage()
    await page.goto(pageUrl)
    const title = await page.title()
    expect(title).toEqual('my-box-project')
  })

})