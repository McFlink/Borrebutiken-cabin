import { useTranslation } from 'react-i18next'

import { businessConfig } from '../../config/businessConfig'
import { LanguageSwitcher } from './LanguageSwitcher'

const navKeys = [
  { href: '#cabin', key: 'navigation.cabin' },
  { href: '#process', key: 'navigation.process' },
  { href: '#pricing', key: 'navigation.pricing' },
  { href: '#faq', key: 'navigation.faq' },
  { href: '#booking', key: 'navigation.booking' },
  { href: '#contact', key: 'navigation.contact' },
] as const

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-logo">
          {businessConfig.brandName}
        </a>

        <nav aria-label="Primary" className="site-nav">
          {navKeys.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
