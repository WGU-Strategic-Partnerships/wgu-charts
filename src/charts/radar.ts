import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation } from './_shared';
import type { LineSeries } from './line';

export function radarChart(labels: string[], series: LineSeries[]): ChartConfiguration<'radar'> {
  const seq = wguTheme.colors.sequence;
  return {
    type: 'radar',
    data: { labels: cloneArr(labels),
      datasets: (Array.isArray(series) ? series : []).map((s, i) => {
        const c = seq[i % seq.length];
        return { label: s.label, data: cloneArr(s.data), borderColor: c,
          backgroundColor: c + '33', borderWidth: 2, pointBackgroundColor: c }; }) },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' }, tooltip: baseTooltip() }, animation: baseAnimation(),
      scales: { r: { grid: { color: wguTheme.colors.grid }, ticks: { backdropColor: 'transparent' } } } }
  };
}
