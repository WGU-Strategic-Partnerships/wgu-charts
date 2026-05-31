import type { CorpusEntry } from '../types';

export const tables: CorpusEntry[] = [
  {
    id: 'tables-score-table-banded',
    title: 'Score table (banded)',
    family: 'tables',
    engine: 'render-model',
    chartType: 'scoreTable',
    whenToUse: 'Present partner performance metrics in a ranked table where the score column is colour-coded by band — red/amber/green — for instant status reading.',
    description: 'Tabular layout with banded cell backgrounds applied to a nominated score column; bands are configured as {min, color} thresholds that match the WGU MBR palette.',
    tags: ['table', 'banded', 'red-amber-green', 'scorecard', 'ranking'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['banded'],
    sampleData: {
      columns: [
        { key: 'partner', label: 'Partner' },
        { key: 'enrolled', label: 'Enrolled', align: 'right' },
        { key: 'completed', label: 'Completed', align: 'right' },
        { key: 'score', label: 'Health Score', align: 'right' },
      ],
      rows: [
        { partner: 'Boeing', enrolled: 1420, completed: 1102, score: 94 },
        { partner: 'Amazon', enrolled: 1180, completed: 892, score: 88 },
        { partner: 'IHC', enrolled: 960, completed: 694, score: 76 },
        { partner: 'Salt Lake CC', enrolled: 720, completed: 476, score: 63 },
        { partner: 'Utah DOE', enrolled: 540, completed: 298, score: 47 },
        { partner: 'Acme Corp', enrolled: 310, completed: 108, score: 28 },
      ],
      bandColumn: 'score',
      bands: [
        { min: 0, color: 'rgba(229,72,77,0.18)' },
        { min: 50, color: 'rgba(245,166,35,0.18)' },
        { min: 75, color: 'rgba(151,225,82,0.22)' },
      ],
    },
    spec: {
      engine: 'render-model',
      type: 'scoreTable',
      data: {
        columns: [
          { key: 'partner', label: 'Partner' },
          { key: 'enrolled', label: 'Enrolled', align: 'right' },
          { key: 'completed', label: 'Completed', align: 'right' },
          { key: 'score', label: 'Health Score', align: 'right' },
        ],
        rows: [
          { partner: 'Boeing', enrolled: 1420, completed: 1102, score: 94 },
          { partner: 'Amazon', enrolled: 1180, completed: 892, score: 88 },
          { partner: 'IHC', enrolled: 960, completed: 694, score: 76 },
          { partner: 'Salt Lake CC', enrolled: 720, completed: 476, score: 63 },
          { partner: 'Utah DOE', enrolled: 540, completed: 298, score: 47 },
          { partner: 'Acme Corp', enrolled: 310, completed: 108, score: 28 },
        ],
        bandColumn: 'score',
        bands: [
          { min: 0, color: 'rgba(229,72,77,0.18)' },
          { min: 50, color: 'rgba(245,166,35,0.18)' },
          { min: 75, color: 'rgba(151,225,82,0.22)' },
        ],
      },
    },
  },
];
