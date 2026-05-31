import { wguTheme } from '../theme';

export const wguEchartsTheme = {
  color: [wguTheme.colors.medium, wguTheme.colors.sky, wguTheme.colors.navy, wguTheme.colors.lime, wguTheme.colors.fg2, wguTheme.colors.grey],
  backgroundColor: 'transparent',
  textStyle: { fontFamily: wguTheme.font.family, color: wguTheme.colors.fg2 },
  title: { textStyle: { color: wguTheme.colors.navy } },
  categoryAxis: { axisLine: { lineStyle: { color: 'rgba(0,40,85,.08)' } }, axisTick: { show: false }, axisLabel: { color: wguTheme.colors.fg2 }, splitLine: { show: false } },
  valueAxis: { axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: '#6B7C93' }, splitLine: { lineStyle: { color: 'rgba(0,40,85,.08)' } } },
  tooltip: { backgroundColor: wguTheme.colors.navy, borderWidth: 0, textStyle: { color: '#fff' } }
};

export const wguHeatRamp = ['#EEF6F9', '#46B1EF', '#0070F0', '#002855'];

export function registerWguEchartsTheme(echarts: { registerTheme: (name: string, theme: any) => void }): void {
  if (echarts && typeof echarts.registerTheme === 'function') echarts.registerTheme('wgu', wguEchartsTheme);
}
