import { useTranslation } from 'react-i18next'

import { BookingForm } from '../../features/booking/BookingForm'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function BookingSection() {
  const { t } = useTranslation()

  return (
    <Section id="booking" className="section--surface" labelledBy="booking-title">
      <SectionHeading
        id="booking-title"
        title={t('bookingForm.title')}
        subtitle={t('bookingForm.intro')}
      />
      <BookingForm />
    </Section>
  )
}
