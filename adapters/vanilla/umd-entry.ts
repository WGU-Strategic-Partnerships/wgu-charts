import { createWGUCharts } from './index';
export * from '../../src/index';
export * from '../../src/echarts';

const Chart = (globalThis as any).Chart;
if (!Chart) {
  // eslint-disable-next-line no-console
  console.warn('WGUCharts: globalThis.Chart is undefined — load Chart.js before wgu-charts.umd.js');
}
const api = Chart ? createWGUCharts(Chart) : null;

export function mount(target: any, spec: any) {
  if (!api) {
    throw new Error('WGUCharts: Chart.js was not available at load time. Ensure Chart.js loads before wgu-charts.umd.js.');
  }
  return api.mount(target, spec);
}
export { createWGUCharts };
