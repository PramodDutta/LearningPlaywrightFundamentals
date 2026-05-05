<div align="center">

# 🎭 Learning Playwright Fundamentals

### *A hands-on, lab-by-lab journey into modern end-to-end test automation with Playwright + TypeScript*

[![Playwright Tests](https://github.com/thetestingacademy/LearningPlaywrightFundamentals/actions/workflows/playwright.yml/badge.svg)](../../actions)
![Playwright](https://img.shields.io/badge/Playwright-1.59-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-Reporting-FF5722)
![License](https://img.shields.io/badge/License-ISC-blue)

> *“From `npx playwright test` to a multi-context, session-cached, Allure-reported, CI-running framework — one numbered lab at a time.”*

</div>

---

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Learning Roadmap](#-learning-roadmap)
3. [Architecture & Mental Model](#-architecture--mental-model)
4. [Project Structure](#-project-structure)
5. [Quick Start](#-quick-start)
6. [Topics Covered (Lab by Lab)](#-topics-covered-lab-by-lab)
   - [01 — Basics](#01--basics)
   - [02 — First Tests (Browser / Context / Page)](#02--first-tests-browser--context--page)
   - [03 — Locators & Commands](#03--locators--commands)
   - [04 — Session Storage](#04--session-storage)
   - [05 — Allure Reporting](#05--allure-reporting)
   - [06 — Multiple Elements](#06--multiple-elements)
   - [07 — Web Tables](#07--web-tables)
   - [Projects — TTA Bank E2E](#projects--tta-bank-e2e)
7. [Locator Strategy Cheat Sheet](#-locator-strategy-cheat-sheet)
8. [Wait Strategies (`waitUntil`)](#-wait-strategies-waituntil)
9. [Reporting](#-reporting)
10. [CI / CD Workflow](#-ci--cd-workflow)
11. [Quick Git Workflow (`go.sh`)](#-quick-git-workflow-gosh)
12. [Configuration Reference](#-configuration-reference)
13. [Resources](#-resources)

---

## 🎯 Overview

This repository is the companion code for a structured **Playwright + TypeScript** course taught by **The Testing Academy**. Each lab is numbered (`Lab209`, `211`, `212` … `233`) so the progression maps 1:1 to the curriculum.

You will move through the four classic stages of automation maturity:

```mermaid
flowchart LR
    A[🍼 Hello World<br/>Lab 209] --> B[🧠 Browser/Context/Page<br/>Labs 211–218]
    B --> C[🎯 Locators & Navigation<br/>Labs 219–227]
    C --> D[🔐 Session Reuse<br/>Labs 228–229]
    D --> E[📊 Reporting<br/>Lab 230]
    E --> F[📑 Multi-element / Tables<br/>Labs 231–233]
    F --> G[🏦 Real Project<br/>TTA Bank]

    style A fill:#fef3c7,stroke:#f59e0b,color:#000
    style G fill:#d1fae5,stroke:#10b981,color:#000
```

---

## 🗺 Learning Roadmap

| Stage | Module | Labs | What You Master |
|:-----:|:-------|:----:|:----------------|
| 1 | `01_Basics` | 209–210 | First test, annotations (`skip`, `only`, `fail`, `slow`) |
| 2 | `02_first_tests` | 211–218 | Browser → Context → Page hierarchy, multi-tab, multi-user |
| 3 | `03_Locators_Commands` | 219–227 | `goto` options, locators (CSS / XPath / Role), cookies |
| 4 | `04_Session_Storage` | 228–229 | `storageState` — login once, reuse session forever |
| 5 | `05_Allure_Reporting` | 230 | Allure annotations: epic → feature → story |
| 6 | `06_Multiple_Element_` | 231 | `allInnerTexts`, iterating collections |
| 7 | `07_WebTables` | 232–233 | Static + dynamic HTML table extraction |
| 8 | `Projects/Project_4_TTA_BANK` | Task1 | Full E2E flow: signup → transfer → verify balance |

---

## 🧠 Architecture & Mental Model

### The Browser → Context → Page Hierarchy

Playwright's golden rule: **one Browser, many Contexts, many Pages**. Each Context is an *isolated* incognito-like profile — its own cookies, its own `localStorage`, its own user.

```mermaid
graph TD
    B[🌐 Browser<br/><i>Heaviest object — launch once</i>]
    B --> C1[📁 Context 1<br/>Admin user]
    B --> C2[📁 Context 2<br/>Viewer user]
    B --> C3[📁 Context 3<br/>Anonymous]

    C1 --> P1[📄 Page A]
    C1 --> P2[📄 Page B]
    C2 --> P3[📄 Page C]
    C3 --> P4[📄 Page D]
    C3 --> P5[📄 Page E]

    style B fill:#1e3a8a,stroke:#1e40af,color:#fff
    style C1 fill:#7c3aed,stroke:#6d28d9,color:#fff
    style C2 fill:#7c3aed,stroke:#6d28d9,color:#fff
    style C3 fill:#7c3aed,stroke:#6d28d9,color:#fff
    style P1 fill:#10b981,stroke:#059669,color:#fff
    style P2 fill:#10b981,stroke:#059669,color:#fff
    style P3 fill:#10b981,stroke:#059669,color:#fff
    style P4 fill:#10b981,stroke:#059669,color:#fff
    style P5 fill:#10b981,stroke:#059669,color:#fff
```

| Object | Cost | Isolation | Use |
|:-------|:----:|:---------:|:----|
| `Browser` | 🐢 Slow | None | Launch **once** per test run |
| `Context` | ⚡ Fast | Full (cookies / storage) | One **per user role** or **per test** |
| `Page` | 🚀 Instant | Shares context | Tabs inside the same logical session |

### How a Playwright Test Actually Runs

```mermaid
sequenceDiagram
    participant T as Test Runner
    participant B as Browser
    participant C as Context
    participant P as Page
    participant S as Web Server

    T->>B: chromium.launch()
    B-->>T: Browser instance
    T->>C: browser.newContext()
    C-->>T: Fresh isolated session
    T->>P: context.newPage()
    P-->>T: New tab
    T->>P: page.goto(url)
    P->>S: HTTP GET
    S-->>P: HTML + assets
    P-->>T: Page loaded ✅
    T->>P: locator.click() / fill()
    Note over P: Auto-wait for actionability
    P-->>T: Action complete
    T->>P: expect(page).toHaveTitle(...)
    Note over T: Test passes / fails
    T->>C: context.close()
    T->>B: browser.close()
```

### Locator Resolution — Lazy, Strict, Auto-Waiting

```mermaid
flowchart TD
    A[page.locator&#40;'#login'&#41;] --> B{Locator created<br/><i>nothing happens yet — lazy</i>}
    B --> C[await locator.click&#40;&#41;]
    C --> D{Auto-wait until<br/>element actionable}
    D -->|✅ Visible| E{Strict check —<br/>exactly 1 match?}
    D -->|⏳ Timeout 30s| F[❌ TimeoutError]
    E -->|Yes| G[🟢 Click executed]
    E -->|>1 match| H[❌ StrictModeViolation]

    style B fill:#fef3c7,stroke:#f59e0b,color:#000
    style G fill:#d1fae5,stroke:#10b981,color:#000
    style F fill:#fee2e2,stroke:#ef4444,color:#000
    style H fill:#fee2e2,stroke:#ef4444,color:#000
```

---

## 📁 Project Structure

```
LearningPlaywrightFundamentals/
│
├── tests/
│   ├── 01_Basics/                              # 🍼 Hello-world labs
│   │   ├── Lab209.spec.ts                      # First page.goto + title assertion
│   │   ├── Lab210_Test_Annoations.spec.ts      # skip / only / fail / slow
│   │   └── Util.ts
│   │
│   ├── 02_first_tests/                         # 🧠 Browser / Context / Page
│   │   ├── 211_First_Running_Test.spec.ts
│   │   ├── 212_Browser_Context_Pages.spec.ts   # Manual 3-level launch
│   │   ├── 213_Multile_Context.spec.ts         # Two users in parallel
│   │   ├── 214_Multiple_Pages.spec.ts          # Multi-tab inside one context
│   │   ├── 215_TEST_PW.spec.ts
│   │   ├── 216_Manual_Context.spec.ts
│   │   ├── 217_Manual_Context_Options.spec.ts  # viewport / locale
│   │   └── 218_Context_Reuse.spec.ts           # test.use({...})
│   │
│   ├── 03_Locators_Commands/                   # 🎯 Finding & acting
│   │   ├── 219_Commands.spec.ts                # waitUntil options
│   │   ├── 220_GotoCommands.spec.ts            # goto + referer
│   │   ├── 221_Reffer_Command.spec.ts          # context-level Referer
│   │   ├── 222_Automation.vwo.com.spec.ts      # Locator basics
│   │   ├── 223_Xpath.spec.ts                   # XPath
│   │   ├── 224_GetRole.spec.ts                 # getByRole (accessible)
│   │   ├── 225_CSS_Locators.spec.ts            # first / nth / last
│   │   ├── 226_PressSequentially.spec.ts       # realistic typing
│   │   ├── 227_Cookie.spec.ts                  # cookies CRUD
│   │   └── index.html                          # Local practice page
│   │
│   ├── 04_Session_Storage/                     # 🔐 Skip the login
│   │   ├── 228_Session.spec.ts                 # Save → user-session.json
│   │   └── 229.TestVWo.spec.ts                 # Reuse via test.use({ storageState })
│   │
│   ├── 05_Allure_Reporting/                    # 📊 Rich reports
│   │   └── 230_Login.spec.ts                   # epic / feature / story
│   │
│   ├── 06_Multiple_Element_/                   # 📑 Collections
│   │   └── 231_Multiple_Element.spec.ts        # allInnerTexts + iterate
│   │
│   ├── 07_WebTables/                           # 🗂 HTML tables
│   │   ├── 232_WebTable_Basic.spec.ts          # Static, XPath + Native
│   │   └── 233_WebTable_Dyanamic.spec.ts       # Dynamic structured extraction
│   │
│   └── Projects/
│       └── Project_4_TTA_BANK/
│           └── Task1.spec.ts                   # 🏦 Signup → Transfer → Verify
│
├── utils/
│   └── CustomTTAReporter.ts                    # Custom HTML report → ./tta-report
│
├── .github/workflows/
│   └── playwright.yml                          # CI: Ubuntu + Node LTS + artifacts
│
├── playwright.config.ts                        # FullHD, headed, trace=on, allure
├── package.json                                # npm scripts: test / report / go
├── go.sh                                       # One-shot stage → commit → push
├── user-session.json                           # Saved storage state (Lab 228)
└── README.md                                   # ← you are here
```

---

## 🚀 Quick Start

### 1. Prerequisites

- **Node.js** — LTS version
- **npm**
- macOS / Linux / Windows

### 2. Install

```bash
git clone <this-repo>
cd LearningPlaywrightFundamentals

npm install                  # Install deps
npx playwright install       # Download Chromium / Firefox / WebKit binaries
```

### 3. Run

```bash
npm test                     # 🏃 All tests, Chromium only (config'd)
npm run test:headed          # 👀 Watch the browser
npm run test:ui              # 🖥 Open Playwright's interactive UI
npm run report               # 📈 Open the HTML report
npm run report:tta           # 🎓 Open the custom TTA report
```

### 4. Run a single lab

```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
npx playwright test tests/03_Locators_Commands/   # entire folder
npx playwright test -g "Helen Bennett"            # by test name
```

---

## 📖 Topics Covered (Lab by Lab)

### 01 — Basics

| Lab | File | Concept |
|:---:|:-----|:--------|
| 209 | `Lab209.spec.ts` | First test: `page.goto` + `expect(page).toHaveTitle(...)` |
| 210 | `Lab210_Test_Annoations.spec.ts` | `test.skip` / `.only` / `.fail` / `.slow` + conditional skip per browser |

```ts
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
```

---

### 02 — First Tests (Browser / Context / Page)

The heart of Playwright's architecture. Two ways to use it:

```mermaid
flowchart LR
    subgraph Manual["📦 Manual API (Lab 212-217)"]
        M1[chromium.launch] --> M2[browser.newContext] --> M3[context.newPage]
    end
    subgraph Fixture["✨ Test Fixtures (Lab 218+)"]
        F1["test('...', async ({ page }) => {...})"]
        F2[Playwright auto-creates<br/>browser + context + page<br/>per test]
        F1 --> F2
    end
    style Manual fill:#fef3c7,stroke:#f59e0b,color:#000
    style Fixture fill:#d1fae5,stroke:#10b981,color:#000
```

| Lab | Demonstrates |
|:---:|:-------------|
| 212 | Manual 3-level launch with explicit cleanup (`page.close → context.close → browser.close`) |
| 213 | **Two users in parallel** — Admin context + Viewer context, fully isolated |
| 214 | **Multiple tabs in one context** — Tab 2 inherits Tab 1's cookies |
| 216–217 | `browser.newContext({ viewport, locale, extraHTTPHeaders })` |
| 218 | `test.use({ viewport, locale })` to apply config to every test in a `describe` |

---

### 03 — Locators & Commands

#### `page.goto()` Wait Strategies (Lab 219)

```mermaid
flowchart LR
    A[goto called] --> B{waitUntil}
    B -->|commit| C[⚡ Server responded<br/><i>fastest</i>]
    B -->|domcontentloaded| D[📄 HTML parsed]
    B -->|load<br/><b>default</b>| E[🖼 Images / CSS / JS done]
    B -->|networkidle| F[💤 No requests for 500ms<br/><i>slowest</i>]

    style C fill:#d1fae5,stroke:#10b981,color:#000
    style E fill:#fef3c7,stroke:#f59e0b,color:#000
    style F fill:#fee2e2,stroke:#ef4444,color:#000
```

#### Locator Family (Labs 222–227)

| Lab | Locator | Example | When to Use |
|:---:|:--------|:--------|:-----------|
| 222 | `page.locator('#id')` | `page.locator('#login-username')` | Stable IDs / classes |
| 223 | XPath | `page.locator('xpath=//div[@class="x"]')` | Complex DOM traversal |
| 224 | `getByRole` ✨ | `page.getByRole('link', { name: 'Make Appointment' })` | **Accessibility-first, recommended** |
| 225 | CSS + index | `allSpans.first()` / `.nth(2)` / `.last()` | Lists / collections |
| 226 | `pressSequentially` | `field.pressSequentially("hi", { delay: 200 })` | Realistic typing (triggers JS listeners) |
| 227 | Cookies | `context.cookies()` / `context.addCookies([...])` | Programmatic auth |

#### Three Properties Every Locator Has

```mermaid
mindmap
  root((Locator))
    Lazy
      Created without DOM lookup
      Resolves on action
    Auto-Waiting
      Waits for actionability
      Visible + enabled + stable
      Default 30s timeout
    Strict
      Exactly 1 match required
      >1 match throws
```

---

### 04 — Session Storage

> *"Why log in 50 times when you can log in once?"*

```mermaid
sequenceDiagram
    participant L as Lab 228
    participant V as VWO
    participant FS as user-session.json
    participant T as Lab 229

    L->>V: Open /#login
    L->>V: fill credentials + click
    V-->>L: 🍪 Auth cookies + localStorage
    L->>FS: context.storageState({ path })
    Note over FS: 💾 Session saved

    Note over T: Hours / days later...

    T->>FS: test.use({ storageState })
    FS-->>T: Restore cookies + storage
    T->>V: goto /#/dashboard
    V-->>T: ✅ Already logged in
```

| Lab | Action |
|:---:|:-------|
| 228 | Performs login → calls `context.storageState({ path: './user-session.json' })` |
| 229 | `test.use({ storageState: './user-session.json' })` → jumps **directly** to authenticated pages |

---

### 05 — Allure Reporting

Rich, hierarchical test reports with screenshots, videos and traces.

```mermaid
flowchart TD
    E[📚 Epic<br/>VWO Login Tests] --> F1[🎯 Feature<br/>Essential features]
    F1 --> S1[📖 Story<br/>Authentication]
    S1 --> T1[✅ Test: Verify login works]
    S1 --> T2[✅ Test: Verify logout]
    F1 --> S2[📖 Story<br/>Forgot Password]
    S2 --> T3[✅ Test: Reset email sent]

    style E fill:#7c3aed,stroke:#6d28d9,color:#fff
    style F1 fill:#3b82f6,stroke:#2563eb,color:#fff
    style S1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style S2 fill:#06b6d4,stroke:#0891b2,color:#fff
```

```ts
await allure.epic("VWO Login Tests");
await allure.feature("Essential features");
await allure.story("Authentication");
await allure.description("Verify that the login page works");
```

Open the report:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

---

### 06 — Multiple Elements

Lab 231 — work with **collections** of locators:

```ts
const links = page.locator('a.list-group-item');
const texts: string[] = await links.allInnerTexts();   // 🆕 plural
const all     = await links.all();                     // Locator[]
const count   = await links.count();
for (const link of all) {
    console.log(await link.getAttribute("href"));
}
```

| Method | Returns | Use Case |
|:-------|:--------|:---------|
| `.count()` | `number` | How many matches? |
| `.first()` / `.last()` / `.nth(i)` | `Locator` | Pick one |
| `.all()` | `Locator[]` | Iterate with `for…of` |
| `.allInnerTexts()` | `string[]` | All visible text in one shot |
| `.allTextContents()` | `string[]` | Includes hidden text |

---

### 07 — Web Tables

Two flavours of table automation:

#### Static (Lab 232)

Two strategies in one file — XPath template **and** Playwright's native `hasText` filter:

```ts
// 🛠 XPath template — old-school, still useful
const path = `//table[@id="customers"]/tbody/tr[${i}]/td[${j}]`;

// ✨ Native Playwright — recommended
const row = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
const country = await row.locator('td').nth(2).innerText();
```

#### Dynamic (Lab 233)

```ts
const rows = page.locator('table[summary="Sample Table"] tbody tr');
const rowCount = await rows.count();
for (let i = 1; i <= rowCount; i++) {
    const rowData = await rows.nth(i).locator('td').allInnerTexts();
    console.log(`Row ${i + 1}:`, rowData);
}
```

```mermaid
flowchart LR
    A[Locate &lt;table&gt;] --> B[Count rows]
    B --> C{Loop rows}
    C --> D[Filter by text<br/>or index]
    D --> E[Read cell with<br/>td:nth&#40;n&#41;.innerText]
    E --> F[Assert / collect data]
```

---

### Projects — TTA Bank E2E

The capstone: a **real banking app** at `tta-bank-digital-973242068062.us-west1.run.app`.

```mermaid
flowchart LR
    A[🏠 Landing] --> B[📝 Sign Up]
    B --> C[🔓 Dashboard<br/>$50,000.00]
    C --> D[💸 Transfer Funds]
    D --> E[Select<br/>From + To]
    E --> F[Enter $5,000<br/>+ note]
    F --> G[✅ Confirm]
    G --> H[📊 Dashboard<br/>$45,000.00]
    H --> I[🔍 Verify<br/>recent activity<br/>shows -$5,000]

    style C fill:#d1fae5,stroke:#10b981,color:#000
    style H fill:#d1fae5,stroke:#10b981,color:#000
    style I fill:#fef3c7,stroke:#f59e0b,color:#000
```

The test file (`Task1.spec.ts`) demonstrates:

- ✅ **TypeScript interfaces** for test data (`SignUpData`, `TransferData`)
- ✅ **Helper functions** (`fillSignUpForm`, `transferFunds`, `confirmTransfer`, `verifyDashboardBalance`)
- ✅ **Accessibility-first locators** (`getByRole`, `getByPlaceholder`, `getByText`)
- ✅ **Multi-step assertions** — heading visible → button visible → balance updated → activity shows debit
- ✅ **Module exports** so helpers can be reused in other spec files

---

## 🎯 Locator Strategy Cheat Sheet

```mermaid
flowchart TD
    Q{What am I locating?} -->|Button / link / heading| R1[✅ getByRole]
    Q -->|Input field| R2[✅ getByLabel / getByPlaceholder]
    Q -->|Visible text| R3[✅ getByText]
    Q -->|Image| R4[✅ getByAltText]
    Q -->|Has data-testid| R5[✅ getByTestId]
    Q -->|Stable id / class| R6[🟡 page.locator&#40;'#id'&#41;]
    Q -->|Complex DOM| R7[🔴 page.locator&#40;'xpath=...'&#41;]

    style R1 fill:#d1fae5,stroke:#10b981,color:#000
    style R2 fill:#d1fae5,stroke:#10b981,color:#000
    style R3 fill:#d1fae5,stroke:#10b981,color:#000
    style R4 fill:#d1fae5,stroke:#10b981,color:#000
    style R5 fill:#d1fae5,stroke:#10b981,color:#000
    style R6 fill:#fef3c7,stroke:#f59e0b,color:#000
    style R7 fill:#fee2e2,stroke:#ef4444,color:#000
```

| Priority | Locator | Resilient to | Demoed in |
|:--------:|:--------|:-------------|:----------|
| 🥇 | `getByRole` | DOM refactors, design changes | Lab 224 |
| 🥈 | `getByLabel` / `getByPlaceholder` | Class renames | Lab 231 |
| 🥉 | `getByText` | Layout changes | Lab 231 |
| 4 | `getByTestId` | All UI changes | TTA Bank |
| 5 | CSS `#id` / `.class` | Visual changes only | Lab 222 |
| 6 | XPath | Almost nothing | Lab 223 |

---

## ⏱ Wait Strategies (`waitUntil`)

| Option | Fires When | Speed | Use For |
|:-------|:-----------|:-----:|:--------|
| `commit` | Server returned headers | 🚀🚀🚀 | API-only checks |
| `domcontentloaded` | HTML parsed (no waiting on images) | 🚀🚀 | SPAs that hydrate later |
| `load` *(default)* | All sub-resources loaded | 🚀 | Most pages |
| `networkidle` | No requests for 500 ms | 🐢 | Heavy AJAX dashboards (use sparingly) |

---

## 📊 Reporting

Three reporters run on **every** test execution (configured in `playwright.config.ts`):

```mermaid
flowchart LR
    T[npx playwright test] --> R1[📘 HTML Reporter<br/>./playwright-report]
    T --> R2[📗 Allure Reporter<br/>./allure-results]
    T --> R3[📕 Custom TTA Reporter<br/>./tta-report]
    R1 -->|npm run report| V1[Browser]
    R2 -->|allure generate + open| V2[Browser]
    R3 -->|npm run report:tta| V3[Browser]
```

| Reporter | Built-in? | Output | Open Command |
|:---------|:---------:|:-------|:-------------|
| HTML | ✅ | `./playwright-report/index.html` | `npm run report` |
| Allure | npm pkg | `./allure-results` → `./allure-report` | `npx allure open ./allure-report` |
| Custom TTA | `utils/CustomTTAReporter.ts` | `./tta-report/index.html` | `npm run report:tta` |

> The **Custom TTA Reporter** (`utils/CustomTTAReporter.ts`) is hand-written specifically for The Testing Academy's branded report style — a great example of Playwright's pluggable `Reporter` interface.

Every test also captures **on failure and on success** (per config):

- 📹 Video recording
- 📸 Screenshot
- 🔬 Trace file (open with `npx playwright show-trace`)

---

## 🔄 CI / CD Workflow

`.github/workflows/playwright.yml` runs on every push / PR to `main` or `master`:

```mermaid
flowchart LR
    A[git push origin main] --> B[GitHub Actions trigger]
    B --> C[⏬ Checkout repo]
    C --> D[📦 Setup Node LTS]
    D --> E[npm ci]
    E --> F[npx playwright install --with-deps]
    F --> G[npx playwright test]
    G --> H{Pass?}
    H -->|✅| I[📤 Upload artifacts<br/>retention: 30 days]
    H -->|❌| I
    I --> J[🟢 Build status]

    style I fill:#dbeafe,stroke:#3b82f6,color:#000
    style J fill:#d1fae5,stroke:#10b981,color:#000
```

Reports are uploaded as **artifacts** so you can download them from any failed run for 30 days.

---

## ⚡ Quick Git Workflow (`go.sh`)

A one-shot helper at the repo root:

```bash
./go.sh "feat: add lab 234 - drag and drop"
# or
npm run go -- "fix: typo in lab 232"
# or — auto-timestamped commit message
./go.sh
```

What it does:

```mermaid
flowchart LR
    A[./go.sh msg] --> B{Anything to commit?}
    B -->|No| C[✅ Tree clean — exit]
    B -->|Yes| D[git add -A]
    D --> E[git commit -m msg]
    E --> F[git push origin main]
    F --> G[✅ Done]

    style C fill:#d1fae5,stroke:#10b981,color:#000
    style G fill:#d1fae5,stroke:#10b981,color:#000
```

> ⚠️ It stages **all** changes — review with `git status` if unsure.

---

## ⚙️ Configuration Reference

`playwright.config.ts` highlights:

| Setting | Value | Why |
|:--------|:------|:----|
| `testDir` | `./tests` | Standard layout |
| `fullyParallel` | `true` | Speed |
| `retries` | `2` on CI / `0` locally | Catch flakes on CI without slowing dev |
| `reporter` | `[html, allure-playwright, CustomTTAReporter]` | Three views of the same run |
| `headless` | `false` | 👀 Learning is easier when you watch |
| `viewport` | `1920 × 1080` | Full HD — matches real desktops |
| `trace` | `'on'` | Record every action — open with `show-trace` |
| `video` | `'on'` | Per-test recording |
| `screenshot` | `'on'` | Per-step still images |
| `projects` | `chromium` only | Firefox / WebKit commented out — ready to enable |

```mermaid
flowchart TD
    A[playwright.config.ts] --> B[fullyParallel: true]
    A --> C[reporter: 3 reporters]
    A --> D[use: ...]
    D --> E[trace: on]
    D --> F[video: on]
    D --> G[screenshot: on]
    D --> H[viewport 1920x1080]
    D --> I[headless: false]
    A --> J[projects]
    J --> K[✅ chromium]
    J -.commented.-> L[firefox / webkit / mobile]
```

---

## 📚 Resources

- 📘 [Playwright Documentation](https://playwright.dev/docs/intro)
- 📗 [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- 📙 [Allure for Playwright](https://www.npmjs.com/package/allure-playwright)
- 🎓 [The Testing Academy](https://thetestingacademy.com)
- 💬 Issues / questions → open a GitHub Issue or email **thetestingacademy@gmail.com**

---

<div align="center">

### 🎭 Built with ❤️ by The Testing Academy

*Happy testing — may your `expect`s always resolve.* ✨

</div>
