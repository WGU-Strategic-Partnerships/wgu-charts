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

(function buildInteractiveCard() {
  const grid = document.getElementById('grid');

  // Build card element
  const card = document.createElement('div');
  card.className = 'card card--wide';

  // Region filter options from deriveFilterOptions
  const regionOpts = WGUCharts.deriveFilterOptions(IROWS, 'region');
  const optionsHTML = [{ value: 'all', label: 'All regions' }, ...regionOpts]
    .map(o => `<option value="${o.value}">${o.label}</option>`).join('');

  card.innerHTML = `
    <h3>Interactive — filter · click · live</h3>
    <div class="icontrols">
      <select id="iRegionSel">${optionsHTML}</select>
      <button id="iRandBtn">Randomize</button>
    </div>
    <div class="canvas-wrap"><canvas id="ic"></canvas></div>
    <p class="istatus">Click a bar…</p>
  `;

  grid.appendChild(card);

  // Mount chart with onClick callback
  const ih = WGUCharts.mount('#ic', {
    type: 'bar',
    data: toBar(IROWS),
    onClick: (hit) => {
      document.querySelector('.istatus').textContent =
        `Clicked: ${hit.label} — ${hit.value}`;
    }
  });

  // Filter handler
  const sel = document.getElementById('iRegionSel');
  sel.addEventListener('change', () => {
    const v = sel.value;
    const rows = v === 'all' ? IROWS : WGUCharts.applyFilters(IROWS, { region: [v] });
    ih.update(toBar(rows));
    document.querySelector('.istatus').textContent =
      v === 'all' ? 'Showing all regions' : `Filtered: ${v}`;
  });

  // Randomize / live-update handler
  const btn = document.getElementById('iRandBtn');
  btn.addEventListener('click', () => {
    ih.update(IROWS.map(r => ({
      label: r.label,
      count: Math.max(5, Math.round(r.count * (0.5 + Math.random())))
    })));
    document.querySelector('.istatus').textContent = 'Randomized (live update)';
  });
})();
// ── Sample gallery ───────────────────────────────────────────────────────────

const SAMPLES = [
  { type:'bar', title:'Bar (horizontal)', data:[{label:'MBA',count:120},{label:'BSN',count:80},{label:'IT',count:60}],
    src:"WGUCharts.mount(el,{type:'bar',data:[{label,count}]})" },
  { type:'bar', title:'Bar (vertical)', opts:{orientation:'vertical'}, data:[{label:'Q1',count:30},{label:'Q2',count:55},{label:'Q3',count:42}],
    src:"WGUCharts.mount(el,{type:'bar',opts:{orientation:'vertical'},data})" },
  { type:'line', title:'Line (multi-series, area)', labels:['W1','W2','W3','W4'],
    data:[{label:'Sessions',data:[10,20,15,28]},{label:'People',data:[5,8,9,12]}],
    src:"WGUCharts.mount(el,{type:'line',labels,data:[{label,data}]})" },
  { type:'combo', title:'Combo (bar + line)', labels:['Q1','Q2','Q3'],
    data:{bar:{label:'Learners',data:[100,140,120]},line:{label:'On-track %',data:[80,85,88]}},
    src:"WGUCharts.mount(el,{type:'combo',labels,data:{bar,line}})" },
  { type:'doughnut', title:'Doughnut', data:[{label:'Applied',count:227},{label:'Intenders',count:250}],
    src:"WGUCharts.mount(el,{type:'doughnut',data})" },
  { type:'pie', title:'Pie', data:[{label:'A',count:40},{label:'B',count:35},{label:'C',count:25}],
    src:"WGUCharts.mount(el,{type:'pie',data})" },
  { type:'polarArea', title:'Polar area', data:[{label:'A',count:3},{label:'B',count:7},{label:'C',count:5}],
    src:"WGUCharts.mount(el,{type:'polarArea',data})" },
  { type:'radar', title:'Radar', labels:['Speed','Cost','Quality','Support'],
    data:[{label:'Vendor X',data:[3,4,5,2]},{label:'Vendor Y',data:[4,3,3,5]}],
    src:"WGUCharts.mount(el,{type:'radar',labels,data})" },
  { type:'scatter', title:'Scatter', data:[{label:'Cohort',points:[{x:1,y:2},{x:3,y:5},{x:4,y:3},{x:6,y:7}]}],
    src:"WGUCharts.mount(el,{type:'scatter',data:[{label,points}]})" },
  { type:'bubble', title:'Bubble', data:[{label:'Programs',points:[{x:1,y:2,r:10},{x:3,y:5,r:18},{x:5,y:3,r:8}]}],
    src:"WGUCharts.mount(el,{type:'bubble',data:[{label,points}]})" }
,{ type:'groupedBar', title:'Bar (grouped, multi-series)', labels:['Q1','Q2','Q3'],
  data:[{label:'New',data:[12,18,15]},{label:'Returning',data:[7,9,11]}],
  src:"WGUCharts.mount(el,{type:'groupedBar',labels,data:[{label,data}]})" }
,{ type:'groupedBar', title:'Bar (stacked)', opts:{stacked:true}, labels:['Q1','Q2','Q3'],
  data:[{label:'New',data:[12,18,15]},{label:'Returning',data:[7,9,11]}],
  src:"WGUCharts.mount(el,{type:'groupedBar',opts:{stacked:true},labels,data})" }
,{ type:'line', title:'Line (stepped)', opts:{stepped:true}, labels:['W1','W2','W3','W4'],
  data:[{label:'Tickets',data:[5,9,7,12]}],
  src:"WGUCharts.mount(el,{type:'line',opts:{stepped:true},labels,data})" }
,{ type:'doughnut', title:'Doughnut (thin ring)', opts:{cutout:'88%'}, data:[{label:'Done',count:72},{label:'Left',count:28}],
  src:"WGUCharts.mount(el,{type:'doughnut',opts:{cutout:'88%'},data})" }
,{ type:'funnel', title:'Funnel', data:[{stage:'01',label:'Intenders',value:250,connector:'91%'},{stage:'02',label:'Applicants',value:227,connector:'88%'},{stage:'03',label:'Enrolled',value:200}],
  src:"WGUCharts.mount(el,{type:'funnel',data:[{stage,label,value,connector}]})" }
,{ type:'gauge', title:'Gauge', data:{label:'Conversion',percent:90.8,sub:'CVS partners'},
  src:"WGUCharts.mount(el,{type:'gauge',data:{label,percent,sub}})" }
,{ type:'kpi', title:'KPI tile', data:{label:'Currently enrolled',value:'227',sub:'this term',delta:'+9% vs last term',deltaUp:true,trend:[180,195,205,210,227]},
  src:"WGUCharts.mount(el,{type:'kpi',data:{label,value,delta,trend}})" }
,{ type:'choropleth', title:'Choropleth (US states)', data:[{state:'TX',count:120},{state:'CA',count:90},{state:'FL',count:70},{state:'NY',count:55},{state:'UT',count:140}],
  src:"WGUCharts.mount(el,{type:'choropleth',data:[{state,count}]})" }
,{ type:'gauge', title:'Gauge (half, % to target)', data:{label:'% to Target', variant:'half', value:110, min:0, max:150, thresholds:[80,99], unit:'%'},
  src:"WGUCharts.mount(el,{type:'gauge',data:{variant:'half',value,min,max,thresholds}})" }
,{ type:'gauge', title:'Gauge (half, days-since)', data:{label:'Days Since Activity', variant:'half', value:22, min:0, max:100, thresholds:[30,60], zoneColors:['#97E152','#F5A623','#E5484D']},
  src:"WGUCharts.mount(el,{type:'gauge',data:{variant:'half',zoneColors:[green,amber,red]}})" }
,{ type:'scoreTable', title:'Score table (Advancers)', data:{ columns:[{key:'acct',label:'Account'},{key:'vert',label:'Vertical'},{key:'pct',label:'% to Target',align:'right'}], rows:[{acct:'Acme Health',vert:'Healthcare',pct:128},{acct:'Globex',vert:'Business',pct:104},{acct:'Initech',vert:'IT',pct:71}], bandColumn:'pct', bands:[{min:0,color:'#FDE2E1'},{min:80,color:'#FFF3D6'},{min:100,color:'#E6F6D9'}] },
  src:"WGUCharts.mount(el,{type:'scoreTable',data:{columns,rows,bandColumn,bands}})" }
// Community plugin chart types (plugin UMDs auto-registered via CDN <script> tags before this file runs)
,{ type:'matrix', title:'Heatmap (matrix)', data:[{x:'Mon',y:'AM',v:3},{x:'Mon',y:'PM',v:8},{x:'Tue',y:'AM',v:5},{x:'Tue',y:'PM',v:6},{x:'Wed',y:'AM',v:2},{x:'Wed',y:'PM',v:9}], opts:{xLabels:['Mon','Tue','Wed'],yLabels:['AM','PM']},
  src:"WGUCharts.mount(el,{type:'matrix',data:[{x,y,v}],opts:{xLabels,yLabels}})" }
,{ type:'treemap', title:'Treemap', data:[{label:'MBA',value:120},{label:'BSN',value:90},{label:'IT',value:70},{label:'Edu',value:50},{label:'Business',value:40}],
  src:"WGUCharts.mount(el,{type:'treemap',data:[{label,value}]})" }
,{ type:'sankey', title:'Sankey', data:[{from:'Leads',to:'Apps',flow:120},{from:'Apps',to:'Enrolled',flow:80},{from:'Apps',to:'Lost',flow:40}],
  src:"WGUCharts.mount(el,{type:'sankey',data:[{from,to,flow}]})" }
,{ type:'boxplot', title:'Box plot', labels:['Cohort A','Cohort B','Cohort C'], data:[[62,70,75,80,88],[55,65,72,78,90],[60,68,74,82,95]],
  src:"WGUCharts.mount(el,{type:'boxplot',labels,data:number[][]})" }
,{ type:'barWithErrorBars', title:'Bar with error bars', labels:['Q1','Q2','Q3'], data:[{y:80,yMin:72,yMax:88},{y:92,yMin:85,yMax:99},{y:104,yMin:95,yMax:112}],
  src:"WGUCharts.mount(el,{type:'barWithErrorBars',labels,data:[{y,yMin,yMax}]})" }
,{ type:'wordCloud', title:'Word cloud', data:[{text:'WGU',weight:48},{text:'Owls',weight:30},{text:'Partners',weight:26},{text:'Outcomes',weight:22},{text:'Growth',weight:18},{text:'Pathways',weight:16},{text:'Enroll',weight:14}],
  src:"WGUCharts.mount(el,{type:'wordCloud',data:[{text,weight}]})" }
,{ type:'candlestick', title:'Candlestick (financial)', data:[{x:'Mon',o:100,h:112,l:96,c:108},{x:'Tue',o:108,h:115,l:104,c:106},{x:'Wed',o:106,h:118,l:103,c:117},{x:'Thu',o:117,h:121,l:110,c:112},{x:'Fri',o:112,h:120,l:108,c:119}],
  src:"WGUCharts.mount(el,{type:'candlestick',data:[{x,o,h,l,c}]})" }
,{ type:'bubbleMap', title:'Geo bubble map (US)', data:null, special:'geo',
  src:"WGUCharts.mount(el,{type:'bubbleMap',data:{outline,states,points}})" }
,{ type:'forceDirectedGraph', title:'Force-directed graph', data:{ nodes:[{id:'WGU'},{id:'Health'},{id:'Biz'},{id:'IT'},{id:'Edu'}], edges:[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:1,target:2}] },
  src:"WGUCharts.mount(el,{type:'forceDirectedGraph',data:{nodes,edges}})" }
];

const RENDER_MODEL = new Set(['funnel','gauge','kpi','choropleth','scoreTable']);
const grid = document.getElementById('grid');
SAMPLES.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  // Geo bubble map: give canvas a stable id="geo"; defer mount to the fetch block below
  const isGeo = s.special === 'geo' || s.type === 'bubbleMap';
  const canvasId = isGeo ? 'geo' : 'c' + i;
  const mountEl = RENDER_MODEL.has(s.type)
    ? `<div id="c${i}" class="rm-mount"></div>`
    : `<div class="canvas-wrap"><canvas id="${canvasId}"></canvas></div>`;
  card.innerHTML = `<h3>${s.title}</h3><p class="spec">${s.src}</p>${mountEl}`;
  grid.appendChild(card);
  if (!isGeo) {
    WGUCharts.mount('#c' + i, { type: s.type, data: s.data, labels: s.labels, opts: s.opts });
  }
});

// Geo bubble map: fetch US topojson from CDN and mount once data is ready
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
    if (el) el.parentElement.insertAdjacentHTML('beforeend', '<p style="color:#888;font:12px sans-serif">geo map needs internet (us-atlas topojson)</p>');
  });

document.getElementById('modeToggle').addEventListener('click', () => {
  const b = document.body;
  b.dataset.mode = b.dataset.mode === 'dark' ? 'light' : 'dark';
});
