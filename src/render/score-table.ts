import { escapeHtml } from './runtime';

export interface ScoreColumn { key: string; label: string; align?: 'left' | 'right'; }
export interface ScoreBand { min: number; color: string; }
export interface ScoreTableOptions {
  columns: ScoreColumn[];
  rows: Record<string, string | number>[];
  bandColumn?: string;
  bands?: ScoreBand[];
  caption?: string;
}

export interface ScoreCell {
  value: string | number;
  align: 'left' | 'right';
  bg?: string;
}
export interface ScoreRow { cells: Record<string, ScoreCell>; }
export interface ScoreTableModel {
  columns: ScoreColumn[];
  rows: ScoreRow[];
  caption?: string;
}

export const scoreTableStyleId = 'wgu-score-table';

function pickBand(v: number, bands: ScoreBand[]): string | undefined {
  if (!bands || !bands.length || isNaN(v)) return undefined;
  // sort ascending by min, pick the highest min <= v
  const sorted = [...bands].sort((a, b) => a.min - b.min);
  let picked: string | undefined;
  for (const band of sorted) {
    if (v >= band.min) picked = band.color;
  }
  return picked;
}

export function scoreTableModel(o: ScoreTableOptions): ScoreTableModel {
  const rows: ScoreRow[] = o.rows.map(r => {
    const cells: Record<string, ScoreCell> = {};
    for (const col of o.columns) {
      const value = r[col.key] ?? '';
      const align = col.align || 'left';
      const bg = (o.bandColumn && col.key === o.bandColumn && o.bands)
        ? pickBand(Number(value), o.bands)
        : undefined;
      cells[col.key] = { value, align, bg };
    }
    return { cells };
  });
  return { columns: o.columns, rows, caption: o.caption };
}

export function renderScoreTable(m: ScoreTableModel): string {
  const caption = m.caption
    ? `<caption class="pp-stable__caption">${escapeHtml(m.caption)}</caption>`
    : '';

  const thead = `<thead><tr>${
    m.columns.map(c =>
      `<th class="pp-stable__th${c.align === 'right' ? ' pp-stable__r' : ''}" scope="col">${escapeHtml(c.label)}</th>`
    ).join('')
  }</tr></thead>`;

  const tbody = `<tbody>${
    m.rows.map(row =>
      `<tr>${
        m.columns.map(col => {
          const cell = row.cells[col.key];
          const bgStyle = cell.bg ? ` style="background:${escapeHtml(cell.bg)}"` : '';
          const alignClass = cell.align === 'right' ? ' pp-stable__r' : '';
          return `<td class="pp-stable__td${alignClass}"${bgStyle}>${escapeHtml(cell.value)}</td>`;
        }).join('')
      }</tr>`
    ).join('')
  }</tbody>`;

  return `<div class="pp-stable-wrap"><table class="pp-stable">${caption}${thead}${tbody}</table></div>`;
}

export const scoreTableCss = `/* Score table — branded MBR banded table */
.pp-stable-wrap {
    overflow-x: auto;
    width: 100%;
}
.pp-stable {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    color: #264468;
}
.pp-stable__caption {
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: #002855;
    padding: 0 0 6px;
    caption-side: top;
}
.pp-stable__th {
    text-align: left;
    font-size: 11px;
    font-weight: 700;
    color: #002855;
    padding: 6px 10px;
    border-bottom: 1.5px solid rgba(0,40,85,.15);
    white-space: nowrap;
}
.pp-stable__td {
    padding: 6px 10px;
    border-bottom: 1px solid rgba(0,40,85,.10);
}
.pp-stable__r {
    text-align: right;
}
.pp-stable tbody tr:last-child .pp-stable__td {
    border-bottom: none;
}
`;
