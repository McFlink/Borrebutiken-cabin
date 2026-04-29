import { useTranslation } from 'react-i18next'

import { businessConfig } from '../../config/businessConfig'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <Section id="contact" labelledBy="contact-title">
      <SectionHeading id="contact-title" title={t('contact.title')} />

      <div className="contact-grid">
        <article className="panel">
          <h3>{t('contact.personLabel')}</h3>
          <p>{businessConfig.contactPerson}</p>
        </article>

        <article className="panel">
          <h3>{t('contact.brandLabel')}</h3>
          <p>{businessConfig.brandName}</p>
        </article>

        <article className="panel">
          <h3>{t('contact.emailLabel')}</h3>
          <p>
            <a href={`mailto:${businessConfig.contactEmail}`}>{businessConfig.contactEmail}</a>
          </p>
        </article>

        <article className="panel">
          <h3>{t('contact.phoneLabel')}</h3>
          <p>
            <a href={`tel:${businessConfig.contactPhone}`}>{businessConfig.contactPhone}</a>
          </p>
        </article>

        <article className="panel panel--full-width">
          <h3>{t('contact.websiteLabel')}</h3>
          <p>
            <a href={businessConfig.websiteUrl} target="_blank" rel="noreferrer">
              {businessConfig.websiteUrl}
            </a>
          </p>
        </article>
      </div>
    </Section>
  )
}
