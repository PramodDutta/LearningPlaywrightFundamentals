import { type Locator, type Page } from '@playwright/test';

export class TtacartinventorypageTs {
    readonly page: Page;
    readonly addToCartTestAllthethings: Locator;
    readonly addToCartTtaFleece: Locator;
    readonly linkShoppingCart: Locator;
    readonly checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartTestAllthethings = page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]');
        this.addToCartTtaFleece = page.locator('[data-test="add-to-cart-tta-fleece-jacket"]');
        this.linkShoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.checkout = page.getByText("Checkout");
    }

    // async goto() {
    //     await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    // }

    async addToInventory() {
        await this.addToCartTestAllthethings.click();
        await this.addToCartTtaFleece.click();
        await this.linkShoppingCart.click();
    }

    async checkoutCart() {
        await this.checkout.click();
    }
}
