
import test, { expect } from '@playwright/test'

import path from 'path';
import fs from 'fs';



test("file download", async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/download")

const downloadPromise = page.waitForEvent('download');

await page.locator("//a[text()='file.json']").click()
  
const download = await downloadPromise;

const filePath =  path.join("Data", download.suggestedFilename());

await download.saveAs(filePath);

expect(fs.existsSync(filePath)).toBeTruthy();


})