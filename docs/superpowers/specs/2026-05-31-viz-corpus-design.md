# WGU Charts — Visualization Corpus (Design Spec)

**Status:** Approved (design). Spec under review.
**Date:** 2026-05-31 · **Owner:** Bentley Folkman (Strategic Partnerships)
**Subsystem:** #1 of the WGU Viz Catalog program (Corpus → Web app → Code export → Figma export → Design-system integration).

## 1. Purpose

A structured, WGU-branded **corpus** of data-visualization variations spanning **both engines**
(Chart.js + Apache ECharts, plus the SVG render-models), organized so a design team can see the full
scope of what's possible — and so every downstream subsystem (the catalog web app, code export, Figma
export, the design-system plugin) reads from **one canonical source**.

This subsystem produces **data + definitions only** — no app UI (that is subsystem #2). It extends the
existing `wgu-charts` library (v0.5.0) and lives in its repo.

## 2. Scope decision: curated-comprehensive by analytical intent

"All possible variations" taken literally is infinite. Instead the corpus is **curated-comprehensive,
organized by analytical intent**, grounded in established practice:
- **FT Visual Vocabulary** — chart families by intent. ([github.com/Financial-Times/chart-doctor](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary))
- **The Data Visualisation Catalogue** (Severino Ribecca) + **data-to-viz.com** — per-entry richness
  (description, anatomy, when-to-use, examples, tools). ([datavizcatalogue.com](https://datavizcatalogue.com/), [data-to-viz.com](https://www.data-to-viz.com/))
- **Chart.js samples** + **ECharts examples** galleries — source of advanced "feature-showcase" ideas.

**Target: ~150 curated entries.** Comprehensive but principled — NOT exhaustive combinatorics.

## 3. Taxonomy (top-level structure)

The **9 FT Visual Vocabulary families** + **2 practical buckets** for WGU's dashboard reality:

`magnitude · change-over-time · part-to-whole · ranking · distribution · correlation · deviation ·
flow · spatial` **+ `kpi` (gauges / KPI tiles) + `tables` (score / data tables)**.

Every existing and planned chart maps into exactly one primary family (entries may carry secondary
family tags).

## 4. Entry schema (the contract)

Each corpus entry is one typed record. This schema is the single most important artifact — the web app,
code export, Figma export, and design-system plugin all read it. Defined in TypeScript; serializable to
JSON for non-TS consumers.

```ts
export interface CorpusEntry {
  id: string;                              // stable slug, e.g. 'magnitude-bar-horizontal-chartjs'
  title: string;                           // 'Horizontal bar'
  family: Family;                          // 'magnitude' | 'change-over-time' | ... (11 families)
  secondaryFamilies?: Family[];
  engine: 'chartjs' | 'echarts' | 'render-model';
  chartType: string;                       // 'bar' | 'sankey' | 'gauge' | ...
  variant?: string;                        // 'horizontal' | 'stacked' | 'log-scale' | 'half' | ...
  whenToUse: string;                       // 1-2 sentences (FT / DataVizCatalogue style)
  description: string;                     // what it is / anatomy
  tags: string[];                          // 'multi-series','time','interactive','map','percent',...
  runtimes: ('LWC' | 'Next' | 'HTML')[];   // verified-in badges
  features: string[];                      // 'dataZoom','drilldown','brush','visualMap','annotations',
                                           //   'live-update','log-scale','dual-axis',... ("maxed-out")
  sampleData: unknown;                     // representative data the preview + code use
  spec: ChartSpec;                         // THE single source — see §5
}

// Capture the CALL form (engine + factory/type + args) so code export emits a readable snippet,
// not just a frozen resolved object.
export type ChartSpec =
  | { engine: 'chartjs';      type: string;    data: unknown; labels?: string[]; opts?: unknown }   // → WGUCharts.mount
  | { engine: 'render-model'; type: string;    data: unknown; opts?: unknown }                       // → WGUCharts.mount (div)
  | { engine: 'echarts';      factory: string; args: unknown[]; needsMap?: string };                 // → echarts.init(el,'wgu').setOption(<factory>(...args))
```

`Family` is a string-literal union of the 11 families. The registry is `CorpusEntry[]` with helpers
(`byFamily`, `byEngine`, `byFeature`, `search`).

## 5. Single-source principle (render == code)

Each entry's `spec` is the ONE definition that both:
1. **renders the live preview** — passed to `WGUCharts.mount(...)` (chartjs / render-model) or
   `echarts.init(el,'wgu').setOption(<factory>(...args))` (echarts), and
2. **generates the exported code** — serialized from the same `spec.type`/`factory` + `args`/`data`.

There is never a second copy of the chart definition that can drift. This is the discipline that has
kept the existing catalog honest, generalized to the whole corpus.

## 6. Coverage plan (~150 entries)

Per family: **core types → meaningful variants → feature-showcase entries**, across both engines where
both render the type well (enabling side-by-side engine comparison). Engine policy per the tooling
decision doc (Chart.js = common/light; ECharts = exotic/maps/interactive; both for overlap).

| Family | Representative entries |
|---|---|
| magnitude | bar h/v, grouped, stacked, stacked-100%, lollipop, radial bar, bullet |
| change-over-time | line, multi-series, area, stacked area, stepped, dual-axis combo, candlestick/OHLC, calendar heatmap |
| part-to-whole | pie, doughnut, thin-ring, nested doughnut, treemap, sunburst, icicle, stacked-100% bar |
| ranking | ordered bar, lollipop, bump, ordered column |
| distribution | histogram, box plot, violin, density, beeswarm, error bars |
| correlation | scatter, bubble, connected scatter, scatter matrix, heatmap (matrix) |
| deviation | diverging bar, +/- column, surplus/deficit area |
| flow | sankey, chord, force-directed graph, funnel |
| spatial | US choropleth (render-model SVG + ECharts GeoJSON), bubble map |
| kpi | gauge (ring + half-threshold), KPI tile, progress |
| tables | score table (banded), data table |

**Feature-showcase entries** (the "max out functionality" requirement) demonstrate advanced capability,
each tagged in `features[]`: `dataZoom`/zoom-pan, brush-select, **click-drill-down**, cross-filter,
live-streaming update, legend toggle, rich tooltips, `visualMap` continuous legends,
threshold/annotation lines (`markLine`/`markArea`), log scale, animated transitions, gradient fills,
small multiples. Designers can filter to e.g. "everything interactive."

## 7. Home & structure

Lives in `wgu-charts/src/corpus/`:
- `families.ts` — the `Family` union + display metadata (label, description, order).
- `types.ts` — `CorpusEntry`, `ChartSpec`.
- `entries/<family>.ts` — entries grouped by family (keeps files focused).
- `index.ts` — assembled `corpus: CorpusEntry[]` + query helpers; re-exported from a new package
  subpath `wgu-charts/corpus`.
A build/validation step asserts every entry's `spec` is renderable and every `id` is unique.

## 8. How downstream subsystems consume it

- **Web app (#2):** imports `wgu-charts/corpus` → renders cards/detail/live previews from each `spec`;
  filters by family / engine / tags / features / runtime.
- **Code export (#3):** serializes the `spec` call-form + `sampleData` → readable snippet per target
  (vanilla `<script>`, React `<WguChart>`, ECharts `setOption`).
- **Figma export (#4):** reads entry preview/spec → SVG/layers (own design, later).
- **Design-system plugin (#5):** the registry becomes the canonical list the plugin enforces.
- **Bonus:** the existing standalone catalog + compare page can regenerate *from* the corpus → one
  source of truth.

## 9. Testing & validation

- Vitest: registry integrity (unique ids; every entry has required fields; `family` ∈ taxonomy;
  `engine`/`spec.engine` agree); each `chartjs`/`render-model` `spec` builds a valid config via the
  existing factories; each `echarts` `factory` name resolves to an exported factory and returns an
  `option` with the expected `series[0].type`.
- A coverage report test: every family has ≥ N entries; counts logged (no silent gaps).

## 10. Out of scope (later subsystems)

Web app UI (#2), code-export serializer implementation (#3 — schema supports it here), Figma export
(#4), design-system plugin integration (#5). This spec delivers the **data layer + validation** only.

## 11. Self-review notes

- No placeholders; coverage table is representative (the full ~150 enumeration is produced during the
  build, validated by the coverage test) — this is intentional, not a TBD.
- `ChartSpec` is the one possible ambiguity (render vs code) — resolved in §5: it stores the *call form*
  so it serves both, and `engine` is duplicated on the entry + spec with a test asserting they agree.
- Scope is one coherent deliverable (a typed, validated registry) — appropriately sized for one plan.
