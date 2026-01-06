import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import AffirmationSection from '@/components/AffirmationSection'
import TrustSection from '@/components/TrustSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AffirmationSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

