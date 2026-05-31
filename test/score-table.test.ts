import { describe, it, expect } from 'vitest';
import { scoreTableModel, renderScoreTable } from '../src/render/score-table';
describe('scoreTable', () => {
  it('bands a numeric column by highest matching threshold', () => {
    const m = scoreTableModel({ columns:[{key:'acct',label:'Account'},{key:'pct',label:'% to Target',align:'right'}],
      rows:[{acct:'A',pct:120},{acct:'B',pct:45}], bandColumn:'pct',
      bands:[{min:0,color:'#FDE2E1'},{min:80,color:'#FFF3D6'},{min:100,color:'#E6F6D9'}] });
    expect(m.rows[0].cells.pct.bg).toBe('#E6F6D9');
    expect(m.rows[1].cells.pct.bg).toBe('#FDE2E1');
  });
  it('renders headers, rows, and escapes text', () => {
    const html = renderScoreTable(scoreTableModel({ columns:[{key:'a',label:'Acct'}], rows:[{a:'<x>'}] }));
    expect(html).toContain('Acct'); expect(html).toContain('pp-stable');
    expect(html).not.toContain('<x>'); expect(html).toContain('&lt;x&gt;');
  });
});
