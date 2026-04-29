import { useTranslation } from 'react-i18next'

import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

type FaqItem = {
  q: string
  a: string
}

export function FaqSection() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FaqItem[]

  return (
    <Section id="faq" className="section--surface" labelledBy="faq-title">
      <SectionHeading id="faq-title" title={t('faq.title')} />
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
