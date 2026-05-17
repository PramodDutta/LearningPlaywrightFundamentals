# 📘 PLAYWRIGHT ASSERTIONS & EXPECTATIONS — COMPLETE REFERENCE

> **TheTestingAcademy | TypeScript + Playwright**

---

## 📌 Run Tests

```bash
npx playwright test playwright-assertions.spec.ts -g "<test-name>"
```

---

# 📚 Categories Covered

1. **Locator Assertions (Auto-Retrying)**

   * Visibility
   * State
   * Text
   * Attributes
   * Values
   * Count
   * Accessibility
   * Screenshots

2. **Page Assertions**

   * Title
   * URL
   * Screenshot

3. **API Response Assertions**

   * `toBeOK`

4. **Generic Value Assertions (Jest-style)**

   * Equality
   * Numeric
   * String / Array
   * Object
   * Errors

5. **Modifiers**

   * `.not`
   * `.soft`
   * `expect.poll`
   * Custom timeout & messages

---

# 📦 Imports

```ts
import { test, expect, Page } from '@playwright/test';
```

---

# 1.1 Locator Assertions — Visibility & Presence

## ✅ `toBeVisible`

Element is rendered and visible.

```ts
test('toBeVisible', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});
```

---

## ✅ `toBeHidden`

Element is hidden or not present in DOM.

```ts
test('toBeHidden', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await expect(page.locator('#finish')).toBeHidden();
});
```

---

## ✅ `toBeAttached`

Element exists in the DOM.

```ts
test('toBeAttached', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.locator('footer')).toBeAttached();
});
```

---

## ✅ `toBeAttached({ attached: false })`

Assert element is detached from DOM.

```ts
test('toBeAttached detached', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(page.locator('.todo-list li')).toHaveCount(0);

  await expect(
    page.locator('.todo-list li').first()
  ).toBeAttached({ attached: false });
});
```

---

## ✅ `toBeInViewport`

Element is visible inside viewport.

```ts
test('toBeInViewport', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toBeInViewport();
});
```

---

## ✅ `toBeInViewport({ ratio })`

At least a percentage of the element is visible.

```ts
test('toBeInViewport with ratio', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toBeInViewport({ ratio: 0.5 });
});
```

---

# 1.2 Locator Assertions — Element State

## ✅ `toBeEnabled`

```ts
test('toBeEnabled', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(
    page.getByPlaceholder('What needs to be done?')
  ).toBeEnabled();
});
```

---

## ✅ `toBeDisabled`

```ts
test('toBeDisabled', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  await page.getByRole('button', { name: 'Enable' }).click();

  await expect(
    page.locator('input[type="text"]')
  ).toBeEnabled();
});
```

---

## ✅ `toBeEditable`

```ts
test('toBeEditable', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(
    page.getByPlaceholder('What needs to be done?')
  ).toBeEditable();
});
```

---

## ✅ `toBeChecked`

```ts
test('toBeChecked', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await expect(checkbox2).toBeChecked();
});
```

---

## ✅ `toBeChecked({ checked: false })`

```ts
test('unchecked checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox1 = page.locator('input[type="checkbox"]').nth(0);

  await expect(checkbox1).toBeChecked({ checked: false });
});
```

---

## ✅ `toBeEmpty`

```ts
test('toBeEmpty', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(
    page.getByPlaceholder('What needs to be done?')
  ).toBeEmpty();
});
```

---

## ✅ `toBeFocused`

```ts
test('toBeFocused', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.focus();

  await expect(input).toBeFocused();
});
```

---

# 1.3 Locator Assertions — Text Content

## ✅ `toHaveText`

```ts
test('toHaveText', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toHaveText('Get started');
});
```

---

## ✅ `toHaveText(RegExp)`

```ts
test('toHaveText regex', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toHaveText(/Playwright/);
});
```

---

## ✅ `toContainText`

```ts
test('toContainText', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toContainText('Playwright');
});
```

---

## ✅ `toContainText({ ignoreCase: true })`

```ts
test('ignore case', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toContainText('playwright', {
    ignoreCase: true,
  });
});
```

---

# 1.4 Locator Assertions — Attributes, Classes & CSS

## ✅ `toHaveAttribute`

```ts
test('toHaveAttribute', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toHaveAttribute('href', '/docs/intro');
});
```

---

## ✅ `toHaveClass`

```ts
test('toHaveClass', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Learn Playwright');
  await input.press('Enter');

  await expect(
    page.locator('.todo-list li').first()
  ).toHaveClass(/todo/);
});
```

---

## ✅ `toHaveCSS`

```ts
test('toHaveCSS', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toHaveCSS('display', 'inline-block');
});
```

---

## ✅ `toHaveJSProperty`

```ts
test('toHaveJSProperty', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await expect(checkbox2).toHaveJSProperty('checked', true);
});
```

---

# 1.5 Locator Assertions — Input Values

## ✅ `toHaveValue`

```ts
test('toHaveValue', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Automate everything');

  await expect(input).toHaveValue('Automate everything');
});
```

---

## ✅ `toHaveValue(RegExp)`

```ts
test('toHaveValue regex', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Test-Case-123');

  await expect(input).toHaveValue(/Test-Case-\d+/);
});
```

---

# 1.6 Locator Assertions — Count

## ✅ `toHaveCount`

```ts
test('toHaveCount', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Task A');
  await input.press('Enter');

  await input.fill('Task B');
  await input.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveCount(2);
});
```

---

# 1.7 Locator Assertions — Accessibility

## ✅ `toHaveRole`

```ts
test('toHaveRole', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toHaveRole('link');
});
```

---

## ✅ `toHaveAccessibleName`

```ts
test('toHaveAccessibleName', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toHaveAccessibleName('Get started');
});
```

---

## ✅ `toMatchAriaSnapshot`

```ts
test('toMatchAriaSnapshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.locator('nav').first()
  ).toMatchAriaSnapshot(`
    - navigation
  `);
});
```

---

# 1.8 Locator Assertions — Visual Testing

## ✅ `toHaveScreenshot`

```ts
test('toHaveScreenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toHaveScreenshot('hero-heading.png');
});
```

---

# 2. Page Assertions

## ✅ `toHaveTitle`

```ts
test('toHaveTitle', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
```

---

## ✅ `toHaveURL`

```ts
test('toHaveURL', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveURL('https://playwright.dev/');
});
```

---

## ✅ Page Screenshot

```ts
test('page screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
  });
});
```

---

# 3. API Response Assertions

## ✅ `toBeOK`

```ts
test('toBeOK', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users/2'
  );

  await expect(response).toBeOK();
});
```

---

## ✅ Negative API Assertion

```ts
test('not.toBeOK', async ({ request }) => {
  const response = await request.get(
    'https://reqres.in/api/users/999999'
  );

  await expect(response).not.toBeOK();
});
```

---

# 4. Generic Assertions

# 4.1 Equality Assertions

## ✅ `toBe`

```ts
test('toBe', () => {
  expect(2 + 2).toBe(4);
});
```

---

## ✅ `toEqual`

```ts
test('toEqual', () => {
  expect({
    name: 'Playwright',
    type: 'Framework',
  }).toEqual({
    name: 'Playwright',
    type: 'Framework',
  });
});
```

---

## ✅ `toStrictEqual`

```ts
test('toStrictEqual', () => {
  class Config {
    retries = 2;
  }

  expect(new Config()).toStrictEqual(new Config());
});
```

---

# 4.2 Numeric Assertions

## ✅ `toBeGreaterThan`

```ts
test('toBeGreaterThan', () => {
  expect(10).toBeGreaterThan(5);
});
```

---

## ✅ `toBeCloseTo`

```ts
test('toBeCloseTo', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});
```

---

# 4.3 String & Array Assertions

## ✅ `toContain`

```ts
test('toContain', () => {
  expect(['chrome', 'firefox']).toContain('chrome');
});
```

---

## ✅ `toMatch`

```ts
test('toMatch', () => {
  expect('Playwright Framework').toMatch(/Framework/);
});
```

---

## ✅ `toHaveLength`

```ts
test('toHaveLength', () => {
  expect(['a', 'b', 'c']).toHaveLength(3);
});
```

---

# 4.4 Object Assertions

## ✅ `toHaveProperty`

```ts
test('toHaveProperty', () => {
  const response = {
    user: {
      id: 1,
      role: 'admin',
    },
  };

  expect(response).toHaveProperty('user.role', 'admin');
});
```

---

## ✅ `toMatchObject`

```ts
test('toMatchObject', () => {
  expect({
    id: 1,
    name: 'John',
    email: 'john@test.com',
  }).toMatchObject({
    id: 1,
    name: 'John',
  });
});
```

---

# 4.5 Error Assertions

## ✅ `toThrow`

```ts
test('toThrow', () => {
  const parse = () => JSON.parse('{bad-json}');

  expect(parse).toThrow();
});
```

---

## ✅ `toThrow(RegExp)`

```ts
test('toThrow regex', () => {
  const validate = () => {
    throw new Error('Invalid email');
  };

  expect(validate).toThrow(/Invalid/);
});
```

---

# 5. Modifiers & Advanced Assertions

# 5.1 `.not`

## ✅ Negation Assertions

```ts
test('not modifier', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', { level: 1 })
  ).not.toHaveText('Selenium');
});
```

---

# 5.2 `expect.soft`

## ✅ Soft Assertions

```ts
test('soft assertions', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect.soft(page).toHaveTitle(/Playwright/);

  await expect.soft(
    page.getByRole('heading', { level: 1 })
  ).toBeVisible();
});
```

---

# 5.3 `expect.poll`

## ✅ Polling Assertions

```ts
test('expect.poll', async ({ request }) => {
  await expect
    .poll(async () => {
      const response = await request.get(
        'https://reqres.in/api/users/2'
      );

      return response.status();
    })
    .toBe(200);
});
```

---

# 5.4 Custom Timeout

## ✅ Per Assertion Timeout

```ts
test('custom timeout', async ({ page }) => {
  await page.goto(
    'https://the-internet.herokuapp.com/dynamic_loading/2'
  );

  await page.getByRole('button', {
    name: 'Start',
  }).click();

  await expect(
    page.locator('#finish')
  ).toBeVisible({
    timeout: 15_000,
  });
});
```

---

# 5.5 Real-World Example

## ✅ TodoMVC Flow

```ts
test('todo flow', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder(
    'What needs to be done?'
  );

  const items = page.locator('.todo-list li');

  await expect(items).toHaveCount(0);

  await input.fill('Master Playwright');
  await input.press('Enter');

  await expect(items).toHaveCount(1);

  await expect(items.first()).toContainText(
    'Master Playwright'
  );
});
```

---

# ⚡ Quick Reference Cheat Sheet

| Category      | Assertion                | Auto Retry |
| ------------- | ------------------------ | ---------- |
| Visibility    | `toBeVisible()`          | ✅          |
| Visibility    | `toBeHidden()`           | ✅          |
| Presence      | `toBeAttached()`         | ✅          |
| Viewport      | `toBeInViewport()`       | ✅          |
| State         | `toBeEnabled()`          | ✅          |
| State         | `toBeDisabled()`         | ✅          |
| State         | `toBeEditable()`         | ✅          |
| State         | `toBeChecked()`          | ✅          |
| State         | `toBeFocused()`          | ✅          |
| Text          | `toHaveText()`           | ✅          |
| Text          | `toContainText()`        | ✅          |
| Attribute     | `toHaveAttribute()`      | ✅          |
| CSS           | `toHaveCSS()`            | ✅          |
| JS Property   | `toHaveJSProperty()`     | ✅          |
| Values        | `toHaveValue()`          | ✅          |
| Count         | `toHaveCount()`          | ✅          |
| Accessibility | `toHaveRole()`           | ✅          |
| Accessibility | `toHaveAccessibleName()` | ✅          |
| Accessibility | `toMatchAriaSnapshot()`  | ✅          |
| Screenshot    | `toHaveScreenshot()`     | ✅          |
| Page          | `toHaveTitle()`          | ✅          |
| Page          | `toHaveURL()`            | ✅          |
| API           | `toBeOK()`               | ❌          |
| Equality      | `toBe()`                 | ❌          |
| Equality      | `toEqual()`              | ❌          |
| Equality      | `toStrictEqual()`        | ❌          |
| Numeric       | `toBeGreaterThan()`      | ❌          |
| Numeric       | `toBeCloseTo()`          | ❌          |
| Arrays        | `toContain()`            | ❌          |
| Regex         | `toMatch()`              | ❌          |
| Objects       | `toHaveProperty()`       | ❌          |
| Errors        | `toThrow()`              | ❌          |

---

# 🧠 Rule of Thumb

* **Locator/Page Assertions** → Auto-retry until timeout
* **Generic Assertions** → Execute once immediately
* Use `.soft` → Continue execution after failures
* Use `expect.poll` → Poll non-locator values repeatedly
* Prefer `toHaveCount(0)` over `.not.toBeVisible()` for lists

---

# ✅ Recommended File Name

```text
PLAYWRIGHT_ASSERTIONS_COMPLETE_REFERENCE.md
```
