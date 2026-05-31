import { cloneArr, baseTooltip } from '../_shared';

export interface GeoBubblePoint {
  name: string;
  x?: number;
  y?: number;
  lat?: number;
  lng?: number;
  value: number;
}

export interface GeoBubbleOptions {
  outline: any;
  states?: any;
  points: GeoBubblePoint[];
  label?: string;
}

export function geoBubbleChart(opts: GeoBubbleOptions): any {
  const points = opts.points || [];

  return {
    type: 'bubbleMap',
    data: {
      labels: points.map((p) => p.name),
      datasets: [{
        label: opts.label || '',
        outline: opts.outline,
        data: cloneArr(points),
        backgroundColor: '#0070F0aa',
        borderColor: '#002855',
        borderWidth: 0.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      showOutline: true,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      },
      scales: {
        projection: {
          axis: 'x',
          projection: 'albersUsa'
        }
      }
    }
  };
}
