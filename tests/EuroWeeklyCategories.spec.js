const {test, expect} = require('@playwright/test');
const {NewsPage} = require('../pageObjects/NewsPage');
let newsPage; 

test.beforeAll(async({browser})=>
{  
    //Create new context (browser instance: plugins, cookies)
    const context = await browser.newContext(); //Fresh instance. We can send parameters to inyect cookies or proxy
    const page = await context.newPage(); //Open the page on the fresh instance
    newsPage = new NewsPage(page);
    await newsPage.navigateToEuroWeeklyNewsInEnglish();
    await page.screenshot({path: 'screenshotLanded.png'});
        
})

test('Redirection for subcategory Mallorca', async ()=>
{
    await newsPage.clickOnNewsTab();
    await newsPage.navigateToMallorcaNews();
                
});

test('Text for subcategory Madrid', async ()=>
{
    await newsPage.clickOnNewsTab();
    await newsPage.validateMadridSubcategoryText();
        
});








