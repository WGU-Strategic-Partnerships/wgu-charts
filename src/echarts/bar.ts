import { cloneArr } from '../charts/_shared';

export interface EBarSeries { label: string; data: number[]; }

export function barOption(labels: string[], series: EBarSeries[], opts: { stacked?: boolean; horizontal?: boolean } = {}): any {
  const cat = { type: 'category', data: cloneArr(labels) };
  const val = { type: 'value' };
  return {
    tooltip: { trigger: 'axis' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: opts.horizontal ? val : cat,
    yAxis: opts.horizontal ? cat : val,
    series: (Array.isArray(series) ? series : []).map(s => ({
      name: s.label, type: 'bar', stack: opts.stacked ? 'total' : undefined,
      data: cloneArr(s.data), itemStyle: { borderRadius: opts.horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0] }
    }))
  };
}
