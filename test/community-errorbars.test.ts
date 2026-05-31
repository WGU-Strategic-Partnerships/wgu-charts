import { describe, it, expect } from 'vitest';
import { errorBarChart } from '../src/charts/community/error-bars';

describe('errorBarChart', () => {
  it('builds a barWithErrorBars config, data cloned, carries y/yMin/yMax', () => {
    const data = [{ y: 10, yMin: 8, yMax: 12 }, { y: 14, yMin: 11, yMax: 16 }];
    const cfg = errorBarChart(['Q1', 'Q2'], data, { label: 'Avg' });
    expect(cfg.type).toBe('barWithErrorBars');
    expect(cfg.data.datasets[0].data).toEqual(data);
    expect(cfg.data.datasets[0].data).not.toBe(data);
    expect(cfg.data.datasets[0].data[0]).toMatchObject({ y: 10, yMin: 8, yMax: 12 });
  });

  it('labels array is cloned', () => {
    const labels = ['Q1', 'Q2'];
    const cfg = errorBarChart(labels, []);
    expect(cfg.data.labels).toEqual(labels);
    expect(cfg.data.labels).not.toBe(labels);
  });

  it('sets correct error bar styling', () => {
    const cfg = errorBarChart([], []);
    const ds = cfg.data.datasets[0];
    expect(ds.errorBarColor).toBe('#002855');
    expect(ds.errorBarWhiskerColor).toBe('#002855');
    expect(ds.errorBarLineWidth).toBe(1.5);
    expect(ds.errorBarWhiskerLineWidth).toBe(1.5);
    expect(ds.backgroundColor).toBe('#0070F0');
    expect(ds.borderSkipped).toBe(false);
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = errorBarChart([], []);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('legend is hidden', () => {
    const cfg = errorBarChart([], []);
    expect(cfg.options.plugins.legend.display).toBe(false);
  });

  it('uses empty string label when none provided', () => {
    const cfg = errorBarChart([], []);
    expect(cfg.data.datasets[0].label).toBe('');
  });
});
