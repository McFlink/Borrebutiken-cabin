export const sv = {
  common: {
    languageName: 'Svenska',
    switchLanguage: 'Byt språk',
    placeholders: {
      image: 'Bildplats',
    },
    cta: {
      sendRequest: 'Skicka bokningsförfrågan',
      readMore: 'Läs mer',
      viewDetails: 'Visa detaljer',
    },
  },
  navigation: {
    cabin: 'Stugan',
    process: 'Bokningsprocess',
    pricing: 'Priser',
    faq: 'FAQ',
    booking: 'Bokningsförfrågan',
    privacy: 'Integritet',
    terms: 'Bokningsvillkor',
    contact: 'Kontakt',
  },
  hero: {
    eyebrow: 'Fiskestuga i Dalsland',
    title: 'Fiske, natur och lugn vid vattnet',
    subtitle:
      'Ett professionellt och tryggt boende för sportfiskare som vill uppleva Dalslands sjöar, natur och stillhet.',
    primaryCta: 'Skicka bokningsförfrågan',
    secondaryCta: 'Se stugdetaljer',
    imageLabels: {
      exterior: 'Stuga vid vattnet i Dalsland',
      interior: 'Interiör med varm och modern stugkänsla',
      fishing: 'Fiskevatten med båt och naturmiljö',
    },
    imageAlts: {
      exterior: 'En stuga vid sjön omgiven av natur',
      interior: 'Interiör i stugan med modern och varm känsla',
      fishing: 'Lugn sjömiljö i Dalsland lämplig för fiske',
    },
  },
  cabin: {
    title: 'Om stugan',
    intro:
      'Borrebutiken Fishing Cabin är framtagen för gäster som prioriterar fiske, bekvämlighet och enkel logistik nära vatten och natur.',
    aboutTitle: 'Det här får du',
    aboutItems: [
      'Praktisk stuga med sociala ytor för fiskesällskap',
      'Nära sjöar med goda möjligheter till gädda, abborre och gös',
      'Lugn miljö med närhet till natur och bra utgångsläge för dagsfiske',
    ],
    locationTitle: 'Läge och fiskeupplevelse',
    locationBody:
      'Stugan ligger i Dalsland med tillgång till flera vatten inom rimligt avstånd. Exakt mötesplats och vägbeskrivning skickas vid bekräftad bokning.',
    includedTitle: 'Ingår i vistelsen',
    includedItems: [
      'Basutrustat kök och matplats',
      'Sovplatser enligt maxantal gäster',
      'Wi-Fi (?)',
      'Parkeringsmöjlighet för bil + båt',
    ],
    amenitiesTitle: 'Bekvämligheter',
    amenitiesItems: [
      'Dusch och WC',
      'Kyl/frys och matlagningsutrustning',
      'Utomhusyta för avkoppling efter fiskepasset',
      'Förvaring för fiskeredskap (placeholder)',
    ],
    anglersTitle: 'Anpassad för sportfiskare',
    anglersBody:
      'Planerad för tidiga morgnar, heldagar ute på sjön och smidiga kvällar tillbaka i stugan.',
    guestsLabel: 'Max antal gäster',
    seasonLabel: 'Säsong',
  },
  process: {
    title: 'Så fungerar bokningsprocessen',
    steps: [
      'Du skickar en bokningsförfrågan med önskade datum.',
      'Patric kontrollerar tillgänglighet manuellt och återkopplar.',
      'Du får bekräftelse och betalningsinstruktioner om perioden är ledig.',
      'Bokningen gäller först efter manuell bekräftelse och mottagen betalning.',
    ],
    notice:
      'Detta är inte ett system för direktbokning. Alla bokningar hanteras manuellt i denna MVP-version.',
  },
  pricing: {
    title: 'Priser',
    placeholderNotice:
      'Observera: priserna nedan är exempel/prisplatshållare och kan justeras.',
    rowLabel: 'Prispost',
    rowValue: 'Pris',
    rows: {
      nightly: 'Nattpris',
      nightlyNote: 'Minst två nätter (placeholder)',
      weekly: 'Veckopris',
      weeklyNote: '7 nätter, rabatterat totalpris',
      cleaning: 'Slutstädning',
      boat: 'Båt (tillval)',
      boatNote: 'Tillgänglighet bekräftas manuellt',
    },
  },
  rules: {
    title: 'Regler och villkor i korthet',
    items: [
      'Max antal gäster enligt bokningen måste följas.',
      'Slutstädning hanteras enligt överenskommelse och bokningsvillkor.',
      'Preliminära tider: incheckning 16:00, utcheckning 10:00.',
      'Husdjur: enligt överenskommelse (placeholder).',
      'Rökning inomhus är inte tillåten.',
      'Gästen ansvarar för skador som uppstår under vistelsen.',
      'Avbokning hanteras enligt gällande bokningsvillkor.',
      'Fiskekort, båtregler och säkerhetsinformation måste följas.',
    ],
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        q: 'Blir bokningen bekräftad direkt?',
        a: 'Nej. Du skickar en förfrågan och får manuell återkoppling från Patric.',
      },
      {
        q: 'Hur betalar jag?',
        a: 'Betalning sker manuellt enligt instruktion, till exempel via Swish eller banköverföring.',
      },
      {
        q: 'Ingår fiskeutrustning?',
        a: 'Grundupplägg är boende. Eventuell utrustning eller tillval bekräftas separat.',
      },
      {
        q: 'Behöver jag fiskekort?',
        a: 'Ja, i många vatten krävs fiskekort. Exakta regler beror på område och kommuniceras inför vistelsen.',
      },
      {
        q: 'Kan internationella gäster boka?',
        a: 'Ja, bokningsförfrågningar från internationella gäster är välkomna.',
      },
      {
        q: 'Vad händer om jag måste avboka?',
        a: 'Avbokningar hanteras enligt bokningsvillkoren som delas vid bekräftelse.',
      },
      {
        q: 'Är husdjur tillåtna?',
        a: 'Husdjur kan vara möjliga enligt överenskommelse.',
      },
      {
        q: 'Hur många personer kan bo i stugan?',
        a: 'Stugan är avsedd för upp till 4 gäster.',
      },
    ],
  },
  bookingForm: {
    title: 'Skicka bokningsförfrågan',
    intro:
      'Fyll i formuläret så återkommer herr direktör Patric efter manuell kontroll av tillgänglighet.',
    fields: {
      firstName: 'Förnamn',
      lastName: 'Efternamn',
      email: 'E-post',
      phone: 'Telefonnummer',
      country: 'Land',
      guests: 'Antal gäster',
      arrivalDate: 'Önskat ankomstdatum',
      departureDate: 'Önskat avresedatum',
      message: 'Meddelande (valfritt)',
      termsAccepted: 'Jag accepterar bokningsvillkoren',
      privacyAccepted: 'Jag har läst integritetsinformationen',
      botField: 'Lämna detta fält tomt',
    },
    placeholders: {
      country: 't.ex. Sverige',
      message: 'Beskriv gärna fiskefokus, önskemål eller frågor.',
    },
    submit: 'Skicka förfrågan',
    submitting: 'Skickar...',
    successTitle: 'Förfrågan mottagen',
    successMessage:
      'Tack! Din bokningsförfrågan är mottagen. Detta är inte en bekräftad bokning ännu. Vi återkommer med manuell bekräftelse och betalningsinformation.',
    errorTitle: 'Något gick fel',
    errorMessage:
      'Vi kunde inte skicka din förfrågan just nu. Försök igen eller kontakta oss direkt.',
    helperText:
      'Bokningen är giltig först efter manuell bekräftelse och mottagen betalning.',
    validation: {
      required: 'Det här fältet är obligatoriskt.',
      invalidEmail: 'Ange en giltig e-postadress.',
      invalidPhone: 'Ange ett giltigt telefonnummer.',
      guestsRange: 'Antal gäster måste vara mellan {{min}} och {{max}}.',
      invalidDateOrder: 'Avresedatum måste vara senare än ankomstdatum.',
      termsRequired: 'Du måste acceptera bokningsvillkoren.',
      privacyRequired: 'Du måste läsa och acceptera integritetsinformationen.',
      honeypotDetected: 'Ogiltig förfrågan.',
    },
  },
  privacy: {
    title: 'Integritetsinformation',
    body: [
      'Vi samlar in personuppgifter som namn, kontaktuppgifter och bokningsönskemål när du skickar en bokningsförfrågan.',
      'Uppgifterna används enbart för att hantera din förfrågan, återkoppla om tillgänglighet och administrera eventuell bokning.',
      'Borrebutiken ansvarar för hantering av uppgifterna i samband med bokningsdialogen.',
      'Du kan kontakta oss om du vill få information, rätta uppgifter eller begära radering.',
    ],
  },
  terms: {
    title: 'Bokningsvillkor',
    body: [
      'En bokningsförfrågan är inte en bekräftad bokning.',
      'Bokning bekräftas manuellt efter kontroll av tillgänglighet.',
      'Slutlig bekräftelse kräver mottagen betalning enligt instruktion.',
      'Avbokningsvillkor gäller enligt överenskommen policy (placeholder).',
      'Gästen ansvarar för skador och ska följa husreglerna under vistelsen.',
    ],
  },
  contact: {
    title: 'Kontakt',
    personLabel: 'Kontaktperson',
    brandLabel: 'Företag/varumärke',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
    websiteLabel: 'Webbplats',
  },
  footer: {
    note:
      'MVP-version. Bokningar hanteras manuellt och är inte automatiskt bekräftade vid inskickad förfrågan.',
  },
} as const
