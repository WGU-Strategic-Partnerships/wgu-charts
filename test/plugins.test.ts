import { describe, it, expect, vi } from 'vitest';
import { pBarLabels, pPointLabels, pCrosshair, wguPlugins } from '../src/plugins';

const fakeCtx = () => ({ save: vi.fn(), restore: vi.fn(), fillText: vi.fn(), beginPath: vi.fn(),
  moveTo: vi.fn(), lineTo: vi.fn(), stroke: vi.fn(), setLineDash: vi.fn(),
  font: '', fillStyle: '', textAlign: '', textBaseline: '', lineWidth: 0, strokeStyle: '' });

describe('plugins', () => {
  it('expose stable ids', () => {
    expect(pBarLabels.id).toBe('pBarLabels');
    expect(pPointLabels.id).toBe('pPointLabels');
    expect(pCrosshair.id).toBe('pCrosshair');
    expect(wguPlugins).toEqual([pBarLabels, pPointLabels, pCrosshair]);
  });
  it('pBarLabels is a no-op for non-horizontal-bar charts', () => {
    const ctx = fakeCtx();
    pBarLabels.afterDatasetsDraw({ config: { type: 'line' }, options: {}, ctx } as any);
    expect(ctx.fillText).not.toHaveBeenCalled();
  });
  it('pCrosshair is a no-op when no active elements', () => {
    const ctx = fakeCtx();
    pCrosshair.afterDraw({ config: { type: 'line' }, getActiveElements: () => [], ctx } as any);
    expect(ctx.stroke).not.toHaveBeenCalled();
  });

  it('pBarLabels draws value labels for a horizontal bar chart', () => {
    const ctx = fakeCtx();
    const ch = {
      config: { type: 'bar' },
      options: { indexAxis: 'y' },
      data: { datasets: [{ data: [5, 9] }] },
      ctx,
      getDatasetMeta: () => ({ data: [{ x: 10, y: 20 }, { x: 10, y: 40 }] })
    };
    pBarLabels.afterDatasetsDraw(ch as any);
    expect(ctx.fillText).toHaveBeenCalled();
    expect(ctx.fillText).toHaveBeenCalledTimes(2);
  });

  it('pPointLabels draws labels for a line chart', () => {
    const ctx = fakeCtx();
    const ch = {
      config: { type: 'line' },
      data: { datasets: [{ borderColor: '#0070F0', data: [1, 2] }] },
      getDatasetMeta: () => ({ data: [{ x: 1, y: 2 }, { x: 3, y: 4 }] }),
      isDatasetVisible: () => true,
      ctx
    };
    pPointLabels.afterDatasetsDraw(ch as any);
    expect(ctx.fillText).toHaveBeenCalledTimes(2);
  });

  it('pCrosshair strokes when there is an active element', () => {
    const ctx = fakeCtx();
    const ch = {
      config: { type: 'line' },
      getActiveElements: () => [{ element: { x: 50 } }],
      chartArea: { top: 0, bottom: 100 },
      ctx
    };
    pCrosshair.afterDraw(ch as any);
    expect(ctx.stroke).toHaveBeenCalled();
  });
});
