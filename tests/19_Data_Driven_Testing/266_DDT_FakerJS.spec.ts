import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('FakerJS data-driven template', () => {
    test('should display the expected generated user details', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

        const testUser = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };

        await page.getByRole("textbox", { name: "Username" }).fill(testUser.name);
        await page.getByRole("textbox", { name: "Password" }).fill(testUser.name);
        await page.getByRole("button", { name: "Login" }).click();

        await expect(page.getByRole("alert")).toContainText('Username and password do not match any user in this service');

        await page.waitForTimeout(5000);
    });
});
