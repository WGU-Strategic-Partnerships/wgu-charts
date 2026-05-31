/** @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
const handle = { chart: {}, update: vi.fn(), destroy: vi.fn() };
const mount = vi.fn(() => handle);
vi.mock('../adapters/vanilla', () => ({ createWGUCharts: () => ({ mount }) }));
import { WguChart } from '../adapters/react';
beforeEach(() => { mount.mockClear(); handle.update.mockClear(); handle.destroy.mockClear(); cleanup(); });
describe('<WguChart>', () => {
  it('mounts via the vanilla adapter with the spec', () => {
    render(<WguChart type="bar" data={[{ label: 'A', count: 5 }]} />);
    expect(mount).toHaveBeenCalledTimes(1);
    const [, spec] = mount.mock.calls[0];
    expect(spec.type).toBe('bar'); expect(spec.data).toEqual([{ label: 'A', count: 5 }]);
  });
  it('renders <canvas> for chart types and <div> for render-model types', () => {
    const { container, rerender } = render(<WguChart type="bar" data={[]} />);
    expect(container.querySelector('canvas')).toBeTruthy();
    rerender(<WguChart type="gauge" data={{ label: 'x', percent: 50 }} />);
    expect(container.querySelector('div')).toBeTruthy();
  });
  it('live-updates on data change without remounting', () => {
    const { rerender } = render(<WguChart type="bar" data={[{ label: 'A', count: 5 }]} />);
    rerender(<WguChart type="bar" data={[{ label: 'A', count: 9 }]} />);
    expect(mount).toHaveBeenCalledTimes(1); expect(handle.update).toHaveBeenCalled();
  });
  it('destroys on unmount', () => {
    const { unmount } = render(<WguChart type="bar" data={[]} />);
    unmount(); expect(handle.destroy).toHaveBeenCalledTimes(1);
  });
  it('routes onClick through the current callback ref', () => {
    const cb = vi.fn();
    render(<WguChart type="bar" data={[]} onClick={cb} />);
    const spec = mount.mock.calls[0][1];
    const fakeHit = { datasetIndex: 0, index: 0, label: 'A', value: 5, datum: 5 };
    spec.onClick(fakeHit);
    expect(cb).toHaveBeenCalledWith(fakeHit);
  });
  it('changing onClick identity does NOT remount', () => {
    const { rerender } = render(<WguChart type="bar" data={[]} onClick={() => {}} />);
    rerender(<WguChart type="bar" data={[]} onClick={() => {}} />);
    expect(mount).toHaveBeenCalledTimes(1);
  });
});
