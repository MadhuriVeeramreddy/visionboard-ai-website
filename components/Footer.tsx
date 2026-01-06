import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-vision-dark text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">VisionBoard AI</h3>
            <p className="text-white/70 font-text text-sm leading-relaxed">
              Turn your vision board into a clear life plan.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white font-text text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white font-text text-sm transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white font-text text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-white/70 hover:text-white font-text text-sm transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Download</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.visionboard.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-text text-sm transition-colors"
                >
                  Google Play Store
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 font-text text-sm">
            © {new Date().getFullYear()} VisionBoard AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

