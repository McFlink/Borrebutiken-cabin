import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import { bookingConfig } from '../../config/bookingConfig'
import { createBookingSchema } from './bookingSchema'
import { bookingSubmissionService } from './bookingSubmissionService'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function BookingForm() {
  const { t, i18n } = useTranslation()
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const schema = useMemo(
    () =>
      createBookingSchema(bookingConfig.maxGuests, {
        required: t('bookingForm.validation.required'),
        invalidEmail: t('bookingForm.validation.invalidEmail'),
        invalidPhone: t('bookingForm.validation.invalidPhone'),
        guestsRange: t('bookingForm.validation.guestsRange', {
          min: bookingConfig.minGuests,
          max: bookingConfig.maxGuests,
        }),
        invalidDateOrder: t('bookingForm.validation.invalidDateOrder'),
        termsRequired: t('bookingForm.validation.termsRequired'),
        privacyRequired: t('bookingForm.validation.privacyRequired'),
        honeypotDetected: t('bookingForm.validation.honeypotDetected'),
      }),
    [i18n.language, t],
  )

  type BookingFormValues = z.input<typeof schema>
  type BookingFormOutput = z.output<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues, undefined, BookingFormOutput>({
    resolver: zodResolver(schema),
    defaultValues: {
      guests: 1,
      termsAccepted: false,
      privacyAccepted: false,
      website: '',
    },
  })

  const onSubmit = async (values: BookingFormOutput) => {
    setSubmitState('submitting')

    const result = await bookingSubmissionService.submitBookingRequest({
      ...values,
      message: values.message || '',
      website: values.website || '',
    })

    if (result.ok) {
      setSubmitState('success')
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        guests: 1,
        arrivalDate: '',
        departureDate: '',
        message: '',
        termsAccepted: false,
        privacyAccepted: false,
        website: '',
      })
      return
    }

    setSubmitState('error')
  }

  return (
    <form className="booking-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid">
        <label>
          <span>{t('bookingForm.fields.firstName')}</span>
          <input type="text" autoComplete="given-name" {...register('firstName')} />
          {errors.firstName ? <small className="error-text">{errors.firstName.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.lastName')}</span>
          <input type="text" autoComplete="family-name" {...register('lastName')} />
          {errors.lastName ? <small className="error-text">{errors.lastName.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.email')}</span>
          <input type="email" autoComplete="email" {...register('email')} />
          {errors.email ? <small className="error-text">{errors.email.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.phone')}</span>
          <input type="tel" autoComplete="tel" {...register('phone')} />
          {errors.phone ? <small className="error-text">{errors.phone.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.country')}</span>
          <input type="text" autoComplete="country-name" placeholder={t('bookingForm.placeholders.country')} {...register('country')} />
          {errors.country ? <small className="error-text">{errors.country.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.guests')}</span>
          <input
            type="number"
            min={bookingConfig.minGuests}
            max={bookingConfig.maxGuests}
            {...register('guests', { valueAsNumber: true })}
          />
          {errors.guests ? <small className="error-text">{errors.guests.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.arrivalDate')}</span>
          <input type="date" {...register('arrivalDate')} />
          {errors.arrivalDate ? <small className="error-text">{errors.arrivalDate.message}</small> : null}
        </label>

        <label>
          <span>{t('bookingForm.fields.departureDate')}</span>
          <input type="date" {...register('departureDate')} />
          {errors.departureDate ? <small className="error-text">{errors.departureDate.message}</small> : null}
        </label>
      </div>

      <label>
        <span>{t('bookingForm.fields.message')}</span>
        <textarea rows={4} placeholder={t('bookingForm.placeholders.message')} {...register('message')} />
      </label>

      <div className="visually-hidden" aria-hidden="true">
        <label>
          <span>{t('bookingForm.fields.botField')}</span>
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
          {errors.website ? <small className="error-text">{errors.website.message}</small> : null}
        </label>
      </div>

      <label className="checkbox-row">
        <input type="checkbox" {...register('termsAccepted')} />
        <span>{t('bookingForm.fields.termsAccepted')}</span>
      </label>
      {errors.termsAccepted ? <small className="error-text">{errors.termsAccepted.message}</small> : null}

      <label className="checkbox-row">
        <input type="checkbox" {...register('privacyAccepted')} />
        <span>{t('bookingForm.fields.privacyAccepted')}</span>
      </label>
      {errors.privacyAccepted ? <small className="error-text">{errors.privacyAccepted.message}</small> : null}

      <p className="section-note">{t('bookingForm.helperText')}</p>

      <button type="submit" disabled={isSubmitting} className="btn btn--primary">
        {isSubmitting ? t('bookingForm.submitting') : t('bookingForm.submit')}
      </button>

      {submitState === 'success' ? (
        <div className="status-card status-card--success" role="status" aria-live="polite">
          <strong>{t('bookingForm.successTitle')}</strong>
          <p>{t('bookingForm.successMessage')}</p>
        </div>
      ) : null}

      {submitState === 'error' ? (
        <div className="status-card status-card--error" role="alert">
          <strong>{t('bookingForm.errorTitle')}</strong>
          <p>{t('bookingForm.errorMessage')}</p>
        </div>
      ) : null}
    </form>
  )
}
