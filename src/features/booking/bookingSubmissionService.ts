import { mockBookingSubmissionService } from './bookingSubmissionMock'
import type { BookingSubmissionService } from './bookingTypes'

// The active implementation for MVP. Replace with an adapter that calls
// a secure serverless endpoint in production.
export const bookingSubmissionService: BookingSubmissionService =
  mockBookingSubmissionService

// TODO: Optional short-term path for MVP pilots:
// - Add an EmailJS adapter here if needed for quick trials.
// TODO: Recommended production path:
// - Add a serverless function that receives this payload and calls Brevo
//   server-side with private API keys. Never expose Brevo keys in frontend code.
