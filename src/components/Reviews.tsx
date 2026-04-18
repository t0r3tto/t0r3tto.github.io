import SectionShell from './SectionShell'
import Flag from './Flag'
import Logo from './Logo'
import { DATA } from '../data'

type Review = typeof DATA.reviews[number]

const tornClip = 'polygon(0 0,100% 0,100% calc(100% - 10px),96% 100%,92% calc(100% - 10px),88% 100%,84% calc(100% - 10px),80% 100%,76% calc(100% - 10px),72% 100%,68% calc(100% - 10px),64% 100%,60% calc(100% - 10px),56% 100%,52% calc(100% - 10px),48% 100%,44% calc(100% - 10px),40% 100%,36% calc(100% - 10px),32% 100%,28% calc(100% - 10px),24% 100%,20% calc(100% - 10px),16% 100%,12% calc(100% - 10px),8% 100%,4% calc(100% - 10px),0 100%)'

function Receipt({ r, idx }: { r: Review; idx: number }) {
  const inv = `INV-${String(2026000 + idx * 7).padStart(7, '0')}`
  const rot = (idx % 5 - 2) * 0.4

  return (
    <div
      style={{
        background: 'var(--paper-2)',
        color: 'var(--ink)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        padding: '18px 18px 24px',
        transform: `rotate(${rot}deg)`,
        boxShadow: '2px 2px 0 var(--ink)',
        border: '1px solid var(--ink)',
        borderBottom: 'none',
        clipPath: tornClip,
        position: 'relative',
        transition: 'transform 240ms ease-out',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'rotate(0deg) translateY(-4px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = `rotate(${rot}deg)` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 12 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', minWidth: 0 }}>
          <div style={{ flexShrink: 0 }}>
            <Logo size={32} withWordmark={false} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: '0.05em' }}>TORETTO STUDIOS</div>
            <div style={{ color: 'var(--muted)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>client receipt</div>
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 9, color: 'var(--muted)', flexShrink: 0 }}>
          <div>{inv}</div>
          <div>2026-0{(idx % 9) + 1}-{String((idx * 3 + 5) % 28 + 1).padStart(2, '0')}</div>
        </div>
      </div>

      <div style={{ borderTop: '1px dashed var(--ink)', margin: '8px -18px 12px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span>CLIENT</span>
        <span style={{ color: 'var(--ink)' }}>{r.name}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, alignItems: 'center' }}>
        <span>SHIP TO</span>
        <span style={{ color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Flag code={r.flag} size={18} />
          {r.country}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span>SERVICE</span>
        <span style={{ color: 'var(--ink)' }}>{r.service}</span>
      </div>

      <div style={{ borderTop: '1px dashed var(--ink)', margin: '4px -18px 12px' }} />

      <p style={{
        fontFamily: 'Instrument Serif, serif',
        fontSize: 17,
        lineHeight: 1.35,
        margin: '4px 0 14px',
        letterSpacing: '-0.005em',
        color: 'var(--ink)',
      }}>
        <span style={{ color: 'var(--accent)' }}>"</span>
        {r.quote}
        <span style={{ color: 'var(--accent)' }}>"</span>
      </p>

      <div style={{ letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 10, fontSize: 11 }}>★★★★★</div>

      <div style={{ borderTop: '1px dashed var(--ink)', margin: '4px -18px 10px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 10, color: 'var(--muted)' }}>TOTAL</span>
        <span style={{
          fontSize: 15, fontWeight: 700,
          color: 'var(--accent)',
          border: '1.5px solid var(--accent)',
          padding: '3px 8px',
          letterSpacing: '0.04em',
          transform: 'rotate(-2deg)',
          display: 'inline-block',
        }}>
          {r.price}
        </span>
      </div>

      <div style={{ position: 'absolute', bottom: 14, left: 18, fontSize: 8, color: 'var(--muted-2)', letterSpacing: '0.1em' }}>
        · · · · · thank you · · · · ·
      </div>
    </div>
  )
}

export default function Reviews() {
  const uniqueFlags = [...new Set(DATA.reviews.map(r => r.flag))]

  return (
    <SectionShell id="reviews" label="§ 04 — Proof of Work">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'end', marginBottom: 32, gap: 20 }}>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.02em' }}>
          Receipts.<br />
          <em style={{ color: 'var(--accent)' }}>No screenshots.</em>
        </h2>
        <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'right' }}>
          all 5★<br />
          <span style={{ color: 'var(--ink)' }}>verified · delivered · paid</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 44 }}>
        {DATA.reviews.map((r, i) => <Receipt key={r.name} r={r} idx={i} />)}
      </div>

      <div style={{
        padding: '18px 22px',
        border: '1px solid var(--ink)',
        display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
        background: 'var(--paper-2)',
      }}>
        <span className="mono caps" style={{ color: 'var(--muted)', flexShrink: 0, fontSize: 11 }}>shipped to</span>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
          {uniqueFlags.map(code => {
            const country = DATA.reviews.find(r => r.flag === code)!.country
            const count = DATA.reviews.filter(r => r.flag === code).length
            return (
              <div key={code} style={{ display: 'flex', alignItems: 'center', gap: 7 }} title={`${country} · ${count} project${count > 1 ? 's' : ''}`}>
                <Flag code={code} size={32} />
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink)', letterSpacing: '0.05em' }}>
                  {code}{count > 1 && <span style={{ color: 'var(--accent)', marginLeft: 2 }}>×{count}</span>}
                </span>
              </div>
            )
          })}
        </div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)', flexShrink: 0, letterSpacing: '0.1em' }}>— and counting.</span>
      </div>
    </SectionShell>
  )
}
