import {test, chromium, expect} from '@playwright/test';
test("Create Lead : salesforce", async ({ page }) => {

  await page.goto("https://login.salesforce.com")

  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

  await page.locator("#password").fill("TestLeaf@2025")

  await page.locator("#Login").click()

  await page.waitForTimeout(12000);

  await page.locator(".appLauncher.slds-context-bar__icon-action").click()
 
  await page.locator("//button[text()='View All']").click()

  await page.locator("//lightning-formatted-rich-text//p[text()='Sales']").click() 

  await page.locator("//span[@class='slds-truncate' and text()='Leads']").click()
 
  await page.getByRole('button', { name: 'New', exact: true }).click()

  await page.locator("//button[@name='salutation']//span[text()='--None--']").click();

  await page.locator("//span[@title='Mrs.']").click()

  await page.getByPlaceholder("Last Name").fill("Ram");

  await page.getByRole('textbox', { name: 'Company' }).fill("TestLeaf")

  await page.locator("//button[@name='SaveEdit']").click()

  let expectedValue='Mrs.Ram'

  let receivedValue = await page.locator("//div[@class='slds-media__body']//lightning-formatted-name").textContent()
  console.log("Received Value: ", receivedValue)
  let expectedTitle=receivedValue?.replace(/\s/g, '').trim()
  expect(expectedTitle).toEqual(expectedValue)
  console.log("Lead Name assertion passed")

})