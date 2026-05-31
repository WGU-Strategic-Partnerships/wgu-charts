export interface WguTheme {
  colors: {
    navy: string; midnight: string; medium: string; sky: string; lime: string;
    fg2: string; tick: string; grid: string; lightGrey: string; grey: string; white: string;
    sequence: string[];
  };
  font: { family: string; numerals: string; weights: { book: number; medium: number; heavy: number } };
  radius: number;
  tooltip: { backgroundColor: string; padding: number; cornerRadius: number };
  animation: { duration: number; easing: import('chart.js').EasingFunction };
  modes: { light: { fg: string; surface: string }; dark: { fg: string; surface: string } };
}

export const wguTheme: WguTheme = {
  colors: {
    navy: '#002855', midnight: '#001731', medium: '#0070F0', sky: '#46B1EF', lime: '#97E152',
    fg2: '#264468', tick: '#6B7C93', grid: 'rgba(0,40,85,.06)', lightGrey: '#F1F1F1',
    grey: '#A7A7A7', white: '#FFFFFF',
    sequence: ['#0070F0', '#46B1EF', '#002855', '#97E152', '#264468', '#A7A7A7']
  },
  font: {
    family: "'Jost','Futura PT',Arial,sans-serif",
    numerals: "'Newsreader',Georgia,serif",
    weights: { book: 400, medium: 500, heavy: 800 }
  },
  radius: 6,
  tooltip: { backgroundColor: '#002855', padding: 11, cornerRadius: 8 },
  animation: { duration: 900, easing: 'easeOutQuart' as import('chart.js').EasingFunction },
  modes: {
    light: { fg: '#264468', surface: '#FFFFFF' },
    dark: { fg: '#BBD0E8', surface: '#002855' }
  }
};

function deepMerge<T>(base: T, over: any): T {
  // Arrays are replaced wholesale (not merged) to keep token lists predictable.
  if (Array.isArray(base)) return (over ?? base) as T;
  if (typeof base === 'object' && base) {
    const out: any = { ...base };
    for (const k of Object.keys(over ?? {})) {
      out[k] = k in (base as any) ? deepMerge((base as any)[k], over[k]) : over[k];
    }
    return out;
  }
  return (over ?? base) as T;
}

export function createTheme(overrides: Partial<WguTheme> = {}): WguTheme {
  return deepMerge(wguTheme, overrides);
}
