import type { CorpusEntry } from '../types';

export const correlation: CorpusEntry[] = [
  {
    id: 'correlation-scatter',
    title: 'Scatter plot',
    family: 'correlation',
    engine: 'chartjs',
    chartType: 'scatter',
    whenToUse: 'Explore the relationship between two continuous variables — does enrollment predict completion rate?',
    description: 'Each point represents one observation; the horizontal axis encodes one variable and the vertical axis the other. Clusters, trends, and outliers emerge from the point cloud.',
    tags: ['correlation', 'bivariate', 'continuous', 'relationship'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['correlation'],
    sampleData: [
      {
        label: 'Business Programs',
        points: [
          { x: 320, y: 82 }, { x: 410, y: 85 }, { x: 275, y: 78 },
          { x: 500, y: 88 }, { x: 380, y: 84 }, { x: 220, y: 74 },
        ],
      },
      {
        label: 'Technology Programs',
        points: [
          { x: 290, y: 80 }, { x: 360, y: 83 }, { x: 430, y: 87 },
          { x: 190, y: 71 }, { x: 470, y: 90 }, { x: 310, y: 81 },
        ],
      },
    ],
    spec: {
      engine: 'chartjs',
      type: 'scatter',
      data: [
        {
          label: 'Business Programs',
          points: [
            { x: 320, y: 82 }, { x: 410, y: 85 }, { x: 275, y: 78 },
            { x: 500, y: 88 }, { x: 380, y: 84 }, { x: 220, y: 74 },
          ],
        },
        {
          label: 'Technology Programs',
          points: [
            { x: 290, y: 80 }, { x: 360, y: 83 }, { x: 430, y: 87 },
            { x: 190, y: 71 }, { x: 470, y: 90 }, { x: 310, y: 81 },
          ],
        },
      ],
    },
  },
  {
    id: 'correlation-bubble',
    title: 'Bubble chart',
    family: 'correlation',
    engine: 'chartjs',
    chartType: 'bubble',
    whenToUse: 'Visualise three quantitative dimensions simultaneously — e.g., enrollment (x), completion rate (y), and partner revenue (bubble size).',
    description: 'Extends a scatter plot with a third variable encoded in bubble radius; useful for surfacing high-enrollment, high-completion partners that also drive the most revenue.',
    tags: ['correlation', 'trivariate', 'size-encoding', 'continuous'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['correlation', 'size-encoding'],
    sampleData: [
      {
        label: 'Western Partners',
        points: [
          { x: 420, y: 86, r: 18 },
          { x: 310, y: 79, r: 12 },
          { x: 550, y: 91, r: 22 },
        ],
      },
      {
        label: 'Eastern Partners',
        points: [
          { x: 380, y: 83, r: 15 },
          { x: 280, y: 75, r: 10 },
          { x: 470, y: 88, r: 20 },
        ],
      },
    ],
    spec: {
      engine: 'chartjs',
      type: 'bubble',
      data: [
        {
          label: 'Western Partners',
          points: [
            { x: 420, y: 86, r: 18 },
            { x: 310, y: 79, r: 12 },
            { x: 550, y: 91, r: 22 },
          ],
        },
        {
          label: 'Eastern Partners',
          points: [
            { x: 380, y: 83, r: 15 },
            { x: 280, y: 75, r: 10 },
            { x: 470, y: 88, r: 20 },
          ],
        },
      ],
    },
  },
  {
    id: 'correlation-scatter-connected',
    title: 'Scatter — trajectory (time-ordered)',
    family: 'correlation',
    engine: 'chartjs',
    chartType: 'scatter',
    variant: 'time-ordered',
    whenToUse: 'Trace how the relationship between two variables evolves over time — each point is a period and the line shows direction of change.',
    description: 'A scatter whose points are time-ordered to read as a trajectory. (Connecting-line rendering for connected scatter arrives in Phase B.)',
    tags: ['correlation', 'time-series', 'trajectory', 'bivariate'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['correlation', 'time-ordered'],
    sampleData: [
      {
        label: 'MBA (FY20–FY25)',
        points: [
          { x: 210, y: 76 }, { x: 250, y: 79 }, { x: 295, y: 82 },
          { x: 320, y: 84 }, { x: 360, y: 86 }, { x: 410, y: 89 },
        ],
      },
    ],
    spec: {
      engine: 'chartjs',
      type: 'scatter',
      data: [
        {
          label: 'MBA (FY20–FY25)',
          points: [
            { x: 210, y: 76 }, { x: 250, y: 79 }, { x: 295, y: 82 },
            { x: 320, y: 84 }, { x: 360, y: 86 }, { x: 410, y: 89 },
          ],
        },
      ],
    },
  },
  {
    id: 'correlation-matrix-heatmap',
    title: 'Correlation matrix heatmap',
    family: 'correlation',
    secondaryFamilies: ['distribution'],
    engine: 'chartjs',
    chartType: 'matrix',
    whenToUse: 'Survey pairwise correlations across multiple program metrics simultaneously — discover which pairs of indicators move together.',
    description: 'A symmetric grid where cell colour encodes correlation strength; both axes list the same set of metrics. Built on the chartjs-chart-matrix plugin and follows the WGU heat ramp.',
    tags: ['correlation', 'heatmap', 'multivariate', 'matrix'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['heatmap', 'correlation'],
    sampleData: {
      data: [
        { x: 'Enrollment', y: 'Enrollment', v: 100 },
        { x: 'Enrollment', y: 'Completion', v: 72 },
        { x: 'Enrollment', y: 'Retention', v: 65 },
        { x: 'Completion', y: 'Enrollment', v: 72 },
        { x: 'Completion', y: 'Completion', v: 100 },
        { x: 'Completion', y: 'Retention', v: 81 },
        { x: 'Retention', y: 'Enrollment', v: 65 },
        { x: 'Retention', y: 'Completion', v: 81 },
        { x: 'Retention', y: 'Retention', v: 100 },
      ],
      opts: {
        xLabels: ['Enrollment', 'Completion', 'Retention'],
        yLabels: ['Enrollment', 'Completion', 'Retention'],
      },
    },
    spec: {
      engine: 'chartjs',
      type: 'matrix',
      data: [
        { x: 'Enrollment', y: 'Enrollment', v: 100 },
        { x: 'Enrollment', y: 'Completion', v: 72 },
        { x: 'Enrollment', y: 'Retention', v: 65 },
        { x: 'Completion', y: 'Enrollment', v: 72 },
        { x: 'Completion', y: 'Completion', v: 100 },
        { x: 'Completion', y: 'Retention', v: 81 },
        { x: 'Retention', y: 'Enrollment', v: 65 },
        { x: 'Retention', y: 'Completion', v: 81 },
        { x: 'Retention', y: 'Retention', v: 100 },
      ],
      opts: {
        xLabels: ['Enrollment', 'Completion', 'Retention'],
        yLabels: ['Enrollment', 'Completion', 'Retention'],
      },
    },
  },
];
