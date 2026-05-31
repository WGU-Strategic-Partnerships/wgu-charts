import { escapeHtml } from './runtime';

export interface KpiOptions { label: string; value: string | number; sub?: string; delta?: string; deltaUp?: boolean; trend?: number[]; }

export function kpiModel(o: KpiOptions) {
  const trend = Array.isArray(o.trend) ? o.trend : [];
  const hasSparkline = trend.length > 1;
  let sparklinePoints = '';
  if (hasSparkline) {
    const max = Math.max(...trend), min = Math.min(...trend), span = (max - min) || 1, w = 100, h = 28;
    sparklinePoints = trend.map((v, i) => `${((i / (trend.length - 1)) * w).toFixed(1)},${(h - ((v - min) / span) * h).toFixed(1)}`).join(' ');
  }
  return { label: o.label, value: o.value, sub: o.sub, delta: o.delta, deltaUp: !!o.deltaUp, hasSparkline, sparklinePoints };
}

const UP = '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"></path>';
const DOWN = '<path d="M3 7l6 6 4-4 8 8M21 17v-6h-6"></path>';

export function renderKpi(m: ReturnType<typeof kpiModel>): string {
  const sub = m.sub ? `<div class="pp-kpi__sub">${escapeHtml(m.sub)}</div>` : '';
  const delta = m.delta ? `<div class="pp-kpi__delta ${m.deltaUp ? 'pp-kpi__delta--up' : 'pp-kpi__delta--down'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${m.deltaUp ? UP : DOWN}</svg>${escapeHtml(m.delta)}</div>` : '';
  const spark = m.hasSparkline ? `<svg class="pp-kpi__spark" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true"><polyline points="${m.sparklinePoints}" fill="none" stroke="#0070F0" stroke-width="2"></polyline></svg>` : '';
  return `<div class="pp-kpi"><div class="pp-kpi__label">${escapeHtml(m.label)}</div><div class="pp-kpi__value num">${escapeHtml(m.value)}</div>${sub}${delta}${spark}</div>`;
}

export const kpiCss = `/* KPI tile — ported from the design .kpi-* styles.
   Serif numerals via 'Newsreader',Georgia,serif; literal hex fallbacks for standalone rendering. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 500;
    letter-spacing: -.01em;
}

.pp-kpi {
    background: #fff;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    transition: transform .2s cubic-bezier(.2, .8, .2, 1), box-shadow .2s cubic-bezier(.2, 0, .2, 1);
}
.pp-kpi:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 23, 49, .10);
}

.pp-kpi__label {
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: .04em;
    color: #6B7C93;
    text-transform: uppercase;
}
.pp-kpi__value {
    font-weight: 600;
    font-size: 44px;
    line-height: 1;
    letter-spacing: -.02em;
    color: #002855;
    margin: 8px 0 0;
}
.pp-kpi__sub {
    font-size: 12.5px;
    color: #6B7C93;
    margin-top: 7px;
}
.pp-kpi__delta {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12.5px;
    font-weight: 600;
    margin-top: 9px;
    padding: 3px 8px;
    border-radius: 999px;
}
.pp-kpi__delta svg { width: 13px; height: 13px; }
.pp-kpi__delta--up { background: rgba(31, 138, 91, .12); color: #1B7A4E; }
.pp-kpi__delta--down { background: rgba(204, 0, 0, .10); color: #B42318; }
.pp-kpi__spark { margin-top: 14px; width: 100%; height: 38px; display: block; }
`;
