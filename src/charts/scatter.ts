import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from './_shared';

export interface PointSeries { label: string; points: { x: number; y: number }[]; }
export interface ScatterOpts { showLine?: boolean; }

export function scatterChart(series: PointSeries[], opts?: ScatterOpts): ChartConfiguration<'scatter'> {
  const seq = wguTheme.colors.sequence;
  const showLine = opts?.showLine ?? false;
  return {
    type: 'scatter',
    data: { datasets: (Array.isArray(series) ? series : []).map((s, i) => ({
      label: s.label, data: cloneArr(s.points), backgroundColor: seq[i % seq.length], pointRadius: 5, pointHoverRadius: 7,
      ...(showLine ? { showLine: true, tension: 0.3, borderColor: seq[i % seq.length] } : {}) })) },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' }, tooltip: baseTooltip() }, animation: baseAnimation(),
      scales: { x: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } },
                y: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } } } }
  };
}
