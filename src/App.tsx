import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Contact from './components/Contact'
import Logo from './components/Logo'
import { useActiveSection } from './hooks'
import { loadMatomo } from './utils/matomo'

const SECTIONS = ['home', 'about', 'projects', 'services', 'reviews', 'contact']

function Nav({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'var(--paper)',
      borderBottom: '1px solid var(--ink)',
      paddingLeft: 'clamp(20px, 5vw, 64px)',
      paddingRight: 'clamp(20px, 5vw, 64px)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 0',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
      }}>
        <button
          onClick={() => scrollTo('home')}
          aria-label="toretto.dev home"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <Logo size={38} withWordmark={false} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 600, fontSize: 11, letterSpacing: '0.08em',
            color: 'var(--muted)', textTransform: 'uppercase',
            borderLeft: '1px solid var(--muted-2)', paddingLeft: 10,
          }}>
            <span style={{ color: 'var(--ink)' }}>toretto</span>
            <span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </button>

        <div className="nav-links" style={{ display: 'flex', gap: 4 }}>
          {SECTIONS.map(s => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                padding: '6px 12px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: active === s ? 'var(--accent)' : 'var(--muted)',
                position: 'relative',
              }}
            >
              {s}
              {active === s && (
                <span style={{
                  position: 'absolute', left: 12, right: 12, bottom: -14,
                  height: 2, background: 'var(--accent)',
                }} />
              )}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
          style={{
            padding: '7px 12px', border: '1px solid var(--ink)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500,
            color: 'var(--ink)',
          }}
        >
          Hire →
        </a>
      </div>

      <style>{`
        @media (max-width: 760px) { .nav-links { display: none !important; } }
      `}</style>
    </nav>
  )
}

export default function App() {
  const active = useActiveSection(SECTIONS)

  useEffect(() => {
    loadMatomo()
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Nav active={active} />
      <main id="main-content" style={{ position: 'relative', zIndex: 5 }}>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </div>
  )
}
