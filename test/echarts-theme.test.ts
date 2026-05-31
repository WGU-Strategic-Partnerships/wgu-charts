import { describe, it, expect, vi } from 'vitest';
import { wguEchartsTheme, wguHeatRamp, registerWguEchartsTheme } from '../src/echarts/theme';

describe('wguEchartsTheme', () => {
  it('color[0] is WGU medium blue', () => {
    expect(wguEchartsTheme.color[0]).toBe('#0070F0');
  });

  it('wguHeatRamp has 4 entries and last is navy', () => {
    expect(wguHeatRamp.length).toBe(4);
    expect(wguHeatRamp[wguHeatRamp.length - 1]).toBe('#002855');
  });

  it('registerWguEchartsTheme calls registerTheme once with name "wgu"', () => {
    const spy = { registerTheme: vi.fn() };
    registerWguEchartsTheme(spy);
    expect(spy.registerTheme).toHaveBeenCalledTimes(1);
    expect(spy.registerTheme).toHaveBeenCalledWith('wgu', wguEchartsTheme);
  });

  it('does not throw if echarts lacks registerTheme', () => {
    expect(() => registerWguEchartsTheme({} as any)).not.toThrow();
  });
});
