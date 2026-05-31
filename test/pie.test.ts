import { describe, it, expect } from 'vitest';
import { doughnutChart, pieChart } from '../src/charts/pie';
const data = [{ label: 'A', count: 30, color: '#0070F0' }, { label: 'B', count: 70 }];
describe('pie/doughnut', () => {
  it('doughnut sets cutout 72% by default', () => {
    const cfg = doughnutChart(data);
    expect(cfg.type).toBe('doughnut');
    expect(cfg.options!.cutout).toBe('72%');
    expect(cfg.data.datasets[0].data).toEqual([30, 70]);
  });
  it('falls back to sequence color when datum has none', () => {
    const colors = doughnutChart(data).data.datasets[0].backgroundColor as string[];
    expect(colors[0]).toBe('#0070F0');
    expect(colors[1]).toBe('#46B1EF');
  });
  it('pieChart sets cutout 0', () => {
    expect(pieChart(data).options!.cutout).toBe(0);
  });
});
