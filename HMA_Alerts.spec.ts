import test, { expect } from "@playwright/test"

test("Alert Handling with pageon and frame locator",async({page})=>{

page.on('dialog', alertType  => {

        const type=alertType.type()
        console.log("Alert type is: ", type)   

        const message=alertType.message()
        console.log("Alert message is: ", message)

        alertType.accept()



})

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

const frame =page.frameLocator("#iframeResult")

await frame.locator("//button[text()='Try it']").click()

let expectedMessage="You pressed OK!"

const actualMessage=await frame.locator("#demo").innerText()

expect(actualMessage).toEqual(expectedMessage)
console.log("Alert message assertion passed")

})