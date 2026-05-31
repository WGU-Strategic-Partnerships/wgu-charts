/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { createWGUCharts } from '../adapters/vanilla/index';

class FakeChart {
  static registered: any[] = [];
  static register(...p: any[]) { FakeChart.registered.push(...p); }
  config: any; data: any; updated = 0; destroyed = false;
  constructor(_el: any, config: any) { this.config = config; this.data = config.data; }
  update() { this.updated++; }
  destroy() { this.destroyed = true; }
}

describe('vanilla adapter', () => {
  it('registers wgu plugins with the provided Chart constructor', () => {
    FakeChart.registered = [];
    createWGUCharts(FakeChart as any);
    expect(FakeChart.registered.length).toBeGreaterThan(0);
  });
  it('throws if a string target is not found in document', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    expect(() => WGUCharts.mount('#ghost', { type: 'bar', data: [] })).toThrow(/not found/);
  });
  it('mounts a bar chart from data and returns a handle', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    const el = {} as any;
    const h = WGUCharts.mount(el, { type: 'bar', data: [{ label: 'A', count: 5 }] });
    expect(h.chart.config.type).toBe('bar');
    expect(h.chart.config.data.datasets[0].data).toEqual([5]);
  });
  it('update() swaps data in place and calls chart.update', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    const h = WGUCharts.mount({} as any, { type: 'bar', data: [{ label: 'A', count: 5 }] });
    h.update([{ label: 'A', count: 9 }, { label: 'B', count: 1 }]);
    expect(h.chart.data.datasets[0].data).toEqual([9, 1]);
    expect(h.chart.updated).toBe(1);
  });
  it('destroy() tears down the chart', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    const h = WGUCharts.mount({} as any, { type: 'bar', data: [{ label: 'A', count: 5 }] });
    h.destroy();
    expect(h.chart.destroyed).toBe(true);
  });
  it('throws a clear error for unknown type', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    expect(() => WGUCharts.mount({} as any, { type: 'nope' as any, data: [] })).toThrow(/unknown chart type/i);
  });
  it('mounts a render-model (gauge) by injecting HTML into the element', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    const el = document.createElement('div');
    const h = WGUCharts.mount(el, { type: 'gauge', data: { label: 'Conv', percent: 90 } });
    expect(h.chart).toBeNull();
    expect(el.innerHTML).toContain('Conv');
    expect(el.innerHTML).toContain('pp-gauge');
    h.destroy();
    expect(el.innerHTML).toBe('');
  });
  it('injects render-model CSS once into the document head', () => {
    const WGUCharts = createWGUCharts(FakeChart as any);
    WGUCharts.mount(document.createElement('div'), { type: 'funnel', data: [{ label: 'A', value: 5 }] });
    WGUCharts.mount(document.createElement('div'), { type: 'funnel', data: [{ label: 'B', value: 3 }] });
    expect(document.querySelectorAll('#wgu-funnel').length).toBe(1);
  });
  it('fires onClick with the hit datum when the canvas is clicked', () => {
    class ClickChart extends FakeChart {
      canvas = document.createElement('canvas');
      getElementsAtEventForMode(){ return [{datasetIndex:0,index:0}]; }
    }
    const WGUCharts = createWGUCharts(ClickChart as any);
    const hits:any[] = [];
    const h = WGUCharts.mount(document.createElement('div'), { type:'bar', data:[{label:'A',count:5}], onClick:(hit)=>hits.push(hit) });
    h.chart.canvas.dispatchEvent(new Event('click'));
    expect(hits.length).toBe(1);
    expect(hits[0].label).toBe('A');
  });
});
