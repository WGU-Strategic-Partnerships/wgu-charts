import { describe, it, expect } from 'vitest';
import { forceGraphChart } from '../src/charts/community/force-graph';

describe('forceGraphChart', () => {
  it('builds a forceDirectedGraph config; labels=node ids; edges cloned', () => {
    const nodes = [{ id: 'A' }, { id: 'B' }, { id: 'C' }];
    const edges = [{ source: 0, target: 1 }, { source: 1, target: 2 }];
    const cfg = forceGraphChart({ nodes, edges });
    expect(cfg.type).toBe('forceDirectedGraph');
    expect(cfg.data.labels).toEqual(['A', 'B', 'C']);
    expect(cfg.data.datasets[0].edges).toEqual(edges);
    expect(cfg.data.datasets[0].edges).not.toBe(edges);
    expect(cfg.data.datasets[0].data).toHaveLength(3);
  });
});
