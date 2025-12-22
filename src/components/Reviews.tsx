import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'death102',
    country: 'Denmark',
    flag: '🇩🇰',
    rating: 5,
    text: "Toretto Studios did an amazing job with this project! Their development skills are top-notch—everything runs smoothly with no bugs, and the code is clean and well-structured. They're not just technically skilled; they're also great to work with—polite, professional, and even done before agreed time. Highly recommend him!",
    priceRange: '$1,000 - $1,500',
    service: 'Custom Script',
  },
  {
    name: 'damian_labestia',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "This is awesome and fully delivered on time and the server runs smooth as well. definitely hiring him again",
    priceRange: '$200 - $400',
    service: 'Server Creation',
  },
  {
    name: 'drnemanicouagan',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: "If you want to build a server this guy, is very professionnel i have try 3 other guy before this guy is amazing call this guy for a professionel server",
    priceRange: '$200 - $400',
    service: 'Server Creation',
  },
  {
    name: 'paintmediallc',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Toretto is the best! I was worried about reaching out due to me getting scammed before, but he over delivered on his promise!! He's the most honest person in the game!!",
    priceRange: '$100 - $200',
    service: 'Bug Fixing',
  },
  {
    name: 'ashemberlove530',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Toretto Studios is an OUTSTANDING choice for game development projects! Their expertise in coding and delivering bug-free, professional work made collaborating a seamless experience. Their quick responsiveness and cooperative nature were second to none—truly a pleasure to work with! 🙌",
    priceRange: '$100 - $200',
    service: 'Bug Fixing',
  },
  {
    name: 'kjeldveldhui588',
    country: 'Netherlands',
    flag: '🇳🇱',
    rating: 5,
    text: "Amazing work! Really fast response and knowledge of scripting even though he did not know the script!",
    priceRange: '$50 - $100',
    service: 'Bug Fixing',
  },
  {
    name: 'ghiwunashek',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    rating: 5,
    text: "Absolutely excellent service! Toretto went above and beyond to deliver exactly what I was looking for. Clear communication, fast delivery, and top-tier scripting quality. best of world thank you 50000 star. 🌹",
    priceRange: '$500 - $1000',
    service: 'Custom Script',
  },
  {
    name: 'brothersblood22',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    text: "Great to work with! they were pretty quick with the order! Would love to order from them again! :)",
    priceRange: '$100 - $200',
    service: 'Bug Fixing',
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="reviews" ref={ref} className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Client Reviews</h2>
            <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
              Trusted by developers and server owners worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-gray/50 border border-light-gray/10 rounded-xl p-6 hover:border-light-gray/30 transition-colors duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{review.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.country}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex-1 mb-4">
                  <Quote className="w-5 h-5 text-accent/50 mb-2" />
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                    {review.text}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-light-gray/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{review.service}</span>
                    <span className="text-sm font-semibold text-accent">{review.priceRange}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: reviews.length * 0.1 + 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-500 italic">
              ...and many more satisfied clients!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}