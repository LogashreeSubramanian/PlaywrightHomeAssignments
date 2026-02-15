import test, { expect } from "@playwright/test"


test("Handle radiobutton: leafground", async({page})=>{

await page.goto("https://leafground.com/radio.xhtml")

await page.locator("//div[@class='ui-radiobutton ui-widget']/following::label[text()='Chrome']").first().click()

await expect(page.locator("(//table[@id='j_idt87:console1']//div)[3]")).toContainClass("ui-state-active")

await page.locator("//div[@id='j_idt87:city2']//label[text()='Bengaluru']").click()

//await page.getByLabel('Bengaluru').click()

//await expect(page.locator("(//table[@id='j_idt87:console2']//div)[3]")).toContainClass("ui-state-active")

//await expect(page.getByLabel('Safari')).toBeChecked();
await expect(page.locator("(//label[text()='Safari']/preceding-sibling::div//div)[4]")).toContainClass('ui-state-active');

await expect(page.locator("(//label[text()='21-40 Years']/preceding-sibling::div//div)[2]")).toContainClass('ui-state-active')

await page.locator("//div[@id='j_idt87:age']//label[text()='1-20 Years']").click()




})