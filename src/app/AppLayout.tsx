import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { BookingProcessSection } from '../components/sections/BookingProcessSection'
import { BookingSection } from '../components/sections/BookingSection'
import { BookingTermsSection } from '../components/sections/BookingTermsSection'
import { CabinInfoSection } from '../components/sections/CabinInfoSection'
import { ContactSection } from '../components/sections/ContactSection'
import { FaqSection } from '../components/sections/FaqSection'
import { HeroSection } from '../components/sections/HeroSection'
import { PricingSection } from '../components/sections/PricingSection'
import { PrivacySection } from '../components/sections/PrivacySection'
import { RulesSummarySection } from '../components/sections/RulesSummarySection'
import { seoConfig } from '../config/seoConfig'

export function AppLayout() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const isSwedish = i18n.language.startsWith('sv')
    document.documentElement.lang = isSwedish ? 'sv' : 'en'
    document.title = isSwedish ? seoConfig.titleSv : seoConfig.titleEn

    const description = isSwedish ? seoConfig.descriptionSv : seoConfig.descriptionEn
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [i18n.language])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <CabinInfoSection />
        <BookingProcessSection />
        <PricingSection />
        <RulesSummarySection />
        <FaqSection />
        <BookingSection />
        <PrivacySection />
        <BookingTermsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
