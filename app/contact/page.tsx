import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-vision-mint/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link href="/" className="text-vision-navy hover:text-vision-dark font-text mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-display font-bold text-vision-dark mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-vision-navy/70 mb-12 font-text">
          We'd love to hear from you. Share your feedback, questions, or suggestions.
        </p>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-vision-mint/20">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-vision-dark mb-4 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-vision-navy" />
                In-App Feedback
              </h2>
              <p className="text-vision-navy/70 font-text">
                The best way to reach us is through the feedback feature in the VisionBoard AI app. Your feedback helps us improve the app for everyone.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-vision-dark mb-4 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-vision-navy" />
                Email Support
              </h2>
              <p className="text-vision-navy/70 font-text mb-4">
                For technical support or general inquiries, please use the feedback feature in the app. We review all feedback regularly.
              </p>
            </div>
            
            <div className="pt-8 border-t border-vision-mint/20">
              <p className="text-vision-navy/70 font-text">
                <strong className="text-vision-dark">Response Time:</strong> We aim to respond to all feedback within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

