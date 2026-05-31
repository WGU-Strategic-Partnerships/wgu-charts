import { describe, it, expect } from 'vitest';
import { sankeyChart } from '../src/charts/community/sankey';

const data = [
  { from: 'Awareness', to: 'Interest', flow: 500 },
  { from: 'Interest', to: 'Application', flow: 200 },
  { from: 'Application', to: 'Enrolled', flow: 80 }
];

describe('sankeyChart', () => {
  it('builds a sankey config with correct type', () => {
    const cfg = sankeyChart(data);
    expect(cfg.type).toBe('sankey');
  });

  it('data array is deep-equal to input but not the same reference', () => {
    const cfg = sankeyChart(data);
    expect(cfg.data.datasets[0].data).toEqual(data);
    expect(cfg.data.datasets[0].data).not.toBe(data);
  });

  it('colorFrom is navy and colorTo is medium', () => {
    const cfg = sankeyChart(data);
    expect(cfg.data.datasets[0].colorFrom).toBe('#002855');
    expect(cfg.data.datasets[0].colorTo).toBe('#0070F0');
  });

  it('colorMode is gradient', () => {
    const cfg = sankeyChart(data);
    expect(cfg.data.datasets[0].colorMode).toBe('gradient');
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = sankeyChart(data);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('passes optional labels through to dataset', () => {
    const labels = { Awareness: 'Top of Funnel', Enrolled: 'New Student' };
    const cfg = sankeyChart(data, { labels });
    expect(cfg.data.datasets[0].labels).toEqual(labels);
  });
});
