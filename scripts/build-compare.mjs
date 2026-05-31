// Assemble a self-contained Chart.js-vs-ECharts comparison HTML.
// Chart.js + community plugin UMDs + ECharts + WGUCharts UMD + compare CSS/JS all inlined.
// The US map GeoJSON is still fetched at runtime (requires internet).
// Usage: node scripts/build-compare.mjs <chartjsPath> <outPath>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Same community plugin UMD list as build-standalone-catalog.mjs
const PLUGIN_URLS = [
  'https://cdn.jsdelivr.net/npm/chartjs-chart-matrix@2/dist/chartjs-chart-matrix.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@3/dist/chartjs-chart-treemap.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-sankey@0.14.0/dist/chartjs-chart-sankey.min.js',
  'https://cdn.jsdelivr.net/npm/@sgratzl/chartjs-chart-boxplot@4/build/index.umd.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-error-bars@4/build/index.umd.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-wordcloud@4/build/index.umd.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-financial@0.2.1/dist/chartjs-chart-financial.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-geo@4/build/index.umd.min.js',
  'https://cdn.jsdelivr.net/npm/chartjs-chart-graph@4/build/index.umd.min.js',
  'https://cdn.jsdelivr.net/npm/topojson-client@3',
  'https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js',
];

function fetchUrl(url) {
  const name = url.replace(/[^a-z0-9]/gi, '_').slice(-60) + '.js';
  const tmp = '/tmp/' + name;
  if (!existsSync(tmp)) {
    console.log('  downloading', url);
    execSync(`curl -sSfL -o "${tmp}" "${url}"`);
  }
  return readFileSync(tmp, 'utf8');
}

const [, , chartjsPath, outPath] = process.argv;
if (!chartjsPath || !outPath) {
  console.error('Usage: node scripts/build-compare.mjs <chartjsPath> <outPath>');
  process.exit(1);
}

const chartjs = readFileSync(chartjsPath, 'utf8');
const wgu     = readFileSync('dist/wgu-charts.umd.js', 'utf8');
const css     = readFileSync('catalog/compare.css', 'utf8');
const js      = readFileSync('catalog/compare.js', 'utf8');

console.log('downloading community plugin UMDs…');
const pluginBlocks = PLUGIN_URLS.map(url => `<script>${fetchUrl(url)}</script>`).join('\n  ');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WGU Charts — Engine Comparison</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;800&family=Newsreader:wght@500;700&display=swap" rel="stylesheet" />
  <style>
${css}
  </style>
</head>
<body>
  <header class="wgu-header">
    <span class="wordmark">WGU</span>
    <span class="title">Chart.js vs ECharts — engine comparison</span>
    <span class="subtitle">6 chart types · side-by-side</span>
  </header>
  <main class="compare-page" id="compare-page"></main>
  <script>${chartjs}</script>
  ${pluginBlocks}
  <script>${wgu}</script>
  <script>${js}</script>
</body>
</html>
`;

writeFileSync(outPath, html);
console.log('wrote', outPath, html.length.toLocaleString(), 'bytes (', (html.length / 1024).toFixed(1), 'KB )');
