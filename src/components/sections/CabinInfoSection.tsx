import { useTranslation } from 'react-i18next'

import { bookingConfig } from '../../config/bookingConfig'
import { businessConfig } from '../../config/businessConfig'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function CabinInfoSection() {
  const { t } = useTranslation()

  const aboutItems = t('cabin.aboutItems', { returnObjects: true }) as string[]
  const includedItems = t('cabin.includedItems', { returnObjects: true }) as string[]
  const amenitiesItems = t('cabin.amenitiesItems', { returnObjects: true }) as string[]

  return (
    <Section id="cabin" className="section--surface" labelledBy="cabin-title">
      <SectionHeading id="cabin-title" title={t('cabin.title')} subtitle={t('cabin.intro')} />

      <div className="info-grid">
        <article className="panel">
          <h3>{t('cabin.aboutTitle')}</h3>
          <ul>
            {aboutItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h3>{t('cabin.locationTitle')}</h3>
          <p>{t('cabin.locationBody')}</p>
          <p className="meta-line">
            {businessConfig.location.region} | {businessConfig.location.nearestTown}
          </p>
        </article>

        <article className="panel">
          <h3>{t('cabin.includedTitle')}</h3>
          <ul>
            {includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h3>{t('cabin.amenitiesTitle')}</h3>
          <ul>
            {amenitiesItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="fact-row">
        <article className="fact-card">
          <h3>{t('cabin.anglersTitle')}</h3>
          <p>{t('cabin.anglersBody')}</p>
        </article>
        <article className="fact-card">
          <h3>{t('cabin.guestsLabel')}</h3>
          <p>{bookingConfig.maxGuests}</p>
        </article>
        <article className="fact-card">
          <h3>{t('cabin.seasonLabel')}</h3>
          <p>{businessConfig.season.label}</p>
        </article>
      </div>
    </Section>
  )
}
