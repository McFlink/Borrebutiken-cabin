export const businessConfig = {
  brandName: 'Borrebutiken',
  websiteUrl: 'https://borrebutiken.se',
  cabinName: 'Borrebutiken Fishing Cabin',
  contactPerson: 'Patric Tall',
  contactEmail: 'infog@borrebutiken.se',
  contactPhone: '+46 700 00 00 00',
  location: {
    region: 'Dalsland, Sweden',
    nearestTown: '15 minuter från Mellerud',
  },
  season: {
    fromMonth: 4,
    toMonth: 11,
    label: 'April-November',
  },
} as const

export type BusinessConfig = typeof businessConfig
