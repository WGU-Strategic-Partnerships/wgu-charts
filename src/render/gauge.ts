import { escapeHtml } from './runtime';
const R = 42;
const CIRC = 2 * Math.PI * R;

const HALF_R = 40;
const DEFAULT_ZONE_COLORS: [string, string, string] = ['#E5484D', '#F5A623', '#97E152'];

export interface GaugeOptions {
  label: string;
  percent?: number;
  color?: string;
  sub?: string;
  size?: number;
  dark?: boolean;
  // Half-circle variant fields (all optional)
  variant?: 'ring' | 'half';
  value?: number;
  min?: number;
  max?: number;
  thresholds?: [number, number];
  zoneColors?: [string, string, string];
  unit?: string;
}

function buildHalfModel(o: GaugeOptions) {
  const value = Number(o.value) || 0;
  const min = Number(o.min) || 0;
  const max = Number(o.max) || 0;
  const range = max === min ? 0 : max - min;
  const t = range === 0 ? 0 : Math.max(0, Math.min(1, (value - min) / range));
  const pointerDeg = -90 + t * 180;
  const displayValue = String(value) + (o.unit || '');
  const zoneColors = o.zoneColors || DEFAULT_ZONE_COLORS;

  // Build normalized zone boundaries [0..1]
  let zoneBounds: [number, number, number, number];
  if (o.thresholds && o.thresholds.length >= 2 && range > 0) {
    const t1 = Math.max(0, Math.min(1, (o.thresholds[0] - min) / range));
    const t2 = Math.max(0, Math.min(1, (o.thresholds[1] - min) / range));
    zoneBounds = [0, t1, t2, 1];
  } else {
    zoneBounds = [0, 1/3, 2/3, 1];
  }

  const zones = [
    { from: zoneBounds[0], to: zoneBounds[1], color: zoneColors[0] },
    { from: zoneBounds[1], to: zoneBounds[2], color: zoneColors[1] },
    { from: zoneBounds[2], to: zoneBounds[3], color: zoneColors[2] },
  ];

  return {
    variant: 'half' as const,
    label: o.label, sub: o.sub, dark: !!o.dark, unit: o.unit,
    value, min, max, t, pointerDeg, displayValue, zones,
  };
}

export function gaugeModel(o: GaugeOptions) {
  if (o.variant === 'half') {
    return buildHalfModel(o);
  }
  // Default: ring gauge (unchanged)
  const clampPct = Math.max(0, Math.min(100, Number(o.percent) || 0));
  const filled = (clampPct / 100) * CIRC;
  return {
    variant: 'ring' as const,
    label: o.label, sub: o.sub, color: o.color || '#0070F0', size: Number(o.size) || 116,
    dark: !!o.dark, radius: R, clampPct,
    displayPct: (Math.round((Number(o.percent) || 0) * 10) / 10) + '%',
    dashArray: `${filled.toFixed(2)} ${(CIRC - filled).toFixed(2)}`
  };
}

// Standard-math polar: 0°=east/right, 90°=north/up, 180°=west/left; y-axis inverted for screen.
function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
}

// Arc path from deg0 to deg1, sweeping clockwise over the top semicircle (deg0 > deg1).
// Map fraction [0..1] → angle: frac=0 → 180° (left), frac=1 → 0° (right).
function fracToDeg(frac: number): number {
  return 180 - frac * 180;
}

function arcPath(cx: number, cy: number, r: number, deg0: number, deg1: number): string {
  const [x0, y0] = polar(cx, cy, r, deg0);
  const [x1, y1] = polar(cx, cy, r, deg1);
  const large = Math.abs(deg1 - deg0) > 180 ? 1 : 0;
  // deg0 > deg1 (e.g. 180 → 60) means clockwise over the top → sweep=1
  const sweep = deg0 > deg1 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} ${sweep} ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

function renderHalfGauge(m: ReturnType<typeof buildHalfModel>): string {
  const cx = 50, cy = 50, r = HALF_R;

  // Zone arcs: each zone's from/to [0..1] maps to degrees 180→0 (left→right).
  // For zone {from, to}: deg0=fracToDeg(from) > deg1=fracToDeg(to), sweep clockwise over top.
  const zonePaths = m.zones.map(z => {
    const deg0 = fracToDeg(z.from);
    const deg1 = fracToDeg(z.to);
    const d = arcPath(cx, cy, r, deg0, deg1);
    return `<path d="${d}" fill="none" stroke="${escapeHtml(z.color)}" stroke-width="9" stroke-linecap="butt"/>`;
  }).join('');

  // Pointer: line from center to tip (slightly inside arc), plus hub circle.
  // t=0 → 180° (left), t=1 → 0° (right), t=0.5 → 90° (straight up).
  const pointerDeg = fracToDeg(m.t);
  const [tipX, tipY] = polar(cx, cy, r - 6, pointerDeg);
  const pointer = `<line x1="${cx}" y1="${cy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" stroke="#002855" stroke-width="2.5" stroke-linecap="round"/>`;

  // Center dot/hub
  const dot = `<circle cx="${cx}" cy="${cy}" r="3" fill="#002855"/>`;

  const cls = 'pp-gauge pp-gauge--half' + (m.dark ? ' pp-gauge--on-dark' : '');
  const sub = m.sub ? `<div class="pp-gauge__sub">${escapeHtml(m.sub)}</div>` : '';

  return `<div class="${cls}"><svg viewBox="0 0 100 55" class="pp-gauge__svg pp-gauge__svg--half" role="img" aria-label="${escapeHtml(m.label + ': ' + m.displayValue)}">${zonePaths}${pointer}${dot}</svg><div class="pp-gauge__pct num">${escapeHtml(m.displayValue)}</div><div class="pp-gauge__label pp-gauge__label--half">${escapeHtml(m.label)}</div>${sub}</div>`;
}

export function renderGauge(m: ReturnType<typeof gaugeModel>): string {
  if (m.variant === 'half') {
    return renderHalfGauge(m as ReturnType<typeof buildHalfModel>);
  }
  // Ring gauge (unchanged)
  const rm = m as Extract<ReturnType<typeof gaugeModel>, { variant: 'ring' }>;
  const cls = 'pp-gauge' + (rm.dark ? ' pp-gauge--on-dark' : '');
  const sub = rm.sub ? `<div class="pp-gauge__sub">${escapeHtml(rm.sub)}</div>` : '';
  return `<div class="${cls}"><div class="pp-gauge__svg-wrap" style="width:${rm.size}px"><svg viewBox="0 0 100 100" class="pp-gauge__svg" style="width:${rm.size}px" role="img" aria-label="${escapeHtml((rm.label?rm.label+': ':'')+rm.displayPct)}"><circle class="pp-gauge__track" cx="50" cy="50" r="${rm.radius}" fill="none" stroke-width="10"></circle><circle class="pp-gauge__arc" cx="50" cy="50" r="${rm.radius}" fill="none" stroke="${escapeHtml(rm.color)}" stroke-width="10" stroke-dasharray="${rm.dashArray}" stroke-linecap="round" transform="rotate(-90 50 50)"></circle></svg><div class="pp-gauge__center"><span class="pp-gauge__pct num">${escapeHtml(rm.displayPct)}</span></div></div><div class="pp-gauge__label">${escapeHtml(rm.label)}</div>${sub}</div>`;
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

/* Half-circle (MBR) variant */
.pp-gauge--half {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}
.pp-gauge__svg--half {
    width: 100%;
    max-width: 200px;
    height: auto;
    display: block;
}
.pp-gauge--half .pp-gauge__pct {
    font-size: 28px;
    color: #002855;
    line-height: 1;
    margin-top: -4px;
}
.pp-gauge__label--half {
    text-transform: uppercase;
    letter-spacing: .04em;
    font-size: 11px;
    font-weight: 700;
    color: #264468;
    text-align: center;
}
.pp-gauge--on-dark .pp-gauge__label--half { color: #fff; }
.pp-gauge--on-dark.pp-gauge--half .pp-gauge__pct { color: #fff; }
`;
