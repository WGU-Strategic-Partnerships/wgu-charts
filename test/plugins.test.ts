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
});
