import { describe, it, expect } from 'vitest';
import { treemapChart } from '../src/charts/community/treemap';

const data = [{ label: 'Engineering', value: 400 }, { label: 'Business', value: 300 }, { label: 'Nursing', value: 200 }];

describe('treemapChart', () => {
  it('builds a treemap config with correct type', () => {
    const cfg = treemapChart(data);
    expect(cfg.type).toBe('treemap');
  });

  it('tree array is deep-equal to input but not the same reference', () => {
    const cfg = treemapChart(data);
    expect(cfg.data.datasets[0].tree).toEqual(data);
    expect(cfg.data.datasets[0].tree).not.toBe(data);
  });

  it('key is set to "value"', () => {
    const cfg = treemapChart(data);
    expect(cfg.data.datasets[0].key).toBe('value');
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = treemapChart(data);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('legend is hidden', () => {
    const cfg = treemapChart(data);
    expect(cfg.options.plugins.legend.display).toBe(false);
  });

  it('backgroundColor is a function cycling through sequence colors', () => {
    const cfg = treemapChart(data);
    const fn = cfg.data.datasets[0].backgroundColor;
    expect(typeof fn).toBe('function');
    // index 0 -> first sequence color
    const color0 = fn({ dataIndex: 0 });
    expect(color0).toBe('#0070F0');
  });
});
