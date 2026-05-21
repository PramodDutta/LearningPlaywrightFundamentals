# Repository Guidelines

## Project Structure & Module Organization

This repository is a Playwright + TypeScript learning project. Lesson tests live under `tests/`, grouped by numbered modules such as `tests/03_Locators_Commands/` and `tests/19_Data_Driven_Testing/`. Specs follow the Playwright pattern `*.spec.ts`.

`TTACartProject/` contains a larger page-object example: page classes are in `TTACartProject/pages/`, and the end-to-end flow is in `TTACartProject/tests/ttacartE2E.spec.ts`. Shared utilities, including the custom reporter, live in `utils/`. Playwright configuration is centralized in `playwright.config.ts`.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npx playwright install`: install browser binaries when setting up a new machine.
- `npm test`: run all configured specs from `tests/**/*.spec.ts` and `TTACartProject/tests/**/*.spec.ts`.
- `npm run test:headed`: run tests with visible browsers.
- `npm run test:ui`: open Playwright UI mode for debugging.
- `npm run report`: open the Playwright HTML report.
- `npm run report:tta`: open the custom TTA report from `tta-report/index.html`.
- `npx playwright test tests/03_Locators_Commands/219_Commands.spec.ts`: run one spec.

There is no separate build step; tests execute TypeScript through Playwright.

## Coding Style & Naming Conventions

Use TypeScript with Playwright fixtures from `@playwright/test`. Existing files use 4-space indentation, single quotes, semicolons, and descriptive test titles. Keep lesson filenames aligned with the course numbering, for example `256_Expect.spec.ts` or `Lab210_Test_Annoations.spec.ts`. Page object classes belong in a `pages/` directory and should expose clear action methods such as `login()`, `checkoutCart()`, or `fillCheckoutPage()`.

## Testing Guidelines

Tests run in Chromium by default, with trace, video, and screenshots enabled in `playwright.config.ts`. CI forbids `test.only`, retries failures twice, and runs with one worker. Prefer resilient locators (`getByRole`, `getByText`, stable CSS selectors) and explicit assertions with `expect`. Store data-driven inputs beside the relevant module, as in `tests/19_Data_Driven_Testing/`.

## Commit & Pull Request Guidelines

Recent commits use conventional-style messages such as `feat(ttacart): add env-driven e2e flow` and `docs(readme): update project guide`. Use `feat:`, `fix:`, `docs:`, or a scoped form when helpful.

Pull requests should describe the lesson or flow changed, list the command used to verify it, and include screenshots or report notes for visible UI changes. Link related issues when available.

## Security & Configuration Tips

Do not commit `.env` files or real credentials. The TTACart flow reads `TTACART_USERNAME` and `TTACART_PASSWORD` from `TTACartProject/.env`; document required variables instead of hardcoding secrets.
