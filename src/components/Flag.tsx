interface FlagProps {
  code: string
  size?: number
}

function FlagArt({ code }: { code: string }) {
  switch (code) {
    case 'DK':
      return (
        <>
          <rect width="36" height="36" fill="#620726" />
          <rect x="0" y="15" width="36" height="6" fill="#f4efe4" />
          <rect x="11" y="0" width="6" height="36" fill="#f4efe4" />
        </>
      )
    case 'US':
      return (
        <>
          <rect width="36" height="36" fill="#f4efe4" />
          {[0,2,4,6,8,10,12].map(i => (
            <rect key={i} x="0" y={i * 2.6} width="36" height="1.3" fill="#620726" />
          ))}
          <rect x="0" y="0" width="16" height="14" fill="#0c0c0c" />
          {[0,1,2].map(row => [0,1,2].map(col => (
            <circle key={`${row}-${col}`} cx={3 + col * 5} cy={3 + row * 4} r="0.8" fill="#f4efe4" />
          )))}
        </>
      )
    case 'CA':
      return (
        <>
          <rect width="36" height="36" fill="#f4efe4" />
          <rect x="0" y="0" width="9" height="36" fill="#620726" />
          <rect x="27" y="0" width="9" height="36" fill="#620726" />
          <path d="M18 11 L20 16 L25 17 L21 20 L22 25 L18 22 L14 25 L15 20 L11 17 L16 16 Z" fill="#620726" />
        </>
      )
    case 'NL':
      return (
        <>
          <rect width="36" height="12" fill="#620726" />
          <rect y="12" width="36" height="12" fill="#f4efe4" />
          <rect y="24" width="36" height="12" fill="#0c0c0c" />
        </>
      )
    case 'SA':
      return (
        <>
          <rect width="36" height="36" fill="#0c0c0c" />
          <rect x="4" y="16" width="28" height="1.2" fill="#f4efe4" />
          <rect x="8" y="20" width="20" height="0.8" fill="#f4efe4" />
          <rect x="10" y="22" width="16" height="0.8" fill="#f4efe4" />
        </>
      )
    case 'MA':
      return (
        <>
          <rect width="36" height="36" fill="#620726" />
          <path d="M18 10 L20.4 16.6 L27.5 16.6 L21.8 21 L24 27.8 L18 23.4 L12 27.8 L14.2 21 L8.5 16.6 L15.6 16.6 Z"
            fill="none" stroke="#f4efe4" strokeWidth="1.2" />
        </>
      )
    case 'FR':
      return (
        <>
          <rect x="0" width="12" height="36" fill="#0c0c0c" />
          <rect x="12" width="12" height="36" fill="#f4efe4" />
          <rect x="24" width="12" height="36" fill="#620726" />
        </>
      )
    default:
      return <rect width="36" height="36" fill="#aa9d87" />
  }
}

export default function Flag({ code, size = 36 }: FlagProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" style={{ display: 'block' }}>
      <defs>
        <clipPath id={`clip-${code}`}>
          <circle cx="18" cy="18" r="14" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${code})`}>
        <rect width="36" height="36" fill="#f4efe4" />
        <FlagArt code={code} />
      </g>
      <circle cx="18" cy="18" r="14" fill="none" stroke="#0c0c0c" strokeWidth="1" strokeDasharray="1.5 1.2" />
      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#0c0c0c" strokeWidth="0.6" opacity="0.5" />
    </svg>
  )
}
