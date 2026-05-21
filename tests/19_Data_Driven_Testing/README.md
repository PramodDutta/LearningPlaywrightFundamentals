# Data Driven Testing

This module shows how to run the same Playwright flow with different input rows. It starts with inline test data, moves the data into files, and then uses Faker to generate dynamic users at runtime.

## Key Files

- `262_DDT_Simple.spec.ts`: keeps login data inline as an array of objects and creates one test per row.
- `263_DDT_CSV.spec.ts`: reads login rows from `login-data.csv` with `readCSV()`.
- `264_DDT_CSV.spec.ts`: uses CSV data with `beforeEach`, `afterEach`, and separate assertions for passing and failing rows.
- `265_DDT_JSON.spec.ts`: imports `registration-data.json` directly and loops over each JSON object.
- `266_DDT_FakerJS.spec.ts`: generates one random login attempt with Faker and validates the failed login alert.
- `267_FakerJS2.spec.ts`: fills a registration form with Faker-generated user fields.
- `268_FakerJS3.spec.ts`: wraps Faker data creation in a reusable `generateUser()` helper.
- `269_DDT_FakerJS.spec.ts`: combines a loop with Faker to create five generated registration tests.

## Data Readers

- `csvReader.ts`: reads comma-separated data into an array of string-keyed row objects.
- `yamlReader.ts`: reads YAML arrays, optionally from a named top-level key, and normalizes values to strings.
- `xlsxReader.ts`: reads the first Excel sheet, or a named sheet, and returns normalized string rows.

When adding new file-backed tests, prefer passing an explicit path from the spec directory, for example `path.join(__dirname, 'login-data.csv')`.

## Test Data

- `login-data.csv`: login scenarios for valid credentials, invalid credentials, empty fields, locked accounts, special characters, and SQL injection input.
- `login-data.yaml`: YAML version of the same login scenario shape.
- `registration-data.json`: registration scenarios for valid input, password mismatch, weak password, duplicate email, and invalid email format.

## Patterns Covered

- Looping over test data to generate multiple Playwright tests.
- Keeping test titles descriptive with values such as `description` or generated user numbers.
- Separating test data from test logic with CSV and JSON files.
- Reusing data-reader helpers for file-backed DDT.
- Branching assertions with fields such as `shouldPass` and `expectedError`.
- Using Faker for runtime-only names, emails, phone numbers, and passwords.

## Run This Module

Run all specs in this module:

```bash
npx playwright test tests/19_Data_Driven_Testing
```

Run one lesson spec:

```bash
npx playwright test tests/19_Data_Driven_Testing/264_DDT_CSV.spec.ts
```

Run with the browser visible:

```bash
npx playwright test tests/19_Data_Driven_Testing --headed
```
