import { cloneArr } from '../charts/_shared';
import { wguHeatRamp } from './theme';

export function heatmapOption(
  xLabels: string[],
  yLabels: string[],
  data: [number, number, number][],
  opts: { max?: number } = {}
): any {
  return {
    tooltip: { position: 'top' },
    grid: { height: '62%', top: '8%' },
    xAxis: { type: 'category', data: cloneArr(xLabels), splitArea: { show: true } },
    yAxis: { type: 'category', data: cloneArr(yLabels), splitArea: { show: true } },
    visualMap: {
      min: 0,
      max: opts.max ?? 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '2%',
      inRange: { color: wguHeatRamp },
      textStyle: { color: '#6B7C93' }
    },
    series: [{
      type: 'heatmap',
      data: cloneArr(data),
      label: { show: false },
      emphasis: { itemStyle: { shadowBlur: 8, shadowColor: 'rgba(0,40,85,.3)' } }
    }]
  };
}
