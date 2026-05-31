import { describe, it, expect } from 'vitest';
import { barOption, lineOption, pieOption, scatterOption } from '../src/echarts';
describe('echarts parity factories', () => {
  it('barOption', () => { const o = barOption(['A','B'], [{label:'x',data:[1,2]}]); expect(o.series[0].type).toBe('bar'); expect(o.xAxis.data).toEqual(['A','B']); });
  it('barOption horizontal swaps axes', () => { const o = barOption(['A'], [{label:'x',data:[1]}], {horizontal:true}); expect(o.yAxis.data).toEqual(['A']); });
  it('lineOption', () => { const o = lineOption(['A','B'], [{label:'x',data:[1,2]}]); expect(o.series[0].type).toBe('line'); });
  it('lineOption area', () => { const o = lineOption(['A'], [{label:'x',data:[1]}], {area:true}); expect(o.series[0].areaStyle).toBeTruthy(); });
  it('pieOption', () => { const o = pieOption([{name:'A',value:3}]); expect(o.series[0].type).toBe('pie'); });
  it('pieOption donut radius', () => { const o = pieOption([{name:'A',value:3}], {donut:true}); expect(Array.isArray(o.series[0].radius)).toBe(true); });
  it('scatterOption', () => { const o = scatterOption([{label:'s',points:[[1,2],[3,4]]}]); expect(o.series[0].type).toBe('scatter'); });
});

import { sunburstOption, radialBarOption, boxplotOption, parallelOption, themeRiverOption, calendarHeatmapOption } from '../src/echarts';
describe('echarts new-type factories', () => {
  it('sunburst', () => { const o = sunburstOption([{name:'A',children:[{name:'a1',value:2}]}]); expect(o.series[0].type).toBe('sunburst'); });
  it('radialBar', () => { const o = radialBarOption(['A','B'], [3,5]); expect(o.series[0].type).toBe('bar'); expect(o.polar).toBeTruthy(); });
  it('boxplot precomputes 5-number summary', () => { const o = boxplotOption(['A'], [[1,2,3,4,5]]); expect(o.series[0].type).toBe('boxplot'); expect(o.series[0].data[0]).toHaveLength(5); });
  it('parallel', () => { const o = parallelOption(['x','y','z'], [{name:'r1',values:[1,2,3]}]); expect(o.series[0].type).toBe('parallel'); expect(o.parallelAxis).toHaveLength(3); });
  it('themeRiver', () => { const o = themeRiverOption([['2024-01',5,'A']]); expect(o.series[0].type).toBe('themeRiver'); });
  it('calendarHeatmap', () => { const o = calendarHeatmapOption(2024, [['2024-01-01',5]]); expect(o.series[0].type).toBe('heatmap'); expect(o.calendar).toBeTruthy(); });
});
