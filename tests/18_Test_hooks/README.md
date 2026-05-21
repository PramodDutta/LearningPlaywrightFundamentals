# Test Hooks

This module shows how Playwright tests can control setup, teardown, reporting context, and execution flow with hooks, annotations, steps, and grouped suites.

## Key Files

- `258_Test_HOOK.spec.ts`: demonstrates test annotations with `test.skip()`, `test.slow()`, `test.fixme()`, and `test.fail()`.
- `259_Grouped_TEST.spec.ts`: uses `test.step()` to split one login-form scenario into named report steps.
- `260_Test_Before_After.spec.ts`: demonstrates `beforeAll`, `beforeEach`, `afterEach`, and `afterAll`; failed tests capture a screenshot with `testInfo`.
- `261_Group_Describe.spec.ts`: demonstrates `test.describe.serial()` for ordered tests, plus standalone tests that can run independently.

## Patterns Covered

- Use annotations inside tests when behavior depends on browser support, known defects, or expected failures.
- Use `test.step()` to make reports easier to read without splitting one scenario into multiple tests.
- Use `beforeEach` for repeated page setup and `beforeAll` or `afterAll` for worker-level setup and teardown.
- Use `afterEach` with `testInfo.status` and `testInfo.expectedStatus` to collect artifacts only when a test ends unexpectedly.
- Use `test.describe.serial()` only when tests must share ordering; keep independent tests outside serial groups.

## Run This Module

```bash
npx playwright test tests/18_Test_hooks
```

Run one lesson file:

```bash
npx playwright test tests/18_Test_hooks/260_Test_Before_After.spec.ts
```

Debug with UI mode:

```bash
npm run test:ui -- tests/18_Test_hooks
```
