import { useTranslation } from 'react-i18next'

import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function RulesSummarySection() {
  const { t } = useTranslation()
  const rules = t('rules.items', { returnObjects: true }) as string[]

  return (
    <Section id="rules" labelledBy="rules-title">
      <SectionHeading id="rules-title" title={t('rules.title')} />
      <ul className="rules-list">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </Section>
  )
}
