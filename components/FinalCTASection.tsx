'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vision-mint via-vision-blue via-vision-pink to-vision-purple" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-vision-dark mb-6 leading-tight"
          >
            Your vision already exists.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-vision-navy mb-12 font-text"
          >
            All it needs is direction.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.visionboard.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-vision-navy text-white rounded-2xl font-text font-semibold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Smartphone className="mr-3 h-6 w-6" />
              Start with my vision board
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

