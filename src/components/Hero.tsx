import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle } from 'lucide-react'
import Particles from './Particles'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8 sm:mb-10 md:mb-12 flex justify-center"
          >
            <img
              src="/assets/logo.png"
              alt="Toretto Studios Logo"
              className="h-[162px] sm:h-[216px] md:h-[270px] lg:h-[324px] w-auto object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">FiveM Developer</span>
            <span className="block text-accent">5+ Years Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Crafting immersive, high-performance FiveM servers with custom scripts, seamless UI/UX, and optimized performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-light-gray/20 hover:bg-light-gray/30 border border-light-gray/30 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
              aria-label="Get in touch - navigate to contact section"
            >
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              Get in Touch
            </motion.button>

            <motion.button
              onClick={() => {
                const element = document.getElementById('projects')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent hover:bg-light-gray/10 border border-light-gray/20 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
              aria-label="View work - navigate to projects section"
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="mt-16 sm:mt-24 md:mt-32 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark rounded-full p-2"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  )
}
