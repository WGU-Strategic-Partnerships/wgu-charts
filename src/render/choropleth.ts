import US_STATES from '../data/us-states.json';
import { escapeHtml } from './runtime';

// PIN glyph used in the location-list rows (ported from ppChoropleth).
const PIN_SVG = 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z';

// 2-letter abbreviation -> full state name (50 states + DC).
const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia',
  FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois',
  IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
  NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon',
  PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota',
  TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia',
  WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming'
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// Heat ramp: light-blue -> sky -> medium -> navy (ported from ppChoropleth heatColor).
function heatColor(t: number): string {
  t = Math.max(0, Math.min(1, t));
  const cs = [[200, 224, 245], [70, 177, 239], [0, 112, 240], [3, 40, 100]];
  const seg = t * (cs.length - 1);
  const i = Math.min(Math.floor(seg), cs.length - 2);
  const f = seg - i;
  const c = cs[i];
  const d = cs[i + 1];
  return 'rgb(' + Math.round(lerp(c[0], d[0], f)) + ',' +
    Math.round(lerp(c[1], d[1], f)) + ',' +
    Math.round(lerp(c[2], d[2], f)) + ')';
}

export interface ChoroplethRow { state: string; count: number; }

export interface ChoroplethShape {
  state: string;
  name: string;
  d: string;
  count: number;
  fill: string;
}

export interface ChoroplethModel {
  viewBox: string;
  byState: Array<{ state: string; name: string; count: number }>;
  shapes: ChoroplethShape[];
}

// Neutral fill for states with no data.
const EMPTY_FILL = '#E7EEF5';

const paths = (US_STATES as { vb: string; paths: Record<string, string> }).paths;
const viewBoxValue = (US_STATES as { vb: string; paths: Record<string, string> }).vb;

export function choroplethModel(data: ChoroplethRow[], _opts?: unknown): ChoroplethModel {
  // Aggregate by state (sum counts).
  const agg: Record<string, number> = {};
  (Array.isArray(data) ? data : []).forEach((d) => {
    const ab = d.state;
    if (!ab) return;
    agg[ab] = (agg[ab] || 0) + (Number(d.count) || 0);
  });

  // Sort by count desc, attach full names.
  const byState = Object.keys(agg)
    .map((ab) => ({ state: ab, name: STATE_NAMES[ab] || ab, count: agg[ab] }))
    .sort((a, b) => b.count - a.count);

  const maxCount = byState.length ? byState[0].count : 1;

  // Build data map for quick lookup.
  const dataMap: Record<string, { name: string; count: number }> = {};
  byState.forEach((s) => { dataMap[s.state] = { name: s.name, count: s.count }; });

  // One shape per state present in the bundled geo data.
  const shapes: ChoroplethShape[] = Object.keys(paths).map((ab) => {
    const ds = dataMap[ab];
    if (ds) {
      return {
        state: ab,
        name: ds.name,
        d: paths[ab],
        count: ds.count,
        fill: heatColor(ds.count / (maxCount || 1))
      };
    }
    return {
      state: ab,
      name: STATE_NAMES[ab] || ab,
      d: paths[ab],
      count: 0,
      fill: EMPTY_FILL
    };
  });

  return { viewBox: viewBoxValue, byState, shapes };
}

export function renderChoropleth(model: ChoroplethModel): string {
  // SVG paths (d values are trusted bundled geo data — no escaping needed).
  const pathEls = model.shapes.map((s) =>
    `<path class="${s.count > 0 ? 'cz' : 'cz-bg'}" data-ab="${escapeHtml(s.state)}" d="${s.d}" fill="${s.fill}" stroke="#fff" stroke-width="0.7"><title>${escapeHtml(s.name)}${s.count > 0 ? ': ' + escapeHtml(s.count) : ''}</title></path>`
  ).join('');

  const svg = `<svg viewBox="${model.viewBox}" role="img" aria-label="US state choropleth of applicants">${pathEls}</svg>`;

  const mapBadge = `<div class="map-badge"><svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="${PIN_SVG}"></path></svg>Applicants by state</div>`;

  const locationCount = model.byState.length;
  const listRows = model.byState.map((s, i) => {
    const sub = escapeHtml(s.state) + (i === 0 ? ' · top state' : '');
    return `<div class="lm-row"><span class="lp"><svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="${PIN_SVG}"></path></svg></span><span class="ln"><b>${escapeHtml(s.name)}</b><small>${sub}</small></span><span class="lc">${escapeHtml(s.count)}</span></div>`;
  }).join('');

  const list = `<div class="lmlist"><div class="lmh">Locations · ${escapeHtml(locationCount)} states</div><div class="lmrows">${listRows}</div></div>`;

  return `<div class="pp-choro"><div class="pp-choro__grid"><div class="pp-choro__mapcol"><div class="lmap">${svg}${mapBadge}</div></div>${list}</div></div>`;
}

export const choroplethCss = `/* US choropleth + location list — ported from ppChoropleth.css.
   All custom props replaced with literal hex values. */
.pp-choro {
    background: #fff;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
}
.pp-choro__title {
    margin: 0 0 14px;
    font-size: 14px;
    font-weight: 600;
    color: #264468;
    letter-spacing: .01em;
}
.pp-choro__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 18px;
    align-items: start;
}
@media (max-width: 720px) {
    .pp-choro__grid { grid-template-columns: 1fr; }
}

/* Map frame */
.lmap {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(0, 40, 85, .10);
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    background: #D7E6F2;
    min-height: 230px;
}
.lmap svg {
    display: block;
    width: 100%;
    height: auto;
}
.cz {
    cursor: pointer;
    transition: fill-opacity .15s;
}
.cz:hover {
    fill-opacity: .82;
}
.map-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10.5px;
    font-weight: 700;
    color: #264468;
    background: rgba(255, 255, 255, .9);
    padding: 5px 10px;
    border-radius: 999px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    letter-spacing: .02em;
}
.map-badge svg {
    width: 13px;
    height: 13px;
    color: #0070F0;
}
.map-unavailable {
    display: grid;
    place-items: center;
    min-height: 230px;
    color: #5b6e84;
    font-size: 13px;
    font-weight: 600;
}

/* Heat legend */
.map-hlegend {
    margin-top: 10px;
}
.map-hlegend .hl-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11.5px;
    font-weight: 600;
    color: #5b6e84;
    flex-wrap: wrap;
}
.map-hlegend .hl-cap {
    text-transform: uppercase;
    letter-spacing: .06em;
    color: #264468;
}
.map-hlegend .hl-bar {
    flex: 0 0 170px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, #C8E0F5, #46B1EF, #0070F0, #03286E);
}
.map-hlegend .hl-none {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    margin-left: 4px;
}
.map-hlegend .hl-none i {
    width: 11px;
    height: 11px;
    border-radius: 3px;
    background: #E7EEF5;
    border: 1px solid #cfdbe8;
}
.map-note {
    margin: 10px 0 0;
    font-size: 11px;
    line-height: 1.45;
    color: #5b6e84;
}

/* Location list */
.lmlist {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
}
.lmlist .lmh {
    padding: 9px 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .09em;
    text-transform: uppercase;
    color: #5b6e84;
    background: #EEF6F9;
    border-bottom: 1px solid rgba(0, 40, 85, .10);
}
.lmrows {
    display: flex;
    flex-direction: column;
    max-height: 430px;
    overflow: auto;
}
.lm-row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 11px;
    width: 100%;
    padding: 9px 14px;
    appearance: none;
    background: #fff;
    border: 0;
    border-bottom: 1px solid rgba(0, 40, 85, .10);
    cursor: pointer;
    text-align: left;
    font-family: inherit;
    color: inherit;
    transition: background .15s ease;
}
.lm-row:last-child {
    border-bottom: 0;
}
.lm-row:hover {
    background: #EEF6F9;
}
.lm-row.sel {
    background: #EEF6F9;
    box-shadow: inset 3px 0 0 #0070F0;
}
.lm-row .lp {
    width: 20px;
    height: 20px;
    color: #0070F0;
    display: grid;
    place-items: center;
    flex: none;
}
.lm-row .lp svg {
    width: 17px;
    height: 17px;
}
.lm-row .ln {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}
.lm-row .ln b {
    font-size: 13.5px;
    font-weight: 600;
    color: #0a2540;
    line-height: 1.15;
}
.lm-row .ln small {
    font-size: 11px;
    color: #5b6e84;
}
.lm-row .lc {
    font-family: 'Newsreader', Georgia, serif;
    font-weight: 600;
    font-size: 17px;
    color: #0a2540;
}
`;
