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
    title: 'Connected scatter',
    family: 'correlation',
    engine: 'chartjs',
    chartType: 'scatter',
    variant: 'connected',
    whenToUse: 'Trace how the relationship between two variables evolves over time — each point is a period and the connecting line shows direction of change in series order.',
    description: 'A scatter whose points are connected in series order by a line, forming a trajectory. Points are time-ordered (FY20–FY25) so the line traces the path of change.',
    tags: ['correlation', 'time-series', 'trajectory', 'bivariate', 'connected'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['correlation', 'connected'],
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
      opts: { showLine: true },
    },
  },
  {
    id: 'correlation-scatter-echarts',
    title: 'Scatter plot (ECharts)',
    family: 'correlation',
    engine: 'echarts',
    chartType: 'scatter',
    whenToUse: 'Explore bivariate relationships with ECharts when brush-select, data-zoom, or larger point counts benefit from ECharts rendering performance.',
    description: 'Multi-series scatter using scatterOption; each series uses a distinct WGU-themed color, with 12 px symbols and an axis-item tooltip.',
    tags: ['correlation', 'bivariate', 'continuous', 'relationship', 'echarts'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['correlation'],
    sampleData: [
      { label: 'Business', points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84]] },
      { label: 'Technology', points: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90]] },
    ],
    spec: {
      engine: 'echarts',
      factory: 'scatterOption',
      args: [[
        { label: 'Business', points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84]] },
        { label: 'Technology', points: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90]] },
      ]],
    },
  },
  {
    id: 'correlation-parallel',
    title: 'Parallel coordinates',
    family: 'correlation',
    engine: 'echarts',
    chartType: 'parallel',
    whenToUse: 'Explore multivariate correlation patterns across five or more program metrics simultaneously — each polyline is one entity traced across all axes.',
    description: 'Parallel axes each represent one metric; each series row is drawn as a polyline connecting its values across all axes. Built with parallelOption.',
    tags: ['correlation', 'multivariate', 'parallel', 'echarts'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['multivariate'],
    sampleData: {
      dims: ['Enrollment', 'Completion %', 'Retention %', 'Satisfaction', 'Revenue ($K)'],
      rows: [
        { name: 'Boeing', values: [1420, 78, 85, 4.2, 890] },
        { name: 'Amazon', values: [1180, 76, 82, 4.0, 740] },
        { name: 'IHC', values: [960, 72, 80, 3.9, 580] },
        { name: 'Salt Lake CC', values: [720, 68, 77, 3.7, 420] },
        { name: 'Utah DOE', values: [540, 65, 74, 3.6, 310] },
      ],
    },
    spec: {
      engine: 'echarts',
      factory: 'parallelOption',
      args: [
        ['Enrollment', 'Completion %', 'Retention %', 'Satisfaction', 'Revenue ($K)'],
        [
          { name: 'Boeing', values: [1420, 78, 85, 4.2, 890] },
          { name: 'Amazon', values: [1180, 76, 82, 4.0, 740] },
          { name: 'IHC', values: [960, 72, 80, 3.9, 580] },
          { name: 'Salt Lake CC', values: [720, 68, 77, 3.7, 420] },
          { name: 'Utah DOE', values: [540, 65, 74, 3.6, 310] },
        ],
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
