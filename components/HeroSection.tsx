'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[85vh]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vision-mint via-vision-blue via-vision-pink via-vision-purple to-vision-orange to-vision-yellow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-vision-dark mb-6 leading-tight"
            >
              Turn your vision board into a clear life plan
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-vision-navy mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Upload your vision board.
              <br />
              We transform it into goals, timelines, and daily clarity.
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-vision-navy text-white rounded-2xl font-text font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download the App
              </Link>
              
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/90 text-vision-navy rounded-2xl font-text font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                See how it works
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right: App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-72 sm:w-80 lg:w-96"
              >
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assests/MockUps/2.png"
                    alt="VisionBoard AI App"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-vision-yellow/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-vision-pink/30 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-vision-navy/70"
        >
          <span className="text-sm font-text mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

