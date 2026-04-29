export type PricingItem = {
  id: string
  labelKey: string
  value: string
  noteKey?: string
}

export const pricingConfig = {
  isPlaceholder: true,
  currency: 'SEK',
  items: [
    {
      id: 'nightly',
      labelKey: 'pricing.rows.nightly',
      value: '1 650 SEK / night',
      noteKey: 'pricing.rows.nightlyNote',
    },
    {
      id: 'weekly',
      labelKey: 'pricing.rows.weekly',
      value: '9 900 SEK / week',
      noteKey: 'pricing.rows.weeklyNote',
    },
    {
      id: 'cleaning',
      labelKey: 'pricing.rows.cleaning',
      value: '900 SEK',
    },
    {
      id: 'boat',
      labelKey: 'pricing.rows.boat',
      value: '500 SEK / day',
      noteKey: 'pricing.rows.boatNote',
    },
  ] satisfies PricingItem[],
} as const
