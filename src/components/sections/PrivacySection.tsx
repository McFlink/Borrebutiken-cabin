import { useTranslation } from 'react-i18next'

import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function PrivacySection() {
  const { t } = useTranslation()
  const body = t('privacy.body', { returnObjects: true }) as string[]

  return (
    <Section id="privacy" labelledBy="privacy-title">
      <SectionHeading id="privacy-title" title={t('privacy.title')} />
      <div className="stacked-copy">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
