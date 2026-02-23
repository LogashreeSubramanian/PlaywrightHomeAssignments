import test, { expect } from '@playwright/test'
test("file upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("Data/W4_D1_Checkbox.pdf")

    await page.waitForTimeout(3000)

})


test("file upload with event lisener", async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/upload")
    
const fileUpload= page.waitForEvent("filechooser")

await page.locator("#drag-drop-upload").click()

const fileChooser = await fileUpload

await fileChooser.setFiles("Data/W4_D1_Checkbox.pdf")

const fileName = await page.locator("(//div[@class='dz-filename']//span)[1]").innerText()

let expectedFileName = "W4_D1_Checkbox.pdf"

expect (fileName).toBe(expectedFileName)

console.log("Filename assertion is passed")



    })


    





