interface Hit {
    datasetIndex: number;
    index: number;
    label: any;
    value: any;
    datum: any;
}

type ChartType = 'bar' | 'line' | 'doughnut' | 'pie' | 'combo' | 'polarArea' | 'radar' | 'scatter' | 'bubble' | 'groupedBar' | 'funnel' | 'gauge' | 'kpi' | 'choropleth' | 'scoreTable' | 'matrix' | 'treemap' | 'sankey' | 'boxplot' | 'barWithErrorBars' | 'wordCloud' | 'candlestick' | 'bubbleMap' | 'forceDirectedGraph';
interface MountSpec {
    type: ChartType;
    data: any;
    labels?: string[];
    opts?: any;
    onClick?: (hit: Hit) => void;
    onDrill?: (hit: Hit) => void;
}
interface ChartHandle {
    chart: any;
    update: (data: any, labels?: string[]) => void;
    destroy: () => void;
}
declare function buildConfig(spec: MountSpec): any;
declare function createWGUCharts(Chart: any): {
    mount(target: string | HTMLElement, spec: MountSpec): ChartHandle;
};

export { type ChartHandle, type ChartType, type MountSpec, buildConfig, createWGUCharts };
