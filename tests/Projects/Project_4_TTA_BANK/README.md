# Project 4: TTA Bank

This project automates a banking workflow against the TTA Bank training app.

## Current Task

`Task1.spec.ts` signs up a new user, transfers `$5,000`, confirms the transfer, and verifies the dashboard balance is `$45,000.00`.

The spec includes helper functions for:

- filling the sign-up form
- starting a transfer
- confirming the transfer
- checking the dashboard balance and recent activity

## Running

```bash
npx playwright test tests/Projects/Project_4_TTA_BANK/Task1.spec.ts
```

The test uses the hosted app URL defined in the spec and fixed demo data. Keep credentials and sensitive data out of this folder.
