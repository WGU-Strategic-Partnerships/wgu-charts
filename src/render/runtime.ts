const RENDER_MODEL_TYPES = new Set(['funnel', 'gauge', 'kpi', 'choropleth', 'scoreTable']);
export function isRenderModelType(t: string): boolean { return RENDER_MODEL_TYPES.has(t); }

export function ensureStyle(doc: Document, styleId: string, css: string): void {
  if (!doc || doc.getElementById(styleId)) return;
  const el = doc.createElement('style');
  el.id = styleId;
  el.textContent = css;
  doc.head.appendChild(el);
}

export function escapeHtml(v: unknown): string {
  return String(v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
