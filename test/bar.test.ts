import { describe, it, expect } from 'vitest';
import { barChart } from '../src/charts/bar';
const data = [{ label: 'MBA', count: 120 }, { label: 'BSN', count: 80 }];
describe('barChart', () => {
  it('builds a bar config with cloned label/data arrays', () => {
    const cfg = barChart(data);
    expect(cfg.type).toBe('bar');
    expect(cfg.data.labels).toEqual(['MBA', 'BSN']);
    expect(cfg.data.datasets[0].data).toEqual([120, 80]);
  });
  it('defaults to horizontal (indexAxis y)', () => {
    expect(barChart(data).options!.indexAxis).toBe('y');
  });
  it('vertical orientation omits indexAxis y', () => {
    expect(barChart(data, { orientation: 'vertical' }).options!.indexAxis).toBe('x');
  });
  it('leadColor colors only the first bar', () => {
    const bg = barChart(data, { leadColor: '#97E152' }).data.datasets[0].backgroundColor as string[];
    expect(bg[0]).toBe('#97E152');
    expect(bg[1]).toBe('#0070F0');
  });
  it('stacked sets both scales to stacked', () => {
    const cfg = barChart(data, { stacked: true });
    expect((cfg.options!.scales!.x as any).stacked).toBe(true);
    expect((cfg.options!.scales!.y as any).stacked).toBe(true);
  });
  it('backgroundColor is a function when no leadColor', () => {
    const bg = barChart(data).data.datasets[0].backgroundColor;
    expect(typeof bg).toBe('function');
  });
  it('handles all-zero data without NaN in percent tooltip', () => {
    const cfg = barChart([{ label: 'A', count: 0 }]);
    const cb = (cfg.options!.plugins!.tooltip as any).callbacks.afterLabel;
    expect(cb({ parsed: { x: 0 } })).toBe(' 0% of total');
  });
});
