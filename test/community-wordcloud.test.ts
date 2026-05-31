import { describe, it, expect } from 'vitest';
import { wordCloudChart } from '../src/charts/community/word-cloud';

describe('wordCloudChart', () => {
  it('maps words to labels and weights to data', () => {
    const cfg = wordCloudChart([{ text: 'WGU', weight: 40 }, { text: 'Owls', weight: 24 }]);
    expect(cfg.type).toBe('wordCloud');
    expect(cfg.data.labels).toEqual(['WGU', 'Owls']);
    expect(cfg.data.datasets[0].data).toEqual([40, 24]);
    expect(Array.isArray(cfg.data.datasets[0].color)).toBe(true);
  });

  it('color array length matches word count', () => {
    const words = [{ text: 'A', weight: 1 }, { text: 'B', weight: 2 }, { text: 'C', weight: 3 }];
    const cfg = wordCloudChart(words);
    expect(cfg.data.datasets[0].color).toHaveLength(3);
  });

  it('colors cycle through sequence palette', () => {
    // Build more words than sequence entries to verify modulo cycling
    const words = Array.from({ length: 8 }, (_, i) => ({ text: `W${i}`, weight: i + 1 }));
    const cfg = wordCloudChart(words);
    const colors = cfg.data.datasets[0].color;
    expect(colors[0]).toBe(colors[6]); // sequence has 6 entries, so index 0 === index 6
  });

  it('non-numeric weight falls back to 0', () => {
    const cfg = wordCloudChart([{ text: 'Bad', weight: NaN }]);
    expect(cfg.data.datasets[0].data[0]).toBe(0);
  });

  it('responsive and no-aspect-ratio flags are set', () => {
    const cfg = wordCloudChart([]);
    expect(cfg.options.responsive).toBe(true);
    expect(cfg.options.maintainAspectRatio).toBe(false);
  });

  it('tooltip is disabled and legend hidden', () => {
    const cfg = wordCloudChart([]);
    expect(cfg.options.plugins.tooltip.enabled).toBe(false);
    expect(cfg.options.plugins.legend.display).toBe(false);
  });

  it('uses empty string label when none provided', () => {
    const cfg = wordCloudChart([{ text: 'Hi', weight: 5 }]);
    expect(cfg.data.datasets[0].label).toBe('');
  });
});
