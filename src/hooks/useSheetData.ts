import { useEffect, useState } from 'react';

const parseCsv = <T,>(text: string): T[] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      if (quoted && text[index + 1] === '"') { value += '"'; index += 1; } else quoted = !quoted;
    } else if (character === ',' && !quoted) { row.push(value.trim()); value = ''; }
    else if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && text[index + 1] === '\n') index += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = []; value = '';
    } else value += character;
  }
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  const [headers, ...values] = rows;
  if (!headers) return [];
  return values.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])) as T);
};

export function useSheetData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) { setData([]); setLoading(false); return; }
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((response) => response.ok ? response.text() : Promise.reject())
      .then((text) => setData(parseCsv<T>(text)))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url]);

  return { data, loading };
}
