'use client'

import { motion } from 'framer-motion'

interface MemoriesSectionProps {
  name: string
}

const createFunFacts = (name: string) => [
  `${name}'s laughter is contagious, spreading joy wherever they go.`,
  `A true foodie at heart, ${name} can turn any meal into a gourmet experience.`,
  `With an insatiable wanderlust, ${name} dreams of exploring every corner of the globe.`,
]

export default function MemoriesSection({ name }: MemoriesSectionProps) {
  const funFacts = createFunFacts(name)

  return (
    <section className="py-20 bg-white bg-opacity-10 rounded-lg shadow-lg mb-20">
      <h2 className="text-4xl font-dancingScript text-center mb-10 text-white">Celebrating {name}</h2>
      <div className="container mx-auto px-4">
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg"
            initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="text-xl text-white font-montserrat">{fact}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

