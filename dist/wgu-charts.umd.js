/* wgu-charts UMD — requires global Chart.js */
"use strict";
var WGUCharts = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // adapters/vanilla/umd-entry.ts
  var umd_entry_exports = {};
  __export(umd_entry_exports, {
    barChart: () => barChart,
    boxplotChart: () => boxplotChart,
    bubbleChart: () => bubbleChart,
    candlestickChart: () => candlestickChart,
    comboChart: () => comboChart,
    createTheme: () => createTheme,
    createWGUCharts: () => createWGUCharts,
    doughnutChart: () => doughnutChart,
    errorBarChart: () => errorBarChart,
    forceGraphChart: () => forceGraphChart,
    geoBubbleChart: () => geoBubbleChart,
    groupedBarChart: () => groupedBarChart,
    heatmapChart: () => heatmapChart,
    lineChart: () => lineChart,
    mount: () => mount,
    pBarLabels: () => pBarLabels,
    pCrosshair: () => pCrosshair,
    pPointLabels: () => pPointLabels,
    pieChart: () => pieChart,
    polarChart: () => polarChart,
    radarChart: () => radarChart,
    registerPlugin: () => registerPlugin,
    registerWguPlugins: () => registerWguPlugins,
    sankeyChart: () => sankeyChart,
    scatterChart: () => scatterChart,
    treemapChart: () => treemapChart,
    wguPlugins: () => wguPlugins,
    wguTheme: () => wguTheme,
    wordCloudChart: () => wordCloudChart
  });

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
  function scatterChart(series) {
    const seq = wguTheme.colors.sequence;
    return {
      type: "scatter",
      data: { datasets: (Array.isArray(series) ? series : []).map((s, i) => ({
        label: s.label,
        data: cloneArr(s.points),
        backgroundColor: seq[i % seq.length],
        pointRadius: 5,
        pointHoverRadius: 7
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
  function candlestickChart(data, opts) {
    return {
      type: "candlestick",
      data: {
        labels: (Array.isArray(data) ? data : []).map((d) => d.x),
        datasets: [{
          label: opts?.label || "",
          data: cloneArr(data),
          color: {
            up: "#97E152",
            down: "#E5484D",
            unchanged: "#46B1EF"
          },
          borderColor: {
            up: "#97E152",
            down: "#E5484D",
            unchanged: "#46B1EF"
          }
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: baseTooltip()
        },
        scales: {
          x: {
            type: "category",
            grid: { display: false },
            border: { display: false },
            ticks: { color: wguTheme.colors.fg2 }
          },
          y: {
            grid: { color: wguTheme.colors.grid },
            border: { display: false },
            ticks: { color: tickColor }
          }
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
  function registerPlugin(Chart2, ...controllers) {
    if (Chart2 && typeof Chart2.register === "function") Chart2.register(...controllers);
  }

  // src/index.ts
  var registered = false;
  function registerWguPlugins(Chart2) {
    if (registered || !Chart2 || typeof Chart2.register !== "function") return;
    Chart2.register(...wguPlugins);
    registered = true;
  }

  // src/render/runtime.ts
  var RENDER_MODEL_TYPES = /* @__PURE__ */ new Set(["funnel", "gauge", "kpi", "choropleth", "scoreTable"]);
  function isRenderModelType(t) {
    return RENDER_MODEL_TYPES.has(t);
  }
  function ensureStyle(doc, styleId, css) {
    if (!doc || doc.getElementById(styleId)) return;
    const el = doc.createElement("style");
    el.id = styleId;
    el.textContent = css;
    doc.head.appendChild(el);
  }
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
  var funnelCss = `/* Funnel band \u2014 ported from the design .funnel/.funnel-stage/.funnel-conn.
   Bars are scaled for readability (widthPct) while counts shown are exact.
   The on-dark variant matches the navy hero. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 600;
    letter-spacing: -.01em;
}

.pp-funnel {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.pp-funnel__stage {
    position: relative;
    border-radius: 10px;
    padding: 16px 18px;
    overflow: hidden;
    background: #EEF6F9;
    border: 1px solid rgba(0, 40, 85, .10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}
.pp-funnel__bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(90deg, rgba(0, 112, 240, .18) 0%, rgba(70, 177, 239, .26) 100%);
    border-right: 3px solid #0070F0;
}
.pp-funnel__fl,
.pp-funnel__fv {
    position: relative;
}
.pp-funnel__fl {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.pp-funnel__stg {
    font-size: 10.5px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #0070F0;
    font-weight: 600;
}
.pp-funnel__lbl {
    font-size: 14.5px;
    font-weight: 500;
    color: #002855;
}
.pp-funnel__meta {
    font-size: 12px;
    color: #6B7C93;
}
.pp-funnel__fv {
    font-weight: 600;
    font-size: 34px;
    line-height: 1;
    color: #002855;
    letter-spacing: -.01em;
}
.pp-funnel__conn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 18px;
    color: #6B7C93;
    font-size: 12px;
}
.pp-funnel__conn svg {
    width: 14px;
    height: 14px;
    color: #0070F0;
}

/* on-dark (navy hero) variant \u2014 exact design values */
.pp-funnel--on-dark .pp-funnel__stage {
    background: rgba(255, 255, 255, .06);
    border: 1px solid rgba(255, 255, 255, .12);
}
.pp-funnel--on-dark .pp-funnel__bar {
    background: linear-gradient(90deg, rgba(0, 112, 240, .6) 0%, rgba(70, 177, 239, .72) 100%);
    border-right: 3px solid #46B1EF;
    box-shadow: 0 0 24px rgba(70, 177, 239, .34);
}
.pp-funnel--on-dark .pp-funnel__stg { color: #46B1EF; }
.pp-funnel--on-dark .pp-funnel__lbl { color: #fff; }
.pp-funnel--on-dark .pp-funnel__meta { color: #BBD0E8; }
.pp-funnel--on-dark .pp-funnel__fv { color: #fff; }
.pp-funnel--on-dark .pp-funnel__conn { color: #BBD0E8; }
.pp-funnel--on-dark .pp-funnel__conn svg { color: #46B1EF; }
`;

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
  var gaugeCss = `/* Gauge \u2014 ported from the design gauge()/.gauge styles.
   Animated arc draw-on, serif numeral percent, optional sub + onDark variant. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 600;
    letter-spacing: -.01em;
}

.pp-gauge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background: transparent;
    text-align: center;
}

.pp-gauge__svg-wrap {
    position: relative;
    display: inline-block;
}
.pp-gauge__svg { display: block; height: auto; }
.pp-gauge__track { stroke: #F1F1F1; }

/* draw-on animation: arc is fully offset, then animates to its dash position */
.pp-gauge__arc {
    stroke-dashoffset: 0;
    animation: pp-gauge-draw 1.1s cubic-bezier(.2, .8, .2, 1) .15s both;
}
@keyframes pp-gauge-draw {
    from { stroke-dashoffset: 264; }
    to { stroke-dashoffset: 0; }
}

.pp-gauge__center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.pp-gauge__pct {
    font-size: 30px;
    color: #002855;
    line-height: 1;
}
.pp-gauge__label {
    font-size: 12.5px;
    font-weight: 600;
    color: #264468;
    text-align: center;
    letter-spacing: .01em;
}
.pp-gauge__sub {
    font-size: 11px;
    color: #6B7C93;
    text-align: center;
}

/* on-dark (navy hero) variant */
.pp-gauge--on-dark .pp-gauge__track { stroke: rgba(255, 255, 255, .14); }
.pp-gauge--on-dark .pp-gauge__pct { color: #fff; }
.pp-gauge--on-dark .pp-gauge__label { color: #fff; }
.pp-gauge--on-dark .pp-gauge__sub { color: #BBD0E8; }

/* Half-circle (MBR) variant */
.pp-gauge--half {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}
.pp-gauge__svg--half {
    width: 100%;
    max-width: 200px;
    height: auto;
    display: block;
}
.pp-gauge--half .pp-gauge__pct {
    font-size: 28px;
    color: #002855;
    line-height: 1;
    margin-top: -4px;
}
.pp-gauge__label--half {
    text-transform: uppercase;
    letter-spacing: .04em;
    font-size: 11px;
    font-weight: 700;
    color: #264468;
    text-align: center;
}
.pp-gauge--on-dark .pp-gauge__label--half { color: #fff; }
.pp-gauge--on-dark.pp-gauge--half .pp-gauge__pct { color: #fff; }
`;

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
  var kpiCss = `/* KPI tile \u2014 ported from the design .kpi-* styles.
   Serif numerals via 'Newsreader',Georgia,serif; literal hex fallbacks for standalone rendering. */
.num {
    font-family: 'Newsreader', Georgia, serif;
    font-variant-numeric: lining-nums tabular-nums;
    font-weight: 500;
    letter-spacing: -.01em;
}

.pp-kpi {
    background: #fff;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    transition: transform .2s cubic-bezier(.2, .8, .2, 1), box-shadow .2s cubic-bezier(.2, 0, .2, 1);
}
.pp-kpi:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 23, 49, .10);
}

.pp-kpi__label {
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: .04em;
    color: #6B7C93;
    text-transform: uppercase;
}
.pp-kpi__value {
    font-weight: 600;
    font-size: 44px;
    line-height: 1;
    letter-spacing: -.02em;
    color: #002855;
    margin: 8px 0 0;
}
.pp-kpi__sub {
    font-size: 12.5px;
    color: #6B7C93;
    margin-top: 7px;
}
.pp-kpi__delta {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12.5px;
    font-weight: 600;
    margin-top: 9px;
    padding: 3px 8px;
    border-radius: 999px;
}
.pp-kpi__delta svg { width: 13px; height: 13px; }
.pp-kpi__delta--up { background: rgba(31, 138, 91, .12); color: #1B7A4E; }
.pp-kpi__delta--down { background: rgba(204, 0, 0, .10); color: #B42318; }
.pp-kpi__spark { margin-top: 14px; width: 100%; height: 38px; display: block; }
`;

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
  var choroplethCss = `/* US choropleth + location list \u2014 ported from ppChoropleth.css.
   All custom props replaced with literal hex values. */
.pp-choro {
    background: #fff;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
}
.pp-choro__title {
    margin: 0 0 14px;
    font-size: 14px;
    font-weight: 600;
    color: #264468;
    letter-spacing: .01em;
}
.pp-choro__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 18px;
    align-items: start;
}
@media (max-width: 720px) {
    .pp-choro__grid { grid-template-columns: 1fr; }
}

/* Map frame */
.lmap {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(0, 40, 85, .10);
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    background: #D7E6F2;
    min-height: 230px;
}
.lmap svg {
    display: block;
    width: 100%;
    height: auto;
}
.cz {
    cursor: pointer;
    transition: fill-opacity .15s;
}
.cz:hover {
    fill-opacity: .82;
}
.map-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10.5px;
    font-weight: 700;
    color: #264468;
    background: rgba(255, 255, 255, .9);
    padding: 5px 10px;
    border-radius: 999px;
    box-shadow: 0 1px 2px rgba(0, 23, 49, .08);
    letter-spacing: .02em;
}
.map-badge svg {
    width: 13px;
    height: 13px;
    color: #0070F0;
}
.map-unavailable {
    display: grid;
    place-items: center;
    min-height: 230px;
    color: #5b6e84;
    font-size: 13px;
    font-weight: 600;
}

/* Heat legend */
.map-hlegend {
    margin-top: 10px;
}
.map-hlegend .hl-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11.5px;
    font-weight: 600;
    color: #5b6e84;
    flex-wrap: wrap;
}
.map-hlegend .hl-cap {
    text-transform: uppercase;
    letter-spacing: .06em;
    color: #264468;
}
.map-hlegend .hl-bar {
    flex: 0 0 170px;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(90deg, #C8E0F5, #46B1EF, #0070F0, #03286E);
}
.map-hlegend .hl-none {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    margin-left: 4px;
}
.map-hlegend .hl-none i {
    width: 11px;
    height: 11px;
    border-radius: 3px;
    background: #E7EEF5;
    border: 1px solid #cfdbe8;
}
.map-note {
    margin: 10px 0 0;
    font-size: 11px;
    line-height: 1.45;
    color: #5b6e84;
}

/* Location list */
.lmlist {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 40, 85, .10);
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
}
.lmlist .lmh {
    padding: 9px 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .09em;
    text-transform: uppercase;
    color: #5b6e84;
    background: #EEF6F9;
    border-bottom: 1px solid rgba(0, 40, 85, .10);
}
.lmrows {
    display: flex;
    flex-direction: column;
    max-height: 430px;
    overflow: auto;
}
.lm-row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 11px;
    width: 100%;
    padding: 9px 14px;
    appearance: none;
    background: #fff;
    border: 0;
    border-bottom: 1px solid rgba(0, 40, 85, .10);
    cursor: pointer;
    text-align: left;
    font-family: inherit;
    color: inherit;
    transition: background .15s ease;
}
.lm-row:last-child {
    border-bottom: 0;
}
.lm-row:hover {
    background: #EEF6F9;
}
.lm-row.sel {
    background: #EEF6F9;
    box-shadow: inset 3px 0 0 #0070F0;
}
.lm-row .lp {
    width: 20px;
    height: 20px;
    color: #0070F0;
    display: grid;
    place-items: center;
    flex: none;
}
.lm-row .lp svg {
    width: 17px;
    height: 17px;
}
.lm-row .ln {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}
.lm-row .ln b {
    font-size: 13.5px;
    font-weight: 600;
    color: #0a2540;
    line-height: 1.15;
}
.lm-row .ln small {
    font-size: 11px;
    color: #5b6e84;
}
.lm-row .lc {
    font-family: 'Newsreader', Georgia, serif;
    font-weight: 600;
    font-size: 17px;
    color: #0a2540;
}
`;

  // src/render/score-table.ts
  var scoreTableStyleId = "wgu-score-table";
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
  var scoreTableCss = `/* Score table \u2014 branded MBR banded table */
.pp-stable-wrap {
    overflow-x: auto;
    width: 100%;
}
.pp-stable {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    color: #264468;
}
.pp-stable__caption {
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: #002855;
    padding: 0 0 6px;
    caption-side: top;
}
.pp-stable__th {
    text-align: left;
    font-size: 11px;
    font-weight: 700;
    color: #002855;
    padding: 6px 10px;
    border-bottom: 1.5px solid rgba(0,40,85,.15);
    white-space: nowrap;
}
.pp-stable__td {
    padding: 6px 10px;
    border-bottom: 1px solid rgba(0,40,85,.10);
}
.pp-stable__r {
    text-align: right;
}
.pp-stable tbody tr:last-child .pp-stable__td {
    border-bottom: none;
}
`;

  // adapters/vanilla/index.ts
  var RENDER_MODELS = {
    funnel: { build: funnelModel, render: renderFunnel, css: funnelCss, styleId: "wgu-funnel" },
    gauge: { build: gaugeModel, render: renderGauge, css: gaugeCss, styleId: "wgu-gauge" },
    kpi: { build: kpiModel, render: renderKpi, css: kpiCss, styleId: "wgu-kpi" },
    choropleth: { build: choroplethModel, render: renderChoropleth, css: choroplethCss, styleId: "wgu-choropleth" },
    scoreTable: { build: scoreTableModel, render: renderScoreTable, css: scoreTableCss, styleId: scoreTableStyleId }
  };
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
        return scatterChart(spec.data);
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
  function createWGUCharts(Chart2) {
    registerWguPlugins(Chart2);
    return {
      mount(target, spec) {
        const el = typeof target === "string" ? document.querySelector(target) : target;
        if (el === null) throw new Error('WGUCharts: target "' + String(target) + '" not found in document');
        if (isRenderModelType(spec.type)) {
          const rm = RENDER_MODELS[spec.type];
          const doc = el.ownerDocument || document;
          ensureStyle(doc, rm.styleId, rm.css);
          const draw = (data, opts) => {
            el.innerHTML = rm.render(rm.build(data, opts));
          };
          draw(spec.data, spec.opts);
          return {
            chart: null,
            update(data) {
              draw(data, spec.opts);
            },
            destroy() {
              el.innerHTML = "";
            }
          };
        }
        const config = buildConfig(spec);
        const chart = new Chart2(el, config);
        return {
          chart,
          // NOTE: combo charts expect data = { bar: ComboSeries, line: ComboSeries }.
          // Calling update() with a flat array for a combo chart will throw. Combo live-update is Plan 2.
          update(data, labels) {
            const next = buildConfig({ ...spec, data, labels: labels ?? spec.labels });
            chart.data.labels = next.data.labels;
            chart.data.datasets = next.data.datasets;
            chart.update();
          },
          destroy() {
            chart.destroy();
          }
        };
      }
    };
  }

  // adapters/vanilla/umd-entry.ts
  var Chart = globalThis.Chart;
  if (!Chart) {
    console.warn("WGUCharts: globalThis.Chart is undefined \u2014 load Chart.js before wgu-charts.umd.js");
  }
  var api = Chart ? createWGUCharts(Chart) : null;
  function mount(target, spec) {
    if (!api) {
      throw new Error("WGUCharts: Chart.js was not available at load time. Ensure Chart.js loads before wgu-charts.umd.js.");
    }
    return api.mount(target, spec);
  }
  return __toCommonJS(umd_entry_exports);
})();
