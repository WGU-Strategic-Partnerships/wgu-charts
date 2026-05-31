export const FAMILIES_ORDER = ['magnitude','change-over-time','part-to-whole','ranking','distribution','correlation','deviation','flow','spatial','kpi','tables'] as const;
export type Family = typeof FAMILIES_ORDER[number];
export type Runtime = 'LWC' | 'Next' | 'HTML';
export type Engine = 'chartjs' | 'echarts' | 'render-model';
export type ChartSpec =
  | { engine: 'chartjs'; type: string; data: unknown; labels?: string[]; opts?: unknown }
  | { engine: 'render-model'; type: string; data: unknown; opts?: unknown }
  | { engine: 'echarts'; factory: string; args: unknown[]; needsMap?: string }
  | { engine: 'echarts'; option: Record<string, unknown>; needsMap?: string };
export interface CorpusEntry {
  id: string; title: string; family: Family; secondaryFamilies?: Family[];
  // must equal spec.engine — enforced by corpus.test.ts
  engine: Engine; chartType: string; variant?: string;
  whenToUse: string; description: string; tags: string[];
  runtimes: Runtime[]; features: string[];
  /**
   * Representative data for display/preview panels — author-friendly and may use a combined
   * shape (e.g. { labels, series }).
   *
   * CANONICAL SOURCE = `spec`, for ALL engines. Consumers that render or generate export code
   * MUST read from `spec` — never `sampleData`:
   *   - chartjs / render-model: spec.type + spec.data (+ spec.labels, spec.opts)
   *   - echarts (factory form): spec.factory + spec.args
   *   - echarts (raw form):     spec.option
   * `sampleData` is illustrative only; its shape is NOT guaranteed to equal spec.data.
   */
  sampleData: unknown;
  spec: ChartSpec;
}
