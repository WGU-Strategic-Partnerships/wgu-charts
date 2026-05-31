import { cloneArr } from '../charts/_shared';

export interface EPointSeries { label: string; points: [number, number][]; }

export function scatterOption(series: EPointSeries[]): any {
  return {
    tooltip: { trigger: 'item' },
    legend: series.length > 1 ? { bottom: 0 } : undefined,
    xAxis: { type: 'value' }, yAxis: { type: 'value' },
    series: (Array.isArray(series) ? series : []).map(s => ({ name: s.label, type: 'scatter', symbolSize: 12, data: cloneArr(s.points) }))
  };
}
