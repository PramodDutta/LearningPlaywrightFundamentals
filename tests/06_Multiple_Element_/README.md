# Module 06: Multiple Elements

This module introduces handling collections of matching elements with Playwright locators. The example opens The Testing Academy multiple-element filter page, reads the visible link text from a repeated link list, clicks a specific item, and then iterates over the same locator set to inspect attributes.

## Key Files

- `231_Multiple_Element.spec.ts`: demonstrates collecting repeated `a.list-group-item` links, filtering by text in a loop, clicking the first matching `My Account` link, and printing each link's `href`.

## Locator Collection Patterns

- `page.locator('a.list-group-item').allInnerTexts()` returns the text content for every matching element as a `string[]`. Use this when you need to inspect or compare displayed text before choosing an action.
- `page.getByText(linkText).first().click()` clicks the first element matching dynamic text from the collected list. The `.first()` call avoids strict-mode issues when more than one element has the same text.
- `page.locator('a.list-group-item').all()` returns an array of `Locator` objects. Use this when each matching element still needs locator actions or attribute reads, such as `getAttribute('href')`.

Prefer keeping a shared collection selector stable, then switch between `allInnerTexts()` for text extraction and `all()` for per-element locator operations.

## Run This Module

```bash
npx playwright test tests/06_Multiple_Element_/231_Multiple_Element.spec.ts
```

For a headed browser run:

```bash
npm run test:headed -- tests/06_Multiple_Element_/231_Multiple_Element.spec.ts
```
