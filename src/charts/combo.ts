import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation } from './_shared';

export interface ComboSeries { label: string; data: number[]; }

export function comboChart(labels: string[], bar: ComboSeries, line: ComboSeries): ChartConfiguration {
  const C = wguTheme.colors;
  return {
    type: 'bar',
    data: {
      labels: cloneArr(labels),
      datasets: [
        { type: 'bar', label: bar.label, data: cloneArr(bar.data),
          backgroundColor: (c: any) => (c.active ? C.navy : C.medium), hoverBackgroundColor: C.navy,
          borderRadius: wguTheme.radius, maxBarThickness: 64, yAxisID: 'y', order: 2 },
        { type: 'line', label: line.label, data: cloneArr(line.data),
          borderColor: C.sky, backgroundColor: C.sky, borderWidth: 3, tension: 0.35,
          pointBackgroundColor: '#fff', pointBorderColor: C.sky, pointBorderWidth: 2,
          pointRadius: 5, pointHoverRadius: 7, yAxisID: 'y1', order: 1 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false },
        tooltip: { ...baseTooltip(), callbacks: { label: (c: any) =>
          c.dataset.type === 'line' ? ' ' + line.label + ': ' + c.parsed.y + '%'
            : ' ' + Number(c.parsed.y).toLocaleString('en-US') } } },
      interaction: { intersect: false, mode: 'index' },
      animation: baseAnimation(),
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: C.fg2 } },
        y: { position: 'left', beginAtZero: true, grid: { color: C.grid }, border: { display: false },
             ticks: { color: C.tick }, title: { display: true, text: bar.label, color: C.tick, font: { size: 11 } } },
        y1: { position: 'right', beginAtZero: true, max: 100, grid: { display: false }, border: { display: false },
              ticks: { color: C.sky, callback: (v: any) => v + '%' },
              title: { display: true, text: line.label, color: C.sky, font: { size: 11 } } }
      }
    }
  } as ChartConfiguration;
}
