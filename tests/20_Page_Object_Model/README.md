# Page Object Model Lesson

This module compares the same login page flow written two ways:

- `270_WithOut_POM.spec.ts` keeps everything inside the spec: test data, page navigation, locator definitions, form filling, button click, and the final URL assertion.
- `271_Login_With_POM.spec.ts` uses a page object. The spec creates `new LoginPage(page)`, calls `loginPage.goto()`, calls `loginPage.login(username, password)`, and then asserts the page title.

`LoginPage.ts` wraps the login page details:

- The constructor receives Playwright's `page` fixture and stores the page plus reusable locators for email, password, and the login button.
- `goto()` opens the login page URL.
- `login(username, password)` fills the email and password fields, then clicks the login button.

The point of the comparison is that the non-POM spec exposes all page details directly in the test, while the POM spec hides repeated page mechanics behind named methods so the test reads as a higher-level flow.
