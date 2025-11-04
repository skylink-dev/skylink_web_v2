'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function RightImageLeftContent({ title, Content, order }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    setIsMounted(true)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      setTimeout(() => sliderRef.current.slickGoTo(0), 100)
    }
  }, [isMobile])

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: index => setCurrentImage(index),
  }

  if (!isMounted) return null

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  }

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">{title}</h2>
        </div>

        {!isMobile ? (
          // Desktop - Portrait Style Layout
          <div className={`flex flex-wrap justify-center items-stretch gap-12 ${order}`}>
            {/* Left Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="relative w-[45%] h-[620px] overflow-hidden rounded-2xl shadow-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={Content[currentImage]?.img || '/assets/default-image.webp'}
                  alt="content"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {/* Right Content */}
            <div className="w-[45%] h-[620px] overflow-y-auto rounded-2xl bg-gray-50 shadow-md p-8 flex flex-col justify-center">
              {Content.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-5 mb-5 transition-all duration-300 cursor-pointer ${
                    currentImage === index
                      ? 'bg-red-100 shadow-inner'
                      : 'hover:bg-gray-200'
                  }`}
                  onMouseEnter={() => setCurrentImage(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-red-200 p-3 rounded-full flex-shrink-0">
                      <Image
                        src={item.icon}
                        width={40}
                        height={40}
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Mobile Version
          <div className="container px-4">
            <Slider {...sliderSettings} ref={sliderRef}>
              {Content.map((item, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-4"
                >
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={item.img || '/assets/default-image.webp'}
                        alt="content"
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-red-200 p-3 rounded-full">
                          <Image
                            src={item.icon}
                            width={40}
                            height={40}
                            alt={item.title}
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}
