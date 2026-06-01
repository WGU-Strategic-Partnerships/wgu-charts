import { cloneArr } from '../charts/_shared';
import { wguTheme } from '../theme';
import { wguHeatRamp } from './theme';

export function geoChoroplethOption(
  data: { name: string; value: number }[],
  opts: { mapName?: string; max?: number } = {}
): any {
  return {
    tooltip: {
      trigger: 'item',
      formatter: (p: any) => `${p.name}: ${p.value || 0}`
    },
    visualMap: {
      min: 0,
      max: opts.max ?? Math.max(1, ...data.map(d => d.value)),
      left: 'left',
      bottom: '4%',
      calculable: true,
      inRange: { color: wguHeatRamp },
      text: ['High', 'Low'],
      textStyle: { color: '#6B7C93' }
    },
    series: [{
      type: 'map',
      map: opts.mapName || 'USA',
      roam: false,
      // Fill the container — without an explicit layout the map shrinks to leave
      // room for the visualMap legend and looks tiny in small cards.
      layoutCenter: ['50%', '50%'],
      layoutSize: '100%',
      itemStyle: { borderColor: '#fff', borderWidth: 0.5 },
      emphasis: {
        label: { show: false },
        itemStyle: { areaColor: wguTheme.colors.lime }
      },
      data: cloneArr(data)
    }]
  };
}
