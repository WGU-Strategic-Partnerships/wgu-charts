import { createWGUCharts } from './index';
export * from '../../src/index';
const Chart = (globalThis as any).Chart;
const api = createWGUCharts(Chart);
export const mount = api.mount;
export { createWGUCharts };
