import { cloneArr } from '../charts/_shared';

export function boxplotOption(labels: string[], samples: number[][]): any {
  const box = (arr: number[]) => {
    const s = [...arr].sort((a, b) => a - b);
    const q = (p: number) => s[Math.floor((s.length - 1) * p)];
    return [s[0], q(0.25), q(0.5), q(0.75), s[s.length - 1]];
  };
  return {
    tooltip: { trigger: 'item' },
    xAxis: { type: 'category', data: cloneArr(labels) },
    yAxis: { type: 'value' },
    series: [{ type: 'boxplot', data: (Array.isArray(samples) ? samples : []).map(box) }]
  };
}
