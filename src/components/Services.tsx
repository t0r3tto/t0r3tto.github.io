import { useState } from 'react'
import SectionShell from './SectionShell'
import { DATA } from '../data'

type ServiceEntry = typeof DATA.services[number]

const iconKinds = ['script', 'server', 'fix', 'ui'] as const
type IconKind = typeof iconKinds[number]

const serviceMetas = [
  ['3–7 days', 'signed .zip', 'Lua + ox_lib'],
  ['1–3 weeks', 'full handover', 'multi-framework'],
  ['24–72 hrs', 'patched build', 'any framework'],
  ['1–2 weeks', 'resource + docs', 'React + TS'],
] as const

function ServiceIcon({ kind, color }: { kind: IconKind; color: string }) {
  const sw = 1.6
  const props = { width: 56, height: 56, viewBox: '0 0 56 56', fill: 'none' as const, stroke: color, strokeWidth: sw, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (kind) {
    case 'script':
      return (
        <svg {...props}>
          <path d="M18 14 L8 28 L18 42" />
          <path d="M38 14 L48 28 L38 42" />
          <path d="M32 12 L24 44" />
        </svg>
      )
    case 'server':
      return (
        <svg {...props}>
          <rect x="8" y="10" width="40" height="10" rx="1" />
          <rect x="8" y="23" width="40" height="10" rx="1" />
          <rect x="8" y="36" width="40" height="10" rx="1" />
          <circle cx="13" cy="15" r="1.2" fill={color} stroke="none" />
          <circle cx="13" cy="28" r="1.2" fill={color} stroke="none" />
          <circle cx="13" cy="41" r="1.2" fill={color} stroke="none" />
          <path d="M22 15 L42 15" opacity="0.35" />
          <path d="M22 28 L42 28" opacity="0.35" />
          <path d="M22 41 L42 41" opacity="0.35" />
        </svg>
      )
    case 'fix':
      return (
        <svg {...props}>
          <path d="M12 44 L28 28" />
          <path d="M36 12 L44 20 L38 26 L30 18 Z" />
          <circle cx="16" cy="40" r="3.5" />
          <path d="M20 14 L14 20" opacity="0.4" />
          <path d="M46 34 L40 40" opacity="0.4" />
        </svg>
      )
    case 'ui':
      return (
        <svg {...props}>
          <rect x="8" y="12" width="40" height="32" rx="1" />
          <path d="M8 20 L48 20" />
          <circle cx="12" cy="16" r="0.9" fill={color} stroke="none" />
          <circle cx="15" cy="16" r="0.9" fill={color} stroke="none" />
          <circle cx="18" cy="16" r="0.9" fill={color} stroke="none" />
          <path d="M14 30 L42 30" opacity="0.45" />
          <circle cx="22" cy="30" r="2.2" fill="var(--paper)" />
          <path d="M14 37 L32 37" opacity="0.3" />
        </svg>
      )
  }
}

function ServiceCard({ s, idx, isOpen, onToggle }: { s: ServiceEntry; idx: number; isOpen: boolean; onToggle: () => void }) {
  const kind = iconKinds[idx % iconKinds.length]
  const [turnaround, delivery, stack] = serviceMetas[idx] ?? ['1 week', 'signed .zip', 'Lua']
  const metas: [string, string][] = [['typical turnaround', turnaround], ['delivery', delivery], ['stack', stack]]

  return (
    <div
      onClick={onToggle}
      style={{
        gridColumn: isOpen ? '1 / -1' : 'auto',
        position: 'relative',
        padding: 'clamp(20px, 3vw, 32px)',
        background: isOpen ? 'var(--ink)' : 'var(--paper)',
        color: isOpen ? 'var(--paper)' : 'var(--ink)',
        borderRight: '1px solid var(--ink)',
        borderBottom: '1px solid var(--ink)',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column', gap: 14,
        minHeight: 320,
        transition: 'background 280ms ease, color 280ms ease',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        if (!isOpen) {
          const num = e.currentTarget.querySelector<HTMLElement>('.svc-num')
          if (num) num.style.transform = 'translateX(-6px)'
        }
      }}
      onMouseLeave={e => {
        if (!isOpen) {
          const num = e.currentTarget.querySelector<HTMLElement>('.svc-num')
          if (num) num.style.transform = 'translateX(0)'
        }
      }}
    >
      {!isOpen && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'repeating-linear-gradient(135deg, transparent 0 26px, rgba(12,12,12,0.03) 26px 27px)',
        }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <span className="mono caps" style={{ color: 'var(--accent)', fontSize: 11 }}>{s.code}</span>
        <span className="serif svc-num" style={{
          fontSize: 64, lineHeight: 1,
          color: isOpen ? 'rgba(244,239,228,0.18)' : 'var(--tan)',
          transition: 'transform 320ms cubic-bezier(.2,.8,.2,1), color 280ms',
        }}>
          {String(idx + 1).padStart(2, '0')}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{
          flexShrink: 0,
          border: `1px solid ${isOpen ? 'var(--paper)' : 'var(--ink)'}`,
          padding: 8, background: isOpen ? 'transparent' : 'var(--paper-2)',
        }}>
          <ServiceIcon kind={kind} color={isOpen ? 'var(--paper)' : 'var(--ink)'} />
        </div>
        <h3 className="serif" style={{ margin: 0, fontSize: 'clamp(26px, 2.6vw, 36px)', lineHeight: 1.0, letterSpacing: '-0.015em', flex: 1 }}>
          {s.title}
          {!isOpen && (
            <span style={{
              display: 'block', marginTop: 6, fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10, color: 'var(--muted)', fontStyle: 'normal', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              {turnaround}  ·  tap to open brief
            </span>
          )}
        </h3>
      </div>

      {isOpen ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
          gap: 32,
          paddingTop: 12,
          borderTop: '1px dashed rgba(244,239,228,0.3)',
          position: 'relative', zIndex: 1,
          animation: 'svcFade 420ms ease both',
        }}>
          <div>
            <p style={{
              margin: 0, fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(20px, 1.9vw, 26px)', lineHeight: 1.35, color: 'var(--paper)',
              maxWidth: '46ch',
            }}>
              {s.body}
            </p>
            <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.bullets.map(b => (
                <span key={b} className="mono" style={{ fontSize: 11, padding: '6px 10px', border: '1px solid var(--paper)', color: 'var(--paper)', letterSpacing: '0.02em' }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <dl className="mono" style={{
            margin: 0, padding: '4px 0 0 24px',
            borderLeft: '1px dashed rgba(244,239,228,0.3)',
            fontSize: 11, lineHeight: 1.7,
            color: 'var(--paper)',
          }}>
            {metas.map(([k, v]) => (
              <div key={k} style={{ marginBottom: 12 }}>
                <dt className="caps" style={{ color: 'rgba(244,239,228,0.55)', fontSize: 9, letterSpacing: '0.14em' }}>{k}</dt>
                <dd style={{ margin: '3px 0 0', color: 'var(--paper)' }}>{v}</dd>
              </div>
            ))}
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px dashed rgba(244,239,228,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ color: 'rgba(244,239,228,0.55)', fontSize: 9, letterSpacing: '0.14em' }}>ENQUIRE</span>
              <a
                href="#contact"
                onClick={e => { e.stopPropagation(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
                style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: 1, fontSize: 12, letterSpacing: '0.05em' }}
              >
                open a ticket →
              </a>
            </div>
          </dl>
        </div>
      ) : (
        <div style={{
          marginTop: 'auto',
          display: 'flex', flexWrap: 'wrap', gap: 6, position: 'relative', zIndex: 1,
          paddingTop: 14, borderTop: '1px dashed rgba(12,12,12,0.2)',
        }}>
          {s.bullets.slice(0, 2).map(b => (
            <span key={b} className="mono" style={{ fontSize: 10, padding: '3px 8px', border: '1px solid rgba(12,12,12,0.35)', color: 'var(--ink-2)', letterSpacing: '0.02em' }}>
              {b}
            </span>
          ))}
          {s.bullets.length > 2 && (
            <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', padding: '3px 4px' }}>
              +{s.bullets.length - 2} more
            </span>
          )}
        </div>
      )}

      {isOpen && (
        <button
          onClick={e => { e.stopPropagation(); onToggle() }}
          aria-label="close"
          style={{
            position: 'absolute', top: 16, right: 20,
            background: 'transparent', border: 'none',
            color: 'var(--paper)', cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '4px 8px', borderBottom: '1px solid var(--paper)',
          }}
        >
          close ×
        </button>
      )}
    </div>
  )
}

export default function Services() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <SectionShell id="services" label="§ 03 — Services">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'end', marginBottom: 32, gap: 20 }}>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.02em' }}>
          What I<br /><em style={{ color: 'var(--accent)' }}>ship.</em>
        </h2>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'right', lineHeight: 1.7 }}>
          {DATA.services.length} departments · select one<br />
          <span style={{ color: 'var(--ink)' }}>click to open the brief</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        borderTop: '1px solid var(--ink)',
        borderLeft: '1px solid var(--ink)',
      }}>
        {DATA.services.map((s, i) => (
          <ServiceCard
            key={s.code}
            s={s}
            idx={i}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>
    </SectionShell>
  )
}
