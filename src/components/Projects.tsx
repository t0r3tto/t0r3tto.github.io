import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'trt_jobvehicles',
    description: 'A job vehicle system for QBox that allows players with certain jobs and ranks to create and spawn owned vehicles from designated locations. Designed to avoid direct SQL table access, which is bad practice and often doesn\'t work properly.',
    tags: ['QBox', 'Lua', 'ox_lib', 'Vehicle System'],
    link: 'https://github.com/t0r3tto/trt_jobvehicles',
  },
  {
    title: 'trt_lockdown',
    description: 'A resource that manages server access based on specified time intervals. During lockdown periods, only whitelisted players can connect, providing control over player access during specific hours.',
    tags: ['QBox', 'Lua', 'ox_lib', 'Server Management'],
    link: 'https://github.com/t0r3tto/trt_lockdown',
  },
  {
    title: 'trt_fetchInventory',
    description: 'Manage offline inventories, stashes and more! Open and edit any inventory in your database through a simple in-game command.',
    tags: ['QBCore', 'ESX', 'QBox', 'Inventory'],
    link: 'https://toretto.tebex.io/package/6212695',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-gray/50 border border-light-gray/10 rounded-xl p-6 hover:border-light-gray/30 transition-colors duration-200 group block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-gray rounded-xl flex flex-col h-full"
                aria-label={`View ${project.title} project`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-light-gray/20 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm italic">
              Custom script requests are kept private under customer discretion.
              Additional private projects available upon inquiry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}