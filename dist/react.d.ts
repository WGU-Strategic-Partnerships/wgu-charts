import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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

interface WguChartProps {
    type: MountSpec['type'];
    data: any;
    labels?: string[];
    opts?: any;
    onClick?: (hit: Hit) => void;
    onDrill?: (hit: Hit) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function WguChart(props: WguChartProps): react_jsx_runtime.JSX.Element;

export { WguChart, type WguChartProps };
