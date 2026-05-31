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
  // ── Phase B feature-showcase entries ──────────────────────────────────────

  {
    id: 'correlation-scatter-brush',
    title: 'Scatter with brush selection',
    family: 'correlation',
    engine: 'echarts',
    chartType: 'scatter',
    variant: 'brush',
    whenToUse: 'Let users lasso or rectangle-select a subset of data points to highlight outliers, filter a cohort, or trigger a downstream action — particularly useful in dashboards where scatter selection drives a detail panel.',
    description: 'Multi-series scatter with an activated ECharts brush component (rectangle, polygon, and clear modes) plus a toolbox brush button group. Selected points are highlighted; un-selected points fade.',
    tags: ['correlation', 'bivariate', 'interactive', 'brush', 'select', 'echarts'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['brush', 'interactive', 'select'],
    sampleData: [
      { label: 'Business', points: [[320,82],[410,85],[275,78],[500,88],[380,84],[220,74],[460,89],[340,81]] },
      { label: 'Technology', points: [[290,80],[360,83],[430,87],[190,71],[470,90],[310,81],[395,86],[250,76]] },
    ],
    spec: {
      engine: 'echarts',
      option: {
        color: ['#0070F0', '#46B1EF'],
        tooltip: { trigger: 'item', formatter: (p: any) => `${p.seriesName}<br/>Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%` },
        legend: { bottom: 0 },
        brush: {
          toolbox: ['rect', 'polygon', 'clear'],
          xAxisIndex: 0,
        },
        toolbox: {
          feature: {
            brush: { type: ['rect', 'polygon', 'clear'] },
          },
        },
        xAxis: { name: 'Enrollment', type: 'value', scale: true },
        yAxis: { name: 'Completion Rate (%)', type: 'value', min: 60, max: 100 },
        series: [
          {
            name: 'Business',
            type: 'scatter',
            symbolSize: 14,
            data: [[320,82],[410,85],[275,78],[500,88],[380,84],[220,74],[460,89],[340,81]],
            itemStyle: { color: '#0070F0' },
          },
          {
            name: 'Technology',
            type: 'scatter',
            symbolSize: 14,
            data: [[290,80],[360,83],[430,87],[190,71],[470,90],[310,81],[395,86],[250,76]],
            itemStyle: { color: '#46B1EF' },
          },
        ],
      },
    },
  },

  {
    id: 'correlation-scatter-regression',
    title: 'Scatter with trend line (markLine regression)',
    family: 'correlation',
    engine: 'echarts',
    chartType: 'scatter',
    variant: 'regression',
    whenToUse: 'Overlay a visual trend line on a scatter plot to communicate the general direction of the relationship without requiring a separate regression model; best for quick analytical reads.',
    description: 'Single-series scatter with a two-point markLine encoding a manually computed linear regression, annotated with the slope direction. The dashed trend line provides a visual summary of the correlation.',
    tags: ['correlation', 'bivariate', 'trendline', 'annotations', 'echarts'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['trendline', 'annotations'],
    sampleData: [
      { enrollment: 190, completion: 71 }, { enrollment: 220, completion: 74 },
      { enrollment: 275, completion: 78 }, { enrollment: 310, completion: 81 },
      { enrollment: 340, completion: 81 }, { enrollment: 380, completion: 84 },
      { enrollment: 410, completion: 85 }, { enrollment: 430, completion: 87 },
      { enrollment: 460, completion: 89 }, { enrollment: 500, completion: 88 },
    ],
    spec: {
      engine: 'echarts',
      option: {
        color: ['#0070F0'],
        tooltip: { trigger: 'item', formatter: (p: any) => `Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%` },
        xAxis: { name: 'Enrollment', type: 'value', scale: true },
        yAxis: { name: 'Completion Rate (%)', type: 'value', min: 60, max: 100 },
        series: [{
          name: 'Programs',
          type: 'scatter',
          symbolSize: 14,
          data: [[190,71],[220,74],[275,78],[310,81],[340,81],[380,84],[410,85],[430,87],[460,89],[500,88]],
          itemStyle: { color: '#0070F0' },
          markLine: {
            silent: true,
            lineStyle: { color: '#002855', type: 'dashed', width: 2 },
            label: { formatter: 'Trend', position: 'end', color: '#002855' },
            data: [[{ coord: [190, 71.5] }, { coord: [500, 88.5] }]],
          },
        }],
      },
    },
  },

  {
    id: 'distribution-scatter-visualmap',
    title: 'Bubble scatter with visualMap (3-D encoding)',
    family: 'correlation',
    secondaryFamilies: ['distribution'],
    engine: 'echarts',
    chartType: 'scatter',
    variant: 'visualmap-bubble',
    whenToUse: 'Encode a third quantitative dimension (e.g. revenue) as both bubble size and color simultaneously; the continuous visualMap component acts as a legend and allows interactive filtering by value range.',
    description: 'ECharts scatter where each point is [enrollment, completion%, revenue]; a continuous visualMap driven by dimension 2 maps revenue to both symbol size (via symbolSize callback) and color (WGU ramp), adding a fourth visual channel.',
    tags: ['correlation', 'trivariate', 'bubble', 'interactive', 'visualmap', 'echarts'],
    runtimes: ['LWC', 'Next', 'HTML'],
    features: ['visualMap', 'bubble'],
    sampleData: [
      [320,82,480], [410,85,620], [275,78,310], [500,88,890],
      [380,84,550], [220,74,210], [460,89,740], [340,81,430],
      [290,80,370], [430,87,680], [190,71,160], [470,90,810],
    ],
    spec: {
      engine: 'echarts',
      option: {
        tooltip: {
          trigger: 'item',
          formatter: (p: any) => `Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%<br/>Revenue: $${p.data[2]}K`,
        },
        visualMap: {
          show: true,
          dimension: 2,
          min: 160,
          max: 890,
          inRange: { color: ['#EEF6F9', '#46B1EF', '#0070F0', '#002855'] },
          text: ['High Revenue', 'Low'],
          calculable: true,
          right: 10,
          top: 'center',
        },
        xAxis: { name: 'Enrollment', type: 'value', scale: true },
        yAxis: { name: 'Completion Rate (%)', type: 'value', min: 60, max: 100 },
        series: [{
          name: 'Programs',
          type: 'scatter',
          symbolSize: (val: number[]) => Math.sqrt(val[2]) * 1.8,
          data: [
            [320,82,480],[410,85,620],[275,78,310],[500,88,890],
            [380,84,550],[220,74,210],[460,89,740],[340,81,430],
            [290,80,370],[430,87,680],[190,71,160],[470,90,810],
          ],
        }],
      },
    },
  },
];
