import { describe, it, expect } from 'vitest';
import { FAMILIES_ORDER } from '../src/corpus/types';
import { FAMILIES } from '../src/corpus/families';

describe('corpus types', () => {
  it('declares the 11 families in order', () => {
    expect(FAMILIES_ORDER).toEqual(['magnitude','change-over-time','part-to-whole','ranking','distribution','correlation','deviation','flow','spatial','kpi','tables']);
  });
});

it('has metadata for every family, in taxonomy order', () => {
  expect(FAMILIES.map(f => f.id)).toEqual([...FAMILIES_ORDER]);
  FAMILIES.forEach(f => { expect(f.label.length).toBeGreaterThan(0); expect(f.description.length).toBeGreaterThan(0); });
});

import { resolveSpec } from '../src/corpus/resolveSpec';
describe('resolveSpec', () => {
  it('resolves a chartjs bar spec', () => { const r = resolveSpec({ engine:'chartjs', type:'bar', data:[{label:'A',count:5}] }); expect(r.kind).toBe('chartjs'); expect((r.value as any).type).toBe('bar'); });
  it('resolves a render-model gauge spec', () => { const r = resolveSpec({ engine:'render-model', type:'gauge', data:{ label:'x', percent:50 } }); expect(r.kind).toBe('render-model'); expect(r.value).toBeTruthy(); });
  it('resolves an echarts factory spec', () => { const r = resolveSpec({ engine:'echarts', factory:'sankeyOption', args:[[{name:'A'},{name:'B'}],[{source:'A',target:'B',value:5}]] }); expect(r.kind).toBe('echarts'); expect((r.value as any).series[0].type).toBe('sankey'); });
  it('throws on unknown echarts factory', () => { expect(() => resolveSpec({ engine:'echarts', factory:'nopeOption', args:[] })).toThrow(/unknown/i); });
  it('rejects a non-factory echarts export (e.g. registerWguEchartsTheme)', () => {
    expect(() => resolveSpec({ engine:'echarts', factory:'registerWguEchartsTheme', args:[] } as any)).toThrow(/unknown/i);
  });
  it('throws on unknown render-model type', () => { expect(() => resolveSpec({ engine:'render-model', type:'nope', data:{} })).toThrow(/unknown/i); });
});

import { corpus, byFamily, byEngine, byFeature, search } from '../src/corpus';
describe('corpus registry', () => {
  it('array with unique ids', () => { expect(Array.isArray(corpus)).toBe(true); const ids = corpus.map(e=>e.id); expect(new Set(ids).size).toBe(ids.length); });
  it('byFamily/byEngine filter correctly', () => { expect(byFamily('magnitude').every(e=>e.family==='magnitude')).toBe(true); expect(byEngine('echarts').every(e=>e.engine==='echarts')).toBe(true); });
  it('every entry resolves and engine matches spec.engine', () => { corpus.forEach(e => { expect(() => resolveSpec(e.spec)).not.toThrow(); expect(e.engine).toBe(e.spec.engine); }); });
  it('search returns an array', () => { expect(Array.isArray(search('bar'))).toBe(true); });
});
