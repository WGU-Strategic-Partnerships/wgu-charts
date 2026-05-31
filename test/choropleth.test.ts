import { describe, it, expect } from 'vitest';
import { choroplethModel, renderChoropleth } from '../src/render/choropleth';
const data = [{ state: 'TX', count: 120 }, { state: 'CA', count: 80 }, { state: 'TX', count: 30 }];
describe('choropleth', () => {
  it('aggregates by state and resolves full names, sorted desc', () => {
    const m = choroplethModel(data);
    expect(m.byState[0]).toMatchObject({ state: 'TX', name: 'Texas', count: 150 });
    expect(m.byState[1]).toMatchObject({ state: 'CA', name: 'California', count: 80 });
  });
  it('assigns a heat color per state and uses the bundled viewBox', () => {
    const m = choroplethModel(data);
    expect(m.viewBox).toBe('0 0 959 593');
    const tx = m.shapes.find(s => s.state === 'TX')!;
    expect(tx.fill).toMatch(/^rgb\(/);
    expect(tx.d.length).toBeGreaterThan(10);
  });
  it('render produces an svg with state paths and a location list', () => {
    const html = renderChoropleth(choroplethModel(data));
    expect(html).toContain('<svg');
    expect(html).toContain('viewBox="0 0 959 593"');
    expect(html).toContain('Texas');
    expect(html).toContain('pp-choro');
  });
  it('escapes any caller text rendered into the list', () => {
    const html = renderChoropleth(choroplethModel([{ state: 'TX', count: 1 }]));
    expect(html).not.toContain('<script>');
  });
});
