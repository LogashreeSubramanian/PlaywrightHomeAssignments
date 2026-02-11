import {test, chromium} from '@playwright/test';
test("Edit Lead : leaftaps", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)


    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    //await page.waitForTimeout(3000);
    await page.locator(`text='CRM/SFA'`).click()

    //await page.waitForTimeout(5000);

    await page.locator(`text='Leads'`).click()
   // await page.waitForTimeout(5000)
    await page.locator('a:has-text("Create Lead")').click()

    await page.locator("#createLeadForm_companyName").fill("QEagle")
    await page.locator("#createLeadForm_firstName").fill("Logashree")
    await page.locator("#createLeadForm_lastName").fill("Subramanian")

    await page.locator(".smallSubmit").click()

     await page.locator("//a[text()='Edit']").click()

    await page.locator("#updateLeadForm_companyName").clear()
    await page.locator("#updateLeadForm_companyName").fill("TestLeaf Training Institute")    
    await page.locator("//input[@class='smallSubmit' and @value='Update']").click()


})