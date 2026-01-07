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
            <strong>Last updated:</strong> January 2026
          </p>
          
          <p className="mb-6">
            VisionBoard AI (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) respects your privacy and is committed to protecting it. This Privacy Policy explains how information is handled when you use the VisionBoard AI mobile application.
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              VisionBoard AI is designed with privacy in mind. We collect only the minimum data required for the app to function.
            </p>
            
            <h3 className="text-xl font-display font-semibold text-vision-dark mb-3 mt-6">
              a. User-Provided Content
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Images uploaded by you (such as vision board images)</li>
              <li>Text entered by you (goals, reflections, notes, affirmations)</li>
            </ul>
            
            <h3 className="text-xl font-display font-semibold text-vision-dark mb-3 mt-6">
              b. Automatically Collected Information
            </h3>
            <p className="mb-4">None</p>
            
            <p className="mb-2 font-semibold">We do not collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personal identifiers (name, email, phone number)</li>
              <li>Device identifiers</li>
              <li>Location data</li>
              <li>Analytics or tracking data</li>
              <li>Advertising identifiers</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use your information only to provide app functionality, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Analyzing uploaded vision board images</li>
              <li>Generating goals, timelines, and affirmations using AI</li>
              <li>Storing goals, progress, and reflection notes locally on your device</li>
            </ul>
            <p className="mb-4">
              Your data is never used for advertising, profiling, or marketing purposes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              3. AI Processing & Third-Party Services
            </h2>
            <p className="mb-4">
              To generate goals and insights, VisionBoard AI sends uploaded images to a third-party AI service provider (such as Google&apos;s Generative AI services).
            </p>
            
            <p className="mb-2 font-semibold">Important details:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Images are transmitted securely over encrypted connections (HTTPS)</li>
              <li>Images are processed only for analysis and goal generation</li>
              <li>We do not sell, rent, or share your data with advertisers</li>
              <li>We do not use your data to train AI models</li>
              <li>We do not store AI-processed images on our servers</li>
              <li>Processing is limited strictly to providing app features</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              4. Data Storage
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All goals, progress, reflections, and affirmations are stored locally on your device</li>
              <li>We do not maintain a backend database of your personal data</li>
              <li>Uninstalling the app removes all locally stored data</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              5. Data Retention & Deletion
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You can delete goals, reflections, or vision boards at any time within the app</li>
              <li>You can permanently remove all data by uninstalling the app</li>
              <li>No data is retained after deletion</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              6. Data Security
            </h2>
            <p className="mb-4">
              We take reasonable security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encrypted network communication (HTTPS)</li>
              <li>No permanent cloud storage of personal data</li>
              <li>No unnecessary data collection</li>
            </ul>
            <p className="mb-4">
              While no system is 100% secure, we follow industry-standard practices to minimize risk.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              VisionBoard AI is not intended for children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              8. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access, edit, or delete your data within the app</li>
              <li>Stop data processing by discontinuing app usage</li>
              <li>Contact us with privacy-related questions or concerns</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy to reflect changes in the app or legal requirements. Updates will be posted on this page with a revised &quot;Last updated&quot; date.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-vision-dark mb-4">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy, contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> veeramreddymadhuri9@gmail.com
            </p>
            <p>
              <strong>App Name:</strong> VisionBoard AI
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

