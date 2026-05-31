import { wguTheme } from '../theme';

// CRITICAL: never hand an LWC @api array straight to Chart.js. Under Lightning
// Web Security those arrays are sealed proxies and Chart.js calls
// Object.defineProperty(arr,'_chartjs',…) on them → throws, chart renders blank.
// Every factory passes arrays through cloneArr first.
export function cloneArr<T>(arr: T[]): T[] {
  return Array.isArray(arr) ? [...arr] : [];
}

export function baseTooltip() {
  return {
    backgroundColor: wguTheme.tooltip.backgroundColor,
    padding: wguTheme.tooltip.padding,
    cornerRadius: wguTheme.tooltip.cornerRadius,
    titleFont: { weight: '700' as const },
    bodyFont: { weight: '500' as const },
    displayColors: false
  };
}

export function baseAnimation() {
  return { duration: wguTheme.animation.duration, easing: wguTheme.animation.easing as any };
}

export const baseGrid = { color: wguTheme.colors.grid };
export const tickColor = wguTheme.colors.tick;
