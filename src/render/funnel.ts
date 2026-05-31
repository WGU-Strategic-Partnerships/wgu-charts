import { escapeHtml } from './runtime';

export interface FunnelStage { stage?: string; label: string; value: number; meta?: string; connector?: string; widthPct?: number; }
export interface FunnelOptions { dark?: boolean; }
const MIN_PCT = 8;

export function funnelModel(stages: FunnelStage[], opts: FunnelOptions = {}) {
  const arr = Array.isArray(stages) ? stages : [];
  const max = arr.reduce((m, s) => Math.max(m, Number(s.value) || 0), 0) || 1;
  const rows = arr.map((s, i) => {
    const val = Number(s.value) || 0;
    const widthPct = s.widthPct != null ? Number(s.widthPct)
      : Math.max(MIN_PCT, parseFloat(((val / max) * 100).toFixed(1)));
    return { stage: s.stage, label: s.label, meta: s.meta, value: val, widthPct,
      connector: (s.connector && i < arr.length - 1) ? s.connector : undefined };
  });
  return { rows, dark: !!opts.dark };
}

export function renderFunnel(model: ReturnType<typeof funnelModel>): string {
  const cls = 'pp-funnel' + (model.dark ? ' pp-funnel--on-dark' : '');
  const groups = model.rows.map((r) => {
    const stage = r.stage ? `<span class="pp-funnel__stg">${escapeHtml(r.stage)}</span>` : '';
    const meta = r.meta ? `<span class="pp-funnel__meta">${escapeHtml(r.meta)}</span>` : '';
    const conn = r.connector ? `<div class="pp-funnel__conn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"></path></svg>${escapeHtml(r.connector)}</div>` : '';
    return `<div class="pp-funnel__group"><div class="pp-funnel__stage"><span class="pp-funnel__bar" style="width:${r.widthPct}%"></span><span class="pp-funnel__fl">${stage}<span class="pp-funnel__lbl">${escapeHtml(r.label)}</span>${meta}</span><span class="pp-funnel__fv num">${escapeHtml(r.value)}</span></div>${conn}</div>`;
  }).join('');
  return `<div class="${cls}">${groups}</div>`;
}

export const funnelCss = `/* Funnel band — ported from the design .funnel/.funnel-stage/.funnel-conn.
   Bars are scaled for readability (widthPct) while counts shown are exact.
   The on-dark variant matches the navy hero. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 600;
    letter-spacing: -.01em;
}

.pp-funnel {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.pp-funnel__stage {
    position: relative;
    border-radius: 10px;
    padding: 16px 18px;
    overflow: hidden;
    background: #EEF6F9;
    border: 1px solid rgba(0, 40, 85, .10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}
.pp-funnel__bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(90deg, rgba(0, 112, 240, .18) 0%, rgba(70, 177, 239, .26) 100%);
    border-right: 3px solid #0070F0;
}
.pp-funnel__fl,
.pp-funnel__fv {
    position: relative;
}
.pp-funnel__fl {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.pp-funnel__stg {
    font-size: 10.5px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #0070F0;
    font-weight: 600;
}
.pp-funnel__lbl {
    font-size: 14.5px;
    font-weight: 500;
    color: #002855;
}
.pp-funnel__meta {
    font-size: 12px;
    color: #6B7C93;
}
.pp-funnel__fv {
    font-weight: 600;
    font-size: 34px;
    line-height: 1;
    color: #002855;
    letter-spacing: -.01em;
}
.pp-funnel__conn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 18px;
    color: #6B7C93;
    font-size: 12px;
}
.pp-funnel__conn svg {
    width: 14px;
    height: 14px;
    color: #0070F0;
}

/* on-dark (navy hero) variant — exact design values */
.pp-funnel--on-dark .pp-funnel__stage {
    background: rgba(255, 255, 255, .06);
    border: 1px solid rgba(255, 255, 255, .12);
}
.pp-funnel--on-dark .pp-funnel__bar {
    background: linear-gradient(90deg, rgba(0, 112, 240, .6) 0%, rgba(70, 177, 239, .72) 100%);
    border-right: 3px solid #46B1EF;
    box-shadow: 0 0 24px rgba(70, 177, 239, .34);
}
.pp-funnel--on-dark .pp-funnel__stg { color: #46B1EF; }
.pp-funnel--on-dark .pp-funnel__lbl { color: #fff; }
.pp-funnel--on-dark .pp-funnel__meta { color: #BBD0E8; }
.pp-funnel--on-dark .pp-funnel__fv { color: #fff; }
.pp-funnel--on-dark .pp-funnel__conn { color: #BBD0E8; }
.pp-funnel--on-dark .pp-funnel__conn svg { color: #46B1EF; }
`;
