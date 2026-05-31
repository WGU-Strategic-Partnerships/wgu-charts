import { buildConfig } from '../../adapters/vanilla/index';
import { funnelModel, renderFunnel } from '../render/funnel';
import { gaugeModel, renderGauge } from '../render/gauge';
import { kpiModel, renderKpi } from '../render/kpi';
import { choroplethModel, renderChoropleth } from '../render/choropleth';
import { scoreTableModel, renderScoreTable } from '../render/score-table';
import * as echartsFactories from '../echarts';
import type { ChartSpec } from './types';

const RM: Record<string, { build: (d: any, o?: any) => any; render: (m: any) => string }> = {
  funnel: { build: funnelModel, render: renderFunnel },
  gauge: { build: gaugeModel, render: renderGauge },
  kpi: { build: kpiModel, render: renderKpi },
  choropleth: { build: choroplethModel, render: renderChoropleth },
  scoreTable: { build: scoreTableModel, render: renderScoreTable }
};

export type Resolved =
  | { kind: 'chartjs'; value: any }
  | { kind: 'render-model'; value: any; html: string }
  | { kind: 'echarts'; value: any };

export function resolveSpec(spec: ChartSpec): Resolved {
  if (spec.engine === 'chartjs') {
    return { kind: 'chartjs', value: buildConfig({ type: spec.type as any, data: spec.data, labels: spec.labels as string[] | undefined, opts: spec.opts }) };
  }
  if (spec.engine === 'render-model') {
    const rm = RM[spec.type];
    if (!rm) throw new Error('corpus: unknown render-model type "' + spec.type + '"');
    const model = rm.build(spec.data, spec.opts);
    return { kind: 'render-model', value: model, html: rm.render(model) };
  }
  const fn = (echartsFactories as any)[spec.factory];
  if (typeof fn !== 'function') throw new Error('corpus: unknown echarts factory "' + spec.factory + '"');
  return { kind: 'echarts', value: fn(...(spec.args as any[])) };
}
