import { describe, it, expect } from 'vitest';
import { gaugeModel, renderGauge } from '../src/render/gauge';
describe('gauge', () => {
  it('computes a stroke-dasharray proportional to percent', () => {
    const m = gaugeModel({ label: 'Conversion', percent: 90.8 });
    const [filled] = m.dashArray.split(' ').map(Number);
    const CIRC = 2 * Math.PI * 42;
    expect(filled).toBeCloseTo((90.8 / 100) * CIRC, 1);
    expect(m.displayPct).toBe('90.8%');
  });
  it('clamps percent into 0..100', () => {
    expect(gaugeModel({ label: 'x', percent: 130 }).clampPct).toBe(100);
    expect(gaugeModel({ label: 'x', percent: -5 }).clampPct).toBe(0);
  });
  it('render includes label, percent text, and an arc', () => {
    const html = renderGauge(gaugeModel({ label: 'Conversion', percent: 90.8, sub: 'CVS' }));
    expect(html).toContain('Conversion'); expect(html).toContain('90.8%');
    expect(html).toContain('pp-gauge__arc'); expect(html).toContain('CVS');
  });
});
