import { useTranslation } from 'react-i18next'

import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function BookingTermsSection() {
  const { t } = useTranslation()
  const body = t('terms.body', { returnObjects: true }) as string[]

  return (
    <Section id="terms" className="section--surface" labelledBy="terms-title">
      <SectionHeading id="terms-title" title={t('terms.title')} />
      <ul className="rules-list">
        {body.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  )
}
