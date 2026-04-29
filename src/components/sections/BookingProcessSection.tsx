import { useTranslation } from 'react-i18next'

import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function BookingProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as string[]

  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading id="process-title" title={t('process.title')} centered />

      <ol className="process-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <p className="section-note">{t('process.notice')}</p>
    </Section>
  )
}
