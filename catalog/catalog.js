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
];

const grid = document.getElementById('grid');
SAMPLES.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${s.title}</h3><p class="spec">${s.src}</p>
    <div class="canvas-wrap"><canvas id="c${i}"></canvas></div>`;
  grid.appendChild(card);
  WGUCharts.mount('#c' + i, { type: s.type, data: s.data, labels: s.labels, opts: s.opts });
});

document.getElementById('modeToggle').addEventListener('click', () => {
  const b = document.body;
  b.dataset.mode = b.dataset.mode === 'dark' ? 'light' : 'dark';
});
