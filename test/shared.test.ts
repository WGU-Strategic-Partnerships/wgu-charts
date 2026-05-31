import { describe, it, expect } from 'vitest';
import { cloneArr, baseTooltip, baseAnimation } from '../src/charts/_shared';

describe('shared helpers', () => {
  it('cloneArr returns a NEW array with same contents', () => {
    const src = [1, 2, 3];
    const out = cloneArr(src);
    expect(out).toEqual([1, 2, 3]);
    expect(out).not.toBe(src);
  });
  it('cloneArr tolerates non-arrays', () => {
    expect(cloneArr(undefined as any)).toEqual([]);
  });
  it('baseTooltip uses the navy background', () => {
    expect(baseTooltip().backgroundColor).toBe('#002855');
  });
  it('baseAnimation has a duration', () => {
    expect(baseAnimation().duration).toBeGreaterThan(0);
  });
});
