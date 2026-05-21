# Module 16: Scroll To Element

This module demonstrates common Playwright scroll patterns against the Testing Academy scroll widget.

## Key Files

- `255_ScrollToView.spec.ts`: contains the scroll-to-view lesson test and commented examples for manual page scrolling.

## What It Covers

- Navigating to `https://app.thetestingacademy.com/playwright/widgets/scroll`.
- Bringing off-screen elements into view with `locator.scrollIntoViewIfNeeded()`.
- Scrolling a lazy-loaded list until additional items are appended.
- Waiting for scroll-triggered content with `expect.poll()`.
- Optional manual scrolling examples using `page.evaluate()` with `window.scrollBy()` and `window.scrollTo()`.

## Scroll Patterns

- Use `scrollIntoViewIfNeeded()` when an element should be visible before clicking, asserting, or interacting.
- Use `window.scrollBy(0, pixels)` for relative scrolling.
- Use `window.scrollTo(0, document.body.scrollHeight)` to jump to the bottom of the page.
- Use `window.scrollTo(0, 0)` to return to the top.
- For lazy content, capture the initial item count, scroll the last item into view, then poll until the count increases.

## Run This Module

```bash
npx playwright test tests/16_Scroll_toElement/255_ScrollToView.spec.ts
```

Use headed mode when you want to observe the scroll behavior:

```bash
npm run test:headed -- tests/16_Scroll_toElement/255_ScrollToView.spec.ts
```
