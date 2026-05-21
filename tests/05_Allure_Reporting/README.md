# 05 - Allure Reporting

This module shows how to add Allure metadata to a Playwright test. The current lesson logs in to the VWO app, waits for the dashboard route, and asserts that the page title is `Dashboard`.

## Key Files

- `230_Login.spec.ts`: Playwright login test that imports `allure-js-commons` and adds Allure labels before executing the browser flow.

## Reporting Annotations

The spec demonstrates these Allure annotations:

- `allure.epic("VWO Login Tests")`: groups the test under a high-level product or test area.
- `allure.feature("Essential features")`: identifies the feature being covered.
- `allure.story("Authentication")`: maps the test to the authentication user story.
- `allure.description(...)`: adds a readable description to the test result.

The root `playwright.config.ts` currently runs the HTML reporter and the custom TTA reporter. Allure is installed, but the Allure reporter line is commented out in the root config.

## Run This Module

Run the spec with the configured project reporters:

```bash
npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts
```

Run it with Allure output for this command only:

```bash
npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts --reporter=line,allure-playwright
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

Do not commit real credentials. If this lesson is expanded, move login data to environment variables instead of hardcoding secrets in specs.
