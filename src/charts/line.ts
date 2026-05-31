import type { ChartConfiguration } from 'chart.js';
import { wguTheme } from '../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from './_shared';

export interface LineSeries { label: string; data: number[]; }
export interface LineOptions {
  area?: boolean;
  stepped?: boolean;
  canvas?: HTMLCanvasElement;
}

const FILL = [
  { from: 'rgba(0,112,240,.22)', to: 'rgba(0,112,240,0)' },
  { from: 'rgba(70,177,239,.20)', to: 'rgba(70,177,239,0)' }
];

function gradientFor(canvas: HTMLCanvasElement | undefined, i: number): any {
  const spec = FILL[i % FILL.length];
  const c = canvas && canvas.getContext && canvas.getContext('2d');
  if (!c || typeof c.createLinearGradient !== 'function') return spec.from;
  const g = c.createLinearGradient(0, 0, 0, 260);
  g.addColorStop(0, spec.from); g.addColorStop(1, spec.to);
  return g;
}

export function lineChart(labels: string[], series: LineSeries[], opts: LineOptions = {}): ChartConfiguration<'line'> {
  const seq = wguTheme.colors.sequence;
  const area = opts.area !== false;
  const datasets = (Array.isArray(series) ? series : []).map((ds, i) => {
    const color = seq[i % seq.length];
    return {
      label: ds.label,
      data: cloneArr(ds.data),
      borderColor: color,
      backgroundColor: area ? gradientFor(opts.canvas, i) : 'transparent',
      fill: area, stepped: !!opts.stepped, tension: opts.stepped ? 0 : 0.4, borderWidth: 3,
      pointBackgroundColor: '#fff', pointBorderColor: color, pointBorderWidth: 2,
      pointRadius: 4, pointHoverRadius: 7, pointHoverBorderWidth: 3, pointHitRadius: 14
    };
  });

  return {
    type: 'line',
    data: { labels: cloneArr(labels), datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { ...baseTooltip(), usePointStyle: true,
          callbacks: { label: (c: any) => ' ' + c.dataset.label + ': ' + c.parsed.y } }
      },
      layout: { padding: { top: 22 } },
      interaction: { intersect: false, mode: 'index' },
      animation: baseAnimation(),
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: tickColor } },
        y: { beginAtZero: true, grid: { color: wguTheme.colors.grid }, border: { display: false },
             ticks: { color: tickColor, precision: 0 } }
      }
    }
  };
}
