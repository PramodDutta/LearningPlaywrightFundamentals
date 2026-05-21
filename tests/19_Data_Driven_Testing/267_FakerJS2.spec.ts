import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test(`Register single user with Faker`, async ({ page }) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName: 'Auto' });
    const telephone = faker.phone.number({ style: 'national' });
    const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Phone' }).fill(telephone);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(password);

    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.locator('#submission-output')).toContainText(firstName);
});