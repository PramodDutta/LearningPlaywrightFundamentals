# Module 12: Handle SVG

This module shows how to locate and interact with SVG elements in Playwright tests. It covers SVG roots, child shapes, chart bars, map paths, SVG text labels, attribute reads, clicks, and assertions after SVG interactions.

## Key Files

- `248_SVG_Project.spec.ts`: uses Flipkart search, clicks an SVG search icon, waits for product results, and prints matching product titles.
- `249_SVG_Practice.spec.ts`: uses the Testing Academy SVG widget page to click a circle, assert output text, click a chart bar, choose a star rating, and iterate SVG bars by attribute.
- `250_Advance_SVG_pROJECT.spec.ts`: uses SimpleMaps India SVG to read state labels and click the Uttar Pradesh path.

## SVG Locator Patterns

CSS selectors work for SVG nodes:

```ts
page.locator('svg');
page.locator('#circle-blue');
page.locator('.bar');
```

XPath selectors need `name()` for SVG namespaced nodes:

```ts
page.locator("//*[name()='svg']//*[name()='text']");
page.locator("//*[name()='path' and contains(@class,'INUP')]");
```

Useful SVG actions and checks:

```ts
await page.locator('#circle-blue').click();
await page.locator('.bar').first().getAttribute('data-quarter');
await expect(page.locator('#shapes-output')).toContainText('Blue circle');
```

## Run This Module

Run all SVG specs:

```bash
npx playwright test tests/12_Handle_SVG
```

Run one lesson:

```bash
npx playwright test tests/12_Handle_SVG/249_SVG_Practice.spec.ts
```

Use headed mode when learning or debugging SVG clicks:

```bash
npx playwright test tests/12_Handle_SVG --headed
```
