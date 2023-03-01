const {test, expect} = require('@playwright/test');
const {NewsPage} = require('../pageObjects/NewsPage');
//let webContext; 
let newsPage; 

test.beforeAll(async({browser})=>
{  
    //Create new context (browser instance: plugins, cookies)
    const context = await browser.newContext(); //Fresh instance. We can send parameters to inyect cookies or proxy
    const page = await context.newPage(); //Open the page on the fresh instance
    //await context.storageState({path: 'state.json'});
    //webContext=  await browser.newContext({storageState:'state.json'});
    newsPage = new NewsPage(page);
    await newsPage.navigateToEuroWeeklyNewsInEnglish();
        
})

test('Subscribe button', async ()=>
{
    await newsPage.clickOnSubscribeButton();
    
});






