# Shadow DOM

This module demonstrates how Playwright works with elements inside open Shadow DOM trees. The test opens the Shadow DOM widget page from The Testing Academy and interacts with form fields, buttons, nested hosts, and status text exposed through shadow roots.

## Key Files

- `251_Shadom_DOM.spec.ts`: lesson spec for locating and interacting with Shadow DOM content.

## Patterns Covered

- Navigate to the Shadow DOM practice page in `beforeEach`.
- Use `getByTestId()` to locate shadow host components such as `card-account`, `counter-cart`, and `nested-host`.
- Scope locators from a host locator with `card.locator(...)` and `cart.getByRole(...)`.
- Rely on Playwright's built-in support for piercing open Shadow DOM roots with standard locators.
- Assert Shadow DOM state with `expect(...).toContainText()` and `expect(...).toHaveText()`.
- Interact with nested Shadow DOM fields through stable test IDs.

## Run This Module

```bash
npx playwright test tests/13_Shadow_DOM/251_Shadom_DOM.spec.ts
```

For headed debugging:

```bash
npm run test:headed -- tests/13_Shadow_DOM/251_Shadom_DOM.spec.ts
```
