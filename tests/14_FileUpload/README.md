# Module 14: File Upload

This module covers Playwright file upload handling with `locator().setInputFiles()`.
It includes examples for uploading a local fixture from disk and creating upload
payloads directly in the test with buffers.

## Key Files and Assets

- `252_FileUpload.spec.ts`: Uploads `testdata.txt` to the Internet Herokuapp upload page, submits the form, and asserts the uploaded filename.
- `253_Multi_FileUpload.spec.ts`: Demonstrates multi-file upload by passing in-memory file objects with `name`, `mimeType`, and `buffer`.
- `testdata.txt`: Empty text fixture used by the single-file upload test.
- `file1.jpg` and `file2.jpg`: Local JPEG assets available for file upload practice or extending the multi-file example.

## Upload Patterns

- Disk fixture upload:
  ```ts
  const filePath = path.join(__dirname, 'testdata.txt');
  await page.locator('#file-upload').setInputFiles([filePath]);
  ```

- In-memory multi-file upload:
  ```ts
  await page.locator('input[type="file"]').setInputFiles([
      {
          name: 'file1.jpg',
          mimeType: 'image/jpeg',
          buffer: Buffer.from('image content')
      }
  ]);
  ```

## Run This Module

Run all file upload lessons:

```bash
npx playwright test tests/14_FileUpload
```

Run one lesson:

```bash
npx playwright test tests/14_FileUpload/252_FileUpload.spec.ts
npx playwright test tests/14_FileUpload/253_Multi_FileUpload.spec.ts
```

These tests use external demo pages, so network availability and page changes can
affect results.
