import { useState } from 'react'
import SectionShell from './SectionShell'
import Logo from './Logo'
import { DATA } from '../data'

const btnPrimary: React.CSSProperties = {
  padding: '12px 20px',
  background: 'var(--ink)',
  color: 'var(--paper)',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 12,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontWeight: 500,
  border: '1px solid var(--ink)',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
}

const btnGhost: React.CSSProperties = {
  padding: '12px 20px',
  background: 'transparent',
  color: 'var(--ink)',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 12,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontWeight: 500,
  border: '1px solid var(--ink)',
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'center',
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mono caps" style={{ color: 'var(--muted)', marginBottom: 8 }}>{label}</div>
      {children}
    </div>
  )
}

function Pills({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {options.map(o => {
        const active = o === value
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            style={{
              padding: '7px 12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              background: active ? 'var(--ink)' : 'var(--paper)',
              color: active ? 'var(--paper)' : 'var(--ink)',
              border: '1px solid var(--ink)',
              cursor: 'pointer',
              transition: 'all 120ms',
            }}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

export default function Contact() {
  const [project, setProject] = useState('Custom Script')
  const [budget, setBudget] = useState('$500 – $1,000')
  const [framework, setFramework] = useState('QBOX')
  const [brief, setBrief] = useState('')

  const subject = encodeURIComponent(`[${project}] new inquiry — ${framework}`)
  const body = encodeURIComponent(
    `Service: ${project}\nBudget: ${budget}\nFramework: ${framework}\n\nBrief:\n${brief}\n\n—\nsent via toretto.dev`
  )
  const discord = 'https://discord.gg/QFCG2kDkeS'

  return (
    <SectionShell id="contact" label="§ 05 — Start a Project">
      <div
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 'clamp(32px, 5vw, 80px)' }}
        className="contact-grid"
      >
        <div>
          <h2 className="serif" style={{ fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 0.94, margin: 0, letterSpacing: '-0.025em' }}>
            Let's<br />
            <em style={{ color: 'var(--accent)' }}>build</em><br />
            something.
          </h2>

          <p style={{ marginTop: 24, maxWidth: 480, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Sketch the shape of your project below. I'll reply within 12 hours with scope, timeline, and a fixed quote.
          </p>

          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--ink)' }}>
            {DATA.links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  alignItems: 'center',
                  padding: '14px 16px',
                  gap: 16,
                  borderBottom: i < DATA.links.length - 1 ? '1px solid var(--ink)' : 'none',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  transition: 'background 160ms, color 160ms',
                  color: 'var(--ink)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--paper)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)'
                }}
              >
                <span className="caps" style={{ fontSize: 10, color: 'var(--muted)' }}>{l.label}</span>
                <span>{l.handle}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{
          background: 'var(--paper-2)',
          border: '1px solid var(--ink)',
          padding: 'clamp(20px, 3vw, 32px)',
          display: 'flex', flexDirection: 'column', gap: 20,
          height: 'fit-content',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 14, borderBottom: '1px dashed rgba(12,12,12,0.25)' }}>
            <span className="mono caps">brief — form 01</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>est. 30s</span>
          </div>

          <Field label="service">
            <Pills options={['Custom Script', 'Server Creation', 'Bug Fixing', 'NUI / UI', 'Consulting']} value={project} onChange={setProject} />
          </Field>

          <Field label="framework">
            <Pills options={['QBOX', 'QBCore', 'ESX', 'OX Core', 'ND Core', 'Standalone', 'Not sure']} value={framework} onChange={setFramework} />
          </Field>

          <Field label="budget">
            <Pills options={['< $100', '$100 – $500', '$500 – $1,000', '$1,000 – $2,500', '$2,500+']} value={budget} onChange={setBudget} />
          </Field>

          <Field label="brief">
            <textarea
              value={brief}
              onChange={e => setBrief(e.target.value)}
              placeholder="What does it need to do? Existing server? Timeline?"
              rows={5}
              style={{
                width: '100%', padding: 12,
                background: 'var(--paper)',
                border: '1px solid var(--ink)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12, lineHeight: 1.5,
                color: 'var(--ink)', resize: 'vertical',
              }}
            />
          </Field>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={`mailto:hello@toretto.dev?subject=${subject}&body=${body}`} style={{ ...btnPrimary, flex: 1, minWidth: 160 }}>Send via email →</a>
            <a href={discord} target="_blank" rel="noopener noreferrer" style={{ ...btnGhost, flex: 1, minWidth: 160 }}>Or ping on discord</a>
          </div>

          <p className="mono" style={{ fontSize: 10, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
            // no form backend — this composes a draft with your values and opens your email client.
          </p>
        </div>
      </div>

      {/* Logo seal */}
      <div style={{
        marginTop: 'clamp(60px, 10vw, 120px)',
        paddingTop: 40,
        borderTop: '1px solid var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Logo size={88} withWordmark={false} />
          <div>
            <div className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>
              Toretto <em style={{ color: 'var(--accent)' }}>Studios</em>
            </div>
            <div className="mono caps" style={{ color: 'var(--muted)', marginTop: 6 }}>
              est. 2021 · fivem development · worldwide
            </div>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)', textAlign: 'right' }}>
          rev 2026.04<br />
          <span style={{ color: 'var(--accent)' }}>r03 — ops</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 28,
        paddingTop: 20,
        borderTop: '1px dashed rgba(12,12,12,0.25)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 16,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--muted)',
      }}>
        <div>© 2026 Toretto Studios</div>
        <div>Made with Lua, caffeine, and too many exports</div>
        <div>EN · FR · AR · ES</div>
        <div style={{ textAlign: 'right' }}>
          <span className="dot" style={{ width: 6, height: 6, marginRight: 6, verticalAlign: 'middle' }} />
          server running · uptime 412h
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .contact-grid { grid-template-columns: minmax(0, 1fr) !important; } }
      `}</style>
    </SectionShell>
  )
}
