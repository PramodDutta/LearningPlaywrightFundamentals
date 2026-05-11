import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Keybaord', async ({ page }) => {

    await page.goto('https://keycode.info');

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });
    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' });


    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");




    await page.waitForTimeout(5000);






});
