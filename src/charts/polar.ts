import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation } from './_shared';
import type { BarDatum } from './bar';

export function polarChart(data: BarDatum[]): ChartConfiguration<'polarArea'> {
  const rows = Array.isArray(data) ? data : [];
  const seq = wguTheme.colors.sequence;
  return {
    type: 'polarArea',
    data: { labels: cloneArr(rows.map((d) => d.label)),
      datasets: [{ data: cloneArr(rows.map((d) => Number(d.count) || 0)),
        backgroundColor: rows.map((_d, i) => seq[i % seq.length] + 'cc'), borderColor: '#fff', borderWidth: 2 }] },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' }, tooltip: baseTooltip() }, animation: baseAnimation() }
  };
}
