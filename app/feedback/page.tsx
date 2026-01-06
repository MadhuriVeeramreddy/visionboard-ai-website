import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-vision-mint/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link href="/" className="text-vision-navy hover:text-vision-dark font-text mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-display font-bold text-vision-dark mb-4">
          Share Your Feedback
        </h1>
        <p className="text-lg text-vision-navy/70 mb-12 font-text">
          Your thoughts help us make VisionBoard AI better for everyone.
        </p>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-vision-mint/20">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
                Submit Feedback in the App
              </h2>
              <p className="text-vision-navy/70 font-text mb-6">
                The easiest way to share your feedback is directly through the VisionBoard AI app. Open the app and use the feedback feature to send us your thoughts, suggestions, or report any issues.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.visionboard.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-vision-navy text-white rounded-xl font-text font-semibold hover:bg-vision-dark transition-colors"
              >
                Open App Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-8 border-t border-vision-mint/20">
              <h3 className="text-xl font-display font-bold text-vision-dark mb-3">
                What We'd Love to Hear
              </h3>
              <ul className="space-y-2 text-vision-navy/70 font-text">
                <li>• Feature suggestions</li>
                <li>• Bug reports</li>
                <li>• User experience improvements</li>
                <li>• General feedback about the app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

