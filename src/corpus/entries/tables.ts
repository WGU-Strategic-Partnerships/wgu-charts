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
  {
    id: 'tables-data-table',
    title: 'Data table (plain)',
    family: 'tables',
    engine: 'render-model',
    chartType: 'scoreTable',
    whenToUse: 'Present structured partner or program data in a clean, unstyled tabular layout when no banding or color-coding is needed — pure data readability.',
    description: 'Plain scoreTable with no bandColumn or bands; columns and rows render without cell-background color, yielding a minimal WGU-branded data table.',
    tags: ['table', 'plain', 'data', 'structured'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['table'],
    sampleData: {
      columns: [
        { key: 'program', label: 'Program' },
        { key: 'college', label: 'College' },
        { key: 'enrolled', label: 'Enrolled', align: 'right' },
        { key: 'completionRate', label: 'Completion %', align: 'right' },
      ],
      rows: [
        { program: 'MBA', college: 'Business', enrolled: 4200, completionRate: '78%' },
        { program: 'BSCS', college: 'Technology', enrolled: 3800, completionRate: '74%' },
        { program: 'BSN', college: 'Health', enrolled: 3100, completionRate: '82%' },
        { program: 'TEP', college: 'Education', enrolled: 2400, completionRate: '80%' },
        { program: 'BSIT', college: 'Technology', enrolled: 1950, completionRate: '72%' },
      ],
    },
    spec: {
      engine: 'render-model',
      type: 'scoreTable',
      data: {
        columns: [
          { key: 'program', label: 'Program' },
          { key: 'college', label: 'College' },
          { key: 'enrolled', label: 'Enrolled', align: 'right' },
          { key: 'completionRate', label: 'Completion %', align: 'right' },
        ],
        rows: [
          { program: 'MBA', college: 'Business', enrolled: 4200, completionRate: '78%' },
          { program: 'BSCS', college: 'Technology', enrolled: 3800, completionRate: '74%' },
          { program: 'BSN', college: 'Health', enrolled: 3100, completionRate: '82%' },
          { program: 'TEP', college: 'Education', enrolled: 2400, completionRate: '80%' },
          { program: 'BSIT', college: 'Technology', enrolled: 1950, completionRate: '72%' },
        ],
      },
    },
  },
];
