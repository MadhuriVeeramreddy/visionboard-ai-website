'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Calendar, 
  BookOpen, 
  Heart, 
  Target 
} from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Brain,
    title: 'AI-generated goals',
    description: 'Personalized goals created from your vision board using advanced AI.',
  },
  {
    icon: Calendar,
    title: 'Daily goal tracking',
    description: 'Mark your progress each day and build consistency effortlessly.',
  },
  {
    icon: BookOpen,
    title: 'Reflection notes',
    description: 'Capture your thoughts and insights as you work toward your goals.',
  },
  {
    icon: Heart,
    title: 'Daily affirmations',
    description: 'Receive one AI-generated affirmation each day to keep you motivated.',
  },
  {
    icon: Target,
    title: 'Timeline-based planning',
    description: 'Set realistic timelines and track your progress toward completion.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-vision-mint/10">
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
            Everything you need to achieve your vision
          </h2>
          <p className="text-lg text-vision-navy/70 max-w-2xl mx-auto">
            Powerful features designed to help you turn your dreams into reality
          </p>
        </motion.div>

        {/* Content Grid with Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assests/MockUps/3.png"
                  alt="VisionBoard AI - Track Your Progress"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-vision-pink/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-vision-purple/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid gap-6 order-1 lg:order-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-vision-mint/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-vision-mint to-vision-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-vision-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-vision-dark mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-vision-navy/70 font-text leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

