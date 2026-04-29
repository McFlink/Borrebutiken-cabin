export const businessConfig = {
  brandName: 'Borrebutiken',
  websiteUrl: 'https://borrebutiken.se',
  cabinName: 'Borrebutiken Fishing Cabin',
  contactPerson: 'Patric',
  contactEmail: 'booking@borrebutiken.se',
  contactPhone: '+46 700 00 00 00',
  location: {
    region: 'Dalsland, Sweden',
    nearestTown: 'Placeholder nearest town',
  },
  season: {
    fromMonth: 4,
    toMonth: 11,
    label: 'April-November',
  },
} as const

export type BusinessConfig = typeof businessConfig
