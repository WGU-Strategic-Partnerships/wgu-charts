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

// src/charts/_shared.ts
function cloneArr(arr) {
  return Array.isArray(arr) ? [...arr] : [];
}
var baseGrid = Object.freeze({ color: wguTheme.colors.grid });
var tickColor = wguTheme.colors.tick;

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
export {
  barOption,
  boxplotOption,
  calendarHeatmapOption,
  gaugeOption,
  geoChoroplethOption,
  graphOption,
  heatmapOption,
  lineOption,
  parallelOption,
  pieOption,
  radialBarOption,
  registerWguEchartsTheme,
  sankeyOption,
  scatterOption,
  sunburstOption,
  themeRiverOption,
  treemapOption,
  wguEchartsTheme,
  wguHeatRamp
};
