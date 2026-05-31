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
});
