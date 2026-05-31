declare const FAMILIES_ORDER: readonly ["magnitude", "change-over-time", "part-to-whole", "ranking", "distribution", "correlation", "deviation", "flow", "spatial", "kpi", "tables"];
type Family = typeof FAMILIES_ORDER[number];
type Runtime = 'LWC' | 'Next' | 'HTML';
type Engine = 'chartjs' | 'echarts' | 'render-model';
type ChartSpec = {
    engine: 'chartjs';
    type: string;
    data: unknown;
    labels?: string[];
    opts?: unknown;
} | {
    engine: 'render-model';
    type: string;
    data: unknown;
    opts?: unknown;
} | {
    engine: 'echarts';
    factory: string;
    args: unknown[];
    needsMap?: string;
} | {
    engine: 'echarts';
    option: Record<string, unknown>;
    needsMap?: string;
};
interface CorpusEntry {
    id: string;
    title: string;
    family: Family;
    secondaryFamilies?: Family[];
    engine: Engine;
    chartType: string;
    variant?: string;
    whenToUse: string;
    description: string;
    tags: string[];
    runtimes: Runtime[];
    features: string[];
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

interface FamilyMeta {
    id: Family;
    label: string;
    description: string;
}
declare const FAMILIES: FamilyMeta[];

type Resolved = {
    kind: 'chartjs';
    value: any;
} | {
    kind: 'render-model';
    value: any;
    html: string;
} | {
    kind: 'echarts';
    value: any;
};
declare function resolveSpec(spec: ChartSpec): Resolved;

declare const corpus: CorpusEntry[];
declare const byFamily: (f: Family) => CorpusEntry[];
declare const byEngine: (eng: CorpusEntry["engine"]) => CorpusEntry[];
declare const byFeature: (feat: string) => CorpusEntry[];
declare function search(q: string): CorpusEntry[];

export { type ChartSpec, type CorpusEntry, type Engine, FAMILIES, FAMILIES_ORDER, type Family, type FamilyMeta, type Resolved, type Runtime, byEngine, byFamily, byFeature, corpus, resolveSpec, search };
