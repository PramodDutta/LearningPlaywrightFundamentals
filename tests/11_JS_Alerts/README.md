# JS Alerts

This module covers handling browser JavaScript dialogs in Playwright:

- Alert dialogs with `dialog.accept()`
- Confirm dialogs with `dialog.accept()` and result assertions
- Prompt dialogs with `dialog.accept(value)` and submitted text assertions

## Key Files

- `243_JS_Alerts.spec.ts`: Exercises alert, confirm, and prompt dialogs on `https://the-internet.herokuapp.com/javascript_alerts`.

## Dialog Patterns

- Register `page.once('dialog', handler)` before clicking the button that opens the dialog.
- Assert dialog metadata with `dialog.type()`, `dialog.message()`, and `dialog.defaultValue()`.
- Accept alerts and confirms with `dialog.accept()`.
- Submit prompt text with `dialog.accept(inputText)`.
- Verify page feedback through the `#result` locator after the dialog closes.

## Run This Module

```bash
npx playwright test tests/11_JS_Alerts/243_JS_Alerts.spec.ts
```
