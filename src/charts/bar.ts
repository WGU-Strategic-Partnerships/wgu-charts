import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from './_shared';

export interface BarDatum { label: string; count: number; }
export interface BarOptions {
  title?: string;
  orientation?: 'horizontal' | 'vertical';
  stacked?: boolean;
  leadColor?: string;
}

export function barChart(data: BarDatum[], opts: BarOptions = {}): ChartConfiguration<'bar'> {
  const rows = Array.isArray(data) ? data : [];
  const labels = cloneArr(rows.map((d) => d.label));
  const values = cloneArr(rows.map((d) => Number(d.count) || 0));
  const total = values.reduce((a, v) => a + v, 0) || 1;
  const mx = values.length ? Math.max(...values) : 0;
  const horizontal = opts.orientation !== 'vertical';
  const C = wguTheme.colors;

  const backgroundColor: any = opts.leadColor
    ? values.map((_v, i) => (i === 0 ? opts.leadColor! : C.medium))
    : (ctx: any) => (ctx.active ? C.navy : C.medium);

  return {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: opts.title || '',
        data: values,
        backgroundColor,
        hoverBackgroundColor: opts.leadColor ? undefined : C.navy,
        borderRadius: wguTheme.radius, borderSkipped: false,
        barThickness: 'flex', maxBarThickness: 26, categoryPercentage: 0.82
      }]
    },
    options: {
      indexAxis: horizontal ? 'y' : 'x',
      responsive: true, maintainAspectRatio: false,
      layout: { padding: { right: horizontal ? 42 : 0 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          callbacks: {
            label: (c: any) => ' ' + (horizontal ? c.parsed.x : c.parsed.y).toLocaleString('en-US'),
            afterLabel: (c: any) => ' ' + Math.round(((horizontal ? c.parsed.x : c.parsed.y) / total) * 100) + '% of total'
          }
        }
      },
      animation: baseAnimation(),
      hover: { mode: 'nearest', intersect: true },
      scales: {
        x: { stacked: !!opts.stacked, display: horizontal ? false : true, beginAtZero: true,
             suggestedMax: horizontal ? mx * 1.08 : undefined, grid: { display: false },
             border: { display: false }, ticks: { color: tickColor } },
        y: { stacked: !!opts.stacked, beginAtZero: true,
             suggestedMax: horizontal ? undefined : mx * 1.08,
             grid: { display: false }, border: { display: false },
             ticks: { color: C.fg2 } }
      }
    }
  };
}
