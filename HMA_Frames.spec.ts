import test, { expect } from '@playwright/test'

test("Frame handling", async({page})=>{

await page.goto("https://leafground.com/frame.xhtml")

const numberofframes=page.frames()
console.log("Number of frames in the page: ", numberofframes.length)    


const frame1=numberofframes[1]
await frame1.locator("#Click").click()


let expectedMessage="Hurray! You Clicked Me."
let actualMessage = await frame1.locator("#Click").textContent()
expect(expectedMessage).toEqual(actualMessage)
console.log("Frame 1 assertion passed")

await page.waitForTimeout(3000)


await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

let expectedMessage2="Hurray! You Clicked Me."
let actualMessage2=await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").textContent()
expect(expectedMessage2).toEqual(actualMessage2)
console.log("Nested frame assertion passed")





})