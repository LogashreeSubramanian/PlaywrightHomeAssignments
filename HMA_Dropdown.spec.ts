import {test, chromium, expect} from '@playwright/test';
test("Home Assignment: Dropdown", async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml")

       const count = await page.locator("//select[@class='ui-selectonemenu']//option").count()

       
    console.log("Count of favorite ui automation tool dropdown: ", count)

   await page.locator("//select[@class='ui-selectonemenu']").selectOption({label:'Playwright'})


    await page.locator("//label[text()='Select Country']").click()

    await page.locator("//li[@data-label='USA']").click()

    await page.waitForTimeout(5000)

    //await page.getByRole('listbox', { name: 'Select City' }).click()

    await page.locator("//label[text()='Select City']").click()

    const cities = ["Denver", "New York", "San Francisco"]
   const receivedCities = await page.locator("//ul[@id='j_idt87:city_items']//li[@role='option']").allTextContents()
//remove first option 'Select City'
   const actualCities = receivedCities.slice(1)
   console.log("Received cities are: ", actualCities)

   expect(actualCities).toEqual(cities);



    await page.locator("//li[@data-label='Denver']").click()

    await page.locator("//button[@aria-label='Show Options']").click()

    await page.getByRole('option', { name: 'Selenium WebDriver' }).click()

    await page.locator("//button[@aria-label='Show Options']").click()
    await page.waitForTimeout(3000)


    await page.getByRole('option', { name: 'PostMan' }).click()

    await page.locator("//button[@aria-label='Show Options']").click()
    await page.waitForTimeout(3000)


    await page.getByRole('option', { name: 'Appium' }).click()


    await page.waitForTimeout(5000)

await page.locator("//div[@id='j_idt87:lang']").click();

// get dropdown options
const languages = await page
    .locator("//ul[@id='j_idt87:lang_items']//li[@role='option']")
    .allTextContents();

// remove first option 'Select Language'
const actualLanguages = languages.slice(1);

console.log(actualLanguages);

    await page.locator("//li[@data-label='Tamil']").click()

    await page.waitForTimeout(3000)
    await page.locator("//label[text()='Select Values']").click()

    await page.waitForTimeout(3000)

    await page.locator("//li[text()='மூன்று']").click()



   } )

