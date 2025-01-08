'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import  CakeIcon  from '../assets/icons/cake.svg'
import  balloon  from '../assets/icons/balloon.svg'
import  star  from '../assets/icons/star.svg'
import Image from 'next/image'

const createMessages = (name: string) => [
  { text: `Wishing You a day filled with happiness and a year filled with joy!`, icon: balloon },
  { text: `May all your dreams and wishes come true!`, icon: star },
  { text: `Another adventure-filled year awaits ${name}!`, icon: CakeIcon },
]

export default function WishingMessagesSection({ name }: { name: string }) {
  const [currentMessage, setCurrentMessage] = useState(0)
  const messages = createMessages(name)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [messages.length])

  return (
    <section className="py-20 mb-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-lg overflow-hidden">
    {/* // <section className="py-20 mb-20 bg-transparent rounded-lg shadow-lg overflow-hidden"> */}
      <div className="container mx-auto px-4">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto"
        >
          <div className="flex-shrink-0 mr-6">
            <Image 
              src={messages[currentMessage].icon} 
              alt="Icon" 
              width={64} 
              height={64} 
              className="rounded-full bg-white p-2"
            />
          </div>
          <p className="text-2xl text-white font-montserrat flex-grow">{messages[currentMessage].text}</p>
        </motion.div>
      </div>
    </section>
  )
}

