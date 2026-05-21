<div align="center">

# 🎭 Learning Playwright Fundamentals

### *A hands-on, lab-by-lab journey into modern end-to-end test automation with Playwright + TypeScript*

[![Playwright Tests](https://github.com/PramodDutta/LearningPlaywrightFundamentals/actions/workflows/playwright.yml/badge.svg)](../../actions)
![Playwright](https://img.shields.io/badge/Playwright-1.59.1-2EAD33?logo=playwright&logoColor=white)
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
   - [08 — Select / Dropdowns / Frames](#08--select--dropdowns--frames)
   - [09 — Frames & Iframes](#09--frames--iframes)
   - [10 — Keyboard, Hover, Drag & Drop, Right Click](#10--keyboard-hover-drag--drop-right-click)
   - [11 — JS Alerts / Confirms / Prompts](#11--js-alerts--confirms--prompts)
   - [12 — Handling SVG Elements](#12--handling-svg-elements)
   - [13 — Shadow DOM](#13--shadow-dom)
   - [14 — File Upload](#14--file-upload)
   - [15 — File Download](#15--file-download)
   - [16 — Scroll to Element](#16--scroll-to-element)
   - [17 — Expect Assertions](#17--expect-assertions)
   - [18 — Test Hooks & Annotations](#18--test-hooks--annotations)
   - [19 — Data-Driven Testing](#19--data-driven-testing)
   - [20–23 — Scaffolded Advanced Modules](#2023--scaffolded-advanced-modules)
   - [Projects — TTA Bank E2E](#projects--tta-bank-e2e)
   - [Projects — QA Profile](#projects--qa-profile)
7. [Locator Strategy Cheat Sheet](#-locator-strategy-cheat-sheet)
8. [Wait Strategies (`waitUntil`)](#-wait-strategies-waituntil)
9. [Reporting](#-reporting)
10. [CI / CD Workflow](#-ci--cd-workflow)
11. [Quick Git Workflow (`go.sh`)](#-quick-git-workflow-gosh)
12. [Configuration Reference](#-configuration-reference)
13. [Resources](#-resources)

---

## 🎯 Overview

This repository is the companion code for a structured **Playwright + TypeScript** course taught by **The Testing Academy**. Each implemented lab is numbered (`Lab209`, `211`, `212` … `265`) so the progression maps 1:1 to the curriculum, with additional advanced modules scaffolded for upcoming lessons.

You will move through the four classic stages of automation maturity:

```mermaid
flowchart LR
    A[🍼 Hello World<br/>Lab 209] --> B[🧠 Browser/Context/Page<br/>Labs 211–218]
    B --> C[🎯 Locators & Navigation<br/>Labs 219–227]
    C --> D[🔐 Session Reuse<br/>Labs 228–229]
    D --> E[📊 Reporting<br/>Lab 230]
    E --> F[📑 Multi-element / Tables<br/>Labs 231–234]
    F --> H[🎚 Selects / Dropdowns / Frames<br/>Labs 234–238]
    H --> I[🪟 Iframes<br/>Labs 239–241]
    I --> J[⌨️ Keyboard / Hover / DnD<br/>Labs 242, 244–247]
    J --> K[🔔 JS Alerts<br/>Lab 243]
    K --> L[🖼 SVG Elements<br/>Labs 248–250]
    L --> M[🌑 Shadow DOM<br/>Lab 251]
    M --> N[📤 File Upload<br/>Labs 252–253]
    N --> O[📥 File Download<br/>Lab 254]
    O --> P[📜 Scroll to Element<br/>Lab 255]
    P --> Q[✅ Expect Assertions<br/>Labs 256–257]
    Q --> R[🪝 Test Hooks<br/>Labs 258–261]
    R --> S[📂 Data-Driven Testing<br/>Labs 262–265]
    S --> U[🚧 Advanced Scaffolds<br/>Modules 20–23]
    U --> G[🏦 Real Project<br/>TTA Bank]

    style A fill:#fef3c7,stroke:#f59e0b,color:#000
    style G fill:#d1fae5,stroke:#10b981,color:#000
```

---

## 🗺 Learning Roadmap

| Stage | Module | Labs | What You Master |
|:-----:|:-------|:----:|:----------------|
| 1 | `01_Basics` | 209–210 | First test, annotations (`skip`, `only`, `fail`, `slow`) |
| 2 | `02_First_tests` | 211–218 | Browser → Context → Page hierarchy, multi-tab, multi-user |
| 3 | `03_Locators_Commands` | 219–227 | `goto` options, locators (CSS / XPath / Role), cookies |
| 4 | `04_Session_Storage` | 228–229 | `storageState` — login once, reuse session forever |
| 5 | `05_Allure_Reporting` | 230 | Allure annotations: epic → feature → story |
| 6 | `06_Multiple_Element_` | 231 | `allInnerTexts`, iterating collections |
| 7 | `07_WebTables` | 232–234 | Static + dynamic HTML table extraction, employee management |
| 8 | `08_Web_Select_Frames_Iframe` | 234–238 | Native + custom + React-Select dropdowns, async/grouped/creatable |
| 9 | `09_Frame_Iframe` | 239–241 | `frameLocator`, multi-frame pages, nested iframe-in-iframe |
| 10 | `10_Keyboard_Hover_Drag_Drop` | 242, 244–247 | `page.keyboard`, hover menus, `dragTo` + manual mouse DnD, right-click context menus |
| 11 | `11_JS_Alerts` | 243 | `page.on('dialog')` — alert / confirm / prompt accept + dismiss |
| 12 | `12_Handle_SVG` | 248–250 | SVG namespace — click shapes, iterate `.bar` nodes, read attributes |
| 13 | `13_Shadow_DOM` | 251 | Shadow DOM piercing — `getByTestId` auto-traverses open shadow roots |
| 14 | `14_FileUpload` | 252–253 | `setInputFiles` — single from disk, multiple from `Buffer` |
| 15 | `15_File_Download` | 254 | `page.waitForEvent('download')` + `download.saveAs()` |
| 16 | `16_Scroll_toElement` | 255 | `scrollIntoViewIfNeeded`, `window.scrollBy/scrollTo`, lazy-list polling |
| 17 | `17_Expect_Assertions` | 256–257 | Value vs locator vs page assertions, soft assertions, URL/title checks, cheatsheets |
| 18 | `18_Test_hooks` | 258–261 | Annotations (`skip/slow/fixme/fail`), `test.step`, lifecycle hooks, `describe.serial` |
| 19 | `19_Data_Driven_Testing` | 262–265 | DDT — inline arrays, CSV via `fs`, JSON imports, YAML + XLSX readers, parametrized `test()` loop |
| 20 | `20_Page_Object_Model` | Scaffold | Page Object Model module placeholder |
| 21 | `21_Fixture` | Scaffold | Custom fixture module placeholder |
| 22 | `22_Misc_Concepts` | Scaffold | Miscellaneous Playwright concepts placeholder |
| 23 | `23_Advance_Framework` | Scaffold | Advanced framework module placeholder |
| Project 4 | `Projects/Project_4_TTA_BANK` | Task1 | Full E2E flow: signup → transfer → verify balance |
| Project 5 | `Projects/Project_5_QA_Profile` | Scaffold | QA profile capstone placeholder |

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
│   ├── 02_First_tests/                         # 🧠 Browser / Context / Page
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
│   │   ├── 233_WebTable_Dyanamic.spec.ts       # Dynamic structured extraction
│   │   └── 234_WebTABLE_Employe_Management.spec.ts  # 🚧 Employee mgmt scaffold
│   │
│   ├── 08_Web_Select_Frames_Iframe/            # 🎚 Dropdowns / selects / frames
│   │   ├── 234_Web.spec.ts                     # Sibling-axis + :has() row locators
│   │   ├── 235_Select_FramesWeb.spec.ts        # Native <select> via selectOption
│   │   ├── 236_Advacne_Select_Frames2.spec.ts  # Custom div-based dropdowns
│   │   ├── 237_Advacne_Select_Pro.spec.ts      # React-Select: single/multi/creatable/async
│   │   ├── 238_Advance_Select_Pro_v2.spec.ts   # React-Select pro: remove tag / grouped / async
│   │   └── util.ts                             # selectValue() helper
│   │
│   ├── 09_Frame_Iframe/                        # 🪟 frameLocator API
│   │   ├── 239_Iframe.spec.ts                  # Single iframe — form fill inside frame
│   │   ├── 240_Multiple_frame.spec.ts          # Multi-frame page (frameset) traversal
│   │   └── 241_Iframe_within_Iframe.spec.ts    # Nested frames — pact1 → pact2 → pact3
│   │
│   ├── 10_Keyboard_Hover_Drag_Drop/            # ⌨️ Low-level input APIs
│   │   ├── 242_keyboard.spec.ts                # keyboard.press / down / up + screenshots
│   │   ├── 244_Spicejet_Hover.spec.ts          # hover() to reveal submenu
│   │   ├── 245_Drag_Drop.spec.ts               # dragTo() — the-internet demo
│   │   ├── 246_Drag_Drop_advance_Kanban.spec.ts # Manual mouse.move/down/up for finicky DnD libs
│   │   └── 247_RightClick.spec.ts              # click({ button: 'right' }) + context menu
│   │
│   ├── 11_JS_Alerts/                           # 🔔 Native browser dialogs
│   │   └── 243_JS_Alerts.spec.ts               # alert / confirm / prompt — accept + dismiss
│   │
│   ├── 12_Handle_SVG/                          # 🖼 SVG namespace shapes
│   │   ├── 248_SVG_Project.spec.ts             # Flipkart — click SVG search icon, read results
│   │   ├── 249_SVG_Practice.spec.ts            # TTA widget — click circle / bar / radio shapes
│   │   └── 250_Advance_SVG_pROJECT.spec.ts     # SimpleMaps India — read state labels, click Uttar Pradesh path
│   │
│   ├── 13_Shadow_DOM/                          # 🌑 Shadow DOM piercing
│   │   └── 251_Shadom_DOM.spec.ts              # TTA widget — login card, counter cart, nested host
│   │
│   ├── 14_FileUpload/                          # 📤 File upload — single + multi
│   │   ├── 252_FileUpload.spec.ts              # the-internet — setInputFiles from disk path
│   │   ├── 253_Multi_FileUpload.spec.ts        # PatternFly — multi files via Buffer payload
│   │   ├── file1.jpg / file2.jpg               # Sample upload assets
│   │   └── testdata.txt                        # Sample upload payload
│   │
│   ├── 15_File_Download/                       # 📥 File download — waitForEvent + saveAs
│   │   └── 254_File_Downlaod.spec.ts           # TTA widget — capture download event, persist via saveAs
│   │
│   ├── 16_Scroll_toElement/                    # 📜 Scroll APIs — into view + window scroll + lazy
│   │   └── 255_ScrollToView.spec.ts            # scrollIntoViewIfNeeded, window.scrollBy/To, lazy list grows past 10
│   │
│   ├── 17_Expect_Assertions/                   # ✅ The expect() API — value + locator + page + API
│   │   ├── 256_Expect.spec.ts                  # value + locator + soft + negation
│   │   ├── 257_URL_Asserations.spec.ts         # toHaveTitle / toHaveURL / state asserts
│   │   ├── Expect_Assertions_Cheatsheet.md     # Interview one-pager — every common expect
│   │   └── More_Expect_Examples.md             # Full TTA assertions reference
│   │
│   ├── 18_Test_hooks/                          # 🪝 Lifecycle hooks, annotations, grouping
│   │   ├── 258_Test_HOOK.spec.ts               # test.skip / .slow / .fixme / .fail per browser
│   │   ├── 259_Grouped_TEST.spec.ts            # test.step — named, reportable phases
│   │   ├── 260_Test_Before_After.spec.ts       # beforeAll / beforeEach / afterEach / afterAll
│   │   └── 261_Group_Describe.spec.ts          # describe.serial vs parallel siblings
│   │
│   ├── 19_Data_Driven_Testing/                 # 📂 Parametrize tests from arrays / CSV / JSON / YAML / XLSX
│   │   ├── 262_DDT_Simple.spec.ts              # Inline array of objects → one test per row
│   │   ├── 263_DDT_CSV.spec.ts                 # readCSV('login-data.csv') → loop tests
│   │   ├── 264_DDT_CSV.spec.ts                 # CSV + hooks + branch on shouldPass / expectedError
│   │   ├── 265_DDT_JSON.spec.ts                # import JSON directly via TS module resolver
│   │   ├── csvReader.ts                        # Hand-rolled CSV parser → TestDataRow[]
│   │   ├── xlsxReader.ts                       # XLSX → JSON via the `xlsx` package
│   │   ├── yamlReader.ts                       # YAML → array via `js-yaml`
│   │   ├── login-data.csv                      # 7-row login fixture
│   │   ├── login-data.yaml                     # Same fixture in YAML
│   │   └── registration-data.json              # 5-row registration fixture
│   │
│   ├── 20_Page_Object_Model/                   # 🚧 Scaffolded module
│   ├── 21_Fixture/                             # 🚧 Scaffolded module
│   ├── 22_Misc_Concepts/                       # 🚧 Scaffolded module
│   ├── 23_Advance_Framework/                   # 🚧 Scaffolded module
│   │
│   └── Projects/
│       ├── Project_4_TTA_BANK/
│       │   └── Task1.spec.ts                   # 🏦 Signup → Transfer → Verify
│       └── Project_5_QA_Profile/               # 🚧 Scaffolded project
│
├── utils/
│   └── CustomTTAReporter.ts                    # Custom HTML report → ./tta-report
│
├── .github/workflows/
│   └── playwright.yml                          # CI: Ubuntu + Node LTS + artifacts
│
├── playwright.config.ts                        # FullHD, headed, trace/video/screenshot on, HTML reporter
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
git clone https://github.com/PramodDutta/LearningPlaywrightFundamentals.git
cd LearningPlaywrightFundamentals

npm ci                       # Install locked dependencies
npx playwright install       # Download Chromium / Firefox / WebKit binaries
```

### 3. Run

```bash
npm test                     # 🏃 All tests, Chromium only (config'd)
npm run test:headed          # 👀 Watch the browser
npm run test:ui              # 🖥 Open Playwright's interactive UI
npm run report               # 📈 Open the HTML report
npm run report:tta           # 🎓 Open the generated custom TTA report (when enabled)
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

> Lab **234** (`234_WebTABLE_Employe_Management.spec.ts`) is a placeholder for the upcoming **Employee Management** end-to-end exercise — covering CRUD over a dynamic table with row filtering and inline edits.

---

### 08 — Select / Dropdowns / Frames

Real-world apps rarely use plain `<select>`. This module walks through **three flavours of "dropdown"** and shows the right Playwright pattern for each.

```mermaid
flowchart TD
    Q{Dropdown type?} -->|Native &lt;select&gt;| N[selectOption&#40;value&#41;]
    Q -->|Custom div + onclick<br/>e.g. TTA app| C[click trigger →<br/>getByText option]
    Q -->|React-Select / Headless UI| R[click → search →<br/>getByRole&#40;'option'&#41;]

    style N fill:#d1fae5,stroke:#10b981,color:#000
    style C fill:#fef3c7,stroke:#f59e0b,color:#000
    style R fill:#dbeafe,stroke:#3b82f6,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 234 | `234_Web.spec.ts` | XPath sibling-axis (`preceding-sibling::td/input`) + `tr:has(td:text('...'))` row filter |
| 235 | `235_Select_FramesWeb.spec.ts` | Native `<select>` via `page.selectOption()` on `the-internet.herokuapp.com` |
| 236 | `236_Advacne_Select_Frames2.spec.ts` | Custom **div-based** dropdowns — click trigger then `getByText({ exact: true })` |
| 237 | `237_Advacne_Select_Pro.spec.ts` | **React-Select**: single, multi (with `Escape`), creatable tags, async typeahead |
| 238 | `238_Advance_Select_Pro_v2.spec.ts` | React-Select **pro**: remove a chosen tag, pick from a *grouped* section, search-then-pick async |
| — | `util.ts` | Reusable `selectValue(page, label, value)` helper for label-driven dropdowns |

#### React-Select Pattern (Lab 237 / 238)

```ts
// Single, searchable
await page.getByTestId('rs-single').click();
await page.getByTestId('rs-single-input').fill('play');
await page.getByRole('option', { name: 'Playwright' }).click();

// Multi — pick three
for (const name of ['Playwright', 'Pytest', 'TestNG']) {
    await page.getByTestId('rs-multi').click();
    await page.getByRole('option', { name }).click();
}

// Async — wait for results to come back from the server
await page.getByTestId('rs-async-input').fill('pun');
await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
await page.getByRole('option', { name: 'Pune' }).click();
```

#### When to Use Which Dropdown API

| Widget | Detect | Use |
|:-------|:-------|:----|
| `<select>` | Inspect → `<select>` tag | `page.selectOption(selector, value)` |
| Custom CSS dropdown | Click reveals `<div role="listbox">` | `click trigger` → `getByText(option, { exact: true })` |
| React-Select / Combobox | `role="combobox"` + `role="option"` | `click` → `fill` → `getByRole('option', { name })` |

---

### 09 — Frames & Iframes

`frameLocator` is Playwright's window into `<iframe>` content. Treat it like a mini-page — chain `.locator()` calls from it.

```mermaid
flowchart LR
    P[page] --> F1[frameLocator '#pact1']
    F1 --> F2[frameLocator '#pact2']
    F2 --> F3[frameLocator '#pact3']
    F3 --> E[locator '#glaf'.fill]

    style P fill:#1e3a8a,stroke:#1e40af,color:#fff
    style E fill:#d1fae5,stroke:#10b981,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 239 | `239_Iframe.spec.ts` | Single iframe — fill vehicle-registration form inside `#frame-one` |
| 240 | `240_Multiple_frame.spec.ts` | Frameset page — enumerate `<frame>` elements, drive `main` + `side` independently |
| 241 | `241_Iframe_within_Iframe.spec.ts` | Nested iframes — `frame1.frameLocator(frame2).frameLocator(frame3)` |

```ts
const carFrame = page.frameLocator('#frame-one');
await carFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
await carFrame.getByText('Submit registration', { exact: true }).click();
```

---

### 10 — Keyboard, Hover, Drag & Drop, Right Click

Low-level input APIs for things `click()` and `fill()` cannot express.

| Lab | API | Scenario |
|:---:|:----|:---------|
| 242 | `page.keyboard.press / down / up` | Type single keys, modifiers (`Shift+O`), arrow keys |
| 244 | `locator.hover()` | Reveal hidden submenus (SpiceJet Add-ons, TTA hover-menu widget) |
| 245 | `source.dragTo(target)` | Classic `the-internet.herokuapp.com/drag_and_drop` swap |
| 246 | `mouse.move / down / up` | Kanban DnD — manual mouse path with `steps: 10` for libs that ignore `dragTo` |
| 247 | `click({ button: 'right' })` | Trigger context menu, read all options, pick `Copy` |

```ts
// Lab 246 — manual mouse path for libraries that swallow dragTo()
const sBox = (await source.boundingBox())!;
const tBox = (await target.boundingBox())!;
await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
await page.mouse.down();
await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
await page.mouse.up();
```

```mermaid
flowchart TD
    Q{DnD library cooperative?} -->|Yes| A[source.dragTo&#40;target&#41;]
    Q -->|No — React DnD / HTML5| B[mouse.move → down → move steps → up]

    style A fill:#d1fae5,stroke:#10b981,color:#000
    style B fill:#fef3c7,stroke:#f59e0b,color:#000
```

---

### 11 — JS Alerts / Confirms / Prompts

Native browser dialogs **block the page** — you cannot click them with a locator. Register a one-shot `dialog` handler **before** the action that triggers it.

```mermaid
sequenceDiagram
    participant T as Test
    participant P as Page
    participant D as Dialog

    T->>P: page.once('dialog', handler)
    Note over T,P: Handler registered — does NOT trigger anything yet
    T->>P: button.click()
    P->>D: window.alert / confirm / prompt fires
    D-->>P: dialog event
    P->>T: handler invoked
    T->>D: dialog.accept() / dismiss() / accept(promptText)
    D-->>P: dialog closed
    P->>T: action resumes
```

```ts
test('JS Confirm accept', async ({ page }) => {
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();   // or dialog.dismiss()
    });
    await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
```

| Dialog Type | API | Notes |
|:------------|:----|:------|
| `alert` | `dialog.accept()` | No return value |
| `confirm` | `accept()` / `dismiss()` | Maps to `Ok` / `Cancel` |
| `prompt` | `accept('text')` / `dismiss()` | Pass text into `accept` |

> ⚠️ Use `page.once` not `page.on` — otherwise the handler stays alive across tests and swallows future dialogs.

---

### 12 — Handling SVG Elements

SVG nodes live in their own namespace — but Playwright treats them like any DOM node. CSS selectors and `getByRole` work out of the box. XPath needs `name()` / `local-name()` because tags are namespaced (`svg:path`).

```mermaid
flowchart LR
    A[svg root] --> B[child shapes]
    B --> C1[circle]
    B --> C2[rect / bar]
    B --> C3[path]
    C1 --> D[click / hover / read attrs]
    C2 --> D
    C3 --> D
    D --> E[assert state / output text]

    style A fill:#1e3a8a,stroke:#1e40af,color:#fff
    style E fill:#d1fae5,stroke:#10b981,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 248 | `248_SVG_Project.spec.ts` | Real-world — click Flipkart's SVG search icon, scrape product titles via XPath |
| 249 | `249_SVG_Practice.spec.ts` | TTA widget — click `#circle-blue`, iterate `.bar` nodes, read `data-quarter` |
| 250 | `250_Advance_SVG_pROJECT.spec.ts` | SimpleMaps India — XPath `name()` to read all state labels, filter to "Uttar Pradesh", click `path.INUP` |

```ts
// Click an SVG shape by id, then iterate all bars
const circle = page.locator('#circle-blue');
await circle.click();
expect(await page.locator('#shapes-output').innerText()).toContain('Blue circle');

const bars = await page.locator('.bar').all();
for (const bar of bars) {
    const quarter = await bar.getAttribute('data-quarter');
    await bar.click();
    console.log(quarter);
}
```

| Selector Style | SVG-safe? | Example |
|:---------------|:---------:|:--------|
| CSS `#id` / `.class` | ✅ | `page.locator('#circle-blue')` |
| `getByRole` | ✅ (if `role` attr present) | `page.getByRole('button', { name: /Q3 bar/ })` |
| `[data-*]` attr | ✅ | `page.locator('[data-quarter="Q3"]')` |
| XPath plain tag | ❌ | `//path` may not match — use `//*[name()='path']` |

#### Lab 250 — SimpleMaps India: XPath `name()` Deep Dive

**Concept:** SVG nodes live in the SVG namespace (`http://www.w3.org/2000/svg`). Plain XPath selectors like `//svg` or `//text` ignore namespaced nodes. Use `name()` (or `local-name()`) on the wildcard `*` to match by tag name across namespaces.

**Why:** Map widgets render states as `<svg>` → `<text class="sm_label">` (the label) and `<path class="INUP">` (the clickable region). Plain `//text` returns zero hits — every selector needs the `name()` escape hatch.

**Q&A — why use this?**
- **Q: Why not just use CSS?** A: CSS works for class-based hits (`.sm_label`), but XPath wins when you need to **combine** namespace-safe tag matching with predicates (`name()='text' and contains(@class,...)`).
- **Q: `name()` vs `local-name()`?** A: `name()` returns prefixed name (`svg:path`), `local-name()` strips the prefix (`path`). For SVG-only DOMs they're interchangeable; for mixed XML use `local-name()`.
- **Q: Why `allTextContents()` over `allInnerTexts()`?** A: SVG `<text>` is rendered via SVG paint, not CSS box — `innerText` can return empty. `textContent` reads the underlying DOM string and always works.

```mermaid
flowchart LR
    A[page.goto SimpleMaps] --> B["//div[@id='admin1_map_inner']//*[name()='svg']"]
    B --> C["//*[name()='text' and contains(@class,'sm_label')]"]
    C --> D[allTextContents → string array of 36 states]
    D --> E{state === 'Uttar Pradesh'?}
    E -->|yes| F["click //*[name()='path' and contains(@class,'INUP')]"]
    E -->|no| D

    style A fill:#1e3a8a,stroke:#1e40af,color:#fff
    style F fill:#d1fae5,stroke:#10b981,color:#000
```

```ts
const states = await page
    .locator(`//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`)
    .allTextContents();

for (const state of states) {
    if (state.trim() === 'Uttar Pradesh') {
        await page
            .locator(`//*[name()='path' and contains(@class,'INUP')]`)
            .click();
    }
}
```

| Locator | Result on SVG | Note |
|:--------|:-------------:|:-----|
| `//svg` | ❌ empty | Wrong namespace |
| `//*[name()='svg']` | ✅ match | Namespace-safe |
| `//*[local-name()='path']` | ✅ match | Strips prefix |
| `css=svg` | ✅ match | CSS ignores namespaces |
| `text=Uttar Pradesh` | ⚠️ unreliable | Some SVG renderers strip text from accessible tree |

---

### 13 — Shadow DOM

Web Components hide internals behind a **shadow root**. Playwright pierces *open* shadow roots automatically — `getByTestId`, `getByRole`, `locator('css')` all see through. No `evaluateHandle` gymnastics needed.

```mermaid
flowchart TD
    P[page] --> H1[host: card-account]
    H1 -.open shadow root.-> S1[input email + submit]
    P --> H2[host: counter-cart]
    H2 -.open shadow root.-> S2[Increment button + counter]
    P --> H3[host: nested-host]
    H3 -.open shadow root.-> H4[inner host]
    H4 -.shadow root.-> S3[card-inside-email / submit]

    style S1 fill:#d1fae5,stroke:#10b981,color:#000
    style S2 fill:#d1fae5,stroke:#10b981,color:#000
    style S3 fill:#d1fae5,stroke:#10b981,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 251 | `251_Shadom_DOM.spec.ts` | TTA widget — fill login card inside shadow root, click `Increment` inside counter, drive **nested** shadow host |

```ts
const card = page.getByTestId('card-account');
await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
await card.getByTestId('card-account-submit').click();

// Nested shadow — Playwright still pierces
await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
await page.getByTestId('card-inside-submit').click();
```

| Shadow Mode | Pierceable? | Notes |
|:------------|:-----------:|:------|
| `open` | ✅ | Default for most frameworks (Lit, Stencil, custom) — works out of box |
| `closed` | ❌ | Rare in practice — host owns the only reference, can't be queried |

> ⚠️ XPath does **not** pierce shadow boundaries. Stick to CSS / role / testId selectors.

---

### 14 — File Upload

`setInputFiles` is the one true API. Two payload styles — point at a real file on disk, or synthesize one in-memory with a `Buffer`.

```mermaid
flowchart TD
    Q{Have real file?} -->|Yes| A[setInputFiles&#40;path&#41;]
    Q -->|No — generate in test| B["setInputFiles&#40;{ name, mimeType, buffer }&#41;"]
    A --> C[input.change event fires]
    B --> C
    C --> D[Click submit / Upload]

    style A fill:#d1fae5,stroke:#10b981,color:#000
    style B fill:#dbeafe,stroke:#3b82f6,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 252 | `252_FileUpload.spec.ts` | `the-internet.herokuapp.com/upload` — `setInputFiles([path])` from disk |
| 253 | `253_Multi_FileUpload.spec.ts` | PatternFly multi-upload — array of `{ name, mimeType, buffer }` objects |

```ts
// Single file from disk
const filePath = path.join(__dirname, 'testdata.txt');
await page.locator('#file-upload').setInputFiles([filePath]);
await page.getByRole('button', { name: 'Upload' }).click();
await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');

// Multiple files synthesised in-memory
await page.locator('div.pf-v6-c-multiple-file-upload input').setInputFiles([
    { name: 'file1.jpg', mimeType: 'image/jpeg', buffer: Buffer.from('...') },
    { name: 'file2.jpg', mimeType: 'image/jpeg', buffer: Buffer.from('...') },
]);
```

| Payload | Use When |
|:--------|:---------|
| `string` / `string[]` (path) | Real fixtures stored alongside test |
| `{ name, mimeType, buffer }` | Test data should not leak to git, or you want to vary content per test |
| `[]` (empty array) | Clear a previously selected file |

> 💡 The input may be hidden (`display: none`) — `setInputFiles` works **without** scrolling or clicking. No need to `force: true`.

---

### 15 — File Download

**Concept:** Browser downloads are an *event*, not a return value. Register a `'download'` listener via `page.waitForEvent('download')`, trigger the action that starts the download, then persist the file with `download.saveAs(targetPath)`.

**Why:** Clicking a download link doesn't return a `Response` you can read — the browser hands the bytes to the OS. Playwright bridges that gap by exposing a `Download` object you race against the click.

**Q&A — why use this?**
- **Q: Why `Promise.all([waitForEvent, click])`?** A: The download event can fire **before** `click()` resolves. Wrapping both in `Promise.all` guarantees you register the listener *before* the click is dispatched — no race.
- **Q: Where does the file land if I don't call `saveAs`?** A: A temp path under Playwright's run dir; gets deleted at context close. Always `saveAs` if you need to keep it.
- **Q: Can I assert the bytes?** A: Yes — `await download.path()` returns the temp path; read it with `fs.readFileSync`. Or check `download.suggestedFilename()` for the server-suggested name.

```mermaid
sequenceDiagram
    participant T as Test
    participant P as Page
    participant B as Browser
    participant FS as Disk

    T->>P: Promise.all([waitForEvent('download'), click()])
    P->>B: Click download link
    B-->>P: download event
    P-->>T: Download object
    T->>T: download.suggestedFilename()
    T->>FS: download.saveAs('out/file.txt')
    FS-->>T: ✅ File persisted
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 254 | `254_File_Downlaod.spec.ts` | TTA widget — capture static + dynamic downloads, save with `saveAs` |

```ts
test('demo: download file via waitForEvent', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-static').click(),
    ]);

    await download.saveAs('out/' + download.suggestedFilename());
});
```

| API | Returns | When |
|:----|:--------|:-----|
| `download.suggestedFilename()` | `string` | Use to build a stable target path |
| `download.path()` | `Promise<string>` | Read temp location (auto-deleted on close) |
| `download.saveAs(target)` | `Promise<void>` | Persist to your own location |
| `download.failure()` | `string \| null` | Non-null = download errored |

> ⚠️ Without `Promise.all`, the listener can be registered **after** the event fires → test hangs until timeout.

---

### 16 — Scroll to Element

**Concept:** Playwright auto-scrolls before any action — but sometimes you need to scroll *without* clicking: triggering lazy-load, parking a screenshot at a specific offset, or testing infinite scroll. Use `locator.scrollIntoViewIfNeeded()` for elements, and `page.evaluate(() => window.scrollBy/scrollTo)` for arbitrary offsets.

**Why:** Most modern UIs render content on demand — virtualized lists, IntersectionObserver-driven lazy hydration. The DOM is empty until something scrolls past a threshold. Manual scroll lets you drive that.

**Q&A — why use this?**
- **Q: `scrollIntoViewIfNeeded` vs `scrollIntoView`?** A: Playwright's variant only scrolls if the element is **not already in viewport** — idempotent, no flake. Native `Element.scrollIntoView()` always scrolls.
- **Q: When do I need `window.scrollTo`?** A: When there's no anchor element — e.g. "scroll to bottom" or "scroll by exactly 1000px". Wrap in `page.evaluate`.
- **Q: How do I assert lazy items loaded?** A: `expect.poll(() => list.count()).toBeGreaterThan(initialCount)` — polls until the count grows or timeout fires.

```mermaid
flowchart TD
    Q{Goal?} -->|Bring element on-screen| A[locator.scrollIntoViewIfNeeded]
    Q -->|Scroll by px / to coord| B[page.evaluate window.scrollBy/scrollTo]
    Q -->|Trigger lazy load| C[scroll last item into view]
    C --> D[expect.poll count > initial]

    style A fill:#d1fae5,stroke:#10b981,color:#000
    style B fill:#dbeafe,stroke:#3b82f6,color:#000
    style D fill:#fef3c7,stroke:#f59e0b,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 255 | `255_ScrollToView.spec.ts` | TTA scroll widget — `scrollIntoViewIfNeeded`, `window.scrollBy/To`, lazy list grows past 10 once last item visible |

```ts
test('lazy list grows when last item scrolled into view', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

    await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
    const list = page.getByTestId('lazy-list').locator('li');
    const initialCount = await list.count();

    await list.last().scrollIntoViewIfNeeded();
    await expect.poll(async () => list.count(), {
        message: 'expected lazy list to load more items',
        timeout: 10_000,
    }).toBeGreaterThan(initialCount);
});

// Window-level scroll — no anchor element needed
await page.evaluate(() => window.scrollBy(0, 1000));
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
```

| API | Scrolls | Use For |
|:----|:--------|:--------|
| `locator.scrollIntoViewIfNeeded()` | Specific element (skip if visible) | Lazy load triggers, parking before screenshot |
| `window.scrollBy(x, y)` | Relative offset | Fixed-distance scroll tests |
| `window.scrollTo(0, document.body.scrollHeight)` | Jump to bottom | Footer / infinite-scroll bottom |
| `window.scrollTo(0, 0)` | Jump to top | Reset between checks |

> 💡 Playwright already calls `scrollIntoViewIfNeeded` internally before `click()` / `fill()`. Explicit scroll is only needed when **no action** follows — e.g. just triggering an observer.

---

### 17 — Expect Assertions

**Concept:** `expect()` is Playwright's assertion API. Three families — **Locator / Page / APIResponse** assertions auto-retry until they pass or the timeout fires; **value** assertions (numbers, strings, objects, errors) execute once and mirror Jest exactly.

**Why:** Web UIs are async — the DOM mutates after fetches, animations, hydration. Manual `while + sleep` polling is flaky. Auto-retrying expects wait exactly as long as needed and fail with a precise diff. Value expects keep the rest of your TypeScript testing knowledge portable.

**Q&A — why use this?**
- **Q: Why must I `await` `expect(locator)…`?** A: Locator expects auto-retry under the hood. Without `await`, the Promise floats free and the test moves on before the check completes.
- **Q: `toHaveText` vs `toContainText`?** A: `toHaveText` requires exact text match; `toContainText` is substring. Use `toContainText` when surrounding whitespace or markup may shift.
- **Q: When do I use `expect.soft`?** A: When checking several independent invariants (e.g. validating every field in a form) — soft records each failure but keeps the test running, so one run reports them all.

```mermaid
flowchart TD
    E[expect&#40;value&#41;] --> T{Type of value?}
    T -->|Locator / Page / APIResponse| R[Auto-retrying<br/>requires <b>await</b>]
    T -->|number / string / object / fn| V[Synchronous<br/>no await]
    R --> M1[toBeVisible · toHaveText<br/>toHaveURL · toBeOK]
    V --> M2[toBe · toEqual · toContain<br/>toThrow · toMatchObject]
    R --> N1[.not · .soft · expect.poll · expect.toPass]
    V --> N1

    style R fill:#d1fae5,stroke:#10b981,color:#000
    style V fill:#dbeafe,stroke:#3b82f6,color:#000
    style N1 fill:#fef3c7,stroke:#f59e0b,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 256 | `256_Expect.spec.ts` | Value (`toBe`/`toEqual`/`toBeGreaterThan`) + locator (`toBeVisible`/`toContainText`/`toHaveAttribute`/`toHaveCount`) + soft block + negation |
| 257 | `257_URL_Asserations.spec.ts` | `toHaveTitle` (string + regex), `toHaveURL`, state asserts (`toBeChecked`/`toBeEnabled`/`toBeVisible`) |
| 📄 | `Expect_Assertions_Cheatsheet.md` | One-pager — every common assertion, single example each (interview prep) |
| 📄 | `More_Expect_Examples.md` | Full TTA reference — visibility, state, text, attributes, accessibility, screenshots, modifiers |

```ts
// Value assertions — synchronous, no await
expect(1 + 2).toBe(3);
expect({ age: 20, role: 'admin' }).toEqual({ role: 'admin', age: 20 });

// Locator assertions — auto-retrying, await required
const heading = page.getByText('multiple element filters', { exact: true });
await expect(heading).toBeVisible();
await expect(heading).toContainText('filter', { timeout: 10_000 });
await expect(page.locator('footer a')).toHaveCount(16);

// Soft block — collect failures, keep running
await expect.soft(firstName).toHaveAttribute('id', 'first-name');
await expect.soft(firstName).toBeVisible();
await expect.soft(firstName).toHaveValue('');

// Negation
await expect(page.locator('#error')).not.toBeVisible();

// Page assertions
await expect(page).toHaveTitle(/Calendar/);
await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');
```

| Family | Auto-retry? | Examples |
|:-------|:-----------:|:---------|
| Locator | ✅ | `toBeVisible`, `toHaveText`, `toHaveCount`, `toBeChecked`, `toHaveAttribute` |
| Page | ✅ | `toHaveTitle`, `toHaveURL`, `toHaveScreenshot` |
| APIResponse | ✅ | `toBeOK` |
| Value (Jest-style) | ❌ | `toBe`, `toEqual`, `toContain`, `toThrow`, `toMatchObject` |

> 💡 Default auto-retry timeout is **5 s**. Override per-call via `{ timeout: 10_000 }`, or globally via `expect.configure({ timeout: 30_000 })`. Two reference docs live in `tests/17_Expect_Assertions/` — `Expect_Assertions_Cheatsheet.md` (short) and `More_Expect_Examples.md` (long).

---

### 18 — Test Hooks & Annotations

**Concept:** Tests rarely live alone. Playwright provides **lifecycle hooks** (`beforeAll`/`beforeEach`/`afterEach`/`afterAll`), **annotations** (`test.skip`/`.slow`/`.fail`/`.fixme`/`.only`), and **structural primitives** (`test.step`, `test.describe`, `test.describe.serial`) to shape what runs, in what order, under what conditions.

**Why:** Real suites need shared setup (login once, seed DB), conditional skips per-browser/per-env, named steps that show up in reports, and the occasional ordered scenario where state flows from one test to the next (cart → checkout).

**Q&A — why use this?**
- **Q: Is `beforeAll` truly "once"?** A: Once per worker per file. With `fullyParallel: true`, every worker that picks up a test in this file re-runs `beforeAll`. For true cross-worker setup use a `globalSetup` script in `playwright.config.ts`.
- **Q: When should I reach for `describe.serial`?** A: Only when tests must share mutable state (a logged-in cart that the next test consumes). It defeats parallelism — prefer fresh state via fixtures wherever you can.
- **Q: `test.fixme` vs `test.skip`?** A: `skip` = ignored on purpose / not relevant in this run; `fixme` = known broken, will be fixed. `fixme` gives triage a better signal than a silent skip.

```mermaid
sequenceDiagram
    participant W as Worker
    participant H as Hooks
    participant T1 as Test 1
    participant T2 as Test 2

    W->>H: test.beforeAll
    Note over H: once per worker per file
    W->>H: test.beforeEach
    H->>T1: run Test 1
    T1->>H: afterEach (screenshot on fail)
    W->>H: test.beforeEach
    H->>T2: run Test 2
    T2->>H: afterEach
    W->>H: test.afterAll
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 258 | `258_Test_HOOK.spec.ts` | Conditional `test.skip(browserName === 'firefox', …)`, `test.slow`, `test.fixme`, `test.fail` |
| 259 | `259_Grouped_TEST.spec.ts` | `test.step('open page', …)` — named phases, reportable in Allure / trace viewer |
| 260 | `260_Test_Before_After.spec.ts` | `beforeAll` / `beforeEach` / `afterEach` (failure screenshot) / `afterAll` |
| 261 | `261_Group_Describe.spec.ts` | `test.describe.serial(…)` for ordered suite + sibling parallel standalones |

```ts
// Lab 260 — full lifecycle
test.beforeAll(async () => {
    console.log('beforeAll — server is up');           // once per worker per file
});

test.beforeEach(async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 29 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29);
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => { console.log('afterAll — tear down'); });

// Lab 258 — conditional skip + slow + fixme + fail
test('title test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Feature not yet supported on Firefox');
    await page.goto(URL);
    await expect(page).toHaveTitle(/Multiple Element Filter/, { timeout: 15_000 });
});

// Lab 259 — named steps
await test.step('open practice page', async () => { await page.goto(URL); });
await test.step('fields are visible', async () => {
    await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
});

// Lab 261 — ordered suite
test.describe.serial('Checkout suite — must run in order', () => {
    test('open landing',   async () => { /* … */ });
    test('search product', async () => { /* … */ });
    test('add to cart',    async () => { /* … */ });
    test('go to checkout', async () => { /* … */ });
});
```

| Annotation | Effect | Use For |
|:-----------|:-------|:--------|
| `test.skip(cond, reason)` | Skips when `cond === true` | Per-browser / per-env gating |
| `test.slow(cond, reason)` | Triples default timeout | Heavy pages on a specific browser |
| `test.fixme(cond?)` | Marks known broken — won't run | Triage queue — better than silent skip |
| `test.fail()` | Test is expected to fail | TDD red-phase, contract not yet shipped |
| `test.only` | Run only marked tests in this file | Local debug — never commit |

> ⚠️ `test.describe.serial` makes failures cascade — once a test in the block fails, every later test is skipped. Wanted for state-coupled flows, dangerous everywhere else.

---

### 19 — Data-Driven Testing

**Concept:** Data-Driven Testing (DDT) means parameterizing one test body and feeding it many rows of input — so a single `test('Login with: ...', ...)` becomes **N** tests, one per row. In Playwright/TS this is done by wrapping `test()` in a plain `for (const data of rows)` loop. The data source can be an inline array, a CSV, a JSON, a YAML, or an XLSX file.

**Why:** Hand-writing a separate test per credential combo (`valid`, `invalid password`, `empty username`, `SQL injection`…) is copy-paste hell. DDT lets you keep **one** test body and a separate, reviewable **data file** — non-coders can edit the CSV, QA can grow the matrix, and the test count scales linearly with rows.

**Q&A — why use this?**
- **Q: Where does the `for` loop go — inside or outside `test()`?** A: **Outside.** The loop registers N independent tests at file-load time. Looping inside one test gives you a single test that fails on the first row and stops.
- **Q: Why not Playwright's CSV/JSON reporter trick?** A: Playwright has no built-in fixture for "read this CSV, give me rows". You roll a tiny reader (`csvReader.ts`, ~30 lines) or import JSON directly. Same end result, full type control.
- **Q: How do I keep test names readable?** A: Use a `description` column. `test(`Login with: ${data.description}`, …)` produces clean per-row names in the report instead of `Login #1`, `Login #2`.

```mermaid
flowchart LR
    F["Data file<br/>CSV / JSON / YAML / XLSX"] --> R["Reader<br/>readCSV / readYAML / readXLSX<br/>or import JSON"]
    R --> A["TestDataRow[]"]
    A --> L{for &#40;const row of rows&#41;}
    L --> T1["test&#40;'Login with: '+row.description&#41;"]
    L --> T2["test&#40;'Login with: '+row.description&#41;"]
    L --> T3["test&#40;'Login with: '+row.description&#41;"]
    T1 --> P[Playwright runner — N parallel tests]
    T2 --> P
    T3 --> P

    style F fill:#fef3c7,stroke:#f59e0b,color:#000
    style R fill:#dbeafe,stroke:#3b82f6,color:#000
    style P fill:#d1fae5,stroke:#10b981,color:#000
```

| Lab | File | Demonstrates |
|:---:|:-----|:-------------|
| 262 | `262_DDT_Simple.spec.ts` | Inline array of 5 login rows — `for (const data of loginData) { test(...) }` |
| 263 | `263_DDT_CSV.spec.ts` | `readCSV('login-data.csv')` → 7 rows → 7 tests |
| 264 | `264_DDT_CSV.spec.ts` | CSV + `beforeEach` / `afterEach` + branch on `shouldPass` ('true' string) and `expectedError` |
| 265 | `265_DDT_JSON.spec.ts` | `import loginData from './registration-data.json'` — no reader needed, TS handles parse |
| 🛠 | `csvReader.ts` | 30-line CSV parser → `TestDataRow[]` |
| 🛠 | `xlsxReader.ts` | `XLSX.readFile + sheet_to_json` for spreadsheets |
| 🛠 | `yamlReader.ts` | `js-yaml` parse → array, with optional `key` for nested docs |

```ts
// Lab 263 — CSV-driven login matrix
import { test, expect } from '@playwright/test';
import { readCSV } from './csvReader';

const loginData = readCSV('login-data.csv');

for (const data of loginData) {
    test(`Login with : ${data.description}`, async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        await page.getByRole('textbox', { name: 'Email Address' }).fill(data.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
        await page.getByRole('button', { name: 'Login to Practice Account' }).click();

        if (data.shouldPass === 'true') {
            await expect(page).not.toHaveURL(/multiple_element_filter/);
        } else {
            await expect(page.getByText(data.expectedError)).toBeVisible();
        }
    });
}
```

```ts
// csvReader.ts — minimal hand-rolled parser
import * as fs from 'fs';
import * as path from 'path';

export interface TestDataRow { [key: string]: string }

export function readCSV(filePath: string): TestDataRow[] {
    const content = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const [header, ...lines] = content.trim().split('\n');
    const headers = header.split(',').map(h => h.trim());

    return lines.map(line => {
        const values = line.split(',');
        return Object.fromEntries(
            headers.map((h, i) => [h, values[i]?.trim() ?? ''])
        ) as TestDataRow;
    });
}
```

| Data Source | Reader | When to Use |
|:------------|:-------|:------------|
| Inline `const rows = [...]` | none | Tiny matrices (< 10 rows) — keeps test self-contained |
| `.json` | `import data from './x.json'` | Structured payloads, nested objects, TS validates shape |
| `.csv` | `readCSV(path)` | Non-coders edit data in Excel/Numbers — flat tabular fixtures |
| `.yaml` | `readYAML(path, key?)` | Human-friendly multi-line strings, comments, nested groups |
| `.xlsx` | `readXLSX(path, sheet?)` | Real business datasets that already live in spreadsheets |

> ⚠️ Read the file **at module top-level** (outside `test()`). If you read it inside `beforeAll`, Playwright has already finished test discovery and your loop registers zero tests.

> 💡 The CSV column `shouldPass` is a **string** (`"true"` / `"false"`), not a boolean — that's why Lab 264 compares with `=== 'true'`. JSON keeps real booleans (Lab 265 still uses the string compare to stay symmetric, but you can switch to truthy checks once typed).

---

### 20–23 — Scaffolded Advanced Modules

The next curriculum blocks are present as empty directories so future lessons can be added without changing the top-level layout:

| Module | Current Status | Planned Focus |
|:-------|:---------------|:--------------|
| `20_Page_Object_Model` | Scaffolded | Page classes, reusable components, and app-specific actions |
| `21_Fixture` | Scaffolded | Custom Playwright fixtures and typed test extension |
| `22_Misc_Concepts` | Scaffolded | Cross-cutting Playwright patterns and edge cases |
| `23_Advance_Framework` | Scaffolded | Framework structure, reusable utilities, and suite organization |

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

### Projects — QA Profile

`Projects/Project_5_QA_Profile` is scaffolded for the next project module. Add specs here when the QA profile capstone is implemented so project exercises stay separate from the numbered lab sequence.

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

The active `playwright.config.ts` uses Playwright's built-in **HTML reporter**. Allure and the custom TTA reporter are kept in the repo and can be enabled by switching the commented reporter line in the config.

```mermaid
flowchart LR
    T[npx playwright test] --> R1[📘 HTML Reporter<br/>./playwright-report]
    T -.enable in config.-> R2[📗 Allure Reporter<br/>./allure-results]
    T -.enable in config.-> R3[📕 Custom TTA Reporter<br/>./tta-report]
    R1 -->|npm run report| V1[Browser]
    R2 -->|allure generate + open| V2[Browser]
    R3 -->|npm run report:tta| V3[Browser]
```

| Reporter | Built-in? | Output | Open Command |
|:---------|:---------:|:-------|:-------------|
| HTML | ✅ active | `./playwright-report/index.html` | `npm run report` |
| Allure | Available, commented in config | `./allure-results` → `./allure-report` | `npx allure open ./allure-report` |
| Custom TTA | Available, commented in config | `./tta-report/index.html` | `npm run report:tta` |

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
| `reporter` | `[['html']]` | Built-in Playwright HTML report is active |
| `headless` | `false` | 👀 Learning is easier when you watch |
| `viewport` | `1920 × 1080` | Full HD — matches real desktops |
| `trace` | `'on'` | Record every action — open with `show-trace` |
| `video` | `'on'` | Per-test recording |
| `screenshot` | `'on'` | Per-step still images |
| `projects` | `chromium` only | Firefox / WebKit commented out — ready to enable |

```mermaid
flowchart TD
    A[playwright.config.ts] --> B[fullyParallel: true]
    A --> C[reporter: HTML]
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
