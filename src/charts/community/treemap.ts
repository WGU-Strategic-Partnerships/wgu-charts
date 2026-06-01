import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip } from '../_shared';

export interface TreemapDatum { label: string; value?: number; count?: number; [k: string]: unknown; }
export interface TreemapOptions {
  label?: string;
}

export function treemapChart(data: TreemapDatum[], opts?: TreemapOptions): any {
  const seq = wguTheme.colors.sequence;
  // Normalize the value field: corpus entries sometimes carry `count` instead of
  // `value`. chartjs-chart-treemap reads `key`, so a missing `value` => 0-area
  // (blank) cells. Guarantee a numeric `value` on every node.
  const tree = (cloneArr(data) as TreemapDatum[]).map((d) => ({
    ...d,
    value: (d.value ?? d.count ?? 0) as number,
  }));

  return {
    type: 'treemap',
    data: {
      datasets: [{
        label: opts?.label || '',
        tree,
        key: 'value',
        backgroundColor: (ctx: any) => seq[(ctx.dataIndex ?? 0) % seq.length],
        spacing: 1,
        borderWidth: 0,
        labels: {
          display: true,
          color: '#fff',
          font: { weight: '600' }
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          callbacks: {
            title: (items: any[]) => items[0]?.raw?._data?.label ?? '',
            label: (c: any) => ' ' + (c.raw?.v ?? c.raw?._data?.value ?? '')
          }
        }
      }
    }
  };
}
