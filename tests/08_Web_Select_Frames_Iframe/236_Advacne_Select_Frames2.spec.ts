import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('//div[@data-testid="dropdown-language"]').click();

    await page.getByText("JavaScript").click();


    await page.locator("#experience-shell").click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();




    await page.waitForTimeout(5000);




});




