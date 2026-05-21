import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { faker } from '@faker-js/faker';


test.describe('POM with Login Page Simple', () => {



    test('Login with valid credns', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(faker.internet.email(), faker.internet.password());
        await expect(page).toHaveTitle('Multiple Element Filter Login — The Testing Academy');

    });
});
