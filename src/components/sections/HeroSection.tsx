import { useTranslation } from 'react-i18next'

import { businessConfig } from '../../config/businessConfig'
import { mediaConfig } from '../../config/mediaConfig'
import { Button } from '../ui/Button'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="top" className="hero-section">
      <div className="container hero-section__inner">
        <div className="hero-copy">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-cta-row">
            <a href="#booking">
              <Button>{t('hero.primaryCta')}</Button>
            </a>
            <a href="#cabin">
              <Button variant="secondary">{t('hero.secondaryCta')}</Button>
            </a>
          </div>
          <p className="hero-trustline">{businessConfig.brandName}</p>
        </div>

        <div className="hero-visual">
          <figure className="media-card media-card--large">
            <img
              src={mediaConfig.hero.exterior}
              alt={t('hero.imageAlts.exterior')}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>{t('hero.imageLabels.exterior')}</figcaption>
          </figure>
          <div className="hero-visual__grid">
            <figure className="media-card">
              <img
                src={mediaConfig.hero.interior}
                alt={t('hero.imageAlts.interior')}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{t('hero.imageLabels.interior')}</figcaption>
            </figure>
            <figure className="media-card">
              <img
                src={mediaConfig.hero.fishing}
                alt={t('hero.imageAlts.fishing')}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{t('hero.imageLabels.fishing')}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
