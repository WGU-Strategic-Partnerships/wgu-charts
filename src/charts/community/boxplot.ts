import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from '../_shared';

export interface BoxplotOptions {
  label?: string;
}

export function boxplotChart(labels: string[], data: number[][], opts?: BoxplotOptions): any {
  return {
    type: 'boxplot',
    data: {
      labels: cloneArr(labels),
      datasets: [{
        label: opts?.label || '',
        data: data.map(cloneArr),
        backgroundColor: '#0070F066',
        borderColor: '#002855',
        borderWidth: 1.5,
        itemRadius: 2,
        outlierBackgroundColor: '#002855'
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
