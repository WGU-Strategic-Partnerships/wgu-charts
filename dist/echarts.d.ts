declare const wguEchartsTheme: {
    color: string[];
    backgroundColor: string;
    textStyle: {
        fontFamily: string;
        color: string;
    };
    title: {
        textStyle: {
            color: string;
        };
    };
    categoryAxis: {
        axisLine: {
            lineStyle: {
                color: string;
            };
        };
        axisTick: {
            show: boolean;
        };
        axisLabel: {
            color: string;
        };
        splitLine: {
            show: boolean;
        };
    };
    valueAxis: {
        axisLine: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        axisLabel: {
            color: string;
        };
        splitLine: {
            lineStyle: {
                color: string;
            };
        };
    };
    tooltip: {
        backgroundColor: string;
        borderWidth: number;
        textStyle: {
            color: string;
        };
    };
};
declare const wguHeatRamp: string[];
declare function registerWguEchartsTheme(echarts: {
    registerTheme: (name: string, theme: any) => void;
}): void;

declare function geoChoroplethOption(data: {
    name: string;
    value: number;
}[], opts?: {
    mapName?: string;
    max?: number;
}): any;

declare function sankeyOption(nodes: {
    name: string;
}[], links: {
    source: string;
    target: string;
    value: number;
}[]): any;

declare function treemapOption(data: {
    name: string;
    value: number;
}[]): any;

declare function graphOption(nodes: {
    name: string;
}[], links: {
    source: string;
    target: string;
}[]): any;

declare function heatmapOption(xLabels: string[], yLabels: string[], data: [number, number, number][], opts?: {
    max?: number;
}): any;

declare function gaugeOption(opts: {
    value: number;
    min?: number;
    max?: number;
    name?: string;
    thresholds?: [number, number];
}): any;

interface EBarSeries {
    label: string;
    data: number[];
}
declare function barOption(labels: string[], series: EBarSeries[], opts?: {
    stacked?: boolean;
    horizontal?: boolean;
}): any;

interface ELineSeries {
    label: string;
    data: number[];
}
declare function lineOption(labels: string[], series: ELineSeries[], opts?: {
    area?: boolean;
    smooth?: boolean;
    stacked?: boolean;
}): any;

interface ESlice {
    name: string;
    value: number;
}
declare function pieOption(data: ESlice[], opts?: {
    donut?: boolean;
}): any;

interface EPointSeries {
    label: string;
    points: [number, number][];
}
declare function scatterOption(series: EPointSeries[]): any;

declare function sunburstOption(data: any[]): any;

declare function radialBarOption(labels: string[], values: number[]): any;

declare function boxplotOption(labels: string[], samples: number[][]): any;

interface ParallelRow {
    name: string;
    values: number[];
}
declare function parallelOption(dims: string[], rows: ParallelRow[]): any;

declare function themeRiverOption(data: [string, number, string][]): any;

declare function calendarHeatmapOption(year: number, data: [string, number][], opts?: {
    max?: number;
}): any;

export { type EBarSeries, type ELineSeries, type EPointSeries, type ESlice, type ParallelRow, barOption, boxplotOption, calendarHeatmapOption, gaugeOption, geoChoroplethOption, graphOption, heatmapOption, lineOption, parallelOption, pieOption, radialBarOption, registerWguEchartsTheme, sankeyOption, scatterOption, sunburstOption, themeRiverOption, treemapOption, wguEchartsTheme, wguHeatRamp };
