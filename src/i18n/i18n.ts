import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from '../content/languages/en'
import { sv } from '../content/languages/sv'

const resources = {
  sv: {
    translation: sv,
  },
  en: {
    translation: en,
  },
} as const

void i18n.use(initReactI18next).init({
  resources,
  lng: 'sv',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
