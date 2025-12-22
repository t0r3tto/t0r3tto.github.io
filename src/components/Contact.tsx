import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Store, Github, User } from 'lucide-react'
import ContactForm from './ContactForm'

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const links = [
  {
    icon: Store,
    label: 'Store',
    href: 'https://store.toretto.dev',
    username: 'Toretto Studios',
  },
  {
    icon: DiscordIcon,
    label: 'Discord Server',
    href: 'https://discord.gg/QFCG2kDkeS',
    username: 'Discord Server',
  },
  {
    icon: User,
    label: 'Discord Profile',
    href: 'https://discord.com/users/294990611633799180',
    username: 'torettooo',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/t0r3tto',
    username: 't0r3tto',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="section scroll-mt-20 md:scroll-mt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-title">Let's Build Your Project</h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 px-4">
            Have a FiveM server or custom script in mind? Let's discuss how we can work together to create something amazing.
          </p>

          <div className="mb-12">
            <ContactForm />
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-light-gray/10"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-light-gray/10"></div>
          </div>

          <div id="social-links" className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {links.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 h-16 md:h-20 rounded-full bg-dark-gray/50 border border-light-gray/20 hover:border-light-gray/40 transition-colors duration-200 group whitespace-nowrap"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-accent transition-colors flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-300 group-hover:text-accent transition-colors text-sm sm:text-base font-medium">
                    {link.username}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}