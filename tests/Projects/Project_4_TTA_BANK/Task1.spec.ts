import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://tta-bank-digital-973242068062.us-west1.run.app/';

interface SignUpData {
    fullName: string;
    email: string;
    password: string;
}

interface TransferData {
    amount: string;              // numeric string, e.g. "5000"
    note?: string;
    fromAccountValue?: string;   // e.g. "acc1" | "acc2"
    beneficiaryValue?: string;   // e.g. "b1" | "b2"
}

async function fillSignUpForm(page: Page, data: SignUpData): Promise<void> {
    await page.goto(BASE_URL);
    await page.getByRole('button', { name: ' Sign Up' }).click();


    await expect(page.getByText('Create your digital account')).toBeVisible();

    await page.getByPlaceholder('John Doe').fill(data.fullName);
    await page.getByPlaceholder('you@example.com').fill(data.email);
    await page.locator('input[type="password"]').fill(data.password);

    await page.getByRole('button', { name: 'Create Account' }).click();
}

async function transferFunds(page: Page, data: TransferData): Promise<void> {
    await page.getByRole('button', { name: 'Transfer Funds' }).click();

    await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
    await page.getByRole('button', { name: 'Transfer Money' }).click();

    if (data.fromAccountValue) {
        await page.locator('select').first().selectOption(data.fromAccountValue);
    }
    if (data.beneficiaryValue) {
        await page.locator('select').nth(1).selectOption(data.beneficiaryValue);
    }

    const amountField = page.locator('input[type="number"][placeholder="0.00"]');
    await amountField.fill(data.amount);

    if (data.note) {
        await page.getByPlaceholder('e.g. Rent for October').fill(data.note);
    }

    await page.getByRole('button', { name: 'Continue' }).click();
}

async function confirmTransfer(page: Page): Promise<void> {
    const confirmButton = page.getByRole('button', { name: 'Confirm Transfer' });
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();
}

async function verifyDashboardBalance(page: Page, expectedBalance: string): Promise<void> {
    // Click the Dashboard sidebar button
    await page.getByRole('button', { name: 'Dashboard' }).click();

    // Confirm we're on the dashboard
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Locate the Total Balance card and assert its value
    const totalBalanceCard = page.locator('text=Total Balance').locator('..');
    await expect(totalBalanceCard).toContainText(expectedBalance);

    // Extra check: the recent activity should show the deduction
    await expect(page.getByText('Transfer to Sarah Smith')).toBeVisible();
    await expect(page.getByText('-$5000.00')).toBeVisible();
}

test.describe('TTA Bank - Sign Up, Transfer, and Verify', () => {
    test('signs up, transfers $5,000, and verifies balance is $45,000', async ({ page }) => {
        await fillSignUpForm(page, {
            fullName: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: 'StrongP@ssw0rd!',
        });

        await expect(page.getByRole('button', { name: 'Transfer Funds' })).toBeVisible();

        await transferFunds(page, {
            amount: '5000',
            note: 'Test transfer',
        });

        await confirmTransfer(page);

        await verifyDashboardBalance(page, '$45,000.00');
    });
});

export {
    fillSignUpForm,
    transferFunds,
    confirmTransfer,
    verifyDashboardBalance,
    SignUpData,
    TransferData,
};