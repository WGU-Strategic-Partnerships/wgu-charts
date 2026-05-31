import { describe, it, expect } from 'vitest';
import { candlestickChart } from '../src/charts/community/candlestick';

describe('candlestickChart', () => {
  it('builds a candlestick config (category x), data cloned, lime up-color', () => {
    const data = [{ x: 'Mon', o: 10, h: 14, l: 9, c: 13 }, { x: 'Tue', o: 13, h: 15, l: 11, c: 11 }];
    const cfg = candlestickChart(data);
    expect(cfg.type).toBe('candlestick');
    expect(cfg.data.datasets[0].data).toEqual(data);
    expect(cfg.data.datasets[0].data).not.toBe(data);
    expect(cfg.data.datasets[0].color.up).toBe('#97E152');
    expect(cfg.options.scales.x.type).toBe('category');
    expect(cfg.data.labels).toEqual(['Mon', 'Tue']);
    expect(cfg.options.parsing).toBeUndefined();
  });
});
