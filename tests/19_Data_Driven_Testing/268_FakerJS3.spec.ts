import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

function generateUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ firstName: 'Auto' }),
        telephone: faker.phone.number({ style: 'national' }),
        password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' }),
    };
}

test(`Register single user via generateUser()`, async ({ page }) => {
    const user = generateUser();

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
    await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.locator('#submission-output')).toContainText(user.firstName);
});