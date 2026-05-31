export interface Hit { datasetIndex: number; index: number; label: any; value: any; datum: any; }

export function hitTest(chart: any, evt: any): Hit | null {
  if (!chart || typeof chart.getElementsAtEventForMode !== 'function') return null;
  const els = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
  if (!els || !els.length) return null;
  const { datasetIndex, index } = els[0];
  const ds = chart.data?.datasets?.[datasetIndex];
  const datum = ds?.data ? ds.data[index] : undefined;
  const label = chart.data?.labels ? chart.data.labels[index] : undefined;
  const value = (datum && typeof datum === 'object') ? (datum.y ?? datum.v ?? datum.value ?? datum) : datum;
  return { datasetIndex, index, label, value, datum };
}

export type FilterState = Record<string, Array<string | number>>;

export function applyFilters<T extends Record<string, any>>(rows: T[], state: FilterState): T[] {
  const src = Array.isArray(rows) ? rows : [];
  const dims = Object.keys(state || {}).filter((d) => Array.isArray(state[d]) && state[d].length);
  if (!dims.length) return [...src];
  return src.filter((r) => dims.every((d) => state[d].includes(r[d])));
}

export function deriveFilterOptions<T extends Record<string, any>>(rows: T[], dim: string): { value: any; label: string }[] {
  const seen = new Set<any>(); const out: { value: any; label: string }[] = [];
  (Array.isArray(rows) ? rows : []).forEach((r) => {
    const v = r[dim];
    if (!seen.has(v)) { seen.add(v); out.push({ value: v, label: String(v) }); }
  });
  return out;
}

export interface DrillSpecInput { levels: string[]; }
export function drillSpec(spec: DrillSpecInput) {
  const levels = spec && Array.isArray(spec.levels) ? spec.levels : [];
  const clamp = (i: number) => Math.max(0, Math.min(levels.length - 1, i));
  return {
    levels,
    levelAt: (i: number) => levels[clamp(i)],
    next: (i: number) => (i < levels.length - 1 ? i + 1 : i),
    prev: (i: number) => (i > 0 ? i - 1 : 0)
  };
}

export function applyData(chart: any, next: { labels?: any[]; datasets: any[] }): void {
  if (!chart) return;
  if (next.labels !== undefined) chart.data.labels = next.labels;
  chart.data.datasets = next.datasets;
  chart.update();
}
