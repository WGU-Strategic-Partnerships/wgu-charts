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
