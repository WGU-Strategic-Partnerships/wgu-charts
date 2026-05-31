export * from './heatmap';
export * from './treemap';
export * from './sankey';

// Thin passthrough so consumers register only the community plugins they use:
//   import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
//   registerPlugin(Chart, MatrixController, MatrixElement);
export function registerPlugin(Chart: { register: (...a: any[]) => void }, ...controllers: any[]): void {
  if (Chart && typeof Chart.register === 'function') Chart.register(...controllers);
}
