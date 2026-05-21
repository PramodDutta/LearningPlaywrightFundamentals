# Session Storage

This module demonstrates how to preserve an authenticated browser session with Playwright and reuse it across tests. The examples use VWO login pages to show how cookies, local storage, and other browser state can be saved once and loaded later to skip the login flow.

## Key Files

- `228_Session.spec.ts`: standalone setup script that launches Chromium, logs in to VWO, waits for the dashboard or home route, and writes the saved state to `./user-session.json`.
- `229.TestVWo.spec.ts`: Playwright Test spec that loads `./user-session.json` through `test.use({ storageState })` and opens authenticated dashboard and settings URLs directly.

## Session-State Behavior

`context.storageState({ path: "./user-session.json" })` snapshots the browser context after login. When run from the repository root, the file is created as `user-session.json` at the root of the project, and the follow-up tests expect it in that same location.

If the saved session expires, login fails, or the account IDs change, regenerate `user-session.json` before running the dependent tests.

## Run

From the repository root:

```bash
npm ci
node --experimental-strip-types tests/04_Session_Storage/228_Session.spec.ts
npx playwright test tests/04_Session_Storage/229.TestVWo.spec.ts
```

Run the setup script first so `229.TestVWo.spec.ts` has a saved session to load.
