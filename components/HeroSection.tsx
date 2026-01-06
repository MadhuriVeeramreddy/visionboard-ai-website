'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vision-mint via-vision-blue via-vision-pink via-vision-purple to-vision-orange to-vision-yellow" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
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
              {/* Phone Frame */}
              <div className="relative w-64 sm:w-80 lg:w-96 aspect-[9/19.5] bg-vision-dark rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-vision-mint via-vision-blue to-vision-pink rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  {/* App Preview Placeholder */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                      <Smartphone className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-white/90 font-text text-sm">VisionBoard AI</p>
                  </div>
                </div>
              </div>
              
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

