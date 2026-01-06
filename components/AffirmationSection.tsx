'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function AffirmationSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vision-pink/20 via-vision-purple/20 to-vision-orange/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Affirmation Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-vision-pink/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-vision-pink to-vision-purple rounded-2xl flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-vision-dark mb-6 leading-tight"
            >
              "You are building the life you once imagined."
            </motion.blockquote>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-vision-navy/70 font-text"
            >
              A fresh affirmation, generated for you every day.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

