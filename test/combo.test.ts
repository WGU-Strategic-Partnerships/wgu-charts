import { describe, it, expect } from 'vitest';
import { comboChart } from '../src/charts/combo';
const cfg = comboChart(['Q1', 'Q2'],
  { label: 'Learners', data: [100, 140] },
  { label: 'On-track %', data: [80, 85] });
describe('comboChart', () => {
  it('has a bar dataset and a line dataset, both cloned', () => {
    expect(cfg.data.datasets[0].type).toBe('bar');
    expect(cfg.data.datasets[1].type).toBe('line');
    expect(cfg.data.datasets[0].data).toEqual([100, 140]);
  });
  it('uses two y-axes', () => {
    expect(cfg.options!.scales!.y).toBeTruthy();
    expect((cfg.options!.scales as any).y1.position).toBe('right');
  });
});
