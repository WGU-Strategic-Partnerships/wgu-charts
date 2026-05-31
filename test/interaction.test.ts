import { describe, it, expect, vi } from 'vitest';
import { hitTest, applyFilters, deriveFilterOptions, drillSpec, applyData } from '../src/interaction';
describe('interaction helpers', () => {
  it('hitTest returns the nearest datum or null', () => {
    const chart:any = { getElementsAtEventForMode: () => [{ datasetIndex:0, index:1 }], data:{ labels:['A','B'], datasets:[{ data:[10,20] }] } };
    expect(hitTest(chart, {})).toEqual({ datasetIndex:0, index:1, label:'B', value:20, datum:20 });
    expect(hitTest({ getElementsAtEventForMode: () => [], data:{datasets:[]} } as any, {})).toBeNull();
    expect(hitTest(null as any, {})).toBeNull();
  });
  it('hitTest reads object data (y / v)', () => {
    const chart:any = { getElementsAtEventForMode: () => [{datasetIndex:0,index:0}], data:{ labels:['x'], datasets:[{ data:[{x:1,y:42}] }] } };
    expect(hitTest(chart, {}).value).toBe(42);
  });
  it('applyFilters keeps rows matching every active dim; empty passes through', () => {
    const rows=[{program:'MBA',region:'W'},{program:'BSN',region:'E'},{program:'MBA',region:'E'}];
    expect(applyFilters(rows, { program:['MBA'] })).toHaveLength(2);
    expect(applyFilters(rows, { program:['MBA'], region:['E'] })).toEqual([{program:'MBA',region:'E'}]);
    expect(applyFilters(rows, {})).toHaveLength(3);
    expect(applyFilters(rows, { program:[] })).toHaveLength(3);
  });
  it('deriveFilterOptions returns unique values first-seen', () => {
    expect(deriveFilterOptions([{p:'MBA'},{p:'BSN'},{p:'MBA'}],'p')).toEqual([{value:'MBA',label:'MBA'},{value:'BSN',label:'BSN'}]);
  });
  it('drillSpec navigates with clamping', () => {
    const d = drillSpec({ levels:['region','state','campus'] });
    expect(d.next(0)).toBe(1); expect(d.next(2)).toBe(2); expect(d.prev(0)).toBe(0); expect(d.levelAt(1)).toBe('state');
  });
  it('applyData swaps in place + updates', () => {
    const chart:any = { data:{labels:['A'],datasets:[{data:[1]}]}, update: vi.fn() };
    applyData(chart, { labels:['A','B'], datasets:[{data:[1,2]}] });
    expect(chart.data.labels).toEqual(['A','B']); expect(chart.data.datasets[0].data).toEqual([1,2]); expect(chart.update).toHaveBeenCalledOnce();
  });
});
