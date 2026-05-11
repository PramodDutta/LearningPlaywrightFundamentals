import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    let vechileFrame: FrameLocator = await page.frameLocator('#frame-one');
    await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
    await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
    await vechileFrame.locator('#RESULT_TextField-3').fill('2012');
    await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vechileFrame.locator('#RESULT_TextField-4').fill('2015');

    await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await vechileFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(5000);



});




