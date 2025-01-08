'use client'

import { animations, easeIn, motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

// Array of photos with titles and subtitles
const photos = [
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/1.jpg", title: "Memorable Moments", subtitle: "From where it bigins" },
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/2.jpg", title: "Time Smiles", subtitle: "Gradually goes throught out" },
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/3.jpg", title: "Joyful Event", subtitle: "This, this and the journey still" },
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/4.jpg", title: "Unforgettable Days", subtitle: "In this Phase where this moments" },
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/5.jpg", title: "Special Moments", subtitle: "Cherished Times Together and" },
  { src: "https://bloggerxxl.github.io/images/BirthdayImage/6.jpg", title: "Adventure Awaits", subtitle: "Waiting for some New Beginnings" },
]

export default function PhotoGallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-4xl font-dancingScript text-center mb-10 text-white">
        Framed Happiness: Memories From where the journey begins
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} index={index} inView={inView} />
        ))}
      </div>
    </section>
  )
}

function PhotoCard({ photo, index, inView }: {
  photo: { src: string, title: string, subtitle: string },
  index: number,
  inView: boolean
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate random position for a subtle parallax effect
    setPosition({
      x: Math.random() * 20 - 10, // Random value between -10% and 10%
      y: Math.random() * 20 - 10, // Random value between -10% and 10%
    })
  }, [])

  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0, y: 50 }}
      animate={{ rotate: 360, opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] bg-white group"
      style={{
        transform: 'none',
        background: 'linear-gradient(45deg, #b9ebd2, #8983a9)',
        border: '2px solid gray'
      }}
      onHoverStart={(e) => {
        e.target.style.transform = 'rotate(3deg)';
      }}
      onHoverEnd={(e) => {
        e.target.style.transform = 'rotate(0deg)';
      }}
    >

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          width={300}
          height={400}
          className="w-full h-full object-cover"
          style={{
            transform: `translate(${position.x}%, ${position.y}%)`,
            transition: 'transform 0.5s ease-out',
          }}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold font-montserrat mb-1">{photo.title}</h3>
          <p className="text-sm font-montserrat">{photo.subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}
