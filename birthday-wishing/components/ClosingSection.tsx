'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Confetti from 'react-confetti'

export default function ClosingSection({ name }: { name: string }) {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-20 text-center">
      <motion.h2 
        className="text-4xl font-dancingScript mb-6 text-white bg-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Thanks for being a part of {name}'s special journey!
      </motion.h2>
      <motion.button
        className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full text-xl shadow-lg hover:bg-purple-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        Celebrate Again!
      </motion.button>
      {showConfetti && <Confetti />}
    </section>
  )
}

