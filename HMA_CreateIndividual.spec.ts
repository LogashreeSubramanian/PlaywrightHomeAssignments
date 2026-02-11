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

    await page.locator("//one-app-nav-bar-item-root[@class='navItem slds-is-unsaved slds-context-bar__item slds-shrink-none slds-is-active']//one-app-nav-bar-item-dropdown").click()

    await page.locator("//div[@class='menuItemsWrapper']//span[text()='New Individual']").click()

    await page.getByPlaceholder("Last Name").fill("Ram")

    //await page.locator("//button[@title='Save'], {exact:true}").click()

    //await page.waitForTimeout(6000)

    await page.getByRole('button', { name: 'Save', exact: true }).click()

   // await page.waitForTimeout(6000)
    const receivedValue = await page.locator("//div[@class='slds-page-header__title slds-m-right--small slds-align-middle slds-line-clamp clip-text']//span").textContent()
    let expectedValue='Ram'
    expect(receivedValue).toEqual(expectedValue)
    console.log("Individual Name assertion passed")






})

