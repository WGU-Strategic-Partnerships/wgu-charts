# Viz Corpus — Phase A: Infrastructure + Current-Library Population — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Build the typed, validated, queryable **visualization corpus** in `wgu-charts` and populate it with every variation the current library can render (~50 entries), exposed as `wgu-charts/corpus`.

**Architecture:** A typed registry under `src/corpus/`: `types.ts` (the `CorpusEntry`/`ChartSpec`/`Family` contract), `families.ts` (taxonomy metadata), `resolveSpec.ts` (the single-source bridge: a `ChartSpec` → renderable Chart.js config / render-model model / ECharts option, reusing the EXISTING factories — no duplicate definitions), `entries/<family>.ts` (the entries), and `index.ts` (assembled `corpus` array + query helpers). A Vitest suite enforces integrity, that every entry's spec resolves, and logs coverage vs the ~150 aspiration (no silent gaps).

**Tech Stack:** TypeScript, Vitest, tsup (new `corpus` ESM subpath entry). Reuses the existing Chart.js factories, render-model builders, and ECharts factories. Spec: `docs/superpowers/specs/2026-05-31-viz-corpus-design.md`.

**Repo:** `/Users/bentley/Claude/Projects/wgu-charts` (on `main`, v0.5.0).

## File structure
```
src/corpus/
  types.ts            # Family union, CorpusEntry, ChartSpec
  families.ts         # FAMILIES metadata (label, description, order)
  resolveSpec.ts      # resolveSpec(spec) -> { kind:'chartjs'|'render-model'|'echarts', config|model|option }
  entries/
    magnitude.ts ranking.ts deviation.ts change-over-time.ts part-to-whole.ts
    distribution.ts correlation.ts flow.ts spatial.ts kpi.ts tables.ts
  index.ts            # corpus: CorpusEntry[] + byFamily/byEngine/byFeature/search
test/corpus.test.ts   # integrity + resolveSpec + coverage report
```
Also: expose `buildConfig` from `adapters/vanilla/index.ts` (currently module-private) so `resolveSpec` reuses it (DRY); add a `corpus` entry to `tsup.config.ts` + a `./corpus` export to `package.json`.

---

### Task 1: Types — `CorpusEntry`, `ChartSpec`, `Family`

**Files:** Create `src/corpus/types.ts`; Test `test/corpus.test.ts` (start it).

- [ ] **Step 1: failing test**
```ts
// test/corpus.test.ts
import { describe, it, expect } from 'vitest';
import { FAMILIES_ORDER } from '../src/corpus/types';
describe('corpus types', () => {
  it('declares the 11 families in order', () => {
    expect(FAMILIES_ORDER).toEqual([
      'magnitude','change-over-time','part-to-whole','ranking','distribution',
      'correlation','deviation','flow','spatial','kpi','tables'
    ]);
  });
});
```
- [ ] **Step 2: run → FAIL** (`pnpm test -- corpus`)
- [ ] **Step 3: implement `src/corpus/types.ts`**
```ts
export const FAMILIES_ORDER = [
  'magnitude','change-over-time','part-to-whole','ranking','distribution',
  'correlation','deviation','flow','spatial','kpi','tables'
] as const;
export type Family = typeof FAMILIES_ORDER[number];

export type Runtime = 'LWC' | 'Next' | 'HTML';
export type Engine = 'chartjs' | 'echarts' | 'render-model';

// The single-source chart definition — stores the CALL FORM so it both renders and serializes to code.
export type ChartSpec =
  | { engine: 'chartjs'; type: string; data: unknown; labels?: string[]; opts?: unknown }
  | { engine: 'render-model'; type: string; data: unknown; opts?: unknown }
  | { engine: 'echarts'; factory: string; args: unknown[]; needsMap?: string };

export interface CorpusEntry {
  id: string;
  title: string;
  family: Family;
  secondaryFamilies?: Family[];
  engine: Engine;
  chartType: string;
  variant?: string;
  whenToUse: string;
  description: string;
  tags: string[];
  runtimes: Runtime[];
  features: string[];
  sampleData: unknown;
  spec: ChartSpec;
}
```
- [ ] **Step 4: run → PASS** · **Step 5: commit** `feat(corpus): types — CorpusEntry, ChartSpec, Family`

---

### Task 2: Families metadata — `families.ts`

**Files:** Create `src/corpus/families.ts`; extend `test/corpus.test.ts`.

- [ ] **Step 1: failing test** (append)
```ts
import { FAMILIES } from '../src/corpus/families';
import { FAMILIES_ORDER } from '../src/corpus/types';
it('has metadata for every family, in taxonomy order', () => {
  expect(FAMILIES.map(f => f.id)).toEqual([...FAMILIES_ORDER]);
  FAMILIES.forEach(f => { expect(f.label.length).toBeGreaterThan(0); expect(f.description.length).toBeGreaterThan(0); });
});
```
- [ ] **Step 2: run → FAIL**
- [ ] **Step 3: implement `src/corpus/families.ts`**
```ts
import { Family, FAMILIES_ORDER } from './types';
export interface FamilyMeta { id: Family; label: string; description: string; }
export const FAMILIES: FamilyMeta[] = [
  { id: 'magnitude', label: 'Magnitude', description: 'Compare a value across categories (size/count).' },
  { id: 'change-over-time', label: 'Change over time', description: 'Show how values move over a time series.' },
  { id: 'part-to-whole', label: 'Part-to-whole', description: 'Break a total into its component parts.' },
  { id: 'ranking', label: 'Ranking', description: 'Order matters more than absolute value.' },
  { id: 'distribution', label: 'Distribution', description: 'Show values and how often they occur.' },
  { id: 'correlation', label: 'Correlation', description: 'Relationship between two or more variables.' },
  { id: 'deviation', label: 'Deviation', description: 'Variation +/- from a reference (zero, target, average).' },
  { id: 'flow', label: 'Flow', description: 'How quantities move between states/nodes.' },
  { id: 'spatial', label: 'Spatial / Geo', description: 'A metric across geography.' },
  { id: 'kpi', label: 'KPI & status', description: 'A single value against a target or threshold.' },
  { id: 'tables', label: 'Tables', description: 'Tabular values, optionally banded/colored.' }
];
// keep FAMILIES in taxonomy order
export const _orderCheck = FAMILIES.map(f => f.id).join() === [...FAMILIES_ORDER].join();
```
- [ ] **Step 4: run → PASS** · **Step 5: commit** `feat(corpus): family taxonomy metadata`

---

### Task 3: Spec resolver — `resolveSpec.ts` (single-source bridge)

**Files:** Modify `adapters/vanilla/index.ts` (export `buildConfig`); Create `src/corpus/resolveSpec.ts`; extend test.

- [ ] **Step 1:** In `adapters/vanilla/index.ts`, change `function buildConfig(` to `export function buildConfig(` (no behavior change — just expose it).
- [ ] **Step 2: failing test** (append)
```ts
import { resolveSpec } from '../src/corpus/resolveSpec';
describe('resolveSpec', () => {
  it('resolves a chartjs bar spec to a Chart.js config', () => {
    const r = resolveSpec({ engine:'chartjs', type:'bar', data:[{label:'A',count:5}] });
    expect(r.kind).toBe('chartjs'); expect((r.value as any).type).toBe('bar');
  });
  it('resolves a render-model gauge spec', () => {
    const r = resolveSpec({ engine:'render-model', type:'gauge', data:{ label:'x', percent:50 } });
    expect(r.kind).toBe('render-model'); expect(r.value).toBeTruthy();
  });
  it('resolves an echarts factory spec to an option', () => {
    const r = resolveSpec({ engine:'echarts', factory:'sankeyOption', args:[[{name:'A'},{name:'B'}],[{source:'A',target:'B',value:5}]] });
    expect(r.kind).toBe('echarts'); expect((r.value as any).series[0].type).toBe('sankey');
  });
  it('throws on an unknown echarts factory', () => {
    expect(() => resolveSpec({ engine:'echarts', factory:'nopeOption', args:[] })).toThrow(/unknown/i);
  });
});
```
- [ ] **Step 3: implement `src/corpus/resolveSpec.ts`**
```ts
import { buildConfig } from '../../adapters/vanilla/index';
import { funnelModel, renderFunnel } from '../render/funnel';
import { gaugeModel, renderGauge } from '../render/gauge';
import { kpiModel, renderKpi } from '../render/kpi';
import { choroplethModel, renderChoropleth } from '../render/choropleth';
import { scoreTableModel, renderScoreTable } from '../render/score-table';
import * as echartsFactories from '../echarts';
import type { ChartSpec } from './types';

const RM: Record<string, { build: (d: any, o?: any) => any; render: (m: any) => string }> = {
  funnel: { build: funnelModel, render: renderFunnel },
  gauge: { build: gaugeModel, render: renderGauge },
  kpi: { build: kpiModel, render: renderKpi },
  choropleth: { build: choroplethModel, render: renderChoropleth },
  scoreTable: { build: scoreTableModel, render: renderScoreTable }
};

export type Resolved =
  | { kind: 'chartjs'; value: any }
  | { kind: 'render-model'; value: any; html: string }
  | { kind: 'echarts'; value: any };

// Bridge a ChartSpec to a renderable artifact, reusing the SAME factories the adapters use.
export function resolveSpec(spec: ChartSpec): Resolved {
  if (spec.engine === 'chartjs') {
    return { kind: 'chartjs', value: buildConfig({ type: spec.type as any, data: spec.data, labels: spec.labels, opts: spec.opts }) };
  }
  if (spec.engine === 'render-model') {
    const rm = RM[spec.type];
    if (!rm) throw new Error('corpus: unknown render-model type "' + spec.type + '"');
    const model = rm.build(spec.data, spec.opts);
    return { kind: 'render-model', value: model, html: rm.render(model) };
  }
  // echarts
  const fn = (echartsFactories as any)[spec.factory];
  if (typeof fn !== 'function') throw new Error('corpus: unknown echarts factory "' + spec.factory + '"');
  return { kind: 'echarts', value: fn(...spec.args) };
}
```
- [ ] **Step 4: run → PASS** (4) · **Step 5: commit** `feat(corpus): resolveSpec bridge (reuses existing factories)`

---

### Task 4: Registry + query helpers — `index.ts`

**Files:** Create `src/corpus/index.ts`; extend test.

- [ ] **Step 1: failing test** (append)
```ts
import { corpus, byFamily, byEngine, byFeature, search } from '../src/corpus';
describe('corpus registry', () => {
  it('exposes an array of entries with unique ids', () => {
    expect(Array.isArray(corpus)).toBe(true);
    const ids = corpus.map(e => e.id); expect(new Set(ids).size).toBe(ids.length);
  });
  it('byFamily / byEngine / byFeature filter', () => {
    expect(byFamily('magnitude').every(e => e.family==='magnitude')).toBe(true);
    expect(byEngine('echarts').every(e => e.engine==='echarts')).toBe(true);
  });
  it('search matches title/tags case-insensitively', () => {
    expect(search('bar').length).toBeGreaterThan(0);
  });
  it('every entry resolves without throwing', () => {
    corpus.forEach(e => expect(() => resolveSpec(e.spec)).not.toThrow());
  });
  it('every entry.engine matches entry.spec.engine', () => {
    corpus.forEach(e => expect(e.engine).toBe(e.spec.engine));
  });
});
```
- [ ] **Step 2: run → FAIL**
- [ ] **Step 3: implement `src/corpus/index.ts`** (entries imported from `entries/*`, assembled; helpers). Start with the family entry files EXISTING but possibly empty arrays so the registry assembles; they get populated in Tasks 5–10.
```ts
import type { CorpusEntry, Family } from './types';
import { magnitude } from './entries/magnitude';
import { changeOverTime } from './entries/change-over-time';
import { partToWhole } from './entries/part-to-whole';
import { ranking } from './entries/ranking';
import { distribution } from './entries/distribution';
import { correlation } from './entries/correlation';
import { deviation } from './entries/deviation';
import { flow } from './entries/flow';
import { spatial } from './entries/spatial';
import { kpi } from './entries/kpi';
import { tables } from './entries/tables';

export * from './types';
export * from './families';
export { resolveSpec } from './resolveSpec';

export const corpus: CorpusEntry[] = [
  ...magnitude, ...changeOverTime, ...partToWhole, ...ranking, ...distribution,
  ...correlation, ...deviation, ...flow, ...spatial, ...kpi, ...tables
];

export const byFamily = (f: Family) => corpus.filter(e => e.family === f);
export const byEngine = (eng: CorpusEntry['engine']) => corpus.filter(e => e.engine === eng);
export const byFeature = (feat: string) => corpus.filter(e => e.features.includes(feat));
export function search(q: string): CorpusEntry[] {
  const s = q.toLowerCase();
  return corpus.filter(e =>
    e.title.toLowerCase().includes(s) || e.chartType.toLowerCase().includes(s) ||
    e.tags.some(t => t.toLowerCase().includes(s)));
}
```
- [ ] **Step 4:** Create the 11 `entries/<family>.ts` files each exporting an empty typed array initially, e.g. `import type { CorpusEntry } from '../types'; export const magnitude: CorpusEntry[] = [];` (each gets populated next). Run → PASS. · **Step 5: commit** `feat(corpus): registry assembly + query helpers (empty entry files)`

---

### Tasks 5–10: Populate entries (current-library coverage)

**Pattern (apply to every entry):** an entry references an EXISTING renderable spec. Use this exemplar shape; author each listed entry the same way; the `resolveSpec` test (Task 4) is the correctness gate — if an entry doesn't resolve, the suite fails.

**Exemplar entry (magnitude / horizontal bar):**
```ts
{
  id: 'magnitude-bar-horizontal',
  title: 'Horizontal bar',
  family: 'magnitude',
  engine: 'chartjs',
  chartType: 'bar',
  variant: 'horizontal',
  whenToUse: 'Compare a single value across a handful of categories; horizontal fits long labels.',
  description: 'Bars from a common baseline; length encodes value.',
  tags: ['categorical','single-series'],
  runtimes: ['LWC','Next','HTML'],
  features: ['value-labels'],
  sampleData: [{ label:'MBA', count:120 }, { label:'BSN', count:90 }, { label:'IT', count:70 }],
  spec: { engine:'chartjs', type:'bar', data:[{ label:'MBA', count:120 }, { label:'BSN', count:90 }, { label:'IT', count:70 }] }
}
```
> `sampleData` and `spec.data` are the same values (single source). For `chartjs`/`render-model` the `spec.type` must be one the adapter `buildConfig` switch handles; for `echarts` the `spec.factory` must be an exported factory.

**Available renderable building blocks** (only use these — Phase B adds more):
- chartjs `type`: `bar`, `groupedBar` (grouped/stacked via `opts:{stacked:true}`), `line` (opts `area`/`stepped`), `combo`, `doughnut`, `pie`, `polarArea`, `radar`, `scatter`, `bubble`, `matrix`, `treemap`, `sankey`, `boxplot`, `barWithErrorBars`, `wordCloud`, `candlestick`, `bubbleMap`, `forceDirectedGraph`.
- render-model `type`: `funnel`, `gauge` (variant ring or `data.variant:'half'`), `kpi`, `choropleth`, `scoreTable`.
- echarts `factory`: `sankeyOption`, `treemapOption`, `graphOption`, `heatmapOption`, `gaugeOption`, `geoChoroplethOption` (needsMap:'USA').

- [ ] **Task 5 — `entries/magnitude.ts` + `ranking.ts` + `deviation.ts`** (bar-family). Author entries (each resolving via existing specs):
  - magnitude: horizontal bar; vertical bar (`opts:{orientation:'vertical'}`); grouped bar (`groupedBar`); stacked bar (`groupedBar` `opts:{stacked:true}`); lead-color bar (`opts:{leadColor:'#97E152'}`); radar (as multi-axis magnitude).
  - ranking: ordered horizontal bar (sorted sampleData) tagged `ranking`; lead/medal bar (top item lead-colored).
  - deviation: diverging bar (`bar` with +/- counts in sampleData) — note in `description` that values cross zero.
  Each `entries/*.ts` exports its typed array (replace the empty stub). Run full `pnpm test` → all entries resolve. Commit `feat(corpus): populate magnitude/ranking/deviation`.
- [ ] **Task 6 — `entries/change-over-time.ts`**: line (single); multi-series line; area (`opts:{area:true}`); stepped line (`opts:{stepped:true}`); dual-axis combo (`combo`); candlestick (`candlestick`). Commit `feat(corpus): populate change-over-time`.
- [ ] **Task 7 — `entries/part-to-whole.ts`**: doughnut; pie; thin-ring doughnut (`opts:{cutout:'88%'}`); polar area; treemap (chartjs); treemap (echarts `treemapOption`); stacked-100% via `groupedBar` (note normalized data in sampleData). Commit `feat(corpus): populate part-to-whole`.
- [ ] **Task 8 — `entries/distribution.ts` + `correlation.ts`**: distribution: box plot; bar-with-error-bars; heatmap (chartjs `matrix`); heatmap (echarts `heatmapOption`). correlation: scatter; bubble; connected-scatter (scatter sampleData noting line); matrix-heatmap cross-listed. Commit `feat(corpus): populate distribution/correlation`.
- [ ] **Task 9 — `entries/flow.ts` + `spatial.ts`**: flow: funnel (render-model); sankey (chartjs); sankey (echarts); force-graph (chartjs `forceDirectedGraph`); force-graph (echarts `graphOption`); word cloud (as a flow/keyword extra or move to part-to-whole — your call, tag it). spatial: US choropleth (render-model); US choropleth (echarts `geoChoroplethOption`, needsMap 'USA'); geo bubble map (chartjs `bubbleMap`). Commit `feat(corpus): populate flow/spatial`.
- [ ] **Task 10 — `entries/kpi.ts` + `tables.ts`**: kpi: gauge ring (render-model); gauge half-threshold (`data.variant:'half'`); gauge (echarts `gaugeOption`); KPI tile (render-model `kpi`). tables: score table (render-model `scoreTable`, banded). Commit `feat(corpus): populate kpi/tables`.

After each population task: `pnpm test` (the resolveSpec gate + integrity) green; `pnpm typecheck` clean.

---

### Task 11: Subpath export + coverage report + README

**Files:** `tsup.config.ts`, `package.json`, `test/corpus.test.ts`, `README.md`.

- [ ] **Step 1:** `tsup.config.ts` — add entry `{ entry: { 'corpus': 'src/corpus/index.ts' }, format:['esm'], dts:{entry:'src/corpus/index.ts'}, external:['chart.js','echarts'], outDir:'dist' }`. `package.json` exports — add `"./corpus": { "types":"./dist/corpus.d.ts", "import":"./dist/corpus.js" }`.
- [ ] **Step 2: coverage report test** (append) — logs counts per family and asserts the floor, NO silent gaps:
```ts
import { FAMILIES_ORDER } from '../src/corpus/types';
it('reports coverage per family (logs gap vs ~150 aspiration)', () => {
  const counts = Object.fromEntries(FAMILIES_ORDER.map(f => [f, byFamily(f as any).length]));
  // eslint-disable-next-line no-console
  console.log('CORPUS COVERAGE', counts, 'total', corpus.length);
  FAMILIES_ORDER.forEach(f => expect(counts[f]).toBeGreaterThan(0)); // every family non-empty
  expect(corpus.length).toBeGreaterThanOrEqual(40); // Phase A floor; Phase B grows toward ~150
});
```
- [ ] **Step 3:** `pnpm build`; confirm `dist/corpus.js` + `dist/corpus.d.ts` emit and chart.js/echarts are external (corpus must not bundle them; `resolveSpec` only builds config/option objects). `pnpm test` (full suite incl. corpus) + `pnpm typecheck` green.
- [ ] **Step 4:** README — add a "## Corpus (`wgu-charts/corpus`)" section: what it is, the `CorpusEntry`/`ChartSpec` shape, `resolveSpec`, query helpers, and a note that Phase B expands toward ~150 with new chart types. Commit `feat(corpus): subpath export + coverage report + README`.

---

## Self-Review (completed)
- **Spec coverage:** taxonomy (Task 2 = §3), schema (Task 1 = §4), single-source/resolveSpec (Task 3 = §5), registry+helpers+consumption hooks (Task 4 = §8), population per family (Tasks 5–10 = §6 current-library subset), home+subpath (Task 11 = §7), validation+coverage (Tasks 4/11 = §9). §6's full ~150 is explicitly Phase B (flagged in goal + README + coverage test) — not a silent gap.
- **Placeholder scan:** none — infra tasks have full code; population tasks give the exemplar + the explicit enumerated entry list per family + the resolveSpec gate as the correctness check (entries are mechanical given the exemplar + existing factories).
- **Type consistency:** `CorpusEntry`/`ChartSpec`/`Family` defined once (Task 1) and used everywhere; `resolveSpec` returns `{kind,value,(html)}`; `buildConfig` exported from the adapter and reused; entry files all export `CorpusEntry[]`; echarts factory names match the real exports (`sankeyOption` etc.).
