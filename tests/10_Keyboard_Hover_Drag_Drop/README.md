# Keyboard, Hover, Drag and Drop

This module practices Playwright interactions that go beyond basic clicks and typing: keyboard events, hover-triggered menus, drag-and-drop, manual mouse movement, and right-click context menus.

## Key Files

- `242_keyboard.spec.ts`: sends key presses to `keycode.info`, including letters, arrows, and modifier keys. It also captures screenshots for selected key states.
- `244_Spicejet_Hover.spec.ts`: uses hover to reveal Add-ons menus, then clicks or reads submenu items.
- `245_Drag_Drop.spec.ts`: uses `locator.dragTo()` on a simple two-column drag-and-drop page and verifies the swapped state.
- `246_Drag_Drop_advance_Kanban.spec.ts`: demonstrates a manual mouse path with `page.mouse.move()`, `down()`, and `up()` for a Kanban-style drag-and-drop widget.
- `247_RightClick.spec.ts`: opens a context menu with a right-click, reads the available options, and selects `Copy`.

## Interaction Patterns

- Use `page.keyboard.press()`, `keyboard.down()`, and `keyboard.up()` for key and modifier input.
- Use `locator.hover()` before interacting with menu items that are only visible on hover.
- Use `locator.dragTo()` for straightforward drag-and-drop targets.
- Use element `boundingBox()` values plus `page.mouse` actions when custom drag-and-drop controls need a real pointer path.
- Use `locator.click({ button: 'right' })` to trigger context menus.
- Add `expect()` assertions around state changes so interaction tests prove the result, not just the action.

## Run This Module

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop
```

Run an individual lesson:

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop/245_Drag_Drop.spec.ts
```

For visible browser debugging:

```bash
npm run test:headed -- tests/10_Keyboard_Hover_Drag_Drop
```
