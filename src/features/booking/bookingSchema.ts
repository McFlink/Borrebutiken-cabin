import { z } from 'zod'

export type BookingValidationMessages = {
  required: string
  invalidEmail: string
  invalidPhone: string
  guestsRange: string
  invalidDateOrder: string
  termsRequired: string
  privacyRequired: string
  honeypotDetected: string
}

export const createBookingSchema = (
  maxGuests: number,
  messages: BookingValidationMessages,
) =>
  z
    .object({
      firstName: z.string().trim().min(1, messages.required),
      lastName: z.string().trim().min(1, messages.required),
      email: z
        .string()
        .trim()
        .min(1, messages.required)
        .email(messages.invalidEmail),
      phone: z
        .string()
        .trim()
        .min(1, messages.required)
        .regex(/^[+()\-\s\d]{7,20}$/, messages.invalidPhone),
      country: z.string().trim().min(1, messages.required),
      guests: z.number().int().min(1, messages.guestsRange).max(maxGuests, messages.guestsRange),
      arrivalDate: z.string().trim().min(1, messages.required),
      departureDate: z.string().trim().min(1, messages.required),
      message: z.string().trim().optional(),
      termsAccepted: z.boolean().refine((value) => value, messages.termsRequired),
      privacyAccepted: z.boolean().refine((value) => value, messages.privacyRequired),
      website: z
        .string()
        .optional()
        .refine((value) => !value || value.trim() === '', messages.honeypotDetected),
    })
    .superRefine((values, ctx) => {
      if (!values.arrivalDate || !values.departureDate) {
        return
      }

      const arrival = new Date(values.arrivalDate)
      const departure = new Date(values.departureDate)

      if (Number.isNaN(arrival.getTime()) || Number.isNaN(departure.getTime())) {
        return
      }

      if (departure <= arrival) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['departureDate'],
          message: messages.invalidDateOrder,
        })
      }
    })

export type BookingSchema = ReturnType<typeof createBookingSchema>
