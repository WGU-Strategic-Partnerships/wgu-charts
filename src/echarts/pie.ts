import { cloneArr } from '../charts/_shared';

export interface ESlice { name: string; value: number; }

export function pieOption(data: ESlice[], opts: { donut?: boolean } = {}): any {
  return {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 0 },
    series: [{ type: 'pie', radius: opts.donut ? ['55%', '75%'] : '70%', data: cloneArr(data),
      itemStyle: { borderColor: '#fff', borderWidth: 2 }, label: { color: '#264468' } }]
  };
}
