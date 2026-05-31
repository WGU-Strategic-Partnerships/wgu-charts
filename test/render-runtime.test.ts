import { describe, it, expect } from 'vitest';
import { ensureStyle, isRenderModelType, escapeHtml } from '../src/render/runtime';
describe('render runtime', () => {
  it('isRenderModelType recognizes the four render-model types', () => {
    ['funnel','gauge','kpi','choropleth'].forEach(t => expect(isRenderModelType(t)).toBe(true));
    ['bar','line','pie'].forEach(t => expect(isRenderModelType(t)).toBe(false));
  });
  it('escapeHtml neutralizes angle brackets and ampersand', () => {
    expect(escapeHtml('<b>&"x"')).toBe('&lt;b&gt;&amp;&quot;x&quot;');
    expect(escapeHtml(42 as any)).toBe('42');
  });
  it('ensureStyle injects a style tag once per id', () => {
    const head: any[] = [];
    const fakeDoc: any = {
      getElementById: (id: string) => head.find(s => s.id === id) || null,
      createElement: () => ({ id: '', textContent: '' }),
      head: { appendChild: (el: any) => head.push(el) }
    };
    ensureStyle(fakeDoc, 'wgu-x', '.a{}');
    ensureStyle(fakeDoc, 'wgu-x', '.a{}');
    expect(head.length).toBe(1);
    expect(head[0].textContent).toBe('.a{}');
  });
});
