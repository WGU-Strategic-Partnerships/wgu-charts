import { escapeHtml } from './runtime';
const R = 42;
const CIRC = 2 * Math.PI * R;

export interface GaugeOptions { label: string; percent: number; color?: string; sub?: string; size?: number; dark?: boolean; }

export function gaugeModel(o: GaugeOptions) {
  const clampPct = Math.max(0, Math.min(100, Number(o.percent) || 0));
  const filled = (clampPct / 100) * CIRC;
  return {
    label: o.label, sub: o.sub, color: o.color || '#0070F0', size: Number(o.size) || 116,
    dark: !!o.dark, radius: R, clampPct,
    displayPct: (Math.round((Number(o.percent) || 0) * 10) / 10) + '%',
    dashArray: `${filled.toFixed(2)} ${(CIRC - filled).toFixed(2)}`
  };
}

export function renderGauge(m: ReturnType<typeof gaugeModel>): string {
  const cls = 'pp-gauge' + (m.dark ? ' pp-gauge--on-dark' : '');
  const sub = m.sub ? `<div class="pp-gauge__sub">${escapeHtml(m.sub)}</div>` : '';
  return `<div class="${cls}"><div class="pp-gauge__svg-wrap" style="width:${m.size}px"><svg viewBox="0 0 100 100" class="pp-gauge__svg" style="width:${m.size}px" role="img" aria-label="${escapeHtml((m.label?m.label+': ':'')+m.displayPct)}"><circle class="pp-gauge__track" cx="50" cy="50" r="${m.radius}" fill="none" stroke-width="10"></circle><circle class="pp-gauge__arc" cx="50" cy="50" r="${m.radius}" fill="none" stroke="${m.color}" stroke-width="10" stroke-dasharray="${m.dashArray}" stroke-linecap="round" transform="rotate(-90 50 50)"></circle></svg><div class="pp-gauge__center"><span class="pp-gauge__pct num">${escapeHtml(m.displayPct)}</span></div></div><div class="pp-gauge__label">${escapeHtml(m.label)}</div>${sub}</div>`;
}

export const gaugeCss = `/* Gauge — ported from the design gauge()/.gauge styles.
   Animated arc draw-on, serif numeral percent, optional sub + onDark variant. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 600;
    letter-spacing: -.01em;
}

.pp-gauge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background: transparent;
    text-align: center;
}

.pp-gauge__svg-wrap {
    position: relative;
    display: inline-block;
}
.pp-gauge__svg { display: block; height: auto; }
.pp-gauge__track { stroke: #F1F1F1; }

/* draw-on animation: arc is fully offset, then animates to its dash position */
.pp-gauge__arc {
    stroke-dashoffset: 0;
    animation: pp-gauge-draw 1.1s cubic-bezier(.2, .8, .2, 1) .15s both;
}
@keyframes pp-gauge-draw {
    from { stroke-dashoffset: 264; }
    to { stroke-dashoffset: 0; }
}

.pp-gauge__center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.pp-gauge__pct {
    font-size: 30px;
    color: #002855;
    line-height: 1;
}
.pp-gauge__label {
    font-size: 12.5px;
    font-weight: 600;
    color: #264468;
    text-align: center;
    letter-spacing: .01em;
}
.pp-gauge__sub {
    font-size: 11px;
    color: #6B7C93;
    text-align: center;
}

/* on-dark (navy hero) variant */
.pp-gauge--on-dark .pp-gauge__track { stroke: rgba(255, 255, 255, .14); }
.pp-gauge--on-dark .pp-gauge__pct { color: #fff; }
.pp-gauge--on-dark .pp-gauge__label { color: #fff; }
.pp-gauge--on-dark .pp-gauge__sub { color: #BBD0E8; }
`;
