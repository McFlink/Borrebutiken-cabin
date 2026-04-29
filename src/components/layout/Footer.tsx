import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container">
        <p>{t('footer.note')}</p>
      </div>
    </footer>
  )
}
