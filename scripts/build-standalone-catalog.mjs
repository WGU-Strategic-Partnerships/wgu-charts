// Assemble a single self-contained catalog HTML: Chart.js + WGUCharts UMD + catalog
// CSS/JS all inlined, so the file opens directly in a browser with no server or build.
// Usage: node scripts/build-standalone-catalog.mjs <chartjsPath> <outPath>
import { readFileSync, writeFileSync } from 'node:fs';

const [, , chartjsPath, outPath] = process.argv;
const chartjs = readFileSync(chartjsPath, 'utf8');
const wgu = readFileSync('dist/wgu-charts.umd.js', 'utf8');
const css = readFileSync('catalog/catalog.css', 'utf8');
const js = readFileSync('catalog/catalog.js', 'utf8');

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
  <script>${wgu}</script>
  <script>${js}</script>
</body>
</html>
`;

writeFileSync(outPath, html);
console.log('wrote', outPath, html.length, 'bytes');
