interface LogoProps {
  size?: number
  withWordmark?: boolean
}

export default function Logo({ size = 36, withWordmark = false }: LogoProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
      <img
        src="/assets/logo.png"
        alt="Toretto Studios"
        width={size}
        height={size}
        className="brand-logo"
        style={{ display: 'block', objectFit: 'contain', flexShrink: 0 }}
      />
      {withWordmark && (
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 700,
          fontSize: 12.5,
          letterSpacing: '0.02em',
          color: 'var(--ink)',
        }}>
          toretto<span style={{ color: 'var(--accent)' }}>.dev</span>
        </span>
      )}
    </span>
  )
}
