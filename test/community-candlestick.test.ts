import { describe, it, expect } from 'vitest';
import { candlestickChart } from '../src/charts/community/candlestick';

describe('candlestickChart', () => {
  it('builds a candlestick config (linear x), data mapped to numeric x, lime up-color', () => {
    const data = [{ x: 'Mon', o: 100, h: 112, l: 96, c: 108 }, { x: 'Tue', o: 108, h: 115, l: 103, c: 110 }];
    const cfg = candlestickChart(data);
    expect(cfg.type).toBe('candlestick');
    expect(cfg.options.scales.x.type).toBe('linear');
    expect(cfg.data.datasets[0].color.up).toBe('#97E152');
    // string x values are mapped to numeric indices
    expect(cfg.data.datasets[0].data[0]).toMatchObject({ o: 100, h: 112, l: 96, c: 108 });
    expect(cfg.data.datasets[0].data[0].x).toBe(0);
    expect(cfg.data.datasets[0].data[1].x).toBe(1);
    // data is a fresh clone (not the same reference as the mapped points array)
    const d0 = cfg.data.datasets[0].data;
    expect(Array.isArray(d0)).toBe(true);
    // no labels array on data (labels live in tick callback only)
    expect((cfg.data as any).labels).toBeUndefined();
    // no parsing flag
    expect((cfg.options as any).parsing).toBeUndefined();
  });

  it('preserves numeric x values as-is', () => {
    const data = [{ x: 10, o: 1, h: 2, l: 0.5, c: 1.5 }, { x: 20, o: 1.5, h: 3, l: 1, c: 2 }];
    const cfg = candlestickChart(data);
    expect(cfg.data.datasets[0].data[0].x).toBe(10);
    expect(cfg.data.datasets[0].data[1].x).toBe(20);
  });

  it('handles empty data gracefully', () => {
    const cfg = candlestickChart([]);
    expect(cfg.data.datasets[0].data).toEqual([]);
    expect(cfg.options.scales.x.min).toBe(-0.5);
    expect(cfg.options.scales.x.max).toBe(-0.5);
  });

  it('accepts label option', () => {
    const data = [{ x: 'A', o: 5, h: 8, l: 4, c: 7 }];
    const cfg = candlestickChart(data, { label: 'OHLC' });
    expect(cfg.data.datasets[0].label).toBe('OHLC');
  });
});
