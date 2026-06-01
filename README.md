# wgu-charts

WGU-branded, dynamic Chart.js chart library. Headless config core + thin adapters.

## Install (web/React)
`pnpm add github:WGU-Strategic-Partnerships/wgu-charts#v0.7.5 chart.js`

## Use — React
`pnpm add github:WGU-Strategic-Partnerships/wgu-charts#v0.7.5 chart.js react`

```tsx
import { WguChart } from 'wgu-charts/react';
<WguChart type="bar" data={[{ label: 'MBA', count: 120 }]} onClick={(hit) => console.log(hit)} />
// pass new `data` to live-update in place. Native + render-model types work out of the box;
// community-plugin types require registering the plugin's controllers first.
```

## Use — npm / bundler
```ts
import { barChart, registerWguPlugins } from 'wgu-charts';
import { Chart } from 'chart.js/auto';
registerWguPlugins(Chart);
new Chart(canvas, barChart([{ label: 'MBA', count: 120 }]));
```

## Use — plain HTML / <script>
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
<script src="dist/wgu-charts.umd.js"></script>
<script>WGUCharts.mount('#el', { type: 'bar', data: [{ label: 'MBA', count: 120 }] });</script>
```

> **Note (Plan 1):** the `mount/update/destroy` adapter is exposed via the UMD global `WGUCharts`
> (for plain-HTML and Salesforce). npm/bundler consumers use the raw config factories directly
> (see the npm example above). A typed ESM adapter entry ships with the React adapter in Plan 3.

## Use — Salesforce
Copy `dist/wgu-charts.umd.js` into a static resource alongside `ChartJs`; load both via
`loadScript`, then call the global `WGUCharts`. (Dedicated LWC tiles: Plan 5.)

## Use — ECharts tier (comprehensive / maps)

Install ECharts separately (CDN or npm; it is a peer dep, not bundled here):

```ts
import * as echarts from 'echarts';
import {
  registerWguEchartsTheme,
  geoChoroplethOption,
  sankeyOption,
  treemapOption,
  graphOption,
  heatmapOption,
  gaugeOption,
} from 'wgu-charts/echarts';

// Register the WGU theme once at app boot
registerWguEchartsTheme(echarts);

// Create a chart
const chart = echarts.init(document.getElementById('chart'), 'wgu');
chart.setOption(geoChoroplethOption([{ name: 'Utah', value: 42 }]));
```

> **Maps:** ECharts does not bundle geo-JSON. Register a map before using `geoChoroplethOption`:
> ```ts
> echarts.registerMap('USA', usaGeoJson);
> ```

> **Salesforce / LWS:** Load ECharts from a static resource (`echarts.min.js`) via `loadScript`.
> The factory functions never import or reference the `echarts` package — they return plain option
> objects — so they are LWS-safe and pass `@lwc/babel-plugin-component` without wrappers.

## Corpus (`wgu-charts/corpus`)

A curated, WGU-branded registry of **150 entries** across 11 families (Phase A + B complete), organized by analytical intent. This is the single source the catalog app, code-export pipeline, Figma integration, and design system all read from — not a runtime dependency, but the shared schema that drives them.

The corpus covers: all native + community Chart.js types, the WGU render-models, the full ECharts tier (sunburst, treemap, sankey, graph, heatmap, gauge, geo/choropleth, radial-bar, boxplot, parallel, themeRiver, calendar), engine-parity pairs (Chart.js ↔ ECharts side-by-side), and feature-showcase entries (dataZoom, brush, visualMap, markLine/markArea annotations, drilldown, toolbox, large-data) — all filterable via `byFeature(...)`.

### Shape

```ts
// Every entry in the registry:
interface CorpusEntry {
  id: string;           // e.g. 'magnitude-bar-vertical'
  title: string;
  family: Family;       // one of 11 analytical families
  engine: Engine;       // 'chartjs' | 'echarts' | 'render-model'
  chartType: string;
  whenToUse: string;
  description: string;
  tags: string[];
  runtimes: Runtime[];  // 'LWC' | 'Next' | 'HTML'
  features: string[];
  sampleData: unknown;
  spec: ChartSpec;      // 3-arm union (see below)
}

// ChartSpec — 3-arm union, one per engine:
type ChartSpec =
  | { engine: 'chartjs';       type: string;    data: unknown; labels?: string[]; opts?: unknown }
  | { engine: 'render-model';  type: string;    data: unknown; opts?: unknown }
  // ECharts: either a named factory call OR a raw option object
  | { engine: 'echarts'; factory: string; args: unknown[]; needsMap?: string }  // named factory
  | { engine: 'echarts'; option: Record<string, unknown> };                      // raw option

// resolveSpec(spec) renders OR generates a config from the same spec:
// returns { kind: 'chartjs', value: Chart.js config }
//       | { kind: 'render-model', value: render model }
//       | { kind: 'echarts', value: ECharts option object }
```

### Usage

```ts
import { corpus, byFamily, resolveSpec } from 'wgu-charts/corpus';
const bars = byFamily('magnitude');
const resolved = resolveSpec(bars[0].spec); // { kind:'chartjs', value: <Chart.js config> }
```

Other helpers: `byEngine(eng)`, `byFeature(feat)`, `search(q)`, `FAMILIES`, `FAMILIES_ORDER`.

Phase A + B complete (150 entries). `features[]` describes each chart's type-level capabilities and is the key used by `byFeature(...)` — e.g. `byFeature('dataZoom')`, `byFeature('drilldown')`, `byFeature('brush')`.

## Catalog
`pnpm build` then open `catalog/index.html`.

## Roadmap
Render-models (funnel/gauge/KPI/choropleth): Plan 1b ✅ · Interactivity: Plan 2 ✅ · React: Plan 3 ✅ ·
Community plugins (heatmap/treemap/sankey/boxplot/error-bars/wordcloud/candlestick/geo/graph): Plan 4 ✅ ·
ECharts tier (wgu-charts/echarts subpath): Plan 6 ✅ · LWC + PartnerPath migration: Plan 5.
