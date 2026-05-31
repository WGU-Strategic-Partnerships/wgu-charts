import { describe, it, expect } from 'vitest';
import { groupedBarChart } from '../src/charts/grouped-bar';

const labels = ['Q1', 'Q2'];
const series = [{ label: 'New', data: [10, 14] }, { label: 'Returning', data: [6, 9] }];

describe('groupedBarChart', () => {
  it('builds one dataset per series with cloned, sequence-colored data', () => {
    const cfg = groupedBarChart(labels, series);
    expect(cfg.type).toBe('bar');
    expect(cfg.data.datasets).toHaveLength(2);
    expect(cfg.data.datasets[0].data).toEqual([10, 14]);
    expect(cfg.data.datasets[0].data).not.toBe(series[0].data);
    expect(cfg.data.datasets[0].backgroundColor).toBe('#0070F0');
    expect(cfg.data.datasets[1].backgroundColor).toBe('#46B1EF');
  });
  it('stacked:true sets both scales stacked', () => {
    const cfg = groupedBarChart(labels, series, { stacked: true });
    expect((cfg.options!.scales!.x as any).stacked).toBe(true);
    expect((cfg.options!.scales!.y as any).stacked).toBe(true);
  });
  it('grouped (default) is not stacked', () => {
    expect((groupedBarChart(labels, series).options!.scales!.x as any).stacked).toBeFalsy();
  });
});
