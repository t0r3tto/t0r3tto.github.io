import { useState } from 'react'
import SectionShell from './SectionShell'
import { DATA } from '../data'

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

function Cell({ k, v }: { k: string; v: string | number }) {
  return (
    <div style={{ padding: '8px 10px', borderRight: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
      <div className="caps" style={{ color: 'var(--muted)', fontSize: 9 }}>{k}</div>
      <div style={{ color: 'var(--ink)' }}>{v}</div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState<string | null>(DATA.projects[0].id)

  return (
    <SectionShell id="projects" label="§ 02 — Resource Manager">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        alignItems: 'end',
        marginBottom: 40,
        gap: 20,
      }}>
        <h2 className="serif" style={{
          fontSize: 'clamp(40px, 6vw, 88px)',
          lineHeight: 0.98, margin: 0, letterSpacing: '-0.02em', maxWidth: 900,
        }}>
          Selected <em style={{ color: 'var(--accent)' }}>resources</em>.<br />
          More under NDA.
        </h2>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'right' }}>
          showing {DATA.projects.length} of {DATA.projects.length + 14}<br />
          <span style={{ color: 'var(--ink)' }}>public · private · on-request</span>
        </div>
      </div>

      {/* Table header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '28px minmax(0, 2fr) minmax(0, 1fr) 90px 110px 60px',
        gap: 16,
        padding: '10px 16px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        <span />
        <span>resource</span>
        <span className="hide-sm">framework</span>
        <span className="hide-sm" style={{ textAlign: 'right' }}>size</span>
        <span>status</span>
        <span style={{ textAlign: 'right' }}>src</span>
      </div>

      {DATA.projects.map((p, idx) => {
        const isOpen = open === p.id
        return (
          <div key={p.id} style={{
            borderLeft: '1px solid var(--ink)',
            borderRight: '1px solid var(--ink)',
            borderBottom: '1px solid var(--ink)',
            background: isOpen ? 'var(--paper-2)' : 'transparent',
            transition: 'background 160ms',
          }}>
            <button
              onClick={() => setOpen(isOpen ? null : p.id)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '28px minmax(0, 2fr) minmax(0, 1fr) 90px 110px 60px',
                gap: 16,
                padding: '18px 16px',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 13,
                color: 'var(--ink)',
              }}
            >
              <span style={{ color: 'var(--muted)' }}>{String(idx + 1).padStart(2, '0')}</span>
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.id}</span>
                <span style={{ color: 'var(--muted)', fontSize: 11 }}>v{p.version}</span>
              </span>
              <span className="hide-sm" style={{ color: 'var(--muted)', fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.framework}</span>
              <span className="hide-sm" style={{ textAlign: 'right', color: 'var(--muted)', fontSize: 11 }}>{p.size}</span>
              <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: p.type.startsWith('Paid') ? 'var(--accent)' : 'var(--ok)' }}>
                {p.type.startsWith('Paid') ? 'paid' : 'open'}
              </span>
              <span style={{ textAlign: 'right', color: 'var(--muted)' }}>{isOpen ? '—' : '+'}</span>
            </button>

            {isOpen && (
              <div style={{
                padding: '0 16px 24px',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
                gap: 40,
                borderTop: '1px dashed rgba(12,12,12,0.2)',
                paddingTop: 20,
              }}>
                <div>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>{p.blurb}</p>

                  <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.deps.map(d => (
                      <span key={d} className="mono" style={{
                        fontSize: 10, padding: '4px 8px',
                        border: '1px solid var(--ink)',
                        background: 'var(--paper)',
                      }}>
                        requires {d}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" style={btnGhost}>
                      {p.type.startsWith('Paid') ? 'view on tebex →' : 'view source on github →'}
                    </a>
                  </div>
                </div>

                <div className="mono" style={{ fontSize: 11, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '12px 14px', fontSize: 11, lineHeight: 1.6 }}>
                    <div style={{ color: 'var(--muted-2)' }}>$ fivem-resources install</div>
                    <div style={{ color: 'var(--paper)' }}>› ensure <span style={{ color: 'var(--accent)' }}>{p.id}</span></div>
                    <div style={{ color: 'var(--ok)', opacity: 0.8 }}>✓ started in 12ms</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--ink)' }}>
                    <Cell k="id" v={p.id} />
                    <Cell k="ver" v={p.version} />
                    <Cell k="size" v={p.size} />
                    <Cell k="deps" v={p.deps.length} />
                    <Cell k="lic" v={p.type.startsWith('Paid') ? 'commercial' : 'MIT'} />
                    <Cell k="channel" v={p.type.startsWith('Paid') ? 'tebex' : 'github'} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}

      <p style={{
        marginTop: 20,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        color: 'var(--muted)',
        fontStyle: 'italic',
      }}>
        // custom work kept private under client NDA. full portfolio on request.
      </p>
    </SectionShell>
  )
}
