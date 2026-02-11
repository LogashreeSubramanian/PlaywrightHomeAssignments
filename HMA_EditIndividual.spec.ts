import {test, chromium, expect} from '@playwright/test';
test("Create Lead : salesforce", async ({ page }) => {

    await page.goto("https://login.salesforce.com")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    await page.waitForTimeout(12000)

    await page.locator(".appLauncher.slds-context-bar__icon-action").click()
    await page.waitForTimeout(5000)

    await page.locator("//button[text()='View All']").click()

   await page.getByLabel("Search apps or items...").fill("Individuals")
   await page.waitForTimeout(5000)

   await page.locator("//p[@class='slds-truncate']//mark[contains(text(),'Indivi')]").click()

   await page.getByPlaceholder("Search this list...").fill("Ram")

   await page.getByPlaceholder("Search this list...").press('Enter')

   await page.locator("//lightning-button-menu[@class='slds-dropdown-trigger slds-dropdown-trigger_click']//button").nth(3).click()

    await page.locator("//div[@class='branding-actions actionMenu']//div[ @title='Edit']").click()

    //await page.getByRole("combobox", { name: "--None--" }).click()

    await page.locator("//div[@class='uiPopupTrigger']//a[text()='--None--']").first().click();

    await page.locator("//a[@title='Mrs.']").click()

    await page.getByPlaceholder("First Name").fill("Logashree")

    await page.locator("//button[@title='Save']//span[text()='Save']").click()

    await page.waitForTimeout(12000)

    await expect(page.locator("//th[@data-label='Name']")).toBeVisible()

    await page.waitForTimeout(12000)
    await page.locator("//th[@data-label='Name']").nth(1).click()    


    const receivedValue = await page.locator("//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']//span").textContent()
    let expectedValue='Mrs.Logashree Ram'
    let expectedTitle=receivedValue?.replace(/\s/g, '').trim()
    expect(receivedValue).toEqual(expectedValue)
    console.log("Individual Name assertion passed")





















})