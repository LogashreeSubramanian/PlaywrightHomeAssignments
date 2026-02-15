import test, { expect } from "@playwright/test"


test("Handle Checkbox: leafground", async({page})=>{


await page.goto("https://leafground.com/checkbox.xhtml")

await page.locator("//span[@class='ui-chkbox-label' and text()='Basic']").click()

await page.waitForTimeout(3000)

await page.locator("//span[@class='ui-chkbox-label' and text()='Ajax']").click()

await page.waitForTimeout(2000)

await expect(page.locator("//span[@class='ui-growl-title']")).toContainText("Checked") 

await page.locator("label", { hasText: "Javascript" }).click();

await page.locator("//div[@id='j_idt87:ajaxTriState']").click()


await expect(page.locator("//div[@class='ui-selectbooleancheckbox ui-chkbox ui-widget']//span[text()='Disabled']")).toHaveClass("ui-chkbox-label ui-state-disabled") 

await page.locator(".ui-toggleswitch-slider").click()

await page.locator("//ul[@data-label='Cities']").click()

await page.waitForTimeout(3000)

await page.locator("//li[@data-item-value='Istanbul']//label[text()='Istanbul']").click()

await page.locator("//li[@data-item-value='Barcelona']//label[text()='Barcelona']").click()                              

await page.locator("//li[@data-item-value='Rome']//label[text()='Rome']").click()                                               

await page.locator("//a[@aria-label='Close']").click()


const selectedCities=await page.locator("//ul[@data-label='Cities']").allTextContents()

console.log("Selected cities are: ", selectedCities)

await page.waitForTimeout(2000)


})