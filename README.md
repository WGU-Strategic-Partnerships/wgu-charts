# wgu-charts

WGU-branded, dynamic Chart.js chart library. Headless config core + thin adapters.

## Install (web/React)
`pnpm add github:WGU-Strategic-Partnerships/wgu-charts#v0.5.0 chart.js`

## Use — React
`pnpm add github:WGU-Strategic-Partnerships/wgu-charts#v0.5.0 chart.js react`

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

## Catalog
`pnpm build` then open `catalog/index.html`.

## Roadmap
Render-models (funnel/gauge/KPI/choropleth): Plan 1b ✅ · Interactivity: Plan 2 ✅ · React: Plan 3 ✅ ·
Community plugins (heatmap/treemap/sankey/boxplot/error-bars/wordcloud/candlestick/geo/graph): Plan 4 ✅ ·
ECharts tier (wgu-charts/echarts subpath): Plan 6 ✅ · LWC + PartnerPath migration: Plan 5.
