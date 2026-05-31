import { describe, it, expect } from 'vitest';
import { FAMILIES_ORDER } from '../src/corpus/types';

describe('corpus types', () => {
  it('declares the 11 families in order', () => {
    expect(FAMILIES_ORDER).toEqual(['magnitude','change-over-time','part-to-whole','ranking','distribution','correlation','deviation','flow','spatial','kpi','tables']);
  });
});
