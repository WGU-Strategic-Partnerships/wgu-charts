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

// NOTE: `registered` is module-instance state, not per-Chart-constructor. The first call
// latches it; a later call with a DIFFERENT Chart constructor will no-op. Fine for the
// one-Chart-per-page model (HTML/Salesforce/LWC). Revisit (e.g. a WeakSet keyed on Chart)
// if multiple distinct Chart constructors ever share one module instance.
let registered = false;
export function registerWguPlugins(Chart: { register: (...p: any[]) => void }): void {
  if (registered || !Chart || typeof Chart.register !== 'function') return;
  Chart.register(...wguPlugins);
  registered = true;
}
