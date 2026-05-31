import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { createWGUCharts } from '../vanilla';
import type { MountSpec, ChartHandle } from '../vanilla';
import { isRenderModelType } from '../../src/render/runtime';
import type { Hit } from '../../src/interaction';

let _api: ReturnType<typeof createWGUCharts> | null = null;
function getApi() {
  if (!_api) _api = createWGUCharts(Chart);
  return _api;
}

export interface WguChartProps {
  type: MountSpec['type']; data: any; labels?: string[]; opts?: any;
  onClick?: (hit: Hit) => void; onDrill?: (hit: Hit) => void;
  className?: string; style?: React.CSSProperties;
}

export function WguChart(props: WguChartProps) {
  const { type, data, labels, opts, onClick, onDrill, className, style } = props;
  const elRef = useRef<HTMLCanvasElement | HTMLDivElement | null>(null);
  const handleRef = useRef<ChartHandle | null>(null);
  const cbRef = useRef({ onClick, onDrill });
  cbRef.current = { onClick, onDrill };

  // Remount when type or opts change. opts is compared by JSON.stringify (deep-ish): note that
  // function-valued opts (e.g. custom formatters) won't be diffed — change `type` or remount manually if needed.
  useEffect(() => {
    if (!elRef.current) return;
    handleRef.current = getApi().mount(elRef.current, {
      type, data, labels, opts,
      onClick: (h: Hit) => cbRef.current.onClick?.(h),
      onDrill: (h: Hit) => cbRef.current.onDrill?.(h)
    } as MountSpec);
    return () => { handleRef.current?.destroy(); handleRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, JSON.stringify(opts)]);

  useEffect(() => {
    handleRef.current?.update(data, labels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, labels]);

  return isRenderModelType(type)
    ? <div ref={elRef as React.RefObject<HTMLDivElement>} className={className} style={style} />
    : <canvas ref={elRef as React.RefObject<HTMLCanvasElement>} className={className} style={style} />;
}
