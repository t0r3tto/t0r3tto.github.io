import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Code, Zap, Settings } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom FiveM Scripts',
    description: 'High-quality custom scripts tailored to your server needs. From unique roleplay mechanics to gameplay enhancements that elevate the player experience.',
  },
  {
    icon: Server,
    title: 'Server Development & Setup',
    description: 'Complete FiveM server development from scratch. Custom configurations for QBCore, ESX, vRP, QBox, OX, or custom frameworks.',
  },
  {
    icon: Zap,
    title: 'Bug Fixes & Optimization',
    description: 'Quick, professional bug fixes and performance optimization. Ensuring your server runs smoothly with clean, well-structured code.',
  },
  {
    icon: Settings,
    title: 'UI/UX Development',
    description: 'Seamless React-based NUI interfaces and custom UI/UX solutions that enhance player interaction and engagement.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="section-title">FiveM Development Services</h2>
            <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
              Ready to level up your server? Let's make it happen. I'm taking on custom FiveM projects and ready to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-dark-gray/50 border border-light-gray/10 rounded-xl p-6 hover:border-light-gray/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-light-gray/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

