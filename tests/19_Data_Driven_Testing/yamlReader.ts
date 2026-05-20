import * as fs from 'fs';
import * as yaml from 'js-yaml';

export interface TestDataRow {
    [key: string]: string;
}

export function readYAML(filePath: string, key?: string): TestDataRow[] {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = yaml.load(content) as unknown;

    const rows = key
        ? (parsed as Record<string, unknown>)?.[key]
        : parsed;

    if (!Array.isArray(rows)) {
        throw new Error(
            `Expected array in YAML${key ? ` at key "${key}"` : ''}, got ${typeof rows}`
        );
    }

    return rows.map((row: Record<string, unknown>) => {
        const normalized: TestDataRow = {};
        for (const k of Object.keys(row)) {
            normalized[k.trim()] = row[k] == null ? "" : String(row[k]).trim();
        }
        return normalized;
    });
}
