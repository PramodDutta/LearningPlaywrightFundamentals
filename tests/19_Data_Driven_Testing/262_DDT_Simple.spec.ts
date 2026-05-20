import { test, expect } from '@playwright/test';

test.describe('DDT Simple', () => {

    // TEST DATA — array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin123@ymail.com",
            password: "wrongpass",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectedURL: /admin123/,
            shouldPass: false
        },
        {
            description: "empty password",
            username: "pramod@ppp.com",
            password: "",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "both empty",
            username: "",
            password: "",
            expectedURL: /multiple_element_filter/,
            shouldPass: false
        }
    ];

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLoginToPracticeAccount.click();

            await expect(page).toHaveURL(data.expectedURL);




        });




    }




});
