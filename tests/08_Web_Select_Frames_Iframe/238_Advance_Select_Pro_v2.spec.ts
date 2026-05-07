import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // 1) Single, searchable
    await page.getByTestId('rs-single').click();
    await page.getByTestId('rs-single-input').fill('play');
    await page.getByRole('option', { name: 'Playwright' }).click();
    await expect(page.locator('#rs-single .tta-rs__single-value')).toHaveText('Playwright');

    // 2) Multi — pick three, remove one
    const multi = page.getByTestId('rs-multi');
    for (const name of ['Playwright', 'Pytest', 'TestNG']) {
        await multi.click();
        await page.getByRole('option', { name }).click();
    }
    await multi.locator('.tta-rs__multi-value:has-text("Pytest") .tta-rs__multi-value__remove').click();

    // 3) Creatable — type a brand-new tag and press Enter
    await page.getByTestId('rs-creatable-input').fill('chaos-engineering');
    await page.getByTestId('rs-creatable-input').press('Enter');
    await expect(page.locator('#rs-creatable .tta-rs__multi-value', { hasText: 'chaos-engineering' })).toBeVisible();

    // 4) Grouped — pick from a specific group
    await page.getByTestId('rs-grouped').click();
    await page
        .locator('.tta-rs__group[data-group="Edge"]')
        .getByRole('option', { name: 'Vercel Edge' })
        .click();

    // 5) Async — wait for results
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();








});




