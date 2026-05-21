# File Download Module

This module demonstrates handling browser downloads with Playwright. The spec opens the Testing Academy upload/download widget, waits for a `download` event, clicks the static download control, and saves the downloaded file using Playwright's suggested filename.

## Files

- `254_File_Downlaod.spec.ts`: lesson spec for triggering and saving a file download.
- `downloads/`: local folder for lesson download artifacts and notes about generated files.

Run this module with:

```bash
npx playwright test tests/15_File_Download/254_File_Downlaod.spec.ts
```
