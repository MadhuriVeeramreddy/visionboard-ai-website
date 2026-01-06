'use client'

import { motion } from 'framer-motion'
import { Upload, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'

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

        {/* Content Grid with Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-vision-mint/20 via-vision-blue/20 to-vision-pink/20 rounded-2xl p-6 border border-vision-mint/30 hover:shadow-lg transition-all duration-300">
                    {/* Step Number */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-vision-navy text-white rounded-xl flex items-center justify-center font-display font-bold text-lg mr-3">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 bg-vision-navy/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-5 w-5 text-vision-navy" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-vision-dark mb-2">
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

          {/* Right: App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assests/MockUps/1.png"
                  alt="VisionBoard AI - Upload Your Vision"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-vision-blue/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-vision-mint/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

