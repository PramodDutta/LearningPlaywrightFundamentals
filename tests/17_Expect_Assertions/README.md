# Module 17: Expect Assertions

This module covers Playwright's `expect` API for validating values, locators, page state, and UI element state. It highlights the difference between synchronous value assertions and auto-retrying Playwright assertions.

## Key Files

- `256_Expect.spec.ts` - examples for value assertions, locator assertions, soft assertions, and negation.
- `257_URL_Asserations.spec.ts` - examples for page URL/title assertions and checkbox/button state assertions.
- `Expect_Assertions_Cheatsheet.md` - concise interview-style reference for common value, locator, page, API, and modifier assertions.
- `More_Expect_Examples.md` - expanded assertion reference with additional examples for text, state, accessibility, screenshots, API responses, polling, and custom timeouts.

## Assertion Patterns

- Use synchronous generic assertions for plain values: `expect(value).toBe()`, `toEqual()`, `toBeTruthy()`, `toContain()`, and numeric comparisons.
- Await locator and page assertions because they auto-retry: `await expect(locator).toBeVisible()`, `toHaveAttribute()`, `toHaveCount()`, `toHaveTitle()`, and `toHaveURL()`.
- Use `.not` to assert absence or inverse conditions, such as `await expect(page.locator('#error')).not.toBeVisible()`.
- Use `expect.soft()` when multiple checks should be collected before the test fails.
- Prefer state-specific assertions such as `toBeChecked()`, `toBeEnabled()`, and `toHaveValue()` over manual DOM inspection.

## Run This Module

```bash
npx playwright test tests/17_Expect_Assertions
```

Run one spec:

```bash
npx playwright test tests/17_Expect_Assertions/256_Expect.spec.ts
npx playwright test tests/17_Expect_Assertions/257_URL_Asserations.spec.ts
```

Run by test title:

```bash
npx playwright test tests/17_Expect_Assertions -g "soft assertions"
```
