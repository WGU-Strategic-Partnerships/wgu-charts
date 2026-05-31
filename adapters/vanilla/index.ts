import {
  barChart, lineChart, doughnutChart, pieChart, comboChart,
  polarChart, radarChart, scatterChart, bubbleChart, registerWguPlugins
} from '../../src/index';

export type ChartType =
  | 'bar' | 'line' | 'doughnut' | 'pie' | 'combo'
  | 'polarArea' | 'radar' | 'scatter' | 'bubble';

export interface MountSpec { type: ChartType; data: any; labels?: string[]; opts?: any; }
export interface ChartHandle { chart: any; update: (data: any, labels?: string[]) => void; destroy: () => void; }

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
    default: throw new Error('WGUCharts: unknown chart type "' + (spec as any).type + '"');
  }
}

export function createWGUCharts(Chart: any) {
  registerWguPlugins(Chart);
  return {
    mount(target: string | HTMLElement, spec: MountSpec): ChartHandle {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el === null) throw new Error('WGUCharts: target "' + String(target) + '" not found in document');
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
