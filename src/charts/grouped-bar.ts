import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from './_shared';
import type { LineSeries } from './line';

export interface GroupedBarOptions { stacked?: boolean; }

export function groupedBarChart(
  labels: string[],
  series: LineSeries[],
  opts: GroupedBarOptions = {}
): ChartConfiguration<'bar'> {
  const seq = wguTheme.colors.sequence;
  const datasets = (Array.isArray(series) ? series : []).map((s, i) => ({
    label: s.label,
    data: cloneArr(s.data),
    backgroundColor: seq[i % seq.length],
    borderRadius: wguTheme.radius,
    borderSkipped: false as const,
    maxBarThickness: 42
  }));

  return {
    type: 'bar',
    data: { labels: cloneArr(labels), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: baseTooltip()
      },
      animation: baseAnimation(),
      scales: {
        x: {
          stacked: !!opts.stacked,
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          stacked: !!opts.stacked,
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}
