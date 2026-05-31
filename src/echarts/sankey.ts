import { cloneArr } from '../charts/_shared';

export function sankeyOption(
  nodes: { name: string }[],
  links: { source: string; target: string; value: number }[]
): any {
  return {
    tooltip: { trigger: 'item' },
    series: [{
      type: 'sankey',
      emphasis: { focus: 'adjacency' },
      lineStyle: { color: 'gradient', opacity: 0.4 },
      itemStyle: { borderWidth: 0 },
      data: cloneArr(nodes),
      links: cloneArr(links)
    }]
  };
}
