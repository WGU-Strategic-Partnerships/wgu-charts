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
    bubbleChart: () => bubbleChart,
    comboChart: () => comboChart,
    createTheme: () => createTheme,
    createWGUCharts: () => createWGUCharts,
    doughnutChart: () => doughnutChart,
    lineChart: () => lineChart,
    mount: () => mount,
    pBarLabels: () => pBarLabels,
    pCrosshair: () => pCrosshair,
    pPointLabels: () => pPointLabels,
    pieChart: () => pieChart,
    polarChart: () => polarChart,
    radarChart: () => radarChart,
    registerWguPlugins: () => registerWguPlugins,
    scatterChart: () => scatterChart,
    wguPlugins: () => wguPlugins,
    wguTheme: () => wguTheme
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

  // src/index.ts
  var registered = false;
  function registerWguPlugins(Chart2) {
    if (registered || !Chart2 || typeof Chart2.register !== "function") return;
    Chart2.register(...wguPlugins);
    registered = true;
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
        return scatterChart(spec.data);
      case "bubble":
        return bubbleChart(spec.data);
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
