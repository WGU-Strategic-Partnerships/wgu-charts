// src/interaction/index.ts
function hitTest(chart, evt) {
  if (!chart || typeof chart.getElementsAtEventForMode !== "function") return null;
  const els = chart.getElementsAtEventForMode(evt, "nearest", { intersect: true }, false);
  if (!els || !els.length) return null;
  const { datasetIndex, index } = els[0];
  const ds = chart.data?.datasets?.[datasetIndex];
  const datum = ds?.data ? ds.data[index] : void 0;
  const label = chart.data?.labels ? chart.data.labels[index] : void 0;
  const value = datum && typeof datum === "object" ? datum.y ?? datum.v ?? datum.value ?? datum : datum;
  return { datasetIndex, index, label, value, datum };
}
function applyFilters(rows, state) {
  const src = Array.isArray(rows) ? rows : [];
  const dims = Object.keys(state || {}).filter((d) => Array.isArray(state[d]) && state[d].length);
  if (!dims.length) return [...src];
  return src.filter((r) => dims.every((d) => state[d].includes(r[d])));
}
function deriveFilterOptions(rows, dim) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  (Array.isArray(rows) ? rows : []).forEach((r) => {
    const v = r[dim];
    if (!seen.has(v)) {
      seen.add(v);
      out.push({ value: v, label: String(v) });
    }
  });
  return out;
}
function drillSpec(spec) {
  const levels = spec && Array.isArray(spec.levels) ? spec.levels : [];
  const clamp = (i) => Math.max(0, Math.min(levels.length - 1, i));
  return {
    levels,
    levelAt: (i) => levels[clamp(i)],
    next: (i) => i < levels.length - 1 ? i + 1 : i,
    prev: (i) => i > 0 ? i - 1 : 0
  };
}
function applyData(chart, next) {
  if (!chart) return;
  if (next.labels !== void 0) chart.data.labels = next.labels;
  chart.data.datasets = next.datasets;
  chart.update();
}

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
function deepMerge(base, over) {
  if (Array.isArray(base)) return over ?? base;
  if (typeof base === "object" && base) {
    const out = { ...base };
    for (const k of Object.keys(over ?? {})) {
      out[k] = k in base ? deepMerge(base[k], over[k]) : over[k];
    }
    return out;
  }
  return over ?? base;
}
function createTheme(overrides = {}) {
  return deepMerge(wguTheme, overrides);
}

// src/plugins/index.ts
var FF = wguTheme.font.family;
var pBarLabels = {
  id: "pBarLabels",
  afterDatasetsDraw(ch) {
    const c = ch;
    if (c.config.type !== "bar" || c.options.indexAxis !== "y") return;
    const ctx = c.ctx, ds = c.data.datasets[0];
    if (!ds) return;
    ctx.save();
    ctx.font = "700 12.5px " + FF;
    ctx.fillStyle = wguTheme.colors.fg2;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    c.getDatasetMeta(0).data.forEach((bar, i) => {
      ctx.fillText(Number(ds.data[i]).toLocaleString("en-US"), bar.x + 8, bar.y);
    });
    ctx.restore();
  }
};
var pPointLabels = {
  id: "pPointLabels",
  afterDatasetsDraw(ch) {
    const c = ch;
    if (c.config.type !== "line") return;
    const ctx = c.ctx;
    ctx.save();
    ctx.font = "700 11px " + FF;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    c.data.datasets.forEach((dset, di) => {
      if (c.isDatasetVisible && !c.isDatasetVisible(di)) return;
      ctx.fillStyle = dset.borderColor;
      c.getDatasetMeta(di).data.forEach((pt, i) => {
        ctx.fillText(Number(dset.data[i]).toLocaleString("en-US"), pt.x, pt.y - 9);
      });
    });
    ctx.restore();
  }
};
var pCrosshair = {
  id: "pCrosshair",
  afterDraw(ch) {
    const c = ch;
    if (c.config.type !== "line") return;
    const act = c.getActiveElements ? c.getActiveElements() : [];
    if (!act.length) return;
    const x = act[0].element.x, a = c.chartArea, ctx = c.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, a.top);
    ctx.lineTo(x, a.bottom);
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(0,40,85,.22)";
    ctx.stroke();
    ctx.restore();
  }
};
var wguPlugins = [pBarLabels, pPointLabels, pCrosshair];

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
  return {
    type: "treemap",
    data: {
      datasets: [{
        label: opts?.label || "",
        tree: cloneArr(data),
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
function errorBarChart(labels, data, opts) {
  return {
    type: "barWithErrorBars",
    data: {
      labels: cloneArr(labels),
      datasets: [{
        label: opts?.label || "",
        data: cloneArr(data),
        backgroundColor: "#0070F0",
        borderRadius: wguTheme.radius,
        borderSkipped: false,
        errorBarColor: "#002855",
        errorBarWhiskerColor: "#002855",
        errorBarLineWidth: 1.5,
        errorBarWhiskerLineWidth: 1.5
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

// src/charts/community/index.ts
function registerPlugin(Chart, ...controllers) {
  if (Chart && typeof Chart.register === "function") Chart.register(...controllers);
}

// src/index.ts
var registered = false;
function registerWguPlugins(Chart) {
  if (registered || !Chart || typeof Chart.register !== "function") return;
  Chart.register(...wguPlugins);
  registered = true;
}
export {
  applyData,
  applyFilters,
  barChart,
  boxplotChart,
  bubbleChart,
  candlestickChart,
  comboChart,
  createTheme,
  deriveFilterOptions,
  doughnutChart,
  drillSpec,
  errorBarChart,
  forceGraphChart,
  geoBubbleChart,
  groupedBarChart,
  heatmapChart,
  hitTest,
  lineChart,
  pBarLabels,
  pCrosshair,
  pPointLabels,
  pieChart,
  polarChart,
  radarChart,
  registerPlugin,
  registerWguPlugins,
  sankeyChart,
  scatterChart,
  treemapChart,
  wguPlugins,
  wguTheme,
  wordCloudChart
};
