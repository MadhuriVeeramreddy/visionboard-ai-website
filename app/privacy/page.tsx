import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <Link href="/" className="text-vision-navy hover:text-vision-dark font-text mb-8 inline-block">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-display font-bold text-vision-dark mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none font-text text-vision-navy">
          <p className="text-lg mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              Your Privacy Matters
            </h2>
            <p className="mb-4">
              VisionBoard AI is designed with your privacy in mind. We believe your personal goals and reflections should remain private and secure.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              Data Storage
            </h2>
            <p className="mb-4">
              All your data—including vision boards, goals, progress, and reflection notes—is stored locally on your device. We do not sync your data to any cloud servers or external databases.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              No Account Required
            </h2>
            <p className="mb-4">
              VisionBoard AI does not require you to create an account or provide any personal information. You can start using the app immediately after downloading.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              AI Processing
            </h2>
            <p className="mb-4">
              When you upload a vision board, the images are processed by AI services to generate goals. These images are sent to our AI service provider for processing but are not stored permanently on external servers.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through the app&apos;s feedback feature or visit our contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

