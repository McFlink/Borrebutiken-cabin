export type BookingRequest = {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  guests: number
  arrivalDate: string
  departureDate: string
  message?: string
  termsAccepted: boolean
  privacyAccepted: boolean
  website?: string
}

export type BookingSubmissionResult = {
  ok: boolean
  message?: string
}

export type BookingSubmissionService = {
  submitBookingRequest: (
    payload: BookingRequest,
  ) => Promise<BookingSubmissionResult>
}
