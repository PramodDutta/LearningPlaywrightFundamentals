# TTACart Project

This folder contains a larger end-to-end example that uses page objects for the TTA Cart practice application.

## Layout

- `pages`: page classes for login, inventory/cart, and checkout.
- `tests`: the TTACart end-to-end spec.
- `.env`: local credentials file. Do not commit real credentials.

## Environment

Create `TTACartProject/.env` with:

```bash
TTACART_USERNAME=your-username
TTACART_PASSWORD=your-password
```

## Run

From the repository root:

```bash
npx playwright test TTACartProject/tests/ttacartE2E.spec.ts
```

The flow logs in, adds products to the cart, opens checkout, fills checkout details, and verifies the expected cart and checkout URLs.
