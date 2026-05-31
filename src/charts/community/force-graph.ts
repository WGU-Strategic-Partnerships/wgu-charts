import { cloneArr, baseTooltip } from '../_shared';

export interface ForceGraphNode {
  id: string;
}

export interface ForceGraphEdge {
  source: number;
  target: number;
}

export interface ForceGraphOptions {
  nodes: ForceGraphNode[];
  edges: ForceGraphEdge[];
  label?: string;
}

export function forceGraphChart(opts: ForceGraphOptions): any {
  const nodes = opts.nodes || [];
  const edges = opts.edges || [];

  return {
    type: 'forceDirectedGraph',
    data: {
      labels: nodes.map((n) => n.id),
      datasets: [{
        label: opts.label || '',
        data: nodes.map(() => ({})),
        edges: cloneArr(edges),
        pointBackgroundColor: '#0070F0',
        pointRadius: 6,
        edgeLineBorderColor: '#264468'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: baseTooltip()
      }
    }
  };
}
