export const supportedLanguages = ['sv', 'en'] as const

export type LanguageCode = (typeof supportedLanguages)[number]
