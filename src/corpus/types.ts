export const FAMILIES_ORDER = ['magnitude','change-over-time','part-to-whole','ranking','distribution','correlation','deviation','flow','spatial','kpi','tables'] as const;
export type Family = typeof FAMILIES_ORDER[number];
export type Runtime = 'LWC' | 'Next' | 'HTML';
export type Engine = 'chartjs' | 'echarts' | 'render-model';
export type ChartSpec =
  | { engine: 'chartjs'; type: string; data: unknown; labels?: string[]; opts?: unknown }
  | { engine: 'render-model'; type: string; data: unknown; opts?: unknown }
  | { engine: 'echarts'; factory: string; args: unknown[]; needsMap?: string };
export interface CorpusEntry {
  id: string; title: string; family: Family; secondaryFamilies?: Family[];
  engine: Engine; chartType: string; variant?: string;
  whenToUse: string; description: string; tags: string[];
  runtimes: Runtime[]; features: string[]; sampleData: unknown; spec: ChartSpec;
}
