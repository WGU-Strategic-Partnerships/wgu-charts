import {
  barChart, lineChart, doughnutChart, pieChart, comboChart,
  polarChart, radarChart, scatterChart, bubbleChart, groupedBarChart,
  registerWguPlugins
} from '../../src/index';
import { isRenderModelType, ensureStyle } from '../../src/render/runtime';
import { funnelModel, renderFunnel, funnelCss } from '../../src/render/funnel';
import { gaugeModel, renderGauge, gaugeCss } from '../../src/render/gauge';
import { kpiModel, renderKpi, kpiCss } from '../../src/render/kpi';
import { choroplethModel, renderChoropleth, choroplethCss } from '../../src/render/choropleth';

export type ChartType =
  | 'bar' | 'line' | 'doughnut' | 'pie' | 'combo'
  | 'polarArea' | 'radar' | 'scatter' | 'bubble' | 'groupedBar'
  | 'funnel' | 'gauge' | 'kpi' | 'choropleth';

export interface MountSpec { type: ChartType; data: any; labels?: string[]; opts?: any; }
export interface ChartHandle { chart: any; update: (data: any, labels?: string[]) => void; destroy: () => void; }

const RENDER_MODELS: Record<string, { build: (d: any, o?: any) => any; render: (m: any) => string; css: string; styleId: string }> = {
  funnel:     { build: funnelModel,     render: renderFunnel,     css: funnelCss,     styleId: 'wgu-funnel' },
  gauge:      { build: gaugeModel,      render: renderGauge,      css: gaugeCss,      styleId: 'wgu-gauge' },
  kpi:        { build: kpiModel,        render: renderKpi,        css: kpiCss,        styleId: 'wgu-kpi' },
  choropleth: { build: choroplethModel, render: renderChoropleth, css: choroplethCss, styleId: 'wgu-choropleth' }
};

function buildConfig(spec: MountSpec): any {
  switch (spec.type) {
    case 'bar': return barChart(spec.data, spec.opts);
    case 'line': return lineChart(spec.labels || [], spec.data, spec.opts);
    case 'doughnut': return doughnutChart(spec.data, spec.opts?.cutout);
    case 'pie': return pieChart(spec.data);
    case 'combo': return comboChart(spec.labels || [], spec.data.bar, spec.data.line);
    case 'polarArea': return polarChart(spec.data);
    case 'radar': return radarChart(spec.labels || [], spec.data);
    case 'scatter': return scatterChart(spec.data);
    case 'bubble': return bubbleChart(spec.data);
    case 'groupedBar': return groupedBarChart(spec.labels || [], spec.data, spec.opts);
    default: throw new Error('WGUCharts: unknown chart type "' + (spec as any).type + '"');
  }
}

export function createWGUCharts(Chart: any) {
  registerWguPlugins(Chart);
  return {
    mount(target: string | HTMLElement, spec: MountSpec): ChartHandle {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el === null) throw new Error('WGUCharts: target "' + String(target) + '" not found in document');

      if (isRenderModelType(spec.type)) {
        const rm = RENDER_MODELS[spec.type];
        const doc = (el as HTMLElement).ownerDocument || document;
        ensureStyle(doc, rm.styleId, rm.css);
        const draw = (data: any, opts: any) => { (el as HTMLElement).innerHTML = rm.render(rm.build(data, opts)); };
        draw(spec.data, spec.opts);
        return {
          chart: null,
          update(data: any) { draw(data, spec.opts); },
          destroy() { (el as HTMLElement).innerHTML = ''; }
        };
      }

      const config = buildConfig(spec);
      const chart = new Chart(el, config);
      return {
        chart,
        // NOTE: combo charts expect data = { bar: ComboSeries, line: ComboSeries }.
        // Calling update() with a flat array for a combo chart will throw. Combo live-update is Plan 2.
        update(data: any, labels?: string[]) {
          const next = buildConfig({ ...spec, data, labels: labels ?? spec.labels });
          chart.data.labels = next.data.labels;
          chart.data.datasets = next.data.datasets;
          chart.update();
        },
        destroy() { chart.destroy(); }
      };
    }
  };
}
