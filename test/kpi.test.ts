import { describe, it, expect } from 'vitest';
import { kpiModel, renderKpi } from '../src/render/kpi';
describe('kpi', () => {
  it('builds a sparkline polyline from >=2 trend points', () => {
    const m = kpiModel({ label: 'Enrolled', value: '227', trend: [10, 12, 9, 15] });
    expect(m.hasSparkline).toBe(true);
    expect(m.sparklinePoints.split(' ').length).toBe(4);
  });
  it('no sparkline for <2 points', () => {
    expect(kpiModel({ label: 'x', value: '1', trend: [3] }).hasSparkline).toBe(false);
  });
  it('render shows label, value, delta, sub', () => {
    const html = renderKpi(kpiModel({ label: 'Enrolled', value: '227', sub: 'this term', delta: '+9%', deltaUp: true, trend: [1,2,3] }));
    expect(html).toContain('Enrolled'); expect(html).toContain('227');
    expect(html).toContain('+9%'); expect(html).toContain('this term');
    expect(html).toContain('pp-kpi__delta--up');
  });
});
