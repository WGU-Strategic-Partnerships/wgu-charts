// WGU Charts — Chart.js vs ECharts side-by-side comparison
// Relies on: Chart.js, community plugins, ECharts, and WGUCharts UMD being loaded first.

// ── Register WGU ECharts theme ───────────────────────────────────────────────
if (window.echarts && WGUCharts.registerWguEchartsTheme) {
  WGUCharts.registerWguEchartsTheme(echarts);
}

// ── Shared sample data ───────────────────────────────────────────────────────
const SANKEY_NODES = [{name:'Leads'},{name:'Apps'},{name:'Enrolled'},{name:'Lost'}];
const SANKEY_LINKS = [
  {source:'Leads', target:'Apps',     value:120},
  {source:'Apps',  target:'Enrolled', value:80},
  {source:'Apps',  target:'Lost',     value:40}
];

const TREEMAP_DATA_CJS = [
  {label:'MBA',value:120},{label:'BSN',value:90},{label:'IT',value:70},
  {label:'Edu',value:55},{label:'Business',value:48},{label:'Health',value:62}
];
const TREEMAP_DATA_EC = [
  {name:'MBA',value:120},{name:'BSN',value:90},{name:'IT',value:70},
  {name:'Edu',value:55},{name:'Business',value:48},{name:'Health',value:62}
];

const HM_X = ['Mon','Tue','Wed','Thu','Fri'];
const HM_Y = ['Morning','Midday','Afternoon','Evening','Night'];
const HM_DATA_CJS = [
  {x:'Mon',y:'Morning',v:3},{x:'Mon',y:'Midday',v:7},{x:'Mon',y:'Afternoon',v:5},{x:'Mon',y:'Evening',v:2},{x:'Mon',y:'Night',v:1},
  {x:'Tue',y:'Morning',v:6},{x:'Tue',y:'Midday',v:9},{x:'Tue',y:'Afternoon',v:4},{x:'Tue',y:'Evening',v:3},{x:'Tue',y:'Night',v:2},
  {x:'Wed',y:'Morning',v:4},{x:'Wed',y:'Midday',v:8},{x:'Wed',y:'Afternoon',v:6},{x:'Wed',y:'Evening',v:5},{x:'Wed',y:'Night',v:1},
  {x:'Thu',y:'Morning',v:7},{x:'Thu',y:'Midday',v:5},{x:'Thu',y:'Afternoon',v:9},{x:'Thu',y:'Evening',v:4},{x:'Thu',y:'Night',v:3},
  {x:'Fri',y:'Morning',v:2},{x:'Fri',y:'Midday',v:6},{x:'Fri',y:'Afternoon',v:8},{x:'Fri',y:'Evening',v:7},{x:'Fri',y:'Night',v:4}
];
const HM_DATA_EC = HM_DATA_CJS.map(d => [HM_X.indexOf(d.x), HM_Y.indexOf(d.y), d.v]);

const GRAPH_NODES = [{name:'WGU'},{name:'Health'},{name:'Business'},{name:'IT'},{name:'Education'}];
const GRAPH_EDGES = [
  {source:'WGU',target:'Health'},{source:'WGU',target:'Business'},
  {source:'WGU',target:'IT'},{source:'WGU',target:'Education'}
];

const GAUGE_VALUE = 110;
const GAUGE_MIN   = 0;
const GAUGE_MAX   = 150;

const MAP_DATA_CJS = [
  {state:'TX',count:120},{state:'CA',count:90},{state:'FL',count:70},
  {state:'NY',count:55},{state:'UT',count:140},{state:'AZ',count:60}
];
const MAP_DATA_EC = [
  {name:'Texas',value:120},{name:'California',value:90},{name:'Florida',value:70},
  {name:'New York',value:55},{name:'Utah',value:140},{name:'Arizona',value:60}
];

// ── PAIRS definition ─────────────────────────────────────────────────────────
// Each entry: { title, desc, cjsMount(el), ecBuild(el), verdict }
const PAIRS = [
  // 1. Sankey
  {
    title: 'Sankey',
    desc: 'Flow diagram showing how a quantity moves between stages',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'sankey',
        data: [
          {from:'Leads', to:'Apps',     flow:120},
          {from:'Apps',  to:'Enrolled', flow:80},
          {from:'Apps',  to:'Lost',     flow:40}
        ]
      });
    },
    ecBuild(el) {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.sankeyOption(SANKEY_NODES, SANKEY_LINKS));
    },
    verdict: 'ECharts — native, gradient links, cleaner labels. Chart.js needs the chartjs-chart-sankey plugin.'
  },

  // 2. Treemap
  {
    title: 'Treemap',
    desc: 'Nested rectangles sized by value for hierarchical part-to-whole',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'treemap',
        data: TREEMAP_DATA_CJS
      });
    },
    ecBuild(el) {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.treemapOption(TREEMAP_DATA_EC));
    },
    verdict: 'Toss-up. Both need a plugin (Chart.js) / are native (ECharts); ECharts labels nest better at deeper hierarchies.'
  },

  // 3. Heatmap
  {
    title: 'Heatmap',
    desc: 'Color intensity grid across two categorical dimensions',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'matrix',
        data: HM_DATA_CJS,
        opts: { xLabels: HM_X, yLabels: HM_Y }
      });
    },
    ecBuild(el) {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.heatmapOption(HM_X, HM_Y, HM_DATA_EC, {max: 9}));
    },
    verdict: 'ECharts — built-in visualMap legend + smoother color scale. Chart.js matrix is fine for small grids.'
  },

  // 4. Force-directed graph
  {
    title: 'Force Graph',
    desc: 'Network of nodes and edges with physics-based layout',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'forceDirectedGraph',
        data: { nodes: GRAPH_NODES.map(n => ({id: n.name})), edges: GRAPH_EDGES }
      });
    },
    ecBuild(el) {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.graphOption(GRAPH_NODES, GRAPH_EDGES));
    },
    verdict: 'ECharts — mature force layout with animation and drag. Chart.js graph plugin is less polished and less interactive.'
  },

  // 5. Gauge
  {
    title: 'Gauge',
    desc: 'Single value vs. a target range with threshold zones',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'gauge',
        data: {
          label: '% to Target',
          variant: 'half',
          value: GAUGE_VALUE,
          min: GAUGE_MIN,
          max: GAUGE_MAX,
          thresholds: [80, 99],
          unit: '%'
        }
      });
    },
    ecBuild(el) {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.gaugeOption({
        value: GAUGE_VALUE,
        min: GAUGE_MIN,
        max: GAUGE_MAX,
        name: '% TO TARGET'
      }));
    },
    verdict: 'Either. Chart.js render-model gives exact MBR styling with threshold zones; ECharts gauge is richer and animated out of the box.'
  },

  // 6. US Choropleth map
  {
    title: 'US Map',
    desc: 'US states shaded by a metric value',
    cjsMount(el) {
      WGUCharts.mount(el, {
        type: 'choropleth',
        data: MAP_DATA_CJS
      });
    },
    // ecBuild handled asynchronously below; set a placeholder fn
    ecBuild: null,
    verdict: 'ECharts — real GeoJSON projection with visualMap legend. Chart.js option is a hand-rolled SVG render-model or chartjs-chart-geo. ECharts wins for maps.'
  }
];

// ── DOM construction ──────────────────────────────────────────────────────────
const page = document.getElementById('compare-page');

// Column headers
const colHeaders = document.createElement('div');
colHeaders.className = 'col-headers';
colHeaders.innerHTML = `
  <div class="col-label">Chart type</div>
  <div class="col-label">Chart.js</div>
  <div class="col-label">ECharts</div>
`;
page.appendChild(colHeaders);

// Track ECharts geo mount el for async fetch
let echartsGeoMountEl = null;

PAIRS.forEach((pair, idx) => {
  const rowEl = document.createElement('div');
  rowEl.className = 'compare-row';

  const cjsId  = `cjs-${idx}`;
  const ecId   = `ec-${idx}`;

  // Determine Chart.js mount type:
  // gauge and choropleth are render-models (div); others need canvas
  const isRenderModel = pair.title === 'Gauge' || pair.title === 'US Map';
  const cjsMountHtml = isRenderModel
    ? `<div id="${cjsId}" class="rm-mount"></div>`
    : `<div class="canvas-wrap"><canvas id="${cjsId}"></canvas></div>`;

  // ECharts always gets a div
  const ecMountHtml = `<div id="${ecId}" class="echarts-mount"></div>`;

  rowEl.innerHTML = `
    <div class="row-inner">
      <div class="row-title-block">
        <p class="chart-type">${pair.title}</p>
        <p class="chart-desc">${pair.desc}</p>
      </div>
      <div class="card">
        <div class="card-label">
          <span class="chip">Chart.js</span>
        </div>
        ${cjsMountHtml}
      </div>
      <div class="card">
        <div class="card-label">
          <span class="chip chip--echarts">ECharts</span>
        </div>
        ${ecMountHtml}
      </div>
    </div>
    <div class="verdict"><strong>Recommendation:</strong> ${pair.verdict}</div>
  `;

  page.appendChild(rowEl);

  // Mount Chart.js side
  try {
    const cjsEl = document.getElementById(cjsId);
    // For canvas-based charts pass the canvas id selector; for render-model pass the div el
    if (isRenderModel) {
      pair.cjsMount(cjsEl);
    } else {
      pair.cjsMount('#' + cjsId);
    }
  } catch(e) {
    const el = document.getElementById(cjsId);
    if (el) el.innerHTML = `<div class="chart-error">Chart.js render failed:<br>${e.message}</div>`;
    console.error('CJS error for', pair.title, e);
  }

  // Mount ECharts side (sync, except for US Map)
  const ecEl = document.getElementById(ecId);
  if (pair.title === 'US Map') {
    echartsGeoMountEl = ecEl;
    ecEl.innerHTML = '<div class="chart-error">Loading GeoJSON map…</div>';
  } else if (pair.ecBuild) {
    try {
      pair.ecBuild(ecEl);
    } catch(e) {
      ecEl.innerHTML = `<div class="chart-error">ECharts render failed:<br>${e.message}</div>`;
      console.error('EC error for', pair.title, e);
    }
  }
});

// ── ECharts US Map (async fetch) ─────────────────────────────────────────────
if (echartsGeoMountEl && window.echarts) {
  fetch('https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI@master/data/geojson/us-states.json')
    .then(r => r.json())
    .then(geojson => {
      echarts.registerMap('USA', geojson);
      echartsGeoMountEl.innerHTML = '';
      echarts.init(echartsGeoMountEl, 'wgu').setOption(
        WGUCharts.geoChoroplethOption(MAP_DATA_EC, {max: 140})
      );
    })
    .catch(err => {
      echartsGeoMountEl.innerHTML =
        '<div class="chart-error">Map requires internet — GeoJSON fetch failed.<br>' + err.message + '</div>';
    });
}
