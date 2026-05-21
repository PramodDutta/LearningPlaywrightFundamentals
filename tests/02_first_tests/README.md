# Module 02: First Tests

This module introduces the first Playwright tests and the core browser model:
browser, context, and page. It shows both Playwright Test fixtures and manual
browser control so you can see what the test runner creates for you.

## What It Covers

- Writing a basic Playwright Test spec with navigation and assertions.
- Understanding the browser, browser context, and page hierarchy.
- Creating separate contexts for isolated users or sessions.
- Opening multiple pages/tabs inside the same context.
- Using the built-in `page` and `browser` fixtures from `@playwright/test`.
- Customizing contexts with viewport, locale, timezone, geolocation, and mobile
  options.
- Applying shared context settings with `test.use()`.

## Key Files

- `211_First_Running_Test.spec.ts`: first fixture-based test using `page`,
  `goto()`, and `expect()`.
- `212_Browser_Context_Pages.spec.ts`: manual browser, context, and page setup
  with explicit cleanup.
- `213_Multile_Context.spec.ts`: separate contexts for admin and viewer users.
- `214_Multiple_Pages.spec.ts`: multiple pages in one shared context.
- `215_TEST_PW.spec.ts`: Playwright Test fixture isolation across tests.
- `216_Manual_Context.spec.ts`: manual contexts from the `browser` fixture.
- `217_Manual_Context_Options.spec.ts`: desktop and mobile context options.
- `218_Context_Reuse.spec.ts`: shared test settings with `test.use()`.

## Run This Module

Run every spec in this module:

```bash
npx playwright test tests/02_First_tests
```

Run a single lesson spec:

```bash
npx playwright test tests/02_First_tests/211_First_Running_Test.spec.ts
```

Some lesson files launch Chromium manually with `headless: false`, so they may
open a visible browser window when executed.
