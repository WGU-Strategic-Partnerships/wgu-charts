import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip } from '../_shared';

export interface SankeyDatum { from: string; to: string; flow: number; }
export interface SankeyOptions {
  label?: string;
  labels?: Record<string, string>;
}

export function sankeyChart(data: SankeyDatum[], opts?: SankeyOptions): any {
  const { navy, medium } = wguTheme.colors;

  return {
    type: 'sankey',
    data: {
      datasets: [{
        label: opts?.label || '',
        data: cloneArr(data),
        colorFrom: navy,
        colorTo: medium,
        colorMode: 'gradient',
        labels: opts?.labels,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      }
    }
  };
}
