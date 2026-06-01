import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip, baseAnimation, tickColor } from '../_shared';

export interface ErrorBarDatum {
  y: number;
  yMin: number;
  yMax: number;
}

export interface ErrorBarSeries {
  label: string;
  data: ErrorBarDatum[];
}

export interface ErrorBarOptions {
  label?: string;
}

const ERROR_BAR_STYLE = {
  borderRadius: wguTheme.radius,
  borderSkipped: false as const,
  errorBarColor: '#002855',
  errorBarWhiskerColor: '#002855',
  errorBarLineWidth: 1.5,
  errorBarWhiskerLineWidth: 1.5,
};

export function errorBarChart(
  labels: string[],
  data: ErrorBarDatum[] | ErrorBarSeries[],
  opts?: ErrorBarOptions
): any {
  // Accept either a flat ErrorBarDatum[] (single series) OR an array of
  // { label, data } series (grouped/multi-category). The multi-category corpus
  // entry passes the latter; collapsing it into one dataset gave Chart.js
  // non-point objects to plot, so nothing rendered.
  const seq = wguTheme.colors.sequence;
  const isMulti = Array.isArray(data) && data.length > 0 &&
    data[0] != null && typeof data[0] === 'object' &&
    Array.isArray((data[0] as ErrorBarSeries).data);
  const datasets = isMulti
    ? (data as ErrorBarSeries[]).map((s, i) => ({
        label: s.label,
        data: cloneArr(s.data),
        backgroundColor: seq[i % seq.length],
        ...ERROR_BAR_STYLE,
      }))
    : [{
        label: opts?.label || '',
        data: cloneArr(data as ErrorBarDatum[]),
        backgroundColor: '#0070F0',
        ...ERROR_BAR_STYLE,
      }];
  return {
    type: 'barWithErrorBars',
    data: {
      labels: cloneArr(labels),
      datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: isMulti },
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
