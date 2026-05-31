import { describe, it, expect } from 'vitest';
import { funnelModel, renderFunnel } from '../src/render/funnel';
const stages = [
  { stage: '01', label: 'Intenders', value: 250, connector: '91%' },
  { stage: '02', label: 'Applicants', value: 227 }
];
describe('funnel', () => {
  it('model computes width % relative to max, with a floor', () => {
    const m = funnelModel(stages);
    expect(m.rows[0].value).toBe(250);
    expect(m.rows[0].widthPct).toBeCloseTo(100, 0);
    expect(m.rows[1].widthPct).toBeGreaterThanOrEqual(8);
  });
  it('honors explicit widthPct', () => {
    expect(funnelModel([{ label: 'A', value: 5, widthPct: 40 }]).rows[0].widthPct).toBe(40);
  });
  it('render produces stage labels, values, and a connector', () => {
    const html = renderFunnel(funnelModel(stages));
    expect(html).toContain('Intenders'); expect(html).toContain('250');
    expect(html).toContain('91%'); expect(html).toContain('pp-funnel');
  });
  it('escapes HTML in labels', () => {
    const html = renderFunnel(funnelModel([{ label: '<x>', value: 1 }]));
    expect(html).toContain('&lt;x&gt;'); expect(html).not.toContain('<x>');
  });
});
