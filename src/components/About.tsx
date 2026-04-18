import SectionShell from './SectionShell'
import { DATA } from '../data'

export default function About() {
  return (
    <SectionShell id="about" label="§ 01 — Operator">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(32px, 5vw, 72px)',
        alignItems: 'start',
      }}>
        <div>
          <h2 className="serif" style={{
            fontSize: 'clamp(40px, 6vw, 88px)',
            lineHeight: 0.98,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Code that<br />
            <em style={{ color: 'var(--accent)' }}>survives</em><br />
            peak load.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560 }}>
          {DATA.about.map((p, i) => (
            <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              {p}
            </p>
          ))}

          <div style={{
            marginTop: 20, paddingTop: 16,
            borderTop: '1px solid var(--ink)',
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          }}>
            {([
              ['based', 'Morocco · remote'],
              ['languages', 'EN · FR · AR · ES'],
              ['response', '< 12 hours'],
              ['timezone', 'UTC+1 / flex'],
            ] as [string, string][]).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span className="caps" style={{ color: 'var(--muted)' }}>{k}</span>
                <span style={{ color: 'var(--ink)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
