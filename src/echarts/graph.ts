import { cloneArr } from '../charts/_shared';
import { wguTheme } from '../theme';

export function graphOption(
  nodes: { name: string }[],
  links: { source: string; target: string }[]
): any {
  return {
    tooltip: {},
    series: [{
      type: 'graph',
      layout: 'force',
      roam: true,
      label: { show: true, color: wguTheme.colors.navy },
      force: { repulsion: 180, edgeLength: 90 },
      lineStyle: { color: wguTheme.colors.fg2, opacity: 0.5 },
      itemStyle: { color: wguTheme.colors.medium },
      symbolSize: 34,
      data: cloneArr(nodes),
      links: cloneArr(links)
    }]
  };
}
