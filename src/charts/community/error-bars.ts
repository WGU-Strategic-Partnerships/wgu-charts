import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from '../_shared';

export interface ErrorBarDatum {
  y: number;
  yMin: number;
  yMax: number;
}

export interface ErrorBarOptions {
  label?: string;
}

export function errorBarChart(
  labels: string[],
  data: ErrorBarDatum[],
  opts?: ErrorBarOptions
): any {
  return {
    type: 'barWithErrorBars',
    data: {
      labels: cloneArr(labels),
      datasets: [{
        label: opts?.label || '',
        data: cloneArr(data),
        backgroundColor: '#0070F0',
        borderRadius: wguTheme.radius,
        borderSkipped: false,
        errorBarColor: '#002855',
        errorBarWhiskerColor: '#002855',
        errorBarLineWidth: 1.5,
        errorBarWhiskerLineWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      },
      animation: baseAnimation(),
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}
