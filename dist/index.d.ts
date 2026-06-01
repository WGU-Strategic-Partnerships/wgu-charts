import * as chart_js from 'chart.js';
import { Plugin, ChartConfiguration } from 'chart.js';

interface Hit {
    datasetIndex: number;
    index: number;
    label: any;
    value: any;
    datum: any;
}
declare function hitTest(chart: any, evt: any): Hit | null;
type FilterState = Record<string, Array<string | number>>;
declare function applyFilters<T extends Record<string, any>>(rows: T[], state: FilterState): T[];
declare function deriveFilterOptions<T extends Record<string, any>>(rows: T[], dim: string): {
    value: any;
    label: string;
}[];
interface DrillSpecInput {
    levels: string[];
}
declare function drillSpec(spec: DrillSpecInput): {
    levels: string[];
    levelAt: (i: number) => string;
    next: (i: number) => number;
    prev: (i: number) => number;
};
declare function applyData(chart: any, next: {
    labels?: any[];
    datasets: any[];
}): void;

interface WguTheme {
    colors: {
        navy: string;
        midnight: string;
        medium: string;
        sky: string;
        lime: string;
        fg2: string;
        tick: string;
        grid: string;
        lightGrey: string;
        grey: string;
        white: string;
        sequence: string[];
    };
    font: {
        family: string;
        numerals: string;
        weights: {
            book: number;
            medium: number;
            heavy: number;
        };
    };
    radius: number;
    tooltip: {
        backgroundColor: string;
        padding: number;
        cornerRadius: number;
    };
    animation: {
        duration: number;
        easing: chart_js.EasingFunction;
    };
    modes: {
        light: {
            fg: string;
            surface: string;
        };
        dark: {
            fg: string;
            surface: string;
        };
    };
}
declare const wguTheme: WguTheme;
declare function createTheme(overrides?: Partial<WguTheme>): WguTheme;

declare const pBarLabels: Plugin;
declare const pPointLabels: Plugin;
declare const pCrosshair: Plugin;
declare const wguPlugins: Plugin[];

interface BarDatum {
    label: string;
    count: number;
}
interface BarOptions {
    title?: string;
    orientation?: 'horizontal' | 'vertical';
    stacked?: boolean;
    leadColor?: string;
}
declare function barChart(data: BarDatum[], opts?: BarOptions): ChartConfiguration<'bar'>;

interface LineSeries {
    label: string;
    data: number[];
}
interface LineOptions {
    area?: boolean;
    stepped?: boolean;
    canvas?: HTMLCanvasElement;
}
declare function lineChart(labels: string[], series: LineSeries[], opts?: LineOptions): ChartConfiguration<'line'>;

interface SliceDatum {
    label: string;
    count: number;
    color?: string;
}
declare function doughnutChart(data: SliceDatum[], cutout?: string | number): ChartConfiguration<'doughnut'>;
declare function pieChart(data: SliceDatum[]): ChartConfiguration<'doughnut'>;

interface ComboSeries {
    label: string;
    data: number[];
}
declare function comboChart(labels: string[], bar: ComboSeries, line: ComboSeries): ChartConfiguration;

declare function polarChart(data: BarDatum[]): ChartConfiguration<'polarArea'>;

declare function radarChart(labels: string[], series: LineSeries[]): ChartConfiguration<'radar'>;

interface PointSeries {
    label: string;
    points: {
        x: number;
        y: number;
    }[];
}
interface ScatterOpts {
    showLine?: boolean;
}
declare function scatterChart(series: PointSeries[], opts?: ScatterOpts): ChartConfiguration<'scatter'>;

interface BubbleSeries {
    label: string;
    points: {
        x: number;
        y: number;
        r: number;
    }[];
}
declare function bubbleChart(series: BubbleSeries[]): ChartConfiguration<'bubble'>;

interface GroupedBarOptions {
    stacked?: boolean;
}
declare function groupedBarChart(labels: string[], series: LineSeries[], opts?: GroupedBarOptions): ChartConfiguration<'bar'>;

interface HeatmapDatum {
    x: string;
    y: string;
    v: number;
}
interface HeatmapOptions {
    label?: string;
    xLabels?: string[];
    yLabels?: string[];
    max?: number;
}
declare function heatmapChart(data: HeatmapDatum[], opts?: HeatmapOptions): any;

interface TreemapDatum {
    label: string;
    value?: number;
    count?: number;
    [k: string]: unknown;
}
interface TreemapOptions {
    label?: string;
}
declare function treemapChart(data: TreemapDatum[], opts?: TreemapOptions): any;

interface SankeyDatum {
    from: string;
    to: string;
    flow: number;
}
interface SankeyOptions {
    label?: string;
    labels?: Record<string, string>;
}
declare function sankeyChart(data: SankeyDatum[], opts?: SankeyOptions): any;

interface BoxplotOptions {
    label?: string;
}
declare function boxplotChart(labels: string[], data: number[][], opts?: BoxplotOptions): any;

interface ErrorBarDatum {
    y: number;
    yMin: number;
    yMax: number;
}
interface ErrorBarSeries {
    label: string;
    data: ErrorBarDatum[];
}
interface ErrorBarOptions {
    label?: string;
}
declare function errorBarChart(labels: string[], data: ErrorBarDatum[] | ErrorBarSeries[], opts?: ErrorBarOptions): any;

interface WordCloudDatum {
    text: string;
    weight: number;
}
interface WordCloudOptions {
    label?: string;
}
declare function wordCloudChart(words: WordCloudDatum[], opts?: WordCloudOptions): any;

interface CandleDatum {
    x: string | number;
    o: number;
    h: number;
    l: number;
    c: number;
}
interface CandlestickOptions {
    label?: string;
}
declare function candlestickChart(data: CandleDatum[], opts?: CandlestickOptions): ChartConfiguration<any>;

interface GeoBubblePoint {
    name: string;
    x?: number;
    y?: number;
    lat?: number;
    lng?: number;
    value: number;
}
interface GeoBubbleOptions {
    outline: any;
    states?: any;
    points: GeoBubblePoint[];
    label?: string;
}
declare function geoBubbleChart(opts: GeoBubbleOptions): any;

interface ForceGraphNode {
    id: string;
}
interface ForceGraphEdge {
    source: number;
    target: number;
}
interface ForceGraphOptions {
    nodes: ForceGraphNode[];
    edges: ForceGraphEdge[];
    label?: string;
}
declare function forceGraphChart(opts: ForceGraphOptions): any;

declare function registerPlugin(Chart: {
    register: (...a: any[]) => void;
}, ...controllers: any[]): void;

declare function registerWguPlugins(Chart: {
    register: (...p: any[]) => void;
}): void;

export { type BarDatum, type BarOptions, type BoxplotOptions, type BubbleSeries, type CandleDatum, type CandlestickOptions, type ComboSeries, type DrillSpecInput, type ErrorBarDatum, type ErrorBarOptions, type ErrorBarSeries, type FilterState, type ForceGraphEdge, type ForceGraphNode, type ForceGraphOptions, type GeoBubbleOptions, type GeoBubblePoint, type GroupedBarOptions, type HeatmapDatum, type HeatmapOptions, type Hit, type LineOptions, type LineSeries, type PointSeries, type SankeyDatum, type SankeyOptions, type ScatterOpts, type SliceDatum, type TreemapDatum, type TreemapOptions, type WguTheme, type WordCloudDatum, type WordCloudOptions, applyData, applyFilters, barChart, boxplotChart, bubbleChart, candlestickChart, comboChart, createTheme, deriveFilterOptions, doughnutChart, drillSpec, errorBarChart, forceGraphChart, geoBubbleChart, groupedBarChart, heatmapChart, hitTest, lineChart, pBarLabels, pCrosshair, pPointLabels, pieChart, polarChart, radarChart, registerPlugin, registerWguPlugins, sankeyChart, scatterChart, treemapChart, wguPlugins, wguTheme, wordCloudChart };
