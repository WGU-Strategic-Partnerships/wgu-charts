import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation } from './_shared';

export interface SliceDatum { label: string; count: number; color?: string; }

function build(data: SliceDatum[], cutout: string | number): ChartConfiguration<'doughnut'> {
  const rows = Array.isArray(data) ? data : [];
  const seq = wguTheme.colors.sequence;
  const labels = cloneArr(rows.map((d) => d.label));
  const values = cloneArr(rows.map((d) => Number(d.count) || 0));
  const colors = rows.map((d, i) => d.color || seq[i % seq.length]);
  const total = values.reduce((a, v) => a + v, 0) || 1;
  return {
    type: 'doughnut',
    data: { labels, datasets: [{ data: values, backgroundColor: colors, borderColor: '#fff', borderWidth: 3, hoverOffset: 6 }] },
    options: {
      responsive: true, maintainAspectRatio: false, cutout,
      plugins: {
        legend: { display: false },
        tooltip: { ...baseTooltip(), padding: 10, callbacks: {
          label: (c: any) => ' ' + c.label + ': ' + Number(c.parsed).toLocaleString('en-US') +
            ' (' + Math.round((c.parsed / total) * 100) + '%)' } }
      },
      animation: baseAnimation()
    }
  };
}

export function doughnutChart(data: SliceDatum[], cutout: string | number = '72%') { return build(data, cutout); }
export function pieChart(data: SliceDatum[]): ChartConfiguration<'doughnut'> { return build(data, 0); }
