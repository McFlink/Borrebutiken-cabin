export const bookingConfig = {
  minGuests: 1,
  maxGuests: 4,
  minStayNights: 2,
  checkInTime: '16:00',
  checkOutTime: '10:00',
  petsPolicy: 'By agreement (placeholder)',
  smokingPolicy: 'Not allowed indoors (placeholder)',
  cancellationPolicy: 'Handled according to booking terms (placeholder)',
  paymentMethods: ['Swish', 'Bank transfer', 'Company invoice (case-by-case)'],
} as const

export type BookingConfig = typeof bookingConfig
