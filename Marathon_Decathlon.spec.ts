import test, { expect } from '@playwright/test'

test("Marathon:Decathlon:", async ({ page }) => {

    await page.goto("https://www.decathlon.in")

    const homePageTitle = await page.title()
    console.log("Home Page Title:", homePageTitle)

    //verify home page title

    let expectedTitle = 'Buy Sporting Goods, Sportswear and Equipments | Download App'

    if (homePageTitle === expectedTitle) {
        console.log("Home page title is correct.")
    } else {
        console.log("Home page title is incorrect.")
    }

    await page.locator("//div[@class='bg-grey-50 rounded-full']//span[contains(text(), 'Search for')]").click()

    //verify search input field is enabled or not

    await expect(page.locator("//div[@class='bg-white max-w-max md:w-full p-2']")).toContainText("TRENDING SEARCHES")

    await page.keyboard.insertText("Shoes")

    await page.keyboard.press("Enter")

    await page.waitForTimeout(3000) 

    const searchPageTitle = await page.title()
    console.log("Search Page Title:", searchPageTitle)

    //verify Searchpage title

    let expectedSearchTitle = 'Search | shoes'

    if (searchPageTitle === expectedSearchTitle) {
        console.log("Search page title is correct.")
    } else {
        console.log("Search page title is incorrect.")
    }


    await page.locator("//div[@Class='ais-Panel']//ul//li//span[contains(text(),'Men')]").click()


    await page.locator("//div[@Class='ais-Panel']//ul//li//span[contains(text(),'Uk 10.5')]").click()

    await page.locator("//div[@Class='ais-Panel']//ul//li//span[contains(text(),'Running ')]").click()

    await page.locator("//div[@class='relative ml-auto JrtAwg mr-4']//span[text()='Most Relevant']").click()

    await page.locator("//a[text()='Price: High to Low']").click()

    await page.locator("//ul[@class='ais-InfiniteHits-list']//li").first().click()

    await page.locator("//div[@id='size-select-container']//div[text()='UK 10.5 - EU 45']").click()

    await page.getByRole('button', {name: 'addToCart'}).click()

    await page.locator("//a[@aria-label='cart']").click()

    const totalcartPrice = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText()

    //verify cart page total amount

    console.log("Total cart amount :", totalcartPrice)


})