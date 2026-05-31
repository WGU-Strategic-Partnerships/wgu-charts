# Viz Corpus — Phase B: Complete the Corpus (~150 entries) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Grow the corpus from 43 → ~150 entries by adding new chart-type factories (mostly ECharts-native), a raw-themed-ECharts-option escape hatch, a few Chart.js variant options, and authoring the remaining type/variant/feature-showcase entries across all 11 families.

**Architecture:** (1) Extend `ChartSpec` echarts arm to accept `{ option }` (a raw WGU-themed ECharts option) in addition to `{ factory, args }`; `resolveSpec` returns the option directly. (2) Add ~10 reusable ECharts factories for common new types. (3) Add a `showLine` option to Chart.js `scatter` (connected scatter). (4) Author entries — new types, engine-parity pairs, family fills, and feature-showcase entries (dataZoom/brush/drill/visualMap/annotations/large-data) — each validated by the existing `resolveSpec` gate. ECharts stays external; raw options are plain objects.

**Tech Stack:** TypeScript, Vitest, tsup. Builds on Phase A (`src/corpus/`, `src/echarts/`, the factories, `resolveSpec`). Spec: `docs/superpowers/specs/2026-05-31-viz-corpus-design.md` (§6 coverage). Current: v0.6.0, 165 tests, 43 entries.

**Repo:** `/Users/bentley/Claude/Projects/wgu-charts` (on `main`).

---

## Wave B1 — Contract extension: raw ECharts option

### Task 1: `ChartSpec` echarts arm accepts `{ option }`; `resolveSpec` handles it

**Files:** Modify `src/corpus/types.ts`, `src/corpus/resolveSpec.ts`; Test `test/corpus.test.ts`.

- [ ] **Step 1:** In `src/corpus/types.ts`, change the echarts arm of `ChartSpec` to a union of the existing factory form and a new raw-option form:
```ts
  | { engine: 'echarts'; factory: string; args: unknown[]; needsMap?: string }
  | { engine: 'echarts'; option: Record<string, unknown>; needsMap?: string };
```
- [ ] **Step 2: failing test** (append, in the `resolveSpec` describe):
```ts
it('resolves a raw echarts option spec', () => {
  const r = resolveSpec({ engine:'echarts', option:{ series:[{ type:'sunburst', data:[{name:'A',value:1}] }] } });
  expect(r.kind).toBe('echarts');
  expect((r.value as any).series[0].type).toBe('sunburst');
});
it('throws on an echarts spec with neither factory nor option', () => {
  expect(() => resolveSpec({ engine:'echarts' } as any)).toThrow(/option or factory/i);
});
```
- [ ] **Step 3:** In `resolveSpec.ts`, update the echarts branch:
```ts
// echarts
if ('option' in spec && spec.option) {
  return { kind: 'echarts', value: spec.option };
}
if ('factory' in spec && spec.factory) {
  const fn = (echartsFactories as any)[spec.factory];
  if (typeof fn !== 'function' || !spec.factory.endsWith('Option')) {
    throw new Error('corpus: unknown echarts factory "' + spec.factory + '"');
  }
  return { kind: 'echarts', value: fn(...spec.args) };
}
throw new Error('corpus: echarts spec needs an option or factory');
```
- [ ] **Step 4:** `pnpm test -- corpus` PASS; `pnpm typecheck` clean. · **Step 5: commit** `feat(corpus): ChartSpec raw echarts option escape hatch`

---

## Wave B2 — New ECharts factories (reusable common/new types)

### Task 2: Engine-parity factories — `barOption`, `lineOption`, `pieOption`, `scatterOption`

**Files:** Create `src/echarts/{bar,line,pie,scatter}.ts`; export from `src/echarts/index.ts`; Test `test/echarts-phaseb.test.ts`.

> These let the catalog show Chart.js vs ECharts for the everyday types. All return `any`, themed via the existing palette (import `wguTheme` from `../theme`), arrays cloned with `cloneArr` from `../charts/_shared`.

- [ ] **Step 1: failing test** (`test/echarts-phaseb.test.ts`)
```ts
import { describe, it, expect } from 'vitest';
import { barOption, lineOption, pieOption, scatterOption } from '../src/echarts';
describe('echarts parity factories', () => {
  it('barOption', () => { const o = barOption(['A','B'], [{label:'x',data:[1,2]}]); expect(o.series[0].type).toBe('bar'); expect(o.xAxis.data).toEqual(['A','B']); });
  it('lineOption', () => { const o = lineOption(['A','B'], [{label:'x',data:[1,2]}]); expect(o.series[0].type).toBe('line'); });
  it('pieOption', () => { const o = pieOption([{name:'A',value:3}]); expect(o.series[0].type).toBe('pie'); });
  it('scatterOption', () => { const o = scatterOption([{label:'s',points:[[1,2],[3,4]]}]); expect(o.series[0].type).toBe('scatter'); });
});
```
- [ ] **Step 2: run → FAIL**
- [ ] **Step 3: implement** (concise themed option builders):
`src/echarts/bar.ts`:
```ts
import { wguTheme } from '../theme';
import { cloneArr } from '../charts/_shared';
export interface EBarSeries { label: string; data: number[]; }
export function barOption(labels: string[], series: EBarSeries[], opts: { stacked?: boolean; horizontal?: boolean } = {}): any {
  const cat = { type: 'category', data: cloneArr(labels) };
  const val = { type: 'value' };
  return {
    tooltip: { trigger: 'axis' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: opts.horizontal ? val : cat,
    yAxis: opts.horizontal ? cat : val,
    series: (Array.isArray(series) ? series : []).map(s => ({
      name: s.label, type: 'bar', stack: opts.stacked ? 'total' : undefined,
      data: cloneArr(s.data), itemStyle: { borderRadius: opts.horizontal ? [0,6,6,0] : [6,6,0,0] }
    }))
  };
}
```
`src/echarts/line.ts`:
```ts
import { cloneArr } from '../charts/_shared';
export interface ELineSeries { label: string; data: number[]; }
export function lineOption(labels: string[], series: ELineSeries[], opts: { area?: boolean; smooth?: boolean; stacked?: boolean } = {}): any {
  return {
    tooltip: { trigger: 'axis' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: { type: 'category', boundaryGap: false, data: cloneArr(labels) },
    yAxis: { type: 'value' },
    series: (Array.isArray(series) ? series : []).map(s => ({
      name: s.label, type: 'line', smooth: opts.smooth !== false, data: cloneArr(s.data),
      stack: opts.stacked ? 'total' : undefined, areaStyle: opts.area ? {} : undefined
    }))
  };
}
```
`src/echarts/pie.ts`:
```ts
import { cloneArr } from '../charts/_shared';
export interface ESlice { name: string; value: number; }
export function pieOption(data: ESlice[], opts: { donut?: boolean } = {}): any {
  return {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 0 },
    series: [{ type: 'pie', radius: opts.donut ? ['55%','75%'] : '70%', data: cloneArr(data),
      itemStyle: { borderColor: '#fff', borderWidth: 2 }, label: { color: '#264468' } }]
  };
}
```
`src/echarts/scatter.ts`:
```ts
import { cloneArr } from '../charts/_shared';
export interface EPointSeries { label: string; points: [number, number][]; }
export function scatterOption(series: EPointSeries[]): any {
  return {
    tooltip: { trigger: 'item' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: { type: 'value' }, yAxis: { type: 'value' },
    series: (Array.isArray(series) ? series : []).map(s => ({ name: s.label, type: 'scatter', symbolSize: 12, data: cloneArr(s.points) }))
  };
}
```
Add the 4 `export * from './bar'` etc. lines to `src/echarts/index.ts`.
- [ ] **Step 4: run → PASS** · **Step 5: commit** `feat(echarts): bar/line/pie/scatter parity factories`

### Task 3: New-type factories — `sunburstOption`, `radialBarOption`, `boxplotOption`, `parallelOption`, `themeRiverOption`, `calendarHeatmapOption`

**Files:** Create `src/echarts/{sunburst,radial-bar,boxplot,parallel,theme-river,calendar}.ts`; export from index; extend `test/echarts-phaseb.test.ts`.

- [ ] **Step 1: failing tests** (append)
```ts
import { sunburstOption, radialBarOption, boxplotOption, parallelOption, themeRiverOption, calendarHeatmapOption } from '../src/echarts';
describe('echarts new-type factories', () => {
  it('sunburst', () => { const o = sunburstOption([{name:'A',children:[{name:'a1',value:2}]}]); expect(o.series[0].type).toBe('sunburst'); });
  it('radialBar', () => { const o = radialBarOption(['A','B'], [3,5]); expect(o.series[0].type).toBe('bar'); expect(o.polar).toBeTruthy(); });
  it('boxplot', () => { const o = boxplotOption(['A'], [[1,2,3,4,5]]); expect(o.series[0].type).toBe('boxplot'); });
  it('parallel', () => { const o = parallelOption(['x','y','z'], [{name:'r1',values:[1,2,3]}]); expect(o.series[0].type).toBe('parallel'); });
  it('themeRiver', () => { const o = themeRiverOption([['2024-01',5,'A']]); expect(o.series[0].type).toBe('themeRiver'); });
  it('calendarHeatmap', () => { const o = calendarHeatmapOption(2024, [['2024-01-01',5]]); expect(o.series[0].type).toBe('heatmap'); expect(o.calendar).toBeTruthy(); });
});
```
- [ ] **Step 2: run → FAIL**
- [ ] **Step 3: implement** (themed; `wguHeatRamp` from `./theme` for calendar/visualMap):
`src/echarts/sunburst.ts`:
```ts
import { wguTheme } from '../theme'; import { cloneArr } from '../charts/_shared';
export function sunburstOption(data: any[]): any {
  return { tooltip:{}, series:[{ type:'sunburst', radius:[0,'90%'], data:cloneArr(data),
    label:{ color:'#fff' }, itemStyle:{ borderColor:'#fff', borderWidth:2 } }],
    color: wguTheme.colors.sequence };
}
```
`src/echarts/radial-bar.ts`:
```ts
import { cloneArr } from '../charts/_shared';
export function radialBarOption(labels: string[], values: number[]): any {
  return { polar:{ radius:[20,'80%'] }, angleAxis:{ max: Math.max(1,...values)*1.1, startAngle:75 },
    radiusAxis:{ type:'category', data: cloneArr(labels) }, tooltip:{},
    series:[{ type:'bar', data: cloneArr(values), coordinateSystem:'polar', itemStyle:{ borderRadius:4 } }] };
}
```
`src/echarts/boxplot.ts`:
```ts
import { cloneArr } from '../charts/_shared';
// data: number[][] (raw samples per category) — uses ECharts dataset boxplot transform-free precompute.
export function boxplotOption(labels: string[], samples: number[][]): any {
  const box = (arr: number[]) => { const s=[...arr].sort((a,b)=>a-b); const q=(p:number)=>s[Math.floor((s.length-1)*p)]; return [s[0],q(0.25),q(0.5),q(0.75),s[s.length-1]]; };
  return { tooltip:{ trigger:'item' }, xAxis:{ type:'category', data: cloneArr(labels) }, yAxis:{ type:'value' },
    series:[{ type:'boxplot', data: (Array.isArray(samples)?samples:[]).map(box) }] };
}
```
`src/echarts/parallel.ts`:
```ts
import { cloneArr } from '../charts/_shared';
export interface ParallelRow { name: string; values: number[]; }
export function parallelOption(dims: string[], rows: ParallelRow[]): any {
  return { parallelAxis: (Array.isArray(dims)?dims:[]).map((d,i)=>({ dim:i, name:d })),
    tooltip:{}, series:[{ type:'parallel', data: (Array.isArray(rows)?rows:[]).map(r=>({ name:r.name, value: cloneArr(r.values) })) }] };
}
```
`src/echarts/theme-river.ts`:
```ts
import { wguTheme } from '../theme'; import { cloneArr } from '../charts/_shared';
// data: [time, value, category][]
export function themeRiverOption(data: [string,number,string][]): any {
  return { tooltip:{ trigger:'axis' }, singleAxis:{ type:'time' }, color: wguTheme.colors.sequence,
    series:[{ type:'themeRiver', data: cloneArr(data) }] };
}
```
`src/echarts/calendar.ts`:
```ts
import { wguHeatRamp } from './theme'; import { cloneArr } from '../charts/_shared';
// data: [dateStr, value][]
export function calendarHeatmapOption(year: number, data: [string,number][], opts:{max?:number}={}): any {
  const max = opts.max ?? Math.max(1, ...data.map(d=>d[1]));
  return { tooltip:{ position:'top' }, visualMap:{ min:0, max, orient:'horizontal', left:'center', bottom:0, inRange:{ color: wguHeatRamp } },
    calendar:{ range: String(year), cellSize:['auto',16] },
    series:[{ type:'heatmap', coordinateSystem:'calendar', data: cloneArr(data) }] };
}
```
Add the 6 exports to `src/echarts/index.ts`.
- [ ] **Step 4: run → PASS** · **Step 5: commit** `feat(echarts): sunburst/radialBar/boxplot/parallel/themeRiver/calendar factories`

---

## Wave B3 — Chart.js connected-scatter option

### Task 4: `scatterChart` honors `showLine`; adapter passes scatter opts

**Files:** Modify `src/charts/scatter.ts`, `adapters/vanilla/index.ts`; Test `test/scatter.test.ts` (append).

- [ ] **Step 1: failing test** (append to existing scatter test or extra-natives test)
```ts
it('scatterChart showLine connects points', () => {
  const cfg = scatterChart([{ label:'S', points:[{x:1,y:2},{x:3,y:4}] }], { showLine: true });
  expect(cfg.data.datasets[0].showLine).toBe(true);
});
```
- [ ] **Step 2: run → FAIL**
- [ ] **Step 3:** In `src/charts/scatter.ts`, add an optional 2nd param `opts?: { showLine?: boolean }`; when `opts.showLine`, set `showLine: true` + `tension: 0.3` + `borderColor: seq[i%...]` on each dataset (so it draws a connecting line). In `adapters/vanilla/index.ts` `buildConfig`, change `case 'scatter': return scatterChart(spec.data);` to `return scatterChart(spec.data, spec.opts);`.
- [ ] **Step 4: run → PASS**; full `pnpm test` green. · **Step 5: commit** `feat(charts): scatter showLine option (connected scatter)`

---

## Wave B4 — Populate: new types + engine-parity (corpus entries)

> Same entry pattern as Phase A (exemplar + `resolveSpec` gate). For raw-option entries use `spec:{ engine:'echarts', option:{...themed...} }`. For new factories use `spec:{ engine:'echarts', factory:'sunburstOption', args:[...] }`. `sampleData` = the author-friendly data (for echarts, `spec.args`/`option` is canonical — already documented).

### Task 5: New-type entries across families
**Files:** modify the relevant `src/corpus/entries/*.ts`.
Author these entries (each validated by `pnpm test -- corpus`):
- part-to-whole: `ptw-sunburst` (sunburstOption); `ptw-icicle` (raw option `series:[{type:'sunburst', sort:null, ...}]` rendered as icicle via `nodeClick` — OR a treemap with `upperLabel` for an icicle feel; if uncertain use a raw sunburst with `radius:['20%','90%']`).
- magnitude: `magnitude-radial-bar` (radialBarOption); `magnitude-bar-echarts` (barOption — engine parity); `magnitude-bar-stacked-echarts` (barOption stacked).
- change-over-time: `cot-line-echarts` (lineOption — parity); `cot-area-echarts` (lineOption area); `cot-calendar-heatmap` (calendarHeatmapOption); `cot-theme-river` (themeRiverOption / streamgraph).
- distribution: `distribution-boxplot-echarts` (boxplotOption); `distribution-violin` (raw option using echarts boxplot styled, OR note as approximation).
- correlation: `correlation-scatter-echarts` (scatterOption — parity); `correlation-parallel` (parallelOption — multivariate); `correlation-scatter-connected-echarts` (raw line+symbol option = true connected scatter).
- ranking: `ranking-bump` (raw echarts line option with category x, ordered series = bump chart).
- part-to-whole: `ptw-pie-echarts` (pieOption — parity); `ptw-donut-echarts` (pieOption donut).
Also add the Chart.js connected scatter now that it's supported: `correlation-scatter-connected` → update its spec to `{engine:'chartjs', type:'scatter', data, opts:{showLine:true}}` and restore variant `'connected'` + title; it now actually renders connected.
Commit `feat(corpus): new-type + engine-parity entries`.

### Task 6: Fill thin families (tables, deviation, ranking) + more variants
- tables: `tables-data-table` (render-model `scoreTable` with no bands = plain data table); `tables-score-table-rag` (already have banded — add a 2nd dataset variant e.g. enrollment table).
- deviation: `deviation-diverging-stacked` (groupedBar stacked with +/- ); `deviation-area-surplus-deficit` (line area with +/- values).
- ranking: `ranking-lollipop` (raw echarts: scatter symbols + line stems, OR bar with thin width — implement as raw echarts option `series:[{type:'bar', barWidth:3}, {type:'scatter', symbolSize:14}]`).
- magnitude: `magnitude-bar-grouped-echarts`; `magnitude-radar-echarts` (raw radar option).
- part-to-whole: `ptw-nested-donut` (raw echarts two-ring pie option).
Commit `feat(corpus): fill thin families + variant entries`.

---

## Wave B5 — Feature-showcase entries (the "maxed-out functionality")

### Task 7: Interactive/advanced feature-showcase entries (raw themed ECharts options)
**Files:** add to relevant `entries/*.ts`; each entry `features` includes the showcased capability and `tags:['interactive', ...]` where apt.
Author (raw `spec.option`, WGU-themed — use `#0070F0/#46B1EF/#002855/#97E152`):
- `cot-line-datazoom` (change-over-time) — line with `dataZoom:[{type:'inside'},{type:'slider'}]`. features:['dataZoom','interactive'].
- `correlation-scatter-brush` (correlation) — scatter with `brush:{}` + `toolbox:{feature:{brush:{}}}`. features:['brush','interactive'].
- `distribution-heatmap-visualmap` (distribution) — heatmap with continuous `visualMap`. features:['visualMap'].
- `cot-line-markline-markarea` (change-over-time) — line with `markLine` (target threshold) + `markArea` (highlight band). features:['annotations','threshold'].
- `part-to-whole-sunburst-drilldown` (part-to-whole) — sunburst with `nodeClick:'rootToNode'`. features:['drilldown','interactive'].
- `magnitude-bar-sort-toolbox` (magnitude) — bar with `toolbox` (dataView, saveAsImage, restore). features:['toolbox','export'].
- `cot-line-large-data` (change-over-time) — line with `large:true`, `sampling:'lttb'`, ~2000 points. features:['large-data','performance'].
- `flow-graph-categories` (flow) — graph with `categories` + legend. features:['network','interactive'].
- `change-over-time-stacked-area` (change-over-time) — stacked area (lineOption stacked+area) OR raw. features:['stacked','area'].
- `correlation-scatter-regression` (correlation) — scatter + a markLine trend (raw). features:['trendline'].
Each must `resolveSpec` cleanly (raw option → returned as-is). Run `pnpm test -- corpus`. Commit `feat(corpus): feature-showcase entries (dataZoom/brush/visualMap/annotations/drilldown/toolbox/large-data)`.

### Task 8: Round out to ~150 — remaining variants
Add the remaining variant entries to reach the target across families (horizontal/percent/multi-series variants of existing types, both engines where sensible). Enumerate as you go; the coverage test prints counts. Aim every family ≥ 6 except the inherently-small ones. Commit `feat(corpus): variant entries to reach ~150`.

---

## Wave B6 — Coverage floor + docs

### Task 9: Raise coverage floor, README, retag
**Files:** `test/corpus.test.ts`, `README.md`.
- [ ] Update the coverage test floor: `expect(corpus.length).toBeGreaterThanOrEqual(140);` and add per-family minimums where appropriate (e.g., each family ≥ 4 except tables/deviation/ranking ≥ 3). Keep the `console.log` of counts.
- [ ] `pnpm build`; confirm `dist/corpus.js` + `dist/echarts.js` rebuild and chart.js/echarts stay external.
- [ ] README corpus section: update count (~150), note the raw-option spec form, list the new types + feature-showcases now covered.
- [ ] `pnpm test` (full) + `pnpm typecheck` green.
- [ ] commit `feat(corpus): Phase B coverage floor + README (~150 entries)`.

---

## Self-Review (completed)
- **Spec coverage:** §6's full coverage table (the not-yet-built types) is now built — new factories (Tasks 2–3) + raw-option escape hatch (Task 1) + Chart.js connected scatter (Task 4) + entries (Tasks 5–8) cover sunburst/calendar/radial/parallel/themeRiver/boxplot/violin/bump/lollipop/nested-donut/icicle + the feature-showcases (§6 "maxed-out functionality" list: dataZoom/brush/visualMap/annotations/drilldown/toolbox/large-data). Coverage floor raised (Task 9 = §9).
- **Placeholder scan:** factory code is complete; entry tasks give the exemplar + the explicit enumerated entry list + the resolveSpec gate (mechanical given factories + raw options). A few entries note "raw option" implementation latitude (icicle/violin/lollipop) where ECharts has no single canonical type — that's intentional engineering latitude, not a TBD; the resolveSpec gate guarantees they render.
- **Type consistency:** `ChartSpec` echarts arm is now `{factory,args}|{option}`; `resolveSpec` handles both + throws if neither; new factory names end in `Option` (so the factory-guard accepts them); `scatterChart(series, opts?)` signature + adapter `scatter` case updated together; entry files keep exporting `CorpusEntry[]`.
