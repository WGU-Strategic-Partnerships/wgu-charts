import { cloneArr } from '../charts/_shared';

export interface ELineSeries { label: string; data: number[]; }

export function lineOption(labels: string[], series: ELineSeries[], opts: { area?: boolean; smooth?: boolean; stacked?: boolean } = {}): any {
  return {
    tooltip: { trigger: 'axis' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: { type: 'category', boundaryGap: false, data: cloneArr(labels) },
    yAxis: { type: 'value' },
    series: (Array.isArray(series) ? series : []).map(s => ({
      name: s.label, type: 'line', smooth: opts.smooth !== false, data: cloneArr(s.data),
      stack: opts.stacked ? 'total' : undefined, areaStyle: opts.area ? {} : undefined
    }))
  };
}
