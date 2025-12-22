import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { loadMatomo } from './utils/matomo'

function App() {
  useEffect(() => {
    loadMatomo()
  }, [])

  return (
    <div className="app">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default App
