// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs name() / local-name() because
// tag names are namespaced (e.g. svg:path).
// Common patterns: locate SVG, locate child shapes (path/rect/circle/g),
// click, hover, read attributes (d, fill, viewBox, stroke), assert state.

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'; // replace with target page

test.describe('SVG handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();


        // const svgAllElement: Locator[] = await page.locator('svg').all();
        // console.log(svgAllElement);
        // for(let svgElement in svgAllElement){
        //     console.log(svgElement)
        // }

        const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
        await expect(firstResult.first()).toBeVisible({ timeout: 15000 });


        const titlesResults: Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MP')]/div/a[2]"
        );

        const count: number = await titlesResults.count();
        console.log(`Total products found: ${count}`);

        for (let i = 0; i < count; i++) {
            const title: string | null = await titlesResults.nth(i).textContent();
            console.log(title?.trim());
        }

        await page.waitForTimeout(5000);







    });



});
