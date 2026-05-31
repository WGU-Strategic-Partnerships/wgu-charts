// Assemble a single self-contained catalog HTML: Chart.js + community plugin UMDs + WGUCharts UMD
// + catalog CSS/JS all inlined, so the file opens directly in a browser with no server or build.
// NOTE: the us-atlas topojson DATA for the geo bubble map is still fetched from CDN at runtime,
// so the geo card requires internet. All other charts are fully offline.
// Usage: node scripts/build-standalone-catalog.mjs <chartjsPath> <outPath>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Community plugin UMD CDN URLs (same order as catalog/index.html)
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
];

function fetchUrl(url) {
  // Derive a safe /tmp filename from the URL
  const name = url.replace(/[^a-z0-9]/gi, '_').slice(-60) + '.js';
  const tmp = '/tmp/' + name;
  if (!existsSync(tmp)) {
    console.log('  downloading', url);
    execSync(`curl -sSfL -o "${tmp}" "${url}"`);
  }
  return readFileSync(tmp, 'utf8');
}

const [, , chartjsPath, outPath] = process.argv;
const chartjs = readFileSync(chartjsPath, 'utf8');
const wgu = readFileSync('dist/wgu-charts.umd.js', 'utf8');
const css = readFileSync('catalog/catalog.css', 'utf8');
const js = readFileSync('catalog/catalog.js', 'utf8');

console.log('downloading community plugin UMDs…');
const pluginBlocks = PLUGIN_URLS.map(url => `<script>${fetchUrl(url)}</script>`).join('\n  ');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WGU Charts — Catalog (standalone)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;800&family=Newsreader:wght@500;700&display=swap" rel="stylesheet" />
  <style>
${css}
  </style>
</head>
<body data-mode="light">
  <header class="wgu-header">
    <span class="wordmark">WGU</span><span class="title">Charts Catalog</span>
    <button id="modeToggle" class="mode-toggle">Toggle dark</button>
  </header>
  <main id="grid" class="grid"></main>
  <script>${chartjs}</script>
  ${pluginBlocks}
  <script>${wgu}</script>
  <script>${js}</script>
</body>
</html>
`;

writeFileSync(outPath, html);
console.log('wrote', outPath, html.length, 'bytes');
