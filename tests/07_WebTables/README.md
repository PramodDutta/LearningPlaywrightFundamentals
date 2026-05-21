# 07 Web Tables

This module covers reading HTML tables with Playwright, locating rows and cells, and extracting related values from table data.

## Key Files

- `232_WebTable_Basic.spec.ts` - uses `https://awesomeqa.com/webtable.html` to find `Helen Bennett`, read the adjacent country cell, and compare XPath-style traversal with Playwright native locators.
- `233_WebTable_Dyanamic.spec.ts` - uses `https://awesomeqa.com/webtable1.html` to count table rows and extract row data with `allInnerTexts()`.
- `234_WebTABLE_Employe_Management.spec.ts` - currently an empty placeholder for a future employee management table lesson.

## Web Table Patterns

- Count rows and columns before iterating through a table.
- Build dynamic XPath expressions when demonstrating row and column indexes.
- Use XPath axes such as `following-sibling::td` to read related cells in the same row.
- Prefer Playwright locators like `page.locator('table tbody tr', { hasText: '...' })` for readable row targeting.
- Use `locator('td').nth(index)` or `allInnerTexts()` to extract individual cells or full row data.
- Remember that XPath table indexes are one-based, while Playwright `nth()` indexes are zero-based.

## Run This Module

```bash
npx playwright test tests/07_WebTables
```

Run a single lesson spec:

```bash
npx playwright test tests/07_WebTables/232_WebTable_Basic.spec.ts
npx playwright test tests/07_WebTables/233_WebTable_Dyanamic.spec.ts
```
