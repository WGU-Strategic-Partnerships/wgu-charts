import type { Family } from './types';
export interface FamilyMeta { id: Family; label: string; description: string; }
export const FAMILIES: FamilyMeta[] = [
  { id: 'magnitude', label: 'Magnitude', description: 'Compare a value across categories (size/count).' },
  { id: 'change-over-time', label: 'Change over time', description: 'Show how values move over a time series.' },
  { id: 'part-to-whole', label: 'Part-to-whole', description: 'Break a total into its component parts.' },
  { id: 'ranking', label: 'Ranking', description: 'Order matters more than absolute value.' },
  { id: 'distribution', label: 'Distribution', description: 'Show values and how often they occur.' },
  { id: 'correlation', label: 'Correlation', description: 'Relationship between two or more variables.' },
  { id: 'deviation', label: 'Deviation', description: 'Variation +/- from a reference (zero, target, average).' },
  { id: 'flow', label: 'Flow', description: 'How quantities move between states/nodes.' },
  { id: 'spatial', label: 'Spatial / Geo', description: 'A metric across geography.' },
  { id: 'kpi', label: 'KPI & status', description: 'A single value against a target or threshold.' },
  { id: 'tables', label: 'Tables', description: 'Tabular values, optionally banded/colored.' }
];
