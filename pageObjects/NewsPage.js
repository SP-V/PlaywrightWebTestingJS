const { expect } = require("@playwright/test");

class NewsPage{

    constructor(page)
    {
        this.page = page; 
        this.doNotConsentButton = page.locator("//*[@class='fc-button fc-cta-do-not-consent fc-secondary-button']")
        this.newsTab = page.locator("//*[@id='desktop-menu']//*[@class='menu-header']//a[text()='News']")
        this.categoriesUnderNews = page.locator("//*[@class='sub-menu__wrapper active']//*[@class='sub-menu menu-depth-1']//*[contains(@class, 'submenu-name menu-item menu-item-type-taxonomy menu-item-object-category')]")
        this.spainCategory = page.locator("//a[@href='https://euroweeklynews.com/news/spain/']")
        this.madridSubCategory = page.locator("//div[@class='sub-menu__wrapper active']//a[@href='https://euroweeklynews.com/news/spain/madrid/']")
        this.mallorcaSubCategory = page.locator("//div[@class='sub-menu__wrapper active']//a[@href='https://euroweeklynews.com/news/spain/mallorca-news/']")
        this.subscribeButton = page.locator("//a[@class='subscribe'][text()='Subscribe']")
        this.subscribePopUp = page.locator("//div[@class='subscribe-for-news mt-0']")

    }

    async navigateToEuroWeeklyNewsInEnglish()
    {
        await this.page.goto("https://euroweeklynews.com/");
        await this.doNotConsentButton.click();
        await expect(this.page).toHaveTitle("Euro Weekly News – leading English language newspaper in Spain");
    }

    async clickOnNewsTab()
    {
        await this.newsTab.click();
    }

    async validateNumberOfCategoriesUnderNewsTab()
    {
        await expect(this.categoriesUnderNews).toHaveCount(5)
    }

    async validateMadridSubcategoryText()
    {
        await expect(this.madridSubCategory).toHaveText("Madrid")
    }

    async navigateToMallorcaNews()
    {
        await this.mallorcaSubCategory.click(); 
        await expect(this.page).toHaveTitle("Mallorca - Euro Weekly News");
    }
           
    async clickOnSubscribeButton()
    {
        await this.subscribeButton.click();
        await expect(this.subscribePopUp).toBeVisible();
    }
}
module.exports = {NewsPage};