import { useState } from 'react'
import SectionShell from './SectionShell'
import { DATA } from '../data'
import { useTypewriter, useInterval } from '../hooks'

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
}

function FrameworkStrip() {
  return (
    <div style={{
      marginTop: 'clamp(36px, 5vw, 56px)',
      paddingTop: 14,
      borderTop: '1px solid var(--ink)',
    }}>
      <span className="caps" style={{ color: 'var(--muted)', display: 'block', marginBottom: 14 }}>works across —</span>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
        {DATA.frameworks.map(f => (
          <a
            key={f.name}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            title={f.name}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '6px 10px',
              border: '1px solid var(--ink)',
              background: 'var(--paper-2)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10.5,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'background 160ms, border-color 160ms, color 160ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'var(--ink)'
              el.style.color = 'var(--paper)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'var(--paper-2)'
              el.style.color = 'var(--ink)'
            }}
          >
            <img
              src={f.icon}
              alt={f.name}
              width={16}
              height={16}
              style={{ display: 'block', objectFit: 'contain', borderRadius: 2 }}
            />
            {f.name}
          </a>
        ))}
      </div>
    </div>
  )
}

function nowIso() {
  return new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
}

export default function Hero() {
  const tagline = useTypewriter(DATA.tagline, { speed: 22, start: 700 })
  const [ts, setTs] = useState(nowIso)
  useInterval(() => setTs(nowIso()), 1000)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <SectionShell id="home" first>
      {/* Meta ribbon */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 16,
        marginBottom: 'clamp(40px, 6vw, 80px)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--muted)',
        paddingBottom: 12,
        borderBottom: '1px solid var(--ink)',
      }}>
        <div><span style={{ color: 'var(--ink)' }}>{DATA.handle}</span> / portfolio</div>
        <div>view: <span style={{ color: 'var(--accent)' }}>live ops</span></div>
        <div>rev 2026.04 — r03</div>
        <div style={{ textAlign: 'right' }}>{ts}</div>
      </div>

      {/* Hero grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'end' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span className="dot" />
            <span className="mono caps" style={{ color: 'var(--ink)' }}>Available for contract — Q2 2026</span>
          </div>

          <h1 className="serif" style={{
            fontSize: 'clamp(54px, 11vw, 184px)',
            lineHeight: 0.92,
            margin: 0,
            letterSpacing: '-0.025em',
          }}>
            FiveM<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>developer</span>,
            <br />
            <span style={{ color: 'var(--ink)' }}>for hire.</span>
          </h1>

          <div style={{ marginTop: 'clamp(28px, 4vw, 56px)' }} className="hero-sub">
            <p className="mono" style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: 'var(--ink-2)',
              margin: '0 0 24px',
              maxWidth: 560,
              minHeight: '3em',
            }}>
              <span style={{ color: 'var(--accent)' }}>// </span>
              {tagline}
              <span className="caret caret-accent" />
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('contact')} style={btnPrimary}>Start a project →</button>
              <button onClick={() => scrollTo('projects')} style={btnGhost}>View work</button>
            </div>
          </div>

          <style>{`
            @media (min-width: 800px) {
              .hero-sub {
                display: grid !important;
                grid-template-columns: minmax(0, 1fr) auto;
                gap: 24px;
                align-items: end;
              }
              .hero-sub p { margin-bottom: 0 !important; }
            }
          `}</style>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 1,
        marginTop: 'clamp(40px, 6vw, 80px)',
        background: 'var(--ink)',
        border: '1px solid var(--ink)',
      }}>
        {DATA.stats.map(s => (
          <div key={s.k} style={{
            background: 'var(--paper)',
            padding: '20px 20px 18px',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <span className="mono caps" style={{ color: 'var(--muted)' }}>{s.k}</span>
            <span className="serif" style={{ fontSize: 48, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.v}</span>
          </div>
        ))}
      </div>

      <FrameworkStrip />
    </SectionShell>
  )
}
