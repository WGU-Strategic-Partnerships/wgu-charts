import { describe, it, expect } from 'vitest';
import { lineChart } from '../src/charts/line';
const labels = ['W1', 'W2', 'W3'];
const series = [{ label: 'Sessions', data: [10, 20, 15] }, { label: 'People', data: [5, 8, 9] }];
describe('lineChart', () => {
  it('builds a line config with cloned arrays per series', () => {
    const cfg = lineChart(labels, series);
    expect(cfg.type).toBe('line');
    expect(cfg.data.labels).toEqual(labels);
    expect(cfg.data.datasets).toHaveLength(2);
    expect(cfg.data.datasets[0].data).toEqual([10, 20, 15]);
    expect(cfg.data.datasets[0].data).not.toBe(series[0].data);
  });
  it('assigns sequence colors per series', () => {
    const cfg = lineChart(labels, series);
    expect(cfg.data.datasets[0].borderColor).toBe('#0070F0');
    expect(cfg.data.datasets[1].borderColor).toBe('#46B1EF');
  });
  it('area:false disables fill', () => {
    expect(lineChart(labels, series, { area: false }).data.datasets[0].fill).toBe(false);
  });
  it('stepped option propagates', () => {
    expect(lineChart(labels, series, { stepped: true }).data.datasets[0].stepped).toBe(true);
  });
});
