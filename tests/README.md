# Tests

This directory contains the course lesson specs for the Playwright + TypeScript fundamentals project. Each numbered folder groups one topic and keeps its specs, helper files, and local data near the lesson that uses them.

## Layout

- `01_Basics` through `23_Advance_Framework`: numbered lesson modules.
- `Projects`: practice project specs that are separate from the numbered lessons.
- `*.spec.ts`: Playwright test files discovered by `playwright.config.ts`.
- Local helpers and data files stay beside the specs that use them.

The TTACart page-object example is outside this tree in `TTACartProject`.

## Run

From the repository root:

```bash
npm test
npx playwright test tests/03_Locators_Commands/219_Commands.spec.ts
npx playwright test tests/19_Data_Driven_Testing
```

## Notes

The shared Playwright config runs Chromium, collects traces, videos, and screenshots, and writes both the standard HTML report and the custom TTA report.
