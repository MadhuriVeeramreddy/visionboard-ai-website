'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Calendar, 
  BookOpen, 
  Heart, 
  Target 
} from 'lucide-react'

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
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-vision-mint/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-vision-mint to-vision-blue rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-vision-navy" />
                </div>
                <h3 className="text-xl font-display font-bold text-vision-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-vision-navy/70 font-text leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

