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
  it('escapes caller-supplied label and color', () => {
    const html = renderGauge(gaugeModel({ label: '<x>', percent: 50, color: '"><script>alert(1)</script>' }));
    expect(html).toContain('&lt;x&gt;');
    expect(html).not.toContain('<script>');
  });

  // Half-circle variant tests
  it('half variant computes t, pointer angle, and 3 zones', () => {
    const m = gaugeModel({ label:'% to Target', variant:'half', value:110, min:0, max:150, thresholds:[80,99] });
    expect(m.variant).toBe('half');
    expect(m.t).toBeCloseTo(110/150, 3);
    expect(m.pointerDeg).toBeCloseTo(-90 + (110/150)*180, 1);
    expect(m.zones).toHaveLength(3);
  });
  it('half variant clamps t to [0,1]', () => {
    expect(gaugeModel({ label:'x', variant:'half', value:999, min:0, max:150 }).t).toBe(1);
    expect(gaugeModel({ label:'x', variant:'half', value:-5, min:0, max:150 }).t).toBe(0);
  });
  it('half variant honors zoneColors direction', () => {
    const m = gaugeModel({ label:'Days', variant:'half', value:20, min:0, max:100, thresholds:[30,60], zoneColors:['#97E152','#F5A623','#E5484D'] });
    expect(m.zones[0].color).toBe('#97E152');
  });
  it('renders a half gauge with pointer, zones, value, label', () => {
    const html = renderGauge(gaugeModel({ label:'% to Target', variant:'half', value:110, min:0, max:150, thresholds:[80,99], unit:'%' }));
    expect(html).toContain('110%'); expect(html).toContain('% to Target');
    expect(html).toMatch(/polygon|polyline|<line/);
  });
  it('escapes caller text in half gauge', () => {
    const html = renderGauge(gaugeModel({ label:'<x>', variant:'half', value:1, min:0, max:10 }));
    expect(html).not.toContain('<x>'); expect(html).toContain('&lt;x&gt;');
  });
});
