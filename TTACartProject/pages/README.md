# TTACart Page Classes

This directory contains the page objects used by the TTACart end-to-end test. Each class receives a Playwright `Page`, defines the locators for one area of the app, and exposes action methods used by the spec.

## Classes

- `TTACartLoginPage.ts`: `Loginpage` opens the app and submits username/password credentials.
- `TTACartInventoryPage.ts`: `TtacartinventorypageTs` adds selected products, opens the cart, and starts checkout.
- `TTACartCheckoutPage.ts`: `TtacartcheckoutpageTs` fills first name, last name, postal code, and continues to checkout step two.

## Conventions

Prefer stable role, test-id, or CSS locators. Keep assertions in specs unless the page method needs to verify an immediate UI state before continuing.
