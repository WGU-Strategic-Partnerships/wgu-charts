# WGU Charts — Charting Tooling Decision (ADR)

**Status:** Proposed · **Date:** 2026-05-31 · **Owner:** Bentley Folkman (Strategic Partnerships)

## Context

We are building a **comprehensive, WGU-branded chart catalog** that the design team can pull
from when designing, and that engineering can implement in **four runtimes**:

1. **Salesforce LWC** (PartnerPath dashboard, MBR dashboards)
2. **Next.js / React** (WGU.tools apps, MBR Builder)
3. **Plain HTML** (branded one-pagers, reports)
4. **Vanilla JS** (drop-in embeds)

We started with **Chart.js** (shipped as the `wgu-charts` library, v0.4.0 — ~40 chart
types/variants, render-models, MBR parity, community-plugin tier, interactivity, React adapter).
The question: **what other chart tools should the catalog draw on, given the four-runtime goal?**

## The binding constraint: Salesforce Lightning Web Security (LWS)

In Next/HTML/vanilla, almost any charting library works. The real gate is **LWC under LWS**,
which sandboxes JavaScript and serves objects as **sealed proxies** (the exact cause of the
Chart.js blank-chart bug we fixed via `cloneArr`). This eliminates whole categories:

- **Canvas-based libraries survive LWS best** — they draw to a `<canvas>` with minimal DOM/global
  manipulation. Chart.js works for this reason (proven in the `Bentley`/`trentdev` sandboxes).
- **Heavy SVG/DOM libraries, anything using `eval`/`Function`/web-workers, or anything that loads a
  remote script** are fragile or outright blocked under LWS.
- **React-only libraries cannot run in LWC or plain HTML at all.**

**Therefore "usable in LWC + Next + HTML" is a much smaller set than "good charting library,"** and
*any* new engine must pass the same LWS gate test Chart.js did before it ships to Salesforce.

## Evaluation criteria

1. **Runtime coverage** — must work in all four (LWC the hard one).
2. **LWS survivability** — canvas > SVG > DOM-heavy > remote-loaded.
3. **License** — must be free for WGU commercial/institutional use (rules out paid).
4. **Comprehensiveness** — breadth of chart types, especially the ones Chart.js needs plugins for.
5. **Bundle size / performance**, **accessibility**, **maintenance/longevity**.

## Candidates evaluated

| Tool | Render | License | LWC (LWS) | Next/React | HTML/vanilla | Notes |
|---|---|---|---|---|---|---|
| **Chart.js** (current) | Canvas | MIT | ✅ proven | ✅ | ✅ | Light, branded, broad. Exotic types need plugins. |
| **Apache ECharts** | Canvas (+SVG) | Apache-2.0 | ⚠️ likely (canvas) — gate-test pending | ✅ `echarts-for-react` | ✅ | Most comprehensive free engine; native maps/sankey/graph/treemap/candlestick/etc. |
| **D3.js** | SVG | ISC | ⚠️ fragile under LWS | ✅ | ✅ | An *engine*, not a chart library; ultimate flexibility, steep, LWS-risky. Escape hatch only. |
| **Recharts** | SVG | MIT | ❌ React-only | ✅ | ❌ | Next-only (MBR Builder uses it). Fails cross-runtime test. |
| **Nivo / Visx** | SVG/Canvas | MIT | ❌ React-only | ✅ | ❌ | Next-only. |
| **ApexCharts** | SVG | MIT | ⚠️ mixed under LWS | ✅ | ✅ | SVG/DOM-heavy → LWS risk; nice defaults. |
| **Highcharts / amCharts** | SVG | **Commercial** | ✅-ish | ✅ | ✅ | Comprehensive + great a11y, but **paid license** → procurement blocker. |
| **Plotly.js** | SVG/WebGL | MIT | ❌ heavy/WebGL | ✅ | ✅ | Too heavy/WebGL for LWS. |
| **Google Charts** | SVG | free-but-ToS | ❌ remote-load | ✅ | ✅ | Must load from Google's servers → LWS + FERPA/privacy no-go. |

## Decision

**Adopt a two-engine strategy, both canvas-based, both behind the single `wgu-charts` branded theme:**

1. **Chart.js — the default/core engine.** Bread-and-butter types (bar, line, area, pie/doughnut,
   combo, scatter, bubble, radar, polar, gauge/funnel/kpi render-models, MBR components). Lighter,
   already branded and LWS-proven. Keep it as the primary.
2. **Apache ECharts — the comprehensive/exotic/geo tier.** Use for what Chart.js does poorly or only
   via fragile plugins: **real geographic maps (GeoJSON choropleth/bubble)**, sankey, graph/force,
   treemap/sunburst, candlestick, large-scale/data-dense, parallel coordinates. MIT-compatible
   (Apache-2.0), canvas renderer (LWS-viable), works in React/HTML/vanilla.
3. **D3 — escape hatch only**, for bespoke one-off visuals no library covers. Not part of the
   standard catalog; LWS-fragile.

**Explicitly NOT adopted** (for the cross-runtime goal): Recharts/Nivo/Visx (React-only — fine for
Next-only work but can't serve LWC/HTML), Highcharts/amCharts (license cost), Plotly (LWS-heavy),
Google Charts (remote-load + privacy).

### Why ECharts over the others
It is the **only free, canvas-capable, multi-runtime engine that is genuinely comprehensive** — it
natively covers the entire "community-plugin tier" we hand-assembled for Chart.js (and adds proper
maps) without juggling nine separate plugin dependencies. One extra engine closes ~all remaining gaps.

## Open validation (gating)

- **ECharts LWS gate test (REQUIRED before Salesforce adoption):** deploy a minimal ECharts canvas
  chart to a sandbox LWC (`Bentley` or `trentdev`) and confirm it renders under LWS — exactly as we
  proved Chart.js in milestone M2. Until this passes, ECharts is **approved for Next/HTML/vanilla
  only**; Salesforce stays Chart.js-only. (No silent gaps — the catalog labels each card by
  verified runtime.)
- **Bundle strategy for ECharts** — use modular/tree-shaken builds (import only used charts), not the
  ~1MB full bundle, especially for the LWC static resource.

## Catalog implications (how the design team consumes this)

The catalog stays a single branded gallery, but each card carries:
- the **chart type + use-case** ("when to use this"),
- the **engine** that renders it (Chart.js or ECharts),
- a **per-runtime "verified in" badge** (LWC / Next / HTML) — since LWS is the real gate, this badge
  is the most useful thing on the card for both designers and engineers,
- the **branded snippet** to implement it.

`wgu-charts` remains the one branded layer: ECharts gets a WGU ECharts theme (same color tokens),
wrapped so consumers call one consistent API and the design team sees one catalog, not two libraries.

## Proposed roadmap

- **Spike:** ECharts LWS gate test in a sandbox (gating).
- **Plan 6:** WGU ECharts theme + an `echarts` tier in `wgu-charts` (start with the highest-value
  additions: US map choropleth/bubble — replacing the hand-rolled SVG — plus sankey/treemap/graph).
- **Catalog v2:** reorganize as a design reference — by type + use-case, with engine + runtime badges.
- **(Later) Plan 5:** wire the catalog into real surfaces (MBR Builder, PartnerPath).
