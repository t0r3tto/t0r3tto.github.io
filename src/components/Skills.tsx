import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Server, 
  Layout, 
  Wrench,
  FileCode,
  Globe,
  Zap,
  Settings,
  Layers,
  Box,
} from 'lucide-react'

const frameworks = [
  {
    name: 'QBOX',
    icon: '/assets/frameworks/qbox.webp',
    url: 'https://qbox.re',
  },
  {
    name: 'QBCore',
    icon: '/assets/frameworks/qbcore.webp',
    url: 'https://qbox.re',
  },
  {
    name: 'ESX',
    icon: '/assets/frameworks/esx.webp',
    url: 'https://www.esx-framework.org',
  },
  {
    name: 'vRP',
    icon: '/assets/frameworks/vrp.webp',
    url: 'https://github.com/vRP-framework/vRP',
  },
  {
    name: 'OX Core',
    icon: '/assets/frameworks/oxcore.webp',
    url: 'https://overextended.dev/ox_core',
  },
  {
    name: 'ND Core',
    icon: '/assets/frameworks/ndcore.webp',
    url: 'https://ndcore.dev',
  },
  {
    name: 'Standalone',
    icon: '/assets/frameworks/fivemlogo.webp',
    url: 'https://fivem.net',
  },
  {
    name: 'Custom',
    icon: '/assets/frameworks/customframework.webp',
    url: 'https://fivem.net',
  },
]

const skills = [
  { 
    category: 'Languages', 
    icon: FileCode,
    items: [
      { 
        name: 'Lua', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
        isImage: true
      },
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        isImage: true
      },
      { 
        name: 'TypeScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        isImage: true
      },
      { 
        name: 'SQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        isImage: true
      },
      { 
        name: 'HTML/CSS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        isImage: true
      },
    ]
  },
  { 
    category: 'UI/UX', 
    icon: Layout,
    items: [
      { 
        name: 'React', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        isImage: true
      },
      { name: 'NUI', icon: Box },
      { name: 'Custom Interfaces', icon: Settings },
      { name: 'Responsive Design', icon: Globe },
    ]
  },
  { 
    category: 'Services', 
    icon: Wrench,
    items: [
      { name: 'Bug Fixes', icon: Wrench },
      { name: 'Custom Scripts', icon: Code },
      { name: 'Server Setup', icon: Server },
      { name: 'Optimization', icon: Zap },
    ]
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-dark-gray/50 border border-light-gray/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-light-gray/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Frameworks</h3>
              </div>

              <div className="w-full overflow-hidden relative group/marquee py-2">
                <div className="absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-dark-gray/50 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-dark-gray/50 to-transparent pointer-events-none" />

                <div className="flex shrink-0 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]">
                  {[...frameworks, ...frameworks, ...frameworks, ...frameworks].map((framework, index) => (
                    <motion.a
                      key={`${framework.name}-${index}`}
                      href={framework.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-light-gray/10 bg-light-gray/5 hover:bg-light-gray/10 hover:border-light-gray/20 transition-all duration-100 shrink-0 mr-4 group/item focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-gray"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.1 }}
                      aria-label={`Visit ${framework.name} website`}
                    >
                      <div className="relative w-6 h-6 overflow-hidden rounded-full shrink-0 grayscale group-hover/item:grayscale-0 transition-all duration-100 opacity-80 group-hover/item:opacity-100">
                        <img
                          src={framework.icon}
                          alt={`${framework.name} framework logo`}
                          className="object-cover w-full h-full pointer-events-none"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors duration-100 whitespace-nowrap select-none">
                        {framework.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, categoryIndex) => {
              const CategoryIcon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: (categoryIndex + 1) * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="bg-dark-gray/50 border border-light-gray/10 rounded-xl p-6 hover:border-light-gray/30 hover:bg-dark-gray/60 transition-colors duration-200 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-light-gray/20 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skill.items.map((item) => {
                      const isImage = 'isImage' in item && item.isImage
                      const ItemIcon = !isImage && typeof item.icon !== 'string' ? item.icon : null
                      const iconUrl = typeof item.icon === 'string' ? item.icon : null

                      return (
                        <motion.li
                          key={item.name}
                          className="flex items-center gap-3 text-gray-300 text-sm group cursor-default"
                          whileHover={{ x: 4 }}
                        >
                          <div className="w-6 h-6 rounded bg-light-gray/10 flex items-center justify-center group-hover:bg-light-gray/20 group-hover:scale-110 transition-[background-color,transform] duration-200">
                            {isImage && iconUrl ? (
                              <img 
                                src={iconUrl} 
                                alt={`${item.name} icon`}
                                className="w-4 h-4 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-[opacity,filter] duration-200"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = 'none'
                                }}
                              />
                            ) : ItemIcon ? (
                              <ItemIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent transition-colors" />
                            ) : null}
                          </div>
                          <span className="group-hover:text-white transition-colors">{item.name}</span>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
