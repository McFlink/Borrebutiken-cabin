import { useTranslation } from 'react-i18next'

import { pricingConfig } from '../../config/pricingConfig'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <Section id="pricing" className="section--surface" labelledBy="pricing-title">
      <SectionHeading id="pricing-title" title={t('pricing.title')} />

      {pricingConfig.isPlaceholder ? (
        <p className="section-note">{t('pricing.placeholderNotice')}</p>
      ) : null}

      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>{t('pricing.rowLabel')}</th>
              <th>{t('pricing.rowValue')}</th>
            </tr>
          </thead>
          <tbody>
            {pricingConfig.items.map((row) => (
              <tr key={row.id}>
                <td>
                  <div>{t(row.labelKey)}</div>
                  {row.noteKey ? <small>{t(row.noteKey)}</small> : null}
                </td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
