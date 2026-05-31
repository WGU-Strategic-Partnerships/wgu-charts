import { wguTheme } from '../../theme';
import { cloneArr, baseTooltip } from '../_shared';

export interface HeatmapDatum { x: string; y: string; v: number; }
export interface HeatmapOptions {
  label?: string;
  xLabels?: string[];
  yLabels?: string[];
  max?: number;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// Heat ramp: light-blue [200,224,245] -> sky [70,177,239] -> medium [0,112,240] -> navy [3,40,100]
function heat(t: number): string {
  t = Math.max(0, Math.min(1, t));
  const cs = [[200, 224, 245], [70, 177, 239], [0, 112, 240], [3, 40, 100]];
  const seg = t * (cs.length - 1);
  const i = Math.min(Math.floor(seg), cs.length - 2);
  const f = seg - i;
  const c = cs[i];
  const d = cs[i + 1];
  return 'rgb(' +
    Math.round(lerp(c[0], d[0], f)) + ',' +
    Math.round(lerp(c[1], d[1], f)) + ',' +
    Math.round(lerp(c[2], d[2], f)) + ')';
}

export function heatmapChart(data: HeatmapDatum[], opts?: HeatmapOptions): any {
  const cloned = cloneArr(data);
  const rawMax = data.length ? Math.max(...data.map((d) => d.v)) : 0;
  const max = (opts?.max != null ? opts.max : rawMax) || 1;
  const xLabels = opts?.xLabels;
  const yLabels = opts?.yLabels;
  const fg2 = wguTheme.colors.fg2;

  return {
    type: 'matrix',
    data: {
      datasets: [{
        label: opts?.label || '',
        data: cloned,
        backgroundColor: (ctx: any) => heat((ctx.raw ? ctx.raw.v : 0) / max),
        borderColor: '#fff',
        borderWidth: 1,
        width: (ctx: any) => {
          const chart = ctx.chart;
          return ((chart.chartArea?.width || 0) / (xLabels?.length || 1)) - 2;
        },
        height: (ctx: any) => {
          const chart = ctx.chart;
          return ((chart.chartArea?.height || 0) / (yLabels?.length || 1)) - 2;
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
            title: () => '',
            label: (c: any) => ` ${c.raw?.x}, ${c.raw?.y}, ${c.raw?.v}`
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          labels: xLabels,
          grid: { display: false },
          ticks: { color: fg2 }
        },
        y: {
          type: 'category',
          labels: yLabels,
          grid: { display: false },
          ticks: { color: fg2 }
        }
      }
    }
  };
}
