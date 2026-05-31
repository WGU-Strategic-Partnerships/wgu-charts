import { cloneArr } from '../charts/_shared';

export interface ParallelRow { name: string; values: number[]; }

export function parallelOption(dims: string[], rows: ParallelRow[]): any {
  return {
    parallel: {},
    parallelAxis: (Array.isArray(dims) ? dims : []).map((d, i) => ({ dim: i, name: d })),
    tooltip: {},
    series: [{ type: 'parallel', data: (Array.isArray(rows) ? rows : []).map(r => ({ name: r.name, value: cloneArr(r.values) })) }]
  };
}
