import * as XLSX from 'xlsx';

export interface TestDataRow {
    [key: string]: string;
}

export function readXLSX(filePath: string, sheetName?: string): TestDataRow[] {
    const workbook = XLSX.readFile(filePath);
    const targetSheet = sheetName ?? workbook.SheetNames[0];
    const worksheet = workbook.Sheets[targetSheet];

    if (!worksheet) {
        throw new Error(`Sheet "${targetSheet}" not found in ${filePath}`);
    }

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
        defval: "",
        raw: false,
    });

    return rows.map((row) => {
        const normalized: TestDataRow = {};
        for (const key of Object.keys(row)) {
            normalized[key.trim()] = String(row[key]).trim();
        }
        return normalized;
    });
}
