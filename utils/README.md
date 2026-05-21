# Utilities

Shared project utilities live here.

## CustomTTAReporter.ts

`CustomTTAReporter.ts` is registered in `playwright.config.ts` alongside the standard Playwright HTML reporter. It implements the Playwright reporter API and produces a custom TTA report during each test run.

Outputs are written under `tta-report`:

- `report_<timestamp>.html`: the generated run report.
- `index.html`: redirects to the latest report.
- `history.html`: lists generated report files.
- `screenshots`, `videos`, and `traces`: copied artifacts when Playwright provides them.

The reporter also prints live progress to the terminal and uses optional environment variables such as `TEST_ENV` and `TEST_AUTHOR` in the report metadata.
