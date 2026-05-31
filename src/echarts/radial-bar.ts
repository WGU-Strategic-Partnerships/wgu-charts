import { cloneArr } from '../charts/_shared';

export function radialBarOption(labels: string[], values: number[]): any {
  return {
    polar: { radius: [20, '80%'] },
    angleAxis: { max: Math.max(1, ...values) * 1.1, startAngle: 75 },
    radiusAxis: { type: 'category', data: cloneArr(labels) },
    tooltip: {},
    series: [{ type: 'bar', data: cloneArr(values), coordinateSystem: 'polar', itemStyle: { borderRadius: 4 } }]
  };
}
