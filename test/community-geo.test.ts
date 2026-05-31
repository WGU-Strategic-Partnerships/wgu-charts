import { describe, it, expect } from 'vitest';
import { geoBubbleChart } from '../src/charts/community/geo-bubble';

describe('geoBubbleChart', () => {
  it('builds a bubbleMap config; points cloned; outline + projection passed through', () => {
    const outline = { type: 'FeatureCollection', features: [] };
    const points = [{ name: 'TX', x: -99, y: 31, value: 120 }];
    const cfg = geoBubbleChart({ outline, points });
    expect(cfg.type).toBe('bubbleMap');
    expect(cfg.data.labels).toEqual(['TX']);
    expect(cfg.data.datasets[0].data).toEqual(points);
    expect(cfg.data.datasets[0].data).not.toBe(points);
    expect(cfg.data.datasets[0].outline).toBe(outline);
    expect(cfg.options.scales.projection.projection).toBe('albersUsa');
  });
});
