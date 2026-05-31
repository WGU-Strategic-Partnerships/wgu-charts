import { describe, it, expect } from 'vitest';
import { heatmapChart } from '../src/charts/community/heatmap';

const data = [{ x: 'Mon', y: 'AM', v: 3 }, { x: 'Mon', y: 'PM', v: 8 }];

describe('heatmapChart', () => {
  it('builds a matrix config with cloned data and a scriptable bg', () => {
    const cfg = heatmapChart(data, { xLabels: ['Mon'], yLabels: ['AM', 'PM'] });
    expect(cfg.type).toBe('matrix');
    expect(cfg.data.datasets[0].data).toEqual(data);
    expect(cfg.data.datasets[0].data).not.toBe(data);
    expect(typeof cfg.data.datasets[0].backgroundColor).toBe('function');
  });

  it('category scales carry the provided labels', () => {
    const cfg = heatmapChart(data, { xLabels: ['Mon'], yLabels: ['AM', 'PM'] });
    expect(cfg.options.scales.x.type).toBe('category');
    expect(cfg.options.scales.y.labels).toEqual(['AM', 'PM']);
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = heatmapChart(data);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('tooltip title returns empty string', () => {
    const cfg = heatmapChart(data);
    const title = cfg.options.plugins.tooltip.callbacks.title();
    expect(title).toBe('');
  });

  it('backgroundColor produces an rgb string via heat()', () => {
    const cfg = heatmapChart(data, { max: 10 });
    const fn = cfg.data.datasets[0].backgroundColor;
    const result = fn({ raw: { v: 10 } });
    expect(result).toMatch(/^rgb\(/);
  });
});
