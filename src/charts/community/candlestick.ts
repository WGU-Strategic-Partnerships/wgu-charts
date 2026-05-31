import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip, tickColor } from '../_shared';

export interface CandlestickDatum {
  x: string | number;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface CandlestickOptions {
  label?: string;
}

export function candlestickChart(data: CandlestickDatum[], opts?: CandlestickOptions): any {
  return {
    type: 'candlestick',
    data: {
      labels: (Array.isArray(data) ? data : []).map((d) => d.x),
      datasets: [{
        label: opts?.label || '',
        data: cloneArr(data),
        color: {
          up: '#97E152',
          down: '#E5484D',
          unchanged: '#46B1EF'
        },
        borderColor: {
          up: '#97E152',
          down: '#E5484D',
          unchanged: '#46B1EF'
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      },
      scales: {
        x: {
          type: 'category',
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}
