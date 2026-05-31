import { describe, it, expect } from 'vitest';
import { geoChoroplethOption, sankeyOption, treemapOption, graphOption, heatmapOption, gaugeOption } from '../src/echarts';
import { wguHeatRamp } from '../src/echarts/theme';

const geoData = [{ name: 'Utah', value: 42 }, { name: 'Idaho', value: 18 }];
const sankeyNodes = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
const sankeyLinks = [{ source: 'A', target: 'B', value: 10 }, { source: 'B', target: 'C', value: 5 }];
const treemapData = [{ name: 'Alpha', value: 100 }, { name: 'Beta', value: 60 }];
const graphNodes = [{ name: 'X' }, { name: 'Y' }];
const graphLinks = [{ source: 'X', target: 'Y' }];
const xLabels = ['Mon', 'Tue', 'Wed'];
const yLabels = ['Morning', 'Evening'];
const heatData: [number, number, number][] = [[0, 0, 3], [1, 1, 7], [2, 0, 5]];

describe('geoChoroplethOption', () => {
  it('series[0].type is "map"', () => {
    const opt = geoChoroplethOption(geoData);
    expect(opt.series[0].type).toBe('map');
  });

  it('visualMap.inRange.color equals wguHeatRamp', () => {
    const opt = geoChoroplethOption(geoData);
    expect(opt.visualMap.inRange.color).toEqual(wguHeatRamp);
  });

  it('clones data array (not same reference)', () => {
    const opt = geoChoroplethOption(geoData);
    expect(opt.series[0].data).not.toBe(geoData);
    expect(opt.series[0].data).toEqual(geoData);
  });

  it('respects custom mapName and max', () => {
    const opt = geoChoroplethOption(geoData, { mapName: 'world', max: 500 });
    expect(opt.series[0].map).toBe('world');
    expect(opt.visualMap.max).toBe(500);
  });
});

describe('sankeyOption', () => {
  it('series[0].type is "sankey"', () => {
    const opt = sankeyOption(sankeyNodes, sankeyLinks);
    expect(opt.series[0].type).toBe('sankey');
  });

  it('clones nodes array', () => {
    const opt = sankeyOption(sankeyNodes, sankeyLinks);
    expect(opt.series[0].data).not.toBe(sankeyNodes);
    expect(opt.series[0].data).toEqual(sankeyNodes);
  });

  it('carries links in series[0].links', () => {
    const opt = sankeyOption(sankeyNodes, sankeyLinks);
    expect(opt.series[0].links).toEqual(sankeyLinks);
    expect(opt.series[0].links).not.toBe(sankeyLinks);
  });
});

describe('treemapOption', () => {
  it('series[0].type is "treemap"', () => {
    const opt = treemapOption(treemapData);
    expect(opt.series[0].type).toBe('treemap');
  });

  it('clones data array', () => {
    const opt = treemapOption(treemapData);
    expect(opt.series[0].data).not.toBe(treemapData);
    expect(opt.series[0].data).toEqual(treemapData);
  });
});

describe('graphOption', () => {
  it('series[0].type is "graph"', () => {
    const opt = graphOption(graphNodes, graphLinks);
    expect(opt.series[0].type).toBe('graph');
  });

  it('clones nodes array', () => {
    const opt = graphOption(graphNodes, graphLinks);
    expect(opt.series[0].data).not.toBe(graphNodes);
    expect(opt.series[0].data).toEqual(graphNodes);
  });
});

describe('heatmapOption', () => {
  it('series[0].type is "heatmap"', () => {
    const opt = heatmapOption(xLabels, yLabels, heatData);
    expect(opt.series[0].type).toBe('heatmap');
  });

  it('clones data array', () => {
    const opt = heatmapOption(xLabels, yLabels, heatData);
    expect(opt.series[0].data).not.toBe(heatData);
    expect(opt.series[0].data).toEqual(heatData);
  });

  it('defaults max to 10, respects opts.max', () => {
    const opt1 = heatmapOption(xLabels, yLabels, heatData);
    expect(opt1.visualMap.max).toBe(10);
    const opt2 = heatmapOption(xLabels, yLabels, heatData, { max: 50 });
    expect(opt2.visualMap.max).toBe(50);
  });
});

describe('gaugeOption', () => {
  it('series[0].type is "gauge"', () => {
    const opt = gaugeOption({ value: 72 });
    expect(opt.series[0].type).toBe('gauge');
  });

  it('data[0].value equals input value', () => {
    const opt = gaugeOption({ value: 72 });
    expect(opt.series[0].data[0].value).toBe(72);
  });

  it('uses custom name in data[0].name', () => {
    const opt = gaugeOption({ value: 55, name: 'Completion Rate' });
    expect(opt.series[0].data[0].name).toBe('Completion Rate');
  });

  it('custom thresholds produce correct color stops', () => {
    const opt = gaugeOption({ value: 80, max: 100, thresholds: [40, 70] });
    const stops = opt.series[0].axisLine.lineStyle.color;
    expect(stops[0][0]).toBe(0.4);
    expect(stops[1][0]).toBe(0.7);
    expect(stops[2][0]).toBe(1);
  });
});
