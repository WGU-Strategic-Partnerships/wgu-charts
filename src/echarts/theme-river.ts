import { wguTheme } from '../theme';
import { cloneArr } from '../charts/_shared';

export function themeRiverOption(data: [string, number, string][]): any {
  return {
    tooltip: { trigger: 'axis' },
    singleAxis: { type: 'time' },
    color: wguTheme.colors.sequence,
    series: [{ type: 'themeRiver', data: cloneArr(data) }]
  };
}
