import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const frameworks = [
  {
    name: 'QBOX',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/qbox.webp',
    url: 'https://qbox.re',
  },
  {
    name: 'QBCore',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/qbcore.webp',
    url: 'https://qbox.re',
  },
  {
    name: 'ESX',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/esx.webp',
    url: 'https://www.esx-framework.org',
  },
  {
    name: 'OX Core',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/oxcore.webp',
    url: 'https://overextended.dev/ox_core',
  },
  {
    name: 'ND Core',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/ndcore.webp',
    url: 'https://ndcore.dev',
  },
  {
    name: 'Standalone',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/fivemlogo.webp',
    url: 'https://fivem.net',
  },
  {
    name: 'Custom',
    icon: 'https://r2.fivemanage.com/LYxUZCJ0br4B3S7e1UBdJ/customframework.webp',
    url: 'https://fivem.net',
  },
]

export default function Frameworks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const duplicatedFrameworks = [...frameworks, ...frameworks, ...frameworks]

  return (
    <section ref={ref} className="section py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6 text-center">
            Framework Compatibility
          </h3>

          <div className="w-full overflow-hidden relative group/marquee py-2 select-none">
            <div className="absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-dark to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-dark to-transparent pointer-events-none" />

            <div className="flex">
              <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover/marquee:[animation-play-state:paused]">
                {duplicatedFrameworks.map((framework, index) => (
                  <motion.a
                    key={`${framework.name}-${index}`}
                    href={framework.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-light-gray/5 bg-light-gray/5 hover:bg-light-gray/10 hover:border-light-gray/20 transition-colors group/item shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative w-5 h-5 overflow-hidden rounded-full shrink-0 grayscale group-hover/item:grayscale-0 transition-all opacity-70 group-hover/item:opacity-100">
                      <img
                        src={framework.icon}
                        alt={framework.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors whitespace-nowrap">
                      {framework.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div
                className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover/marquee:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {duplicatedFrameworks.map((framework, index) => (
                  <a
                    key={`duplicate-${framework.name}-${index}`}
                    href={framework.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-light-gray/5 bg-light-gray/5 hover:bg-light-gray/10 hover:border-light-gray/20 transition-colors group/item shrink-0"
                  >
                    <div className="relative w-5 h-5 overflow-hidden rounded-full shrink-0 grayscale group-hover/item:grayscale-0 transition-all opacity-70 group-hover/item:opacity-100">
                      <img
                        src={framework.icon}
                        alt={framework.name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors whitespace-nowrap">
                      {framework.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}