var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/corpus/entries/magnitude.ts
var magnitude = [
  {
    id: "magnitude-bar-horizontal",
    title: "Horizontal bar",
    family: "magnitude",
    engine: "chartjs",
    chartType: "bar",
    variant: "horizontal",
    whenToUse: "Compare a single value across a handful of categories; horizontal orientation fits long labels.",
    description: "Bars extend from a common baseline; bar length encodes magnitude. Horizontal layout prevents label truncation.",
    tags: ["categorical", "single-series", "horizontal"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels"],
    sampleData: [
      { label: "MBA", count: 120 },
      { label: "BSN", count: 90 },
      { label: "IT", count: 70 },
      { label: "TEP", count: 55 },
      { label: "BSCS", count: 45 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "MBA", count: 120 },
        { label: "BSN", count: 90 },
        { label: "IT", count: 70 },
        { label: "TEP", count: 55 },
        { label: "BSCS", count: 45 }
      ]
    }
  },
  {
    id: "magnitude-bar-vertical",
    title: "Vertical bar (column)",
    family: "magnitude",
    engine: "chartjs",
    chartType: "bar",
    variant: "vertical",
    whenToUse: "Compare quantities across a small number of categories when labels are short enough to read vertically.",
    description: "Column chart with bars rising from a horizontal baseline; conventional orientation for categorical comparison.",
    tags: ["categorical", "single-series", "vertical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels"],
    sampleData: [
      { label: "Q1", count: 320 },
      { label: "Q2", count: 410 },
      { label: "Q3", count: 375 },
      { label: "Q4", count: 490 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "Q1", count: 320 },
        { label: "Q2", count: 410 },
        { label: "Q3", count: 375 },
        { label: "Q4", count: 490 }
      ],
      opts: { orientation: "vertical" }
    }
  },
  {
    id: "magnitude-bar-grouped",
    title: "Grouped bar",
    family: "magnitude",
    engine: "chartjs",
    chartType: "groupedBar",
    variant: "grouped",
    whenToUse: "Compare multiple series side-by-side across categories when absolute values matter more than part-to-whole.",
    description: "Clustered bars group related series for direct visual comparison within each category.",
    tags: ["categorical", "multi-series", "grouped"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      series: [
        { label: "2023", data: [240, 180, 310, 150] },
        { label: "2024", data: [290, 220, 340, 175] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "groupedBar",
      labels: ["Business", "Technology", "Education", "Healthcare"],
      data: [
        { label: "2023", data: [240, 180, 310, 150] },
        { label: "2024", data: [290, 220, 340, 175] }
      ]
    }
  },
  {
    id: "magnitude-bar-stacked",
    title: "Stacked bar",
    family: "magnitude",
    engine: "chartjs",
    chartType: "groupedBar",
    variant: "stacked",
    whenToUse: "Show both the total magnitude and the breakdown of components when part-to-whole context matters alongside absolute size.",
    description: "Bars are divided into segments representing each series, stacked to show cumulative totals.",
    tags: ["categorical", "multi-series", "stacked"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "multi-series"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      series: [
        { label: "Enrolled", data: [420, 390, 450, 480] },
        { label: "Graduated", data: [180, 160, 200, 220] },
        { label: "Withdrawn", data: [30, 45, 25, 20] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "groupedBar",
      labels: ["Jan", "Feb", "Mar", "Apr"],
      data: [
        { label: "Enrolled", data: [420, 390, 450, 480] },
        { label: "Graduated", data: [180, 160, 200, 220] },
        { label: "Withdrawn", data: [30, 45, 25, 20] }
      ],
      opts: { stacked: true }
    }
  },
  {
    id: "magnitude-bar-lead-color",
    title: "Lead-color bar",
    family: "magnitude",
    engine: "chartjs",
    chartType: "bar",
    variant: "lead-color",
    whenToUse: "Draw attention to a key metric or highlight a WGU brand bar while keeping remaining bars in the default palette.",
    description: "Single-series bar chart with a custom brand-green lead color applied to all bars.",
    tags: ["categorical", "single-series", "branded"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "branded"],
    sampleData: [
      { label: "Completions", count: 8400 },
      { label: "Enrollments", count: 12300 },
      { label: "Transfers", count: 3100 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "Completions", count: 8400 },
        { label: "Enrollments", count: 12300 },
        { label: "Transfers", count: 3100 }
      ],
      opts: { leadColor: "#97E152" }
    }
  },
  {
    id: "magnitude-radial-bar",
    title: "Radial bar chart",
    family: "magnitude",
    engine: "echarts",
    chartType: "radialBar",
    whenToUse: "Compare magnitudes in a polar layout \u2014 a visually distinctive alternative to horizontal bars when a circular composition fits the dashboard.",
    description: "Bars extend from the center along a polar radius axis; each category occupies a ring and bar length encodes value. Built with radialBarOption.",
    tags: ["categorical", "single-series", "radial", "polar", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["polar", "radial"],
    sampleData: {
      labels: ["MBA", "BSCS", "BSN", "TEP", "BSIT"],
      values: [420, 380, 310, 240, 195]
    },
    spec: {
      engine: "echarts",
      factory: "radialBarOption",
      args: [
        ["MBA", "BSCS", "BSN", "TEP", "BSIT"],
        [420, 380, 310, 240, 195]
      ]
    }
  },
  {
    id: "magnitude-bar-echarts",
    title: "Bar chart (ECharts)",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    whenToUse: "Render a single-series categorical bar with ECharts for richer tooltip interactions and built-in WGU theme colors.",
    description: "Vertical bar using barOption factory; WGU-themed color palette, rounded top corners, and axis tooltip. ECharts engine parity with the Chart.js bar.",
    tags: ["categorical", "single-series", "vertical", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels"],
    sampleData: {
      labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
      series: [{ label: "Enrolments", data: [1420, 1680, 1540, 1890] }]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
        [{ label: "Enrolments", data: [1420, 1680, 1540, 1890] }]
      ]
    }
  },
  {
    id: "magnitude-bar-stacked-echarts",
    title: "Stacked bar (ECharts)",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "stacked",
    whenToUse: "Show cumulative multi-series magnitude with ECharts stacking when tooltip-driven breakdown drill-down is needed.",
    description: "Multi-series stacked bar using barOption with stacked:true; segments share a stack:total key and the legend aids series identification.",
    tags: ["categorical", "multi-series", "stacked", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "multi-series"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      series: [
        { label: "New", data: [320, 290, 350, 410] },
        { label: "Continuing", data: [980, 1020, 1100, 1050] },
        { label: "Returning", data: [120, 135, 110, 145] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Jan", "Feb", "Mar", "Apr"],
        [
          { label: "New", data: [320, 290, 350, 410] },
          { label: "Continuing", data: [980, 1020, 1100, 1050] },
          { label: "Returning", data: [120, 135, 110, 145] }
        ],
        { stacked: true }
      ]
    }
  },
  {
    id: "magnitude-bar-grouped-echarts",
    title: "Grouped bar (ECharts)",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "grouped",
    whenToUse: "Compare multiple series side-by-side with ECharts when legend-driven series toggling, axis zoom, or richer tooltip is needed.",
    description: "Multi-series grouped bar using barOption without stacking; each series cluster appears beside the others per category, legend at bottom.",
    tags: ["categorical", "multi-series", "grouped", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      series: [
        { label: "FY2023", data: [4200, 3800, 2900, 2100] },
        { label: "FY2024", data: [4650, 4200, 3150, 2380] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Business", "Technology", "Education", "Healthcare"],
        [
          { label: "FY2023", data: [4200, 3800, 2900, 2100] },
          { label: "FY2024", data: [4650, 4200, 3150, 2380] }
        ]
      ]
    }
  },
  {
    id: "magnitude-radar-echarts",
    title: "Radar / spider chart (ECharts)",
    family: "magnitude",
    engine: "echarts",
    chartType: "radar",
    whenToUse: "Compare multiple quantitative variables for one or more entities with ECharts when filled-polygon interaction or programmatic indicator max values are needed.",
    description: "ECharts radar chart with radar.indicator defining each axis name and max; series type:radar traces each entity as a filled polygon. WGU-themed colors.",
    tags: ["multi-axis", "multi-series", "radial", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series", "multi-axis", "radial"],
    sampleData: {
      indicators: [
        { name: "Engagement", max: 100 },
        { name: "Completion", max: 100 },
        { name: "Satisfaction", max: 100 },
        { name: "Retention", max: 100 },
        { name: "Outcomes", max: 100 }
      ],
      series: [
        { name: "Business College", values: [85, 72, 90, 80, 88] },
        { name: "Tech College", values: [78, 80, 84, 75, 92] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: {},
        legend: { bottom: 0 },
        color: ["#0070F0", "#46B1EF"],
        radar: {
          indicator: [
            { name: "Engagement", max: 100 },
            { name: "Completion", max: 100 },
            { name: "Satisfaction", max: 100 },
            { name: "Retention", max: 100 },
            { name: "Outcomes", max: 100 }
          ]
        },
        series: [
          {
            type: "radar",
            data: [
              { name: "Business College", value: [85, 72, 90, 80, 88], areaStyle: { opacity: 0.2 } },
              { name: "Tech College", value: [78, 80, 84, 75, 92], areaStyle: { opacity: 0.2 } }
            ]
          }
        ]
      }
    }
  },
  {
    id: "magnitude-radar",
    title: "Radar / spider chart",
    family: "magnitude",
    engine: "chartjs",
    chartType: "radar",
    variant: "multi-axis",
    whenToUse: "Compare multiple quantitative variables for one or more entities when the shape of the profile matters.",
    description: "Each axis radiates from the center and encodes one variable; polygons trace each series across all axes.",
    tags: ["multi-axis", "multi-series", "radial"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series", "multi-axis"],
    sampleData: {
      labels: ["Engagement", "Completion", "Satisfaction", "Retention", "Outcomes"],
      series: [
        { label: "Business College", data: [85, 72, 90, 80, 88] },
        { label: "Tech College", data: [78, 80, 84, 75, 92] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "radar",
      labels: ["Engagement", "Completion", "Satisfaction", "Retention", "Outcomes"],
      data: [
        { label: "Business College", data: [85, 72, 90, 80, 88] },
        { label: "Tech College", data: [78, 80, 84, 75, 92] }
      ]
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "magnitude-bar-toolbox",
    title: "Bar chart with full ECharts toolbox",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "toolbox",
    whenToUse: "Provide a self-contained data exploration experience: let analysts switch between bar and line view, restore the default state, inspect the raw data table, or export a PNG \u2014 all without leaving the chart.",
    description: "A single-series bar augmented with the ECharts toolbox featuring dataView (raw data table), saveAsImage (PNG export), restore (reset zoom/state), and magicType (toggle bar\u2194line). WGU-branded colors.",
    tags: ["categorical", "single-series", "vertical", "toolbox", "export", "interactive", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["toolbox", "export", "interactive"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare", "Engineering"],
      values: [4650, 4200, 3150, 2380, 1820]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis" },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["bar", "line"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: { type: "category", data: ["Business", "Technology", "Education", "Healthcare", "Engineering"] },
        yAxis: { type: "value", name: "Enrollments" },
        series: [{
          name: "FY2024 Enrollments",
          type: "bar",
          data: [4650, 4200, 3150, 2380, 1820],
          itemStyle: { color: "#0070F0", borderRadius: [4, 4, 0, 0] },
          label: { show: true, position: "top", color: "#264468", fontWeight: "bold" }
        }]
      }
    }
  },
  {
    id: "magnitude-bar-stacked-100-echarts",
    title: "Stacked 100% bar (ECharts)",
    family: "magnitude",
    secondaryFamilies: ["part-to-whole"],
    engine: "echarts",
    chartType: "bar",
    variant: "stacked-100",
    whenToUse: "Compare proportional composition across categories in ECharts when percentage share matters more than absolute count and you need richer tooltip formatting.",
    description: "Multi-series bar with stack:'total' and a percentage-formatter label; each column sums to 100 by design, making cross-category share shifts legible.",
    tags: ["categorical", "multi-series", "stacked", "percent", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "percent", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      series: [
        { label: "On Track", data: [60, 55, 70, 65] },
        { label: "At Risk", data: [25, 30, 20, 22] },
        { label: "Off Track", data: [15, 15, 10, 13] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Business", "Technology", "Education", "Healthcare"],
        [
          { label: "On Track", data: [60, 55, 70, 65] },
          { label: "At Risk", data: [25, 30, 20, 22] },
          { label: "Off Track", data: [15, 15, 10, 13] }
        ],
        { stacked: true }
      ]
    }
  },
  {
    id: "magnitude-bar-horizontal-echarts",
    title: "Horizontal bar (ECharts)",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "horizontal",
    whenToUse: "Show a single-series categorical comparison with long labels using the ECharts engine; horizontal orientation prevents label truncation and ECharts provides smooth axis animation.",
    description: "Single-series horizontal bar using barOption with horizontal:true; labels run along the y-axis, values extend rightward. WGU-themed with rounded bar ends.",
    tags: ["categorical", "single-series", "horizontal", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels"],
    sampleData: {
      labels: ["Computer Science", "Business Administration", "Registered Nursing", "Teaching / Education", "Cybersecurity"],
      series: [{ label: "Enrollments", data: [5420, 4810, 4150, 3380, 2960] }]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Computer Science", "Business Administration", "Registered Nursing", "Teaching / Education", "Cybersecurity"],
        [{ label: "Enrollments", data: [5420, 4810, 4150, 3380, 2960] }],
        { horizontal: true }
      ]
    }
  },
  {
    id: "magnitude-bar-range",
    title: "Range bar (floating bar)",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "range",
    whenToUse: "Show a span or interval for each category \u2014 e.g. the min-to-max enrollment window across cohorts, or a survey score confidence band \u2014 when a single value is insufficient.",
    description: "Floating horizontal bars produced by stacking a transparent base series and a visible range series; each bar represents [low, high] for its category. ECharts raw option.",
    tags: ["categorical", "range", "interval", "floating-bar", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["range"],
    sampleData: [
      { label: "Business", low: 60, high: 92 },
      { label: "Technology", low: 55, high: 88 },
      { label: "Education", low: 70, high: 95 },
      { label: "Healthcare", low: 62, high: 90 },
      { label: "Engineering", low: 50, high: 85 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["transparent", "#0070F0"],
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          formatter: (params) => {
            const cat = params[0].name;
            const low = params[0].value;
            const high = params[1].value;
            return `${cat}<br/>Range: ${low}% \u2013 ${high}%`;
          }
        },
        legend: { show: false },
        xAxis: { type: "value", name: "Completion %", min: 40, max: 100 },
        yAxis: { type: "category", data: ["Engineering", "Healthcare", "Education", "Technology", "Business"] },
        series: [
          {
            name: "Base",
            type: "bar",
            stack: "range",
            itemStyle: { borderColor: "transparent", color: "transparent" },
            data: [50, 62, 70, 55, 60]
          },
          {
            name: "Range",
            type: "bar",
            stack: "range",
            itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] },
            data: [35, 28, 25, 33, 32],
            label: { show: true, position: "right", formatter: (p) => `${p.data[0] ?? p.data + (50 + 62 + 70 + 55 + 60) / 5}%` }
          }
        ]
      }
    }
  },
  {
    id: "magnitude-bullet",
    title: "Bullet chart (bar vs. target)",
    family: "magnitude",
    secondaryFamilies: ["deviation"],
    engine: "echarts",
    chartType: "bar",
    variant: "bullet",
    whenToUse: "Compare an actual value against a target in a compact single-row layout \u2014 the bullet chart is the space-efficient replacement for a gauge when multiple metrics are stacked vertically.",
    description: "Horizontal bar encoding the actual value; a markLine at the target creates a thin perpendicular tick. Multiple categories stack into a compact scorecard layout. ECharts raw option.",
    tags: ["categorical", "single-series", "horizontal", "target", "markline", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["annotations", "threshold", "markline"],
    sampleData: [
      { label: "Completion Rate", actual: 78, target: 85 },
      { label: "Retention Rate", actual: 91, target: 90 },
      { label: "Partner NPS", actual: 62, target: 75 },
      { label: "Time to Graduation", actual: 74, target: 80 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#46B1EF"],
        grid: { left: 160, right: 80, top: 20, bottom: 20 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "value", max: 100, name: "%" },
        yAxis: {
          type: "category",
          data: ["Time to Graduation", "Partner NPS", "Retention Rate", "Completion Rate"]
        },
        series: [{
          name: "Actual",
          type: "bar",
          barWidth: 16,
          data: [74, 62, 91, 78],
          itemStyle: { color: "#46B1EF", borderRadius: [0, 4, 4, 0] },
          markLine: {
            symbol: ["none", "none"],
            lineStyle: { color: "#002855", width: 3, type: "solid" },
            label: { show: false },
            data: [
              { xAxis: 80 },
              { xAxis: 75 },
              { xAxis: 90 },
              { xAxis: 85 }
            ]
          }
        }]
      }
    }
  },
  {
    id: "magnitude-radar-single",
    title: "Single-entity radar chart",
    family: "magnitude",
    engine: "echarts",
    chartType: "radar",
    variant: "single-entity",
    whenToUse: "Profile a single entity (one partner, one program) across multiple performance dimensions; the enclosed area shape immediately communicates overall strength and specific gaps.",
    description: "ECharts radar with a single series polygon; the filled area conveys both coverage and balance across five program-health dimensions. WGU navy fill with sky-blue stroke.",
    tags: ["multi-axis", "single-series", "radial", "profile", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-axis", "radial"],
    sampleData: {
      indicators: [
        { name: "Enrollment", max: 100 },
        { name: "Completion", max: 100 },
        { name: "Retention", max: 100 },
        { name: "NPS", max: 100 },
        { name: "Revenue", max: 100 }
      ],
      value: [82, 74, 88, 65, 91],
      entity: "Boeing Partnership"
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: {},
        color: ["#0070F0"],
        radar: {
          indicator: [
            { name: "Enrollment", max: 100 },
            { name: "Completion", max: 100 },
            { name: "Retention", max: 100 },
            { name: "NPS", max: 100 },
            { name: "Revenue", max: 100 }
          ],
          splitArea: { areaStyle: { color: ["#EEF6F9", "#fff", "#EEF6F9", "#fff", "#EEF6F9"] } }
        },
        series: [{
          type: "radar",
          data: [{
            name: "Boeing Partnership",
            value: [82, 74, 88, 65, 91],
            areaStyle: { opacity: 0.3, color: "#0070F0" },
            lineStyle: { color: "#0070F0", width: 2 },
            itemStyle: { color: "#0070F0" }
          }]
        }]
      }
    }
  },
  {
    id: "magnitude-bar-waterfall",
    title: "Waterfall chart",
    family: "magnitude",
    secondaryFamilies: ["deviation"],
    engine: "echarts",
    chartType: "bar",
    variant: "waterfall",
    whenToUse: "Show how individual increments and decrements accumulate to a total \u2014 e.g., a budget bridge from opening balance through revenue, cost, and adjustments to closing balance.",
    description: "Floating bar chart simulating a waterfall: each bar starts at the cumulative total of previous bars. A transparent base series pushes each bar to its starting point; positive bars render in WGU blue and negative in navy.",
    tags: ["categorical", "waterfall", "cumulative", "diverging", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["waterfall", "cumulative"],
    sampleData: [
      { label: "Starting Enrollment", value: 2e4, type: "total" },
      { label: "New Partners", value: 3200, type: "positive" },
      { label: "Organics", value: 1800, type: "positive" },
      { label: "Withdrawals", value: -2400, type: "negative" },
      { label: "Transfers Out", value: -600, type: "negative" },
      { label: "End Enrollment", value: 22e3, type: "total" }
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "category", data: ["Starting", "New Partners", "Organics", "Withdrawals", "Transfers Out", "End"] },
        yAxis: { type: "value", name: "Students", min: 18e3 },
        series: [
          {
            name: "Placeholder",
            type: "bar",
            stack: "waterfall",
            itemStyle: { borderColor: "transparent", color: "transparent" },
            data: [0, 2e4, 23200, 25e3, 22600, 0]
          },
          {
            name: "Change",
            type: "bar",
            stack: "waterfall",
            data: [
              { value: 2e4, itemStyle: { color: "#46B1EF", borderRadius: [4, 4, 0, 0] } },
              { value: 3200, itemStyle: { color: "#0070F0", borderRadius: [4, 4, 0, 0] } },
              { value: 1800, itemStyle: { color: "#0070F0", borderRadius: [4, 4, 0, 0] } },
              { value: -2400, itemStyle: { color: "#002855", borderRadius: [4, 4, 0, 0] } },
              { value: -600, itemStyle: { color: "#002855", borderRadius: [4, 4, 0, 0] } },
              { value: 22e3, itemStyle: { color: "#97E152", borderRadius: [4, 4, 0, 0] } }
            ],
            label: { show: true, position: "top", color: "#264468", fontWeight: "bold", formatter: (p) => p.value > 0 ? `+${p.value}` : `${p.value}` }
          }
        ]
      }
    }
  },
  {
    id: "magnitude-bar-grouped-stacked",
    title: "Grouped-stacked bar",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "grouped-stacked",
    whenToUse: "Compare total magnitude across groups while also showing the sub-series breakdown within each group \u2014 e.g. enrollment by quarter grouped by college, stacked by modality.",
    description: "ECharts bar with two stacks (stack A and stack B) rendered side-by-side; each stack accumulates its series while clusters appear next to each other per category.",
    tags: ["categorical", "multi-series", "grouped", "stacked", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "multi-series", "grouped"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      groupA: [
        { label: "FT New", data: [420, 390, 450, 480] },
        { label: "FT Cont.", data: [980, 1020, 1100, 1050] }
      ],
      groupB: [
        { label: "PT New", data: [210, 195, 225, 240] },
        { label: "PT Cont.", data: [490, 510, 550, 525] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#002855", "#46B1EF", "#97E152"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: { type: "value", name: "Enrollments" },
        series: [
          { name: "FT New", type: "bar", stack: "FT", data: [420, 390, 450, 480], itemStyle: { color: "#0070F0", borderRadius: [0, 0, 0, 0] } },
          { name: "FT Cont.", type: "bar", stack: "FT", data: [980, 1020, 1100, 1050], itemStyle: { color: "#002855", borderRadius: [4, 4, 0, 0] } },
          { name: "PT New", type: "bar", stack: "PT", data: [210, 195, 225, 240], itemStyle: { color: "#46B1EF", borderRadius: [0, 0, 0, 0] } },
          { name: "PT Cont.", type: "bar", stack: "PT", data: [490, 510, 550, 525], itemStyle: { color: "#97E152", borderRadius: [4, 4, 0, 0] } }
        ]
      }
    }
  },
  {
    id: "magnitude-polar-bar",
    title: "Polar bar chart",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "polar",
    whenToUse: "Compare category magnitudes in a circular layout when a dashboard section already has a polar/radial visual language and consistency matters more than pixel-precise reading.",
    description: "ECharts bar series on a polar axis (radiusAxis category + angleAxis value); bars radiate outward from the center, encoding value by radius. Distinct from the radialBar factory which uses a different axis configuration.",
    tags: ["categorical", "single-series", "polar", "radial", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["polar", "radial"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare", "Engineering"],
      values: [4650, 4200, 3150, 2380, 1820]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        polar: { radius: [20, "80%"] },
        radiusAxis: {
          type: "category",
          data: ["Business", "Technology", "Education", "Healthcare", "Engineering"],
          z: 10
        },
        angleAxis: { max: 5e3 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        series: [{
          name: "Enrollments",
          type: "bar",
          coordinateSystem: "polar",
          data: [4650, 4200, 3150, 2380, 1820],
          itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] },
          label: { show: true, position: "middle", formatter: "{c}", color: "#fff", fontSize: 11 }
        }]
      }
    }
  },
  {
    id: "magnitude-bar-gradient-fill",
    title: "Gradient-fill bar chart",
    family: "magnitude",
    engine: "echarts",
    chartType: "bar",
    variant: "gradient-fill",
    whenToUse: "Apply a vertical gradient fill to bars for a polished dashboard aesthetic where the base transitions from the WGU navy at the bar root to sky blue at the tip \u2014 draws the eye upward and adds depth.",
    description: "ECharts bar with each series item using a linearGradient color from #002855 (bottom) to #46B1EF (top); gradient fills guide the viewer's eye toward the highest value.",
    tags: ["categorical", "single-series", "vertical", "gradient", "branded", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gradient", "branded"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      values: [1420, 1680, 1540, 1890]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: { type: "value", name: "Enrollments" },
        series: [{
          name: "Enrollments",
          type: "bar",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#46B1EF" },
                { offset: 1, color: "#002855" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          data: [1420, 1680, 1540, 1890],
          label: { show: true, position: "top", color: "#264468", fontWeight: "bold" }
        }]
      }
    }
  },
  {
    id: "magnitude-bar-race-static",
    title: "Sorted bar (bar-race static snapshot)",
    family: "magnitude",
    secondaryFamilies: ["ranking"],
    engine: "echarts",
    chartType: "bar",
    variant: "race-static",
    whenToUse: "Show a ranked descending snapshot of a metric at a single point in time \u2014 the static equivalent of an animated bar race. Use when animation is disabled or the chart is embedded in a static export.",
    description: "Horizontal bar sorted descending with realtimeSort:true in the series config (a bar-race option flag) and animationDuration set. As a static snapshot it renders the current sort order; the config is ready for data-driven re-animation if paired with a timeline.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "animation", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["sorted", "animation"],
    sampleData: [
      { name: "Computer Science", value: 5420 },
      { name: "Business Admin", value: 4810 },
      { name: "Nursing", value: 4150 },
      { name: "Teaching", value: 3380 },
      { name: "Cybersecurity", value: 2960 },
      { name: "Data Analytics", value: 2340 },
      { name: "Healthcare IT", value: 1870 },
      { name: "Cloud Computing", value: 1540 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        grid: { top: 10, bottom: 30, left: 160, right: 80 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "value", max: "dataMax", name: "Enrollments" },
        yAxis: {
          type: "category",
          data: ["Cloud Computing", "Healthcare IT", "Data Analytics", "Cybersecurity", "Teaching", "Nursing", "Business Admin", "Computer Science"],
          inverse: false,
          animationDuration: 300,
          animationDurationUpdate: 1200
        },
        series: [{
          name: "Enrollments",
          type: "bar",
          realtimeSort: true,
          data: [1540, 1870, 2340, 2960, 3380, 4150, 4810, 5420],
          itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] },
          label: { show: true, position: "right", color: "#264468", fontWeight: "bold" }
        }],
        animationDuration: 0,
        animationDurationUpdate: 1200,
        animationEasing: "linear",
        animationEasingUpdate: "linear"
      }
    }
  }
];

// src/corpus/entries/change-over-time.ts
var changeOverTime = [
  {
    id: "cot-line-single",
    title: "Line chart (single series)",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "line",
    variant: "single-series",
    whenToUse: "Track how one metric moves across a continuous time axis \u2014 enrolment, completions, or any KPI over months.",
    description: "A single line connecting data points over an ordered time axis. Slope and inflection points communicate rate of change.",
    tags: ["time-series", "single-series", "trend"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["trend"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [{ label: "Enrolments", data: [320, 345, 410, 390, 460, 520] }]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [{ label: "Enrolments", data: [320, 345, 410, 390, 460, 520] }]
    }
  },
  {
    id: "cot-line-multi",
    title: "Multi-series line chart",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "line",
    variant: "multi-series",
    whenToUse: "Compare the trajectories of two or more metrics on a shared time axis to surface convergence or divergence.",
    description: "Multiple lines share the same time axis; each series uses a distinct color from the WGU palette.",
    tags: ["time-series", "multi-series", "trend", "comparison"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series", "trend"],
    sampleData: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      series: [
        { label: "Graduations", data: [4200, 4100, 4800, 5300, 5900, 6400] },
        { label: "Withdrawals", data: [820, 1040, 750, 680, 620, 590] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      data: [
        { label: "Graduations", data: [4200, 4100, 4800, 5300, 5900, 6400] },
        { label: "Withdrawals", data: [820, 1040, 750, 680, 620, 590] }
      ]
    }
  },
  {
    id: "cot-line-area",
    title: "Area line chart",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "line",
    variant: "area",
    whenToUse: "Emphasize cumulative volume or fill below a trend line to convey magnitude as well as direction of change.",
    description: "Area fill beneath the line adds a volume cue; particularly effective for showing growth accumulation over time.",
    tags: ["time-series", "single-series", "trend", "area"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "trend"],
    sampleData: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
      series: [{ label: "Active Learners", data: [1200, 1350, 1480, 1420, 1600, 1750, 1900, 2050] }]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
      data: [{ label: "Active Learners", data: [1200, 1350, 1480, 1420, 1600, 1750, 1900, 2050] }],
      opts: { area: true }
    }
  },
  {
    id: "cot-line-stepped",
    title: "Stepped line chart",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "line",
    variant: "stepped",
    whenToUse: "Represent metrics that change discretely at specific points rather than continuously \u2014 policy thresholds, tier changes, or fee schedules.",
    description: "Line segments are horizontal steps that drop or rise vertically only at recorded change points, making discontinuous changes obvious.",
    tags: ["time-series", "single-series", "stepped", "discrete-change"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stepped"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [{ label: "Credit Limit ($)", data: [5e3, 5e3, 7500, 7500, 7500, 1e4] }]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [{ label: "Credit Limit ($)", data: [5e3, 5e3, 7500, 7500, 7500, 1e4] }],
      opts: { stepped: true }
    }
  },
  {
    id: "cot-combo-dual-axis",
    title: "Dual-axis combo chart",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "combo",
    variant: "dual-axis",
    whenToUse: "Overlay a bar series and a line series on a shared time axis when the two metrics have different scales or units \u2014 e.g. headcount (bar) and pass rate % (line).",
    description: "Bars encode one metric on the primary axis while a line traces a second metric; two y-axes prevent scale distortion.",
    tags: ["time-series", "multi-series", "combo", "dual-axis"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["dual-axis", "multi-series", "combo"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      bar: { label: "Enrolments", data: [1200, 1450, 1380, 1600] },
      line: { label: "Pass Rate (%)", data: [78, 81, 79, 84] }
    },
    spec: {
      engine: "chartjs",
      type: "combo",
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: {
        bar: { label: "Enrolments", data: [1200, 1450, 1380, 1600] },
        line: { label: "Pass Rate (%)", data: [78, 81, 79, 84] }
      }
    }
  },
  {
    id: "cot-line-echarts",
    title: "Line chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    whenToUse: "Track metric trends over time with ECharts when smooth interpolation, richer axis tooltip, or the WGU ECharts theme is preferred.",
    description: "Single-series time line using lineOption; smooth curves, WGU-themed color, and axis-crosshair tooltip. ECharts engine parity with the Chart.js line.",
    tags: ["time-series", "single-series", "trend", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["trend"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [{ label: "Completions", data: [280, 310, 295, 345, 390, 420] }]
    },
    spec: {
      engine: "echarts",
      factory: "lineOption",
      args: [
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        [{ label: "Completions", data: [280, 310, 295, 345, 390, 420] }]
      ]
    }
  },
  {
    id: "cot-area-echarts",
    title: "Area line chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "area",
    whenToUse: "Emphasize volume growth over time with an ECharts area fill; use when zooming/brushing interactions are needed alongside the area encoding.",
    description: "Area-fill line using lineOption with area:true; the areaStyle adds a translucent fill beneath the curve for a volume impression.",
    tags: ["time-series", "single-series", "trend", "area", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "trend"],
    sampleData: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
      series: [{ label: "Active Learners", data: [1850, 1920, 2040, 1980, 2150, 2310] }]
    },
    spec: {
      engine: "echarts",
      factory: "lineOption",
      args: [
        ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
        [{ label: "Active Learners", data: [1850, 1920, 2040, 1980, 2150, 2310] }],
        { area: true }
      ]
    }
  },
  {
    id: "cot-calendar-heatmap",
    title: "Calendar heatmap",
    family: "change-over-time",
    engine: "echarts",
    chartType: "calendarHeatmap",
    whenToUse: "Show daily activity or event density over a full calendar year \u2014 spot weekday patterns, seasonal surges, and holiday dips at a glance.",
    description: "Each cell is one day of the year; color intensity encodes value on the WGU heat ramp. Built with calendarHeatmapOption; calendar grid laid out by ECharts.",
    tags: ["time-series", "daily", "calendar", "heatmap", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["calendar", "heatmap"],
    sampleData: {
      year: 2024,
      data: [
        ["2024-01-08", 42],
        ["2024-01-15", 67],
        ["2024-01-22", 51],
        ["2024-02-05", 88],
        ["2024-02-12", 74],
        ["2024-02-19", 92],
        ["2024-03-04", 63],
        ["2024-03-11", 55],
        ["2024-03-18", 79],
        ["2024-04-01", 48],
        ["2024-04-08", 83],
        ["2024-04-15", 71],
        ["2024-05-06", 95],
        ["2024-05-13", 82],
        ["2024-06-10", 60]
      ]
    },
    spec: {
      engine: "echarts",
      factory: "calendarHeatmapOption",
      args: [
        2024,
        [
          ["2024-01-08", 42],
          ["2024-01-15", 67],
          ["2024-01-22", 51],
          ["2024-02-05", 88],
          ["2024-02-12", 74],
          ["2024-02-19", 92],
          ["2024-03-04", 63],
          ["2024-03-11", 55],
          ["2024-03-18", 79],
          ["2024-04-01", 48],
          ["2024-04-08", 83],
          ["2024-04-15", 71],
          ["2024-05-06", 95],
          ["2024-05-13", 82],
          ["2024-06-10", 60]
        ]
      ]
    }
  },
  {
    id: "cot-theme-river",
    title: "Theme river (streamgraph)",
    family: "change-over-time",
    secondaryFamilies: ["part-to-whole"],
    engine: "echarts",
    chartType: "themeRiver",
    whenToUse: "Show how the relative flow (volume) of multiple categories evolves over time \u2014 ideal for program mix shifts or multi-cohort enrolment share over years.",
    description: "Flowing streamgraph where each band represents one category; band width encodes value at each time point. Built with themeRiverOption.",
    tags: ["time-series", "multi-series", "streamgraph", "flow", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["streamgraph", "multi-series"],
    sampleData: [
      ["2020", 420, "Business"],
      ["2021", 480, "Business"],
      ["2022", 540, "Business"],
      ["2023", 590, "Business"],
      ["2024", 650, "Business"],
      ["2020", 310, "Technology"],
      ["2021", 360, "Technology"],
      ["2022", 430, "Technology"],
      ["2023", 510, "Technology"],
      ["2024", 580, "Technology"],
      ["2020", 260, "Education"],
      ["2021", 280, "Education"],
      ["2022", 295, "Education"],
      ["2023", 310, "Education"],
      ["2024", 330, "Education"]
    ],
    spec: {
      engine: "echarts",
      factory: "themeRiverOption",
      args: [[
        ["2020", 420, "Business"],
        ["2021", 480, "Business"],
        ["2022", 540, "Business"],
        ["2023", 590, "Business"],
        ["2024", 650, "Business"],
        ["2020", 310, "Technology"],
        ["2021", 360, "Technology"],
        ["2022", 430, "Technology"],
        ["2023", 510, "Technology"],
        ["2024", 580, "Technology"],
        ["2020", 260, "Education"],
        ["2021", 280, "Education"],
        ["2022", 295, "Education"],
        ["2023", 310, "Education"],
        ["2024", 330, "Education"]
      ]]
    }
  },
  {
    id: "cot-candlestick",
    title: "Candlestick chart",
    family: "change-over-time",
    engine: "chartjs",
    chartType: "candlestick",
    variant: "ohlc",
    whenToUse: "Visualize OHLC (open-high-low-close) financial data or any metric with a known daily range and direction.",
    description: "Each candle shows the open, high, low, and close values for a period; filled vs. hollow bodies indicate direction.",
    tags: ["time-series", "ohlc", "financial", "range"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["ohlc", "range"],
    sampleData: [
      { x: "2024-01-01", o: 150, h: 162, l: 148, c: 158 },
      { x: "2024-01-02", o: 158, h: 165, l: 151, c: 152 },
      { x: "2024-01-03", o: 152, h: 160, l: 149, c: 159 },
      { x: "2024-01-04", o: 159, h: 170, l: 157, c: 168 },
      { x: "2024-01-05", o: 168, h: 172, l: 161, c: 163 }
    ],
    spec: {
      engine: "chartjs",
      type: "candlestick",
      data: [
        { x: "2024-01-01", o: 150, h: 162, l: 148, c: 158 },
        { x: "2024-01-02", o: 158, h: 165, l: 151, c: 152 },
        { x: "2024-01-03", o: 152, h: 160, l: 149, c: 159 },
        { x: "2024-01-04", o: 159, h: 170, l: 157, c: 168 },
        { x: "2024-01-05", o: 168, h: 172, l: 161, c: 163 }
      ]
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "cot-line-datazoom",
    title: "Line chart with dataZoom (pan & zoom)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "datazoom",
    whenToUse: "Explore a long time series (12+ months) where the user needs to pinch-zoom or drag a slider to focus on a sub-period without losing overall context.",
    description: "A 24-month enrollment trend line with both an inside (mouse-wheel) and a slider dataZoom component, letting users pan and zoom interactively across the full range.",
    tags: ["time-series", "single-series", "trend", "interactive", "datazoom", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["dataZoom", "interactive", "zoom-pan"],
    sampleData: {
      months: [
        "Jan 24",
        "Feb 24",
        "Mar 24",
        "Apr 24",
        "May 24",
        "Jun 24",
        "Jul 24",
        "Aug 24",
        "Sep 24",
        "Oct 24",
        "Nov 24",
        "Dec 24",
        "Jan 25",
        "Feb 25",
        "Mar 25",
        "Apr 25",
        "May 25",
        "Jun 25",
        "Jul 25",
        "Aug 25",
        "Sep 25",
        "Oct 25",
        "Nov 25",
        "Dec 25"
      ],
      values: [
        1820,
        1945,
        2110,
        2050,
        2280,
        2430,
        2190,
        2350,
        2620,
        2510,
        2380,
        2640,
        2720,
        2890,
        3010,
        2950,
        3180,
        3340,
        3100,
        3260,
        3490,
        3380,
        3210,
        3550
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        xAxis: {
          type: "category",
          data: [
            "Jan 24",
            "Feb 24",
            "Mar 24",
            "Apr 24",
            "May 24",
            "Jun 24",
            "Jul 24",
            "Aug 24",
            "Sep 24",
            "Oct 24",
            "Nov 24",
            "Dec 24",
            "Jan 25",
            "Feb 25",
            "Mar 25",
            "Apr 25",
            "May 25",
            "Jun 25",
            "Jul 25",
            "Aug 25",
            "Sep 25",
            "Oct 25",
            "Nov 25",
            "Dec 25"
          ],
          boundaryGap: false
        },
        yAxis: { type: "value", name: "Enrollments" },
        dataZoom: [
          { type: "inside", start: 0, end: 50 },
          { type: "slider", start: 0, end: 50, bottom: 10 }
        ],
        series: [{
          name: "Enrollments",
          type: "line",
          smooth: true,
          data: [
            1820,
            1945,
            2110,
            2050,
            2280,
            2430,
            2190,
            2350,
            2620,
            2510,
            2380,
            2640,
            2720,
            2890,
            3010,
            2950,
            3180,
            3340,
            3100,
            3260,
            3490,
            3380,
            3210,
            3550
          ],
          areaStyle: { opacity: 0.12 },
          lineStyle: { width: 2, color: "#0070F0" }
        }]
      }
    }
  },
  {
    id: "cot-line-markline-markarea",
    title: "Line with threshold markLine + period markArea",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "annotated",
    whenToUse: "Annotate a trend line with a horizontal target threshold and a shaded band highlighting a notable period (e.g. a pilot program window or an academic term).",
    description: "A 12-month completion-rate line enriched with a dashed markLine at the 80% target and a semi-transparent markArea spanning the Q3 intervention period. Annotations reveal context directly on the chart.",
    tags: ["time-series", "single-series", "trend", "annotations", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["annotations", "threshold", "markline"],
    sampleData: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      completionRate: [74, 76, 75, 78, 79, 77, 82, 85, 83, 86, 87, 88],
      target: 80,
      interventionPeriod: ["Jul", "Sep"]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], boundaryGap: false },
        yAxis: { type: "value", name: "Completion Rate (%)", min: 60, max: 100 },
        series: [{
          name: "Completion Rate",
          type: "line",
          smooth: true,
          data: [74, 76, 75, 78, 79, 77, 82, 85, 83, 86, 87, 88],
          lineStyle: { width: 2, color: "#0070F0" },
          markLine: {
            silent: true,
            lineStyle: { color: "#97E152", type: "dashed", width: 2 },
            label: { formatter: "Target 80%", position: "end" },
            data: [{ yAxis: 80 }]
          },
          markArea: {
            silent: true,
            itemStyle: { color: "rgba(70,177,239,0.12)" },
            label: { position: "top", color: "#264468", fontSize: 11 },
            data: [[{ name: "Intervention Period", xAxis: "Jul" }, { xAxis: "Sep" }]]
          }
        }]
      }
    }
  },
  {
    id: "cot-line-large-data",
    title: "High-density line (LTTB sampling)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "large-data",
    whenToUse: "Render thousands of data points (e.g. hourly or minute-level sensor readings) without degrading frame rate; ECharts LTTB sampling preserves visual shape while skipping redundant points.",
    description: "A 1,500-point synthetic sine-wave signal (simulating a daily login event stream) rendered with large:true and sampling:lttb; the browser renders the full dataset while ECharts adaptively downsamples for smooth display.",
    tags: ["time-series", "single-series", "large-data", "performance", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["large-data", "performance"],
    sampleData: { points: 1500, note: "Sine + linear trend; 1500 deterministic points in spec.option.series[0].data" },
    spec: {
      engine: "echarts",
      option: (() => {
        const data = [];
        for (let i = 0; i < 1500; i++) {
          data.push(
            Math.round(
              1500 + 500 * Math.sin(i / 1500 * 2 * Math.PI * 6) + i / 1500 * 800 + 30 * Math.sin(i / 1500 * 2 * Math.PI * 37)
            )
          );
        }
        return {
          color: ["#0070F0"],
          tooltip: { trigger: "axis", axisPointer: { type: "line" } },
          xAxis: { type: "category", boundaryGap: false, data: Array.from({ length: 1500 }, (_, i) => i) },
          yAxis: { type: "value", name: "Events" },
          dataZoom: [{ type: "inside" }, { type: "slider", bottom: 10 }],
          series: [{
            name: "Login Events",
            type: "line",
            large: true,
            sampling: "lttb",
            showSymbol: false,
            lineStyle: { color: "#0070F0", width: 1.5 },
            areaStyle: { opacity: 0.08 },
            data
          }]
        };
      })()
    }
  },
  {
    id: "cot-line-multi-echarts",
    title: "Multi-series line chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "multi-series",
    whenToUse: "Compare the trajectories of two or more metrics over time with ECharts for legend-toggling, richer crosshair tooltip, or smooth curve interpolation.",
    description: "Multi-series line using lineOption; each series receives a distinct WGU-theme color, a shared time x-axis, and a bottom legend.",
    tags: ["time-series", "multi-series", "trend", "comparison", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series", "trend"],
    sampleData: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      series: [
        { label: "Graduations", data: [4200, 4100, 4800, 5300, 5900, 6400] },
        { label: "Withdrawals", data: [820, 1040, 750, 680, 620, 590] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "lineOption",
      args: [
        ["2019", "2020", "2021", "2022", "2023", "2024"],
        [
          { label: "Graduations", data: [4200, 4100, 4800, 5300, 5900, 6400] },
          { label: "Withdrawals", data: [820, 1040, 750, 680, 620, 590] }
        ]
      ]
    }
  },
  {
    id: "cot-line-smooth",
    title: "Smooth curve line chart",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "smooth",
    whenToUse: "Use smooth Bezier interpolation when the underlying metric is continuous and jagged point-to-point segments would overstate measurement noise.",
    description: "Single-series line with smooth:true producing curved segments between data points; the WGU sky-blue fill area reinforces the volume under the curve.",
    tags: ["time-series", "single-series", "trend", "smooth", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["smooth", "area"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [{ label: "Satisfaction Score", data: [7.2, 7.4, 7.1, 7.6, 7.9, 8.1, 8, 8.3, 8.5, 8.4, 8.7, 8.9] }]
    },
    spec: {
      engine: "echarts",
      factory: "lineOption",
      args: [
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        [{ label: "Satisfaction Score", data: [7.2, 7.4, 7.1, 7.6, 7.9, 8.1, 8, 8.3, 8.5, 8.4, 8.7, 8.9] }],
        { smooth: true, area: true }
      ]
    }
  },
  {
    id: "cot-slope-chart",
    title: "Slope chart (two-point change)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "slope",
    whenToUse: "Show how multiple entities changed between exactly two time periods \u2014 a slope chart surfaces crossovers and divergence that grouped bars obscure.",
    description: "ECharts line chart with exactly two x-axis categories; each series is one entity. Slope direction and crossing lines immediately reveal rank changes and relative movement.",
    tags: ["time-series", "multi-series", "slope", "change", "two-point", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["slope"],
    sampleData: {
      periods: ["FY2023", "FY2024"],
      series: [
        { label: "MBA", data: [4200, 4650] },
        { label: "BSCS", data: [3800, 4300] },
        { label: "BSN", data: [3100, 2980] },
        { label: "TEP", data: [2400, 2550] },
        { label: "BSIT", data: [1950, 1820] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#8B5CF6"],
        tooltip: { trigger: "axis" },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["FY2023", "FY2024"], boundaryGap: true },
        yAxis: { type: "value", name: "Enrollments", min: 1500 },
        series: [
          { name: "MBA", type: "line", data: [4200, 4650], symbolSize: 10, lineStyle: { width: 2 } },
          { name: "BSCS", type: "line", data: [3800, 4300], symbolSize: 10, lineStyle: { width: 2 } },
          { name: "BSN", type: "line", data: [3100, 2980], symbolSize: 10, lineStyle: { width: 2 } },
          { name: "TEP", type: "line", data: [2400, 2550], symbolSize: 10, lineStyle: { width: 2 } },
          { name: "BSIT", type: "line", data: [1950, 1820], symbolSize: 10, lineStyle: { width: 2 } }
        ]
      }
    }
  },
  {
    id: "cot-line-bar-combo-echarts",
    title: "Line + bar combo (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "combo-bar-line",
    whenToUse: "Overlay an enrollment bar with a completion-rate line on a shared time axis in ECharts when richer axis tooltip, toolbox export, or smooth line interpolation is needed.",
    description: "ECharts raw option with one bar series and one line series sharing a category x-axis; the line uses a secondary y-axis to avoid scale distortion. WGU-branded colors.",
    tags: ["time-series", "multi-series", "combo", "dual-axis", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["dual-axis", "multi-series", "combo"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      enrollments: [1200, 1450, 1380, 1600],
      passRate: [78, 81, 79, 84]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#97E152"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: [
          { type: "value", name: "Enrollments", position: "left" },
          { type: "value", name: "Pass Rate (%)", position: "right", min: 60, max: 100 }
        ],
        series: [
          {
            name: "Enrollments",
            type: "bar",
            yAxisIndex: 0,
            data: [1200, 1450, 1380, 1600],
            itemStyle: { color: "#0070F0", borderRadius: [4, 4, 0, 0] }
          },
          {
            name: "Pass Rate",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            data: [78, 81, 79, 84],
            lineStyle: { color: "#97E152", width: 2 },
            itemStyle: { color: "#97E152" },
            symbolSize: 10
          }
        ]
      }
    }
  },
  {
    id: "cot-ohlc-echarts",
    title: "OHLC bar chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "candlestick",
    variant: "ohlc-echarts",
    whenToUse: "Display open-high-low-close financial or range data in ECharts when built-in data zoom, brush selection, or a more configurable OHLC renderer is preferred over the Chart.js candlestick plugin.",
    description: "ECharts candlestick series with the WGU navy/sky color scheme for up/down candles; paired with a volume bar series below. Uses raw option for full ECharts control.",
    tags: ["time-series", "ohlc", "financial", "range", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["ohlc", "range"],
    sampleData: [
      { date: "2024-01-01", o: 150, h: 162, l: 148, c: 158 },
      { date: "2024-01-02", o: 158, h: 165, l: 151, c: 152 },
      { date: "2024-01-03", o: 152, h: 160, l: 149, c: 159 },
      { date: "2024-01-04", o: 159, h: 170, l: 157, c: 168 },
      { date: "2024-01-05", o: 168, h: 172, l: 161, c: 163 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        xAxis: { type: "category", data: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5"], boundaryGap: true },
        yAxis: { type: "value", scale: true, name: "Price ($)" },
        dataZoom: [{ type: "inside" }, { type: "slider", bottom: 10 }],
        series: [{
          name: "OHLC",
          type: "candlestick",
          data: [
            [150, 158, 148, 162],
            [158, 152, 151, 165],
            [152, 159, 149, 160],
            [159, 168, 157, 170],
            [168, 163, 161, 172]
          ],
          itemStyle: {
            color: "#0070F0",
            color0: "#46B1EF",
            borderColor: "#002855",
            borderColor0: "#46B1EF"
          }
        }]
      }
    }
  },
  {
    id: "cot-area-stacked-100-echarts",
    title: "Stacked 100% area chart",
    family: "change-over-time",
    secondaryFamilies: ["part-to-whole"],
    engine: "echarts",
    chartType: "line",
    variant: "stacked-100-area",
    whenToUse: "Show how the proportional share of multiple categories shifts over time when the total is less important than the mix \u2014 e.g. enrollment share by college each quarter.",
    description: "Each series is area-stacked so the total always reaches 100%; authors pre-compute percentages. The flowing bands emphasize compositional drift over a time axis.",
    tags: ["time-series", "multi-series", "stacked", "area", "percent", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "area", "percent"],
    sampleData: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [
        { label: "Business", data: [40, 38, 37, 36, 35, 34] },
        { label: "Technology", data: [30, 31, 32, 33, 34, 35] },
        { label: "Education", data: [18, 18, 18, 18, 17, 17] },
        { label: "Healthcare", data: [12, 13, 13, 13, 14, 14] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#97E152", "#002855"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], boundaryGap: false },
        yAxis: { type: "value", name: "Share (%)", min: 0, max: 100 },
        series: [
          { name: "Business", type: "line", stack: "pct", areaStyle: {}, data: [40, 38, 37, 36, 35, 34] },
          { name: "Technology", type: "line", stack: "pct", areaStyle: {}, data: [30, 31, 32, 33, 34, 35] },
          { name: "Education", type: "line", stack: "pct", areaStyle: {}, data: [18, 18, 18, 18, 17, 17] },
          { name: "Healthcare", type: "line", stack: "pct", areaStyle: {}, data: [12, 13, 13, 13, 14, 14] }
        ]
      }
    }
  },
  {
    id: "cot-stepped-echarts",
    title: "Stepped line chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "stepped",
    whenToUse: "Represent policy or tier changes that happen at discrete points in ECharts when step-line rendering is needed alongside interactive tooltip or zoom.",
    description: "ECharts line with step:'start' producing horizontal segments that drop/rise only at recorded change points \u2014 ideal for policy thresholds and fee schedule changes.",
    tags: ["time-series", "single-series", "stepped", "discrete-change", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stepped"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      series: [{ label: "Partner Tier Threshold", data: [100, 100, 150, 150, 150, 200] }]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], boundaryGap: false },
        yAxis: { type: "value", name: "Threshold ($K)" },
        series: [{
          name: "Partner Tier Threshold",
          type: "line",
          step: "start",
          data: [100, 100, 150, 150, 150, 200],
          lineStyle: { color: "#0070F0", width: 2 },
          itemStyle: { color: "#0070F0" },
          areaStyle: { color: "#EEF6F9", opacity: 0.5 },
          symbolSize: 8
        }]
      }
    }
  },
  {
    id: "cot-multi-area-echarts",
    title: "Multi-series area chart (ECharts)",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "multi-area",
    whenToUse: "Show the absolute volume trend of two or more non-stacked metrics simultaneously with semi-transparent fills that overlap gracefully \u2014 useful when metrics share a common unit.",
    description: "ECharts lineOption with area:true applied to multiple series; series use lower opacity fills (0.15) so overlap is visible when metrics cross. Distinct from stacked area.",
    tags: ["time-series", "multi-series", "area", "trend", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multi-series", "area", "trend"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { label: "Enrollments", data: [1820, 1945, 2110, 2050, 2280, 2430, 2190, 2350, 2620, 2510, 2380, 2640] },
        { label: "Active Learners", data: [1620, 1800, 1950, 1900, 2100, 2240, 2010, 2180, 2430, 2320, 2200, 2460] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "lineOption",
      args: [
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        [
          { label: "Enrollments", data: [1820, 1945, 2110, 2050, 2280, 2430, 2190, 2350, 2620, 2510, 2380, 2640] },
          { label: "Active Learners", data: [1620, 1800, 1950, 1900, 2100, 2240, 2010, 2180, 2430, 2320, 2200, 2460] }
        ],
        { area: true }
      ]
    }
  },
  {
    id: "cot-line-forecast",
    title: "Line with forecast band",
    family: "change-over-time",
    engine: "echarts",
    chartType: "line",
    variant: "forecast",
    whenToUse: "Extend a historical trend into a forecast period with a confidence band \u2014 useful for enrollment projections where historical actuals are solid and future values carry uncertainty.",
    description: "Two line series sharing the same x-axis: actuals (solid) and forecast (dashed). A markArea shades the forecast window and optional upper/lower band lines bracket the confidence interval.",
    tags: ["time-series", "forecast", "uncertainty", "trend", "annotations", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["forecast", "annotations", "trend"],
    sampleData: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      actuals: [1820, 1945, 2110, 2050, 2280, 2430, null, null, null, null],
      forecast: [null, null, null, null, null, 2430, 2510, 2640, 2590, 2720],
      forecastStart: "Jun"
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF"],
        tooltip: { trigger: "axis" },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], boundaryGap: false },
        yAxis: { type: "value", name: "Enrollments", min: 1600 },
        series: [
          {
            name: "Actuals",
            type: "line",
            smooth: true,
            data: [1820, 1945, 2110, 2050, 2280, 2430, null, null, null, null],
            lineStyle: { color: "#0070F0", width: 2 },
            itemStyle: { color: "#0070F0" },
            connectNulls: false
          },
          {
            name: "Forecast",
            type: "line",
            smooth: true,
            data: [null, null, null, null, null, 2430, 2510, 2640, 2590, 2720],
            lineStyle: { color: "#46B1EF", width: 2, type: "dashed" },
            itemStyle: { color: "#46B1EF" },
            areaStyle: { color: "#EEF6F9", opacity: 0.4 },
            connectNulls: false,
            markArea: {
              silent: true,
              itemStyle: { color: "rgba(70,177,239,0.08)" },
              data: [[{ name: "Forecast Period", xAxis: "Jun" }, { xAxis: "Oct" }]]
            }
          }
        ]
      }
    }
  },
  {
    id: "cot-candlestick-echarts-volume",
    title: "Candlestick with volume bars",
    family: "change-over-time",
    engine: "echarts",
    chartType: "candlestick",
    variant: "with-volume",
    whenToUse: "Show OHLC price action alongside volume bars in a classic stock chart layout \u2014 the two-panel layout lets readers correlate price moves with activity volume.",
    description: "A candlestick series in the upper grid panel paired with a volume bar series in a smaller lower grid panel; both share the same category time axis. ECharts raw option.",
    tags: ["time-series", "ohlc", "financial", "range", "volume", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["ohlc", "range", "multi-panel"],
    sampleData: [
      { date: "Jan 1", o: 150, h: 162, l: 148, c: 158, vol: 12e3 },
      { date: "Jan 2", o: 158, h: 165, l: 151, c: 152, vol: 8500 },
      { date: "Jan 3", o: 152, h: 160, l: 149, c: 159, vol: 9800 },
      { date: "Jan 4", o: 159, h: 170, l: 157, c: 168, vol: 14200 },
      { date: "Jan 5", o: 168, h: 172, l: 161, c: 163, vol: 10600 }
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        grid: [
          { left: 60, right: 20, top: 20, bottom: "35%" },
          { left: 60, right: 20, top: "68%", bottom: 40 }
        ],
        xAxis: [
          { type: "category", data: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5"], gridIndex: 0, boundaryGap: true },
          { type: "category", data: ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5"], gridIndex: 1, boundaryGap: true, axisLabel: { show: false } }
        ],
        yAxis: [
          { type: "value", scale: true, gridIndex: 0, name: "Price ($)" },
          { type: "value", gridIndex: 1, name: "Volume", splitNumber: 2 }
        ],
        dataZoom: [{ type: "inside", xAxisIndex: [0, 1] }, { type: "slider", xAxisIndex: [0, 1], bottom: 8 }],
        series: [
          {
            name: "OHLC",
            type: "candlestick",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [[150, 158, 148, 162], [158, 152, 151, 165], [152, 159, 149, 160], [159, 168, 157, 170], [168, 163, 161, 172]],
            itemStyle: { color: "#0070F0", color0: "#46B1EF", borderColor: "#002855", borderColor0: "#46B1EF" }
          },
          {
            name: "Volume",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [12e3, 8500, 9800, 14200, 10600],
            itemStyle: { color: "#0070F0", borderRadius: [4, 4, 0, 0] }
          }
        ]
      }
    }
  },
  {
    id: "cot-bar-stacked-time",
    title: "Stacked bar \u2014 time series",
    family: "change-over-time",
    secondaryFamilies: ["part-to-whole"],
    engine: "chartjs",
    chartType: "groupedBar",
    variant: "stacked-time",
    whenToUse: "Use a stacked column over time when both total growth and component breakdown matter \u2014 an alternative to stacked area when discrete period boundaries should be visually apparent.",
    description: "Chart.js stacked groupedBar where the x-axis represents time periods; bar height shows total enrollment and segment color distinguishes component series. Crisp bar edges reinforce discrete period reads.",
    tags: ["time-series", "multi-series", "stacked", "categorical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "multi-series"],
    sampleData: {
      labels: ["FY21", "FY22", "FY23", "FY24", "FY25"],
      series: [
        { label: "Business", data: [3800, 4100, 4400, 4700, 5e3] },
        { label: "Technology", data: [2900, 3200, 3600, 4e3, 4400] },
        { label: "Education", data: [2100, 2200, 2400, 2600, 2800] },
        { label: "Healthcare", data: [1500, 1700, 1900, 2100, 2400] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "groupedBar",
      labels: ["FY21", "FY22", "FY23", "FY24", "FY25"],
      data: [
        { label: "Business", data: [3800, 4100, 4400, 4700, 5e3] },
        { label: "Technology", data: [2900, 3200, 3600, 4e3, 4400] },
        { label: "Education", data: [2100, 2200, 2400, 2600, 2800] },
        { label: "Healthcare", data: [1500, 1700, 1900, 2100, 2400] }
      ],
      opts: { stacked: true }
    }
  },
  {
    id: "change-over-time-stacked-area",
    title: "Stacked area chart",
    family: "change-over-time",
    secondaryFamilies: ["part-to-whole"],
    engine: "echarts",
    chartType: "line",
    variant: "stacked-area",
    whenToUse: "Show how the combined total and each component series evolves over time \u2014 e.g. enrollment mix across colleges where both total growth and shifting share matter.",
    description: "Multiple line series with stack:'total' and areaStyle active; the filled bands accumulate to the overall total at each time point, making both composition and magnitude visible.",
    tags: ["time-series", "multi-series", "stacked", "area", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "area"],
    sampleData: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { label: "Business", data: [820, 860, 910, 880, 950, 1010, 940, 980, 1060, 1030, 990, 1080] },
        { label: "Technology", data: [610, 640, 690, 670, 720, 760, 710, 745, 800, 780, 760, 820] },
        { label: "Education", data: [390, 410, 430, 420, 450, 470, 445, 460, 490, 480, 465, 500] },
        { label: "Healthcare", data: [280, 295, 315, 305, 330, 350, 320, 340, 365, 355, 340, 375] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#97E152", "#002855"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        legend: { bottom: 0 },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: { type: "value", name: "Enrollments" },
        series: [
          { name: "Business", type: "line", stack: "total", smooth: true, areaStyle: {}, data: [820, 860, 910, 880, 950, 1010, 940, 980, 1060, 1030, 990, 1080] },
          { name: "Technology", type: "line", stack: "total", smooth: true, areaStyle: {}, data: [610, 640, 690, 670, 720, 760, 710, 745, 800, 780, 760, 820] },
          { name: "Education", type: "line", stack: "total", smooth: true, areaStyle: {}, data: [390, 410, 430, 420, 450, 470, 445, 460, 490, 480, 465, 500] },
          { name: "Healthcare", type: "line", stack: "total", smooth: true, areaStyle: {}, data: [280, 295, 315, 305, 330, 350, 320, 340, 365, 355, 340, 375] }
        ]
      }
    }
  }
];

// src/corpus/entries/part-to-whole.ts
var partToWhole = [
  {
    id: "ptw-doughnut",
    title: "Doughnut chart",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "doughnut",
    whenToUse: "Show a small number of slices (2\u20136) as shares of a whole; the center hole can host a summary label.",
    description: "Ring chart where arc length encodes each segment's proportion of the total. Center void draws the eye to the shape of the breakdown.",
    tags: ["proportional", "categorical", "ring"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent"],
    sampleData: [
      { label: "Business", count: 38 },
      { label: "Technology", count: 27 },
      { label: "Education", count: 20 },
      { label: "Healthcare", count: 15 }
    ],
    spec: {
      engine: "chartjs",
      type: "doughnut",
      data: [
        { label: "Business", count: 38 },
        { label: "Technology", count: 27 },
        { label: "Education", count: 20 },
        { label: "Healthcare", count: 15 }
      ]
    }
  },
  {
    id: "ptw-pie",
    title: "Pie chart",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "pie",
    whenToUse: "Display proportional breakdown when a filled circle is preferred over a ring and the number of categories is small.",
    description: "Full-circle chart where each slice's central angle encodes its share of the total.",
    tags: ["proportional", "categorical", "circle"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent"],
    sampleData: [
      { label: "On Track", count: 62 },
      { label: "At Risk", count: 23 },
      { label: "Off Track", count: 15 }
    ],
    spec: {
      engine: "chartjs",
      type: "pie",
      data: [
        { label: "On Track", count: 62 },
        { label: "At Risk", count: 23 },
        { label: "Off Track", count: 15 }
      ]
    }
  },
  {
    id: "ptw-doughnut-thin-ring",
    title: "Thin-ring doughnut",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "doughnut",
    variant: "thin-ring",
    whenToUse: "Use a thinner ring when the center label or KPI value should dominate the visual and the arc itself is secondary.",
    description: "Doughnut with a high cutout percentage (88 %) producing a slender ring; maximizes whitespace for an inset label or number.",
    tags: ["proportional", "categorical", "ring", "thin"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent", "thin-ring"],
    sampleData: [
      { label: "Completed", count: 74 },
      { label: "Remaining", count: 26 }
    ],
    spec: {
      engine: "chartjs",
      type: "doughnut",
      data: [
        { label: "Completed", count: 74 },
        { label: "Remaining", count: 26 }
      ],
      opts: { cutout: "88%" }
    }
  },
  {
    id: "ptw-polar-area",
    title: "Polar area chart",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "polarArea",
    whenToUse: "Compare categories by both area and radial extent when a circular layout better suits the visual context than a bar chart.",
    description: "Segments share equal angles but their radii encode value; the combined area impression reinforces magnitude differences.",
    tags: ["proportional", "categorical", "radial", "area"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["radial", "area"],
    sampleData: [
      { label: "MBA", count: 85 },
      { label: "BSCS", count: 62 },
      { label: "BSN", count: 74 },
      { label: "TEP", count: 48 },
      { label: "BSIT", count: 55 }
    ],
    spec: {
      engine: "chartjs",
      type: "polarArea",
      data: [
        { label: "MBA", count: 85 },
        { label: "BSCS", count: 62 },
        { label: "BSN", count: 74 },
        { label: "TEP", count: 48 },
        { label: "BSIT", count: 55 }
      ]
    }
  },
  {
    id: "ptw-treemap",
    title: "Treemap",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "treemap",
    whenToUse: "Show hierarchical or flat part-to-whole relationships when there are too many segments for a pie; area encodes value.",
    description: "Nested rectangles fill the canvas; each rectangle's area is proportional to its value. ECharts implementation with WGU theme.",
    tags: ["proportional", "hierarchical", "area", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "hierarchical"],
    sampleData: [
      { name: "MBA", value: 120 },
      { name: "BSN", value: 90 },
      { name: "BSCS", value: 75 },
      { name: "IT", value: 70 },
      { name: "TEP", value: 55 },
      { name: "MSML", value: 40 }
    ],
    spec: {
      engine: "echarts",
      factory: "treemapOption",
      args: [
        [
          { name: "MBA", value: 120 },
          { name: "BSN", value: 90 },
          { name: "BSCS", value: 75 },
          { name: "IT", value: 70 },
          { name: "TEP", value: 55 },
          { name: "MSML", value: 40 }
        ]
      ]
    }
  },
  {
    id: "ptw-sunburst",
    title: "Sunburst chart",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "sunburst",
    whenToUse: "Reveal hierarchical part-to-whole relationships \u2014 e.g. college \u2192 program \u2192 cohort \u2014 where nested proportions at every level matter.",
    description: "Rings radiate outward from a central root; each ring represents a hierarchy level and arc lengths encode value. Built with the ECharts sunburstOption factory.",
    tags: ["proportional", "hierarchical", "radial", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["nested", "hierarchical", "radial"],
    sampleData: [
      { name: "Business", children: [
        { name: "MBA", value: 420 },
        { name: "BSBA", value: 310 },
        { name: "MSML", value: 180 }
      ] },
      { name: "Technology", children: [
        { name: "BSCS", value: 380 },
        { name: "BSIT", value: 270 },
        { name: "MSCSIA", value: 140 }
      ] },
      { name: "Education", children: [
        { name: "TEP", value: 290 },
        { name: "MAED", value: 160 }
      ] }
    ],
    spec: {
      engine: "echarts",
      factory: "sunburstOption",
      args: [[
        { name: "Business", children: [
          { name: "MBA", value: 420 },
          { name: "BSBA", value: 310 },
          { name: "MSML", value: 180 }
        ] },
        { name: "Technology", children: [
          { name: "BSCS", value: 380 },
          { name: "BSIT", value: 270 },
          { name: "MSCSIA", value: 140 }
        ] },
        { name: "Education", children: [
          { name: "TEP", value: 290 },
          { name: "MAED", value: 160 }
        ] }
      ]]
    }
  },
  {
    id: "ptw-pie-echarts",
    title: "Pie chart (ECharts)",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    whenToUse: "Display proportional breakdown with ECharts rendering for richer tooltip interaction and WGU-theme color sequencing.",
    description: "Full pie using ECharts pieOption factory; WGU-themed color sequence, bordered slices, and formatted percentage tooltip.",
    tags: ["proportional", "categorical", "circle", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent"],
    sampleData: [
      { name: "On Track", value: 62 },
      { name: "At Risk", value: 23 },
      { name: "Off Track", value: 15 }
    ],
    spec: {
      engine: "echarts",
      factory: "pieOption",
      args: [[
        { name: "On Track", value: 62 },
        { name: "At Risk", value: 23 },
        { name: "Off Track", value: 15 }
      ]]
    }
  },
  {
    id: "ptw-donut-echarts",
    title: "Donut chart (ECharts)",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    variant: "donut",
    whenToUse: "Render a donut-style pie in ECharts when center-ring whitespace or a summary label overlay is needed alongside richer interactions.",
    description: "ECharts pie with donut:true producing a 55%\u201375% inner-outer radius ring; WGU-themed colors and bordered slice separation.",
    tags: ["proportional", "categorical", "ring", "donut", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent", "donut"],
    sampleData: [
      { name: "Business", value: 38 },
      { name: "Technology", value: 27 },
      { name: "Education", value: 20 },
      { name: "Healthcare", value: 15 }
    ],
    spec: {
      engine: "echarts",
      factory: "pieOption",
      args: [
        [
          { name: "Business", value: 38 },
          { name: "Technology", value: 27 },
          { name: "Education", value: 20 },
          { name: "Healthcare", value: 15 }
        ],
        { donut: true }
      ]
    }
  },
  {
    id: "ptw-nested-donut",
    title: "Nested donut (dual-ring)",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    variant: "nested-donut",
    whenToUse: "Show two levels of a part-to-whole hierarchy simultaneously \u2014 outer ring for sub-categories, inner ring for parent categories \u2014 without needing a full sunburst.",
    description: "Two ECharts pie series at different inner/outer radii create concentric rings; the inner ring shows top-level college share, the outer ring shows program-level share.",
    tags: ["proportional", "hierarchical", "ring", "donut", "nested", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["nested", "hierarchical"],
    sampleData: {
      inner: [
        { name: "Business", value: 910 },
        { name: "Technology", value: 790 },
        { name: "Education", value: 450 }
      ],
      outer: [
        { name: "MBA", value: 420 },
        { name: "BSBA", value: 310 },
        { name: "MSML", value: 180 },
        { name: "BSCS", value: 380 },
        { name: "BSIT", value: 270 },
        { name: "MSCSIA", value: 140 },
        { name: "TEP", value: 290 },
        { name: "MAED", value: 160 }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        legend: { bottom: 0 },
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#8B5CF6", "#F59E0B", "#10B981", "#EF4444"],
        series: [
          {
            type: "pie",
            radius: ["20%", "45%"],
            label: { position: "inner", fontSize: 11, color: "#fff" },
            itemStyle: { borderColor: "#fff", borderWidth: 3 },
            data: [
              { name: "Business", value: 910 },
              { name: "Technology", value: 790 },
              { name: "Education", value: 450 }
            ]
          },
          {
            type: "pie",
            radius: ["50%", "72%"],
            label: { formatter: "{b} ({d}%)", fontSize: 11 },
            itemStyle: { borderColor: "#fff", borderWidth: 2 },
            data: [
              { name: "MBA", value: 420 },
              { name: "BSBA", value: 310 },
              { name: "MSML", value: 180 },
              { name: "BSCS", value: 380 },
              { name: "BSIT", value: 270 },
              { name: "MSCSIA", value: 140 },
              { name: "TEP", value: 290 },
              { name: "MAED", value: 160 }
            ]
          }
        ]
      }
    }
  },
  {
    id: "ptw-stacked-100",
    title: "Stacked 100% bar",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "groupedBar",
    variant: "stacked-100",
    whenToUse: "Compare the proportional composition across multiple categories when absolute totals are less important than share distribution.",
    description: "Stacked bars where each column's segments are authored to sum to 100% (a data convention \u2014 the engine stacks but does not auto-normalize).",
    tags: ["proportional", "multi-series", "stacked", "percent", "categorical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "percent", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education"],
      series: [
        { label: "On Track", data: [60, 55, 70] },
        { label: "At Risk", data: [25, 30, 20] },
        { label: "Off Track", data: [15, 15, 10] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "groupedBar",
      labels: ["Business", "Technology", "Education"],
      data: [
        { label: "On Track", data: [60, 55, 70] },
        { label: "At Risk", data: [25, 30, 20] },
        { label: "Off Track", data: [15, 15, 10] }
      ],
      opts: { stacked: true }
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "ptw-nightingale-rose",
    title: "Nightingale / rose chart",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    variant: "nightingale",
    whenToUse: "Show proportional categories in a polar layout where both angle and radius encode value \u2014 a visually distinctive alternative to a standard pie when a dashboard needs a focal centerpiece.",
    description: "ECharts pie with roseType:'area'; each sector's radius is proportional to its value while the central angle is equal, giving a petal-like visual balance. WGU brand palette.",
    tags: ["proportional", "categorical", "radial", "nightingale", "rose", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["radial", "percent"],
    sampleData: [
      { name: "Business", value: 38 },
      { name: "Technology", value: 27 },
      { name: "Education", value: 20 },
      { name: "Healthcare", value: 15 },
      { name: "Engineering", value: 10 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468"],
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        legend: { bottom: 0 },
        series: [{
          type: "pie",
          roseType: "area",
          radius: ["15%", "70%"],
          itemStyle: { borderColor: "#fff", borderWidth: 2 },
          data: [
            { name: "Business", value: 38 },
            { name: "Technology", value: 27 },
            { name: "Education", value: 20 },
            { name: "Healthcare", value: 15 },
            { name: "Engineering", value: 10 }
          ],
          label: { formatter: "{b}: {d}%" }
        }]
      }
    }
  },
  {
    id: "ptw-half-donut",
    title: "Half-donut chart",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    variant: "half-donut",
    whenToUse: "Use a semi-circular arc layout when the chart must sit at the bottom or top of a card \u2014 the flat edge hugs the container boundary and saves vertical space compared to a full donut.",
    description: "ECharts pie series with startAngle:180 and endAngle:0 (or -180) to produce a half-circle donut; legend sits above the arc. WGU brand colors.",
    tags: ["proportional", "categorical", "ring", "half", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent", "donut"],
    sampleData: [
      { name: "On Track", value: 62 },
      { name: "At Risk", value: 23 },
      { name: "Off Track", value: 15 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855"],
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        legend: { top: 10 },
        series: [{
          type: "pie",
          radius: ["40%", "70%"],
          startAngle: 180,
          data: [
            { name: "On Track", value: 62 },
            { name: "At Risk", value: 23 },
            { name: "Off Track", value: 15 },
            { name: "", value: 100, itemStyle: { color: "transparent" }, label: { show: false }, tooltip: { show: false } }
          ],
          itemStyle: { borderColor: "#fff", borderWidth: 2 },
          label: { formatter: "{b}\n{d}%", fontSize: 11 }
        }]
      }
    }
  },
  {
    id: "ptw-treemap-chartjs",
    title: "Treemap (Chart.js)",
    family: "part-to-whole",
    engine: "chartjs",
    chartType: "treemap",
    whenToUse: "Show flat part-to-whole relationships in Chart.js when the treemap rendering must share a Chart.js canvas context with other Chart.js charts on the same page.",
    description: "chartjs-chart-treemap plugin rendering rectangular cells proportional to value; WGU blue heat ramp applied. Useful when avoiding a second ECharts instance.",
    tags: ["proportional", "area", "treemap", "chartjs"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "hierarchical"],
    sampleData: [
      { label: "MBA", count: 120, group: "Business" },
      { label: "BSBA", count: 80, group: "Business" },
      { label: "BSCS", count: 75, group: "Technology" },
      { label: "BSIT", count: 60, group: "Technology" },
      { label: "BSN", count: 90, group: "Health" },
      { label: "TEP", count: 55, group: "Education" }
    ],
    spec: {
      engine: "chartjs",
      type: "treemap",
      data: [
        { label: "MBA", count: 120, group: "Business" },
        { label: "BSBA", count: 80, group: "Business" },
        { label: "BSCS", count: 75, group: "Technology" },
        { label: "BSIT", count: 60, group: "Technology" },
        { label: "BSN", count: 90, group: "Health" },
        { label: "TEP", count: 55, group: "Education" }
      ]
    }
  },
  {
    id: "ptw-sunburst-multilevel",
    title: "Multi-level sunburst",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "sunburst",
    variant: "multilevel",
    whenToUse: "Reveal three or more levels of a part-to-whole hierarchy simultaneously \u2014 e.g. College \u2192 Program \u2192 Concentration \u2014 when seeing the proportions at every depth level at once matters more than drilling interactively.",
    description: "Radial sunburst with three rings radiating outward: the innermost ring shows colleges, the middle ring shows programs, and the outer ring shows concentrations; arc lengths encode enrollment share at every level. Distinct from the 2-level sunburst by exposing a full third tier, making leaf-level proportions immediately visible without any interaction. WGU brand palette.",
    tags: ["proportional", "hierarchical", "radial", "multilevel", "hierarchy", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["nested", "hierarchical", "multilevel"],
    sampleData: [
      { name: "Business", children: [
        { name: "MBA", children: [{ name: "General MBA", value: 180 }, { name: "MBA-HCM", value: 140 }, { name: "MBA-IT", value: 100 }] },
        { name: "BSBA", children: [{ name: "Accounting", value: 130 }, { name: "Marketing", value: 110 }, { name: "Finance", value: 70 }] },
        { name: "MSML", children: [{ name: "Leadership", value: 110 }, { name: "Healthcare Mgmt", value: 70 }] }
      ] },
      { name: "Technology", children: [
        { name: "BSCS", children: [{ name: "Software Eng", value: 160 }, { name: "AI/ML", value: 130 }, { name: "Cloud", value: 90 }] },
        { name: "BSIT", children: [{ name: "Network Admin", value: 110 }, { name: "Data Mgmt", value: 90 }, { name: "Security", value: 70 }] }
      ] },
      { name: "Education", children: [
        { name: "TEP", children: [{ name: "Elementary", value: 120 }, { name: "Secondary", value: 100 }, { name: "Special Ed", value: 70 }] },
        { name: "MAED", children: [{ name: "Curriculum", value: 90 }, { name: "Admin", value: 70 }] }
      ] }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468", "#8B5CF6"],
        tooltip: { trigger: "item" },
        series: [{
          type: "sunburst",
          data: [
            { name: "Business", children: [
              { name: "MBA", children: [{ name: "General MBA", value: 180 }, { name: "MBA-HCM", value: 140 }, { name: "MBA-IT", value: 100 }] },
              { name: "BSBA", children: [{ name: "Accounting", value: 130 }, { name: "Marketing", value: 110 }, { name: "Finance", value: 70 }] },
              { name: "MSML", children: [{ name: "Leadership", value: 110 }, { name: "Healthcare Mgmt", value: 70 }] }
            ] },
            { name: "Technology", children: [
              { name: "BSCS", children: [{ name: "Software Eng", value: 160 }, { name: "AI/ML", value: 130 }, { name: "Cloud", value: 90 }] },
              { name: "BSIT", children: [{ name: "Network Admin", value: 110 }, { name: "Data Mgmt", value: 90 }, { name: "Security", value: 70 }] }
            ] },
            { name: "Education", children: [
              { name: "TEP", children: [{ name: "Elementary", value: 120 }, { name: "Secondary", value: 100 }, { name: "Special Ed", value: 70 }] },
              { name: "MAED", children: [{ name: "Curriculum", value: 90 }, { name: "Admin", value: 70 }] }
            ] }
          ],
          radius: [0, "90%"],
          sort: "desc",
          emphasis: { focus: "ancestor" },
          label: { rotate: "radial", fontSize: 10, minAngle: 8 },
          itemStyle: { borderColor: "#fff", borderWidth: 2 }
        }]
      }
    }
  },
  {
    id: "ptw-pie-label-lines",
    title: "Pie chart with callout label lines",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "pie",
    variant: "label-lines",
    whenToUse: "Display slice labels outside the pie with leader lines when slices are too narrow for inside labels \u2014 prevents text overlap and preserves slice readability for 6+ categories.",
    description: "ECharts pie with label.position:'outside' and labelLine:{ show:true, length:12 }; each label anchors to its slice with an elbow connector. WGU palette separates 6 programs.",
    tags: ["proportional", "categorical", "circle", "label-lines", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["percent", "label-lines"],
    sampleData: [
      { name: "MBA", value: 28 },
      { name: "BSCS", value: 22 },
      { name: "BSN", value: 18 },
      { name: "TEP", value: 14 },
      { name: "MSML", value: 11 },
      { name: "BSIT", value: 7 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468", "#8B5CF6"],
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        series: [{
          type: "pie",
          radius: ["0%", "58%"],
          label: { position: "outside", formatter: "{b}\n{d}%", fontSize: 11 },
          labelLine: { show: true, length: 12, length2: 8 },
          data: [
            { name: "MBA", value: 28 },
            { name: "BSCS", value: 22 },
            { name: "BSN", value: 18 },
            { name: "TEP", value: 14 },
            { name: "MSML", value: 11 },
            { name: "BSIT", value: 7 }
          ],
          itemStyle: { borderColor: "#fff", borderWidth: 2 }
        }]
      }
    }
  },
  {
    id: "ptw-stacked-100-echarts",
    title: "Stacked 100% bar (ECharts, proportional labels)",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "bar",
    variant: "stacked-100-labels",
    whenToUse: "Compare proportional composition across categories in ECharts with percentage labels shown directly on each segment so the reader sees exact share without consulting a tooltip.",
    description: 'Stacked bar where authors pre-compute percentage values summing to 100; label formatter appends "%" and insideLeft position prevents overflow. ECharts barOption with stacked:true.',
    tags: ["proportional", "multi-series", "stacked", "percent", "label-inside", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "percent", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education"],
      series: [
        { label: "On Track", data: [60, 55, 70] },
        { label: "At Risk", data: [25, 30, 20] },
        { label: "Off Track", data: [15, 15, 10] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#97E152", "#F59E0B", "#E5484D"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Business", "Technology", "Education"] },
        yAxis: { type: "value", name: "Share (%)", max: 100 },
        series: [
          { name: "On Track", type: "bar", stack: "pct", data: [60, 55, 70], label: { show: true, position: "inside", formatter: "{c}%" }, itemStyle: { color: "#97E152" } },
          { name: "At Risk", type: "bar", stack: "pct", data: [25, 30, 20], label: { show: true, position: "inside", formatter: "{c}%" }, itemStyle: { color: "#F59E0B" } },
          { name: "Off Track", type: "bar", stack: "pct", data: [15, 15, 10], label: { show: true, position: "inside", formatter: "{c}%" }, itemStyle: { color: "#E5484D" } }
        ]
      }
    }
  },
  {
    id: "part-to-whole-sunburst-drilldown",
    title: "Sunburst with click-to-drill interaction",
    family: "part-to-whole",
    engine: "echarts",
    chartType: "sunburst",
    variant: "drilldown",
    whenToUse: "Let users explore a hierarchy interactively \u2014 clicking a node zooms into that branch (rootToNode), making a dense college \u2192 program \u2192 cohort breakdown approachable without overwhelming detail upfront.",
    description: "ECharts sunburst with nodeClick:'rootToNode'; clicking any arc re-roots the chart at that node and hides sibling branches. A breadcrumb trail in the label guides orientation. WGU-branded colors.",
    tags: ["proportional", "hierarchical", "radial", "interactive", "drilldown", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["drilldown", "interactive"],
    sampleData: [
      { name: "Business", children: [
        { name: "MBA", children: [{ name: "Full-Time", value: 240 }, { name: "Part-Time", value: 180 }] },
        { name: "BSBA", children: [{ name: "Full-Time", value: 190 }, { name: "Part-Time", value: 120 }] },
        { name: "MSML", value: 180 }
      ] },
      { name: "Technology", children: [
        { name: "BSCS", children: [{ name: "Full-Time", value: 230 }, { name: "Part-Time", value: 150 }] },
        { name: "BSIT", children: [{ name: "Full-Time", value: 160 }, { name: "Part-Time", value: 110 }] },
        { name: "MSCSIA", value: 140 }
      ] },
      { name: "Education", children: [
        { name: "TEP", value: 290 },
        { name: "MAED", value: 160 }
      ] }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468", "#8B5CF6"],
        tooltip: { trigger: "item" },
        series: [{
          type: "sunburst",
          nodeClick: "rootToNode",
          radius: ["15%", "90%"],
          data: [
            { name: "Business", children: [
              { name: "MBA", children: [{ name: "Full-Time", value: 240 }, { name: "Part-Time", value: 180 }] },
              { name: "BSBA", children: [{ name: "Full-Time", value: 190 }, { name: "Part-Time", value: 120 }] },
              { name: "MSML", value: 180 }
            ] },
            { name: "Technology", children: [
              { name: "BSCS", children: [{ name: "Full-Time", value: 230 }, { name: "Part-Time", value: 150 }] },
              { name: "BSIT", children: [{ name: "Full-Time", value: 160 }, { name: "Part-Time", value: 110 }] },
              { name: "MSCSIA", value: 140 }
            ] },
            { name: "Education", children: [
              { name: "TEP", value: 290 },
              { name: "MAED", value: 160 }
            ] }
          ],
          label: { rotate: "radial", fontSize: 11 },
          itemStyle: { borderColor: "#fff", borderWidth: 2 }
        }]
      }
    }
  }
];

// src/corpus/entries/ranking.ts
var ranking = [
  {
    id: "ranking-bar-ordered",
    title: "Ordered horizontal bar (ranking)",
    family: "ranking",
    engine: "chartjs",
    chartType: "bar",
    variant: "ordered",
    whenToUse: "Show relative rank of items when ordering itself is the insight \u2014 place highest value at top.",
    description: "Horizontal bars pre-sorted in descending order so the reader can immediately scan rank from top to bottom.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "sorted"],
    sampleData: [
      { label: "Computer Science", count: 540 },
      { label: "Business Admin", count: 480 },
      { label: "Nursing", count: 410 },
      { label: "Teaching", count: 330 },
      { label: "Cybersecurity", count: 270 },
      { label: "Data Analytics", count: 210 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "Computer Science", count: 540 },
        { label: "Business Admin", count: 480 },
        { label: "Nursing", count: 410 },
        { label: "Teaching", count: 330 },
        { label: "Cybersecurity", count: 270 },
        { label: "Data Analytics", count: 210 }
      ]
    }
  },
  {
    id: "ranking-bar-medal",
    title: "Medal bar (top-highlighted ranking)",
    family: "ranking",
    engine: "chartjs",
    chartType: "bar",
    variant: "medal",
    whenToUse: "Emphasize the top-ranked item while preserving rank context for the rest of the list.",
    description: "Sorted horizontal bar with a lead color applied so the #1 item stands out; useful for leaderboard summaries.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "branded"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "sorted", "branded"],
    sampleData: [
      { label: "MBA", count: 620 },
      { label: "BSCS", count: 480 },
      { label: "BSN", count: 395 },
      { label: "BSIT", count: 310 },
      { label: "TEP", count: 225 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "MBA", count: 620 },
        { label: "BSCS", count: 480 },
        { label: "BSN", count: 395 },
        { label: "BSIT", count: 310 },
        { label: "TEP", count: 225 }
      ],
      opts: { leadColor: "#97E152" }
    }
  },
  {
    id: "ranking-lollipop",
    title: "Lollipop chart",
    family: "ranking",
    engine: "echarts",
    chartType: "lollipop",
    whenToUse: "Show ranked magnitudes with a cleaner visual than a bar chart \u2014 the thin stem and dot reduce ink, making tied or close values easier to distinguish.",
    description: "Two overlapping ECharts series share a category axis: a thin bar series (barWidth:3) provides the stem and a scatter series (symbolSize:16) provides the circular head.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["lollipop"],
    sampleData: [
      { label: "Computer Science", value: 540 },
      { label: "Business Admin", value: 480 },
      { label: "Nursing", value: 410 },
      { label: "Teaching", value: 330 },
      { label: "Cybersecurity", value: 270 },
      { label: "Data Analytics", value: 210 }
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis" },
        color: ["#0070F0"],
        yAxis: {
          type: "category",
          data: ["Data Analytics", "Cybersecurity", "Teaching", "Nursing", "Business Admin", "Computer Science"]
        },
        xAxis: { type: "value", name: "Enrollments" },
        series: [
          {
            type: "bar",
            barWidth: 3,
            data: [210, 270, 330, 410, 480, 540],
            itemStyle: { color: "#0070F0" },
            z: 1
          },
          {
            type: "scatter",
            symbolSize: 16,
            data: [210, 270, 330, 410, 480, 540],
            itemStyle: { color: "#0070F0", borderColor: "#fff", borderWidth: 2 },
            z: 2
          }
        ]
      }
    }
  },
  {
    id: "ranking-bar-ordered-echarts",
    title: "Ordered horizontal bar (ECharts)",
    family: "ranking",
    engine: "echarts",
    chartType: "bar",
    variant: "ordered",
    whenToUse: "Show relative rank in ECharts when the ranked list needs a richer tooltip, axis zoom, or export button \u2014 the ECharts engine alternative to the Chart.js ranked bar.",
    description: "Horizontal bar sorted descending using barOption with horizontal:true; value labels render at bar ends and the inverse y-axis places #1 at top.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "sorted"],
    sampleData: {
      labels: ["Computer Science", "Business Admin", "Nursing", "Teaching", "Cybersecurity", "Data Analytics"],
      series: [{ label: "Enrollments", data: [540, 480, 410, 330, 270, 210] }]
    },
    spec: {
      engine: "echarts",
      factory: "barOption",
      args: [
        ["Data Analytics", "Cybersecurity", "Teaching", "Nursing", "Business Admin", "Computer Science"],
        [{ label: "Enrollments", data: [210, 270, 330, 410, 480, 540] }],
        { horizontal: true }
      ]
    }
  },
  {
    id: "ranking-dot-cleveland",
    title: "Cleveland dot plot",
    family: "ranking",
    engine: "echarts",
    chartType: "scatter",
    variant: "cleveland",
    whenToUse: "Show ranked values with a minimal ink-to-data ratio \u2014 the Cleveland dot plot removes bar fills to reduce clutter while preserving precise value reading via the dot position.",
    description: "Scatter series on a category axis; each category gets one dot positioned on the value axis. A thin gridline backdrop aids reading without heavy bar fills. ECharts raw option.",
    tags: ["categorical", "single-series", "ranking", "sorted", "minimal", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["minimal", "sorted"],
    sampleData: [
      { label: "Computer Science", value: 540 },
      { label: "Business Admin", value: 480 },
      { label: "Nursing", value: 410 },
      { label: "Teaching", value: 330 },
      { label: "Cybersecurity", value: 270 },
      { label: "Data Analytics", value: 210 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        grid: { left: 160, right: 80 },
        xAxis: { type: "value", name: "Enrollments" },
        yAxis: {
          type: "category",
          data: ["Data Analytics", "Cybersecurity", "Teaching", "Nursing", "Business Admin", "Computer Science"],
          axisTick: { show: false },
          axisLine: { show: false }
        },
        series: [{
          name: "Enrollments",
          type: "scatter",
          symbolSize: 18,
          data: [210, 270, 330, 410, 480, 540],
          itemStyle: { color: "#0070F0", borderColor: "#fff", borderWidth: 2 },
          label: { show: true, position: "right", color: "#264468", fontWeight: "bold", formatter: "{c}" }
        }]
      }
    }
  },
  {
    id: "ranking-top-n-highlight",
    title: "Top-N highlighted bar",
    family: "ranking",
    engine: "echarts",
    chartType: "bar",
    variant: "top-n",
    whenToUse: "Draw attention to the top 3 performers in a ranked list while keeping all bars visible for context \u2014 useful in executive dashboards where the podium positions need to stand out.",
    description: "Horizontal ranked bar where the top 3 items receive the WGU blue color and the remaining items appear in a muted grey; implemented via per-item itemStyle in the ECharts data array.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "highlighted", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "sorted", "branded"],
    sampleData: [
      { label: "Computer Science", value: 5420, top: true },
      { label: "Business Admin", value: 4810, top: true },
      { label: "Nursing", value: 4150, top: true },
      { label: "Teaching", value: 3380, top: false },
      { label: "Cybersecurity", value: 2960, top: false },
      { label: "Data Analytics", value: 2340, top: false }
    ],
    spec: {
      engine: "echarts",
      option: {
        grid: { left: 180, right: 80, top: 10, bottom: 30 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "value", name: "Enrollments" },
        yAxis: {
          type: "category",
          data: ["Data Analytics", "Cybersecurity", "Teaching", "Nursing", "Business Admin", "Computer Science"]
        },
        series: [{
          name: "Enrollments",
          type: "bar",
          data: [
            { value: 2340, itemStyle: { color: "#C8D8E8", borderRadius: [0, 4, 4, 0] } },
            { value: 2960, itemStyle: { color: "#C8D8E8", borderRadius: [0, 4, 4, 0] } },
            { value: 3380, itemStyle: { color: "#C8D8E8", borderRadius: [0, 4, 4, 0] } },
            { value: 4150, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 4810, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 5420, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } }
          ],
          label: { show: true, position: "right", color: "#264468", fontWeight: "bold" }
        }]
      }
    }
  },
  {
    id: "ranking-ordered-value-labels",
    title: "Ranked bar with inline value labels",
    family: "ranking",
    engine: "chartjs",
    chartType: "bar",
    variant: "inline-labels",
    whenToUse: "Combine rank position and precise numeric values in a single view by rendering the value label inside each bar \u2014 removes the need for a separate y-axis when bars are long enough to accommodate text.",
    description: "Horizontal sorted bar with value labels positioned inside each bar at the end position; the WGU brand lead color draws the eye to the highest-ranked item.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "sorted", "value-labels"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "sorted", "branded"],
    sampleData: [
      { label: "MBA", count: 620 },
      { label: "BSCS", count: 480 },
      { label: "BSN", count: 395 },
      { label: "BSIT", count: 310 },
      { label: "TEP", count: 225 },
      { label: "MSML", count: 180 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "MBA", count: 620 },
        { label: "BSCS", count: 480 },
        { label: "BSN", count: 395 },
        { label: "BSIT", count: 310 },
        { label: "TEP", count: 225 },
        { label: "MSML", count: 180 }
      ]
    }
  },
  {
    id: "ranking-bar-horizontal-value-annotated",
    title: "Annotated horizontal ranking bar",
    family: "ranking",
    engine: "echarts",
    chartType: "bar",
    variant: "annotated",
    whenToUse: "Show a ranked list with a secondary annotation per item \u2014 e.g. YoY change displayed next to each bar \u2014 so readers get rank, value, and trajectory in a single view.",
    description: "Horizontal bar with per-item rich label that includes both the primary value and a delta annotation; the markLine at the median provides a reference point for above/below-median reading.",
    tags: ["categorical", "single-series", "horizontal", "ranking", "annotations", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "annotations", "markline"],
    sampleData: [
      { label: "MBA", value: 4650, delta: "+10%" },
      { label: "BSCS", value: 4200, delta: "+12%" },
      { label: "BSN", value: 2980, delta: "-4%" },
      { label: "TEP", value: 2550, delta: "+6%" },
      { label: "BSIT", value: 1820, delta: "-7%" }
    ],
    spec: {
      engine: "echarts",
      option: {
        grid: { left: 80, right: 120, top: 10, bottom: 30 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "value", name: "Enrollments" },
        yAxis: { type: "category", data: ["BSIT", "TEP", "BSN", "BSCS", "MBA"] },
        series: [{
          name: "Enrollments",
          type: "bar",
          data: [
            { value: 1820, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 2550, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 2980, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 4200, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: 4650, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } }
          ],
          label: {
            show: true,
            position: "right",
            formatter: ["-7%", "+6%", "-4%", "+12%", "+10%"],
            color: "#264468",
            fontWeight: "bold"
          },
          markLine: {
            silent: true,
            lineStyle: { color: "#97E152", type: "dashed", width: 1.5 },
            label: { formatter: "Median", position: "start", color: "#97E152" },
            data: [{ xAxis: 3200 }]
          }
        }]
      }
    }
  },
  {
    id: "ranking-slope-two-period",
    title: "Two-period slope (rank change)",
    family: "ranking",
    engine: "chartjs",
    chartType: "line",
    variant: "slope-rank",
    whenToUse: "Show how ranks of programs or partners changed between two periods using a Chart.js line chart \u2014 the simple two-column slope format is faster to interpret than a full bump chart for single period-over-period comparisons.",
    description: "Chart.js multi-series line chart with two x-axis labels (FY23, FY24) and an inverted y-axis (rank 1 at top); each series traces one entity's rank shift between the two periods.",
    tags: ["ranking", "multi-series", "slope", "change", "two-point"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["slope"],
    sampleData: {
      labels: ["FY2023", "FY2024"],
      series: [
        { label: "MBA", data: [1, 1] },
        { label: "BSCS", data: [3, 2] },
        { label: "BSN", data: [2, 3] },
        { label: "TEP", data: [4, 4] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["FY2023", "FY2024"],
      data: [
        { label: "MBA", data: [1, 1] },
        { label: "BSCS", data: [3, 2] },
        { label: "BSN", data: [2, 3] },
        { label: "TEP", data: [4, 4] }
      ]
    }
  },
  {
    id: "ranking-treemap-ranked",
    title: "Ranked treemap (area-encoded ranking)",
    family: "ranking",
    secondaryFamilies: ["part-to-whole"],
    engine: "echarts",
    chartType: "treemap",
    whenToUse: "Show both rank and relative magnitude simultaneously through area encoding \u2014 the largest rectangle dominates visually, implicitly communicating rank position without an explicit sort axis.",
    description: "ECharts treemapOption with items pre-sorted by value descending; the largest program dominates the upper-left cell. Color intensity via visualMap secondary reinforces rank reading.",
    tags: ["ranking", "area", "treemap", "magnitude", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "sorted"],
    sampleData: [
      { name: "MBA", value: 4650 },
      { name: "BSCS", value: 4200 },
      { name: "BSN", value: 3100 },
      { name: "TEP", value: 2550 },
      { name: "BSIT", value: 1820 },
      { name: "MSML", value: 1380 }
    ],
    spec: {
      engine: "echarts",
      factory: "treemapOption",
      args: [[
        { name: "MBA", value: 4650 },
        { name: "BSCS", value: 4200 },
        { name: "BSN", value: 3100 },
        { name: "TEP", value: 2550 },
        { name: "BSIT", value: 1820 },
        { name: "MSML", value: 1380 }
      ]]
    }
  },
  {
    id: "ranking-bump",
    title: "Bump chart",
    family: "ranking",
    engine: "echarts",
    chartType: "line",
    variant: "bump",
    whenToUse: "Show how the relative rank of multiple items changes over time \u2014 e.g. which programs moved up or down in enrollment rank year over year.",
    description: "Line chart with a category xAxis (time periods) and an inverted numeric yAxis (rank 1 = top); each series is one item whose rank is traced. WGU-themed lines.",
    tags: ["ranking", "multi-series", "time-series", "bump", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["bump"],
    sampleData: {
      periods: ["2020", "2021", "2022", "2023", "2024"],
      programs: [
        { name: "MBA", ranks: [1, 1, 2, 1, 1] },
        { name: "BSCS", ranks: [3, 2, 1, 2, 2] },
        { name: "BSN", ranks: [2, 3, 3, 3, 3] },
        { name: "TEP", ranks: [4, 4, 4, 5, 4] },
        { name: "BSIT", ranks: [5, 5, 5, 4, 5] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis" },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["2020", "2021", "2022", "2023", "2024"], boundaryGap: false },
        yAxis: { type: "value", inverse: true, min: 1, max: 5, interval: 1, name: "Rank" },
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#8B5CF6"],
        series: [
          { name: "MBA", type: "line", smooth: true, data: [1, 1, 2, 1, 1], lineStyle: { width: 3 }, symbolSize: 10 },
          { name: "BSCS", type: "line", smooth: true, data: [3, 2, 1, 2, 2], lineStyle: { width: 3 }, symbolSize: 10 },
          { name: "BSN", type: "line", smooth: true, data: [2, 3, 3, 3, 3], lineStyle: { width: 3 }, symbolSize: 10 },
          { name: "TEP", type: "line", smooth: true, data: [4, 4, 4, 5, 4], lineStyle: { width: 3 }, symbolSize: 10 },
          { name: "BSIT", type: "line", smooth: true, data: [5, 5, 5, 4, 5], lineStyle: { width: 3 }, symbolSize: 10 }
        ]
      }
    }
  }
];

// src/corpus/entries/distribution.ts
var distribution = [
  {
    id: "distribution-boxplot",
    title: "Box plot",
    family: "distribution",
    engine: "chartjs",
    chartType: "boxplot",
    whenToUse: "Show the spread and skew of a continuous variable per category \u2014 median, IQR, whiskers, and outliers at a glance.",
    description: "Each box summarises a distribution: the box spans Q1\u2013Q3, the middle line marks the median, whiskers extend to non-outlier extremes, and individual points flag outliers.",
    tags: ["distribution", "spread", "quartile", "outlier", "continuous"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution"],
    sampleData: {
      labels: ["Business", "IT", "Education", "Healthcare", "Engineering"],
      data: [
        [72, 75, 80, 83, 85, 88, 91, 94],
        [68, 71, 76, 80, 84, 87, 90, 95],
        [74, 77, 81, 84, 86, 89, 92, 93],
        [70, 73, 78, 82, 85, 88, 91, 96],
        [65, 70, 75, 79, 83, 87, 90, 97]
      ]
    },
    spec: {
      engine: "chartjs",
      type: "boxplot",
      labels: ["Business", "IT", "Education", "Healthcare", "Engineering"],
      data: [
        [72, 75, 80, 83, 85, 88, 91, 94],
        [68, 71, 76, 80, 84, 87, 90, 95],
        [74, 77, 81, 84, 86, 89, 92, 93],
        [70, 73, 78, 82, 85, 88, 91, 96],
        [65, 70, 75, 79, 83, 87, 90, 97]
      ]
    }
  },
  {
    id: "distribution-error-bars",
    title: "Bar with error bars",
    family: "distribution",
    engine: "chartjs",
    chartType: "barWithErrorBars",
    whenToUse: "Display a mean or aggregate value for each category alongside a confidence interval or standard deviation band.",
    description: "Standard bar chart augmented with vertical error whiskers that encode uncertainty; useful for comparing group means with statistical rigor.",
    tags: ["distribution", "error-bars", "uncertainty", "statistical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["error-bars"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: [
        { y: 84, yMin: 80, yMax: 88 },
        { y: 78, yMin: 73, yMax: 83 },
        { y: 91, yMin: 87, yMax: 95 },
        { y: 86, yMin: 82, yMax: 90 }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "barWithErrorBars",
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: [
        { y: 84, yMin: 80, yMax: 88 },
        { y: 78, yMin: 73, yMax: 83 },
        { y: 91, yMin: 87, yMax: 95 },
        { y: 86, yMin: 82, yMax: 90 }
      ]
    }
  },
  {
    id: "distribution-heatmap-chartjs",
    title: "Heatmap (Chart.js matrix)",
    family: "distribution",
    engine: "chartjs",
    chartType: "matrix",
    whenToUse: "Show the joint frequency or intensity of two categorical variables in a grid \u2014 ideal for finding hot-spots in a cross-tabulation.",
    description: "Each cell is coloured by magnitude using the WGU blue heat ramp; category axes form the grid. Built on the chartjs-chart-matrix community plugin.",
    tags: ["heatmap", "distribution", "frequency", "grid", "categorical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["heatmap"],
    sampleData: {
      data: [
        { x: "Jan", y: "Business", v: 42 },
        { x: "Jan", y: "Technology", v: 31 },
        { x: "Jan", y: "Education", v: 28 },
        { x: "Feb", y: "Business", v: 38 },
        { x: "Feb", y: "Technology", v: 45 },
        { x: "Feb", y: "Education", v: 33 },
        { x: "Mar", y: "Business", v: 55 },
        { x: "Mar", y: "Technology", v: 48 },
        { x: "Mar", y: "Education", v: 40 }
      ],
      opts: { xLabels: ["Jan", "Feb", "Mar"], yLabels: ["Business", "Technology", "Education"] }
    },
    spec: {
      engine: "chartjs",
      type: "matrix",
      data: [
        { x: "Jan", y: "Business", v: 42 },
        { x: "Jan", y: "Technology", v: 31 },
        { x: "Jan", y: "Education", v: 28 },
        { x: "Feb", y: "Business", v: 38 },
        { x: "Feb", y: "Technology", v: 45 },
        { x: "Feb", y: "Education", v: 33 },
        { x: "Mar", y: "Business", v: 55 },
        { x: "Mar", y: "Technology", v: 48 },
        { x: "Mar", y: "Education", v: 40 }
      ],
      opts: { xLabels: ["Jan", "Feb", "Mar"], yLabels: ["Business", "Technology", "Education"] }
    }
  },
  {
    id: "distribution-boxplot-echarts",
    title: "Box plot (ECharts)",
    family: "distribution",
    engine: "echarts",
    chartType: "boxplot",
    whenToUse: "Display distribution spread and outliers per category using the ECharts engine \u2014 preferred when native zoom or brush selection on the box plot is needed.",
    description: "ECharts boxplot auto-computes Q1, median, Q3, whiskers from raw sample arrays via the boxplotOption factory. WGU-themed with tooltip.",
    tags: ["distribution", "spread", "quartile", "outlier", "continuous", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution"],
    sampleData: {
      labels: ["MBA", "BSCS", "BSN", "TEP", "MSML"],
      samples: [
        [71, 74, 78, 82, 85, 88, 91, 93, 96],
        [68, 72, 76, 80, 84, 87, 90, 94],
        [73, 76, 79, 83, 86, 89, 92, 95],
        [66, 70, 75, 79, 83, 87, 91, 97],
        [74, 77, 80, 84, 87, 90, 93]
      ]
    },
    spec: {
      engine: "echarts",
      factory: "boxplotOption",
      args: [
        ["MBA", "BSCS", "BSN", "TEP", "MSML"],
        [
          [71, 74, 78, 82, 85, 88, 91, 93, 96],
          [68, 72, 76, 80, 84, 87, 90, 94],
          [73, 76, 79, 83, 86, 89, 92, 95],
          [66, 70, 75, 79, 83, 87, 91, 97],
          [74, 77, 80, 84, 87, 90, 93]
        ]
      ]
    }
  },
  {
    id: "distribution-heatmap-echarts",
    title: "Heatmap (ECharts)",
    family: "distribution",
    engine: "echarts",
    chartType: "heatmap",
    whenToUse: "Display a cross-tab intensity grid with a smooth WGU-branded colour scale and built-in zoom/highlight interactions via ECharts.",
    description: "ECharts heatmap using numeric [x, y, value] triples; the visualMap component drives the colour-to-value mapping with the WGU heat ramp.",
    tags: ["heatmap", "distribution", "frequency", "grid", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["heatmap"],
    sampleData: {
      xLabels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      yLabels: ["Business", "Technology", "Education"],
      data: [
        [0, 0, 42],
        [1, 0, 38],
        [2, 0, 55],
        [3, 0, 60],
        [4, 0, 48],
        [0, 1, 31],
        [1, 1, 45],
        [2, 1, 50],
        [3, 1, 44],
        [4, 1, 39],
        [0, 2, 28],
        [1, 2, 33],
        [2, 2, 40],
        [3, 2, 36],
        [4, 2, 30]
      ]
    },
    spec: {
      engine: "echarts",
      factory: "heatmapOption",
      args: [
        ["Mon", "Tue", "Wed", "Thu", "Fri"],
        ["Business", "Technology", "Education"],
        [
          [0, 0, 42],
          [1, 0, 38],
          [2, 0, 55],
          [3, 0, 60],
          [4, 0, 48],
          [0, 1, 31],
          [1, 1, 45],
          [2, 1, 50],
          [3, 1, 44],
          [4, 1, 39],
          [0, 2, 28],
          [1, 2, 33],
          [2, 2, 40],
          [3, 2, 36],
          [4, 2, 30]
        ]
      ]
    }
  },
  {
    id: "distribution-histogram",
    title: "Histogram",
    family: "distribution",
    engine: "echarts",
    chartType: "bar",
    variant: "histogram",
    whenToUse: "Show the frequency distribution of a continuous variable across equal-width bins \u2014 e.g. how many students completed their program in 1\u20132 years, 2\u20133 years, etc.",
    description: "Bar chart where each bar represents a pre-computed bin count; adjacent bars share no gap (barCategoryGap:0) to emphasize continuous coverage of the range. ECharts raw option.",
    tags: ["distribution", "frequency", "histogram", "continuous", "bins", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "histogram"],
    sampleData: [
      { bin: "0\u20131 yr", count: 120 },
      { bin: "1\u20132 yr", count: 480 },
      { bin: "2\u20133 yr", count: 860 },
      { bin: "3\u20134 yr", count: 640 },
      { bin: "4\u20135 yr", count: 310 },
      { bin: "5+ yr", count: 90 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "category", data: ["0\u20131 yr", "1\u20132 yr", "2\u20133 yr", "3\u20134 yr", "4\u20135 yr", "5+ yr"], name: "Time to Completion" },
        yAxis: { type: "value", name: "Students" },
        series: [{
          name: "Students",
          type: "bar",
          barCategoryGap: "0%",
          data: [120, 480, 860, 640, 310, 90],
          itemStyle: { color: "#0070F0", borderColor: "#fff", borderWidth: 1 },
          label: { show: true, position: "top", color: "#264468" }
        }]
      }
    }
  },
  {
    id: "distribution-density-area",
    title: "Density curve (area approximation)",
    family: "distribution",
    engine: "echarts",
    chartType: "line",
    variant: "density",
    whenToUse: "Approximate a smooth density curve for a continuous variable when histogram bins are too coarse \u2014 e.g. visualising the distribution of student satisfaction scores across a fine-grained scale.",
    description: "Area line with smooth:true plotted over pre-computed density or KDE values; the filled area under the curve represents the probability mass. WGU sky-blue fill.",
    tags: ["distribution", "density", "smooth", "continuous", "area", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "smooth", "area"],
    sampleData: {
      scores: [60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100],
      density: [2e-3, 4e-3, 8e-3, 0.015, 0.026, 0.042, 0.062, 0.082, 0.098, 0.11, 0.115, 0.108, 0.095, 0.078, 0.058, 0.038, 0.022, 0.011, 5e-3, 2e-3, 1e-3]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        xAxis: { type: "category", data: [60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100].map(String), name: "Completion Score", boundaryGap: false },
        yAxis: { type: "value", name: "Density" },
        series: [{
          name: "Density",
          type: "line",
          smooth: true,
          showSymbol: false,
          data: [2e-3, 4e-3, 8e-3, 0.015, 0.026, 0.042, 0.062, 0.082, 0.098, 0.11, 0.115, 0.108, 0.095, 0.078, 0.058, 0.038, 0.022, 0.011, 5e-3, 2e-3, 1e-3],
          areaStyle: { color: "#46B1EF", opacity: 0.3 },
          lineStyle: { color: "#0070F0", width: 2 }
        }]
      }
    }
  },
  {
    id: "distribution-beeswarm",
    title: "Beeswarm-style scatter (jitter)",
    family: "distribution",
    engine: "echarts",
    chartType: "scatter",
    variant: "beeswarm",
    whenToUse: "Show every individual data point without overlap \u2014 deterministic horizontal jitter spreads overlapping values so each observation is visible; ideal for small-to-medium datasets (n < 200).",
    description: "ECharts scatter with a categorical x-axis and deterministic jitter on x (pre-computed fixed offsets, no Math.random); point color encodes the series category.",
    tags: ["distribution", "scatter", "jitter", "individual-points", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "individual-points"],
    sampleData: {
      categories: ["Business", "Technology", "Education"],
      points: [
        { x: 0, y: 82 },
        { x: 0.05, y: 78 },
        { x: -0.05, y: 85 },
        { x: 0.1, y: 74 },
        { x: -0.1, y: 88 },
        { x: 0.08, y: 79 },
        { x: -0.08, y: 83 },
        { x: 0.03, y: 91 },
        { x: -0.03, y: 76 },
        { x: 1, y: 80 },
        { x: 1.05, y: 75 },
        { x: 0.95, y: 87 },
        { x: 1.1, y: 71 },
        { x: 0.9, y: 90 },
        { x: 1.08, y: 83 },
        { x: 0.92, y: 77 },
        { x: 1.03, y: 93 },
        { x: 2, y: 84 },
        { x: 2.05, y: 79 },
        { x: 1.95, y: 88 },
        { x: 2.1, y: 73 },
        { x: 1.9, y: 92 },
        { x: 2.08, y: 86 },
        { x: 1.92, y: 81 }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#97E152"],
        tooltip: { trigger: "item", formatter: (p) => `Completion: ${p.data[1]}%` },
        xAxis: {
          type: "value",
          min: -0.5,
          max: 2.5,
          interval: 1,
          axisLabel: { formatter: (v) => ["Business", "Technology", "Education"][Math.round(v)] ?? "" }
        },
        yAxis: { type: "value", name: "Completion Rate (%)", min: 60, max: 100 },
        series: [
          {
            name: "Business",
            type: "scatter",
            symbolSize: 10,
            itemStyle: { color: "#0070F0", opacity: 0.8 },
            data: [[0, 82], [0.05, 78], [-0.05, 85], [0.1, 74], [-0.1, 88], [0.08, 79], [-0.08, 83], [0.03, 91], [-0.03, 76]]
          },
          {
            name: "Technology",
            type: "scatter",
            symbolSize: 10,
            itemStyle: { color: "#46B1EF", opacity: 0.8 },
            data: [[1, 80], [1.05, 75], [0.95, 87], [1.1, 71], [0.9, 90], [1.08, 83], [0.92, 77], [1.03, 93]]
          },
          {
            name: "Education",
            type: "scatter",
            symbolSize: 10,
            itemStyle: { color: "#97E152", opacity: 0.8 },
            data: [[2, 84], [2.05, 79], [1.95, 88], [2.1, 73], [1.9, 92], [2.08, 86], [1.92, 81]]
          }
        ]
      }
    }
  },
  {
    id: "distribution-violin-ish",
    title: "Violin-style (mirrored area)",
    family: "distribution",
    engine: "echarts",
    chartType: "line",
    variant: "violin",
    whenToUse: "Approximate a violin plot using mirrored area series to show distribution shape \u2014 wider where values are more frequent \u2014 when a box plot is too summary-heavy and a beeswarm has too many points.",
    description: "Two area series (one positive, one negative mirrored) share a category axis; both represent the same density profile plotted symmetrically to create a violin silhouette. ECharts raw option.",
    tags: ["distribution", "density", "violin", "mirrored", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "smooth"],
    sampleData: {
      scores: [60, 65, 70, 75, 80, 85, 90, 95, 100],
      density: [0.01, 0.05, 0.12, 0.21, 0.25, 0.2, 0.1, 0.05, 0.01]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#0070F0"],
        tooltip: { trigger: "axis" },
        legend: { show: false },
        xAxis: { type: "category", data: ["60", "65", "70", "75", "80", "85", "90", "95", "100"], name: "Score", boundaryGap: false },
        yAxis: { type: "value", name: "Density", min: -0.3, max: 0.3 },
        series: [
          {
            name: "Upper",
            type: "line",
            smooth: true,
            showSymbol: false,
            data: [0.01, 0.05, 0.12, 0.21, 0.25, 0.2, 0.1, 0.05, 0.01],
            areaStyle: { color: "#46B1EF", opacity: 0.5 },
            lineStyle: { color: "#0070F0", width: 1.5 }
          },
          {
            name: "Lower",
            type: "line",
            smooth: true,
            showSymbol: false,
            data: [-0.01, -0.05, -0.12, -0.21, -0.25, -0.2, -0.1, -0.05, -0.01],
            areaStyle: { color: "#46B1EF", opacity: 0.5 },
            lineStyle: { color: "#0070F0", width: 1.5 }
          }
        ]
      }
    }
  },
  {
    id: "distribution-boxplot-grouped",
    title: "Grouped box plot (multi-category)",
    family: "distribution",
    engine: "echarts",
    chartType: "boxplot",
    variant: "grouped",
    whenToUse: "Compare distribution spread across multiple series within the same category axis \u2014 e.g. completion score distributions by cohort year, shown side-by-side per college.",
    description: "Two side-by-side boxplot series per category allow direct comparison of distribution shape, spread, and median shift between two populations (e.g., FY23 vs FY24). ECharts boxplotOption factory.",
    tags: ["distribution", "spread", "quartile", "multi-series", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      fy23: [[68, 72, 79, 84, 91], [65, 70, 76, 81, 88], [70, 74, 80, 85, 92], [66, 71, 78, 83, 89]],
      fy24: [[71, 75, 81, 86, 93], [68, 73, 79, 84, 91], [72, 76, 82, 87, 94], [69, 74, 80, 85, 92]]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Business", "Technology", "Education", "Healthcare"] },
        yAxis: { type: "value", name: "Score", min: 55, max: 100 },
        series: [
          {
            name: "FY23",
            type: "boxplot",
            itemStyle: { borderColor: "#0070F0", color: "#EEF6F9" },
            data: [[68, 72, 79, 84, 91], [65, 70, 76, 81, 88], [70, 74, 80, 85, 92], [66, 71, 78, 83, 89]]
          },
          {
            name: "FY24",
            type: "boxplot",
            itemStyle: { borderColor: "#46B1EF", color: "#D6EFF9" },
            data: [[71, 75, 81, 86, 93], [68, 73, 79, 84, 91], [72, 76, 82, 87, 94], [69, 74, 80, 85, 92]]
          }
        ]
      }
    }
  },
  {
    id: "distribution-scatter-marginal",
    title: "Scatter with marginal frequency bars",
    family: "distribution",
    secondaryFamilies: ["correlation"],
    engine: "echarts",
    chartType: "scatter",
    variant: "marginal",
    whenToUse: "Combine a bivariate scatter with univariate frequency bars on the top and right margins \u2014 shows the joint distribution and both individual distributions simultaneously without switching charts.",
    description: "ECharts raw option with three grid panels: the main scatter (center), a bar histogram on the top margin (x-axis distribution), and a horizontal bar on the right margin (y-axis distribution).",
    tags: ["distribution", "correlation", "scatter", "marginal", "bivariate", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["distribution", "multi-panel"],
    sampleData: {
      points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84], [220, 74], [460, 89], [340, 81], [290, 80], [430, 87], [190, 71], [470, 90]],
      xBins: [{ range: "175\u2013275", count: 2 }, { range: "275\u2013375", count: 4 }, { range: "375\u2013475", count: 4 }, { range: "475\u2013525", count: 2 }],
      yBins: [{ range: "70\u201375", count: 2 }, { range: "75\u201380", count: 1 }, { range: "80\u201385", count: 5 }, { range: "85\u201390", count: 3 }, { range: "90+", count: 1 }]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        grid: [
          { left: "15%", right: "20%", top: "25%", bottom: "15%" },
          { left: "15%", right: "20%", top: "5%", bottom: "78%" },
          { left: "82%", right: "3%", top: "25%", bottom: "15%" }
        ],
        xAxis: [
          { type: "value", gridIndex: 0, scale: true, name: "Enrollment" },
          { type: "category", gridIndex: 1, data: ["175\u2013275", "275\u2013375", "375\u2013475", "475\u2013525"], show: false },
          // Right-margin value axis (grid 2). A series' x and y axes MUST live in
          // the same grid — the right-margin bar previously used xAxis[0] (grid 0).
          { type: "value", gridIndex: 2, show: false }
        ],
        yAxis: [
          { type: "value", gridIndex: 0, scale: true, name: "Completion %", min: 60, max: 100 },
          { type: "value", gridIndex: 1, show: false },
          { type: "category", gridIndex: 2, data: ["70\u201375", "75\u201380", "80\u201385", "85\u201390", "90+"], show: false }
        ],
        series: [
          {
            name: "Programs",
            type: "scatter",
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: { color: "#0070F0", opacity: 0.8 },
            data: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84], [220, 74], [460, 89], [340, 81], [290, 80], [430, 87], [190, 71], [470, 90]]
          },
          {
            name: "X Dist.",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: { color: "#46B1EF", opacity: 0.6, borderRadius: [2, 2, 0, 0] },
            data: [2, 4, 4, 2]
          },
          {
            name: "Y Dist.",
            type: "bar",
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: { color: "#46B1EF", opacity: 0.6, borderRadius: [0, 2, 2, 0] },
            data: [2, 1, 5, 3, 1]
          }
        ]
      }
    }
  },
  {
    id: "distribution-error-bars-multi",
    title: "Multi-category error bars",
    family: "distribution",
    engine: "chartjs",
    chartType: "barWithErrorBars",
    variant: "multi-category",
    whenToUse: "Compare mean \xB1 confidence interval across two or more groups per category \u2014 e.g., FY23 vs FY24 pass rate with uncertainty bands for each academic college.",
    description: "Multi-series barWithErrorBars where each series has its own mean and CI bounds per category; grouped bars with error whiskers let readers see both central tendency and uncertainty for each group.",
    tags: ["distribution", "error-bars", "uncertainty", "multi-series", "statistical"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["error-bars", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      fy23: [{ y: 82, yMin: 78, yMax: 86 }, { y: 77, yMin: 72, yMax: 82 }, { y: 85, yMin: 81, yMax: 89 }, { y: 79, yMin: 74, yMax: 84 }],
      fy24: [{ y: 85, yMin: 81, yMax: 89 }, { y: 80, yMin: 75, yMax: 85 }, { y: 88, yMin: 84, yMax: 92 }, { y: 83, yMin: 78, yMax: 88 }]
    },
    spec: {
      engine: "chartjs",
      type: "barWithErrorBars",
      labels: ["Business", "Technology", "Education", "Healthcare"],
      data: [
        { label: "FY23", data: [{ y: 82, yMin: 78, yMax: 86 }, { y: 77, yMin: 72, yMax: 82 }, { y: 85, yMin: 81, yMax: 89 }, { y: 79, yMin: 74, yMax: 84 }] },
        { label: "FY24", data: [{ y: 85, yMin: 81, yMax: 89 }, { y: 80, yMin: 75, yMax: 85 }, { y: 88, yMin: 84, yMax: 92 }, { y: 83, yMin: 78, yMax: 88 }] }
      ]
    }
  },
  {
    id: "distribution-calendar-heatmap-alt",
    title: "Calendar heatmap (weekly pattern)",
    family: "distribution",
    secondaryFamilies: ["change-over-time"],
    engine: "echarts",
    chartType: "calendarHeatmap",
    variant: "weekly-pattern",
    whenToUse: "Reveal weekly activity patterns (e.g. Monday vs. Friday logins) across a calendar year \u2014 the distribution family perspective focuses on how data concentrates at certain days.",
    description: "calendarHeatmapOption for 2024 with a rich dataset covering all 12 months; the WGU heat ramp reveals weekday concentration vs. weekend sparsity in login or submission events.",
    tags: ["distribution", "calendar", "heatmap", "daily", "pattern", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["calendar", "heatmap", "distribution"],
    sampleData: {
      year: 2024,
      note: "Peak on weekdays; troughs on weekends"
    },
    spec: {
      engine: "echarts",
      factory: "calendarHeatmapOption",
      args: [
        2024,
        [
          ["2024-01-08", 78],
          ["2024-01-09", 82],
          ["2024-01-10", 91],
          ["2024-01-11", 88],
          ["2024-01-12", 74],
          ["2024-01-15", 80],
          ["2024-01-16", 85],
          ["2024-01-17", 94],
          ["2024-01-18", 89],
          ["2024-01-19", 77],
          ["2024-02-05", 88],
          ["2024-02-06", 93],
          ["2024-02-07", 96],
          ["2024-02-08", 91],
          ["2024-02-09", 82],
          ["2024-03-04", 72],
          ["2024-03-05", 78],
          ["2024-03-06", 85],
          ["2024-03-07", 81],
          ["2024-03-08", 68],
          ["2024-04-15", 84],
          ["2024-04-16", 89],
          ["2024-04-17", 92],
          ["2024-04-18", 87],
          ["2024-04-19", 79],
          ["2024-05-06", 95],
          ["2024-05-07", 98],
          ["2024-05-08", 100],
          ["2024-05-09", 96],
          ["2024-05-10", 88],
          ["2024-06-10", 74],
          ["2024-06-11", 79],
          ["2024-06-12", 83],
          ["2024-06-13", 78],
          ["2024-06-14", 70],
          ["2024-07-08", 68],
          ["2024-07-09", 72],
          ["2024-07-10", 76],
          ["2024-07-11", 74],
          ["2024-07-12", 65],
          ["2024-08-05", 82],
          ["2024-08-06", 86],
          ["2024-08-07", 91],
          ["2024-08-08", 88],
          ["2024-08-09", 80],
          ["2024-09-09", 90],
          ["2024-09-10", 94],
          ["2024-09-11", 98],
          ["2024-09-12", 93],
          ["2024-09-13", 86],
          ["2024-10-07", 85],
          ["2024-10-08", 88],
          ["2024-10-09", 92],
          ["2024-10-10", 89],
          ["2024-10-11", 82],
          ["2024-11-04", 79],
          ["2024-11-05", 83],
          ["2024-11-06", 87],
          ["2024-11-07", 84],
          ["2024-11-08", 76],
          ["2024-12-02", 72],
          ["2024-12-03", 75],
          ["2024-12-04", 78],
          ["2024-12-05", 76],
          ["2024-12-06", 68]
        ]
      ]
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "distribution-heatmap-visualmap",
    title: "Heatmap with continuous visualMap",
    family: "distribution",
    engine: "echarts",
    chartType: "heatmap",
    variant: "visualmap",
    whenToUse: "Show a cross-tab intensity grid where the color scale communicates a continuous quantity (e.g. average score) and the visualMap legend allows interactive range filtering to focus on hot-spots.",
    description: "ECharts heatmap with categorical x/y axes and a continuous visualMap using the WGU blue ramp (EEF6F9 \u2192 46B1EF \u2192 0070F0 \u2192 002855). The calculable visualMap handle lets users interactively filter by value.",
    tags: ["heatmap", "distribution", "frequency", "grid", "interactive", "visualmap", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["visualMap", "heatmap"],
    sampleData: {
      xLabels: ["Q1", "Q2", "Q3", "Q4"],
      yLabels: ["Business", "Technology", "Education", "Healthcare"],
      data: [
        [0, 0, 74],
        [1, 0, 81],
        [2, 0, 79],
        [3, 0, 85],
        [0, 1, 68],
        [1, 1, 75],
        [2, 1, 80],
        [3, 1, 83],
        [0, 2, 71],
        [1, 2, 78],
        [2, 2, 76],
        [3, 2, 82],
        [0, 3, 65],
        [1, 3, 72],
        [2, 3, 77],
        [3, 3, 80]
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { position: "top", formatter: (p) => `${p.name}: ${p.data[2]}%` },
        grid: { top: "10%", bottom: "20%" },
        xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"], splitArea: { show: true } },
        yAxis: { type: "category", data: ["Business", "Technology", "Education", "Healthcare"], splitArea: { show: true } },
        visualMap: {
          min: 60,
          max: 90,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "5%",
          inRange: { color: ["#EEF6F9", "#46B1EF", "#0070F0", "#002855"] }
        },
        series: [{
          name: "Completion Rate",
          type: "heatmap",
          data: [
            [0, 0, 74],
            [1, 0, 81],
            [2, 0, 79],
            [3, 0, 85],
            [0, 1, 68],
            [1, 1, 75],
            [2, 1, 80],
            [3, 1, 83],
            [0, 2, 71],
            [1, 2, 78],
            [2, 2, 76],
            [3, 2, 82],
            [0, 3, 65],
            [1, 3, 72],
            [2, 3, 77],
            [3, 3, 80]
          ],
          label: { show: true },
          emphasis: { itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.5)" } }
        }]
      }
    }
  }
];

// src/corpus/entries/correlation.ts
var correlation = [
  {
    id: "correlation-scatter",
    title: "Scatter plot",
    family: "correlation",
    engine: "chartjs",
    chartType: "scatter",
    whenToUse: "Explore the relationship between two continuous variables \u2014 does enrollment predict completion rate?",
    description: "Each point represents one observation; the horizontal axis encodes one variable and the vertical axis the other. Clusters, trends, and outliers emerge from the point cloud.",
    tags: ["correlation", "bivariate", "continuous", "relationship"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation"],
    sampleData: [
      {
        label: "Business Programs",
        points: [
          { x: 320, y: 82 },
          { x: 410, y: 85 },
          { x: 275, y: 78 },
          { x: 500, y: 88 },
          { x: 380, y: 84 },
          { x: 220, y: 74 }
        ]
      },
      {
        label: "Technology Programs",
        points: [
          { x: 290, y: 80 },
          { x: 360, y: 83 },
          { x: 430, y: 87 },
          { x: 190, y: 71 },
          { x: 470, y: 90 },
          { x: 310, y: 81 }
        ]
      }
    ],
    spec: {
      engine: "chartjs",
      type: "scatter",
      data: [
        {
          label: "Business Programs",
          points: [
            { x: 320, y: 82 },
            { x: 410, y: 85 },
            { x: 275, y: 78 },
            { x: 500, y: 88 },
            { x: 380, y: 84 },
            { x: 220, y: 74 }
          ]
        },
        {
          label: "Technology Programs",
          points: [
            { x: 290, y: 80 },
            { x: 360, y: 83 },
            { x: 430, y: 87 },
            { x: 190, y: 71 },
            { x: 470, y: 90 },
            { x: 310, y: 81 }
          ]
        }
      ]
    }
  },
  {
    id: "correlation-bubble",
    title: "Bubble chart",
    family: "correlation",
    engine: "chartjs",
    chartType: "bubble",
    whenToUse: "Visualise three quantitative dimensions simultaneously \u2014 e.g., enrollment (x), completion rate (y), and partner revenue (bubble size).",
    description: "Extends a scatter plot with a third variable encoded in bubble radius; useful for surfacing high-enrollment, high-completion partners that also drive the most revenue.",
    tags: ["correlation", "trivariate", "size-encoding", "continuous"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation", "size-encoding"],
    sampleData: [
      {
        label: "Western Partners",
        points: [
          { x: 420, y: 86, r: 18 },
          { x: 310, y: 79, r: 12 },
          { x: 550, y: 91, r: 22 }
        ]
      },
      {
        label: "Eastern Partners",
        points: [
          { x: 380, y: 83, r: 15 },
          { x: 280, y: 75, r: 10 },
          { x: 470, y: 88, r: 20 }
        ]
      }
    ],
    spec: {
      engine: "chartjs",
      type: "bubble",
      data: [
        {
          label: "Western Partners",
          points: [
            { x: 420, y: 86, r: 18 },
            { x: 310, y: 79, r: 12 },
            { x: 550, y: 91, r: 22 }
          ]
        },
        {
          label: "Eastern Partners",
          points: [
            { x: 380, y: 83, r: 15 },
            { x: 280, y: 75, r: 10 },
            { x: 470, y: 88, r: 20 }
          ]
        }
      ]
    }
  },
  {
    id: "correlation-scatter-connected",
    title: "Connected scatter",
    family: "correlation",
    engine: "chartjs",
    chartType: "scatter",
    variant: "connected",
    whenToUse: "Trace how the relationship between two variables evolves over time \u2014 each point is a period and the connecting line shows direction of change in series order.",
    description: "A scatter whose points are connected in series order by a line, forming a trajectory. Points are time-ordered (FY20\u2013FY25) so the line traces the path of change.",
    tags: ["correlation", "time-series", "trajectory", "bivariate", "connected"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation", "connected"],
    sampleData: [
      {
        label: "MBA (FY20\u2013FY25)",
        points: [
          { x: 210, y: 76 },
          { x: 250, y: 79 },
          { x: 295, y: 82 },
          { x: 320, y: 84 },
          { x: 360, y: 86 },
          { x: 410, y: 89 }
        ]
      }
    ],
    spec: {
      engine: "chartjs",
      type: "scatter",
      data: [
        {
          label: "MBA (FY20\u2013FY25)",
          points: [
            { x: 210, y: 76 },
            { x: 250, y: 79 },
            { x: 295, y: 82 },
            { x: 320, y: 84 },
            { x: 360, y: 86 },
            { x: 410, y: 89 }
          ]
        }
      ],
      opts: { showLine: true }
    }
  },
  {
    id: "correlation-scatter-echarts",
    title: "Scatter plot (ECharts)",
    family: "correlation",
    engine: "echarts",
    chartType: "scatter",
    whenToUse: "Explore bivariate relationships with ECharts when brush-select, data-zoom, or larger point counts benefit from ECharts rendering performance.",
    description: "Multi-series scatter using scatterOption; each series uses a distinct WGU-themed color, with 12 px symbols and an axis-item tooltip.",
    tags: ["correlation", "bivariate", "continuous", "relationship", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation"],
    sampleData: [
      { label: "Business", points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84]] },
      { label: "Technology", points: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90]] }
    ],
    spec: {
      engine: "echarts",
      factory: "scatterOption",
      args: [[
        { label: "Business", points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84]] },
        { label: "Technology", points: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90]] }
      ]]
    }
  },
  {
    id: "correlation-parallel",
    title: "Parallel coordinates",
    family: "correlation",
    engine: "echarts",
    chartType: "parallel",
    whenToUse: "Explore multivariate correlation patterns across five or more program metrics simultaneously \u2014 each polyline is one entity traced across all axes.",
    description: "Parallel axes each represent one metric; each series row is drawn as a polyline connecting its values across all axes. Built with parallelOption.",
    tags: ["correlation", "multivariate", "parallel", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multivariate"],
    sampleData: {
      dims: ["Enrollment", "Completion %", "Retention %", "Satisfaction", "Revenue ($K)"],
      rows: [
        { name: "Boeing", values: [1420, 78, 85, 4.2, 890] },
        { name: "Amazon", values: [1180, 76, 82, 4, 740] },
        { name: "IHC", values: [960, 72, 80, 3.9, 580] },
        { name: "Salt Lake CC", values: [720, 68, 77, 3.7, 420] },
        { name: "Utah DOE", values: [540, 65, 74, 3.6, 310] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "parallelOption",
      args: [
        ["Enrollment", "Completion %", "Retention %", "Satisfaction", "Revenue ($K)"],
        [
          { name: "Boeing", values: [1420, 78, 85, 4.2, 890] },
          { name: "Amazon", values: [1180, 76, 82, 4, 740] },
          { name: "IHC", values: [960, 72, 80, 3.9, 580] },
          { name: "Salt Lake CC", values: [720, 68, 77, 3.7, 420] },
          { name: "Utah DOE", values: [540, 65, 74, 3.6, 310] }
        ]
      ]
    }
  },
  {
    id: "correlation-matrix-heatmap",
    title: "Correlation matrix heatmap",
    family: "correlation",
    secondaryFamilies: ["distribution"],
    engine: "chartjs",
    chartType: "matrix",
    whenToUse: "Survey pairwise correlations across multiple program metrics simultaneously \u2014 discover which pairs of indicators move together.",
    description: "A symmetric grid where cell colour encodes correlation strength; both axes list the same set of metrics. Built on the chartjs-chart-matrix plugin and follows the WGU heat ramp.",
    tags: ["correlation", "heatmap", "multivariate", "matrix"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["heatmap", "correlation"],
    sampleData: {
      data: [
        { x: "Enrollment", y: "Enrollment", v: 100 },
        { x: "Enrollment", y: "Completion", v: 72 },
        { x: "Enrollment", y: "Retention", v: 65 },
        { x: "Completion", y: "Enrollment", v: 72 },
        { x: "Completion", y: "Completion", v: 100 },
        { x: "Completion", y: "Retention", v: 81 },
        { x: "Retention", y: "Enrollment", v: 65 },
        { x: "Retention", y: "Completion", v: 81 },
        { x: "Retention", y: "Retention", v: 100 }
      ],
      opts: {
        xLabels: ["Enrollment", "Completion", "Retention"],
        yLabels: ["Enrollment", "Completion", "Retention"]
      }
    },
    spec: {
      engine: "chartjs",
      type: "matrix",
      data: [
        { x: "Enrollment", y: "Enrollment", v: 100 },
        { x: "Enrollment", y: "Completion", v: 72 },
        { x: "Enrollment", y: "Retention", v: 65 },
        { x: "Completion", y: "Enrollment", v: 72 },
        { x: "Completion", y: "Completion", v: 100 },
        { x: "Completion", y: "Retention", v: 81 },
        { x: "Retention", y: "Enrollment", v: 65 },
        { x: "Retention", y: "Completion", v: 81 },
        { x: "Retention", y: "Retention", v: 100 }
      ],
      opts: {
        xLabels: ["Enrollment", "Completion", "Retention"],
        yLabels: ["Enrollment", "Completion", "Retention"]
      }
    }
  },
  {
    id: "correlation-bubble-echarts",
    title: "Bubble chart (ECharts)",
    family: "correlation",
    engine: "echarts",
    chartType: "scatter",
    variant: "bubble",
    whenToUse: "Encode three quantitative dimensions in ECharts \u2014 x position, y position, and bubble radius \u2014 when brush-selection or data-zoom on the bubble cloud is needed.",
    description: "ECharts scatter where each point is [x, y, r]; symbolSize is a callback that scales radius proportionally. WGU-themed colors and axis labels.",
    tags: ["correlation", "trivariate", "size-encoding", "continuous", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation", "size-encoding"],
    sampleData: [
      { label: "Western Partners", points: [[420, 86, 22], [310, 79, 12], [550, 91, 28]] },
      { label: "Eastern Partners", points: [[380, 83, 15], [280, 75, 10], [470, 88, 20]] }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF"],
        tooltip: { trigger: "item", formatter: (p) => `${p.seriesName}<br/>Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%<br/>Revenue: $${p.data[2]}K` },
        legend: { bottom: 0 },
        xAxis: { type: "value", name: "Enrollment", scale: true },
        yAxis: { type: "value", name: "Completion Rate (%)", min: 60, max: 100 },
        series: [
          { name: "Western", type: "scatter", symbolSize: (d) => d[2] * 1.2, data: [[420, 86, 22], [310, 79, 12], [550, 91, 28]], itemStyle: { color: "#0070F0", opacity: 0.8 } },
          { name: "Eastern", type: "scatter", symbolSize: (d) => d[2] * 1.2, data: [[380, 83, 15], [280, 75, 10], [470, 88, 20]], itemStyle: { color: "#46B1EF", opacity: 0.8 } }
        ]
      }
    }
  },
  {
    id: "correlation-heatmap-echarts",
    title: "Heatmap correlation grid (ECharts)",
    family: "correlation",
    secondaryFamilies: ["distribution"],
    engine: "echarts",
    chartType: "heatmap",
    variant: "correlation-matrix",
    whenToUse: "Survey pairwise correlations using the ECharts engine when the interactive visualMap filter and tooltip are preferred over the Chart.js matrix plugin.",
    description: "ECharts heatmap factory with symmetric [col, row, value] data; the WGU heat ramp maps negative-to-positive correlations from muted blue to deep navy.",
    tags: ["correlation", "heatmap", "multivariate", "matrix", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["heatmap", "correlation"],
    sampleData: {
      metrics: ["Enrollment", "Completion", "Retention", "Revenue"],
      data: [
        [0, 0, 100],
        [1, 0, 72],
        [2, 0, 65],
        [3, 0, 80],
        [0, 1, 72],
        [1, 1, 100],
        [2, 1, 81],
        [3, 1, 68],
        [0, 2, 65],
        [1, 2, 81],
        [2, 2, 100],
        [3, 2, 74],
        [0, 3, 80],
        [1, 3, 68],
        [2, 3, 74],
        [3, 3, 100]
      ]
    },
    spec: {
      engine: "echarts",
      factory: "heatmapOption",
      args: [
        ["Enrollment", "Completion", "Retention", "Revenue"],
        ["Enrollment", "Completion", "Retention", "Revenue"],
        [
          [0, 0, 100],
          [1, 0, 72],
          [2, 0, 65],
          [3, 0, 80],
          [0, 1, 72],
          [1, 1, 100],
          [2, 1, 81],
          [3, 1, 68],
          [0, 2, 65],
          [1, 2, 81],
          [2, 2, 100],
          [3, 2, 74],
          [0, 3, 80],
          [1, 3, 68],
          [2, 3, 74],
          [3, 3, 100]
        ]
      ]
    }
  },
  {
    id: "correlation-scatter-size-color",
    title: "Scatter with size + color encoding",
    family: "correlation",
    engine: "echarts",
    chartType: "scatter",
    variant: "size-color",
    whenToUse: "Encode four dimensions simultaneously \u2014 x, y, bubble size (revenue), and bubble color (region) \u2014 when a simple scatter or bubble chart would lose a key grouping variable.",
    description: "ECharts scatter with per-series symbol size and color encoding; each series represents a region and point radius encodes revenue on a square-root scale. WGU-branded palette.",
    tags: ["correlation", "trivariate", "size-encoding", "categorical", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation", "size-encoding", "categorical"],
    sampleData: [
      { label: "Mountain West", points: [[380, 84, 550], [310, 79, 320], [470, 90, 740]] },
      { label: "Southeast", points: [[290, 80, 380], [420, 86, 620], [350, 82, 430]] },
      { label: "Northeast", points: [[250, 76, 210], [400, 85, 580], [460, 88, 810]] }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855"],
        tooltip: { trigger: "item", formatter: (p) => `${p.seriesName}<br/>Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%<br/>Revenue: $${p.data[2]}K` },
        legend: { bottom: 0 },
        xAxis: { type: "value", name: "Enrollment", scale: true },
        yAxis: { type: "value", name: "Completion Rate (%)", min: 60, max: 100 },
        series: [
          { name: "Mountain West", type: "scatter", symbolSize: (d) => Math.sqrt(d[2]) * 1.5, data: [[380, 84, 550], [310, 79, 320], [470, 90, 740]], itemStyle: { color: "#0070F0", opacity: 0.8 } },
          { name: "Southeast", type: "scatter", symbolSize: (d) => Math.sqrt(d[2]) * 1.5, data: [[290, 80, 380], [420, 86, 620], [350, 82, 430]], itemStyle: { color: "#46B1EF", opacity: 0.8 } },
          { name: "Northeast", type: "scatter", symbolSize: (d) => Math.sqrt(d[2]) * 1.5, data: [[250, 76, 210], [400, 85, 580], [460, 88, 810]], itemStyle: { color: "#002855", opacity: 0.8 } }
        ]
      }
    }
  },
  {
    id: "correlation-parallel-brush",
    title: "Parallel coordinates with brush",
    family: "correlation",
    engine: "echarts",
    chartType: "parallel",
    variant: "brush",
    whenToUse: "Filter a multivariate dataset interactively by dragging range handles on any axis \u2014 e.g. highlight only partners with >70% completion and >$500K revenue simultaneously.",
    description: "ECharts parallel coordinates with parallelAxisDefault.realtime:true and brush-style axis handles; dragging on any axis filters visible lines to the selected range. WGU-themed polylines.",
    tags: ["correlation", "multivariate", "parallel", "interactive", "brush", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["multivariate", "interactive", "brush"],
    sampleData: {
      dims: ["Enrollment", "Completion %", "Retention %", "Satisfaction", "Revenue ($K)"],
      rows: [
        { name: "Boeing", values: [1420, 78, 85, 4.2, 890] },
        { name: "Amazon", values: [1180, 76, 82, 4, 740] },
        { name: "IHC", values: [960, 72, 80, 3.9, 580] },
        { name: "Salt Lake CC", values: [720, 68, 77, 3.7, 420] },
        { name: "Utah DOE", values: [540, 65, 74, 3.6, 310] },
        { name: "Davis Tech", values: [380, 62, 71, 3.4, 220] }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "parallelOption",
      args: [
        ["Enrollment", "Completion %", "Retention %", "Satisfaction", "Revenue ($K)"],
        [
          { name: "Boeing", values: [1420, 78, 85, 4.2, 890] },
          { name: "Amazon", values: [1180, 76, 82, 4, 740] },
          { name: "IHC", values: [960, 72, 80, 3.9, 580] },
          { name: "Salt Lake CC", values: [720, 68, 77, 3.7, 420] },
          { name: "Utah DOE", values: [540, 65, 74, 3.6, 310] },
          { name: "Davis Tech", values: [380, 62, 71, 3.4, 220] }
        ]
      ]
    }
  },
  {
    id: "correlation-scatter-chartjs-multi",
    title: "Multi-series scatter (Chart.js)",
    family: "correlation",
    engine: "chartjs",
    chartType: "scatter",
    variant: "multi-series-chartjs",
    whenToUse: "Compare the correlation pattern of multiple groups in a single Chart.js scatter when all series must share one canvas context \u2014 avoiding an ECharts instance on a Chart.js-heavy dashboard.",
    description: "Three-series Chart.js scatter plot with distinct WGU-palette colors per group; each series traces enrollment vs. completion for a geographic region. Uses the standard scatter chart type.",
    tags: ["correlation", "bivariate", "multi-series", "continuous"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["correlation", "multi-series"],
    sampleData: [
      { label: "Mountain West", points: [{ x: 380, y: 84 }, { x: 310, y: 79 }, { x: 470, y: 90 }] },
      { label: "Southeast", points: [{ x: 290, y: 80 }, { x: 420, y: 86 }, { x: 350, y: 82 }] },
      { label: "Northeast", points: [{ x: 250, y: 76 }, { x: 400, y: 85 }, { x: 460, y: 88 }] }
    ],
    spec: {
      engine: "chartjs",
      type: "scatter",
      data: [
        { label: "Mountain West", points: [{ x: 380, y: 84 }, { x: 310, y: 79 }, { x: 470, y: 90 }] },
        { label: "Southeast", points: [{ x: 290, y: 80 }, { x: 420, y: 86 }, { x: 350, y: 82 }] },
        { label: "Northeast", points: [{ x: 250, y: 76 }, { x: 400, y: 85 }, { x: 460, y: 88 }] }
      ]
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "correlation-scatter-brush",
    title: "Scatter with brush selection",
    family: "correlation",
    engine: "echarts",
    chartType: "scatter",
    variant: "brush",
    whenToUse: "Let users lasso or rectangle-select a subset of data points to highlight outliers, filter a cohort, or trigger a downstream action \u2014 particularly useful in dashboards where scatter selection drives a detail panel.",
    description: "Multi-series scatter with an activated ECharts brush component (rectangle, polygon, and clear modes) plus a toolbox brush button group. Selected points are highlighted; un-selected points fade.",
    tags: ["correlation", "bivariate", "interactive", "brush", "select", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["brush", "interactive", "select"],
    sampleData: [
      { label: "Business", points: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84], [220, 74], [460, 89], [340, 81]] },
      { label: "Technology", points: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90], [310, 81], [395, 86], [250, 76]] }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF"],
        tooltip: { trigger: "item", formatter: (p) => `${p.seriesName}<br/>Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%` },
        legend: { bottom: 0 },
        brush: {
          toolbox: ["rect", "polygon", "clear"],
          xAxisIndex: 0
        },
        toolbox: {
          feature: {
            brush: { type: ["rect", "polygon", "clear"] }
          }
        },
        xAxis: { name: "Enrollment", type: "value", scale: true },
        yAxis: { name: "Completion Rate (%)", type: "value", min: 60, max: 100 },
        series: [
          {
            name: "Business",
            type: "scatter",
            symbolSize: 14,
            data: [[320, 82], [410, 85], [275, 78], [500, 88], [380, 84], [220, 74], [460, 89], [340, 81]],
            itemStyle: { color: "#0070F0" }
          },
          {
            name: "Technology",
            type: "scatter",
            symbolSize: 14,
            data: [[290, 80], [360, 83], [430, 87], [190, 71], [470, 90], [310, 81], [395, 86], [250, 76]],
            itemStyle: { color: "#46B1EF" }
          }
        ]
      }
    }
  },
  {
    id: "correlation-scatter-regression",
    title: "Scatter with trend line (markLine regression)",
    family: "correlation",
    engine: "echarts",
    chartType: "scatter",
    variant: "regression",
    whenToUse: "Overlay a visual trend line on a scatter plot to communicate the general direction of the relationship without requiring a separate regression model; best for quick analytical reads.",
    description: "Single-series scatter with a two-point markLine encoding a manually computed linear regression, annotated with the slope direction. The dashed trend line provides a visual summary of the correlation.",
    tags: ["correlation", "bivariate", "trendline", "annotations", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["trendline", "annotations"],
    sampleData: [
      { enrollment: 190, completion: 71 },
      { enrollment: 220, completion: 74 },
      { enrollment: 275, completion: 78 },
      { enrollment: 310, completion: 81 },
      { enrollment: 340, completion: 81 },
      { enrollment: 380, completion: 84 },
      { enrollment: 410, completion: 85 },
      { enrollment: 430, completion: 87 },
      { enrollment: 460, completion: 89 },
      { enrollment: 500, completion: 88 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "item", formatter: (p) => `Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%` },
        xAxis: { name: "Enrollment", type: "value", scale: true },
        yAxis: { name: "Completion Rate (%)", type: "value", min: 60, max: 100 },
        series: [{
          name: "Programs",
          type: "scatter",
          symbolSize: 14,
          data: [[190, 71], [220, 74], [275, 78], [310, 81], [340, 81], [380, 84], [410, 85], [430, 87], [460, 89], [500, 88]],
          itemStyle: { color: "#0070F0" },
          markLine: {
            silent: true,
            lineStyle: { color: "#002855", type: "dashed", width: 2 },
            label: { formatter: "Trend", position: "end", color: "#002855" },
            data: [[{ coord: [190, 71.5] }, { coord: [500, 88.5] }]]
          }
        }]
      }
    }
  },
  {
    id: "correlation-scatter-visualmap",
    title: "Bubble scatter with visualMap (3-D encoding)",
    family: "correlation",
    secondaryFamilies: ["distribution"],
    engine: "echarts",
    chartType: "scatter",
    variant: "visualmap-bubble",
    whenToUse: "Encode a third quantitative dimension (e.g. revenue) as both bubble size and color simultaneously; the continuous visualMap component acts as a legend and allows interactive filtering by value range.",
    description: "ECharts scatter where each point is [enrollment, completion%, revenue]; a continuous visualMap driven by dimension 2 maps revenue to both symbol size (via symbolSize callback) and color (WGU ramp), adding a fourth visual channel.",
    tags: ["correlation", "trivariate", "bubble", "interactive", "visualmap", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["visualMap", "bubble"],
    sampleData: [
      [320, 82, 480],
      [410, 85, 620],
      [275, 78, 310],
      [500, 88, 890],
      [380, 84, 550],
      [220, 74, 210],
      [460, 89, 740],
      [340, 81, 430],
      [290, 80, 370],
      [430, 87, 680],
      [190, 71, 160],
      [470, 90, 810]
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: {
          trigger: "item",
          formatter: (p) => `Enrollment: ${p.data[0]}<br/>Completion: ${p.data[1]}%<br/>Revenue: $${p.data[2]}K`
        },
        visualMap: {
          show: true,
          dimension: 2,
          min: 160,
          max: 890,
          inRange: { color: ["#EEF6F9", "#46B1EF", "#0070F0", "#002855"] },
          text: ["High Revenue", "Low"],
          calculable: true,
          right: 10,
          top: "center"
        },
        xAxis: { name: "Enrollment", type: "value", scale: true },
        yAxis: { name: "Completion Rate (%)", type: "value", min: 60, max: 100 },
        series: [{
          name: "Programs",
          type: "scatter",
          symbolSize: (val) => Math.sqrt(val[2]) * 1.8,
          data: [
            [320, 82, 480],
            [410, 85, 620],
            [275, 78, 310],
            [500, 88, 890],
            [380, 84, 550],
            [220, 74, 210],
            [460, 89, 740],
            [340, 81, 430],
            [290, 80, 370],
            [430, 87, 680],
            [190, 71, 160],
            [470, 90, 810]
          ]
        }]
      }
    }
  }
];

// src/corpus/entries/deviation.ts
var deviation = [
  {
    id: "deviation-bar-diverging",
    title: "Diverging bar",
    family: "deviation",
    engine: "chartjs",
    chartType: "bar",
    variant: "diverging",
    whenToUse: "Show values that deviate above and below a meaningful zero point \u2014 e.g., net change, surplus vs. deficit.",
    description: "Horizontal bars extend in both directions from a shared zero baseline; positive and negative values cross zero, making direction and magnitude immediately clear.",
    tags: ["diverging", "single-series", "horizontal", "positive-negative"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "diverging"],
    sampleData: [
      { label: "Q1", count: 12 },
      { label: "Q2", count: -8 },
      { label: "Q3", count: 5 },
      { label: "Q4", count: -3 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "Q1", count: 12 },
        { label: "Q2", count: -8 },
        { label: "Q3", count: 5 },
        { label: "Q4", count: -3 }
      ]
    }
  },
  {
    id: "deviation-column-pos-neg",
    title: "Plus/minus column",
    family: "deviation",
    engine: "chartjs",
    chartType: "bar",
    variant: "plus-minus-column",
    whenToUse: "Display year-over-year or period-over-period change as vertical bars that cross zero; columns rising above baseline are positive deviations, those below are negative.",
    description: "Vertical column chart with mixed positive and negative values; bars crossing the zero axis signal deviation direction at a glance.",
    tags: ["diverging", "single-series", "vertical", "positive-negative"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "diverging"],
    sampleData: [
      { label: "Jan", count: 15 },
      { label: "Feb", count: -6 },
      { label: "Mar", count: 22 },
      { label: "Apr", count: -11 },
      { label: "May", count: 8 },
      { label: "Jun", count: -4 }
    ],
    spec: {
      engine: "chartjs",
      type: "bar",
      data: [
        { label: "Jan", count: 15 },
        { label: "Feb", count: -6 },
        { label: "Mar", count: 22 },
        { label: "Apr", count: -11 },
        { label: "May", count: 8 },
        { label: "Jun", count: -4 }
      ],
      opts: { orientation: "vertical" }
    }
  },
  {
    id: "deviation-diverging-stacked",
    title: "Diverging stacked bar",
    family: "deviation",
    engine: "chartjs",
    chartType: "groupedBar",
    variant: "diverging-stacked",
    whenToUse: "Compare agreement/disagreement or positive/negative breakdowns across categories using a stacked bar anchored at zero \u2014 classic Likert-style layout.",
    description: "Stacked grouped bar with mixed positive and negative series; the bars diverge left and right from the zero baseline, making agree/disagree proportions immediately legible.",
    tags: ["diverging", "multi-series", "stacked", "positive-negative", "likert"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "diverging", "multi-series"],
    sampleData: {
      labels: ["Business", "Technology", "Education", "Healthcare"],
      series: [
        { label: "Exceeded Target", data: [28, 22, 31, 19] },
        { label: "Met Target", data: [42, 38, 45, 36] },
        { label: "Below Target", data: [-18, -25, -14, -30] },
        { label: "Missed Target", data: [-12, -15, -10, -15] }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "groupedBar",
      labels: ["Business", "Technology", "Education", "Healthcare"],
      data: [
        { label: "Exceeded Target", data: [28, 22, 31, 19] },
        { label: "Met Target", data: [42, 38, 45, 36] },
        { label: "Below Target", data: [-18, -25, -14, -30] },
        { label: "Missed Target", data: [-12, -15, -10, -15] }
      ],
      opts: { stacked: true }
    }
  },
  {
    id: "deviation-bar-vs-target-echarts",
    title: "Bar vs. target (markLine)",
    family: "deviation",
    engine: "echarts",
    chartType: "bar",
    variant: "vs-target",
    whenToUse: "Show how each category's actual value compares against a shared target; the markLine creates a reference baseline that lets deviations above and below the target be read instantly.",
    description: "Vertical bar with a horizontal markLine at the target value; bars exceeding the target render in WGU green, those below in WGU navy. Per-item itemStyle applied in the data array.",
    tags: ["diverging", "categorical", "vertical", "target", "markline", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["annotations", "threshold", "markline"],
    sampleData: {
      categories: ["Business", "Technology", "Education", "Healthcare", "Engineering"],
      actual: [82, 76, 89, 71, 85],
      target: 80
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "category", data: ["Business", "Technology", "Education", "Healthcare", "Engineering"] },
        yAxis: { type: "value", name: "Completion Rate (%)", min: 60, max: 100 },
        series: [{
          name: "Completion Rate",
          type: "bar",
          data: [
            { value: 82, itemStyle: { color: "#97E152", borderRadius: [4, 4, 0, 0] } },
            { value: 76, itemStyle: { color: "#002855", borderRadius: [4, 4, 0, 0] } },
            { value: 89, itemStyle: { color: "#97E152", borderRadius: [4, 4, 0, 0] } },
            { value: 71, itemStyle: { color: "#002855", borderRadius: [4, 4, 0, 0] } },
            { value: 85, itemStyle: { color: "#97E152", borderRadius: [4, 4, 0, 0] } }
          ],
          markLine: {
            silent: true,
            lineStyle: { color: "#0070F0", type: "dashed", width: 2 },
            label: { formatter: "Target 80%", position: "end", color: "#0070F0" },
            data: [{ yAxis: 80 }]
          }
        }]
      }
    }
  },
  {
    id: "deviation-diverging-bar-echarts",
    title: "Diverging bar (ECharts)",
    family: "deviation",
    engine: "echarts",
    chartType: "bar",
    variant: "diverging-echarts",
    whenToUse: "Show positive and negative deviations from zero with ECharts when tooltip interactivity, axis zoom, or a toolbox export are needed alongside the diverging layout.",
    description: "Horizontal bar with mixed positive and negative values using barOption with horizontal:true; negative bars extend left of zero, positive bars extend right. The WGU palette distinguishes direction via itemStyle.",
    tags: ["diverging", "single-series", "horizontal", "positive-negative", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["value-labels", "diverging"],
    sampleData: [
      { label: "Q1", delta: 12 },
      { label: "Q2", delta: -8 },
      { label: "Q3", delta: 5 },
      { label: "Q4", delta: -3 }
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: { type: "value", name: "\u0394 Enrollments" },
        yAxis: { type: "category", data: ["Q4", "Q3", "Q2", "Q1"] },
        series: [{
          name: "Enrollment Delta",
          type: "bar",
          data: [
            { value: -3, itemStyle: { color: "#002855", borderRadius: [4, 0, 0, 4] } },
            { value: 5, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
            { value: -8, itemStyle: { color: "#002855", borderRadius: [4, 0, 0, 4] } },
            { value: 12, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } }
          ],
          label: { show: true, position: "right", formatter: (p) => (p.value > 0 ? "+" : "") + p.value }
        }]
      }
    }
  },
  {
    id: "deviation-surplus-deficit-echarts",
    title: "Surplus / deficit area line (ECharts)",
    family: "deviation",
    secondaryFamilies: ["change-over-time"],
    engine: "echarts",
    chartType: "line",
    variant: "surplus-deficit-echarts",
    whenToUse: "Show enrollment delta swings above and below zero in ECharts when the visualMap component is used to color the area fill green for surplus and red for deficit periods automatically.",
    description: "Area line with values crossing zero; a piecewise visualMap (green above zero, red below) automatically colors the fill on each side of the baseline. ECharts raw option.",
    tags: ["diverging", "single-series", "time-series", "area", "positive-negative", "visualmap", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "diverging", "visualMap"],
    sampleData: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      delta: [120, -45, 85, -30, 210, -80, 160, 95]
    },
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], boundaryGap: false },
        yAxis: { type: "value", name: "\u0394 Enrollments" },
        // Continuous diverging map (not piecewise): a piecewise visualMap on a
        // cartesian line throws "reading 'coord'" in echarts 5.x. Symmetric
        // min/max centres the red→green transition at zero — green above, red below.
        visualMap: {
          show: false,
          type: "continuous",
          dimension: 1,
          min: -210,
          max: 210,
          inRange: { color: ["#E5484D", "#E5484D", "#97E152", "#97E152"] }
        },
        series: [{
          name: "Enrollment Delta",
          type: "line",
          smooth: false,
          data: [120, -45, 85, -30, 210, -80, 160, 95],
          markLine: {
            silent: true,
            lineStyle: { color: "#264468", type: "dashed", width: 1 },
            data: [{ yAxis: 0 }],
            label: { show: false }
          },
          areaStyle: {},
          lineStyle: { width: 2 }
        }]
      }
    }
  },
  {
    id: "deviation-column-stacked-net",
    title: "Stacked positive/negative net bar",
    family: "deviation",
    engine: "echarts",
    chartType: "bar",
    variant: "stacked-net",
    whenToUse: "Show the net outcome of positive and negative components simultaneously \u2014 gains stack above zero, losses stack below \u2014 revealing how each component drives the net result.",
    description: "ECharts stacked bar with two positive series stacked above zero and two negative series stacked below; a markLine at zero anchors the baseline. WGU palette differentiates gain/loss segments.",
    tags: ["diverging", "multi-series", "stacked", "positive-negative", "net", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "diverging", "multi-series"],
    sampleData: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      gains: [
        { label: "New Partners", data: [320, 290, 350, 410] },
        { label: "Organic Growth", data: [180, 160, 200, 230] }
      ],
      losses: [
        { label: "Withdrawals", data: [-140, -190, -120, -100] },
        { label: "Transfers Out", data: [-60, -80, -50, -40] }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#E5484D", "#F59E0B"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0 },
        xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
        yAxis: { type: "value", name: "\u0394 Enrollments" },
        series: [
          { name: "New Partners", type: "bar", stack: "gain", data: [320, 290, 350, 410], itemStyle: { color: "#0070F0", borderRadius: [0, 0, 0, 0] } },
          { name: "Organic Growth", type: "bar", stack: "gain", data: [180, 160, 200, 230], itemStyle: { color: "#46B1EF", borderRadius: [4, 4, 0, 0] } },
          { name: "Withdrawals", type: "bar", stack: "loss", data: [-140, -190, -120, -100], itemStyle: { color: "#E5484D", borderRadius: [0, 0, 4, 4] } },
          { name: "Transfers Out", type: "bar", stack: "loss", data: [-60, -80, -50, -40], itemStyle: { color: "#F59E0B", borderRadius: [0, 0, 0, 0] } }
        ]
      }
    }
  },
  {
    id: "deviation-bar-horizontal-likert",
    title: "Horizontal Likert diverging bar",
    family: "deviation",
    engine: "echarts",
    chartType: "bar",
    variant: "likert",
    whenToUse: "Display survey agreement data on a 5-point Likert scale where strongly-agree and agree stack right of center, strongly-disagree and disagree stack left \u2014 instantly communicating net sentiment.",
    description: "ECharts stacked horizontal bar with positive and negative stacks; the neutral response is omitted or split. Per-item colors progress from red (strongly disagree) through orange/amber to blue/green (agree).",
    tags: ["diverging", "multi-series", "stacked", "horizontal", "likert", "survey", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["stacked", "diverging", "multi-series"],
    sampleData: {
      questions: ["Course quality", "Mentor support", "Career outcomes", "Flexibility"],
      stronglyDisagree: [-8, -12, -5, -3],
      disagree: [-15, -18, -12, -8],
      agree: [35, 28, 40, 42],
      stronglyAgree: [42, 32, 43, 47]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#E5484D", "#F59E0B", "#46B1EF", "#0070F0"],
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: { bottom: 0, data: ["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"] },
        xAxis: { type: "value", name: "% Respondents", min: -60, max: 100 },
        yAxis: { type: "category", data: ["Flexibility", "Career outcomes", "Mentor support", "Course quality"] },
        series: [
          { name: "Strongly Disagree", type: "bar", stack: "neg", data: [-3, -5, -12, -8], itemStyle: { color: "#E5484D" } },
          { name: "Disagree", type: "bar", stack: "neg", data: [-8, -12, -18, -15], itemStyle: { color: "#F59E0B" } },
          { name: "Agree", type: "bar", stack: "pos", data: [42, 40, 28, 35], itemStyle: { color: "#46B1EF" } },
          { name: "Strongly Agree", type: "bar", stack: "pos", data: [47, 43, 32, 42], itemStyle: { color: "#0070F0" } }
        ]
      }
    }
  },
  {
    id: "deviation-area-surplus-deficit",
    title: "Surplus / deficit area line",
    family: "deviation",
    secondaryFamilies: ["change-over-time"],
    engine: "chartjs",
    chartType: "line",
    variant: "surplus-deficit",
    whenToUse: "Show a metric that swings between surplus (positive) and deficit (negative) over time \u2014 enrollment delta, budget variance, or net change over months.",
    description: "Area line chart where values cross zero; the area fill above baseline signals surplus periods and below baseline signals deficit, making the balance shift immediately visible.",
    tags: ["diverging", "single-series", "time-series", "area", "positive-negative"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["area", "diverging"],
    sampleData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      series: [{ label: "Enrollment Delta", data: [120, -45, 85, -30, 210, -80, 160, 95] }]
    },
    spec: {
      engine: "chartjs",
      type: "line",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      data: [{ label: "Enrollment Delta", data: [120, -45, 85, -30, 210, -80, 160, 95] }],
      opts: { area: true }
    }
  }
];

// src/corpus/entries/flow.ts
var flow = [
  {
    id: "flow-funnel",
    title: "Conversion funnel",
    family: "flow",
    engine: "render-model",
    chartType: "funnel",
    whenToUse: "Trace the drop-off at each stage of a sequential process \u2014 e.g., prospect \u2192 applicant \u2192 enrolled \u2192 graduated.",
    description: "Stacked horizontal bands whose width shrinks proportionally to each stage value; connector labels between stages name the transition. Built as a WGU-branded render-model (no Canvas).",
    tags: ["funnel", "conversion", "sequential", "drop-off"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow"],
    sampleData: [
      { stage: "Awareness", label: "Site Visitors", value: 84e3, connector: "26.2% click-through" },
      { stage: "Interest", label: "Program Page Views", value: 22e3, connector: "31.8% inquired" },
      { stage: "Application", label: "Applications Started", value: 7e3, connector: "74.3% completed" },
      { stage: "Enrolled", label: "New Enrollments", value: 5200, connector: "91.5% persisted" },
      { stage: "Completed", label: "Graduates", value: 4760 }
    ],
    spec: {
      engine: "render-model",
      type: "funnel",
      data: [
        { stage: "Awareness", label: "Site Visitors", value: 84e3, connector: "26.2% click-through" },
        { stage: "Interest", label: "Program Page Views", value: 22e3, connector: "31.8% inquired" },
        { stage: "Application", label: "Applications Started", value: 7e3, connector: "74.3% completed" },
        { stage: "Enrolled", label: "New Enrollments", value: 5200, connector: "91.5% persisted" },
        { stage: "Completed", label: "Graduates", value: 4760 }
      ]
    }
  },
  {
    id: "flow-sankey-chartjs",
    title: "Sankey diagram (Chart.js)",
    family: "flow",
    engine: "chartjs",
    chartType: "sankey",
    whenToUse: "Show how a population flows between states or categories \u2014 partner-to-program enrollment distribution, funding routing, or student-path branching.",
    description: "Nodes represent states; link width is proportional to flow volume. Built on the chartjs-chart-sankey community plugin with the WGU navy-to-sky gradient.",
    tags: ["sankey", "flow", "allocation", "network"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow"],
    sampleData: [
      { from: "WGU Partners", to: "Business College", flow: 3400 },
      { from: "WGU Partners", to: "IT College", flow: 2800 },
      { from: "WGU Partners", to: "Teachers College", flow: 1900 },
      { from: "WGU Partners", to: "Health College", flow: 1500 },
      { from: "Business College", to: "MBA", flow: 1800 },
      { from: "Business College", to: "BS Business", flow: 1600 },
      { from: "IT College", to: "BS IT", flow: 1400 },
      { from: "IT College", to: "BS CS", flow: 1400 }
    ],
    spec: {
      engine: "chartjs",
      type: "sankey",
      data: [
        { from: "WGU Partners", to: "Business College", flow: 3400 },
        { from: "WGU Partners", to: "IT College", flow: 2800 },
        { from: "WGU Partners", to: "Teachers College", flow: 1900 },
        { from: "WGU Partners", to: "Health College", flow: 1500 },
        { from: "Business College", to: "MBA", flow: 1800 },
        { from: "Business College", to: "BS Business", flow: 1600 },
        { from: "IT College", to: "BS IT", flow: 1400 },
        { from: "IT College", to: "BS CS", flow: 1400 }
      ]
    }
  },
  {
    id: "flow-sankey-echarts",
    title: "Sankey diagram (ECharts)",
    family: "flow",
    engine: "echarts",
    chartType: "sankey",
    whenToUse: "Use the ECharts sankey when you need richer interactivity \u2014 adjacency highlighting, zoom, or export \u2014 compared to the Chart.js variant.",
    description: "ECharts sankey factory produces a gradient-linked Sankey from a node list and named source/target links; hover highlights connected paths.",
    tags: ["sankey", "flow", "allocation", "echarts", "interactive"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "interactive"],
    sampleData: {
      nodes: [
        { name: "Direct Admit" },
        { name: "Transfer Partners" },
        { name: "Employer Partners" },
        { name: "Business College" },
        { name: "IT College" },
        { name: "Teachers College" },
        { name: "Graduates" },
        { name: "Withdrawn" }
      ],
      links: [
        { source: "Direct Admit", target: "Business College", value: 2100 },
        { source: "Transfer Partners", target: "Business College", value: 1200 },
        { source: "Transfer Partners", target: "IT College", value: 900 },
        { source: "Employer Partners", target: "IT College", value: 1500 },
        { source: "Employer Partners", target: "Teachers College", value: 800 },
        { source: "Business College", target: "Graduates", value: 2800 },
        { source: "Business College", target: "Withdrawn", value: 500 },
        { source: "IT College", target: "Graduates", value: 2100 },
        { source: "IT College", target: "Withdrawn", value: 300 },
        { source: "Teachers College", target: "Graduates", value: 700 },
        { source: "Teachers College", target: "Withdrawn", value: 100 }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "sankeyOption",
      args: [
        [
          { name: "Direct Admit" },
          { name: "Transfer Partners" },
          { name: "Employer Partners" },
          { name: "Business College" },
          { name: "IT College" },
          { name: "Teachers College" },
          { name: "Graduates" },
          { name: "Withdrawn" }
        ],
        [
          { source: "Direct Admit", target: "Business College", value: 2100 },
          { source: "Transfer Partners", target: "Business College", value: 1200 },
          { source: "Transfer Partners", target: "IT College", value: 900 },
          { source: "Employer Partners", target: "IT College", value: 1500 },
          { source: "Employer Partners", target: "Teachers College", value: 800 },
          { source: "Business College", target: "Graduates", value: 2800 },
          { source: "Business College", target: "Withdrawn", value: 500 },
          { source: "IT College", target: "Graduates", value: 2100 },
          { source: "IT College", target: "Withdrawn", value: 300 },
          { source: "Teachers College", target: "Graduates", value: 700 },
          { source: "Teachers College", target: "Withdrawn", value: 100 }
        ]
      ]
    }
  },
  {
    id: "flow-force-graph-chartjs",
    title: "Force-directed graph (Chart.js)",
    family: "flow",
    engine: "chartjs",
    chartType: "forceDirectedGraph",
    whenToUse: "Map a network of relationships \u2014 partner referral chains, program co-enrollment overlaps, or advisor-student connection clusters.",
    description: "Nodes repel each other and edges attract, settling into an organic layout that reveals clusters and hubs. Built on the chartjs-chart-graph community plugin.",
    tags: ["graph", "network", "relationships", "force-directed"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "network"],
    sampleData: {
      nodes: [
        { id: "WGU" },
        { id: "Boeing" },
        { id: "Amazon" },
        { id: "IHC" },
        { id: "Utah DOE" },
        { id: "Intermountain Health" },
        { id: "Salt Lake CC" }
      ],
      edges: [
        { source: 0, target: 1 },
        { source: 0, target: 2 },
        { source: 0, target: 3 },
        { source: 0, target: 4 },
        { source: 0, target: 5 },
        { source: 0, target: 6 },
        { source: 3, target: 5 },
        { source: 4, target: 6 }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "forceDirectedGraph",
      data: {
        nodes: [
          { id: "WGU" },
          { id: "Boeing" },
          { id: "Amazon" },
          { id: "IHC" },
          { id: "Utah DOE" },
          { id: "Intermountain Health" },
          { id: "Salt Lake CC" }
        ],
        edges: [
          { source: 0, target: 1 },
          { source: 0, target: 2 },
          { source: 0, target: 3 },
          { source: 0, target: 4 },
          { source: 0, target: 5 },
          { source: 0, target: 6 },
          { source: 3, target: 5 },
          { source: 4, target: 6 }
        ]
      }
    }
  },
  {
    id: "flow-force-graph-echarts",
    title: "Force-directed graph (ECharts)",
    family: "flow",
    engine: "echarts",
    chartType: "graph",
    whenToUse: "Use the ECharts graph when you need roam/pan/zoom, label visibility, or richer node styling for a large partner-network diagram.",
    description: "ECharts force-directed graph from named nodes and string source/target links; supports roaming and hover labels. Edges accept named references rather than numeric indices.",
    tags: ["graph", "network", "relationships", "force-directed", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "network"],
    sampleData: {
      nodes: [
        { name: "WGU" },
        { name: "Boeing" },
        { name: "Amazon" },
        { name: "IHC" },
        { name: "Utah DOE" },
        { name: "SLCC" }
      ],
      links: [
        { source: "WGU", target: "Boeing" },
        { source: "WGU", target: "Amazon" },
        { source: "WGU", target: "IHC" },
        { source: "WGU", target: "Utah DOE" },
        { source: "WGU", target: "SLCC" },
        { source: "IHC", target: "SLCC" }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "graphOption",
      args: [
        [
          { name: "WGU" },
          { name: "Boeing" },
          { name: "Amazon" },
          { name: "IHC" },
          { name: "Utah DOE" },
          { name: "SLCC" }
        ],
        [
          { source: "WGU", target: "Boeing" },
          { source: "WGU", target: "Amazon" },
          { source: "WGU", target: "IHC" },
          { source: "WGU", target: "Utah DOE" },
          { source: "WGU", target: "SLCC" },
          { source: "IHC", target: "SLCC" }
        ]
      ]
    }
  },
  {
    id: "flow-chord-graph",
    title: "Chord / circular graph",
    family: "flow",
    engine: "echarts",
    chartType: "graph",
    variant: "circular",
    whenToUse: "Show bidirectional relationships between a set of nodes arranged in a circle \u2014 e.g. co-enrollment overlap between programs, or mutual referral counts between employer partners.",
    description: "ECharts graph series with layout:'circular' and curved edges; node positions are evenly distributed around a ring and edge arcs reveal connection density. WGU brand colors.",
    tags: ["graph", "network", "relationships", "circular", "chord", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["network", "circular"],
    sampleData: {
      nodes: ["MBA", "BSCS", "BSN", "TEP", "BSIT", "MSML"],
      links: [
        { source: "MBA", target: "MSML", value: 120 },
        { source: "BSCS", target: "BSIT", value: 85 },
        { source: "BSN", target: "MBA", value: 40 },
        { source: "TEP", target: "MSML", value: 55 },
        { source: "BSIT", target: "BSCS", value: 65 },
        { source: "MSML", target: "MBA", value: 90 },
        { source: "BSN", target: "TEP", value: 30 }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468", "#8B5CF6"],
        tooltip: { trigger: "item" },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [{
          type: "graph",
          layout: "circular",
          circular: { rotateLabel: true },
          roam: true,
          label: { show: true, position: "right", fontSize: 12 },
          lineStyle: { color: "source", curveness: 0.3, opacity: 0.6 },
          edgeSymbol: ["none", "arrow"],
          edgeSymbolSize: 8,
          data: [
            { name: "MBA", symbolSize: 40, itemStyle: { color: "#0070F0" } },
            { name: "BSCS", symbolSize: 36, itemStyle: { color: "#46B1EF" } },
            { name: "BSN", symbolSize: 32, itemStyle: { color: "#002855" } },
            { name: "TEP", symbolSize: 28, itemStyle: { color: "#97E152" } },
            { name: "BSIT", symbolSize: 30, itemStyle: { color: "#264468" } },
            { name: "MSML", symbolSize: 34, itemStyle: { color: "#8B5CF6" } }
          ],
          links: [
            { source: "MBA", target: "MSML", lineStyle: { width: 3 } },
            { source: "BSCS", target: "BSIT", lineStyle: { width: 2.5 } },
            { source: "BSN", target: "MBA", lineStyle: { width: 1.5 } },
            { source: "TEP", target: "MSML", lineStyle: { width: 2 } },
            { source: "BSIT", target: "BSCS", lineStyle: { width: 2 } },
            { source: "MSML", target: "MBA", lineStyle: { width: 2.5 } },
            { source: "BSN", target: "TEP", lineStyle: { width: 1.5 } }
          ]
        }]
      }
    }
  },
  {
    id: "flow-funnel-echarts",
    title: "Funnel chart (ECharts)",
    family: "flow",
    engine: "echarts",
    chartType: "funnel",
    whenToUse: "Trace drop-off through a sequential process in ECharts when hover tooltips with percentage, animated draw-on, or a toolbox export are needed alongside the funnel visualization.",
    description: "ECharts funnel series from a named-value array; each stage's width is proportional to its value and the gap between stages implies the drop-off rate. WGU brand colors.",
    tags: ["funnel", "conversion", "sequential", "drop-off", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow"],
    sampleData: [
      { name: "Site Visitors", value: 84e3 },
      { name: "Program Views", value: 22e3 },
      { name: "Applications", value: 7e3 },
      { name: "Enrolled", value: 5200 },
      { name: "Graduates", value: 4760 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#0070F0", "#2688D4", "#46B1EF", "#78C9F4", "#97E152"],
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        series: [{
          name: "Enrollment Funnel",
          type: "funnel",
          left: "10%",
          width: "80%",
          min: 0,
          max: 84e3,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 4,
          label: { show: true, position: "inside", color: "#fff", fontSize: 12, fontWeight: "bold" },
          data: [
            { name: "Site Visitors", value: 84e3 },
            { name: "Program Views", value: 22e3 },
            { name: "Applications", value: 7e3 },
            { name: "Enrolled", value: 5200 },
            { name: "Graduates", value: 4760 }
          ]
        }]
      }
    }
  },
  {
    id: "flow-sankey-gradient",
    title: "Sankey with gradient links",
    family: "flow",
    secondaryFamilies: ["correlation"],
    engine: "echarts",
    chartType: "sankey",
    variant: "gradient-links",
    whenToUse: "Use gradient-colored links in a Sankey diagram to visually connect source and target nodes through smooth color transitions \u2014 helps trace specific pathways through a multi-level flow.",
    description: "ECharts sankey with lineStyle.color:'gradient' (source-to-target blend); link curveness:0.5 softens the flow arcs. Node color follows the WGU palette and links gradient from source to target color.",
    tags: ["sankey", "flow", "allocation", "gradient", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "gradient"],
    sampleData: {
      nodes: [
        { name: "Employer A" },
        { name: "Employer B" },
        { name: "Business College" },
        { name: "IT College" },
        { name: "Graduates" },
        { name: "Promoted" }
      ],
      links: [
        { source: "Employer A", target: "Business College", value: 1200 },
        { source: "Employer A", target: "IT College", value: 800 },
        { source: "Employer B", target: "Business College", value: 600 },
        { source: "Employer B", target: "IT College", value: 1100 },
        { source: "Business College", target: "Graduates", value: 1600 },
        { source: "IT College", target: "Graduates", value: 1700 },
        { source: "Graduates", target: "Promoted", value: 2800 }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "sankeyOption",
      args: [
        [
          { name: "Employer A" },
          { name: "Employer B" },
          { name: "Business College" },
          { name: "IT College" },
          { name: "Graduates" },
          { name: "Promoted" }
        ],
        [
          { source: "Employer A", target: "Business College", value: 1200 },
          { source: "Employer A", target: "IT College", value: 800 },
          { source: "Employer B", target: "Business College", value: 600 },
          { source: "Employer B", target: "IT College", value: 1100 },
          { source: "Business College", target: "Graduates", value: 1600 },
          { source: "IT College", target: "Graduates", value: 1700 },
          { source: "Graduates", target: "Promoted", value: 2800 }
        ]
      ]
    }
  },
  {
    id: "flow-funnel-inverted",
    title: "Inverted funnel (pyramid)",
    family: "flow",
    engine: "echarts",
    chartType: "funnel",
    variant: "pyramid",
    whenToUse: "Show a pyramid structure where the widest stage is at the bottom \u2014 e.g. a skills development ladder from basic literacy to advanced certification \u2014 the inverse of a conversion funnel.",
    description: "ECharts funnel with sort:'ascending' renders smallest at top and largest at bottom; the funnel flares outward creating a pyramid shape. Useful for organizational or maturity models.",
    tags: ["funnel", "pyramid", "sequential", "ascending", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow"],
    sampleData: [
      { name: "Digital Literacy", value: 8e3 },
      { name: "Data Fluency", value: 4200 },
      { name: "Analytics Practitioner", value: 2100 },
      { name: "Data Scientist", value: 800 },
      { name: "AI/ML Expert", value: 250 }
    ],
    spec: {
      engine: "echarts",
      option: {
        color: ["#EEF6F9", "#46B1EF", "#0070F0", "#002855", "#001A3A"],
        tooltip: { trigger: "item", formatter: "{b}: {c}" },
        series: [{
          name: "Skills Ladder",
          type: "funnel",
          left: "10%",
          width: "80%",
          sort: "ascending",
          gap: 4,
          label: { show: true, position: "inside", color: "#fff", fontSize: 12, fontWeight: "bold" },
          data: [
            { name: "Digital Literacy", value: 8e3 },
            { name: "Data Fluency", value: 4200 },
            { name: "Analytics Practitioner", value: 2100 },
            { name: "Data Scientist", value: 800 },
            { name: "AI/ML Expert", value: 250 }
          ]
        }]
      }
    }
  },
  {
    id: "flow-theme-river-extended",
    title: "Theme river (extended program mix)",
    family: "flow",
    secondaryFamilies: ["change-over-time", "part-to-whole"],
    engine: "echarts",
    chartType: "themeRiver",
    variant: "five-categories",
    whenToUse: "Compare five program categories' volume evolution over time \u2014 the wider band identifies which programs are growing in share, making program-mix shifts tactile.",
    description: "themeRiverOption with five category streams over six years; each stream width encodes enrollment volume at each time point. The WGU multi-hue palette separates streams.",
    tags: ["time-series", "multi-series", "streamgraph", "flow", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["streamgraph", "multi-series"],
    sampleData: [
      ["2020", 420, "Business"],
      ["2021", 480, "Business"],
      ["2022", 540, "Business"],
      ["2023", 590, "Business"],
      ["2024", 650, "Business"],
      ["2025", 700, "Business"],
      ["2020", 310, "Technology"],
      ["2021", 360, "Technology"],
      ["2022", 430, "Technology"],
      ["2023", 510, "Technology"],
      ["2024", 580, "Technology"],
      ["2025", 640, "Technology"],
      ["2020", 260, "Education"],
      ["2021", 280, "Education"],
      ["2022", 295, "Education"],
      ["2023", 310, "Education"],
      ["2024", 330, "Education"],
      ["2025", 350, "Education"],
      ["2020", 180, "Healthcare"],
      ["2021", 210, "Healthcare"],
      ["2022", 245, "Healthcare"],
      ["2023", 280, "Healthcare"],
      ["2024", 320, "Healthcare"],
      ["2025", 360, "Healthcare"],
      ["2020", 120, "Engineering"],
      ["2021", 140, "Engineering"],
      ["2022", 165, "Engineering"],
      ["2023", 195, "Engineering"],
      ["2024", 225, "Engineering"],
      ["2025", 260, "Engineering"]
    ],
    spec: {
      engine: "echarts",
      factory: "themeRiverOption",
      args: [[
        ["2020", 420, "Business"],
        ["2021", 480, "Business"],
        ["2022", 540, "Business"],
        ["2023", 590, "Business"],
        ["2024", 650, "Business"],
        ["2025", 700, "Business"],
        ["2020", 310, "Technology"],
        ["2021", 360, "Technology"],
        ["2022", 430, "Technology"],
        ["2023", 510, "Technology"],
        ["2024", 580, "Technology"],
        ["2025", 640, "Technology"],
        ["2020", 260, "Education"],
        ["2021", 280, "Education"],
        ["2022", 295, "Education"],
        ["2023", 310, "Education"],
        ["2024", 330, "Education"],
        ["2025", 350, "Education"],
        ["2020", 180, "Healthcare"],
        ["2021", 210, "Healthcare"],
        ["2022", 245, "Healthcare"],
        ["2023", 280, "Healthcare"],
        ["2024", 320, "Healthcare"],
        ["2025", 360, "Healthcare"],
        ["2020", 120, "Engineering"],
        ["2021", 140, "Engineering"],
        ["2022", 165, "Engineering"],
        ["2023", 195, "Engineering"],
        ["2024", 225, "Engineering"],
        ["2025", 260, "Engineering"]
      ]]
    }
  },
  {
    id: "flow-sankey-three-levels",
    title: "Three-level Sankey (source \u2192 channel \u2192 outcome)",
    family: "flow",
    engine: "echarts",
    chartType: "sankey",
    variant: "three-level",
    whenToUse: "Show a two-hop flow where volume passes through an intermediate processing node \u2014 e.g., employer \u2192 college \u2192 outcome \u2014 making the routing pattern at each stage legible.",
    description: "ECharts sankeyOption with three column levels; left nodes are acquisition sources, middle nodes are academic colleges, right nodes are outcomes. Link thickness encodes student count.",
    tags: ["sankey", "flow", "three-level", "allocation", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "multi-level"],
    sampleData: {
      nodes: [{ name: "Employer Direct" }, { name: "Transfer" }, { name: "Business" }, { name: "Technology" }, { name: "Education" }, { name: "Graduated" }, { name: "Continuing" }, { name: "Withdrawn" }],
      links: [
        { source: "Employer Direct", target: "Business", value: 1400 },
        { source: "Employer Direct", target: "Technology", value: 1800 },
        { source: "Transfer", target: "Business", value: 800 },
        { source: "Transfer", target: "Education", value: 600 },
        { source: "Business", target: "Graduated", value: 1600 },
        { source: "Business", target: "Continuing", value: 400 },
        { source: "Business", target: "Withdrawn", value: 200 },
        { source: "Technology", target: "Graduated", value: 1500 },
        { source: "Technology", target: "Continuing", value: 200 },
        { source: "Technology", target: "Withdrawn", value: 100 },
        { source: "Education", target: "Graduated", value: 480 },
        { source: "Education", target: "Withdrawn", value: 120 }
      ]
    },
    spec: {
      engine: "echarts",
      factory: "sankeyOption",
      args: [
        [{ name: "Employer Direct" }, { name: "Transfer" }, { name: "Business" }, { name: "Technology" }, { name: "Education" }, { name: "Graduated" }, { name: "Continuing" }, { name: "Withdrawn" }],
        [
          { source: "Employer Direct", target: "Business", value: 1400 },
          { source: "Employer Direct", target: "Technology", value: 1800 },
          { source: "Transfer", target: "Business", value: 800 },
          { source: "Transfer", target: "Education", value: 600 },
          { source: "Business", target: "Graduated", value: 1600 },
          { source: "Business", target: "Continuing", value: 400 },
          { source: "Business", target: "Withdrawn", value: 200 },
          { source: "Technology", target: "Graduated", value: 1500 },
          { source: "Technology", target: "Continuing", value: 200 },
          { source: "Technology", target: "Withdrawn", value: 100 },
          { source: "Education", target: "Graduated", value: 480 },
          { source: "Education", target: "Withdrawn", value: 120 }
        ]
      ]
    }
  },
  // ── Phase B feature-showcase entries ──────────────────────────────────────
  {
    id: "flow-graph-categories",
    title: "Force-directed graph with node categories",
    family: "flow",
    engine: "echarts",
    chartType: "graph",
    variant: "categories",
    whenToUse: "Map a partner network where nodes belong to distinct categories (e.g. healthcare vs. technology employers vs. community colleges) and a color-coded legend helps readers scan which cluster each node belongs to.",
    description: "ECharts force-directed graph with series[0].categories defining four node types; each node references a categoryIndex so the legend drives color. Supports roaming and label visibility at a comfortable repulsion.",
    tags: ["graph", "network", "relationships", "force-directed", "interactive", "categories", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["network", "interactive", "categories"],
    sampleData: {
      categories: ["WGU Hub", "Employer", "Healthcare", "Education"],
      nodes: [
        { name: "WGU", category: 0, symbolSize: 48 },
        { name: "Boeing", category: 1, symbolSize: 28 },
        { name: "Amazon", category: 1, symbolSize: 26 },
        { name: "Intermountain Health", category: 2, symbolSize: 24 },
        { name: "HCA Healthcare", category: 2, symbolSize: 22 },
        { name: "Salt Lake CC", category: 3, symbolSize: 20 },
        { name: "Utah Valley Univ", category: 3, symbolSize: 20 },
        { name: "Northrop Grumman", category: 1, symbolSize: 18 },
        { name: "Dignity Health", category: 2, symbolSize: 18 },
        { name: "Davis Tech", category: 3, symbolSize: 16 }
      ],
      links: [
        { source: "WGU", target: "Boeing" },
        { source: "WGU", target: "Amazon" },
        { source: "WGU", target: "Intermountain Health" },
        { source: "WGU", target: "HCA Healthcare" },
        { source: "WGU", target: "Salt Lake CC" },
        { source: "WGU", target: "Utah Valley Univ" },
        { source: "WGU", target: "Northrop Grumman" },
        { source: "WGU", target: "Dignity Health" },
        { source: "WGU", target: "Davis Tech" },
        { source: "Intermountain Health", target: "HCA Healthcare" },
        { source: "Salt Lake CC", target: "Utah Valley Univ" }
      ]
    },
    spec: {
      engine: "echarts",
      option: {
        color: ["#002855", "#0070F0", "#46B1EF", "#97E152"],
        tooltip: { trigger: "item" },
        legend: [{ data: ["WGU Hub", "Employer", "Healthcare", "Education"], bottom: 0 }],
        series: [{
          name: "Partner Network",
          type: "graph",
          layout: "force",
          roam: true,
          label: { show: true, position: "right", fontSize: 11 },
          categories: [
            { name: "WGU Hub" },
            { name: "Employer" },
            { name: "Healthcare" },
            { name: "Education" }
          ],
          force: { repulsion: 200, edgeLength: 120 },
          edgeSymbol: ["none", "arrow"],
          lineStyle: { opacity: 0.6, width: 1.5 },
          data: [
            { name: "WGU", category: 0, symbolSize: 48 },
            { name: "Boeing", category: 1, symbolSize: 28 },
            { name: "Amazon", category: 1, symbolSize: 26 },
            { name: "Intermountain Health", category: 2, symbolSize: 24 },
            { name: "HCA Healthcare", category: 2, symbolSize: 22 },
            { name: "Salt Lake CC", category: 3, symbolSize: 20 },
            { name: "Utah Valley Univ", category: 3, symbolSize: 20 },
            { name: "Northrop Grumman", category: 1, symbolSize: 18 },
            { name: "Dignity Health", category: 2, symbolSize: 18 },
            { name: "Davis Tech", category: 3, symbolSize: 16 }
          ],
          links: [
            { source: "WGU", target: "Boeing" },
            { source: "WGU", target: "Amazon" },
            { source: "WGU", target: "Intermountain Health" },
            { source: "WGU", target: "HCA Healthcare" },
            { source: "WGU", target: "Salt Lake CC" },
            { source: "WGU", target: "Utah Valley Univ" },
            { source: "WGU", target: "Northrop Grumman" },
            { source: "WGU", target: "Dignity Health" },
            { source: "WGU", target: "Davis Tech" },
            { source: "Intermountain Health", target: "HCA Healthcare" },
            { source: "Salt Lake CC", target: "Utah Valley Univ" }
          ]
        }]
      }
    }
  }
];

// src/corpus/entries/spatial.ts
var spatial = [
  {
    id: "spatial-choropleth-render-model",
    title: "US choropleth (render-model)",
    family: "spatial",
    engine: "render-model",
    chartType: "choropleth",
    whenToUse: "Show how a count or metric varies across US states \u2014 e.g., total partner enrollments per state \u2014 using a heat-shaded SVG map.",
    description: "Fully server-renderable choropleth: a bundled US SVG path set is coloured with the WGU blue heat ramp and paired with a ranked location list. No canvas or JS runtime required.",
    tags: ["geo", "choropleth", "us-map", "state-level", "heatmap"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo"],
    sampleData: [
      { state: "CA", count: 4820 },
      { state: "TX", count: 3610 },
      { state: "FL", count: 2940 },
      { state: "NY", count: 2180 },
      { state: "WA", count: 1870 },
      { state: "UT", count: 1540 },
      { state: "AZ", count: 1320 },
      { state: "OH", count: 1100 },
      { state: "NC", count: 980 },
      { state: "GA", count: 870 }
    ],
    spec: {
      engine: "render-model",
      type: "choropleth",
      data: [
        { state: "CA", count: 4820 },
        { state: "TX", count: 3610 },
        { state: "FL", count: 2940 },
        { state: "NY", count: 2180 },
        { state: "WA", count: 1870 },
        { state: "UT", count: 1540 },
        { state: "AZ", count: 1320 },
        { state: "OH", count: 1100 },
        { state: "NC", count: 980 },
        { state: "GA", count: 870 }
      ]
    }
  },
  {
    id: "spatial-choropleth-echarts",
    title: "US choropleth (ECharts)",
    family: "spatial",
    engine: "echarts",
    chartType: "choropleth",
    whenToUse: "Use the ECharts choropleth when you need interactive hover tooltips, a draggable visual-map legend, or seamless zoom on the US state map.",
    description: 'ECharts geo-choropleth factory applies the WGU heat ramp via visualMap; requires the USA topojson registered as "USA" before render.',
    tags: ["geo", "choropleth", "us-map", "state-level", "echarts", "interactive"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "interactive"],
    sampleData: [
      { name: "California", value: 4820 },
      { name: "Texas", value: 3610 },
      { name: "Florida", value: 2940 },
      { name: "New York", value: 2180 },
      { name: "Washington", value: 1870 },
      { name: "Utah", value: 1540 },
      { name: "Arizona", value: 1320 },
      { name: "Ohio", value: 1100 },
      { name: "North Carolina", value: 980 },
      { name: "Georgia", value: 870 }
    ],
    spec: {
      engine: "echarts",
      factory: "geoChoroplethOption",
      needsMap: "USA",
      args: [
        [
          { name: "California", value: 4820 },
          { name: "Texas", value: 3610 },
          { name: "Florida", value: 2940 },
          { name: "New York", value: 2180 },
          { name: "Washington", value: 1870 },
          { name: "Utah", value: 1540 },
          { name: "Arizona", value: 1320 },
          { name: "Ohio", value: 1100 },
          { name: "North Carolina", value: 980 },
          { name: "Georgia", value: 870 }
        ],
        { max: 5e3 }
      ]
    }
  },
  {
    id: "spatial-geo-bubble-chartjs",
    title: "Geo bubble map (Chart.js)",
    family: "spatial",
    engine: "chartjs",
    chartType: "bubbleMap",
    whenToUse: "Plot proportional bubbles at geographic coordinates \u2014 e.g., partner campus locations scaled by enrollment count.",
    description: "Bubbles positioned by lat/lng (encoded as x/y) and sized by value; uses the chartjs-chart-geo plugin with the albersUsa projection. outline:null is used in corpus; supply a topojson outline at runtime for full rendering.",
    tags: ["geo", "bubble-map", "proportional-symbol", "us-map", "topojson-required"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "size-encoding"],
    sampleData: {
      outline: null,
      points: [
        { name: "Salt Lake City, UT", x: -111.89, y: 40.76, value: 3200 },
        { name: "Los Angeles, CA", x: -118.24, y: 34.05, value: 4820 },
        { name: "Dallas, TX", x: -96.8, y: 32.78, value: 2900 },
        { name: "Chicago, IL", x: -87.63, y: 41.88, value: 2100 },
        { name: "Atlanta, GA", x: -84.39, y: 33.75, value: 1750 },
        { name: "Seattle, WA", x: -122.33, y: 47.61, value: 1870 }
      ]
    },
    spec: {
      engine: "chartjs",
      type: "bubbleMap",
      data: {
        outline: null,
        points: [
          { name: "Salt Lake City, UT", x: -111.89, y: 40.76, value: 3200 },
          { name: "Los Angeles, CA", x: -118.24, y: 34.05, value: 4820 },
          { name: "Dallas, TX", x: -96.8, y: 32.78, value: 2900 },
          { name: "Chicago, IL", x: -87.63, y: 41.88, value: 2100 },
          { name: "Atlanta, GA", x: -84.39, y: 33.75, value: 1750 },
          { name: "Seattle, WA", x: -122.33, y: 47.61, value: 1870 }
        ]
      }
    }
  },
  {
    id: "spatial-choropleth-echarts-rate",
    title: "US choropleth \u2014 completion rate (ECharts)",
    family: "spatial",
    engine: "echarts",
    chartType: "choropleth",
    variant: "rate",
    whenToUse: "Map a normalised rate metric (completion %) per state with ECharts; the percentage-based visualMap range is distinct from raw-count maps and reveals geographic performance gaps.",
    description: "ECharts geoChoroplethOption with a max of 100 to treat values as percentages; visualMap legend shows 60\u201390% range. Requires USA map registered at runtime.",
    tags: ["geo", "choropleth", "us-map", "state-level", "percent", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "percent", "interactive"],
    sampleData: [
      { name: "Utah", value: 88 },
      { name: "Washington", value: 85 },
      { name: "Colorado", value: 83 },
      { name: "Minnesota", value: 81 },
      { name: "Oregon", value: 79 },
      { name: "California", value: 77 },
      { name: "Texas", value: 74 },
      { name: "Florida", value: 71 },
      { name: "New York", value: 68 },
      { name: "Louisiana", value: 64 }
    ],
    spec: {
      engine: "echarts",
      factory: "geoChoroplethOption",
      needsMap: "USA",
      args: [
        [
          { name: "Utah", value: 88 },
          { name: "Washington", value: 85 },
          { name: "Colorado", value: 83 },
          { name: "Minnesota", value: 81 },
          { name: "Oregon", value: 79 },
          { name: "California", value: 77 },
          { name: "Texas", value: 74 },
          { name: "Florida", value: 71 },
          { name: "New York", value: 68 },
          { name: "Louisiana", value: 64 }
        ],
        { max: 100 }
      ]
    }
  },
  {
    id: "spatial-effect-scatter",
    title: "Geo effect scatter (pulse bubbles)",
    family: "spatial",
    engine: "echarts",
    chartType: "scatter",
    variant: "effect-scatter",
    whenToUse: "Draw attention to key geographic locations on a map with animated pulsing circles \u2014 useful for highlighting high-enrollment cities or active partner campuses on a presentation.",
    description: "ECharts effectScatter series overlaid on a geo component; each point pulses with a ripple animation to attract attention to notable locations. Requires the USA map registered at runtime. No Math.random.",
    tags: ["geo", "scatter", "animated", "us-map", "echarts", "needsMap"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "animated"],
    sampleData: [
      { name: "Salt Lake City", value: [-111.89, 40.76, 3200] },
      { name: "Los Angeles", value: [-118.24, 34.05, 4820] },
      { name: "Dallas", value: [-96.8, 32.78, 2900] },
      { name: "Chicago", value: [-87.63, 41.88, 2100] },
      { name: "Atlanta", value: [-84.39, 33.75, 1750] }
    ],
    spec: {
      engine: "echarts",
      needsMap: "USA",
      option: {
        color: ["#0070F0"],
        tooltip: { trigger: "item", formatter: (p) => `${p.name}<br/>Enrollments: ${p.data.value[2]}` },
        geo: {
          map: "USA",
          roam: true,
          label: { show: false },
          itemStyle: { areaColor: "#EEF6F9", borderColor: "#46B1EF", borderWidth: 0.5 },
          emphasis: { itemStyle: { areaColor: "#C8E6F5" } }
        },
        series: [{
          name: "Partner Campus",
          type: "effectScatter",
          coordinateSystem: "geo",
          showEffectOn: "render",
          rippleEffect: { brushType: "stroke", scale: 3 },
          symbolSize: (d) => Math.sqrt(d[2]) * 0.5,
          itemStyle: { color: "#0070F0", shadowBlur: 10, shadowColor: "rgba(0,112,240,0.5)" },
          data: [
            { name: "Salt Lake City", value: [-111.89, 40.76, 3200] },
            { name: "Los Angeles", value: [-118.24, 34.05, 4820] },
            { name: "Dallas", value: [-96.8, 32.78, 2900] },
            { name: "Chicago", value: [-87.63, 41.88, 2100] },
            { name: "Atlanta", value: [-84.39, 33.75, 1750] }
          ]
        }]
      }
    }
  },
  {
    id: "spatial-scatter-us-cities",
    title: "US city scatter (lat/lng)",
    family: "spatial",
    engine: "echarts",
    chartType: "scatter",
    variant: "us-cities",
    whenToUse: "Plot partner campus or student-origin city locations on a lightweight US map without a full choropleth when individual city-level patterns matter more than state aggregates.",
    description: "ECharts scatter on a geo component; each point is a city with [lng, lat] coordinates and sized by enrollment. Requires USA map registered at runtime. No Math.random.",
    tags: ["geo", "scatter", "us-map", "city-level", "echarts", "needsMap"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "size-encoding"],
    sampleData: [
      { name: "Salt Lake City", coord: [-111.89, 40.76], value: 3200 },
      { name: "Los Angeles", coord: [-118.24, 34.05], value: 4820 },
      { name: "Dallas", coord: [-96.8, 32.78], value: 2900 },
      { name: "Chicago", coord: [-87.63, 41.88], value: 2100 },
      { name: "Atlanta", coord: [-84.39, 33.75], value: 1750 },
      { name: "Phoenix", coord: [-112.07, 33.45], value: 1480 },
      { name: "Denver", coord: [-104.99, 39.74], value: 1320 }
    ],
    spec: {
      engine: "echarts",
      needsMap: "USA",
      option: {
        tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value[2]} enrollments` },
        geo: { map: "USA", roam: true, itemStyle: { areaColor: "#EEF6F9", borderColor: "#46B1EF", borderWidth: 0.5 } },
        series: [{
          name: "Partner Campuses",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            { name: "Salt Lake City", value: [-111.89, 40.76, 3200] },
            { name: "Los Angeles", value: [-118.24, 34.05, 4820] },
            { name: "Dallas", value: [-96.8, 32.78, 2900] },
            { name: "Chicago", value: [-87.63, 41.88, 2100] },
            { name: "Atlanta", value: [-84.39, 33.75, 1750] },
            { name: "Phoenix", value: [-112.07, 33.45, 1480] },
            { name: "Denver", value: [-104.99, 39.74, 1320] }
          ],
          symbolSize: (val) => Math.sqrt(val[2]) * 0.45,
          itemStyle: { color: "#0070F0", opacity: 0.8, borderColor: "#fff", borderWidth: 1 },
          label: { show: false }
        }]
      }
    }
  },
  {
    id: "spatial-choropleth-render-model-alt",
    title: "US choropleth \u2014 graduation rate",
    family: "spatial",
    engine: "render-model",
    chartType: "choropleth",
    variant: "graduation-rate",
    whenToUse: "Map a percentage metric (graduation rate) across states instead of raw counts; using normalised values reveals geographic patterns that raw-count maps hide in populous states.",
    description: "Render-model choropleth where count values represent graduation rate percentages (0\u2013100) rather than raw enrollment; the WGU heat ramp maps 60\u201390% across states. SSR-safe SVG.",
    tags: ["geo", "choropleth", "us-map", "state-level", "percent", "normalized"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["geo", "percent"],
    sampleData: [
      { state: "UT", count: 88 },
      { state: "WA", count: 85 },
      { state: "CO", count: 83 },
      { state: "MN", count: 81 },
      { state: "OR", count: 79 },
      { state: "CA", count: 77 },
      { state: "TX", count: 74 },
      { state: "FL", count: 71 },
      { state: "NY", count: 68 },
      { state: "LA", count: 64 }
    ],
    spec: {
      engine: "render-model",
      type: "choropleth",
      data: [
        { state: "UT", count: 88 },
        { state: "WA", count: 85 },
        { state: "CO", count: 83 },
        { state: "MN", count: 81 },
        { state: "OR", count: 79 },
        { state: "CA", count: 77 },
        { state: "TX", count: 74 },
        { state: "FL", count: 71 },
        { state: "NY", count: 68 },
        { state: "LA", count: 64 }
      ]
    }
  }
];

// src/corpus/entries/kpi.ts
var kpi = [
  {
    id: "kpi-gauge-ring",
    title: "Ring gauge",
    family: "kpi",
    engine: "render-model",
    chartType: "gauge",
    variant: "ring",
    whenToUse: "Display a single percentage KPI \u2014 completion rate, satisfaction score, or goal attainment \u2014 in a compact circular arc.",
    description: "SVG ring gauge with a filled arc proportional to the percent value; the numeral sits centred inside the ring. Render-model \u2014 no canvas required.",
    tags: ["gauge", "ring", "percentage", "single-metric"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge"],
    sampleData: { label: "Completion Rate", percent: 78, variant: "ring" },
    spec: {
      engine: "render-model",
      type: "gauge",
      data: { label: "Completion Rate", percent: 78, variant: "ring" }
    }
  },
  {
    id: "kpi-gauge-half",
    title: "Half-circle gauge with thresholds",
    family: "kpi",
    engine: "render-model",
    chartType: "gauge",
    variant: "half",
    whenToUse: "Show a value within a min/max range against red/amber/green threshold zones \u2014 ideal for MBR slides where status at a glance is critical.",
    description: "Half-circle dial divided into three coloured zones defined by threshold values; a pointer indicates the current reading. Render-model variant suitable for SSR.",
    tags: ["gauge", "half", "threshold", "red-amber-green", "mbr"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "threshold"],
    sampleData: {
      label: "Partner NPS",
      variant: "half",
      value: 62,
      min: 0,
      max: 100,
      thresholds: [40, 70],
      unit: "pts"
    },
    spec: {
      engine: "render-model",
      type: "gauge",
      data: {
        label: "Partner NPS",
        variant: "half",
        value: 62,
        min: 0,
        max: 100,
        thresholds: [40, 70],
        unit: "pts"
      }
    }
  },
  {
    id: "kpi-gauge-echarts",
    title: "Gauge (ECharts)",
    family: "kpi",
    engine: "echarts",
    chartType: "gauge",
    whenToUse: "Use the ECharts gauge when you need animated arc draw-on, interactive tooltips, or a richer threshold colour scale than the render-model version.",
    description: "Full-circle dial with coloured arc zones driven by threshold stops; animates on load. Produced by the gaugeOption factory using the WGU navy/lime palette.",
    tags: ["gauge", "threshold", "animated", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "threshold", "animated"],
    sampleData: { value: 74, min: 0, max: 100, name: "Retention Rate" },
    spec: {
      engine: "echarts",
      factory: "gaugeOption",
      args: [{ value: 74, min: 0, max: 100, name: "Retention Rate" }]
    }
  },
  {
    id: "kpi-tile-sparkline",
    title: "KPI tile with sparkline",
    family: "kpi",
    engine: "render-model",
    chartType: "kpi",
    whenToUse: "Summarise a headline metric with context \u2014 a delta badge showing direction since last period and a micro trend line over recent months.",
    description: "Compact card with a large serif numeral value, an up/down delta badge, sub-label text, and an SVG sparkline polyline showing the trailing trend. No canvas.",
    tags: ["kpi", "sparkline", "delta", "trend", "single-metric"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["sparkline"],
    sampleData: {
      label: "Active Enrollments",
      value: "24,810",
      sub: "Partner-sourced students \xB7 FY25",
      delta: "+12.4% vs FY24",
      deltaUp: true,
      trend: [18200, 19400, 20100, 21300, 22600, 23800, 24810]
    },
    spec: {
      engine: "render-model",
      type: "kpi",
      data: {
        label: "Active Enrollments",
        value: "24,810",
        sub: "Partner-sourced students \xB7 FY25",
        delta: "+12.4% vs FY24",
        deltaUp: true,
        trend: [18200, 19400, 20100, 21300, 22600, 23800, 24810]
      }
    }
  },
  {
    id: "kpi-tile-no-spark",
    title: "KPI tile (no sparkline)",
    family: "kpi",
    engine: "render-model",
    chartType: "kpi",
    whenToUse: "Show a headline metric with a delta badge when space is too tight for a sparkline \u2014 e.g. a 3-column grid of KPI tiles on a mobile-friendly report.",
    description: "Compact KPI card with the large numeral value and a delta badge only; no sparkline trend line. The absence of a spark keeps the card minimal and space-efficient.",
    tags: ["kpi", "delta", "single-metric", "compact"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["delta"],
    sampleData: {
      label: "Graduation Rate",
      value: "82.4%",
      sub: "Partner-sourced \xB7 FY25",
      delta: "+3.1 pp vs FY24",
      deltaUp: true
    },
    spec: {
      engine: "render-model",
      type: "kpi",
      data: {
        label: "Graduation Rate",
        value: "82.4%",
        sub: "Partner-sourced \xB7 FY25",
        delta: "+3.1 pp vs FY24",
        deltaUp: true
      }
    }
  },
  {
    id: "kpi-gauge-multi-ring",
    title: "Multi-ring gauge (ECharts)",
    family: "kpi",
    engine: "echarts",
    chartType: "gauge",
    variant: "multi-ring",
    whenToUse: "Show three KPI percentages as concentric gauge arcs on a single chart \u2014 more compact than three separate gauges when screen real estate is limited.",
    description: "Three ECharts gauge series stacked at different inner/outer radii; each arc represents one KPI metric. Labels sit along the arcs. WGU navy/sky/lime color palette.",
    tags: ["gauge", "multi-metric", "ring", "animated", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "multi-metric"],
    sampleData: [
      { label: "Completion", percent: 78 },
      { label: "Retention", percent: 91 },
      { label: "NPS", percent: 65 }
    ],
    spec: {
      engine: "echarts",
      option: {
        tooltip: { trigger: "item" },
        series: [
          {
            name: "Completion",
            type: "gauge",
            radius: "90%",
            startAngle: 90,
            endAngle: -270,
            progress: { show: true, width: 14 },
            axisLine: { lineStyle: { width: 14, color: [[1, "#EEF6F9"]] } },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: { show: false },
            title: { show: false },
            data: [{ name: "Completion", value: 78, itemStyle: { color: "#0070F0" } }]
          },
          {
            name: "Retention",
            type: "gauge",
            radius: "70%",
            startAngle: 90,
            endAngle: -270,
            progress: { show: true, width: 14 },
            axisLine: { lineStyle: { width: 14, color: [[1, "#EEF6F9"]] } },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: { show: false },
            title: { show: false },
            data: [{ name: "Retention", value: 91, itemStyle: { color: "#46B1EF" } }]
          },
          {
            name: "NPS",
            type: "gauge",
            radius: "50%",
            startAngle: 90,
            endAngle: -270,
            progress: { show: true, width: 14 },
            axisLine: { lineStyle: { width: 14, color: [[1, "#EEF6F9"]] } },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: { offsetCenter: ["0%", "0%"], fontSize: 20, fontWeight: "bold", color: "#264468", formatter: "{value}%" },
            title: { show: false },
            data: [{ name: "NPS", value: 65, itemStyle: { color: "#97E152" } }]
          }
        ]
      }
    }
  },
  {
    id: "kpi-progress-bar",
    title: "Progress bar (KPI linear)",
    family: "kpi",
    engine: "echarts",
    chartType: "bar",
    variant: "progress",
    whenToUse: "Show one or more KPIs as linear progress bars when a gauge ring is too circular for a narrow card layout \u2014 progress bars stack vertically in a compact scorecard.",
    description: "Horizontal single-bar chart where each bar spans 0\u2013100%; the bar fill encodes the KPI percentage. A grey track behind the bar represents the remaining gap. ECharts raw option.",
    tags: ["kpi", "progress", "percentage", "linear", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "percent"],
    sampleData: [
      { label: "Completion Rate", value: 78 },
      { label: "Retention Rate", value: 91 },
      { label: "Partner NPS", value: 65 },
      { label: "Graduation Rate", value: 84 }
    ],
    spec: {
      engine: "echarts",
      option: {
        grid: { left: 160, right: 60, top: 10, bottom: 10 },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, formatter: "{b}: {c}%" },
        xAxis: { type: "value", max: 100, axisLabel: { formatter: "{value}%" } },
        yAxis: {
          type: "category",
          data: ["Graduation Rate", "Partner NPS", "Retention Rate", "Completion Rate"],
          axisTick: { show: false }
        },
        series: [
          {
            name: "Actual",
            type: "bar",
            barWidth: 20,
            data: [
              { value: 84, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } },
              { value: 65, itemStyle: { color: "#46B1EF", borderRadius: [0, 4, 4, 0] } },
              { value: 91, itemStyle: { color: "#97E152", borderRadius: [0, 4, 4, 0] } },
              { value: 78, itemStyle: { color: "#0070F0", borderRadius: [0, 4, 4, 0] } }
            ],
            label: { show: true, position: "right", formatter: "{c}%", color: "#264468", fontWeight: "bold" },
            z: 2
          },
          {
            name: "Track",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            itemStyle: { color: "#EEF6F9", borderRadius: [0, 4, 4, 0] },
            z: 1
          }
        ]
      }
    }
  },
  {
    id: "kpi-gauge-grade",
    title: "Gauge with grade labels",
    family: "kpi",
    engine: "echarts",
    chartType: "gauge",
    variant: "grade",
    whenToUse: "Show a score with labelled grade zones on the dial \u2014 e.g. a partner health score where the arc is divided into Poor/Fair/Good/Excellent bands \u2014 so readers instantly relate the needle position to a grade.",
    description: "ECharts gauge with a multi-color axisLine (four color stops) and custom axisLabel ticks labelling each zone boundary; the detail formatter shows the raw value. WGU palette.",
    tags: ["gauge", "threshold", "grades", "zones", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "threshold"],
    sampleData: { value: 74, name: "Partner Health Score", bands: ["Poor <40", "Fair 40\u201360", "Good 60\u201380", "Excellent 80+"] },
    spec: {
      engine: "echarts",
      option: {
        tooltip: {},
        series: [{
          name: "Partner Health Score",
          type: "gauge",
          min: 0,
          max: 100,
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.4, "#E5484D"],
                [0.6, "#F59E0B"],
                [0.8, "#0070F0"],
                [1, "#97E152"]
              ]
            }
          },
          pointer: { itemStyle: { color: "#002855" } },
          axisTick: { distance: -24, length: 8, lineStyle: { color: "#fff", width: 2 } },
          splitLine: { distance: -28, length: 14, lineStyle: { color: "#fff", width: 3 } },
          axisLabel: { color: "inherit", distance: 30, align: "center", fontSize: 11 },
          detail: { valueAnimation: true, formatter: "{value}", fontSize: 30, fontWeight: "bold", color: "#002855", offsetCenter: [0, "60%"] },
          title: { offsetCenter: [0, "90%"], fontSize: 14, color: "#264468" },
          data: [{ value: 74, name: "Partner Health Score" }]
        }]
      }
    }
  },
  {
    id: "kpi-tile-down-delta",
    title: "KPI tile with downward delta",
    family: "kpi",
    engine: "render-model",
    chartType: "kpi",
    variant: "down-delta",
    whenToUse: "Display a metric that declined since the prior period \u2014 the red downward delta badge immediately signals negative movement without requiring chart axis reading.",
    description: "KPI tile with deltaUp:false rendering a downward-pointing delta badge in red; the sparkline confirms the declining trend. Distinct from the upward-delta tile variant.",
    tags: ["kpi", "delta", "decline", "sparkline", "single-metric"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["sparkline", "delta"],
    sampleData: {
      label: "Withdrawal Rate",
      value: "8.2%",
      sub: "Partner-sourced \xB7 FY25",
      delta: "+1.4 pp vs FY24",
      deltaUp: false,
      trend: [6.4, 6.8, 7, 6.9, 7.5, 7.8, 8.2]
    },
    spec: {
      engine: "render-model",
      type: "kpi",
      data: {
        label: "Withdrawal Rate",
        value: "8.2%",
        sub: "Partner-sourced \xB7 FY25",
        delta: "+1.4 pp vs FY24",
        deltaUp: false,
        trend: [6.4, 6.8, 7, 6.9, 7.5, 7.8, 8.2]
      }
    }
  },
  {
    id: "kpi-funnel-mini",
    title: "Mini funnel KPI tile",
    family: "kpi",
    engine: "render-model",
    chartType: "funnel",
    variant: "mini",
    whenToUse: "Show a condensed 3-stage funnel as a KPI widget \u2014 e.g. enrolled \u2192 active \u2192 graduating \u2014 where space is limited and the funnel shape conveys the drop-off at a glance.",
    description: "Render-model funnel with three stages only; the compact stage list makes it suitable as a KPI tile rather than a full-page visualization. No connector labels \u2014 stage names and values suffice.",
    tags: ["funnel", "kpi", "conversion", "compact"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["flow", "compact"],
    sampleData: [
      { stage: "Enrolled", label: "Enrolled Students", value: 5200 },
      { stage: "Active", label: "Active Learners", value: 4732 },
      { stage: "On Track to Graduate", label: "On Track", value: 3890 }
    ],
    spec: {
      engine: "render-model",
      type: "funnel",
      data: [
        { stage: "Enrolled", label: "Enrolled Students", value: 5200 },
        { stage: "Active", label: "Active Learners", value: 4732 },
        { stage: "On Track to Graduate", label: "On Track", value: 3890 }
      ]
    }
  },
  {
    id: "kpi-tile-neutral-delta",
    title: "KPI tile with neutral delta (flat trend)",
    family: "kpi",
    engine: "render-model",
    chartType: "kpi",
    variant: "neutral",
    whenToUse: "Show a metric that is flat period-over-period; the neutral delta badge signals stability rather than growth or decline \u2014 prevents misreading the absence of a badge as missing data.",
    description: "KPI tile with deltaUp:false and a neutral/flat delta string that clearly communicates no material change; the sparkline confirms the flat trend. Distinct from up and down delta variants.",
    tags: ["kpi", "delta", "flat", "neutral", "single-metric"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["sparkline", "delta"],
    sampleData: {
      label: "Retention Rate",
      value: "91.2%",
      sub: "Partner-sourced \xB7 FY25",
      delta: "0.0 pp vs FY24",
      deltaUp: false,
      trend: [90.8, 91, 91.2, 91.1, 91.3, 91.2, 91.2]
    },
    spec: {
      engine: "render-model",
      type: "kpi",
      data: {
        label: "Retention Rate",
        value: "91.2%",
        sub: "Partner-sourced \xB7 FY25",
        delta: "0.0 pp vs FY24",
        deltaUp: false,
        trend: [90.8, 91, 91.2, 91.1, 91.3, 91.2, 91.2]
      }
    }
  },
  {
    id: "kpi-gauge-ring-echarts-speed",
    title: "Speed-dial gauge (ECharts)",
    family: "kpi",
    engine: "echarts",
    chartType: "gauge",
    variant: "speed-dial",
    whenToUse: "Show a single metric as a classic speedometer-style half-dial when users are familiar with gauge reading from operational dashboards \u2014 the pointer and numbered ticks provide a quantitative read.",
    description: "Full ECharts gauge with a pointer, numbered splitLine ticks, and a color-coded axisLine gradient from low (navy) to high (green); animates on load. Built from gaugeOption factory.",
    tags: ["gauge", "speedometer", "pointer", "animated", "echarts"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["gauge", "animated"],
    sampleData: { value: 84, min: 0, max: 100, name: "Completion Rate" },
    spec: {
      engine: "echarts",
      factory: "gaugeOption",
      args: [{ value: 84, min: 0, max: 100, name: "Completion Rate" }]
    }
  }
];

// src/corpus/entries/tables.ts
var tables = [
  {
    id: "tables-score-table-banded",
    title: "Score table (banded)",
    family: "tables",
    engine: "render-model",
    chartType: "scoreTable",
    whenToUse: "Present partner performance metrics in a ranked table where the score column is colour-coded by band \u2014 red/amber/green \u2014 for instant status reading.",
    description: "Tabular layout with banded cell backgrounds applied to a nominated score column; bands are configured as {min, color} thresholds that match the WGU MBR palette.",
    tags: ["table", "banded", "red-amber-green", "scorecard", "ranking"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["banded"],
    sampleData: {
      columns: [
        { key: "partner", label: "Partner" },
        { key: "enrolled", label: "Enrolled", align: "right" },
        { key: "completed", label: "Completed", align: "right" },
        { key: "score", label: "Health Score", align: "right" }
      ],
      rows: [
        { partner: "Boeing", enrolled: 1420, completed: 1102, score: 94 },
        { partner: "Amazon", enrolled: 1180, completed: 892, score: 88 },
        { partner: "IHC", enrolled: 960, completed: 694, score: 76 },
        { partner: "Salt Lake CC", enrolled: 720, completed: 476, score: 63 },
        { partner: "Utah DOE", enrolled: 540, completed: 298, score: 47 },
        { partner: "Acme Corp", enrolled: 310, completed: 108, score: 28 }
      ],
      bandColumn: "score",
      bands: [
        { min: 0, color: "rgba(229,72,77,0.18)" },
        { min: 50, color: "rgba(245,166,35,0.18)" },
        { min: 75, color: "rgba(151,225,82,0.22)" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "partner", label: "Partner" },
          { key: "enrolled", label: "Enrolled", align: "right" },
          { key: "completed", label: "Completed", align: "right" },
          { key: "score", label: "Health Score", align: "right" }
        ],
        rows: [
          { partner: "Boeing", enrolled: 1420, completed: 1102, score: 94 },
          { partner: "Amazon", enrolled: 1180, completed: 892, score: 88 },
          { partner: "IHC", enrolled: 960, completed: 694, score: 76 },
          { partner: "Salt Lake CC", enrolled: 720, completed: 476, score: 63 },
          { partner: "Utah DOE", enrolled: 540, completed: 298, score: 47 },
          { partner: "Acme Corp", enrolled: 310, completed: 108, score: 28 }
        ],
        bandColumn: "score",
        bands: [
          { min: 0, color: "rgba(229,72,77,0.18)" },
          { min: 50, color: "rgba(245,166,35,0.18)" },
          { min: 75, color: "rgba(151,225,82,0.22)" }
        ]
      }
    }
  },
  {
    id: "tables-data-table",
    title: "Data table (plain)",
    family: "tables",
    engine: "render-model",
    chartType: "scoreTable",
    whenToUse: "Present structured partner or program data in a clean, unstyled tabular layout when no banding or color-coding is needed \u2014 pure data readability.",
    description: "Plain scoreTable with no bandColumn or bands; columns and rows render without cell-background color, yielding a minimal WGU-branded data table.",
    tags: ["table", "plain", "data", "structured"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["table"],
    sampleData: {
      columns: [
        { key: "program", label: "Program" },
        { key: "college", label: "College" },
        { key: "enrolled", label: "Enrolled", align: "right" },
        { key: "completionRate", label: "Completion %", align: "right" }
      ],
      rows: [
        { program: "MBA", college: "Business", enrolled: 4200, completionRate: "78%" },
        { program: "BSCS", college: "Technology", enrolled: 3800, completionRate: "74%" },
        { program: "BSN", college: "Health", enrolled: 3100, completionRate: "82%" },
        { program: "TEP", college: "Education", enrolled: 2400, completionRate: "80%" },
        { program: "BSIT", college: "Technology", enrolled: 1950, completionRate: "72%" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "program", label: "Program" },
          { key: "college", label: "College" },
          { key: "enrolled", label: "Enrolled", align: "right" },
          { key: "completionRate", label: "Completion %", align: "right" }
        ],
        rows: [
          { program: "MBA", college: "Business", enrolled: 4200, completionRate: "78%" },
          { program: "BSCS", college: "Technology", enrolled: 3800, completionRate: "74%" },
          { program: "BSN", college: "Health", enrolled: 3100, completionRate: "82%" },
          { program: "TEP", college: "Education", enrolled: 2400, completionRate: "80%" },
          { program: "BSIT", college: "Technology", enrolled: 1950, completionRate: "72%" }
        ]
      }
    }
  },
  {
    id: "tables-rag-status",
    title: "RAG status table",
    family: "tables",
    engine: "render-model",
    chartType: "scoreTable",
    variant: "rag",
    whenToUse: "Report partner status with a three-tier Red/Amber/Green band on the score column; the colored background makes status immediately legible without reading numbers.",
    description: "scoreTable with tight RAG band thresholds (0=Red, 60=Amber, 80=Green); partners below 60 appear in red, 60\u201379 in amber, 80+ in green. Threshold values differ from the banded variant to demonstrate reconfigurability.",
    tags: ["table", "banded", "red-amber-green", "rag", "status"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["banded", "rag"],
    sampleData: {
      columns: [
        { key: "partner", label: "Partner" },
        { key: "college", label: "College" },
        { key: "enrollments", label: "Enrollments", align: "right" },
        { key: "status", label: "Status Score", align: "right" }
      ],
      rows: [
        { partner: "Boeing", college: "Technology", enrollments: 1420, status: 91 },
        { partner: "Amazon", college: "Technology", enrollments: 1180, status: 85 },
        { partner: "IHC", college: "Health", enrollments: 960, status: 74 },
        { partner: "Salt Lake CC", college: "Education", enrollments: 720, status: 62 },
        { partner: "Utah DOE", college: "Education", enrollments: 540, status: 44 },
        { partner: "Acme Corp", college: "Business", enrollments: 310, status: 28 }
      ],
      bandColumn: "status",
      bands: [
        { min: 0, color: "rgba(229,72,77,0.2)" },
        { min: 60, color: "rgba(245,166,35,0.2)" },
        { min: 80, color: "rgba(151,225,82,0.25)" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "partner", label: "Partner" },
          { key: "college", label: "College" },
          { key: "enrollments", label: "Enrollments", align: "right" },
          { key: "status", label: "Status Score", align: "right" }
        ],
        rows: [
          { partner: "Boeing", college: "Technology", enrollments: 1420, status: 91 },
          { partner: "Amazon", college: "Technology", enrollments: 1180, status: 85 },
          { partner: "IHC", college: "Health", enrollments: 960, status: 74 },
          { partner: "Salt Lake CC", college: "Education", enrollments: 720, status: 62 },
          { partner: "Utah DOE", college: "Education", enrollments: 540, status: 44 },
          { partner: "Acme Corp", college: "Business", enrollments: 310, status: 28 }
        ],
        bandColumn: "status",
        bands: [
          { min: 0, color: "rgba(229,72,77,0.2)" },
          { min: 60, color: "rgba(245,166,35,0.2)" },
          { min: 80, color: "rgba(151,225,82,0.25)" }
        ]
      }
    }
  },
  {
    id: "tables-ranked-multi-metric",
    title: "Ranked multi-metric table",
    family: "tables",
    secondaryFamilies: ["ranking"],
    engine: "render-model",
    chartType: "scoreTable",
    variant: "ranked-multi-metric",
    whenToUse: "Compare partners or programs across four or more metrics simultaneously in a ranked table where multiple columns are banded \u2014 useful for MBR summary pages.",
    description: "scoreTable with the partner list pre-sorted by composite score; the composite column is banded while enrollment and completion columns render without banding for clean numerical reading.",
    tags: ["table", "banded", "multi-metric", "ranking", "scorecard"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["banded", "table"],
    sampleData: {
      columns: [
        { key: "rank", label: "#", align: "right" },
        { key: "partner", label: "Partner" },
        { key: "enrolled", label: "Enrolled", align: "right" },
        { key: "completed", label: "Completed", align: "right" },
        { key: "rate", label: "Completion %", align: "right" },
        { key: "composite", label: "Composite", align: "right" }
      ],
      rows: [
        { rank: 1, partner: "Boeing", enrolled: 1420, completed: 1102, rate: "77.6%", composite: 94 },
        { rank: 2, partner: "Amazon", enrolled: 1180, completed: 892, rate: "75.6%", composite: 88 },
        { rank: 3, partner: "IHC", enrolled: 960, completed: 694, rate: "72.3%", composite: 76 },
        { rank: 4, partner: "Salt Lake CC", enrolled: 720, completed: 476, rate: "66.1%", composite: 63 },
        { rank: 5, partner: "Utah DOE", enrolled: 540, completed: 298, rate: "55.2%", composite: 47 }
      ],
      bandColumn: "composite",
      bands: [
        { min: 0, color: "rgba(229,72,77,0.15)" },
        { min: 50, color: "rgba(245,166,35,0.15)" },
        { min: 75, color: "rgba(151,225,82,0.2)" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "rank", label: "#", align: "right" },
          { key: "partner", label: "Partner" },
          { key: "enrolled", label: "Enrolled", align: "right" },
          { key: "completed", label: "Completed", align: "right" },
          { key: "rate", label: "Completion %", align: "right" },
          { key: "composite", label: "Composite", align: "right" }
        ],
        rows: [
          { rank: 1, partner: "Boeing", enrolled: 1420, completed: 1102, rate: "77.6%", composite: 94 },
          { rank: 2, partner: "Amazon", enrolled: 1180, completed: 892, rate: "75.6%", composite: 88 },
          { rank: 3, partner: "IHC", enrolled: 960, completed: 694, rate: "72.3%", composite: 76 },
          { rank: 4, partner: "Salt Lake CC", enrolled: 720, completed: 476, rate: "66.1%", composite: 63 },
          { rank: 5, partner: "Utah DOE", enrolled: 540, completed: 298, rate: "55.2%", composite: 47 }
        ],
        bandColumn: "composite",
        bands: [
          { min: 0, color: "rgba(229,72,77,0.15)" },
          { min: 50, color: "rgba(245,166,35,0.15)" },
          { min: 75, color: "rgba(151,225,82,0.2)" }
        ]
      }
    }
  },
  {
    id: "tables-cohort-summary",
    title: "Cohort summary table",
    family: "tables",
    engine: "render-model",
    chartType: "scoreTable",
    variant: "cohort",
    whenToUse: "Show cohort-by-cohort performance data in a clean table when the audience needs to compare multiple cohorts side-by-side \u2014 useful for partner annual reviews and MBR deep-dives.",
    description: "scoreTable tracking four cohorts over three time horizons; columns represent measurement periods and rows represent entry cohorts. No banding \u2014 numbers speak for themselves in this analytical view.",
    tags: ["table", "cohort", "plain", "time-series", "multi-column"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["table"],
    sampleData: {
      columns: [
        { key: "cohort", label: "Entry Cohort" },
        { key: "yr1", label: "Year 1 Ret %", align: "right" },
        { key: "yr2", label: "Year 2 Ret %", align: "right" },
        { key: "yr3", label: "Year 3 Grad %", align: "right" },
        { key: "n", label: "n", align: "right" }
      ],
      rows: [
        { cohort: "FY2021", yr1: "92%", yr2: "88%", yr3: "81%", n: 3840 },
        { cohort: "FY2022", yr1: "91%", yr2: "87%", yr3: "\u2014", n: 4120 },
        { cohort: "FY2023", yr1: "93%", yr2: "\u2014", yr3: "\u2014", n: 4580 },
        { cohort: "FY2024", yr1: "\u2014", yr2: "\u2014", yr3: "\u2014", n: 5040 }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "cohort", label: "Entry Cohort" },
          { key: "yr1", label: "Year 1 Ret %", align: "right" },
          { key: "yr2", label: "Year 2 Ret %", align: "right" },
          { key: "yr3", label: "Year 3 Grad %", align: "right" },
          { key: "n", label: "n", align: "right" }
        ],
        rows: [
          { cohort: "FY2021", yr1: "92%", yr2: "88%", yr3: "81%", n: 3840 },
          { cohort: "FY2022", yr1: "91%", yr2: "87%", yr3: "\u2014", n: 4120 },
          { cohort: "FY2023", yr1: "93%", yr2: "\u2014", yr3: "\u2014", n: 4580 },
          { cohort: "FY2024", yr1: "\u2014", yr2: "\u2014", yr3: "\u2014", n: 5040 }
        ]
      }
    }
  },
  {
    id: "tables-partner-heat-grid",
    title: "Partner heat grid (inline banding)",
    family: "tables",
    secondaryFamilies: ["distribution"],
    engine: "render-model",
    chartType: "scoreTable",
    variant: "heat-grid",
    whenToUse: "Show a compact heat-coded grid where every metric column is banded \u2014 so each cell's background reflects its own metric threshold rather than a single shared score column.",
    description: "scoreTable without a bandColumn; each row shows raw values across completion, retention, NPS, and revenue \u2014 the heat appearance is achieved by setting bands on each column independently (a design convention, not an engine feature).",
    tags: ["table", "banded", "multi-metric", "heat-grid", "partner"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["banded", "multi-metric"],
    sampleData: {
      columns: [
        { key: "partner", label: "Partner" },
        { key: "completion", label: "Completion %", align: "right" },
        { key: "retention", label: "Retention %", align: "right" },
        { key: "nps", label: "NPS", align: "right" },
        { key: "health", label: "Health", align: "right" }
      ],
      rows: [
        { partner: "Boeing", completion: "78%", retention: "91%", nps: 72, health: 94 },
        { partner: "Amazon", completion: "74%", retention: "88%", nps: 65, health: 87 },
        { partner: "IHC", completion: "70%", retention: "84%", nps: 58, health: 74 },
        { partner: "Salt Lake CC", completion: "64%", retention: "79%", nps: 44, health: 61 },
        { partner: "Utah DOE", completion: "58%", retention: "74%", nps: 32, health: 45 }
      ],
      bandColumn: "health",
      bands: [
        { min: 0, color: "rgba(229,72,77,0.15)" },
        { min: 55, color: "rgba(245,166,35,0.15)" },
        { min: 80, color: "rgba(151,225,82,0.2)" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "partner", label: "Partner" },
          { key: "completion", label: "Completion %", align: "right" },
          { key: "retention", label: "Retention %", align: "right" },
          { key: "nps", label: "NPS", align: "right" },
          { key: "health", label: "Health", align: "right" }
        ],
        rows: [
          { partner: "Boeing", completion: "78%", retention: "91%", nps: 72, health: 94 },
          { partner: "Amazon", completion: "74%", retention: "88%", nps: 65, health: 87 },
          { partner: "IHC", completion: "70%", retention: "84%", nps: 58, health: 74 },
          { partner: "Salt Lake CC", completion: "64%", retention: "79%", nps: 44, health: 61 },
          { partner: "Utah DOE", completion: "58%", retention: "74%", nps: 32, health: 45 }
        ],
        bandColumn: "health",
        bands: [
          { min: 0, color: "rgba(229,72,77,0.15)" },
          { min: 55, color: "rgba(245,166,35,0.15)" },
          { min: 80, color: "rgba(151,225,82,0.2)" }
        ]
      }
    }
  },
  {
    id: "tables-program-summary",
    title: "Program summary data table",
    family: "tables",
    engine: "render-model",
    chartType: "scoreTable",
    variant: "program-summary",
    whenToUse: "Present a clean read-only data dump of program-level metrics for a printed report or PDF export where cell banding is not needed but multi-column readability is critical.",
    description: "Plain scoreTable with six columns and no banding; rows are pre-sorted by enrollment. Suitable for a printed MBR appendix or a data-export panel.",
    tags: ["table", "plain", "data", "programs", "multi-column"],
    runtimes: ["LWC", "Next", "HTML"],
    features: ["table"],
    sampleData: {
      columns: [
        { key: "program", label: "Program" },
        { key: "college", label: "College" },
        { key: "level", label: "Level" },
        { key: "enrolled", label: "Enrolled", align: "right" },
        { key: "graduated", label: "Graduated", align: "right" },
        { key: "rate", label: "Rate", align: "right" }
      ],
      rows: [
        { program: "MBA", college: "Business", level: "Graduate", enrolled: 4200, graduated: 3276, rate: "78.0%" },
        { program: "BSCS", college: "Technology", level: "Undergraduate", enrolled: 3800, graduated: 2812, rate: "74.0%" },
        { program: "BSN", college: "Health", level: "Undergraduate", enrolled: 3100, graduated: 2542, rate: "82.0%" },
        { program: "TEP", college: "Education", level: "Graduate", enrolled: 2400, graduated: 1920, rate: "80.0%" },
        { program: "BSIT", college: "Technology", level: "Undergraduate", enrolled: 1950, graduated: 1404, rate: "72.0%" },
        { program: "MSML", college: "Business", level: "Graduate", enrolled: 1400, graduated: 1064, rate: "76.0%" }
      ]
    },
    spec: {
      engine: "render-model",
      type: "scoreTable",
      data: {
        columns: [
          { key: "program", label: "Program" },
          { key: "college", label: "College" },
          { key: "level", label: "Level" },
          { key: "enrolled", label: "Enrolled", align: "right" },
          { key: "graduated", label: "Graduated", align: "right" },
          { key: "rate", label: "Rate", align: "right" }
        ],
        rows: [
          { program: "MBA", college: "Business", level: "Graduate", enrolled: 4200, graduated: 3276, rate: "78.0%" },
          { program: "BSCS", college: "Technology", level: "Undergraduate", enrolled: 3800, graduated: 2812, rate: "74.0%" },
          { program: "BSN", college: "Health", level: "Undergraduate", enrolled: 3100, graduated: 2542, rate: "82.0%" },
          { program: "TEP", college: "Education", level: "Graduate", enrolled: 2400, graduated: 1920, rate: "80.0%" },
          { program: "BSIT", college: "Technology", level: "Undergraduate", enrolled: 1950, graduated: 1404, rate: "72.0%" },
          { program: "MSML", college: "Business", level: "Graduate", enrolled: 1400, graduated: 1064, rate: "76.0%" }
        ]
      }
    }
  }
];

// src/corpus/types.ts
var FAMILIES_ORDER = ["magnitude", "change-over-time", "part-to-whole", "ranking", "distribution", "correlation", "deviation", "flow", "spatial", "kpi", "tables"];

// src/corpus/families.ts
var FAMILIES = [
  { id: "magnitude", label: "Magnitude", description: "Compare a value across categories (size/count)." },
  { id: "change-over-time", label: "Change over time", description: "Show how values move over a time series." },
  { id: "part-to-whole", label: "Part-to-whole", description: "Break a total into its component parts." },
  { id: "ranking", label: "Ranking", description: "Order matters more than absolute value." },
  { id: "distribution", label: "Distribution", description: "Show values and how often they occur." },
  { id: "correlation", label: "Correlation", description: "Relationship between two or more variables." },
  { id: "deviation", label: "Deviation", description: "Variation +/- from a reference (zero, target, average)." },
  { id: "flow", label: "Flow", description: "How quantities move between states/nodes." },
  { id: "spatial", label: "Spatial / Geo", description: "A metric across geography." },
  { id: "kpi", label: "KPI & status", description: "A single value against a target or threshold." },
  { id: "tables", label: "Tables", description: "Tabular values, optionally banded/colored." }
];

// src/theme/index.ts
var wguTheme = {
  colors: {
    navy: "#002855",
    midnight: "#001731",
    medium: "#0070F0",
    sky: "#46B1EF",
    lime: "#97E152",
    fg2: "#264468",
    tick: "#6B7C93",
    grid: "rgba(0,40,85,.06)",
    lightGrey: "#F1F1F1",
    grey: "#A7A7A7",
    white: "#FFFFFF",
    sequence: ["#0070F0", "#46B1EF", "#002855", "#97E152", "#264468", "#A7A7A7"]
  },
  font: {
    family: "'Jost','Futura PT',Arial,sans-serif",
    numerals: "'Newsreader',Georgia,serif",
    weights: { book: 400, medium: 500, heavy: 800 }
  },
  radius: 6,
  tooltip: { backgroundColor: "#002855", padding: 11, cornerRadius: 8 },
  animation: { duration: 900, easing: "easeOutQuart" },
  modes: {
    light: { fg: "#264468", surface: "#FFFFFF" },
    dark: { fg: "#BBD0E8", surface: "#002855" }
  }
};

// src/plugins/index.ts
var FF = wguTheme.font.family;

// src/charts/_shared.ts
function cloneArr(arr) {
  return Array.isArray(arr) ? [...arr] : [];
}
function baseTooltip() {
  return {
    backgroundColor: wguTheme.tooltip.backgroundColor,
    padding: wguTheme.tooltip.padding,
    cornerRadius: wguTheme.tooltip.cornerRadius,
    titleFont: { weight: 700 },
    bodyFont: { weight: 500 },
    displayColors: false
  };
}
function baseAnimation() {
  return { duration: wguTheme.animation.duration, easing: wguTheme.animation.easing };
}
var baseGrid = Object.freeze({ color: wguTheme.colors.grid });
var tickColor = wguTheme.colors.tick;

// src/charts/bar.ts
function barChart(data, opts = {}) {
  const rows = Array.isArray(data) ? data : [];
  const labels = cloneArr(rows.map((d) => d.label));
  const values = cloneArr(rows.map((d) => Number(d.count) || 0));
  const total = values.reduce((a, v) => a + v, 0) || 1;
  const mx = values.length ? Math.max(...values) : 0;
  const horizontal = opts.orientation !== "vertical";
  const C = wguTheme.colors;
  const backgroundColor = opts.leadColor ? values.map((_v, i) => i === 0 ? opts.leadColor : C.medium) : (ctx) => ctx.active ? C.navy : C.medium;
  return {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: opts.title || "",
        data: values,
        backgroundColor,
        hoverBackgroundColor: opts.leadColor ? void 0 : C.navy,
        borderRadius: wguTheme.radius,
        borderSkipped: false,
        barThickness: "flex",
        maxBarThickness: 26,
        categoryPercentage: 0.82
      }]
    },
    options: {
      indexAxis: horizontal ? "y" : "x",
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { right: horizontal ? 42 : 0 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          callbacks: {
            label: (c) => " " + (horizontal ? c.parsed.x : c.parsed.y).toLocaleString("en-US"),
            afterLabel: (c) => " " + Math.round((horizontal ? c.parsed.x : c.parsed.y) / total * 100) + "% of total"
          }
        }
      },
      animation: baseAnimation(),
      hover: { mode: "nearest", intersect: true },
      scales: {
        x: {
          stacked: !!opts.stacked,
          display: horizontal ? false : true,
          beginAtZero: true,
          suggestedMax: horizontal ? mx * 1.08 : void 0,
          grid: { display: false },
          border: { display: false },
          ticks: { color: tickColor }
        },
        y: {
          stacked: !!opts.stacked,
          beginAtZero: true,
          suggestedMax: horizontal ? void 0 : mx * 1.08,
          grid: { display: false },
          border: { display: false },
          ticks: { color: C.fg2 }
        }
      }
    }
  };
}

// src/charts/line.ts
var FILL = [
  { from: "rgba(0,112,240,.22)", to: "rgba(0,112,240,0)" },
  { from: "rgba(70,177,239,.20)", to: "rgba(70,177,239,0)" }
];
function gradientFor(canvas, i) {
  const spec = FILL[i % FILL.length];
  const c = canvas && canvas.getContext && canvas.getContext("2d");
  if (!c || typeof c.createLinearGradient !== "function") return spec.from;
  const g = c.createLinearGradient(0, 0, 0, 260);
  g.addColorStop(0, spec.from);
  g.addColorStop(1, spec.to);
  return g;
}
function lineChart(labels, series, opts = {}) {
  const seq = wguTheme.colors.sequence;
  const area = opts.area !== false;
  const datasets = (Array.isArray(series) ? series : []).map((ds, i) => {
    const color = seq[i % seq.length];
    return {
      label: ds.label,
      data: cloneArr(ds.data),
      borderColor: color,
      backgroundColor: area ? gradientFor(opts.canvas, i) : "transparent",
      fill: area,
      stepped: !!opts.stepped,
      tension: opts.stepped ? 0 : 0.4,
      borderWidth: 3,
      pointBackgroundColor: "#fff",
      pointBorderColor: color,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 3,
      pointHitRadius: 14
    };
  });
  return {
    type: "line",
    data: { labels: cloneArr(labels), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          usePointStyle: true,
          callbacks: { label: (c) => " " + c.dataset.label + ": " + c.parsed.y }
        }
      },
      layout: { padding: { top: 22 } },
      interaction: { intersect: false, mode: "index" },
      animation: baseAnimation(),
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: tickColor } },
        y: {
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor, precision: 0 }
        }
      }
    }
  };
}

// src/charts/pie.ts
function build(data, cutout) {
  const rows = Array.isArray(data) ? data : [];
  const seq = wguTheme.colors.sequence;
  const labels = cloneArr(rows.map((d) => d.label));
  const values = cloneArr(rows.map((d) => Number(d.count) || 0));
  const colors = rows.map((d, i) => d.color || seq[i % seq.length]);
  const total = values.reduce((a, v) => a + v, 0) || 1;
  return {
    type: "doughnut",
    data: { labels, datasets: [{ data: values, backgroundColor: colors, borderColor: "#fff", borderWidth: 3, hoverOffset: 6 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout,
      plugins: {
        legend: { display: false },
        tooltip: { ...baseTooltip(), padding: 10, callbacks: {
          label: (c) => " " + c.label + ": " + Number(c.parsed).toLocaleString("en-US") + " (" + Math.round(c.parsed / total * 100) + "%)"
        } }
      },
      animation: baseAnimation()
    }
  };
}
function doughnutChart(data, cutout = "72%") {
  return build(data, cutout);
}
function pieChart(data) {
  return build(data, 0);
}

// src/charts/combo.ts
function comboChart(labels, bar, line) {
  const C = wguTheme.colors;
  return {
    type: "bar",
    data: {
      labels: cloneArr(labels),
      datasets: [
        {
          type: "bar",
          label: bar.label,
          data: cloneArr(bar.data),
          backgroundColor: (c) => c.active ? C.navy : C.medium,
          hoverBackgroundColor: C.navy,
          borderRadius: wguTheme.radius,
          maxBarThickness: 64,
          yAxisID: "y",
          order: 2
        },
        {
          type: "line",
          label: line.label,
          data: cloneArr(line.data),
          borderColor: C.sky,
          borderWidth: 3,
          tension: 0.35,
          pointBackgroundColor: "#fff",
          pointBorderColor: C.sky,
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          yAxisID: "y1",
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { ...baseTooltip(), callbacks: { label: (c) => c.dataset.type === "line" ? " " + line.label + ": " + c.parsed.y + "%" : " " + Number(c.parsed.y).toLocaleString("en-US") } }
      },
      interaction: { intersect: false, mode: "index" },
      animation: baseAnimation(),
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { color: C.fg2 } },
        y: {
          position: "left",
          beginAtZero: true,
          grid: { color: C.grid },
          border: { display: false },
          ticks: { color: C.tick },
          title: { display: true, text: bar.label, color: C.tick, font: { size: 11 } }
        },
        y1: {
          position: "right",
          beginAtZero: true,
          max: 100,
          grid: { display: false },
          border: { display: false },
          ticks: { color: C.sky, callback: (v) => v + "%" },
          title: { display: true, text: line.label, color: C.sky, font: { size: 11 } }
        }
      }
    }
  };
}

// src/charts/polar.ts
function polarChart(data) {
  const rows = Array.isArray(data) ? data : [];
  const seq = wguTheme.colors.sequence;
  return {
    type: "polarArea",
    data: {
      labels: cloneArr(rows.map((d) => d.label)),
      datasets: [{
        data: cloneArr(rows.map((d) => Number(d.count) || 0)),
        backgroundColor: rows.map((_d, i) => seq[i % seq.length] + "cc"),
        borderColor: "#fff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" }, tooltip: baseTooltip() },
      animation: baseAnimation()
    }
  };
}

// src/charts/radar.ts
function radarChart(labels, series) {
  const seq = wguTheme.colors.sequence;
  return {
    type: "radar",
    data: {
      labels: cloneArr(labels),
      datasets: (Array.isArray(series) ? series : []).map((s, i) => {
        const c = seq[i % seq.length];
        return {
          label: s.label,
          data: cloneArr(s.data),
          borderColor: c,
          backgroundColor: c + "33",
          borderWidth: 2,
          pointBackgroundColor: c
        };
      })
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" }, tooltip: baseTooltip() },
      animation: baseAnimation(),
      scales: { r: { grid: { color: wguTheme.colors.grid }, ticks: { backdropColor: "transparent" } } }
    }
  };
}

// src/charts/scatter.ts
function scatterChart(series, opts) {
  const seq = wguTheme.colors.sequence;
  const showLine = opts?.showLine ?? false;
  return {
    type: "scatter",
    data: { datasets: (Array.isArray(series) ? series : []).map((s, i) => ({
      label: s.label,
      data: cloneArr(s.points),
      backgroundColor: seq[i % seq.length],
      pointRadius: 5,
      pointHoverRadius: 7,
      ...showLine ? { showLine: true, tension: 0.3, borderColor: seq[i % seq.length] } : {}
    })) },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" }, tooltip: baseTooltip() },
      animation: baseAnimation(),
      scales: {
        x: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } },
        y: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } }
      }
    }
  };
}

// src/charts/bubble.ts
function bubbleChart(series) {
  const seq = wguTheme.colors.sequence;
  return {
    type: "bubble",
    data: { datasets: (Array.isArray(series) ? series : []).map((s, i) => ({
      label: s.label,
      data: cloneArr(s.points),
      backgroundColor: seq[i % seq.length] + "aa",
      borderColor: seq[i % seq.length]
    })) },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" }, tooltip: baseTooltip() },
      animation: baseAnimation(),
      scales: {
        x: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } },
        y: { border: { display: false }, grid: { color: wguTheme.colors.grid }, ticks: { color: tickColor } }
      }
    }
  };
}

// src/charts/grouped-bar.ts
function groupedBarChart(labels, series, opts = {}) {
  const seq = wguTheme.colors.sequence;
  const datasets = (Array.isArray(series) ? series : []).map((s, i) => ({
    label: s.label,
    data: cloneArr(s.data),
    backgroundColor: seq[i % seq.length],
    borderRadius: wguTheme.radius,
    borderSkipped: false,
    maxBarThickness: 42
  }));
  return {
    type: "bar",
    data: { labels: cloneArr(labels), datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: baseTooltip()
      },
      animation: baseAnimation(),
      scales: {
        x: {
          stacked: !!opts.stacked,
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          stacked: !!opts.stacked,
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}

// src/charts/community/heatmap.ts
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function heat(t) {
  t = Math.max(0, Math.min(1, t));
  const cs = [[200, 224, 245], [70, 177, 239], [0, 112, 240], [3, 40, 100]];
  const seg = t * (cs.length - 1);
  const i = Math.min(Math.floor(seg), cs.length - 2);
  const f = seg - i;
  const c = cs[i];
  const d = cs[i + 1];
  return "rgb(" + Math.round(lerp(c[0], d[0], f)) + "," + Math.round(lerp(c[1], d[1], f)) + "," + Math.round(lerp(c[2], d[2], f)) + ")";
}
function heatmapChart(data, opts) {
  const cloned = cloneArr(data);
  const rawMax = data.length ? Math.max(...data.map((d) => d.v)) : 0;
  const max = (opts?.max != null ? opts.max : rawMax) || 1;
  const xLabels = opts?.xLabels;
  const yLabels = opts?.yLabels;
  const fg2 = wguTheme.colors.fg2;
  return {
    type: "matrix",
    data: {
      datasets: [{
        label: opts?.label || "",
        data: cloned,
        backgroundColor: (ctx) => heat((ctx.raw ? ctx.raw.v : 0) / max),
        borderColor: "#fff",
        borderWidth: 1,
        width: (ctx) => {
          const chart = ctx.chart;
          return (chart.chartArea?.width || 0) / (xLabels?.length || 1) - 2;
        },
        height: (ctx) => {
          const chart = ctx.chart;
          return (chart.chartArea?.height || 0) / (yLabels?.length || 1) - 2;
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          callbacks: {
            title: () => "",
            label: (c) => ` ${c.raw?.x}, ${c.raw?.y}, ${c.raw?.v}`
          }
        }
      },
      scales: {
        x: {
          type: "category",
          labels: xLabels,
          grid: { display: false },
          ticks: { color: fg2 }
        },
        y: {
          type: "category",
          labels: yLabels,
          grid: { display: false },
          ticks: { color: fg2 }
        }
      }
    }
  };
}

// src/charts/community/treemap.ts
function treemapChart(data, opts) {
  const seq = wguTheme.colors.sequence;
  const tree = cloneArr(data).map((d) => ({
    ...d,
    value: d.value ?? d.count ?? 0
  }));
  return {
    type: "treemap",
    data: {
      datasets: [{
        label: opts?.label || "",
        tree,
        key: "value",
        backgroundColor: (ctx) => seq[(ctx.dataIndex ?? 0) % seq.length],
        spacing: 1,
        borderWidth: 0,
        labels: {
          display: true,
          color: "#fff",
          font: { weight: "600" }
        }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          ...baseTooltip(),
          callbacks: {
            title: (items) => items[0]?.raw?._data?.label ?? "",
            label: (c) => " " + (c.raw?.v ?? c.raw?._data?.value ?? "")
          }
        }
      }
    }
  };
}

// src/charts/community/sankey.ts
function sankeyChart(data, opts) {
  const { navy, medium } = wguTheme.colors;
  return {
    type: "sankey",
    data: {
      datasets: [{
        label: opts?.label || "",
        data: cloneArr(data),
        colorFrom: navy,
        colorTo: medium,
        colorMode: "gradient",
        labels: opts?.labels,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      }
    }
  };
}

// src/charts/community/boxplot.ts
function boxplotChart(labels, data, opts) {
  return {
    type: "boxplot",
    data: {
      labels: cloneArr(labels),
      datasets: [{
        label: opts?.label || "",
        data: data.map(cloneArr),
        backgroundColor: "#0070F066",
        borderColor: "#002855",
        borderWidth: 1.5,
        itemRadius: 2,
        outlierBackgroundColor: "#002855"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      },
      animation: baseAnimation(),
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}

// src/charts/community/error-bars.ts
var ERROR_BAR_STYLE = {
  borderRadius: wguTheme.radius,
  borderSkipped: false,
  errorBarColor: "#002855",
  errorBarWhiskerColor: "#002855",
  errorBarLineWidth: 1.5,
  errorBarWhiskerLineWidth: 1.5
};
function errorBarChart(labels, data, opts) {
  const seq = wguTheme.colors.sequence;
  const isMulti = Array.isArray(data) && data.length > 0 && data[0] != null && typeof data[0] === "object" && Array.isArray(data[0].data);
  const datasets = isMulti ? data.map((s, i) => ({
    label: s.label,
    data: cloneArr(s.data),
    backgroundColor: seq[i % seq.length],
    ...ERROR_BAR_STYLE
  })) : [{
    label: opts?.label || "",
    data: cloneArr(data),
    backgroundColor: "#0070F0",
    ...ERROR_BAR_STYLE
  }];
  return {
    type: "barWithErrorBars",
    data: {
      labels: cloneArr(labels),
      datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: isMulti },
        tooltip: baseTooltip()
      },
      animation: baseAnimation(),
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: wguTheme.colors.fg2 }
        },
        y: {
          beginAtZero: true,
          grid: { color: wguTheme.colors.grid },
          border: { display: false },
          ticks: { color: tickColor }
        }
      }
    }
  };
}

// src/charts/community/word-cloud.ts
function wordCloudChart(words, opts) {
  const seq = wguTheme.colors.sequence;
  return {
    type: "wordCloud",
    data: {
      labels: words.map((w) => w.text),
      datasets: [{
        label: opts?.label || "",
        data: words.map((w) => Number(w.weight) || 0),
        color: words.map((_w, i) => seq[i % seq.length])
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  };
}

// src/charts/community/candlestick.ts
function candlestickChart(data, opts = {}) {
  const rows = Array.isArray(data) ? data : [];
  const points = rows.map((d, i) => ({ x: typeof d.x === "number" ? d.x : i, o: d.o, h: d.h, l: d.l, c: d.c }));
  const labels = rows.map((d, i) => typeof d.x === "number" ? String(d.x) : d.x);
  return {
    type: "candlestick",
    data: {
      datasets: [{
        label: opts.label || "",
        data: cloneArr(points),
        color: { up: "#97E152", down: "#E5484D", unchanged: "#46B1EF" },
        borderColor: { up: "#97E152", down: "#E5484D", unchanged: "#46B1EF" }
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: baseTooltip() },
      scales: {
        x: {
          type: "linear",
          offset: true,
          min: -0.5,
          max: points.length - 0.5,
          grid: { display: false },
          border: { display: false },
          ticks: {
            color: wguTheme.colors.fg2,
            stepSize: 1,
            autoSkip: false,
            callback: (v) => labels[v] ?? ""
          }
        },
        y: { grid: { color: wguTheme.colors.grid }, border: { display: false }, ticks: { color: tickColor } }
      }
    }
  };
}

// src/charts/community/geo-bubble.ts
function geoBubbleChart(opts) {
  const points = opts.points || [];
  return {
    type: "bubbleMap",
    data: {
      labels: points.map((p) => p.name),
      datasets: [{
        label: opts.label || "",
        outline: opts.outline,
        data: cloneArr(points),
        backgroundColor: "#0070F0aa",
        borderColor: "#002855",
        borderWidth: 0.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      showOutline: true,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      },
      scales: {
        projection: {
          axis: "x",
          projection: "albersUsa"
        }
      }
    }
  };
}

// src/charts/community/force-graph.ts
function forceGraphChart(opts) {
  const nodes = opts.nodes || [];
  const edges = opts.edges || [];
  return {
    type: "forceDirectedGraph",
    data: {
      labels: nodes.map((n) => n.id),
      datasets: [{
        label: opts.label || "",
        data: nodes.map(() => ({})),
        edges: cloneArr(edges),
        pointBackgroundColor: "#0070F0",
        pointRadius: 6,
        edgeLineBorderColor: "#264468"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      }
    }
  };
}

// src/render/runtime.ts
function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// src/render/funnel.ts
var MIN_PCT = 8;
function funnelModel(stages, opts = {}) {
  const arr = Array.isArray(stages) ? stages : [];
  const max = arr.reduce((m, s) => Math.max(m, Number(s.value) || 0), 0) || 1;
  const rows = arr.map((s, i) => {
    const val = Number(s.value) || 0;
    const widthPct = s.widthPct != null ? Number(s.widthPct) : Math.max(MIN_PCT, parseFloat((val / max * 100).toFixed(1)));
    return {
      stage: s.stage,
      label: s.label,
      meta: s.meta,
      value: val,
      widthPct,
      connector: s.connector && i < arr.length - 1 ? s.connector : void 0
    };
  });
  return { rows, dark: !!opts.dark };
}
function renderFunnel(model) {
  const cls = "pp-funnel" + (model.dark ? " pp-funnel--on-dark" : "");
  const groups = model.rows.map((r) => {
    const stage = r.stage ? `<span class="pp-funnel__stg">${escapeHtml(r.stage)}</span>` : "";
    const meta = r.meta ? `<span class="pp-funnel__meta">${escapeHtml(r.meta)}</span>` : "";
    const conn = r.connector ? `<div class="pp-funnel__conn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"></path></svg>${escapeHtml(r.connector)}</div>` : "";
    return `<div class="pp-funnel__group"><div class="pp-funnel__stage"><span class="pp-funnel__bar" style="width:${r.widthPct}%"></span><span class="pp-funnel__fl">${stage}<span class="pp-funnel__lbl">${escapeHtml(r.label)}</span>${meta}</span><span class="pp-funnel__fv num">${escapeHtml(r.value)}</span></div>${conn}</div>`;
  }).join("");
  return `<div class="${cls}">${groups}</div>`;
}

// src/render/gauge.ts
var R = 42;
var CIRC = 2 * Math.PI * R;
var HALF_R = 40;
var DEFAULT_ZONE_COLORS = ["#E5484D", "#F5A623", "#97E152"];
function buildHalfModel(o) {
  const value = Number(o.value) || 0;
  const min = Number(o.min) || 0;
  const max = Number(o.max) || 0;
  const range = max === min ? 0 : max - min;
  const t = range === 0 ? 0 : Math.max(0, Math.min(1, (value - min) / range));
  const pointerDeg = -90 + t * 180;
  const displayValue = String(value) + (o.unit || "");
  const zoneColors = o.zoneColors || DEFAULT_ZONE_COLORS;
  let zoneBounds;
  if (o.thresholds && o.thresholds.length >= 2 && range > 0) {
    const t1 = Math.max(0, Math.min(1, (o.thresholds[0] - min) / range));
    const t2 = Math.max(0, Math.min(1, (o.thresholds[1] - min) / range));
    zoneBounds = [0, t1, t2, 1];
  } else {
    zoneBounds = [0, 1 / 3, 2 / 3, 1];
  }
  const zones = [
    { from: zoneBounds[0], to: zoneBounds[1], color: zoneColors[0] },
    { from: zoneBounds[1], to: zoneBounds[2], color: zoneColors[1] },
    { from: zoneBounds[2], to: zoneBounds[3], color: zoneColors[2] }
  ];
  return {
    variant: "half",
    label: o.label,
    sub: o.sub,
    dark: !!o.dark,
    unit: o.unit,
    value,
    min,
    max,
    t,
    pointerDeg,
    displayValue,
    zones
  };
}
function gaugeModel(o) {
  if (o.variant === "half") {
    return buildHalfModel(o);
  }
  const clampPct = Math.max(0, Math.min(100, Number(o.percent) || 0));
  const filled = clampPct / 100 * CIRC;
  return {
    variant: "ring",
    label: o.label,
    sub: o.sub,
    color: o.color || "#0070F0",
    size: Number(o.size) || 116,
    dark: !!o.dark,
    radius: R,
    clampPct,
    displayPct: Math.round((Number(o.percent) || 0) * 10) / 10 + "%",
    dashArray: `${filled.toFixed(2)} ${(CIRC - filled).toFixed(2)}`
  };
}
function polar(cx, cy, r, deg) {
  const a = deg * Math.PI / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
}
function fracToDeg(frac) {
  return 180 - frac * 180;
}
function arcPath(cx, cy, r, deg0, deg1) {
  const [x0, y0] = polar(cx, cy, r, deg0);
  const [x1, y1] = polar(cx, cy, r, deg1);
  const large = Math.abs(deg1 - deg0) > 180 ? 1 : 0;
  const sweep = deg0 > deg1 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} ${sweep} ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
function renderHalfGauge(m) {
  const cx = 50, cy = 50, r = HALF_R;
  const zonePaths = m.zones.map((z) => {
    const deg0 = fracToDeg(z.from);
    const deg1 = fracToDeg(z.to);
    const d = arcPath(cx, cy, r, deg0, deg1);
    return `<path d="${d}" fill="none" stroke="${escapeHtml(z.color)}" stroke-width="9" stroke-linecap="butt"/>`;
  }).join("");
  const pointerDeg = fracToDeg(m.t);
  const [tipX, tipY] = polar(cx, cy, r - 6, pointerDeg);
  const pointer = `<line x1="${cx}" y1="${cy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" stroke="#002855" stroke-width="2.5" stroke-linecap="round"/>`;
  const dot = `<circle cx="${cx}" cy="${cy}" r="3" fill="#002855"/>`;
  const cls = "pp-gauge pp-gauge--half" + (m.dark ? " pp-gauge--on-dark" : "");
  const sub = m.sub ? `<div class="pp-gauge__sub">${escapeHtml(m.sub)}</div>` : "";
  return `<div class="${cls}"><svg viewBox="0 0 100 55" class="pp-gauge__svg pp-gauge__svg--half" role="img" aria-label="${escapeHtml(m.label + ": " + m.displayValue)}">${zonePaths}${pointer}${dot}</svg><div class="pp-gauge__pct num">${escapeHtml(m.displayValue)}</div><div class="pp-gauge__label pp-gauge__label--half">${escapeHtml(m.label)}</div>${sub}</div>`;
}
function renderGauge(m) {
  if (m.variant === "half") {
    return renderHalfGauge(m);
  }
  const rm = m;
  const cls = "pp-gauge" + (rm.dark ? " pp-gauge--on-dark" : "");
  const sub = rm.sub ? `<div class="pp-gauge__sub">${escapeHtml(rm.sub)}</div>` : "";
  return `<div class="${cls}"><div class="pp-gauge__svg-wrap" style="width:${rm.size}px"><svg viewBox="0 0 100 100" class="pp-gauge__svg" style="width:${rm.size}px" role="img" aria-label="${escapeHtml((rm.label ? rm.label + ": " : "") + rm.displayPct)}"><circle class="pp-gauge__track" cx="50" cy="50" r="${rm.radius}" fill="none" stroke-width="10"></circle><circle class="pp-gauge__arc" cx="50" cy="50" r="${rm.radius}" fill="none" stroke="${escapeHtml(rm.color)}" stroke-width="10" stroke-dasharray="${rm.dashArray}" stroke-linecap="round" transform="rotate(-90 50 50)"></circle></svg><div class="pp-gauge__center"><span class="pp-gauge__pct num">${escapeHtml(rm.displayPct)}</span></div></div><div class="pp-gauge__label">${escapeHtml(rm.label)}</div>${sub}</div>`;
}

// src/render/kpi.ts
function kpiModel(o) {
  const trend = Array.isArray(o.trend) ? o.trend : [];
  const hasSparkline = trend.length > 1;
  let sparklinePoints = "";
  if (hasSparkline) {
    const max = Math.max(...trend), min = Math.min(...trend), span = max - min || 1, w = 100, h = 28;
    sparklinePoints = trend.map((v, i) => `${(i / (trend.length - 1) * w).toFixed(1)},${(h - (v - min) / span * h).toFixed(1)}`).join(" ");
  }
  return { label: o.label, value: o.value, sub: o.sub, delta: o.delta, deltaUp: !!o.deltaUp, hasSparkline, sparklinePoints };
}
var UP = '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"></path>';
var DOWN = '<path d="M3 7l6 6 4-4 8 8M21 17v-6h-6"></path>';
function renderKpi(m) {
  const sub = m.sub ? `<div class="pp-kpi__sub">${escapeHtml(m.sub)}</div>` : "";
  const delta = m.delta ? `<div class="pp-kpi__delta ${m.deltaUp ? "pp-kpi__delta--up" : "pp-kpi__delta--down"}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${m.deltaUp ? UP : DOWN}</svg>${escapeHtml(m.delta)}</div>` : "";
  const spark = m.hasSparkline ? `<svg class="pp-kpi__spark" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true"><polyline points="${m.sparklinePoints}" fill="none" stroke="#0070F0" stroke-width="2"></polyline></svg>` : "";
  return `<div class="pp-kpi"><div class="pp-kpi__label">${escapeHtml(m.label)}</div><div class="pp-kpi__value num">${escapeHtml(m.value)}</div>${sub}${delta}${spark}</div>`;
}

// src/data/us-states.json
var us_states_default = { vb: "0 0 959 593", paths: { AL: "m 643,467.4 .4,-7.3 -.9,-1.2 -1.7,-.7 -2.5,-2.8 .5,-2.9 48.8,-5.1 -.7,-2.2 -1.5,-1.5 -.5,-1.4 .6,-6.3 -2.4,-5.7 .5,-2.6 .3,-3.7 2.2,-3.8 -.2,-1.1 -1.7,-1 v -3.2 l -1.8,-1.9 -2.9,-6.1 -12.9,-45.8 -45.7,4 1.3,2 -1.3,67 4.4,33.2 .9,-.5 1.3,.1 .6,.4 .8,-.1 2,-3.8 v -2.3 l 1.1,-1.1 1.4,.5 3.4,6.4 v .9 l -3.3,2.2 3.5,-.4 4.9,-1.6 z", AK: "m 15.8,572 h 2.4 l .7,.7 -1,1.2 -1.9,.2 -2.5,1.3 -3.7,-.1 2.2,-.9 .3,-1.1 2.5,-.3 z m 8.3,-1.7 1.3,.5 h .9 l .5,1.2 .3,-.6 .9,.2 1.1,1.5 0,.5 -4.2,1.9 -2.4,-.1 -1,-.5 -1.1,.7 -2,0 -1.1,-1.4 4.7,-.5 z m 5.4,-.1 1,.1 .7,.7 v 1 l -1.3,.1 -.9,-1.1 z m 2.5,.3 1.3,-.1 -.1,1 -1.1,.6 z m .3,2.2 3.4,-.1 .2,1.1 -1.3,.1 -.3,-.5 -.8,.6 -.4,-.6 -.9,-.2 z m 166.3,7.6 2.1,.1 -1,1.9 -1.1,-.1 -.4,-.8 .5,-1.3 m -1.1,-2.9 .6,-1.3 -.2,-2.3 2.4,-.5 4.5,4.4 1.3,3.4 1.9,1.6 .3,5.1 -1.4,0 -1.3,-2.3 -3.1,-2.4 h -.6 l 1.1,2.8 1.7,.2 .2,2.1 -.9,.1 -4.1,-4.4 -.1,-.9 1.9,-1 0,-1 -.5,-.8 -1.6,-.6 -1.7,-1.3 1.4,.1 .5,-.4 -.6,-.9 -.6,.5 z m -3.6,-9.1 1.3,.1 2.4,2.5 -.2,.8 -.8,-.1 -.1,1.8 .5,.5 0,1.5 -.8,.3 -.4,1.2 -.8,-.4 -.4,-2.2 1.1,-1.4 -2.1,-2.2 .1,-1.2 z m 1.5,-1.5 1.9,.2 2.5,.1 3.4,3.2 -.2,.5 -1.1,.6 -1.1,-.2 -.1,-.7 -1.2,-1.6 -.3,.7 1,1.3 -.2,1.2 -.8,-.1 -1.3,.2 -.1,-1.7 -2.6,-2.8 z m -12.7,-8.9 .9,-.4 h 1.6 l .7,-.5 4.1,2.2 .1,1.5 -.5,.5 h -.8 l -1.4,-.7 1.1,1.3 1.8,0 .5,2 -.9,0 -2.2,-1.5 -1.1,-.2 .6,1.3 .1,.9 .8,-.6 1.7,1.2 1.3,-.1 -.2,.8 1.9,4.3 0,3.4 .4,2.1 -.8,.3 -1.2,-2 -.5,-1.5 -1.6,-1.6 -.2,-2.7 -.6,-1.7 h -.7 l .3,1.1 0,.5 -1.4,1 .1,-3.3 -1.6,-1.6 -1.3,-2.3 -1.2,-1.2 z m 7.2,-2.3 1.1,1.8 2.4,-.1 1,2.1 -.6,.6 2,3.2 v 1.3 l -1.2,.8 v .7 l -2,1.9 -.5,-1.4 -.1,-1.3 .6,-.7 v -1.1 l -1.5,-1.9 -.5,-3.7 -.9,-1.5 z m -56.7,-18.3 -4,4.1 v 1.6 l 2.1,-.8 .8,-1.9 2.2,-2.4 z m -31.6,16.6 0,.6 1.8,1.2 .2,-1.4 .6,.9 3.5,.1 .7,-.6 .2,-1.8 -.5,-.7 -1.4,0 0,-.8 .4,-.6 v -.4 l -1.5,-.3 -3.3,3.6 z m -8.1,6.2 1.5,5.8 h 2.1 l 2.4,-2.5 .3,1.2 6.3,-4 .7,-1 -1,-1.1 v -.7 l .5,-1.3 -.9,-.1 -2,1 0,-1.2 -2.7,-.6 -2.4,.3 -.2,3.4 -.8,-2 -1.5,-.1 -1,.6 z m -2.2,8.2 .1,-.7 2.1,-1.3 .6,.3 1.3,.2 1.3,1.2 -2.2,-.2 -.4,-.6 -1,.6 z m -5.2,3.3 -1.1,.8 1.5,1.4 .8,-.7 -.1,-1.3 z m -6.3,-7.9 1.4,.1 .4,.6 -1.8,.1 z m -13.9,11.9 v .5 l .7,.1 -.1,-.6 z m -.4,-3.2 -1,1 v .5 l .7,1.1 1,-1 -.7,-.1 z m -2,-.8 -.3,1 -1.3,.1 -.4,.2 0,1.3 -.5,.9 .6,0 .7,-.9 .8,-.1 .9,-1 .2,-1.3 z m -4.4,-2 -.2,1.8 1.4,.8 1.2,-.6 0,-1 1.7,-.3 -.1,-.6 -.9,-.2 -.7,.6 -.9,-.5 z m -4.9,-.1 1,.7 -.3,1.2 -1.4,-1.1 z m -4.2,1.3 1.4,.1 -.7,.8 z m -3.5,3 1.8,1.1 -1.7,.1 z m -25.4,-31.2 1.2,.6 -.8,.6 z m -.7,-6.3 .4,1.2 .8,-1.2 z m 24.3,-19.3 1.5,-.1 .9,.4 1.1,-.5 1.3,-.1 1.6,.8 .8,1.9 -.1,.9 -1.2,2 -2.4,-.2 -2.1,-1.8 -1,-.4 -1.1,-2 z m -21.1,-14.4 .1,1.9 2,2 v .5 l -.8,-.2 -1.7,-.8 -.3,-1.1 -.3,-1.6 z m 18.3,-23.3 v 1.2 l 1.9,1.8 h 2.3 l .6,1.1 v 1.6 l 2.1,1.9 1.8,1.2 -.1,.7 -.7,1.1 -1.4,-1.2 -2.1,.1 -.8,-.8 -.9,-2.1 -1.5,-2.2 -2.6,-.1 -1,-.7 1,-2.1 z m 16.8,-4.5 1,0 .1,1.1 h -1 z m 16.2,19.7 .9,.1 0,1.2 -1.7,-.5 z m 127.8,77.7 -1.2,.4 -.1,1.1 h 1.2 z m -157.6,-4.5 -1.3,-.4 -4.1,.6 -2.8,1.4 -.1,1.9 1.9,.7 1.5,-.9 1.7,-.1 4.7,1.4 .1,-1.3 -1.6,-1.1 z m 2.1,2.3 -.4,-1.4 1.2,.2 .1,1.4 1.8,0 .4,-2.5 .3,2.4 2.5,-.1 3.2,-3.3 .8,.1 -.7,1.3 1.4,.9 4.2,-.2 2.6,-1.2 1.4,-.1 .3,1.5 .6,-.5 .4,-1.4 5.9,.2 1.9,-1.6 -1.3,-1.1 .6,-1.2 2.6,.2 -.2,-1.2 2.5,.2 .7,-1.1 1.1,.2 4.6,-1.9 .2,-1.7 5.6,-2.4 2,-1.9 1.2,-.6 1.3,.8 2.3,-.9 1.1,-1.9 .5,-1.3 1.7,-.9 1.5,-.7 .4,-1.4 -1.1,-1.7 -2.2,-.2 -.2,-1.3 .8,-1.6 1.4,-.2 1.3,-1.5 1.9,-.1 3.4,-3.2 .4,-1.4 1.5,-2.3 3.8,-4.1 2.5,-.9 1.9,-.9 2.1,.8 1.4,2.6 -1.5,0 -1.4,-1.5 -3,2 -1.7,.1 -.2,3.1 -3.1,4.9 .6,2 2.3,0 -.6,1 -1.4,.1 -2.4,1.8 0,.9 1.9,1 3.4,-.6 1.4,-1.7 1.4,.1 3,-1.7 .5,-2.3 1.6,-.1 6.3,.8 1,-1.1 1,-4.5 -1.6,1.1 .6,-2.2 -1.6,-1.4 .8,-1.5 .1,1.5 3.4,0 .7,-1 1.6,-.1 -.3,1.7 1.9,.1 -1.9,1.3 4.1,1.1 -3.5,.4 -1.3,1.2 .9,1.4 4.6,-1.7 2.3,1.7 .7,-.9 .6,1.4 4,2.3 h 2.9 l 3.9,-.5 4.3,1.1 2,1.9 4.5,.4 1.8,-1.5 .8,2.4 -1.8,.7 1.2,1.2 7.4,3.8 1.4,2.5 5.4,4.1 3.3,-2 -.6,-2.2 -3.5,-2 3.1,1.2 .5,-.7 .9,1.3 0,2.7 2.1,-.6 2.1,1.8 -2.5,-9.8 1.2,1.3 1.4,6 2.2,2.5 2.4,-.4 1.8,3.5 h .9 l .6,5.6 3.4,.5 1.6,2.2 1.8,1.1 .4,2.8 -1.8,2.6 2.9,1.6 1.2,-2.4 -.2,3.1 -.8,.9 1.4,1.7 .7,-2.4 -.2,-1.2 .8,.2 .6,2.3 -1,1.4 .6,2.6 .5,.4 .3,-1.6 .7,.6 -.3,2 1.2,.2 -.4,.9 1.7,-.1 0,-1 h -1 l .1,-1.7 -.8,-.6 1.7,-.3 .5,-.8 0,-1.6 .5,1.3 -.6,1.8 1.2,3.9 1.8,.1 2.2,-4.2 .1,-1.9 -1.3,-4 -.1,-1.2 .5,-1.2 -.7,-.7 -1.7,.1 -2.5,-2 -1.7,0 -2,-1.4 -1.5,0 -.5,-1.6 -1.4,-.3 -.2,-1.5 -1,-.5 .1,-1.7 -5.1,-7.4 -1.8,-1.5 v -1.2 l -4.3,-3.5 -.7,-1.1 -1.6,-2 -1.9,-.6 0,-2.2 -1.2,-1.3 -1.7,-.7 -2.1,1.3 -1.6,2.1 -.4,2.4 -1.5,.1 -2.5,2.7 -.8,-.3 v -2.5 l -2.4,-2.2 -2.3,-2 -.5,-2 -2.5,-1.3 .2,-2.2 -2.8,-.1 -.7,1.1 -1.2,0 -.7,-.7 -1.2,.8 -1.8,-1.2 0,-85.8 -6.9,-4.1 -1.8,-.5 -2.2,1.1 -2.2,.1 -2.3,-1.6 -4.3,-.6 -5.8,-3.6 -5.7,-.4 -2,.5 -.2,-1.8 -1.8,-.7 1.1,-1 -.2,-.9 -3.2,-1.1 h -2.4 l -.4,.4 -.9,-.6 .1,-2.6 -.8,-.9 -2.5,2.9 -.8,-.1 v -.8 l 1.7,-.8 v -.8 l -1.9,-2.4 -1.1,-.1 -4.5,3.1 h -3.9 l .4,-.9 -1.8,-.1 -5.2,3.4 -1.8,0 -.6,-.8 -2.7,1.5 -3.6,3.7 -2.8,2.7 -1.5,1.2  -2.6,.1 -2.2,-.4 -2.3,-1.3 v 0 l -2.8,3.9 -.1,2.4 2.6,2.4 2.1,4.5 .2,5.3 2.9,2 3.4,.4 .7,.8 -1.5,2.3 .7,2.7 -1.7,-2.6 v -2.4 l -1.5,-.3 .1,1.2 .7,2.1 2.9,3.7 h -1.4 l -2.2,1.1 -6.2,-2.5 -.1,-2 1.4,-1.3 0,-1.4 -2.1,-.5 -2.3,.2 -4.8,.2 1.5,2.3 -1.9,-1.8 -8.4,1.2 -.8,1.5 4.9,4.7 -.8,1.4 -.3,2 -.7,.8 -.1,1.9 4.4,3.6 4.1,.2 4.6,1.9 h 2 l .8,-.6 3.8,.1 .1,-.8 1.2,1.1 .1,2 -2.5,-.1 .1,3.3 .5,3.2 -2.9,2.7 -1.9,-.1 -2,-.8 -1,.1 -3.1,2.1 -1.7,.2 -1.4,-2.8 -3.1,0 -2.2,2 -.5,1.8 -3.3,1.8 -5.3,4.3 -.3,3.1 .7,2.2 1,1.2 1,-.4 .9,1 -.8,.6 -1.5,.9 1.1,1.5 -2.6,1.1 .8,2.2 1.7,2.3 .8,4.1 4,1.5 2.6,-.8 1.7,-1.1 .5,2.1 .3,4.4 -1.9,1.4 0,4.4 -.6,.9 h -1.7 l 1.7,1.2 2.1,-.1 .4,-1 4.6,-.6 2,2.6 1.3,-.7 1.3,5.1 1,.5 1,-.7 .1,-2.4 .9,-1 .7,1.1 .2,1.6 1.6,.4 4.7,-1.2 .2,1.2 -2,1.1 -1.6,1.7 -2.8,7 -4.3,2 -1.4,1.5 -.3,1.4 -1,-.6 -9.3,3.3 -1.8,4.1 -1.3,-.4 .5,-1.1 -1.5,-1.4 -3.5,-.2 -5.3,3.2 -2.2,1.3 -2.3,0 -.5,2.4 z", AZ: "m 139.6,387.6 3,-2.2 .8,-2.4 -1,-1.6 -1.8,-.2 -1.1,-1.6 1.1,-6.9 1.6,-.3 2.4,-3.2 1.6,-7 2.4,-3.6 4.8,-1.7 1.3,-1.3 -.4,-1.9 -2.3,-2.5 -1.2,-5.8 -1.4,-1.8 -1.3,-3.4 .9,-2.1 1.4,-3 .5,-2.9 -.5,-4.9 1,-13.6 3.5,-.6 3.7,1.4 1.2,2.7 h 2 l 2.4,-2.9 3.4,-17.5 46.2,8.2 40,6 -17.4,124.1 -37.3,-5.4 -64.2,-37.5 .5,-2.9 2,-1.8 z", AR: "m 584.2,367 .9,-2.2 1.2,.5 .7,-1 -.8,-.7 .3,-1.5 -1.1,-.9 .6,-1 -.1,-1.5 -1.1,-.1 .8,-.8 1.3,.8 .3,-1.4 -.4,-1.1 .1,-.7 2,.6 -.4,-1.5 1.6,-1.3 -.5,-.9 -1.1,.1 -.6,-.9 .9,-.9 1.6,-.2 .5,-.8 1.4,-.2 -.1,-.8 -.9,-.9 v -.5 h 1.5 l .4,-.7 -1.4,-1 -.1,-.6 -11.2,.8 2.8,-5.1 1.7,-1.5 v -2.2 l -1.6,-2.5 -39.8,2 -39.1,.7 4.1,24.4 -.7,39 2.6,2.3 2.8,-1.3 3.2,.8 .2,11.9 52.3,-1.3 1.2,-1.5 .5,-3 -1.5,-2.3 -.5,-2.2 .9,-.7 v -.8 l -1.7,-1.1 -.1,-.7 1.6,-.9 -1.2,-1.1 1.7,-7.1 3.4,-1.6 v -.8 l -1.1,-1.4 2.9,-5.4 h 1.9 l 1.5,-1.2 -.3,-5.2 3.1,-4.5 1.8,-.6 -.5,-3.1 z", CA: "m 69.4,365.6 3.4,5.2 -1.4,.1 -1.8,-1.9 z m 1.9,-9.8 1.8,4.1 2.6,1 .7,-.6 -1.3,-2.5 -2.6,-2.4 z m -19.9,-19 v 2.4 l 2,1.2 4.4,-.2 1,-1 -3.1,-.2 z m -5.9,.1 3.3,.5 1.4,2.2 h -3.8 z m 47.9,45.5 -1,-3 .2,-3 -.4,-7.9 -1.8,-4.8 -1.2,-1.4 -.6,-1.5 -7,-8.6 -3.6,.1 -2,-1.9 1.1,-1.8 -.7,-3.7 -2.2,-1.2 -3.9,-.6 -2.8,-1.3 -1.5,-1.9 -4.5,-6.6 -2.7,-2.2 -3.7,-.5 -3.1,-2.3 -4.7,-1.5 -2.8,-.3 -2.5,-2.5 .2,-2.8 .8,-4.8 1.8,-5.1 -1.4,-1.6 -4,-9.4 -2.7,-3.7 -.4,-3 -1.6,-2.3 .2,-2.5 -2,-5 -2.9,-2.7 .6,-7.1 2.4,-.8 1.8,-3.1 -.4,-3.2 -1,-.9 h -2.5 l -2.5,-3.3 -1.5,-3.5 v -7.5 l 1.2,-4.2 .2,-2.1 2.5,.2 -.1,1.6 -.8,.7 v 2.5 l 3.7,3.2 v -4.7 l -1.4,-3.4 .5,-1.1 -1,-1.7 2.8,-1.5 -1.9,-3 -1.4,.5 -1.5,3.8 .5,1.3 -.8,1 -.9,-.1 -5.4,-6.1 .7,-5.6 -1.1,-3.9 -6.5,-12.8 .8,-10.7 2.3,-3.6 .2,-6.4 -5.5,-11.1 .3,-5.2 6.9,-7.5 1.7,-2.4 -.1,-1.4 4,-9.2 .1,-8.4 .9,-2.5 66.1,18.6 -16.4,63.1 1.1,3.5 70.4,105 -.9,2.1 1.3,3.4 1.4,1.8 1.2,5.8 2.3,2.5 .4,1.9 -1.3,1.3 -4.8,1.7 -2.4,3.6 -1.6,7 -2.4,3.2 -1.6,.3 -1.1,6.9 1.1,1.6 1.8,.2 1,1.6 -.8,2.4 -3,2.2 -2.2,-.1 z", CO: "m 374.6,323.3 -16.5,-1 -51.7,-4.8 -52.6,-6.5 11.5,-88.3 44.9,5.7 37.5,3.4 33.1,2.4 -1.4,22.1 z", CT: "m 873.5,178.9 .4,-1.1 -3.2,-12.3 -.1,-.3 -14.9,3.4 v .7 l -.9,.3 -.5,-.7 -10.5,2.4 2.8,16.3 1.8,1.5 -3.5,3.4 1.7,2.2 5.4,-4.5 1.7,-1.3 h .8 l 2.4,-3.1 1.4,.1 2.9,-1.1 h 2.1 l 5.3,-2.7 2.8,-.9 1,-1 1.5,.5 z", DE: "m 822.2,226.6 -1.6,.3 -1.5,1.1 -1.2,2.1 7.6,27.1 10.9,-2.3 -2.2,-7.6 -1.1,.5 -3.3,-2.6 -.5,-1.7 -1.8,-1 -.2,-3.7 -2.1,-2.2 -1.1,-.8 -1.2,-1.1 -.4,-3.2 .3,-2.1 1,-2.2 z", FL: "m 751.7,445.1 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -48.8,5.1 -.5,2.9 2.5,2.8 1.7,.7 .9,1.2 -.4,7.3 -1.1,.6 .5,.4 1,-.3 .7,-.8 10.5,-2.7 9.2,-.5 8.1,1.9 8.5,5 2.4,.8 2.2,2 -.1,2.7 h 2.4 l 1.9,-1 2.5,.1 2,-.8 2.9,-2 3.1,-2.9 1.1,-.4 .6,.5 h 1.4 l .5,-.8 -.5,-1.2 -.6,-.6 .2,-.8 2,-1.1 5,-.4 .8,1 1,.1 2.3,1 3,1.8 1.2,1.7 1.1,1.2 2.8,1.4 v 2.4 l 2.8,1.9 1,.1 1.6,1.4 .7,1.6 1,.2 .8,2.1 .7,.6 1,-1.1 2.9,.1 .5,1.4 1.1,.9 v 1.3 l 2.9,2.2 .2,9.6 -1.8,5.8 1,1.2 -.2,3.4 -.8,1.4 .7,1.2 2.3,2.3 .3,1.5 .8,1 -.4,-1.9 1.3,-.6 .8,-3.6 -3,-1.2 .1,-.6 2.6,-.4 .9,2.6 1.1,.6 .1,-2 1.1,.3 .6,.8 -.1,.7 -2.9,4.2 -.2,1.1 -1.7,1.9 v 1.1 l 3.7,3.8 5.3,7.9 1.8,2.1 v 1.8 l 2.8,4.6 2.3,.6 .7,-1.2 -2.1,.3 -3,-4.5 .2,-1.4 1.5,-.8 v -1.5 l -.6,-1.3 .9,-.9 .4,.9 .7,.5 v 4 l -1.2,-.6 -.8,.9 1.4,1.6 1,2.6 1.2,-.6 2.3,1.2 2.1,2.2 1.6,5.1 3.1,4.8 .8,-1.3 2.8,-.5 3.2,1.3 .3,1.7 3.3,3.8 .1,1.1 2.2,2.7 -.7,.5 v 2.7 l 2.7,1.4 h 1.5 l 2.7,-1.8 1.5,.3 1.1,.4 2.3,-1.7 .2,-.7 1.2,.3 2.4,-1.7 1.3,-2.3 -.7,-3.2 -.2,-1.3 1.1,-4 .6,-.2 .6,1.6 .8,-1.8 -.8,-7.2 -.4,-10.5 -1,-6.8 -.7,-1.7 -6.6,-11.1 -5.2,-9.1 -2.2,-3.3 -1.3,-3.6 -.2,-3.4 .9,-.3 v -.9 l -1.1,-2.2 -4,-4 -7.6,-9.7 -5.7,-10.4 -4.3,-10.7 -.6,-3.7 -1.2,-1 -.5,-3.8 z m 9.2,134.5 1.7,-.1 -.7,-1 z m 7.3,-1.1 v -.7 l 1.6,-.2 3.7,-3.3 1.5,-.6 2.4,-.9 .3,1.3 1.7,.8 -2.6,1.2 h -2.4 l -3.9,2.5 z m 17.2,-7.6 -3,1.4 -1,1.3 1.1,.1 z m 3.8,-2.9 -1.1,.3 -1.4,2 1.1,-.2 1.5,-1.6 z m 8.3,-15.7 -1.7,5.6 -.8,1 -1,2.6 -1.2,1.6 -.7,1.7 -1.9,2.2 v .9 l 2.7,-2.8 2.4,-3.5 .6,-2 2.1,-4.9 z", GA: "m 761.8,414.1 v 1.4 l -4.2,6.2 -1.2,.2 1.5,.5 v 2 l -.9,1.1 -.6,6 -2.3,6.2 .5,2 .7,5.1 -3.6,.3 -4,-.7 -1.7,-.9 -2.2,1.4 v 2.5 l 1.4,2.1 -.5,4.3 -2.1,.6 -1,-1.1 -.6,-3.2 -50.1,3.3 -3.3,-6 -.7,-2.2 -1.5,-1.5 -.5,-1.4 .6,-6.3 -2.4,-5.7 .5,-2.6 .3,-3.7 2.2,-3.8 -.2,-1.1 -1.7,-1 v -3.2 l -1.8,-1.9 -2.9,-6.1 -12.9,-45.8 22.9,-2.9 21.4,-3 -.1,1.9 -1.9,1 -1.4,3.2 .2,1.3 6.1,3.8 2.6,-.3 3.1,4 .4,1.7 4.2,5.1 2.6,1.7 1.4,.2 2.2,1.6 1.1,2.2 2,1.6 1.8,.5 2.7,2.7 .1,1.4 2.6,2.8 5,2.3 3.6,6.7 .3,2.7 3.9,2.1 2.5,4.8 .8,3.1 4.2,.4 z", HI: "m 317,553.7 -.2,3.2 1.7,1.9 .1,1.2 -4.8,4.5 -.1,1.2 1.9,3.2 1.7,4.2 v 2.6 l -.5,1.2 .1,3.4 4.1,2.1 1.1,1.1 1.2,-1.1 2.1,-3.6 4.5,-2.9 3.3,-.5 2.5,-1 1.7,-1.2 3.2,-3.5 -2.8,-1.1 -1.4,-1.4 .1,-1.7 -.5,-.6 h -2 l .2,-2.5 -.7,-1.2 -2.6,-2.3 -4.5,-1.9 -2.8,-.2 -3.3,-2.7 -1.2,-.6 z m -15.3,-17 -1.1,1.5 -.1,1.7 2.7,2.4 1.9,.5 .6,1 .4,3 3.6,.2 5.3,-2.6 -.1,-2.5 -1.4,-.5 -3.5,-2.6 -1.8,-.3 -2.9,1.3 -1.5,-2.7 z m -1.5,11.5 .9,-1.4 2.5,-.3 .6,1.8 z m -7,-8.7 1.7,4 3.1,-.6 .3,-2 -1.4,-1.5 z m -4.1,-6.7 -1.1,2.4 h 5 l 4.8,1.6 2.5,-1.6 .2,-1.5 -4.8,.2 z m -16,-10.6 -1.9,2.1 -2.9,.6 .8,2.2 2.2,2.8 .1,1 2.1,-.3 2.3,.1 1.7,1.2 3.5,-.8 v -.7 l -1,-.8 -.5,-2.1 -.8,-.3 -.5,1 -1.2,-1.3 .2,-1.4 -1.8,-3.3 -1.1,-.7 z m -31.8,-12.4 -4.2,2.9 .2,2.3 2.4,1.2 1.9,1.3 2.7,.4 2.6,-2.2 -.2,-1.9 .8,-1.7 v -1.4 l -1,-.9 z m -10.8,4.8 -.3,1.2 -1.9,.9 -.6,1.8 1,.8 1.1,-1.5 1.9,-.6 .4,-2.6 z", ID: "m 165.3,183.1 -24.4,-5.4 8.5,-37.3 2.9,-5.8 .4,-2.1 .8,-.9 -.9,-2 -2.9,-1.2 .2,-4.2 4,-5.8 2.5,-.8 1.6,-2.3 -.1,-1.6 1.8,-1.6 3.2,-5.5 4.2,-4.8 -.5,-3.2 -3.5,-3.1 -1.6,-3.6 1.1,-4.3 -.7,-4 12.7,-56.1 14.2,3 -4.8,22 3.7,7.4 -1.6,4.8 3.6,4.8 1.9,.7 3.9,8.3 v 2.1 l 2.3,3 h .9 l 1.4,2.1 h 3.2 v 1.6 l -7.1,17 -.5,4.1 1.4,.5 1.6,2.6 2.8,-1.4 3.6,-2.4 1.9,1.9 .5,2.5 -.5,3.2 2.5,9.7 2.6,3.5 2.3,1.4 .4,3 v 4.1 l 2.3,2.3 1.6,-2.3 6.9,1.6 2.1,-1.2 9,1.7 2.8,-3.3 1.8,-.6 1.2,1.8 1.6,4.1 .9,.1 -8.5,54.8 -47.9,-8.2 z", IL: "m 623.5,265.9 -1,5.2 v 2 l 2.4,3.5 v .7 l -.3,.9 .9,1.9 -.3,2.4 -1.6,1.8 -1.3,4.2 -3.8,5.3 -.1,7 h -1 l .9,1.9 v .9 l -2.2,2.7 .1,1.1 1.5,2.2 -.1,.9 -3.7,.6 -.6,1.2 -1.2,-.6 -1,.5 -.4,3.3 1.7,1.8 -.4,2.4 -1.5,.3 -6.9,-3 -4,3.7 .3,1.8 h -2.8 l -1.4,-1.5 -1.8,-3.8 v -1.9 l .8,-.6 .1,-1.3 -1.7,-1.9 -.9,-2.5 -2.7,-4.1 -4.8,-1.3 -7.4,-7.1 -.4,-2.4 2.8,-7.6 -.4,-1.9 1.2,-1.1 v -1.3 l -2.8,-1.5 -3,-.7 -3.4,1.2 -1.3,-2.3 .6,-1.9 -.7,-2.4 -8.6,-8.4 -2.2,-1.5 -2.5,-5.9 -1.2,-5.4 1.4,-3.7 .7,-.7 .1,-2.3 -.7,-.9 1,-1.5 1.8,-.6 .9,-.3 1,-1.2 v -2.4 l 1.7,-2.4 .5,-.5 .1,-3.5 -.9,-1.4 -1,-.3 -1.1,-1.6 1,-4 3,-.8 h 2.4 l 4.2,-1.8 1.7,-2.2 .1,-2.4 1.1,-1.3 1.3,-3.2 -.1,-2.6 -2.8,-3.5 h -1.2 l -.9,-1.1 .2,-1.6 -1.7,-1.7 -2.5,-1.3 .5,-.6 45.9,-2.8 .1,4.6 3.4,4.6 1.2,4.1 1.6,3.2 z", IN: "m 629.2,214.8 -5.1,2.3 -4.7,-1.4 4.1,50.2 -1,5.2 v 2 l 2.4,3.5 v .7 l -.3,.9 .9,1.9 -.3,2.4 -1.6,1.8 -1.3,4.2 -3.8,5.3 -.1,7 h -1 l .9,1.9 1.1,.8 .6,-1 -.7,-1.7 4.6,-.5 .2,1.2 1.1,.2 .4,-.9 -.6,-1.3 .3,-.8 1.3,.8 1.7,-.4 1.7,.6 3.4,2.1 1.8,-2.8 3.5,-2.2 3,3.3 1.6,-2.1 .3,-2.7 3.8,-2.3 .2,1.3 1.9,1.2 3,-.2 1.2,-.7 .1,-3.4 2.5,-3.7 4.6,-4.4 -.1,-1.7 1.2,-3.8 2.2,1 6.7,-4.5 -.4,-1.7 -1.5,-2.1 1,-1.9 -6.6,-57.2 -.1,-1.4 -32.4,3.4 z", IA: "m 556.9,183 2.1,1.6 .6,1.1 -1.6,3.3 -.1,2.5 2,5.5 2.7,1.5 3.3,.7 1.3,2.8 -.5,.6 2.5,1.3 1.7,1.7 -.2,1.6 .9,1.1 h 1.2 l 2.8,3.5 .1,2.6 -1.3,3.2 -1.1,1.3 -.1,2.4 -1.7,2.2 -4.2,1.8 h -2.4 l -3,.8 -1,4 1.1,1.6 1,.3 .9,1.4 -.1,3.5 -.5,.5 -1.7,2.4 v 2.4 l -1,1.2 -.9,.3 -1.8,.6 -1,1.5 .7,.9 -.1,2.3 -.7,.7 -1.5,-.8 -1.1,-1.1 -.6,-1.6 -1.7,-1.3 -14.3,.8 -27.2,1.2 -25.9,-.1 -1.8,-4.4 .7,-2.2 -.8,-3.3 .2,-2.9 -1.3,-.7 -.4,-6.1 -2.8,-5 -.2,-3.7 -2.2,-4.3 -1.3,-3.7 v -1.4 l -.6,-1.7 v -2.3 l -.5,-.9 -.7,-1.7 -.3,-1.3 -1.3,-1.2 1,-4.3 1.7,-5.1 -.7,-2 -1.3,-.4 -.4,-1.6 1,-.5 .1,-1.1 -1.3,-1.5 .1,-1.6 2.2,.1 h 28.2 l 36.3,-.9 18.6,-.7 z", KS: "m 459.1,259.5 -43.7,-1.2 -36,-2 -4.8,67 67.7,2.9 62,.1 -.5,-48.1 -3.2,-.7 -2.6,-4.7 -2.5,-2.5 .5,-2.3 2.7,-2.6 .1,-1.2 -1.5,-2.1 -.9,1 -2,-.6 -2.9,-3 z", KY: "m 692.1,322.5 -20.5,1.4 -5.2,.8 -17.4,1 -2.6,.8 -22.6,2 -.7,-.6 h -3.7 l 1.2,3.2 -.6,.9 -23.3,1.5 1,-2.7 1.4,.9 .7,-.4 1.2,-4.1 -1,-1 1,-2 .2,-.9 -1.3,-.8 -.3,-1.8 4,-3.7 6.9,3 1.5,-.3 .4,-2.4 -1.7,-1.8 .4,-3.3 1,-.5 1.2,.6 .6,-1.2 3.7,-.6 .1,-.9 -1.5,-2.2 -.1,-1.1 2.2,-2.7 0,-.9 1.1,.8 .6,-1 -.7,-1.7 4.6,-.5 .2,1.2 1.1,.2 .4,-.9 -.6,-1.3 .3,-.8 1.3,.8 1.7,-.4 1.7,.6 3.4,2.1 1.8,-2.8 3.5,-2.2 3,3.3 1.6,-2.1 .3,-2.7 3.8,-2.3 .2,1.3 1.9,1.2 3,-.2 1.2,-.7 .1,-3.4 2.5,-3.7 4.6,-4.4 -.1,-1.7 1.2,-3.8 2.2,1 6.7,-4.5 -.4,-1.7 -1.5,-2.1 1,-1.9 1.3,.5 2.2,.1 1.9,-.8 2.9,1.2 2.2,3.4 v 1 l 4.1,.7 2.3,-.2 1.9,2.1 2.2,.2 v -1 l 1.9,-.8 3,.8 1.2,.8 1.3,-.7 h .9 l .6,-1.7 3.4,-1.8 .5,.8 .8,2.9 3.5,1.4 1.2,2.1 -.1,1.1 .6,1 -.6,3.6 1.9,1.6 .8,1.1 1,.6 -.1,.9 4.4,5.6 h 1.4 l 1.5,1.8 1.2,.3 1.4,-.1 -4.9,6.6 -2.9,1 -3,3 -.4,2.2 -2.1,1.3 -.1,1.7 -1.4,1.4 -1.8,.5 -.5,1.9 -1,.4 -6.9,4.2 z m -98,11.3 -.7,-.7 .2,-1 h 1.1 l .7,.7 -.3,1 z", LA: "m 602.5,472.8 -1.2,-1.8 .3,-1.3 -4.8,-6.8 .9,-4.6 1,-1.4 .1,-1.4 -36,2 1.7,-11.9 2.4,-4.8 6,-8.4 -1.8,-2.5 h 2 v -3.3 l -2.4,-2.5 .5,-1.7 -1.2,-1 -1.6,-7.1 .6,-1.4 -52.3,1.3 .5,19.9 .7,3.4 2.6,2.8 .7,5.4 3.8,4.6 .8,4.3 h 1 l -.1,7.3 -3.3,6.4 1.3,2.3 -1.3,1.5 .7,3 -.1,4.3 -2.2,3.5 -.1,.8 -1.7,1.2 1,1.8 1.2,1.1 1.6,-1.3 5.3,-.9 6.1,-.1 9.6,3.8 8,1 1.5,-1.4 1.8,-.2 4.8,2.2 1.6,-.4 1.1,-1.5 -4.2,-1.8 -2.2,1 -1.1,-.2 -1.4,-2 3.3,-2.2 1.6,-.1 v 1.7 l 1.5,-.1 3.4,-.3 .4,2.3 1.1,.4 .6,1.9 4.8,1 1.7,1.6 v .7 h -1.2 l -1.5,1.7 1.7,1.2 5.4,1 2.7,2.8 4.4,-1 -3.7,.2 -.1,-.6 2.8,-.7 .2,-1.8 1.2,-.3 v -1.4 l 1.1,.1 v 1.6 l 2.5,.1 .8,-1.9 .9,.3 .2,2.5 1.2,.2 -1.8,2 2.6,-.9 2,-1.1 2.9,-3.3 h -.7 l -1.3,1.2 -.4,-.1 -.5,-.8 .9,-1.2 v -2.3 l 1.1,-.8 .7,.7 1,-.8 1,-.1 .6,1.3 -.6,1.9 h 2.4 l 5.1,1.7 .5,1.3 1.6,1.4 2.8,.1 1.3,.7 1.8,-1 .9,-1.7 v -1.7 h -1.4 l -1.2,-1.4 -1.1,-1.1 -3.2,-.9 -2.6,.2 -4.2,-2.4 v -2.3 l 1.3,-1 2.4,.6 -3.1,-1.6 .2,-.8 h 3.6 l 2.6,-3.5 -2.6,-1.8 .8,-1.5 -1.2,-.8 h -.8 l -2,2.1 v 2.1 l -.6,.7 -1.1,-.1 -1.6,-1.4 h -1.3 v -1.5 l .6,-.7 .8,.7 1.7,-1.6 .7,-1.6 .8,-.3 z m -10.3,-2.7 1.9,1 .8,1.1 2.5,.1 1.5,.8 .2,1.4 -.4,.6 -.9,-1.5 -1.4,1.2 -.9,1.4 -2.8,.8 -1.6,.1 -3.7,-1 .1,-1.7 2,-2 1.1,-2.4 z m -4.7,1.2 v 1.1 l -1.8,2 h -1.2 v -2.2 l 1.6,-1.5 z", ME: "m 875,128.7 .6,4 3.2,2 .8,2.2 2.3,1.4 1.4,-.3 1,-3 -.8,-2.9 1.6,-.9 .5,-2.8 -.6,-1.3 3.3,-1.9 -2.2,-2.3 .9,-2.4 1.4,-2.2 .5,3.2 1.6,-2 1.3,.9 1.2,-.8 v -1.7 l 3.2,-1.3 .3,-2.9 2.5,-.2 2.7,-3.7 v -.7 l -.9,-.5 -.1,-3.3 .6,-1.1 .2,1.6 1,-.5 -.2,-3.2 -.9,.3 -.1,1.2 -1.2,-1.4 .9,-1.4 .6,.1 1.1,-.4 .5,2.8 2,-.3 2.9,.7 v -1 l -1.1,-1.2 1.3,.1 .1,-2.3 .6,.8 .3,1.9 2.1,1.5 .2,-1 .9,-.2 -.3,-.8 .8,-.6 -.1,-1.6 -1.6,-.2 -2,.7 1.4,-1.6 .7,-.8 1.3,-.2 .4,1.3 1.7,1.6 .4,-2.1 2.3,-1.2 -.9,-1.3 .1,-1.7 1.1,.5 h .7 l 1.7,-1.4 .4,-2.3 2.2,.3 .1,-.7 .2,-1.6 .5,1.4 1.5,-1 2.3,-4.1 -.1,-2.2 -1.4,-2 -3,-3.2 h -1.9 l -.8,2.2 -2.9,-3 .3,-.8 v -1.5 l -1.6,-4.5 -.8,-.2 -.7,.4 h -4.8 l -.3,-3.6 -8.1,-26 -7.3,-3.7 -2.9,-.1 -6.7,6.6 -2.7,-1 -1,-3.9 h -2.7 l -6.9,19.5 .7,6.2 -1.7,2.4 -.4,4.6 1.3,3.7 .8,.2 v 1.6 l -1.6,4.5 -1.5,1.4 -1.3,2.2 -.4,7.8 -2.4,-1 -1.5,.4 z m 34.6,-24.7 -1,.8 v 1.3 l .7,-.8 .9,.8 .4,-.5 1.1,.2 -1,-.8 .4,-.8 z m -1.7,2.6 -1,1.1 .5,.4 -.1,1 h 1.1 v -1.8 z m -3,-1.6 .9,1.3 1,.5 .3,-1 v -1.8 l -1.3,-.7 -.4,1.2 z m -1,5 -1.7,-1.7 1.6,-2.4 .8,.3 .2,1.1 1,.8 v 1.1 l -1,1 z", MD: "m 822.9,269.3 0,-1.7 h -.8 l 0,1.8 z m 11.8,-3.9 1.2,-2.2 .1,-2.5 -.6,-.6 -.7,.9 -.2,2.1 -.8,1.4 -.3,1.1 -4.6,1.6 -.7,.8 -1.3,.2 -.4,.9 -1.3,.6 -.3,-2.5 .4,-.7 -.8,-.5 .2,-1.5 -1.6,1 v -2 l 1.2,-.3 -1.9,-.4 -.7,-.8 .4,-1.3 -.8,-.6 -.7,1.6 .5,.8 -.7,.6 -1.1,.5 -2,-1 -.2,-1.2 -1,-1.1 -1.4,-1.7 1.5,-.8 -1,-.6 v -.9 l .6,-1 1.7,-.3 -1.4,-.6 -.1,-.7 -1.3,-.1 -.4,1.1 -.6,.3 .1,-3.4 1,-1 .8,.7 .1,-1.6 -1,-.9 -.9,1.1 -1,1.4 -.6,-1 .2,-2.4 .9,-1 .9,.9 1.2,-.7 -.4,-1.7 -1,1 -.9,-2.1 -.2,-1.7 1.1,-2.4 1.1,-1.4 1.4,-.2 -.5,-.8 .5,-.6 -.3,-.7 .2,-2.1 -1.5,.4 -.8,1.1 1,1.3 -2.6,3.6 -.9,-.4 -.7,.9 -.6,2.2 -1.8,.5 1.3,.6 1.3,1.3 -.2,.7 .9,1.2 -1.1,1 .5,.3 -.5,1.3 v 2.1 l -.5,1.3 .9,1.1 .7,3.4 1.3,1.4 1.6,1.4 .4,2.8 1.6,2 .4,1.4 v 1 h -.7 l -1.5,-1.2 -.4,.2 -1.2,-.2 -1.7,-1.4 -1.4,-.3 -1,.5 -1.2,-.3 -.4,.2 -1.7,-.8 -1,-1 -1,-1.3 -.6,-.2 -.8,.7 -1.6,1.3 -1.1,-.8 -.4,-2.3 .8,-2.1 -.3,-.5 .3,-.4 -.7,-1 1,-.1 1,-.9 .4,-1.8 1.7,-2.6 -2.6,-1.8 -1,1.7 -.6,-.6 h -1 l -.6,-.1 -.4,-.4 .1,-.5 -1.7,-.6 -.8,.3 -1.2,-.1 -.7,-.7 -.5,-.2 -.2,-.7 .6,-.8 v -.9 l -1.2,-.2 -1,-.9 -.9,.1 -1.6,-.3 -.9,-.4 .2,-1.6 -1,-.5 -.2,-.7 h -.7 l -.8,-1.2 .2,-1 -2.6,.4 -2.2,-1.6 -1.4,.3 -.9,1.4 h -1.3 l -1.7,2.9 -3.3,.4 -1.9,-1 -2.6,3.8 -2.2,-.3 -3.1,3.9 -.9,1.6 -1.8,1.6 -1.7,-11.4 60.5,-11.8 7.6,27.1 10.9,-2.3 0,5.3 -.1,3.1 -1,1.8 z m -13.4,-1.8 -1.3,.9 .8,1.8 1.7,.8 -.4,-1.6 z", MA: "m 899.9,174.2 h 3.4 l .9,-.6 .1,-1.3 -1.9,-1.8 .4,1 -1.5,1.5 h -2.3 l .1,.8 z m -9,1.8 -1.2,-.6 1,-.8 .6,-2.1 1.2,-1 .8,-.2 .6,.9 1.1,.2 .6,-.6 .5,1.9 -1.3,.3 -2.8,.7 z m -34.9,-23.4 18.4,-3.8 1,-1.5 .3,-1.7 1.9,-.6 .5,-1.1 1.7,-1.1 1.3,.3 1.7,3.3 1,.4 1.1,-1.3 .8,1.3 v 1.1 l -3,2.4 .2,.8 -.9,1 .4,.8 -1.3,.3 .9,1.2 -.8,.7 .6,1 .9,-.2 .3,-.8 1.1,.6 h 1.8 l 2.5,2.6 .2,2.6 1.8,.1 .8,1.1 .6,2 1,.7 h 1.9 l 1.9,-.1 .8,-.9 1.6,-1.2 1.1,-.3 -1.2,-2.1 -.3,.9 -1.5,-3.6 h -.8 l -.4,.9 -1.2,-1 1.3,-1.1 1.8,.4 2.3,2.1 1.3,2.7 1.2,3.3 -1,2.8 v -1.8 l -.7,-1 -3.5,2.3 -.9,-.3 -1.6,1 -.1,1.2 -2.2,1.2 -2,2.1 -2,1.9 h -1.2 l 3.3,-3.3 .5,-1.9 -.5,-.6 -.3,-1.3 -.9,-.1 -.1,1.3 -1,1.2 h -1.2 l -.3,1.1 .4,1.2 -1.2,1.1 -1.1,-.2 -.4,1 -1.4,-3 -1.3,-1.1 -2.6,-1.3 -.6,-2.2 h -.8 l -.7,-2.6 -6.5,2 -.1,-.3 -14.9,3.4 v .7 l -.9,.3 -.5,-.7 -10.5,2.4 -.7,-1 .5,-15 z", MI: "m 663.3,209.8 .1,1.4 21.4,-3.5 .5,-1.2 3.9,-5.9 v -4.3 l .8,-2.1 2.2,-.8 2,-7.8 1,-.5 1,.6 -.2,.6 -1.1,.8 .3,.9 .8,.4 1.9,-1.4 .4,-9.8 -1.6,-2.3 -1.2,-3.7 v -2.5 l -2.3,-4.4 v -1.8 l -1.2,-3.3 -2.3,-3 -2.9,-1 -4.8,3 -2.5,4.6 -.2,.9 -3,3.5 -1.5,-.2 -2.9,-2.8 -.1,-3.4 1.5,-1.9 2,-.2 1.2,-1.7 .2,-4 .8,-.8 1.1,-.1 .9,-1.7 -.2,-9.6 -.3,-1.3 -1.2,-1.2 -1.7,-1 -.1,-1.8 .7,-.6 1.8,.8 -.3,-1.7 -1.9,-2.7 -.7,-1.6 -1.1,-1.1 h -2.2 l -8.1,-2.9 -1.4,-1.7 -3.1,-.3 -1.2,.3 -4.4,-2.3 h -1.4 l .5,1 -2.7,-.1 .1,.6 .6,.6 -2.5,2.1 .1,1.8 1.5,2.3 1.5,.2 v .6 l -1.5,.5 -2.1,-.1 -2.8,2.5 .1,2.5 .4,5.8 -2.2,3.4 .8,-4.5 -.8,-.6 -.9,5.3 -1,-2.3 .5,-2.3 -.5,-1 .6,-1.3 -.6,-1.1 1,-1 v -1.2 l -1.3,.6 -1.3,3.1 -.7,.7 -1.3,2.4 -1.7,-.2 -.1,1.2 h -1.6 l .2,1.5 .2,2 -3,1.2 .1,1.3 1,1.7 -.1,5.2 -1.3,4.4 -1.7,2.5 1.2,1.4 .8,3.5 -1,2.5 -.2,2.1 1.7,3.4 2.5,4.9 1.2,1.9 1.6,6.9 -.1,8.8 -.9,3.9 -2,3.2 -.9,3.7 -2,3 -1.2,1 z m -95.8,-96.8 3,3.8 17,3.8 1.4,1 4,.8 .7,.5 2.8,-.2 4.9,.8 1.4,1.5 -1,1 .8,.8 3.8,.7 1.2,1.2 .1,4.4 -1.3,2.8 2,.1 1,-.8 .9,.8 -1.1,3.1 1,1.6 1.2,.3 .8,-1.8 2.9,-4.6 1.6,-6 2.3,-2 -.5,-1.6 .5,-.9 1,1.6 -.3,2.2 2.9,-2.2 .2,-2.3 2.1,.6 .8,-1.6 .7,.6 -.7,1.5 -1,.5 -1,2 1.4,1.8 1.1,-.5 -.5,-.7 1,-1.5 1.9,-1.7 h .8 l .2,-2.6 2,-1.8 7.9,-.5 1.9,-3.1 3.8,-.3 3.8,1.2 4.2,2.7 .7,-.2 -.2,-3.5 .7,-.2 4.5,1.1 1.5,-.2 2.9,-.7 1.7,.4 1.8,.1 v -1.1 l -.7,-.9 -1.5,-.2 -1.1,-.8 .5,-1.4 -.8,-.3 -2.6,.1 -.1,-1 1.1,-.8 .6,.8 .5,-1.8 -.7,-.7 .7,-.2 -1.4,-1.3 .3,-1.3 .1,-1.9 h -1.3 l -1.5,1 -1.9,.1 -.5,1.8 -1.9,.2 -.3,-1.2 -2.2,.1 -1,1.2 -.7,-.1 -.2,-.8 -2.6,.4 -.1,-4.8 1,-2 -.7,-.1 -1.8,1.1 h -2.2 l -3.8,2.7 -6.2,.3 -4.1,.8 -1.9,1.5 -1.4,1.3 -2.5,1.7 -.3,.8 -.6,-1.7 -1.3,-.6 v .6 l .7,.7 v 1.3 l -1.5,-.6 h -.6 l -.3,1.2 -2,-1.9 -1.3,-.2 -1.3,1.5 -3.2,-.1 -.5,-1.4 -2,-1.9 -1.3,-1.6 v -.7 l -1.1,-1.4 -2.6,-1.2 -3.3,-.1 -1.1,-.9 h -1.4 l -.7,.4 -2.2,2.2 -.7,1.1 -1,-.7 .2,-1 .8,-2.1 3.2,-5 .8,-.2 1.7,-1.9 .7,-1.6 3,-.6 .8,-.6 -.1,-1 -.5,-.5 -4.5,.2 -2,.5 -2.6,1.2 -1.2,1.2 -1.7,2.2 -1.8,1 -3.3,3.4 -.4,1.6 -7.4,4.6 -4,.5 -1.8,.4 -2.3,3 -1.8,.7 -4.4,2.3 z m 100.7,3.8 3.8,.1 .6,-.5 -.2,-2 -1.7,-1.8 -1.9,.1 -.1,.5 1.1,.4 -1.6,.8 -.3,1 -.6,-.6 -.4,.8 z m -75.1,-41.9 -2.3,.2 -2.7,1.9 -7.1,5.3 .8,1 1.8,.3 2.8,-2 -1.1,-.5 2.3,-1.6 h 1 l 3,-1.9 -.1,-.9 z m 41.1,62.8 v 1 l 2.1,1.6 -.2,-2.4 z m -.7,2.8 1.1,.1 v .9 h -1 z m 21.4,-21.3 v .9 l .8,-.2 v -.5 z m 4.7,3.1 -.1,-1.1 -1.6,-.2 -.6,-.4 h -.9 l -.4,.3 .9,.4 1.1,1.1 z m -18,1.2 -.1,1.1 -.3,.7 .2,2.2 .4,.3 .7,.1 .5,-.9 .1,-1.6 -.3,-.6 -.1,-1.1 z", MN: "m 464.7,68.6 -1.1,2.8 .8,1.4 -.3,5.1 -.5,1.1 2.7,9.1 1.3,2.5 .7,14 1,2.7 -.4,5.8 2.9,7.4 .3,5.8 -.1,2.1 -.1,2.2 -.9,2 -3.1,1.9 -.3,1.2 1.7,2.5 .4,1.8 2.6,.6 1.5,1.9 -.2,39.5 h 28.2 l 36.3,-.9 18.6,-.7 -1.1,-4.5 -.2,-3 -2.2,-3 -2.8,-.7 -5.2,-3.6 -.6,-3.3 -6.3,-3.1 -.2,-1.3 h -3.3 l -2.2,-2.6 -2,-1.3 .7,-5.1 -.9,-1.6 .5,-5.4 1,-1.8 -.3,-2.7 -1.2,-1.3 -1.8,-.3 v -1.7 l 2.8,-5.8 5.9,-3.9 -.4,-13 .9,.4 .6,-.5 .1,-1.1 .9,-.6 1.4,1.2 .7,-.1 v 0 l -1.2,-2.2 4.3,-3.1 3.1,-3.7 1.6,-.8 4.7,-5.9 6.3,-5.8 3.9,-2.1 6.3,-2.7 7.6,-4.5 -.6,-.4 -3.7,.7 -2.8,.1 -1,-1.6 -1.4,-.9 -9.8,1.2 -1,-2.8 -1.6,-.1 -1.7,.8 -3.7,3.1 h -4.1 l -2.1,-1 -.3,-1.7 -3.9,-.8 -.6,-1.6 -.7,-1.3 -1,.9 -2.6,.1 -9.9,-5.5 h -2.9 l -.8,-.7 -3.1,1.3 -.8,1.3 -3.3,.8 -1.3,-.2 v -1.7 l -.7,-.9 h -5.9 l -.4,-1.4 h -2.6 l -1.1,.4 -2.4,-1.7 .3,-1.4 -.6,-2.4 -.7,-1.1 -.2,-3 -1,-3.1 -2.1,-1.6 h -2.9 l .1,8 -30.9,-.4 z", MS: "m 623.8,468.6 -5,.1 -2.4,-1.5 -7.9,2.5 -.9,-.7 -.5,.2 -.1,1.6 -.6,.1 -2.6,2.7 -.7,-.1 -.6,-.7 -1.2,-1.8 .3,-1.3 -4.8,-6.8 .9,-4.6 1,-1.4 .1,-1.4 -36,2 1.7,-11.9 2.4,-4.8 6,-8.4 -1.8,-2.5 h 2 v -3.3 l -2.4,-2.5 .5,-1.7 -1.2,-1 -1.6,-7.1 .6,-1.4 1.2,-1.5 .5,-3 -1.5,-2.3 -.5,-2.2 .9,-.7 v -.8 l -1.7,-1.1 -.1,-.7 1.6,-.9 -1.2,-1.1 1.7,-7.1 3.4,-1.6 v -.8 l -1.1,-1.4 2.9,-5.4 h 1.9 l 1.5,-1.2 -.3,-5.2 3.1,-4.5 1.8,-.6 -.5,-3.1 38.3,-2.6 1.3,2 -1.3,67 4.4,33.2 z", MO: "m 555.3,248.9 -1.1,-1.1 -.6,-1.6 -1.7,-1.3 -14.3,.8 -27.2,1.2 -25.9,-.1 1.3,1.3 -.3,1.4 2.1,3.7 3.9,6.3 2.9,3 2,.6 .9,-1 1.5,2.1 -.1,1.2 -2.7,2.6 -.5,2.3 2.5,2.5 2.6,4.7 3.2,.7 .5,48.1 .2,10.8 39.1,-.7 39.8,-2 1.6,2.5 v 2.2 l -1.7,1.5 -2.8,5.1 11.2,-.8 1,-2 1.2,-.5 v -.7 l -1.2,-1.1 -.6,-1 1.7,.2 .8,-.7 -1.4,-1.5 1.4,-.5 .1,-1 -.6,-1 v -1.3 l -.7,-.7 .2,-1 h 1.1 l .7,.7 -.3,1 .8,.7 .8,-1 1,-2.7 1.4,.9 .7,-.4 1.2,-4.1 -1,-1 1,-2 .2,-.9 -1.3,-.8 h -2.8 l -1.4,-1.5 -1.8,-3.8 v -1.9 l .8,-.6 .1,-1.3 -1.7,-1.9 -.9,-2.5 -2.7,-4.1 -4.8,-1.3 -7.4,-7.1 -.4,-2.4 2.8,-7.6 -.4,-1.9 1.2,-1.1 v -1.3 l -2.8,-1.5 -3,-.7 -3.4,1.2 -1.3,-2.3 .6,-1.9 -.7,-2.4 -8.6,-8.4 -2.2,-1.5 -2.5,-5.9 -1.2,-5.4 1.4,-3.7 z", MT: "m 247,130.5 57.3,7.9 51,5.3 2,-20.7 5.2,-66.7 -53.5,-5.6 -54.3,-7.7 -65.9,-12.5 -4.8,22 3.7,7.4 -1.6,4.8 3.6,4.8 1.9,.7 3.9,8.3 v 2.1 l 2.3,3 h .9 l 1.4,2.1 h 3.2 v 1.6 l -7.1,17 -.5,4.1 1.4,.5 1.6,2.6 2.8,-1.4 3.6,-2.4 1.9,1.9 .5,2.5 -.5,3.2 2.5,9.7 2.6,3.5 2.3,1.4 .4,3 v 4.1 l 2.3,2.3 1.6,-2.3 6.9,1.6 2.1,-1.2 9,1.7 2.8,-3.3 1.8,-.6 1.2,1.8 1.6,4.1 .9,.1 z", NE: "m 402.5,191.1 38,1.6 3.4,3.2 1.7,.2 2.1,2 1.8,-.1 1.8,-2 1.5,.6 1,-.7 .7,.5 .9,-.4 .7,.4 .9,-.4 1,.5 1.4,-.6 2,.6 .6,1.1 6.1,2.2 1.2,1.3 .9,2.6 1.8,.7 1.5,-.2 .5,.9 v 2.3 l .6,1.7 v 1.4 l 1.3,3.7 2.2,4.3 .2,3.7 2.8,5 .4,6.1 1.3,.7 -.2,2.9 .8,3.3 -.7,2.2 1.8,4.4 1.3,1.3 -.3,1.4 2.1,3.7 3.9,6.3 h -32.4 l -43.7,-1.2 -36,-2 1.4,-22.1 -33.1,-2.4 3.7,-44.2 z", NV: "m 167.6,296.8 -3.4,17.5 -2.4,2.9 h -2 l -1.2,-2.7 -3.7,-1.4 -3.5,.6 -1,13.6 .5,4.9 -.5,2.9 -1.4,3 -70.4,-105 -1.1,-3.5 16.4,-63.1 47,11.2 24.4,5.4 23.3,4.7 z", NH: "m 862.6,93.6 -1.3,.1 -1,-1.1 -1.9,1.4 -.5,6.1 1.2,2.3 -1.1,3.5 2.1,2.8 -.4,1.7 .1,1.3 -1.1,2.1 -1.4,.4 -.6,1.3 -2.1,1 -.7,1.5 1.4,3.4 -.5,2.5 .5,1.5 -1,1.9 .4,1.9 -1.3,1.9 .2,2.2 -.7,1.1 .7,4.5 .7,1.5 -.5,2.6 .9,1.8 -.2,2.5 -.5,1.3 -.1,1.4 2.1,2.6 18.4,-3.8 1,-1.5 .3,-1.7 1.9,-.6 .5,-1.1 1.7,-1.1 1.3,.3 .8,-4.8 -2.3,-1.4 -.8,-2.2 -3.2,-2 -.6,-4 -11.9,-36.8 z", NJ: "m 842.5,195.4 -14.6,-4.9 -1.8,2.5 .1,2.2 -3,5.4 1.5,1.8 -.7,2 -1,1 .5,3.6 2.7,.9 1,2.8 2.1,1.1 4.2,3.2 -3.3,2.6 -1.6,2.3 -1.8,3 -1.6,.6 -1.4,1.7 -1,2.2 -.3,2.1 .8,.9 .4,2.3 1.2,.6 2.4,1.5 1.8,.8 1.6,.8 .1,1.1 .8,.1 1.1,-1.2 .8,.4 2.1,.2 -.2,2.9 .2,2.5 1.8,-.7 1.5,-3.9 1.6,-4.8 2.9,-2.8 .6,-3.5 -.6,-1.2 1.7,-2.9 v -1.2 l -.7,-1.1 1.2,-2.7 -.3,-3.6 -.6,-8.2 -1.2,-1.4 v 1.4 l .5,.6 h -1.1 l -.6,-.4 -1.3,-.2 -.9,.6 -1.2,-1.6 .7,-1.7 v -1 l 1.7,-.7 .8,-2.1 z", NM: "m 357.5,332.9 h -.8 l -7.9,99.3 -31.8,-2.6 -34.4,-3.6 -.3,3 2,2.2 -30.8,-4.1 -1.4,10.2 -15.7,-2.2 17.4,-124.1 52.6,6.5 51.7,4.8 z", NY: "m 872.9,181.6 -1.3,.1 -.5,1 z m -30.6,22.7 .7,.6 1.3,-.3 1.1,.3 .9,-1.3 h 1.9 l 2.4,-.9 5.1,-2.1 -.5,-.5 -1.9,.8 -2,.9 .2,-.8 2.6,-1.1 .8,-1 1.2,.1 4.1,-2.3 v .7 l -4.2,3 4.5,-2.8 1.7,-2.2 1.5,-.1 4.5,-3.1 3.2,-3.1 3,-2.3 1,-1.2 -1.7,-.1 -1,1.2 -.2,.7 -.9,.7 -.8,-1.1 -1.7,1 -.1,.9 -.9,-.2 .5,-.9 -1.2,-.7 -.6,.9 .9,.3 .2,.5 -.3,.5 -1.4,2.6 h -1.9 l .9,-1.8 .9,-.6 .3,-1.7 1.4,-1.6 .9,-.8 1.5,-.7 -1.2,-.2 -.7,.9 h -.7 l -1.1,.8 -.2,1 -2.2,2.1 -.4,.9 -1.4,.9 -7.7,1.9 .2,.9 -.9,.7 -2,.3 -1,-.6 -.2,1.1 -1.1,-.4 .1,1 -1.2,-.1 -1.2,.5 -.2,1.1 h -1 l .2,1 h -.7 l .2,1 -1.8,.4 -1.5,2.3 z m -.8,-.4 -1.6,.4 v 1 l -.7,1.6 .6,.7 2.4,-2.3 -.1,-.9 z m -10.1,-95.2 -.6,1.9 1.4,.9 -.4,1.5 .5,3.2 2.2,2.3 -.4,2.2 .6,2 -.4,1 -.3,3.8 3.1,6.7 -.8,1.8 .9,2.2 .9,-1.6 1.9,1.5 3,14.2 -.5,2 1.1,1 -.5,15 .7,1 2.8,16.3 1.8,1.5 -3.5,3.4 1.7,2.2 -1.3,3.3 -1.5,1.7 -1.5,2.3 -.2,-.7 .4,-5.9 -14.6,-4.9 -1.6,-1.1 -1.9,.3 -3,-2.2 -3,-5.8 h -2 l -.4,-1.5 -1.7,-1.1 -70.5,13.9 -.8,-6 4.3,-3.9 .6,-1.7 3.9,-2.5 .6,-2.4 2.3,-2 .8,-1.1 -1.7,-3.3 -1.7,-.5 -1.8,-3 -.2,-3.2 7.6,-3.9 8.2,-1.6 h 4.4 l 3.2,1.6 .9,-.1 1.8,-1.6 3.4,-.7 h 3 l 2.6,-1.3 2.5,-2.6 2.4,-3.1 1.9,-.4 1.1,-.5 .4,-3.2 -1.4,-2.7 -1.2,-.7 2,-1.3 -.1,-1.8 h -1.5 l -2.3,-1.4 -.1,-3.1 6.2,-6.1 .7,-2.4 3.7,-6.3 5.9,-6.4 2.1,-1.7 2.5,.1 20.6,-5.2 z", NC: "m 829,300.1 -29.1,6.1 -39.4,7.3 -29.4,3.5 v 5.2 l -1.5,-.1 -1.4,1.2 -2.4,5.2 -2.6,-1.1 -3.5,2.5 -.7,2.1 -1.5,1.2 -.8,-.8 -.1,-1.5 -.8,-.2 -4,3.3 -.6,3.4 -4.7,2.4 -.5,1.2 -3.2,2.6 -3.6,.5 -4.6,3 -.8,4.1 -1.3,.9 -1.5,-.1 -1.4,1.3 -.1,4.9 21.4,-3 4.4,-1.9 1.3,-.1 7.3,-4.3 23.2,-2.2 .4,.5 -.2,1.4 .7,.3 1.2,-1.5 3.3,3 .1,2.6 19.7,-2.8 24.5,17.1 4,-2.2 3,-.7 h 1.7 l 1.1,1.1 .8,-2 .6,-5 1.7,-3.9 5.4,-6.1 4.1,-3.5 5.4,-2.3 2.5,-.4 1.3,.4 .7,1.1 3.3,-6.6 3.3,-5.3 -.7,-.3 -4.4,6.8 -.5,-.8 2,-2.2 -.4,-1.5 -2,-.5 1,1.3 -1.2,.1 -1.2,-1.8 -1.2,2 -1.6,.2 1,-2.7 .7,-1.7 -.2,-2.9 -2.2,-.1 .9,-.9 1.1,.3 2.7,.1 .8,-.5 h 2.3 l 2,-1.9 .2,-3.2 1.3,-1.4 1.2,-.2 1.3,-1 -.5,-3.7 -2.2,-3.8 -2.7,-.2 -.9,1.6 -.5,-1 -2.7,.2 -1.2,.4 -1.9,1.2 -.3,-.4 h -.9 l -1.8,1.2 -2.6,.5 v -1.3 l .8,-1 1,.7 h 1 l 1.7,-2.1 3.7,-1.7 2,-2.2 h 2.4 l .8,1.3 1.7,.8 -.5,-1.5 -.3,-1.6 -2.8,-3.1 -.3,-1.4 -.4,1 -.9,-1.3 z m 7,31 2.7,-2.5 4.6,-3.3 v -3.7 l -.4,-3.1 -1.7,-4.2 1.5,1.4 1,3.2 .4,7.6 -1.7,.4 -3.1,2.4 -3.2,3.2 z m 1.9,-19.3 -.9,-.2 v 1 l 2.5,2.2 -.2,-1.4 z m 2.9,2.1 -1.4,-2.8 -2.2,-3.4 -2.4,-3 -2.2,-4.3 -.8,-.7 2.2,4.3 .3,1.3 3.4,5.5 1.8,2.1 z", ND: "m 464.7,68.6 -1.1,2.8 .8,1.4 -.3,5.1 -.5,1.1 2.7,9.1 1.3,2.5 .7,14 1,2.7 -.4,5.8 2.9,7.4 .3,5.8 -.1,2.1 -29.5,-.4 -46,-2.1 -39.2,-2.9 5.2,-66.7 44.5,3.4 55.3,1.6 z", OH: "m 685.7,208.8 1.9,-.4 3,1.3 2.1,.6 .7,.9 h 1 l 1,-1.5 1.3,.8 h 1.5 l -.1,1 -3.1,.5 -2,1.1 1.9,.8 1.6,-1.5 2.4,-.4 2.2,1.5 1.5,-.1 2.5,-1.7 3.6,-2.1 5.2,-.3 4.9,-5.9 3.8,-3.1 9.3,-5.1 4.9,29.9 -2.2,1.2 1.4,2.1 -.1,2.2 .6,2 -1.1,3.4 -.1,5.4 -1,3.6 .5,1.1 -.4,2.2 -1.1,.5 -2,3.3 -1.8,2 h -.6 l -1.8,1.7 -1.3,-1.2 -1.5,1.8 -.3,1.2 h -1.3 l -1.3,2.2 .1,2.1 -1,.5 1.4,1.1 v 1.9 l -1,.2 -.7,.8 -1,.5 -.6,-2.1 -1.6,-.5 -1,2.3 -.3,2.2 -1.1,1.3 1.3,3.6 -1.5,.8 -.4,3.5 h -1.5 l -3.2,1.4 -1.2,-2.1 -3.5,-1.4 -.8,-2.9 -.5,-.8 -3.4,1.8 -.6,1.7 h -.9 l -1.3,.7 -1.2,-.8 -3,-.8 -1.9,.8 v 1 l -2.2,-.2 -1.9,-2.1 -2.3,.2 -4.1,-.7 v -1 l -2.2,-3.4 -2.9,-1.2 -1.9,.8 -2.2,-.1 -1.3,-.5 -6.6,-57.2 21.4,-3.5 z", OK: "m 501.5,398.6 -4.6,-3.8 -2.2,-.9 -.5,1.6 -5.1,.3 -.6,-1.5 -5,2.5 -1.6,-.7 -3.7,.3 -.6,1.7 -3.6,.9 -1.3,-1.2 -1.2,.1 -2,-1.8 -2.1,.7 -2,-.5 -1.8,-2 -2.5,4.2 -1.2,.8 -1,-1.8 .3,-2 -1.2,-.7 -2.3,2.5 -1.7,-1.2 -.1,-1.5 -1.3,.5 -2.6,-1.7 -3,2.6 -2.3,-1.1 .7,-2.1 -2.3,.1 -1.9,-3 -3.5,-1.1 -2,2.3 -2.3,-2.2 -1.4,.4 -2,.1 -3.5,-1.9 -2.3,.1 -1.2,-.7 -.5,-2.9 -2.3,-1.7 -1.1,1.5 -1.4,-1 -1.2,-.4 -1.1,1 -1.5,-.3 -2.5,-3 -2.7,-1.3 1.4,-42.7 -52.6,-3.2 .6,-10.6 16.5,1 67.7,2.9 62,.1 .2,10.8 4.1,24.4 -.7,39 z", OR: "m 93.9,166.5 47,11.2 8.5,-37.3 2.9,-5.8 .4,-2.1 .8,-.9 -.9,-2 -2.9,-1.2 .2,-4.2 4,-5.8 2.5,-.8 1.6,-2.3 -.1,-1.6 1.8,-1.6 3.2,-5.5 4.2,-4.8 -.5,-3.2 -3.5,-3.1 -1.6,-3.6 -30.3,-7.3 -2.8,1 -5.4,-.9 -1.8,-.9 -1.5,1.2 -3.3,-.4 -4.5,.5 -.9,.7 -4.2,-.4 -.8,-1.6 -1.2,-.2 -4.4,1.3 -1.6,-1.1 -2.2,.8 -.2,-1.8 -2.3,-1.2 -1.5,-.2 -1,-1.1 -3,.3 -1.2,-.8 h -1.2 l -1.2,.9 -5.5,.7 -6.6,-4.2 1.1,-5.6 -.4,-4.1 -3.2,-3.7 -3.7,.1 -.4,-1.1 .4,-1.2 -.7,-.8 -1,.1 -1.1,1.3 -1.5,-.2 -.5,-1.1 -1,-.1 -.7,.6 -2,-1.9 v 4.3 l -1.3,1.3 -1.1,3.5 -.1,2.3 -4.5,12.3 -13.2,31.3 -3.2,4.6 -1.6,-.1 .1,2.1 -5.2,7.1 -.3,3.3 1,1.3 .1,2.4 -1.2,1.1 -1.2,3 .1,5.7 1.2,2.9 z", PA: "m 826.3,189.4 -1.9,.3 -3,-2.2 -3,-5.8 h -2 l -.4,-1.5 -1.7,-1.1 -70.5,13.9 -.8,-6 -4.2,3.4 -.9,.1 -2.7,3 -3.3,1.7 4.9,29.9 3.2,19.7 17.4,-2.9 60.5,-11.8 1.2,-2.1 1.5,-1.1 1.6,-.3 1.6,.6 1.4,-1.7 1.6,-.6 1.8,-3 1.6,-2.3 3.3,-2.6 -4.2,-3.2 -2.1,-1.1 -1,-2.8 -2.7,-.9 -.5,-3.6 1,-1 .7,-2 -1.5,-1.8 3,-5.4 -.1,-2.2 1.8,-2.5 z", RI: "m 883.2,170.7 -1.3,-1.1 -2.6,-1.3 -.6,-2.2 h -.8 l -.7,-2.6 -6.5,2 3.2,12.3 -.4,1.1 .4,1.8 5.6,-3.6 .1,-3 -.8,-.8 .4,-.6 -.1,-1.3 -.9,-.7 1.2,-.4 -.9,-1.6 1.8,.7 .3,1.4 .7,1.2 -1.4,-.8 1.1,1.7 -.3,1.2 -.6,-1.1 v 2.5 l .6,-.9 .4,.9 1.3,-1.5 -.2,-2.5 1.4,3.1 1,-.9 z m -4.7,12.2 h .9 l .5,-.6 -.8,-1.3 -.7,.7 z", SC: "m 772.3,350.2 -19.7,2.8 -.1,-2.6 -3.3,-3 -1.2,1.5 -.7,-.3 .2,-1.4 -.4,-.5 -23.2,2.2 -7.3,4.3 -1.3,.1 -4.4,1.9 -.1,1.9 -1.9,1 -1.4,3.2 .2,1.3 6.1,3.8 2.6,-.3 3.1,4 .4,1.7 4.2,5.1 2.6,1.7 1.4,.2 2.2,1.6 1.1,2.2 2,1.6 1.8,.5 2.7,2.7 .1,1.4 2.6,2.8 5,2.3 3.6,6.7 .3,2.7 3.9,2.1 2.5,4.8 .8,3.1 4.2,.4 .8,-1.5 h .6 l 1.8,-1.5 .5,-2 3.2,-2.1 .3,-2.4 -1.2,-.9 .8,-.7 .8,.4 1.3,-.4 1.8,-2.1 3.8,-1.8 1.6,-2.4 .1,-.7 4.8,-4.4 -.1,-.5 -.9,-.8 1.1,-1.5 h .8 l .4,.5 .7,-.8 h 1.3 l .6,-1.5 2.3,-2.1 -.3,-5.4 .8,-2.3 3.6,-6.2 2.4,-2.2 2.2,-1.1 z", SD: "m 396.5,125.9 46,2.1 29.5,.4 -.1,2.2 -.9,2 -3.1,1.9 -.3,1.2 1.7,2.5 .4,1.8 2.6,.6 1.5,1.9 -.2,39.5 -2.2,-.1 -.1,1.6 1.3,1.5 -.1,1.1 -1,.5 .4,1.6 1.3,.4 .7,2 -1.7,5.1 -1,4.3 1.3,1.2 .3,1.3 .7,1.7 -1.5,.2 -1.8,-.7 -.9,-2.6 -1.2,-1.3 -6.1,-2.2 -.6,-1.1 -2,-.6 -1.4,.6 -1,-.5 -.9,.4 -.7,-.4 -.9,.4 -.7,-.5 -1,.7 -1.5,-.6 -1.8,2 -1.8,.1 -2.1,-2 -1.7,-.2 -3.4,-3.2 -38,-1.6 -51.1,-3.5 3.9,-43.9 2,-20.7 z", TN: "m 620.9,365.1 45.7,-4 22.9,-2.9 .1,-4.9 1.4,-1.3 1.5,.1 1.3,-.9 .8,-4.1 4.6,-3 3.6,-.5 3.2,-2.6 .5,-1.2 4.7,-2.4 .6,-3.4 4,-3.3 .8,.2 .1,1.5 .8,.8 1.5,-1.2 .7,-2.1 3.5,-2.5 2.6,1.1 2.4,-5.2 1.4,-1.2 1.5,.1 0,-5.2 .3,-.7 -4.6,.5 -.2,1 -28.9,3.3 -5.6,1.4 -20.5,1.4 -5.2,.8 -17.4,1 -2.6,.8 -22.6,2 -.7,-.6 h -3.7 l 1.2,3.2 -.6,.9 -23.3,1.5 -.8,1 -.8,-.7 h -1 v 1.3 l .6,1 -.1,1 -1.4,.5 1.4,1.5 -.8,.7 -1.7,-.2 .6,1 1.2,1.1 v .7 l -1.2,.5 -1,2 .1,.6 1.4,1 -.4,.7 h -1.5 v .5 l .9,.9 .1,.8 -1.4,.2 -.5,.8 -1.6,.2 -.9,.9 .6,.9 1.1,-.1 .5,.9 -1.6,1.3 .4,1.5 -2,-.6 -.1,.7 .4,1.1 -.3,1.4 -1.3,-.8 -.8,.8 1.1,.1 .1,1.5 -.6,1 1.1,.9 -.3,1.5 .8,.7 -.7,1 -1.2,-.5 -.9,2.2 -1.6,.7 z", TX: "m 282.3,429 .3,-3 34.4,3.6 31.8,2.6 7.9,-99.3 .8,0 52.6,3.2 -1.4,42.7 2.7,1.3 2.5,3 1.5,.3 1.1,-1 1.2,.4 1.4,1 1.1,-1.5 2.3,1.7 .5,2.9 1.2,.7 2.3,-.1 3.5,1.9 2,-.1 1.4,-.4 2.3,2.2 2,-2.3 3.5,1.1 1.9,3 2.3,-.1 -.7,2.1 2.3,1.1 3,-2.6 2.6,1.7 1.3,-.5 .1,1.5 1.7,1.2 2.3,-2.5 1.2,.7 -.3,2 1,1.8 1.2,-.8 2.5,-4.2 1.8,2 2,.5 2.1,-.7 2,1.8 1.2,-.1 1.3,1.2 3.6,-.9 .6,-1.7 3.7,-.3 1.6,.7 5,-2.5 .6,1.5 5.1,-.3 .5,-1.6 2.2,.9 4.6,3.8 6.4,1.9 2.6,2.3 2.8,-1.3 3.2,.8 .2,11.9 .5,19.9 .7,3.4 2.6,2.8 .7,5.4 3.8,4.6 .8,4.3 h 1 l -.1,7.3 -3.3,6.4 1.3,2.3 -1.3,1.5 .7,3 -.1,4.3 -2.2,3.5 -.1,.8 -1.7,1.2 1,1.8 1.2,1.1 -3.5,.3 -8.4,3.9 -3.5,1.4 -1.8,1.8 -.7,-.5 2.1,-2.3 1.8,-.7 .5,-.9 -2.9,-.1 -.7,-.8 .8,-2 -.9,-1.8 h -.6 l -2.4,1.3 -1.9,2.6 .3,1.7 3.3,3.4 1.3,.3 v .8 l -2.3,1.6 -4.9,4 -4,3.9 -3.2,1.4 -5,3 -3.7,2 -4.5,1.9 -4.1,2.5 3.2,-3 v -1.1 l .6,-.8 -.2,-1.8 -1.5,-.1 -1.1,1.5 -2.6,1.3 -1.8,-1.2 -.3,-1.7 h -1.5 l .8,2.2 1.4,.7 1.2,.9 1.8,1.6 -.7,.8 -3.9,1.7 -1.7,.1 -1.2,-1.2 -.5,2.1 .5,1.1 -2.7,2 -1.5,.2 -.8,.7 -.4,1.7 -1.8,3.3 -1.6,.7 -1.6,-.6 -1.8,1.1 .3,1.4 1.3,.8 1,.8 -1.8,3.5 -.3,2.8 -1,1.7 -1.4,1 -2.9,.4 1.8,.6 1.9,-.6 -.4,3.2 -1.1,-.1 .2,1.2 .3,1.4 -1.3,.9 v 3.1 l 1.6,1.4 .6,3.1 -.4,2.2 -1,.4 .4,1.5 1.1,.4 .8,1.7 v 2.6 l 1.1,2.1 2.2,2.6 -.1,.7 -2.2,-.2 -1.6,1.4 .2,1.4 -.9,-.3 -1.4,-.2 -3.4,-3.7 -2.3,-.6 h -7.1 l -2.8,-.8 -3.6,-3 -1.7,-1 -2.1,.1 -3.2,-2.6 -5.4,-1.6 v -1.3 l -1.4,-1.8 -.9,-4.7 -1.1,-1.7 -1.7,-1.4 v -1.6 l -1.4,-.6 .6,-2.6 -.3,-2.2 -1.3,-1.4 .7,-3 -.8,-3.2 -1.7,-1.4 h -1.1 l -4,-3.5 .1,-1.9 -.8,-1.7 -.8,-.2 -.9,-2.4 -2,-1.6 -2.9,-2.5 -.2,-2.1 -1,-.7 .2,-1.6 .5,-.7 -1.4,-1.5 .1,-.7 -2,-2.2 .1,-2.1 -2.7,-4.9 -.1,-1.7 -1.8,-3.1 -5.1,-4.8 v -1.1 l -3.3,-1.7 -.1,-1.8 -1.2,-.4 v -.7 l -.8,-.2 -2.1,-2.8 h -.8 l -.7,-.6 -1.3,1.1 h -2.2 l -2.6,-1.1 h -4.6 l -4.2,-2.1 -1.3,1.9 -2.2,-.6 -3.3,1.2 -1.7,2.8 -2,3.2 -1.1,4.4 -1.4,1.2 -1.1,.1 -.9,1.6 -1.3,.6 -.1,1.8 -2.9,.1 -1.8,-1.5 h -1 l -2,-2.9 -3.6,-.5 -1.7,-2.3 -1.3,-.2 -2.1,-.8 -3.4,-3.4 .2,-.8 -1.6,-1.2 -1,-.1 -3.4,-3.1 -.1,-2 -2.3,-4 .2,-1.6 -.7,-1.3 .8,-1.5 -.1,-2.4 -2.6,-4.1 -.6,-4.2 -1.6,-1.6 v -1 l -1.2,-.2 -.7,-1.1 -2.4,-1.7 -.9,-.1 -1.9,-1.6 v -1.1 l -2.9,-1.8 -.6,-2.1 -2.6,-2.3 -3.2,-4.4 -3,-1.3 -2.1,-1.8 .2,-1.2 -1.3,-1.4 -1.7,-3.7 -2.4,-1 z m 174.9,138.3 .8,.1 -.6,-4.8 -3.5,-12.3 -.2,-8.1 4.9,-10.5 6.1,-8.2 7.2,-5.1 v -.7 h -.8 l -2.6,1 -3.6,2.3 -.7,1.5 -8.2,11.6 -2.8,7.9 v 8.8 l 3.6,12 z", UT: "m 233.2,217.9 3.3,-21.9 -47.9,-8.2 -21,109 46.2,8.2 40,6 11.5,-88.3 z", VT: "m 859.1,102.4 -1.1,3.5 2.1,2.8 -.4,1.7 .1,1.3 -1.1,2.1 -1.4,.4 -.6,1.3 -2.1,1 -.7,1.5 1.4,3.4 -.5,2.5 .5,1.5 -1,1.9 .4,1.9 -1.3,1.9 .2,2.2 -.7,1.1 .7,4.5 .7,1.5 -.5,2.6 .9,1.8 -.2,2.5 -.5,1.3 -.1,1.4 2.1,2.6 -12.4,2.7 -1.1,-1 .5,-2 -3,-14.2 -1.9,-1.5 -.9,1.6 -.9,-2.2 .8,-1.8 -3.1,-6.7 .3,-3.8 .4,-1 -.6,-2 .4,-2.2 -2.2,-2.3 -.5,-3.2 .4,-1.5 -1.4,-.9 .6,-1.9 -.8,-1.7 27.3,-6.9 z", VA: "m 834.7,265.4 -1.1,2.8 .5,1.1 .4,-1.1 .8,-3.1 z m -34.6,-7 -.7,-1 1,-.1 1,-.9 .4,-1.8 -.2,-.5 .1,-.5 -.3,-.7 -.6,-.5 -.4,-.1 -.5,-.4 -.6,-.6 h -1 l -.6,-.1 -.4,-.4 .1,-.5 -1.7,-.6 -.8,.3 -1.2,-.1 -.7,-.7 -.5,-.2 -.2,-.7 .6,-.8 v -.9 l -1.2,-.2 -1,-.9 -.9,.1 -1.6,-.3 -.4,.7 -.4,1.6 -.5,2.3 -10,-5.2 -.2,.9 .9,1.6 -.8,2.3 .1,2.9 -1.2,.8 -.5,2.1 -.9,.8 -1.4,1.8 -.9,.8 -1,2.5 -2.4,-1.1 -2.3,8.5 -1.3,1.6 -2.8,-.5 -1.3,-1.9 -2.3,-.7 -.1,4.7 -1.4,1.7 .4,1.5 -2.1,2.2 .4,1.9 -3.7,6.3 -1,3.3 1.5,1.2 -1.5,1.9 .1,1.4 -2.3,2 -.7,-1.1 -4.3,3.1 -1.5,-1 -.6,1.4 .8,.5 -.5,.9 -5.5,2.4 -3,-1.8 -.8,1.7 -1.9,1.8 -2.3,.1 -4.4,-2.3 -.1,-1.5 -1.5,-.7 .8,-1.2 -.7,-.6 -4.9,6.6 -2.9,1 -3,3 -.4,2.2 -2.1,1.3 -.1,1.7 -1.4,1.4 -1.8,.5 -.5,1.9 -1,.4 -6.9,4.2 28.9,-3.3 .2,-1 4.6,-.5 -.3,.7 29.4,-3.5 39.4,-7.3 29.1,-6.1 -.6,-1.2 .4,-.1 .9,.9 -.1,-1.4 -.3,-1.9 1.6,1.2 .9,2.1 v -1.3 l -3.4,-5.5 v -1.2 l -.7,-.8 -1.3,.7 .5,1.4 h -.8 l -.4,-1 -.6,.9 -.9,-1.1 -2.1,-.1 -.2,.7 1.5,2.1 -1.4,-.7 -.5,-1 -.4,.8 -.8,.1 -1.5,1.7 .3,-1.6 v -1.4 l -1.5,-.7 -1.8,-.5 -.2,-1.7 -.6,-1.3 -.6,1.1 -1.7,-1 -2,.3 .2,-.9 1.5,-.2 .9,.5 1.7,-.8 .9,.4 .5,1 v .7 l 1.9,.4 .3,.9 .9,.4 .9,1.2 1.4,-1.6 h .6 l -.1,-2.1 -1.3,1 -.6,-.9 1.5,-.2 -1.2,-.9 -1.2,.6 -.1,-1.7 -1.7,.2 -2.2,-1.1 -1.8,-2.2 3.6,2.2 .9,.3 1.7,-.8 -1.7,-.9 .6,-.6 -1,-.5 .8,-.2 -.3,-.9 1.1,.9 .4,-.8 .4,1.3 1.2,.8 .6,-.5 -.5,-.6 -.1,-2.5 -1.1,-.1 -1.6,-.8 .9,-1.1 -2,-.1 -.4,-.5 -1.4,.6 -1.4,-.8 -.5,-1.2 -2.1,-1.2 -2.1,-1.8 -2.2,-1.9 3,1.3 .9,1.2 2.1,.7 2.3,2.5 .2,-1.7 .6,1.3 2.3,.5 v -4 l -.8,-1.1 1.1,.4 .1,-1.6 -3.1,-1.4 -1.6,-.2 -1.3,-.2 .3,-1.2 -1.5,-.3 -.1,-.6 h -1.8 l -.2,.8 -.7,-1 h -2.7 l -1,-.4 -.2,-1 -1.2,-.6 -.4,-1.5 -.6,-.4 -.7,1.1 -.9,.2 -.9,.7 h -1.5 l -.9,-1.3 .4,-3.1 .5,-2.4 .6,.5 z m 21.9,11.6 .9,-.1 0,-.6 -.8,.1 z m 7.5,14.2 -1,2.7 1.2,-1.3 z m -1.8,-15.3 .7,.3 -.2,1.9 -.5,-.5 -1.3,1 1,.4 -1.8,4.4 .1,8.1 1.9,3.1 .5,-1.5 .4,-2.7 -.3,-2.3 .7,-.9 -.2,-1.4 1.2,-.6 -.6,-.5 .5,-.7 .8,1.1 -.2,1.1 -.4,3.9 1.1,-2.2 .4,-3.1 .1,-3 -.3,-2 .6,-2.3 1.1,-1.8 .1,-2.2 .3,-.9 -4.6,1.6 -.7,.8 z", WA: "m 161.9,83.6 .7,4 -1.1,4.3 -30.3,-7.3 -2.8,1 -5.4,-.9 -1.8,-.9 -1.5,1.2 -3.3,-.4 -4.5,.5 -.9,.7 -4.2,-.4 -.8,-1.6 -1.2,-.2 -4.4,1.3 -1.6,-1.1 -2.2,.8 -.2,-1.8 -2.3,-1.2 -1.5,-.2 -1,-1.1 -3,.3 -1.2,-.8 h -1.2 l -1.2,.9 -5.5,.7 -6.6,-4.2 1.1,-5.6 -.4,-4.1 -3.2,-3.7 -3.7,.1 -.4,-1.1 .4,-1.2 -.7,-.8 -1,.1 -2.1,-1.5 -1.2,.4 -2,-.1 -.7,-1.5 -1.6,-.3 2.5,-7.5 -.7,6 .5,.5 v -2 l .8,-.2 1.1,2.3 -.5,-2.2 1.2,-4.2 1.8,.4 -1.1,-2 -1,.3 -1.5,-.4 .2,-4.2 .2,1.5 .9,.5 .6,-1.6 h 3.2 l -2.2,-1.2 -1.7,-1.9 -1.4,1.6 1.2,-3.1 -.3,-4.6 -.2,-3.6 .9,-6.1 -.5,-2 -1.4,-2.1 .1,-4 .4,-2.7 2,-2.3 -.7,-1.4 .2,-.6 .9,.1 7.8,7.6 4.7,1.9 5.1,2.5 3.2,-.1 .2,3 1,-1.6 h .7 l .6,2.7 .5,-2.6 1.4,-.2 .5,.7 -1.1,.6 .1,1.6 .7,-1.5 h 1.1 l -.4,2.6 -1.1,-.8 .4,1.4 -.1,1.5 -.8,.7 -2.5,2.9 1.2,-3.4 -1.6,.4 -.4,2.1 -3.8,2.8 -.4,1 -2.1,2.2 -.1,1 h 2.2 l 2.4,-.2 .5,-.9 -3.9,.5 v -.6 l 2.6,-2.8 1.8,-.8 1.9,-.2 1,-1.6 3,-2.3 v -1.4 h 1.1 l .1,4 h -1.5 l -.6,.8 -1.1,-.9 .3,1.1 v 1.7 l -.7,.7 -.3,-1.6 -.8,.8 .7,.6 -.9,1.1 h 1.3 l .7,-.5 .1,2 -1,1.9 -.9,1 -.1,1.8 -1,-.2 -.2,-1.4 .9,-1.1 -.8,-.5 -.8,.7 -.7,2.2 -.8,.9 -.1,-2 .8,-1.1 -.2,-1.1 -1.2,1.2 .1,2.2 -.6,.4 -2.1,-.4 -1.3,1.2 2.2,-.6 -.2,2.2 1,-1.8 .4,1.4 .5,-1 .7,1.8 h .7 l .7,-.8 .6,-.1 2,-1.9 .2,-1.2 .8,.6 .3,.9 .7,-.3 .1,-1.2 h 1.3 l .2,-2.9 -.1,-2.7 .9,.3 -.7,-2.1 1.4,-.8 .2,-2.4 2.3,-2.2 1,.1 .3,-1.4 -1.2,-1.4 -.1,-3.5 -.8,.9 .7,2.9 -.6,.1 -.6,-1.9 -.6,-.5 .3,-2.3 1.8,-.1 .3,.7 .3,-1.6 -1.6,-1.7 -.6,-1.6 -.2,2 .9,1.1 -.7,.4 -1,-.8 -1.8,1.3 1.5,.5 .2,2.4 -.3,1.8 .9,-1.3 1.4,2.3 -.4,1.9 h -1.5 v -1.2 l -1.5,-1.2 .5,-3 -1.9,-2.6 2.7,-3 .6,-4.1 h .9 l 1.4,3.2 v -2.6 l 1.2,.3 v -3.3 l -.9,-.8 -1.2,2.5 -1,-3 1.3,-.1 -1.5,-4.9 1.9,-.6 25.4,7.5 31.7,8 23.6,5.5 z m -78.7,-39.4 h .5 l .1,.8 -.5,.3 .1,.6 -.7,.4 -.2,-.9 .5,-.4 z m 5,-4.3 -1.2,1.9 -.1,.8 .4,.2 .5,-.6 1.1,.1 z m -.4,-21.6 .5,.6 1.3,-.3 .2,-1 1.2,-1.8 -1,-.4 -.7,1.6 -.1,-1.6 -1.1,.2 -.7,1.4 z m 3.2,-5.5 .7,1.5 -.9,.2 -.8,.4 -.2,-2.4 z m -2.7,-1.6 -1.1,-.2 .5,1.4 z m -1,2.5 .8,.4 -.4,1.1 1.7,-.5 -.2,-2.2 -.9,-.2 z m -2.7,-.4 .3,2.7 1.6,1.3 .6,-1.9 -1.1,-2.2 z m 1.9,-1.1 -1.1,-1 -.9,.1 1.8,1.5 z m 3.2,-7 h -1.2 v .8 l 1.2,.6 z m -.9,32.5 .4,-2.7 h -1.1 l -.2,1.9 z", WV: "m 723.4,297.5 -.8,1.2 1.5,.7 .1,1.5 4.4,2.3 2.3,-.1 1.9,-1.8 .8,-1.7 3,1.8 5.5,-2.4 .5,-.9 -.8,-.5 .6,-1.4 1.5,1 4.3,-3.1 .7,1.1 2.3,-2 -.1,-1.4 1.5,-1.9 -1.5,-1.2 1,-3.3 3.7,-6.3 -.4,-1.9 2.1,-2.2 -.4,-1.5 1.4,-1.7 .1,-4.7 2.3,.7 1.3,1.9 2.8,.5 1.3,-1.6 2.3,-8.5 2.4,1.1 1,-2.5 .9,-.8 1.4,-1.8 .9,-.8 .5,-2.1 1.2,-.8 -.1,-2.9 .8,-2.3 -.9,-1.6 .2,-.9 10,5.2 .5,-2.3 .4,-1.6 .4,-.7 -.9,-.4 .2,-1.6 -1,-.5 -.2,-.7 h -.7 l -.8,-1.2 .2,-1 -2.6,.4 -2.2,-1.6 -1.4,.3 -.9,1.4 h -1.3 l -1.7,2.9 -3.3,.4 -1.9,-1 -2.6,3.8 -2.2,-.3 -3.1,3.9 -.9,1.6 -1.8,1.6 -1.7,-11.4 -17.4,2.9 -3.2,-19.7 -2.2,1.2 1.4,2.1 -.1,2.2 .6,2 -1.1,3.4 -.1,5.4 -1,3.6 .5,1.1 -.4,2.2 -1.1,.5 -2,3.3 -1.8,2 h -.6 l -1.8,1.7 -1.3,-1.2 -1.5,1.8 -.3,1.2 h -1.3 l -1.3,2.2 .1,2.1 -1,.5 1.4,1.1 v 1.9 l -1,.2 -.7,.8 -1,.5 -.6,-2.1 -1.6,-.5 -1,2.3 -.3,2.2 -1.1,1.3 1.3,3.6 -1.5,.8 -.4,3.5 h -1.5 l -3.2,1.4 -.1,1.1 .6,1 -.6,3.6 1.9,1.6 .8,1.1 1,.6 -.1,.9 4.4,5.6 h 1.4 l 1.5,1.8 1.2,.3 1.4,-.1 z", WI: "m 611,144 -2.9,.8 .2,2.3 -2.4,3.4 -.2,3.1 .6,.7 .8,-.7 .5,-1.6 2,-1.1 1.6,-4.2 3.5,-1.1 .8,-3.3 .7,-.9 .4,-2.1 1.8,-1.1 v -1.5 l 1,-.9 1.4,.1 v 2 l -1,.1 .5,1.2 -.7,2.2 -.6,.1 -1.2,4.5 -.7,.5 -2.8,7.2 -.3,4.2 .6,2 .1,1.3 -2.4,1.9 .3,1.9 -.9,3.1 .3,1.6 .4,3.7 -1.1,4.1 -1.5,5 1,1.5 -.3,.3 .8,1.7 -.5,1.1 1.1,.9 v 2.7 l 1.3,1.5 -.4,3 .3,4 -45.9,2.8 -1.3,-2.8 -3.3,-.7 -2.7,-1.5 -2,-5.5 .1,-2.5 1.6,-3.3 -.6,-1.1 -2.1,-1.6 -.2,-2.6 -1.1,-4.5 -.2,-3 -2.2,-3 -2.8,-.7 -5.2,-3.6 -.6,-3.3 -6.3,-3.1 -.2,-1.3 h -3.3 l -2.2,-2.6 -2,-1.3 .7,-5.1 -.9,-1.6 .5,-5.4 1,-1.8 -.3,-2.7 -1.2,-1.3 -1.8,-.3 v -1.7 l 2.8,-5.8 5.9,-3.9 -.4,-13 .9,.4 .6,-.5 .1,-1.1 .9,-.6 1.4,1.2 .7,-.1 h 2.6 l 6.8,-2.6 .3,-1 h 1.2 l .7,-1.2 .4,.8 1.8,-.9 1.8,-1.7 .3,.5 1,-1 2.2,1.6 -.8,1.6 -1.2,1.4 .5,1.5 -1.4,1.6 .4,.9 2.3,-1.1 v -1.4 l 3.3,1.9 1.9,.7 1.9,.7 3,3.8 17,3.8 1.4,1 4,.8 .7,.5 2.8,-.2 4.9,.8 1.4,1.5 -1,1 .8,.8 3.8,.7 1.2,1.2 .1,4.4 -1.3,2.8 2,.1 1,-.8 .9,.8 -1.1,3.1 1,1.6 1.2,.3 z m -49.5,-37.3 -.5,.1 -1.5,1.6 .2,.5 1.5,-.6 v -.6 l .9,-.3 z m 1.6,-1.1 -1,.3 -.2,.7 .9,-.1 z m -1.3,-1.6 -.2,.9 h 1.7 l .6,-.4 .1,-1 z m 2.8,-3 -.3,1.9 1.2,-.5 .1,-1.4 z m 58.3,31.9 -2,.3 -.4,1.3 1.3,1.7 z", WY: "m 355.3,143.7 -51,-5.3 -57.3,-7.9 -2,10.7 -8.5,54.8 -3.3,21.9 32.1,4.8 44.9,5.7 37.5,3.4 3.7,-44.2 z", DC: "m 803.5,252 -2.6,-1.8 -1,1.7 .5,.4 .4,.1 .6,.5 .3,.7 -.1,.5 .2,.5 z" } };

// src/render/choropleth.ts
var PIN_SVG = "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z";
var STATE_NAMES = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
};
function lerp2(a, b, t) {
  return a + (b - a) * t;
}
function heatColor(t) {
  t = Math.max(0, Math.min(1, t));
  const cs = [[200, 224, 245], [70, 177, 239], [0, 112, 240], [3, 40, 100]];
  const seg = t * (cs.length - 1);
  const i = Math.min(Math.floor(seg), cs.length - 2);
  const f = seg - i;
  const c = cs[i];
  const d = cs[i + 1];
  return "rgb(" + Math.round(lerp2(c[0], d[0], f)) + "," + Math.round(lerp2(c[1], d[1], f)) + "," + Math.round(lerp2(c[2], d[2], f)) + ")";
}
var EMPTY_FILL = "#E7EEF5";
var paths = us_states_default.paths;
var viewBoxValue = us_states_default.vb;
function choroplethModel(data, _opts) {
  const agg = {};
  (Array.isArray(data) ? data : []).forEach((d) => {
    const ab = d.state;
    if (!ab) return;
    agg[ab] = (agg[ab] || 0) + (Number(d.count) || 0);
  });
  const byState = Object.keys(agg).map((ab) => ({ state: ab, name: STATE_NAMES[ab] || ab, count: agg[ab] })).sort((a, b) => b.count - a.count);
  const maxCount = byState.length ? byState[0].count : 1;
  const dataMap = {};
  byState.forEach((s) => {
    dataMap[s.state] = { name: s.name, count: s.count };
  });
  const shapes = Object.keys(paths).map((ab) => {
    const ds = dataMap[ab];
    if (ds) {
      return {
        state: ab,
        name: ds.name,
        d: paths[ab],
        count: ds.count,
        fill: heatColor(ds.count / (maxCount || 1))
      };
    }
    return {
      state: ab,
      name: STATE_NAMES[ab] || ab,
      d: paths[ab],
      count: 0,
      fill: EMPTY_FILL
    };
  });
  return { viewBox: viewBoxValue, byState, shapes };
}
function renderChoropleth(model) {
  const pathEls = model.shapes.map(
    (s) => `<path class="${s.count > 0 ? "cz" : "cz-bg"}" data-ab="${escapeHtml(s.state)}" d="${s.d}" fill="${s.fill}" stroke="#fff" stroke-width="0.7"><title>${escapeHtml(s.name)}${s.count > 0 ? ": " + escapeHtml(s.count) : ""}</title></path>`
  ).join("");
  const svg = `<svg viewBox="${model.viewBox}" role="img" aria-label="US state choropleth of applicants">${pathEls}</svg>`;
  const mapBadge = `<div class="map-badge"><svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="${PIN_SVG}"></path></svg>Applicants by state</div>`;
  const locationCount = model.byState.length;
  const listRows = model.byState.map((s, i) => {
    const sub = escapeHtml(s.state) + (i === 0 ? " \xB7 top state" : "");
    return `<div class="lm-row"><span class="lp"><svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="${PIN_SVG}"></path></svg></span><span class="ln"><b>${escapeHtml(s.name)}</b><small>${sub}</small></span><span class="lc">${escapeHtml(s.count)}</span></div>`;
  }).join("");
  const list = `<div class="lmlist"><div class="lmh">Locations \xB7 ${escapeHtml(locationCount)} states</div><div class="lmrows">${listRows}</div></div>`;
  return `<div class="pp-choro"><div class="pp-choro__grid"><div class="pp-choro__mapcol"><div class="lmap">${svg}${mapBadge}</div></div>${list}</div></div>`;
}

// src/render/score-table.ts
function pickBand(v, bands) {
  if (!bands || !bands.length || isNaN(v)) return void 0;
  const sorted = [...bands].sort((a, b) => a.min - b.min);
  let picked;
  for (const band of sorted) {
    if (v >= band.min) picked = band.color;
  }
  return picked;
}
function scoreTableModel(o) {
  const rows = o.rows.map((r) => {
    const cells = {};
    for (const col of o.columns) {
      const value = r[col.key] ?? "";
      const align = col.align || "left";
      const bg = o.bandColumn && col.key === o.bandColumn && o.bands ? pickBand(Number(value), o.bands) : void 0;
      cells[col.key] = { value, align, bg };
    }
    return { cells };
  });
  return { columns: o.columns, rows, caption: o.caption };
}
function renderScoreTable(m) {
  const caption = m.caption ? `<caption class="pp-stable__caption">${escapeHtml(m.caption)}</caption>` : "";
  const thead = `<thead><tr>${m.columns.map(
    (c) => `<th class="pp-stable__th${c.align === "right" ? " pp-stable__r" : ""}" scope="col">${escapeHtml(c.label)}</th>`
  ).join("")}</tr></thead>`;
  const tbody = `<tbody>${m.rows.map(
    (row) => `<tr>${m.columns.map((col) => {
      const cell = row.cells[col.key];
      const bgStyle = cell.bg ? ` style="background:${escapeHtml(cell.bg)}"` : "";
      const alignClass = cell.align === "right" ? " pp-stable__r" : "";
      return `<td class="pp-stable__td${alignClass}"${bgStyle}>${escapeHtml(cell.value)}</td>`;
    }).join("")}</tr>`
  ).join("")}</tbody>`;
  return `<div class="pp-stable-wrap"><table class="pp-stable">${caption}${thead}${tbody}</table></div>`;
}

// adapters/vanilla/index.ts
function buildConfig(spec) {
  switch (spec.type) {
    case "bar":
      return barChart(spec.data, spec.opts);
    case "line":
      return lineChart(spec.labels || [], spec.data, spec.opts);
    case "doughnut":
      return doughnutChart(spec.data, spec.opts?.cutout);
    case "pie":
      return pieChart(spec.data);
    case "combo":
      return comboChart(spec.labels || [], spec.data.bar, spec.data.line);
    case "polarArea":
      return polarChart(spec.data);
    case "radar":
      return radarChart(spec.labels || [], spec.data);
    case "scatter":
      return scatterChart(spec.data, spec.opts);
    case "bubble":
      return bubbleChart(spec.data);
    case "groupedBar":
      return groupedBarChart(spec.labels || [], spec.data, spec.opts);
    // Community plugin types (plugin UMDs must be loaded before the adapter is used)
    case "matrix":
      return heatmapChart(spec.data, spec.opts);
    case "treemap":
      return treemapChart(spec.data, spec.opts);
    case "sankey":
      return sankeyChart(spec.data, spec.opts);
    case "boxplot":
      return boxplotChart(spec.labels || [], spec.data, spec.opts);
    case "barWithErrorBars":
      return errorBarChart(spec.labels || [], spec.data, spec.opts);
    case "wordCloud":
      return wordCloudChart(spec.data, spec.opts);
    case "candlestick":
      return candlestickChart(spec.data, spec.opts);
    case "bubbleMap":
      return geoBubbleChart(spec.data);
    case "forceDirectedGraph":
      return forceGraphChart(spec.data);
    default:
      throw new Error('WGUCharts: unknown chart type "' + spec.type + '"');
  }
}

// src/echarts/index.ts
var echarts_exports = {};
__export(echarts_exports, {
  barOption: () => barOption,
  boxplotOption: () => boxplotOption,
  calendarHeatmapOption: () => calendarHeatmapOption,
  gaugeOption: () => gaugeOption,
  geoChoroplethOption: () => geoChoroplethOption,
  graphOption: () => graphOption,
  heatmapOption: () => heatmapOption,
  lineOption: () => lineOption,
  parallelOption: () => parallelOption,
  pieOption: () => pieOption,
  radialBarOption: () => radialBarOption,
  registerWguEchartsTheme: () => registerWguEchartsTheme,
  sankeyOption: () => sankeyOption,
  scatterOption: () => scatterOption,
  sunburstOption: () => sunburstOption,
  themeRiverOption: () => themeRiverOption,
  treemapOption: () => treemapOption,
  wguEchartsTheme: () => wguEchartsTheme,
  wguHeatRamp: () => wguHeatRamp
});

// src/echarts/theme.ts
var wguEchartsTheme = {
  color: [wguTheme.colors.medium, wguTheme.colors.sky, wguTheme.colors.navy, wguTheme.colors.lime, wguTheme.colors.fg2, wguTheme.colors.grey],
  backgroundColor: "transparent",
  textStyle: { fontFamily: wguTheme.font.family, color: wguTheme.colors.fg2 },
  title: { textStyle: { color: wguTheme.colors.navy } },
  categoryAxis: { axisLine: { lineStyle: { color: "rgba(0,40,85,.08)" } }, axisTick: { show: false }, axisLabel: { color: wguTheme.colors.fg2 }, splitLine: { show: false } },
  valueAxis: { axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: "#6B7C93" }, splitLine: { lineStyle: { color: "rgba(0,40,85,.08)" } } },
  tooltip: { backgroundColor: wguTheme.colors.navy, borderWidth: 0, textStyle: { color: "#fff" } }
};
var wguHeatRamp = ["#EEF6F9", "#46B1EF", "#0070F0", "#002855"];
function registerWguEchartsTheme(echarts) {
  if (echarts && typeof echarts.registerTheme === "function") echarts.registerTheme("wgu", wguEchartsTheme);
}

// src/echarts/geo.ts
function geoChoroplethOption(data, opts = {}) {
  return {
    tooltip: {
      trigger: "item",
      formatter: (p) => `${p.name}: ${p.value || 0}`
    },
    visualMap: {
      min: 0,
      max: opts.max ?? Math.max(1, ...data.map((d) => d.value)),
      left: "left",
      bottom: "4%",
      calculable: true,
      inRange: { color: wguHeatRamp },
      text: ["High", "Low"],
      textStyle: { color: "#6B7C93" }
    },
    series: [{
      type: "map",
      map: opts.mapName || "USA",
      roam: false,
      // Fill the container — without an explicit layout the map shrinks to leave
      // room for the visualMap legend and looks tiny in small cards.
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: { borderColor: "#fff", borderWidth: 0.5 },
      emphasis: {
        label: { show: false },
        itemStyle: { areaColor: wguTheme.colors.lime }
      },
      data: cloneArr(data)
    }]
  };
}

// src/echarts/sankey.ts
function sankeyOption(nodes, links) {
  return {
    tooltip: { trigger: "item" },
    series: [{
      type: "sankey",
      emphasis: { focus: "adjacency" },
      lineStyle: { color: "gradient", opacity: 0.4 },
      itemStyle: { borderWidth: 0 },
      data: cloneArr(nodes),
      links: cloneArr(links)
    }]
  };
}

// src/echarts/treemap.ts
function treemapOption(data) {
  return {
    tooltip: {},
    series: [{
      type: "treemap",
      roam: false,
      nodeClick: false,
      breadcrumb: { show: false },
      label: { color: "#fff", fontWeight: 600 },
      levels: [{ itemStyle: { borderColor: "#fff", borderWidth: 2, gapWidth: 2 } }],
      data: cloneArr(data)
    }]
  };
}

// src/echarts/graph.ts
function graphOption(nodes, links) {
  return {
    tooltip: {},
    series: [{
      type: "graph",
      layout: "force",
      roam: true,
      label: { show: true, color: wguTheme.colors.navy },
      force: { repulsion: 180, edgeLength: 90 },
      lineStyle: { color: wguTheme.colors.fg2, opacity: 0.5 },
      itemStyle: { color: wguTheme.colors.medium },
      symbolSize: 34,
      data: cloneArr(nodes),
      links: cloneArr(links)
    }]
  };
}

// src/echarts/heatmap.ts
function heatmapOption(xLabels, yLabels, data, opts = {}) {
  return {
    tooltip: { position: "top" },
    grid: { height: "62%", top: "8%" },
    xAxis: { type: "category", data: cloneArr(xLabels), splitArea: { show: true } },
    yAxis: { type: "category", data: cloneArr(yLabels), splitArea: { show: true } },
    visualMap: {
      min: 0,
      max: opts.max ?? 10,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "2%",
      inRange: { color: wguHeatRamp },
      textStyle: { color: "#6B7C93" }
    },
    series: [{
      type: "heatmap",
      data: cloneArr(data),
      label: { show: false },
      emphasis: { itemStyle: { shadowBlur: 8, shadowColor: "rgba(0,40,85,.3)" } }
    }]
  };
}

// src/echarts/gauge.ts
function gaugeOption(opts) {
  const min = opts.min ?? 0;
  const max = opts.max ?? 100;
  const [t1, t2] = opts.thresholds ?? [max * 0.53, max * 0.66];
  const stops = [
    [t1 / max, "#E5484D"],
    [t2 / max, "#F5A623"],
    [1, "#97E152"]
  ];
  return {
    series: [{
      type: "gauge",
      min,
      max,
      startAngle: 210,
      endAngle: -30,
      progress: {
        show: true,
        width: 14,
        itemStyle: { color: wguTheme.colors.medium }
      },
      axisLine: {
        lineStyle: { width: 14, color: stops }
      },
      pointer: {
        itemStyle: { color: wguTheme.colors.navy }
      },
      axisTick: { show: false },
      splitLine: {
        length: 14,
        lineStyle: { color: "#fff", width: 2 }
      },
      axisLabel: { color: "#6B7C93", distance: 18, fontSize: 10 },
      anchor: {
        show: true,
        size: 14,
        itemStyle: { color: wguTheme.colors.navy }
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}%",
        color: wguTheme.colors.navy,
        fontFamily: wguTheme.font.numerals,
        fontSize: 28,
        offsetCenter: [0, "40%"]
      },
      title: {
        offsetCenter: [0, "72%"],
        color: wguTheme.colors.fg2,
        fontSize: 12
      },
      data: [{ value: opts.value, name: opts.name || "" }]
    }]
  };
}

// src/echarts/bar.ts
function barOption(labels, series, opts = {}) {
  const cat = { type: "category", data: cloneArr(labels) };
  const val = { type: "value" };
  return {
    tooltip: { trigger: "axis" },
    legend: series.length > 1 ? { bottom: 0 } : void 0,
    xAxis: opts.horizontal ? val : cat,
    yAxis: opts.horizontal ? cat : val,
    series: (Array.isArray(series) ? series : []).map((s) => ({
      name: s.label,
      type: "bar",
      stack: opts.stacked ? "total" : void 0,
      data: cloneArr(s.data),
      itemStyle: { borderRadius: opts.horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0] }
    }))
  };
}

// src/echarts/line.ts
function lineOption(labels, series, opts = {}) {
  return {
    tooltip: { trigger: "axis" },
    legend: series.length > 1 ? { bottom: 0 } : void 0,
    xAxis: { type: "category", boundaryGap: false, data: cloneArr(labels) },
    yAxis: { type: "value" },
    series: (Array.isArray(series) ? series : []).map((s) => ({
      name: s.label,
      type: "line",
      smooth: opts.smooth !== false,
      data: cloneArr(s.data),
      stack: opts.stacked ? "total" : void 0,
      areaStyle: opts.area ? {} : void 0
    }))
  };
}

// src/echarts/pie.ts
function pieOption(data, opts = {}) {
  return {
    tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
    legend: { bottom: 0 },
    series: [{
      type: "pie",
      radius: opts.donut ? ["55%", "75%"] : "70%",
      data: cloneArr(data),
      itemStyle: { borderColor: "#fff", borderWidth: 2 },
      label: { color: "#264468" }
    }]
  };
}

// src/echarts/scatter.ts
function scatterOption(series) {
  return {
    tooltip: { trigger: "item" },
    legend: series.length > 1 ? { bottom: 0 } : void 0,
    xAxis: { type: "value" },
    yAxis: { type: "value" },
    series: (Array.isArray(series) ? series : []).map((s) => ({ name: s.label, type: "scatter", symbolSize: 12, data: cloneArr(s.points) }))
  };
}

// src/echarts/sunburst.ts
function sunburstOption(data) {
  return {
    tooltip: {},
    color: cloneArr(wguTheme.colors.sequence),
    series: [{
      type: "sunburst",
      radius: [0, "90%"],
      data: cloneArr(data),
      label: { color: "#fff" },
      itemStyle: { borderColor: "#fff", borderWidth: 2 }
    }]
  };
}

// src/echarts/radial-bar.ts
function radialBarOption(labels, values) {
  return {
    polar: { radius: [20, "80%"] },
    angleAxis: { max: Math.max(1, ...values) * 1.1, startAngle: 75 },
    radiusAxis: { type: "category", data: cloneArr(labels) },
    tooltip: {},
    series: [{ type: "bar", data: cloneArr(values), coordinateSystem: "polar", itemStyle: { borderRadius: 4 } }]
  };
}

// src/echarts/boxplot.ts
function boxplotOption(labels, samples) {
  const box = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const q = (p) => s[Math.floor((s.length - 1) * p)];
    return [s[0], q(0.25), q(0.5), q(0.75), s[s.length - 1]];
  };
  return {
    tooltip: { trigger: "item" },
    xAxis: { type: "category", data: cloneArr(labels) },
    yAxis: { type: "value" },
    series: [{ type: "boxplot", data: (Array.isArray(samples) ? samples : []).map(box) }]
  };
}

// src/echarts/parallel.ts
function parallelOption(dims, rows) {
  return {
    parallel: {},
    parallelAxis: (Array.isArray(dims) ? dims : []).map((d, i) => ({ dim: i, name: d })),
    tooltip: {},
    series: [{ type: "parallel", data: (Array.isArray(rows) ? rows : []).map((r) => ({ name: r.name, value: cloneArr(r.values) })) }]
  };
}

// src/echarts/theme-river.ts
function themeRiverOption(data) {
  return {
    tooltip: { trigger: "axis" },
    singleAxis: { type: "time" },
    color: cloneArr(wguTheme.colors.sequence),
    series: [{ type: "themeRiver", data: cloneArr(data) }]
  };
}

// src/echarts/calendar.ts
function calendarHeatmapOption(year, data, opts = {}) {
  const max = opts.max ?? Math.max(1, ...data.map((d) => d[1]));
  return {
    tooltip: { position: "top" },
    visualMap: { min: 0, max, orient: "horizontal", left: "center", bottom: 0, inRange: { color: wguHeatRamp } },
    calendar: { range: String(year), cellSize: ["auto", 16] },
    series: [{ type: "heatmap", coordinateSystem: "calendar", data: cloneArr(data) }]
  };
}

// src/corpus/resolveSpec.ts
var RM = {
  funnel: { build: funnelModel, render: renderFunnel },
  gauge: { build: gaugeModel, render: renderGauge },
  kpi: { build: kpiModel, render: renderKpi },
  choropleth: { build: choroplethModel, render: renderChoropleth },
  scoreTable: { build: scoreTableModel, render: renderScoreTable }
};
function resolveSpec(spec) {
  if (spec.engine === "chartjs") {
    return { kind: "chartjs", value: buildConfig({ type: spec.type, data: spec.data, labels: spec.labels, opts: spec.opts }) };
  }
  if (spec.engine === "render-model") {
    const rm = RM[spec.type];
    if (!rm) throw new Error('corpus: unknown render-model type "' + spec.type + '"');
    const model = rm.build(spec.data, spec.opts);
    return { kind: "render-model", value: model, html: rm.render(model) };
  }
  if ("option" in spec && spec.option) {
    return { kind: "echarts", value: spec.option };
  }
  if ("factory" in spec && spec.factory) {
    const fn = echarts_exports[spec.factory];
    if (typeof fn !== "function" || !spec.factory.endsWith("Option")) {
      throw new Error('corpus: unknown echarts factory "' + spec.factory + '"');
    }
    return { kind: "echarts", value: fn(...spec.args) };
  }
  throw new Error("corpus: echarts spec needs an option or factory");
}

// src/corpus/index.ts
var corpus = [
  ...magnitude,
  ...changeOverTime,
  ...partToWhole,
  ...ranking,
  ...distribution,
  ...correlation,
  ...deviation,
  ...flow,
  ...spatial,
  ...kpi,
  ...tables
];
var byFamily = (f) => corpus.filter((e) => e.family === f);
var byEngine = (eng) => corpus.filter((e) => e.engine === eng);
var byFeature = (feat) => corpus.filter((e) => e.features.includes(feat));
function search(q) {
  const s = q.toLowerCase();
  return corpus.filter((e) => e.title.toLowerCase().includes(s) || e.chartType.toLowerCase().includes(s) || e.description.toLowerCase().includes(s) || e.whenToUse.toLowerCase().includes(s) || e.tags.some((t) => t.toLowerCase().includes(s)));
}
export {
  FAMILIES,
  FAMILIES_ORDER,
  byEngine,
  byFamily,
  byFeature,
  corpus,
  resolveSpec,
  search
};
