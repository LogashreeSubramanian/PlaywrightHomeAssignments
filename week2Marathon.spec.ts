
import test, { expect } from '@playwright/test'


test("ServiceNow Marathon", async ({ page }) => {

await page.goto("https://dev363522.service-now.com/")

await page.locator("#user_name").fill("admin")

await page.locator("#user_password").fill("mf=3hp^0UJMZ")

await page.locator("#sysverb_login").click()

await page.locator("#d6e462a5c3533010cbd77096e940dd8c").click()

await page.waitForTimeout(5000)

await page.getByRole('link', { name: 'Service Catalog 3 of 23' }).click();

await page.frameLocator('iframe').getByRole('link', { name: 'Mobiles. Cell phones to meet your business needs.', exact:true }).click();

await page.frameLocator('#gsft_main').getByText('Apple iPhone 13').nth(1).click()

//await page.waitForTimeout(5000)

await page.frameLocator('#gsft_main').locator("//div[@class='sc-radio']//label[text()='Yes']").click()

await page.frameLocator('#gsft_main').locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99")

//await page.frameLocator('#gsft_main').locator("//select[@class='form-control cat_item_option ']").click()

await page.frameLocator('#gsft_main').locator('[id="IO:33494b069747011021983d1e6253af45"]').selectOption({ value: 'Unlimited' });

await page.frameLocator('#gsft_main').locator("//label[@class='radio-label' and contains(text(),'Blue')]").click()


await page.frameLocator('#gsft_main').locator("//label[@class='radio-label' and contains(text(),'512 GB [add $300.00]')]").click()

await page.frameLocator('#gsft_main').locator("//button[@id='oi_order_now_button']").click()

const confirmationMessage = await page.frameLocator('#gsft_main').locator("//div[@class='notification notification-success']").innerText()

expect(confirmationMessage).toContain("Thank you, your request has been submitted")


await page.screenshot({path:'C:\\Users\\Ram\\Downloads\\fullpage.png'})


})