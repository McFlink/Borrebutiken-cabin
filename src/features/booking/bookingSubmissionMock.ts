import type { BookingSubmissionResult, BookingSubmissionService } from './bookingTypes'

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

export const mockBookingSubmissionService: BookingSubmissionService = {
  async submitBookingRequest(payload): Promise<BookingSubmissionResult> {
    await wait(850)

    const shouldFail = payload.email.toLowerCase().includes('fail-test')
    if (shouldFail) {
      return {
        ok: false,
        message: 'Mock failure triggered by test email pattern.',
      }
    }

    return {
      ok: true,
    }
  },
}
