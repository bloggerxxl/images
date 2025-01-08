'use client'

import { motion } from 'framer-motion'

interface IntroSectionProps {
  name: string
}

export default function IntroSection({ name }: IntroSectionProps) {
  return (
    <section className="text-center py-20">
      <motion.h1 
        className="text-6xl font-bold mb-4 font-serif italic text-white tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Happy Birthday, {name}!
      </motion.h1>
      <motion.p 
        className="text-2xl text-white font-montserrat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A special day deserves a special celebration!
      </motion.p>
    </section>
  )
}

