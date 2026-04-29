import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import type { LanguageCode } from '../types/i18n'

export function useLanguage() {
  const { i18n } = useTranslation()

  const currentLanguage = useMemo(() => {
    const lng = i18n.resolvedLanguage ?? i18n.language
    return (lng.startsWith('sv') ? 'sv' : 'en') as LanguageCode
  }, [i18n.language, i18n.resolvedLanguage])

  const setLanguage = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
  }

  return {
    currentLanguage,
    setLanguage,
  }
}
