import type { CorpusEntry, Family } from './types';
import { magnitude } from './entries/magnitude';
import { changeOverTime } from './entries/change-over-time';
import { partToWhole } from './entries/part-to-whole';
import { ranking } from './entries/ranking';
import { distribution } from './entries/distribution';
import { correlation } from './entries/correlation';
import { deviation } from './entries/deviation';
import { flow } from './entries/flow';
import { spatial } from './entries/spatial';
import { kpi } from './entries/kpi';
import { tables } from './entries/tables';

export * from './types';
export * from './families';
export { resolveSpec } from './resolveSpec';
export type { Resolved } from './resolveSpec';

export const corpus: CorpusEntry[] = [
  ...magnitude, ...changeOverTime, ...partToWhole, ...ranking, ...distribution,
  ...correlation, ...deviation, ...flow, ...spatial, ...kpi, ...tables
];
export const byFamily = (f: Family) => corpus.filter(e => e.family === f);
export const byEngine = (eng: CorpusEntry['engine']) => corpus.filter(e => e.engine === eng);
export const byFeature = (feat: string) => corpus.filter(e => e.features.includes(feat));
export function search(q: string): CorpusEntry[] {
  const s = q.toLowerCase();
  return corpus.filter(e =>
    e.title.toLowerCase().includes(s) || e.chartType.toLowerCase().includes(s) ||
    e.description.toLowerCase().includes(s) || e.whenToUse.toLowerCase().includes(s) ||
    e.tags.some(t => t.toLowerCase().includes(s)));
}
