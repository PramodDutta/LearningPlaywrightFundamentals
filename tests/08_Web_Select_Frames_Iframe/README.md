# Module 08: Web Selects, Dropdowns, and Frames

This module practices interacting with table rows, native select controls, custom dropdowns, and React Select-style widgets. The current specs run against top-level pages only; there is no active `frameLocator()` or iframe example in this folder yet.

## Key Files

- `234_Web.spec.ts`: selects web table rows using XPath sibling traversal and `tr:has(...)` CSS filtering.
- `235_Select_FramesWeb.spec.ts`: opens the HerokuApp dropdown page and keeps native select examples as commented reference.
- `236_Advacne_Select_Frames2.spec.ts`: selects values from custom dropdown triggers on the Testing Academy dropdowns page.
- `237_Advacne_Select_Pro.spec.ts`: covers React Select single, multi, creatable, and async dropdown interactions.
- `238_Advance_Select_Pro_v2.spec.ts`: adds stronger React Select examples with assertions, removal, grouped options, and async waiting.
- `util.ts`: contains a `selectValue(page, dropDownLabel, value)` helper pattern for clicking a labelled custom select trigger and choosing exact text.

## Interaction Patterns

- Web tables: combine XPath for nearby checkbox cells or use `tr:has(td:text(...))` to scope actions to a matching row.
- Native selects: use `page.selectOption('#dropdown', value)` or `locator.selectOption(value)` when the control is a real `<select>`.
- Custom dropdowns: click the trigger, then choose an exact visible option with `getByText(value, { exact: true })`.
- React Select: prefer stable `data-testid` locators, fill searchable inputs, choose `getByRole('option', { name })`, and assert selected values.
- Multi-selects: reopen the control for each option and press `Escape` when the menu should close.
- Async selects: fill the search input, assert the async menu contains the expected result, then click the option.
- Frames/iframes: when frame coverage is added, scope locators with `page.frameLocator('iframe-selector')` before interacting with controls inside the frame.

## Run This Module

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe
```

Run one lesson spec:

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe/238_Advance_Select_Pro_v2.spec.ts
```
