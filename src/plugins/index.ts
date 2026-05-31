import type { Plugin } from 'chart.js';
import { wguTheme } from '../theme';

const FF = wguTheme.font.family;

export const pBarLabels: Plugin = {
  id: 'pBarLabels',
  afterDatasetsDraw(ch: any) {
    if (ch.config.type !== 'bar' || ch.options.indexAxis !== 'y') return;
    const ctx = ch.ctx, ds = ch.data.datasets[0];
    ctx.save();
    ctx.font = '700 12.5px ' + FF;
    ctx.fillStyle = wguTheme.colors.fg2;
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ch.getDatasetMeta(0).data.forEach((bar: any, i: number) => {
      ctx.fillText(Number(ds.data[i]).toLocaleString('en-US'), bar.x + 8, bar.y);
    });
    ctx.restore();
  }
};

export const pPointLabels: Plugin = {
  id: 'pPointLabels',
  afterDatasetsDraw(ch: any) {
    if (ch.config.type !== 'line') return;
    const ctx = ch.ctx;
    ctx.save();
    ctx.font = '700 11px ' + FF; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ch.data.datasets.forEach((dset: any, di: number) => {
      if (ch.isDatasetVisible && !ch.isDatasetVisible(di)) return;
      ctx.fillStyle = dset.borderColor;
      ch.getDatasetMeta(di).data.forEach((pt: any, i: number) => {
        ctx.fillText(dset.data[i], pt.x, pt.y - 9);
      });
    });
    ctx.restore();
  }
};

export const pCrosshair: Plugin = {
  id: 'pCrosshair',
  afterDraw(ch: any) {
    if (ch.config.type !== 'line') return;
    const act = ch.getActiveElements ? ch.getActiveElements() : [];
    if (!act.length) return;
    const x = act[0].element.x, a = ch.chartArea, ctx = ch.ctx;
    ctx.save();
    ctx.beginPath(); ctx.moveTo(x, a.top); ctx.lineTo(x, a.bottom);
    ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(0,40,85,.22)';
    ctx.stroke(); ctx.restore();
  }
};

export const wguPlugins = [pBarLabels, pPointLabels, pCrosshair];
