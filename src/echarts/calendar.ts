import { wguHeatRamp } from './theme';
import { cloneArr } from '../charts/_shared';

export function calendarHeatmapOption(year: number, data: [string, number][], opts: { max?: number } = {}): any {
  const max = opts.max ?? Math.max(1, ...data.map(d => d[1]));
  return {
    tooltip: { position: 'top' },
    visualMap: { min: 0, max, orient: 'horizontal', left: 'center', bottom: 0, inRange: { color: wguHeatRamp } },
    calendar: { range: String(year), cellSize: ['auto', 16] },
    series: [{ type: 'heatmap', coordinateSystem: 'calendar', data: cloneArr(data) }]
  };
}
