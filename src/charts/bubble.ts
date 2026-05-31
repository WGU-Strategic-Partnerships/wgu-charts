import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from './_shared';

export interface BubbleSeries { label: string; points: { x: number; y: number; r: number }[]; }

export function bubbleChart(series: BubbleSeries[]): ChartConfiguration<'bubble'> {
  const seq = wguTheme.colors.sequence;
  return {
    type: 'bubble',
    data: { datasets: (Array.isArray(series) ? series : []).map((s, i) => ({
      label: s.label, data: cloneArr(s.points), backgroundColor: seq[i % seq.length] + 'aa', borderColor: seq[i % seq.length] })) },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' }, tooltip: baseTooltip() }, animation: baseAnimation(),
      scales: { x: { grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } },
                y: { grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } } } }
  };
}
