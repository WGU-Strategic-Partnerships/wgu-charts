import { describe, it, expect } from 'vitest';
import { wguTheme, createTheme } from '../src/theme';

describe('wguTheme', () => {
  it('exposes core WGU brand colors', () => {
    expect(wguTheme.colors.navy).toBe('#002855');
    expect(wguTheme.colors.medium).toBe('#0070F0');
    expect(wguTheme.colors.lime).toBe('#97E152');
  });
  it('provides an ordered multi-series sequence', () => {
    expect(Array.isArray(wguTheme.colors.sequence)).toBe(true);
    expect(wguTheme.colors.sequence[0]).toBe('#0070F0');
  });
  it('names the display font family', () => {
    expect(wguTheme.font.family).toContain('Jost');
  });
  it('createTheme deep-merges overrides without mutating the base', () => {
    const t = createTheme({ colors: { lime: '#000000' } });
    expect(t.colors.lime).toBe('#000000');
    expect(t.colors.navy).toBe('#002855');
    expect(wguTheme.colors.lime).toBe('#97E152');
  });
});
