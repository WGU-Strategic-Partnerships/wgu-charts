import { wguTheme } from '../theme';
import { cloneArr } from '../charts/_shared';

export function sunburstOption(data: any[]): any {
  return {
    tooltip: {},
    color: wguTheme.colors.sequence,
    series: [{ type: 'sunburst', radius: [0, '90%'], data: cloneArr(data),
      label: { color: '#fff' }, itemStyle: { borderColor: '#fff', borderWidth: 2 } }]
  };
}
