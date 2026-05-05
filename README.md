# Learning Playwright Fundamentals

A hands-on project for learning Playwright test automation fundamentals with TypeScript.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/01_Basics/Lab209.spec.ts

# Run tests from a specific folder
npx playwright test tests/03_Locators_Commands/
```

## Project Structure

```
├── tests/
│   ├── 01_Basics/                              # Basic Playwright test examples
│   │   ├── Lab209.spec.ts                      # Title verification test
│   │   ├── Lab210_Test_Annoations.spec.ts      # Test annotations demo
│   │   └── Util.ts                             # Utility functions
│   ├── 02_first_tests/                         # Browser context and page examples
│   │   ├── 211_First_Running_Test.spec.ts      # First running test
│   │   ├── 212_Browser_Context_Pages.spec.ts   # Browser, context, pages demo
│   │   ├── 213_Multile_Context.spec.ts         # Multiple browser contexts
│   │   ├── 214_Multiple_Pages.spec.ts          # Multiple pages handling
│   │   ├── 215_TEST_PW.spec.ts                 # Playwright test basics
│   │   ├── 216_Manual_Context.spec.ts          # Manual context creation
│   │   ├── 217_Manual_Context_Options.spec.ts  # Context options
│   │   └── 218_Context_Reuse.spec.ts           # Context reuse patterns
│   ├── 03_Locators_Commands/                   # Locators and navigation commands
│   │   ├── 219_Commands.spec.ts                # goto waitUntil options
│   │   ├── 220_GotoCommands.spec.ts            # goto + referer options
│   │   ├── 221_Reffer_Command.spec.ts          # Referer header via context
│   │   ├── 222_Automation.vwo.com.spec.ts      # Locator basics (lazy, strict, auto-wait)
│   │   ├── 223_Xpath.spec.ts                   # XPath locator example
│   │   ├── 224_GetRole.spec.ts                 # getByRole locator example
│   │   ├── 225_CSS_Locators.spec.ts            # CSS locators with first/nth/last
│   │   ├── 226_PressSequentially.spec.ts       # pressSequentially + page.goBack
│   │   ├── 227_Cookie.spec.ts                  # context cookies (read/add/clear)
│   │   └── index.html                          # Sample HTML for practice
│   ├── 04_Session_Storage/                     # Session reuse via storageState
│   │   ├── 228_Session.spec.ts                 # Save logged-in session to JSON
│   │   └── 229.TestVWo.spec.ts                 # Reuse saved session — skip login
│   ├── 05_Allure_Reporting/                    # Allure reporting examples
│   │   └── 230_Login.spec.ts                   # Login test annotated with Allure metadata
│   ├── 06_Multiple_Element_/                   # Handling multiple elements
│   │   └── 231_Multiple_Element.spec.ts        # Basic multiple element interactions
│   └── 07_WebTables/                           # Web table automation
│       └── 232_WebTable_Basic.spec.ts          # Web table extraction and verification
│   └── Projects/                               # Real-world project tests
│       └── Project_4_TTA_BANK/
│           └── Task1.spec.ts                   # TTA Bank sign-up, transfer & balance verification
├── utils/
│   └── CustomTTAReporter.ts                    # Custom HTML reporter (TheTestingAcademy)
├── playwright.config.ts     # Playwright configuration
├── package.json
└── .github/
    └── workflows/
        └── playwright.yml   # CI/CD workflow
```

## Test Examples

### Basic Title Verification (Lab209)
Demonstrates basic page navigation and title assertion.

### Test Annotations (Lab210)
Demonstrates Playwright test annotations:
- `test.skip()` - Skip a test
- `test.only()` - Run only this test
- `test.fail()` - Mark test as expected to fail
- `test.slow()` - Extend timeout (3x)
- Conditional skip based on browser

### Browser Context and Pages (02_first_tests)
Demonstrates browser context and page management:
- Browser, Context, and Page hierarchy
- Creating multiple browser contexts
- Working with multiple pages/tabs
- Manual context creation and options
- Context reuse patterns

### Goto Commands (220_GotoCommands)
Demonstrates `page.goto()` options:
- Default `load` wait strategy
- Custom `referer` header on navigation

### Locators & Commands (03_Locators_Commands)
Demonstrates navigation commands and locator fundamentals:
- `waitUntil` options: `commit`, `domcontentloaded`, `load`, `networkidle`
- Setting `Referer` header for an entire browser context via `extraHTTPHeaders`
- Locators are lazy, strict, and auto-waiting (CSS selectors, fill, click, assertions)
- XPath locators using the `xpath=` prefix (`223_Xpath.spec.ts`)
- Role-based locators via `getByRole()` for accessible, user-facing queries (`224_GetRole.spec.ts`)
- CSS locators with `first()`, `nth()`, `last()` and iterating via `count()` (`225_CSS_Locators.spec.ts`)
- `pressSequentially()` for realistic typing and `page.goBack()` navigation (`226_PressSequentially.spec.ts`)
- Reading, adding, and clearing cookies via `context.cookies()` / `context.addCookies()` (`227_Cookie.spec.ts`)

### Session Storage (04_Session_Storage)
Demonstrates saving and reusing authenticated browser sessions to skip repetitive logins:
- `228_Session.spec.ts` — log in once and persist cookies/localStorage with `context.storageState({ path })`
- `229.TestVWo.spec.ts` — load the saved state via `test.use({ storageState })` and jump straight to authenticated pages

### Allure Reporting (05_Allure_Reporting)
Demonstrates rich test reporting via the Allure framework:
- `230_Login.spec.ts` — annotate tests with `allure.epic`, `allure.feature`, `allure.story`, and `allure.description` for structured reports

### Multiple Elements (06_Multiple_Element_)
Demonstrates handling multiple elements on a page:
- `231_Multiple_Element.spec.ts` — basic interactions with multiple elements and assertions

### Web Tables (07_WebTables)
Demonstrates automating and verifying HTML tables:
- `232_WebTable_Basic.spec.ts` — verify table headers, extract cell data, and iterate over rows

### Projects (Projects)
Real-world end-to-end project scenarios:
- `Project_4_TTA_BANK/Task1.spec.ts` — TTA Bank: sign-up, transfer funds, and verify dashboard balance

## Viewing Reports

```bash
# Open the default Playwright HTML report
npx playwright show-report

# Generate and open the Allure report
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report

# The custom TTA reporter writes its output to ./tta-report
```

## CI/CD

This project includes a GitHub Actions workflow that:
- Runs on push/PR to main/master branches
- Installs dependencies and Playwright browsers
- Runs all tests
- Uploads test reports as artifacts

## Configuration

The `playwright.config.ts` file includes:
- Test directory: `./tests`
- Parallel execution enabled
- Multiple reporters: HTML, Allure (`allure-playwright`), and the custom `utils/CustomTTAReporter.ts`
- Chromium browser configured
- Full HD viewport (`1920x1080`) for maximized browser window
- Trace, video, and screenshot capture set to `on` for every test (great for learning/debugging)
- Headed mode enabled (`headless: false`) for easier learning and debugging

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
