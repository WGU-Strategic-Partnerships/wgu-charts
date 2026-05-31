import { cloneArr } from '../charts/_shared';

export function treemapOption(data: { name: string; value: number }[]): any {
  return {
    tooltip: {},
    series: [{
      type: 'treemap',
      roam: false,
      nodeClick: false,
      breadcrumb: { show: false },
      label: { color: '#fff', fontWeight: 600 },
      levels: [{ itemStyle: { borderColor: '#fff', borderWidth: 2, gapWidth: 2 } }],
      data: cloneArr(data)
    }]
  };
}
