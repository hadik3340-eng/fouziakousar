import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { ShopifyPortfolio } from '@/components/sections/ShopifyPortfolio'
import { EbayPortfolio } from '@/components/sections/EbayPortfolio'
import { MetaAdsResults } from '@/components/sections/MetaAdsResults'
import { SocialGallery } from '@/components/sections/SocialGallery'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { WhyWorkWithMe } from '@/components/sections/WhyWorkWithMe'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0c]">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <ShopifyPortfolio />
        <EbayPortfolio />
        <MetaAdsResults />
        <SocialGallery />
        <CaseStudies />
        <WhyWorkWithMe />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
