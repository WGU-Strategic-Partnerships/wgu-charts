// ── Interactive demo card ────────────────────────────────────────────────────
const IROWS = [
  {label:'MBA',     count:120, region:'West'},
  {label:'BSN',     count:90,  region:'East'},
  {label:'IT',      count:70,  region:'West'},
  {label:'Edu',     count:55,  region:'East'},
  {label:'Business',count:48,  region:'Central'},
  {label:'Health',  count:62,  region:'Central'}
];
const toBar = (rows) => rows.map(r => ({ label: r.label, count: r.count }));

// ── Register ECharts theme ───────────────────────────────────────────────────
if (window.echarts && WGUCharts.registerWguEchartsTheme) {
  WGUCharts.registerWguEchartsTheme(echarts);
}

// ── SAMPLES ──────────────────────────────────────────────────────────────────
const RT = ['LWC','Next','HTML'];

const SAMPLES = [
  // ── Comparison ──────────────────────────────────────────────────────────
  { type:'bar', title:'Bar (horizontal)',
    section:'Comparison', engine:'Chart.js', runtimes:RT,
    when:'Compare a value across a few categories',
    data:[{label:'MBA',count:120},{label:'BSN',count:80},{label:'IT',count:60}],
    src:"WGUCharts.mount(el,{type:'bar',data:[{label,count}]})" },

  { type:'bar', title:'Bar (vertical)',
    section:'Comparison', engine:'Chart.js', runtimes:RT,
    when:'Compare categories with a vertical orientation',
    opts:{orientation:'vertical'},
    data:[{label:'Q1',count:30},{label:'Q2',count:55},{label:'Q3',count:42}],
    src:"WGUCharts.mount(el,{type:'bar',opts:{orientation:'vertical'},data})" },

  { type:'groupedBar', title:'Bar (grouped, multi-series)',
    section:'Comparison', engine:'Chart.js', runtimes:RT,
    when:'Compare multiple series side-by-side across categories',
    labels:['Q1','Q2','Q3'],
    data:[{label:'New',data:[12,18,15]},{label:'Returning',data:[7,9,11]}],
    src:"WGUCharts.mount(el,{type:'groupedBar',labels,data:[{label,data}]})" },

  { type:'groupedBar', title:'Bar (stacked)',
    section:'Comparison', engine:'Chart.js', runtimes:RT,
    when:'Show part-to-whole and total size simultaneously',
    opts:{stacked:true}, labels:['Q1','Q2','Q3'],
    data:[{label:'New',data:[12,18,15]},{label:'Returning',data:[7,9,11]}],
    src:"WGUCharts.mount(el,{type:'groupedBar',opts:{stacked:true},labels,data})" },

  { type:'radar', title:'Radar',
    section:'Comparison', engine:'Chart.js', runtimes:RT,
    when:'Compare multiple attributes across two or more entities',
    labels:['Speed','Cost','Quality','Support'],
    data:[{label:'Vendor X',data:[3,4,5,2]},{label:'Vendor Y',data:[4,3,3,5]}],
    src:"WGUCharts.mount(el,{type:'radar',labels,data})" },

  // ── Trend ───────────────────────────────────────────────────────────────
  { type:'line', title:'Line (multi-series, area)',
    section:'Trend', engine:'Chart.js', runtimes:RT,
    when:'Show change over time across multiple series',
    labels:['W1','W2','W3','W4'],
    data:[{label:'Sessions',data:[10,20,15,28]},{label:'People',data:[5,8,9,12]}],
    src:"WGUCharts.mount(el,{type:'line',labels,data:[{label,data}]})" },

  { type:'line', title:'Line (stepped)',
    section:'Trend', engine:'Chart.js', runtimes:RT,
    when:'Show discrete state changes or step functions over time',
    opts:{stepped:true}, labels:['W1','W2','W3','W4'],
    data:[{label:'Tickets',data:[5,9,7,12]}],
    src:"WGUCharts.mount(el,{type:'line',opts:{stepped:true},labels,data})" },

  { type:'combo', title:'Combo (bar + line)',
    section:'Trend', engine:'Chart.js', runtimes:RT,
    when:'Show volume and rate together on one chart',
    labels:['Q1','Q2','Q3'],
    data:{bar:{label:'Learners',data:[100,140,120]},line:{label:'On-track %',data:[80,85,88]}},
    src:"WGUCharts.mount(el,{type:'combo',labels,data:{bar,line}})" },

  { type:'candlestick', title:'Candlestick (financial)',
    section:'Trend', engine:'Chart.js', runtimes:RT,
    when:'Display open/high/low/close price ranges over time',
    data:[{x:'Mon',o:100,h:112,l:96,c:108},{x:'Tue',o:108,h:115,l:104,c:106},{x:'Wed',o:106,h:118,l:103,c:117},{x:'Thu',o:117,h:121,l:110,c:112},{x:'Fri',o:112,h:120,l:108,c:119}],
    src:"WGUCharts.mount(el,{type:'candlestick',data:[{x,o,h,l,c}]})" },

  // ── Composition ─────────────────────────────────────────────────────────
  { type:'doughnut', title:'Doughnut',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Part-to-whole breakdown with a few slices',
    data:[{label:'Applied',count:227},{label:'Intenders',count:250}],
    src:"WGUCharts.mount(el,{type:'doughnut',data})" },

  { type:'pie', title:'Pie',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Show proportions when all slices must sum to 100%',
    data:[{label:'A',count:40},{label:'B',count:35},{label:'C',count:25}],
    src:"WGUCharts.mount(el,{type:'pie',data})" },

  { type:'doughnut', title:'Doughnut (thin ring)',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Compact progress ring for a single metric',
    opts:{cutout:'88%'},
    data:[{label:'Done',count:72},{label:'Left',count:28}],
    src:"WGUCharts.mount(el,{type:'doughnut',opts:{cutout:'88%'},data})" },

  { type:'polarArea', title:'Polar area',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Compare magnitude across categories in a circular layout',
    data:[{label:'A',count:3},{label:'B',count:7},{label:'C',count:5}],
    src:"WGUCharts.mount(el,{type:'polarArea',data})" },

  { type:'treemap', title:'Treemap (Chart.js)',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Visualize hierarchical data by area — nested proportions',
    data:[{label:'MBA',value:120},{label:'BSN',value:90},{label:'IT',value:70},{label:'Edu',value:50},{label:'Business',value:40}],
    src:"WGUCharts.mount(el,{type:'treemap',data:[{label,value}]})" },

  { type:'wordCloud', title:'Word cloud',
    section:'Composition', engine:'Chart.js', runtimes:RT,
    when:'Show term frequency from free-text data at a glance',
    data:[{text:'WGU',weight:48},{text:'Owls',weight:30},{text:'Partners',weight:26},{text:'Outcomes',weight:22},{text:'Growth',weight:18},{text:'Pathways',weight:16},{text:'Enroll',weight:14}],
    src:"WGUCharts.mount(el,{type:'wordCloud',data:[{text,weight}]})" },

  { type:'echartsTreemap', title:'Treemap (ECharts)',
    section:'Composition', engine:'ECharts', runtimes:RT,
    when:'Rich-interactive hierarchical treemap with zoom and labels',
    build:(el) => {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.treemapOption([
        {name:'MBA',value:120},{name:'BSN',value:90},{name:'IT',value:70},
        {name:'Edu',value:50},{name:'Business',value:40}
      ]));
    },
    src:"WGUCharts.treemapOption([{name,value}])" },

  // ── Distribution ─────────────────────────────────────────────────────────
  { type:'scatter', title:'Scatter',
    section:'Distribution', engine:'Chart.js', runtimes:RT,
    when:'Reveal correlations or clusters between two variables',
    data:[{label:'Cohort',points:[{x:1,y:2},{x:3,y:5},{x:4,y:3},{x:6,y:7}]}],
    src:"WGUCharts.mount(el,{type:'scatter',data:[{label,points}]})" },

  { type:'bubble', title:'Bubble',
    section:'Distribution', engine:'Chart.js', runtimes:RT,
    when:'Add a third dimension (size) to a scatter plot',
    data:[{label:'Programs',points:[{x:1,y:2,r:10},{x:3,y:5,r:18},{x:5,y:3,r:8}]}],
    src:"WGUCharts.mount(el,{type:'bubble',data:[{label,points}]})" },

  { type:'boxplot', title:'Box plot',
    section:'Distribution', engine:'Chart.js', runtimes:RT,
    when:'Summarize spread, median and outliers of a dataset',
    labels:['Cohort A','Cohort B','Cohort C'],
    data:[[62,70,75,80,88],[55,65,72,78,90],[60,68,74,82,95]],
    src:"WGUCharts.mount(el,{type:'boxplot',labels,data:number[][]})" },

  { type:'barWithErrorBars', title:'Bar with error bars',
    section:'Distribution', engine:'Chart.js', runtimes:RT,
    when:'Show confidence intervals or variability alongside bar values',
    labels:['Q1','Q2','Q3'],
    data:[{y:80,yMin:72,yMax:88},{y:92,yMin:85,yMax:99},{y:104,yMin:95,yMax:112}],
    src:"WGUCharts.mount(el,{type:'barWithErrorBars',labels,data:[{y,yMin,yMax}]})" },

  { type:'matrix', title:'Heatmap (matrix)',
    section:'Distribution', engine:'Chart.js', runtimes:RT,
    when:'Show intensity of a value across two categorical dimensions',
    data:[{x:'Mon',y:'AM',v:3},{x:'Mon',y:'PM',v:8},{x:'Tue',y:'AM',v:5},{x:'Tue',y:'PM',v:6},{x:'Wed',y:'AM',v:2},{x:'Wed',y:'PM',v:9}],
    opts:{xLabels:['Mon','Tue','Wed'],yLabels:['AM','PM']},
    src:"WGUCharts.mount(el,{type:'matrix',data:[{x,y,v}],opts:{xLabels,yLabels}})" },

  { type:'echartsHeatmap', title:'Heatmap (ECharts)',
    section:'Distribution', engine:'ECharts', runtimes:RT,
    when:'Continuous-color heatmap with interactive visualMap legend',
    build:(el) => {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.heatmapOption(
        ['Mon','Tue','Wed','Thu','Fri'],
        ['Morning','Afternoon','Evening'],
        [[0,0,5],[0,1,3],[0,2,8],[1,0,7],[1,1,2],[1,2,9],[2,0,4],[2,1,6],[2,2,1],[3,0,9],[3,1,5],[3,2,3],[4,0,2],[4,1,8],[4,2,6]],
        {max:10}
      ));
    },
    src:"WGUCharts.heatmapOption(xLabels,yLabels,data,{max})" },

  // ── Relationships & flows ─────────────────────────────────────────────────
  { type:'sankey', title:'Sankey (Chart.js)',
    section:'Relationships & flows', engine:'Chart.js', runtimes:RT,
    when:'Show how a quantity flows between stages or nodes',
    data:[{from:'Leads',to:'Apps',flow:120},{from:'Apps',to:'Enrolled',flow:80},{from:'Apps',to:'Lost',flow:40}],
    src:"WGUCharts.mount(el,{type:'sankey',data:[{from,to,flow}]})" },

  { type:'echartsSankey', title:'Sankey (ECharts)',
    section:'Relationships & flows', engine:'ECharts', runtimes:RT,
    when:'Rich multi-level flow diagram with gradient link styling',
    build:(el) => {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.sankeyOption(
        [{name:'Leads'},{name:'Apps'},{name:'Enrolled'},{name:'Lost'},{name:'Deferred'}],
        [{source:'Leads',target:'Apps',value:200},{source:'Apps',target:'Enrolled',value:120},{source:'Apps',target:'Lost',value:50},{source:'Apps',target:'Deferred',value:30}]
      ));
    },
    src:"WGUCharts.sankeyOption(nodes,links)" },

  { type:'echartsGraph', title:'Graph (ECharts)',
    section:'Relationships & flows', engine:'ECharts', runtimes:RT,
    when:'Explore network relationships with a force-directed layout',
    build:(el) => {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.graphOption(
        [{name:'WGU'},{name:'Health'},{name:'Business'},{name:'IT'},{name:'Education'},{name:'MBA'}],
        [{source:'WGU',target:'Health'},{source:'WGU',target:'Business'},{source:'WGU',target:'IT'},{source:'WGU',target:'Education'},{source:'Business',target:'MBA'},{source:'Health',target:'MBA'}]
      ));
    },
    src:"WGUCharts.graphOption(nodes,links)" },

  // ── Geographic ───────────────────────────────────────────────────────────
  { type:'choropleth', title:'Choropleth (render-model)',
    section:'Geographic', engine:'SVG render-model', runtimes:RT,
    when:'A metric shaded by US state — no external libs required',
    data:[{state:'TX',count:120},{state:'CA',count:90},{state:'FL',count:70},{state:'NY',count:55},{state:'UT',count:140}],
    src:"WGUCharts.mount(el,{type:'choropleth',data:[{state,count}]})" },

  { type:'bubbleMap', title:'Geo bubble map (Chart.js)',
    section:'Geographic', engine:'Chart.js', runtimes:RT,
    when:'Proportional bubbles on a US map via chartjs-chart-geo',
    data:null, special:'geo',
    src:"WGUCharts.mount(el,{type:'bubbleMap',data:{outline,states,points}})" },

  { type:'echartsGeo', title:'Geo choropleth (ECharts)',
    section:'Geographic', engine:'ECharts', runtimes:RT,
    when:'Full-resolution US state choropleth with ECharts visualMap',
    special:'echartsGeo',
    src:"WGUCharts.geoChoroplethOption(data,{max})" },

  // ── KPI & status ─────────────────────────────────────────────────────────
  { type:'funnel', title:'Funnel',
    section:'KPI & status', engine:'SVG render-model', runtimes:RT,
    when:'Show drop-off rates through a sequential conversion funnel',
    data:[{stage:'01',label:'Intenders',value:250,connector:'91%'},{stage:'02',label:'Applicants',value:227,connector:'88%'},{stage:'03',label:'Enrolled',value:200}],
    src:"WGUCharts.mount(el,{type:'funnel',data:[{stage,label,value,connector}]})" },

  { type:'gauge', title:'Gauge',
    section:'KPI & status', engine:'SVG render-model', runtimes:RT,
    when:'A single value vs a target — full circular dial',
    data:{label:'Conversion',percent:90.8,sub:'CVS partners'},
    src:"WGUCharts.mount(el,{type:'gauge',data:{label,percent,sub}})" },

  { type:'gauge', title:'Gauge (half, % to target)',
    section:'KPI & status', engine:'SVG render-model', runtimes:RT,
    when:'Half-dial gauge for a percentage-of-target metric',
    data:{label:'% to Target', variant:'half', value:110, min:0, max:150, thresholds:[80,99], unit:'%'},
    src:"WGUCharts.mount(el,{type:'gauge',data:{variant:'half',value,min,max,thresholds}})" },

  { type:'gauge', title:'Gauge (half, days-since)',
    section:'KPI & status', engine:'SVG render-model', runtimes:RT,
    when:'Half-dial gauge with custom zone colors for time-based alerts',
    data:{label:'Days Since Activity', variant:'half', value:22, min:0, max:100, thresholds:[30,60], zoneColors:['#97E152','#F5A623','#E5484D']},
    src:"WGUCharts.mount(el,{type:'gauge',data:{variant:'half',zoneColors:[green,amber,red]}})" },

  { type:'kpi', title:'KPI tile',
    section:'KPI & status', engine:'SVG render-model', runtimes:RT,
    when:'Headline number with delta and sparkline trend',
    data:{label:'Currently enrolled',value:'227',sub:'this term',delta:'+9% vs last term',deltaUp:true,trend:[180,195,205,210,227]},
    src:"WGUCharts.mount(el,{type:'kpi',data:{label,value,delta,trend}})" },

  { type:'echartsGauge', title:'Gauge (ECharts)',
    section:'KPI & status', engine:'ECharts', runtimes:RT,
    when:'Animated gauge with color-coded threshold zones',
    build:(el) => {
      const chart = echarts.init(el, 'wgu');
      chart.setOption(WGUCharts.gaugeOption({value:76, min:0, max:100, name:'Completion', thresholds:[53,66]}));
    },
    src:"WGUCharts.gaugeOption({value,min,max,name,thresholds})" },

  // ── Tables ───────────────────────────────────────────────────────────────
  { type:'scoreTable', title:'Score table (Advancers)',
    section:'Tables', engine:'SVG render-model', runtimes:RT,
    when:'Ranked table with color-band rows for at-a-glance status',
    data:{ columns:[{key:'acct',label:'Account'},{key:'vert',label:'Vertical'},{key:'pct',label:'% to Target',align:'right'}],
      rows:[{acct:'Acme Health',vert:'Healthcare',pct:128},{acct:'Globex',vert:'Business',pct:104},{acct:'Initech',vert:'IT',pct:71}],
      bandColumn:'pct', bands:[{min:0,color:'#FDE2E1'},{min:80,color:'#FFF3D6'},{min:100,color:'#E6F6D9'}] },
    src:"WGUCharts.mount(el,{type:'scoreTable',data:{columns,rows,bandColumn,bands}})" }
];

// ── Section order ────────────────────────────────────────────────────────────
const SECTION_ORDER = [
  'Comparison','Trend','Composition','Distribution',
  'Relationships & flows','Geographic','KPI & status','Tables'
];

const RENDER_MODEL = new Set(['funnel','gauge','kpi','choropleth','scoreTable']);
const ECHARTS_TYPES = new Set(['echartsTreemap','echartsHeatmap','echartsSankey','echartsGraph','echartsGeo','echartsGauge']);

// ── Build Interactive card ───────────────────────────────────────────────────
(function buildInteractiveCard() {
  const grid = document.getElementById('grid');

  grid.insertAdjacentHTML('beforeend', '<h2 class="section">Interactive</h2>');

  const card = document.createElement('div');
  card.className = 'card card--wide';

  const regionOpts = WGUCharts.deriveFilterOptions(IROWS, 'region');
  const optionsHTML = [{ value: 'all', label: 'All regions' }, ...regionOpts]
    .map(o => `<option value="${o.value}">${o.label}</option>`).join('');

  card.innerHTML = `
    <div class="badges">
      <span class="chip">Chart.js</span>
      <span class="chip chip--rt">&#10003; LWC</span>
      <span class="chip chip--rt">&#10003; Next</span>
      <span class="chip chip--rt">&#10003; HTML</span>
    </div>
    <h3>Interactive — filter · click · live</h3>
    <p class="when">Filter, click-to-drill, and live update</p>
    <div class="icontrols">
      <select id="iRegionSel">${optionsHTML}</select>
      <button id="iRandBtn">Randomize</button>
    </div>
    <div class="canvas-wrap"><canvas id="ic"></canvas></div>
    <p class="istatus">Click a bar…</p>
  `;

  grid.appendChild(card);

  const ih = WGUCharts.mount('#ic', {
    type: 'bar',
    data: toBar(IROWS),
    onClick: (hit) => {
      document.querySelector('.istatus').textContent =
        `Clicked: ${hit.label} — ${hit.value}`;
    }
  });

  const sel = document.getElementById('iRegionSel');
  sel.addEventListener('change', () => {
    const v = sel.value;
    const rows = v === 'all' ? IROWS : WGUCharts.applyFilters(IROWS, { region: [v] });
    ih.update(toBar(rows));
    document.querySelector('.istatus').textContent =
      v === 'all' ? 'Showing all regions' : `Filtered: ${v}`;
  });

  const btn = document.getElementById('iRandBtn');
  btn.addEventListener('click', () => {
    ih.update(IROWS.map(r => ({
      label: r.label,
      count: Math.max(5, Math.round(r.count * (0.5 + Math.random())))
    })));
    document.querySelector('.istatus').textContent = 'Randomized (live update)';
  });
})();

// ── Render gallery grouped by section ───────────────────────────────────────
const grid = document.getElementById('grid');
let cardIndex = 0;
const echartsGeoEl = { id: null };

SECTION_ORDER.forEach(section => {
  const sectionSamples = SAMPLES.filter(s => s.section === section);
  if (!sectionSamples.length) return;

  grid.insertAdjacentHTML('beforeend', `<h2 class="section">${section}</h2>`);

  sectionSamples.forEach(s => {
    const i = cardIndex++;
    const id = 'c' + i;
    const card = document.createElement('div');
    card.className = 'card';

    // Badges
    const engineChip = `<span class="chip">${s.engine}</span>`;
    const rtChips = (s.runtimes || []).map(rt => `<span class="chip chip--rt">&#10003; ${rt}</span>`).join('');
    const badges = `<div class="badges">${engineChip}${rtChips}</div>`;

    // Mount element
    const isGeoChartjs = s.special === 'geo';
    const isEchartsGeo = s.special === 'echartsGeo';
    const isEcharts = ECHARTS_TYPES.has(s.type);
    const isRenderModel = RENDER_MODEL.has(s.type);

    let mountEl;
    if (isEchartsGeo) {
      echartsGeoEl.id = id;
      mountEl = `<div id="${id}" class="echarts-mount"></div>`;
    } else if (isEcharts) {
      mountEl = `<div id="${id}" class="echarts-mount"></div>`;
    } else if (isRenderModel) {
      mountEl = `<div id="${id}" class="rm-mount"></div>`;
    } else if (isGeoChartjs) {
      mountEl = `<div class="canvas-wrap"><canvas id="geo"></canvas></div>`;
    } else {
      mountEl = `<div class="canvas-wrap"><canvas id="${id}"></canvas></div>`;
    }

    card.innerHTML = `${badges}<h3>${s.title}</h3><p class="when">${s.when}</p><p class="spec">${s.src}</p>${mountEl}`;
    grid.appendChild(card);

    // Mount
    if (isEchartsGeo) {
      // handled after loop
    } else if (isEcharts && s.build) {
      const el = document.getElementById(id);
      if (el) s.build(el);
    } else if (!isGeoChartjs) {
      WGUCharts.mount('#' + (isRenderModel ? id : id), { type: s.type, data: s.data, labels: s.labels, opts: s.opts });
    }
  });
});

// ── Geo bubble map (Chart.js) ────────────────────────────────────────────────
fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
  .then(r => r.json())
  .then(us => {
    const states = topojson.feature(us, us.objects.states).features;
    const nation = topojson.feature(us, us.objects.nation);
    WGUCharts.mount('#geo', { type: 'bubbleMap', data: { outline: nation, states,
      points: [
        { name: 'TX', x: -99,  y: 31, value: 120 },
        { name: 'CA', x: -119, y: 36, value: 90  },
        { name: 'FL', x: -81,  y: 27, value: 70  },
        { name: 'NY', x: -75,  y: 43, value: 55  },
        { name: 'UT', x: -111, y: 39, value: 140 }
      ] } });
  })
  .catch(() => {
    const el = document.getElementById('geo');
    if (el) el.parentElement.insertAdjacentHTML('beforeend',
      '<p style="color:#888;font:12px sans-serif">geo map needs internet (us-atlas topojson)</p>');
  });

// ── ECharts geo choropleth ───────────────────────────────────────────────────
if (echartsGeoEl.id && window.echarts) {
  fetch('https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI@master/data/geojson/us-states.json')
    .then(r => r.json())
    .then(geojson => {
      echarts.registerMap('USA', geojson);
      const el = document.getElementById(echartsGeoEl.id);
      if (el) {
        echarts.init(el, 'wgu').setOption(
          WGUCharts.geoChoroplethOption([
            {name:'Texas',value:120},{name:'California',value:90},
            {name:'Florida',value:70},{name:'New York',value:55},
            {name:'Utah',value:140},{name:'Arizona',value:60}
          ], {max:140})
        );
      }
    })
    .catch(() => {
      const el = document.getElementById(echartsGeoEl.id);
      if (el) el.insertAdjacentHTML('beforeend',
        '<p style="color:#888;font:12px sans-serif;padding:8px">geo map needs internet (GeoJSON)</p>');
    });
}

// ── Dark mode toggle ─────────────────────────────────────────────────────────
document.getElementById('modeToggle').addEventListener('click', () => {
  const b = document.body;
  b.dataset.mode = b.dataset.mode === 'dark' ? 'light' : 'dark';
});
