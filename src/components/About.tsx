import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">About</h2>

          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              I'm Toretto, a FiveM developer with 5+ years of experience specializing in 
              custom scripts, React-based interfaces, and performance optimization across 
              all major frameworks. What sets my approach apart is my background as a server 
              owner: I operated Morocco's top roleplay server, consistently maintaining 300+ 
              daily players.
            </p>

            <p>
              My work focuses on scalable architecture, clean code practices, and solutions 
              that perform reliably under high-traffic conditions. I'm fluent in English, 
              French, Arabic, and Spanish, enabling effective communication with clients 
              worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}