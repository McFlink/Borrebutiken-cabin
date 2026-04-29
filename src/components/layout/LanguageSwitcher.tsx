import { useTranslation } from 'react-i18next'

import { useLanguage } from '../../hooks/useLanguage'
import type { LanguageCode } from '../../types/i18n'

const languageOptions: LanguageCode[] = ['sv', 'en']

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { currentLanguage, setLanguage } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={t('common.switchLanguage')}>
      {languageOptions.map((lng) => (
        <button
          key={lng}
          type="button"
          className={currentLanguage === lng ? 'is-active' : ''}
          onClick={() => setLanguage(lng)}
          aria-pressed={currentLanguage === lng}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
