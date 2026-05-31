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
  },
  { entry: { 'vanilla': 'adapters/vanilla/index.ts' }, format: ['esm'], dts: { entry: { 'vanilla': 'adapters/vanilla/index.ts' } }, external: ['chart.js'], outDir: 'dist' },
  { entry: { 'react': 'adapters/react/index.tsx' }, format: ['esm'], dts: { entry: { 'react': 'adapters/react/index.tsx' } }, external: ['chart.js', 'chart.js/auto', 'react', 'react-dom', 'react/jsx-runtime'], outDir: 'dist' },
  { entry: { 'echarts': 'src/echarts/index.ts' }, format: ['esm'], dts: { entry: { 'echarts': 'src/echarts/index.ts' } }, external: ['echarts'], outDir: 'dist' },
  {
    entry: { 'corpus': 'src/corpus/index.ts' },
    format: ['esm'], dts: { entry: { 'corpus': 'src/corpus/index.ts' } },
    external: ['chart.js', 'echarts'], outDir: 'dist'
  }
]);
