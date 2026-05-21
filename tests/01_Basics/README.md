# 01 Basics

This module introduces the first Playwright test patterns used in the course:

- Opening a page with the `page` fixture.
- Verifying page titles with `expect(page).toHaveTitle()`.
- Using Playwright test annotations such as `skip`, `only`, `fail`, `slow`, and conditional `skip`.

## Key Files

- `Lab209.spec.ts`: Navigates to `https://app.vwo.com` and verifies the login page title.
- `Lab210_Test_Annoations.spec.ts`: Demonstrates common Playwright test annotations. It currently includes `test.only`, so running this file focuses only that test.
- `Util.ts`: Empty utility placeholder for future basics-module helpers.

## Run This Module

From the repository root:

```bash
npx playwright test tests/01_Basics
```

Run an individual lesson:

```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
npx playwright test tests/01_Basics/Lab210_Test_Annoations.spec.ts
```
