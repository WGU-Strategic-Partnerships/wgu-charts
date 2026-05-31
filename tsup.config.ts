import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { 'wgu-charts.esm': 'src/index.ts' },
    format: ['esm'], dts: { entry: 'src/index.ts' }, outExtension: () => ({ js: '.js' }),
    external: ['chart.js'], clean: true, outDir: 'dist'
  },
  {
    entry: { 'wgu-charts.umd': 'adapters/vanilla/umd-entry.ts' },
    format: ['iife'], globalName: 'WGUCharts', external: ['chart.js'],
    outExtension: () => ({ js: '.js' }), outDir: 'dist',
    esbuildOptions(o) { o.banner = { js: '/* wgu-charts UMD — requires global Chart.js */' }; }
  }
]);
