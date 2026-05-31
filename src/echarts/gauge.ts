import { wguTheme } from '../theme';

export function gaugeOption(opts: {
  value: number;
  min?: number;
  max?: number;
  name?: string;
  thresholds?: [number, number];
}): any {
  const min = opts.min ?? 0;
  const max = opts.max ?? 100;
  const [t1, t2] = opts.thresholds ?? [max * 0.53, max * 0.66];
  const stops: [number, string][] = [
    [t1 / max, '#E5484D'],
    [t2 / max, '#F5A623'],
    [1, '#97E152']
  ];

  return {
    series: [{
      type: 'gauge',
      min,
      max,
      startAngle: 210,
      endAngle: -30,
      progress: {
        show: true,
        width: 14,
        itemStyle: { color: wguTheme.colors.medium }
      },
      axisLine: {
        lineStyle: { width: 14, color: stops }
      },
      pointer: {
        itemStyle: { color: wguTheme.colors.navy }
      },
      axisTick: { show: false },
      splitLine: {
        length: 14,
        lineStyle: { color: '#fff', width: 2 }
      },
      axisLabel: { color: '#6B7C93', distance: 18, fontSize: 10 },
      anchor: {
        show: true,
        size: 14,
        itemStyle: { color: wguTheme.colors.navy }
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
        color: wguTheme.colors.navy,
        fontFamily: wguTheme.font.numerals,
        fontSize: 28,
        offsetCenter: [0, '40%']
      },
      title: {
        offsetCenter: [0, '72%'],
        color: wguTheme.colors.fg2,
        fontSize: 12
      },
      data: [{ value: opts.value, name: opts.name || '' }]
    }]
  };
}
