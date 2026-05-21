# Projects

This directory holds standalone Playwright practice projects that are separate from the numbered lesson modules in `tests/`.

## Contents

- `Project_4_TTA_BANK/`: end-to-end banking task for sign up, transfer, confirmation, and dashboard balance verification.
- `Project_5_QA_Profile/`: scaffold for a future QA Profile automation project.

## Running

Run every project spec:

```bash
npx playwright test tests/Projects
```

Run one project:

```bash
npx playwright test tests/Projects/Project_4_TTA_BANK/Task1.spec.ts
```

Keep each project self-contained. Add project-specific specs, page objects, fixtures, or test data inside the matching project folder.
