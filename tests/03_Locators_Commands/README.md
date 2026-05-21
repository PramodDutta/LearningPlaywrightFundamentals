# Module 03: Locators and Commands

This module introduces core Playwright navigation commands and locator strategies. The examples cover `page.goto()` options, referer headers, CSS selectors, XPath selectors, role-based locators, sequential typing, browser history, and browser-context cookies.

## Key Files

- `219_Commands.spec.ts`: demonstrates `page.goto()` with `waitUntil` modes such as `commit`, `domcontentloaded`, `load`, and `networkidle`.
- `220_GotoCommands.spec.ts`: shows default navigation behavior, URL assertions, and a per-navigation `referer`.
- `221_Reffer_Command.spec.ts`: sets a `Referer` header for an entire browser context.
- `222_Automation.vwo.com.spec.ts`: uses CSS locators against the VWO login page and checks the login error message.
- `223_Xpath.spec.ts`: repeats the VWO login exercise using an XPath locator for the username field.
- `224_GetRole.spec.ts`: uses `getByRole()` to click a link on the CURA demo site.
- `225_CSS_Locators.spec.ts`: practices CSS child selectors plus `first()`, `nth()`, `last()`, and looping over matches.
- `226_PressSequentially.spec.ts`: demonstrates `pressSequentially()`, waits, navigation, and `goBack()`.
- `227_Cookie.spec.ts`: reads and adds cookies through the browser context.
- `index.html`: local login-page fixture for locator practice.

Several specs use public demo/training sites, so network access is required when running them.

## Run

Run the whole module:

```bash
npx playwright test tests/03_Locators_Commands
```

Run one lesson file:

```bash
npx playwright test tests/03_Locators_Commands/224_GetRole.spec.ts
```

Run headed for easier debugging:

```bash
npx playwright test tests/03_Locators_Commands --headed
```
