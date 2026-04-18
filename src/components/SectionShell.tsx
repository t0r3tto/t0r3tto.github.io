import { ReactNode } from 'react'

interface SectionShellProps {
  id: string
  label?: string
  children: ReactNode
  first?: boolean
  dense?: boolean
}

export default function SectionShell({ id, label, children, first = false, dense = false }: SectionShellProps) {
  return (
    <section
      id={id}
      style={{
        borderTop: first ? 'none' : '1px solid var(--ink)',
        padding: first
          ? 'clamp(32px, 7vw, 96px) clamp(20px, 5vw, 64px) clamp(40px, 8vw, 96px)'
          : 'clamp(48px, 8vw, 120px) clamp(20px, 5vw, 64px)',
        position: 'relative',
      }}
    >
      {label && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: dense ? 24 : 48 }}>
          <span className="mono caps" style={{ color: 'var(--muted)' }}>{label}</span>
          <div className="rule-dotted" style={{ flex: 1 }} />
        </div>
      )}
      {children}
    </section>
  )
}
