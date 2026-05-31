import type { Plugin } from 'chart.js';
import { wguTheme } from '../theme';

type AnyChart = import('chart.js').Chart<any, any, any>;

const FF = wguTheme.font.family;

export const pBarLabels: Plugin = {
  id: 'pBarLabels',
  afterDatasetsDraw(ch: AnyChart) {
    const c = ch as any;
    if (c.config.type !== 'bar' || c.options.indexAxis !== 'y') return;
    const ctx = c.ctx, ds = c.data.datasets[0];
    if (!ds) return;
    ctx.save();
    ctx.font = '700 12.5px ' + FF;
    ctx.fillStyle = wguTheme.colors.fg2;
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    c.getDatasetMeta(0).data.forEach((bar: any, i: number) => {
      ctx.fillText(Number(ds.data[i]).toLocaleString('en-US'), bar.x + 8, bar.y);
    });
    ctx.restore();
  }
};

export const pPointLabels: Plugin = {
  id: 'pPointLabels',
  afterDatasetsDraw(ch: AnyChart) {
    const c = ch as any;
    if (c.config.type !== 'line') return;
    const ctx = c.ctx;
    ctx.save();
    ctx.font = '700 11px ' + FF; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    c.data.datasets.forEach((dset: any, di: number) => {
      if (c.isDatasetVisible && !c.isDatasetVisible(di)) return;
      ctx.fillStyle = dset.borderColor;
      c.getDatasetMeta(di).data.forEach((pt: any, i: number) => {
        ctx.fillText(Number(dset.data[i]).toLocaleString('en-US'), pt.x, pt.y - 9);
      });
    });
    ctx.restore();
  }
};

export const pCrosshair: Plugin = {
  id: 'pCrosshair',
  afterDraw(ch: AnyChart) {
    const c = ch as any;
    if (c.config.type !== 'line') return;
    const act = c.getActiveElements ? c.getActiveElements() : [];
    if (!act.length) return;
    const x = act[0].element.x, a = c.chartArea, ctx = c.ctx;
    ctx.save();
    ctx.beginPath(); ctx.moveTo(x, a.top); ctx.lineTo(x, a.bottom);
    ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(0,40,85,.22)';
    ctx.stroke(); ctx.restore();
  }
};

export const wguPlugins: Plugin[] = [pBarLabels, pPointLabels, pCrosshair];
