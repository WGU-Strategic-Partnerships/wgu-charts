import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip, tickColor } from '../_shared';

export interface CandleDatum { x: string | number; o: number; h: number; l: number; c: number; }
export interface CandlestickOptions { label?: string; }

export function candlestickChart(data: CandleDatum[], opts: CandlestickOptions = {}): ChartConfiguration<any> {
  const rows = Array.isArray(data) ? data : [];
  const points = rows.map((d, i) => ({ x: typeof d.x === 'number' ? d.x : i, o: d.o, h: d.h, l: d.l, c: d.c }));
  const labels = rows.map((d, i) => (typeof d.x === 'number' ? String(d.x) : d.x));
  return {
    type: 'candlestick',
    data: {
      datasets: [{
        label: opts.label || '',
        data: cloneArr(points),
        color: { up: '#97E152', down: '#E5484D', unchanged: '#46B1EF' },
        borderColor: { up: '#97E152', down: '#E5484D', unchanged: '#46B1EF' }
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: baseTooltip() },
      scales: {
        x: {
          type: 'linear', offset: true,
          min: -0.5, max: points.length - 0.5,
          grid: { display: false }, border: { display: false },
          ticks: {
            color: wguTheme.colors.fg2, stepSize: 1, autoSkip: false,
            callback: (v: any) => labels[v] ?? ''
          }
        },
        y: { grid: { color: wguTheme.colors.grid }, border: { display: false }, ticks: { color: tickColor } }
      }
    }
  } as ChartConfiguration<any>;
}
