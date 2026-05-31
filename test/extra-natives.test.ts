import { describe, it, expect } from 'vitest';
import { polarChart } from '../src/charts/polar';
import { radarChart } from '../src/charts/radar';
import { scatterChart } from '../src/charts/scatter';
import { bubbleChart } from '../src/charts/bubble';
describe('extra native charts', () => {
  it('polarChart', () => {
    const cfg = polarChart([{ label: 'A', count: 3 }, { label: 'B', count: 7 }]);
    expect(cfg.type).toBe('polarArea');
    expect(cfg.data.datasets[0].data).toEqual([3, 7]);
  });
  it('radarChart maps a single series over labels', () => {
    const cfg = radarChart(['Speed', 'Cost', 'Quality'], [{ label: 'Vendor', data: [3, 4, 5] }]);
    expect(cfg.type).toBe('radar');
    expect(cfg.data.labels).toEqual(['Speed', 'Cost', 'Quality']);
  });
  it('scatterChart clones point arrays', () => {
    const pts = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
    const cfg = scatterChart([{ label: 'S', points: pts }]);
    expect(cfg.type).toBe('scatter');
    expect(cfg.data.datasets[0].data).toEqual(pts);
    expect(cfg.data.datasets[0].data).not.toBe(pts);
  });
  it('bubbleChart carries r', () => {
    const cfg = bubbleChart([{ label: 'B', points: [{ x: 1, y: 2, r: 8 }] }]);
    expect(cfg.type).toBe('bubble');
    expect((cfg.data.datasets[0].data[0] as any).r).toBe(8);
  });
  it('polarChart tolerates empty input', () => {
    const cfg = polarChart([]);
    expect(cfg.type).toBe('polarArea');
    expect(cfg.data.datasets[0].data).toEqual([]);
  });
  it('scatterChart tolerates empty input', () => {
    const cfg = scatterChart([]);
    expect(cfg.type).toBe('scatter');
    expect(cfg.data.datasets).toEqual([]);
  });
  it('polarChart applies the cc alpha suffix to colors', () => {
    const bg = polarChart([{ label: 'A', count: 1 }]).data.datasets[0].backgroundColor as string[];
    expect(bg[0]).toMatch(/cc$/);
  });
  it('scatterChart showLine connects points', () => {
    const cfg = scatterChart([{ label:'S', points:[{x:1,y:2},{x:3,y:4}] }], { showLine:true });
    expect(cfg.data.datasets[0].showLine).toBe(true);
  });
});
