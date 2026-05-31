export * from './theme';
export * from './plugins';
export * from './charts/bar';
export * from './charts/line';
export * from './charts/pie';
export * from './charts/combo';
export * from './charts/polar';
export * from './charts/radar';
export * from './charts/scatter';
export * from './charts/bubble';

import { wguPlugins } from './plugins';

let registered = false;
export function registerWguPlugins(Chart: { register: (...p: any[]) => void }): void {
  if (registered || !Chart || typeof Chart.register !== 'function') return;
  Chart.register(...wguPlugins);
  registered = true;
}
