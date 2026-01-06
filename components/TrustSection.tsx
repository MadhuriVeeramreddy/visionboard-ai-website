'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Smartphone } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Designed for clarity, not pressure',
    description: 'A calm, reflective space to work toward your goals at your own pace.',
  },
  {
    icon: Lock,
    title: 'Your data stays on your device',
    description: 'No cloud sync required. Your goals and reflections are private and secure.',
  },
  {
    icon: Smartphone,
    title: 'No accounts required to get started',
    description: 'Download and begin immediately. No sign-ups, no emails, no barriers.',
  },
]

export default function TrustSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vision-dark mb-4">
            Built with your privacy in mind
          </h2>
          <p className="text-lg text-vision-navy/70 max-w-2xl mx-auto">
            A personal tool that respects your journey and your privacy
          </p>
        </motion.div>
        
        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-vision-blue to-vision-mint rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-vision-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-vision-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-vision-navy/70 font-text leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

