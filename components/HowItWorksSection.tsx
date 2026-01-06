'use client'

import { motion } from 'framer-motion'
import { Upload, Sparkles, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Upload,
    title: 'Upload your vision board',
    description: 'Share your collage or images that represent your dreams and aspirations.',
  },
  {
    number: '2',
    icon: Sparkles,
    title: 'AI creates meaningful, personal goals',
    description: 'Our AI analyzes your vision and generates clear, actionable goals tailored to you.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Track progress, reflect daily, grow intentionally',
    description: 'Mark your daily progress, add reflections, and watch your vision become reality.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-white">
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
            How it works
          </h2>
          <p className="text-lg text-vision-navy/70 max-w-2xl mx-auto">
            Three simple steps to transform your vision into actionable goals
          </p>
        </motion.div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-vision-mint/20 via-vision-blue/20 to-vision-pink/20 rounded-3xl p-8 h-full border border-vision-mint/30 hover:shadow-xl transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-vision-navy text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl mr-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-vision-navy/10 rounded-2xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-vision-navy" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-vision-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-vision-navy/70 font-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

