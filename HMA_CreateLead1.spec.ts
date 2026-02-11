import {test, chromium} from '@playwright/test';

test("CreateLead: leaftaps", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000);

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(3000);
    await page.locator(`text='CRM/SFA'`).click()

    await page.waitForTimeout(5000);

    await page.locator(`text='Leads'`).click()
    await page.waitForTimeout(5000)
    await page.locator('a:has-text("Create Lead")').click()

    await page.locator("#createLeadForm_companyName").fill("QEagle")
    await page.locator("#createLeadForm_firstName").fill("Logashree")
    await page.locator("#createLeadForm_lastName").fill("Subramanian")
    await page.locator("#createLeadForm_personalTitle").fill("Mrs")
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("100000")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7777744556")

    await page.locator(".smallSubmit").click()

    await page.waitForTimeout(3000);



})