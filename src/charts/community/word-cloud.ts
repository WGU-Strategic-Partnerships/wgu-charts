import { wguTheme } from '../../theme';

export interface WordCloudDatum {
  text: string;
  weight: number;
}

export interface WordCloudOptions {
  label?: string;
}

export function wordCloudChart(words: WordCloudDatum[], opts?: WordCloudOptions): any {
  const seq = wguTheme.colors.sequence;
  return {
    type: 'wordCloud',
    data: {
      labels: words.map((w) => w.text),
      datasets: [{
        label: opts?.label || '',
        data: words.map((w) => Number(w.weight) || 0),
        color: words.map((_w, i) => seq[i % seq.length])
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  };
}
