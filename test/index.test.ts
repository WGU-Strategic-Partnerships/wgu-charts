import { describe, it, expect } from 'vitest';
import * as WGU from '../src/index';
describe('public API', () => {
  it('exports every factory and the theme', () => {
    for (const k of ['barChart','lineChart','doughnutChart','pieChart','comboChart',
                     'polarChart','radarChart','scatterChart','bubbleChart',
                     'wguTheme','createTheme','wguPlugins','registerWguPlugins']) {
      expect(WGU).toHaveProperty(k);
    }
  });
  it('registerWguPlugins registers each plugin exactly once', () => {
    const seen: any[] = [];
    const FakeChart = { register: (...p: any[]) => seen.push(...p) };
    WGU.registerWguPlugins(FakeChart as any);
    WGU.registerWguPlugins(FakeChart as any);
    expect(seen).toHaveLength(3);
  });
});
