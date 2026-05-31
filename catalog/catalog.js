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
];

const RENDER_MODEL = new Set(['funnel','gauge','kpi','choropleth','scoreTable']);
const grid = document.getElementById('grid');
SAMPLES.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  const mountEl = RENDER_MODEL.has(s.type) ? `<div id="c${i}" class="rm-mount"></div>` : `<div class="canvas-wrap"><canvas id="c${i}"></canvas></div>`;
  card.innerHTML = `<h3>${s.title}</h3><p class="spec">${s.src}</p>${mountEl}`;
  grid.appendChild(card);
  WGUCharts.mount('#c' + i, { type: s.type, data: s.data, labels: s.labels, opts: s.opts });
});

document.getElementById('modeToggle').addEventListener('click', () => {
  const b = document.body;
  b.dataset.mode = b.dataset.mode === 'dark' ? 'light' : 'dark';
});
