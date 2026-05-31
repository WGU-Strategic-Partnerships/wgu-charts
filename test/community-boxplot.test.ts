import { describe, it, expect } from 'vitest';
import { boxplotChart } from '../src/charts/community/boxplot';

describe('boxplotChart', () => {
  it('builds a boxplot config with labels + each inner array cloned', () => {
    const labels = ['A', 'B'];
    const data = [[1, 2, 3, 4], [2, 5, 7, 9]];
    const cfg = boxplotChart(labels, data, { label: 'Scores' });
    expect(cfg.type).toBe('boxplot');
    expect(cfg.data.labels).toEqual(['A', 'B']);
    expect(cfg.data.datasets[0].data[0]).toEqual([1, 2, 3, 4]);
    expect(cfg.data.datasets[0].data[0]).not.toBe(data[0]); // inner cloned
  });

  it('labels array is cloned', () => {
    const labels = ['X', 'Y'];
    const cfg = boxplotChart(labels, [[], []]);
    expect(cfg.data.labels).toEqual(labels);
    expect(cfg.data.labels).not.toBe(labels);
  });

  it('sets correct visual properties', () => {
    const cfg = boxplotChart(['A'], [[1, 2, 3]]);
    const ds = cfg.data.datasets[0];
    expect(ds.backgroundColor).toBe('#0070F066');
    expect(ds.borderColor).toBe('#002855');
    expect(ds.borderWidth).toBe(1.5);
    expect(ds.itemRadius).toBe(2);
    expect(ds.outlierBackgroundColor).toBe('#002855');
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = boxplotChart([], []);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('legend is hidden', () => {
    const cfg = boxplotChart([], []);
    expect(cfg.options.plugins.legend.display).toBe(false);
  });

  it('uses empty string label when none provided', () => {
    const cfg = boxplotChart(['A'], [[1]]);
    expect(cfg.data.datasets[0].label).toBe('');
  });
});
