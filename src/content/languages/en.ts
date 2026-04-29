export const en = {
  common: {
    languageName: 'English',
    switchLanguage: 'Switch language',
    placeholders: {
      image: 'Image placeholder',
    },
    cta: {
      sendRequest: 'Send booking inquiry',
      readMore: 'Read more',
      viewDetails: 'View details',
    },
  },
  navigation: {
    cabin: 'Cabin',
    process: 'Booking process',
    pricing: 'Pricing',
    faq: 'FAQ',
    booking: 'Booking inquiry',
    privacy: 'Privacy',
    terms: 'Booking terms',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Fishing cabin in Dalsland',
    title: 'Fishing, nature and calm by the water',
    subtitle:
      'A professional and trustworthy stay for anglers who want to experience the lakes, nature and quiet of Dalsland.',
    primaryCta: 'Send booking inquiry',
    secondaryCta: 'View cabin details',
    imageLabels: {
      exterior: 'Cabin by the water in Dalsland',
      interior: 'Warm and modern cabin interior',
      fishing: 'Fishing waters with boat and nature',
    },
    imageAlts: {
      exterior: 'A lakeside cabin surrounded by nature',
      interior: 'Cabin interior with a warm and modern atmosphere',
      fishing: 'Calm lake environment in Dalsland suitable for fishing',
    },
  },
  cabin: {
    title: 'Cabin information',
    intro:
      'Borrebutiken Fishing Cabin is designed for guests who prioritize fishing, comfort and practical logistics close to water and nature.',
    aboutTitle: 'What you get',
    aboutItems: [
      'Functional cabin with social areas for fishing groups',
      'Close to lakes with good opportunities for pike, perch and zander',
      'Calm setting with easy access to nature and day-fishing spots',
    ],
    locationTitle: 'Location and fishing experience',
    locationBody:
      'The cabin is located in Dalsland with access to several waters within reasonable distance. Exact meeting point and directions are shared after confirmed booking.',
    includedTitle: 'Included in your stay',
    includedItems: [
      'Basic equipped kitchen and dining area',
      'Beds according to maximum guest capacity',
      'Wi-Fi (placeholder)',
      'Parking availability',
    ],
    amenitiesTitle: 'Amenities',
    amenitiesItems: [
      'Shower and WC',
      'Fridge/freezer and cooking equipment',
      'Outdoor area to relax after fishing',
      'Storage for fishing gear (placeholder)',
    ],
    anglersTitle: 'Built for anglers',
    anglersBody:
      'Planned for early mornings, full days on the water, and smooth evenings back at the cabin.',
    guestsLabel: 'Maximum guests',
    seasonLabel: 'Season',
  },
  process: {
    title: 'How the booking process works',
    steps: [
      'You send a booking inquiry with your preferred dates.',
      'Patric manually checks availability and replies.',
      'If available, you receive confirmation and payment instructions.',
      'The booking is valid only after manual confirmation and received payment.',
    ],
    notice:
      'This is not an instant booking system. All bookings are handled manually in this MVP version.',
  },
  pricing: {
    title: 'Pricing',
    placeholderNotice:
      'Please note: the prices below are examples/placeholders and can be adjusted.',
    rowLabel: 'Item',
    rowValue: 'Price',
    rows: {
      nightly: 'Nightly rate',
      nightlyNote: 'Minimum two nights (placeholder)',
      weekly: 'Weekly rate',
      weeklyNote: '7 nights, discounted total',
      cleaning: 'Final cleaning',
      boat: 'Boat add-on',
      boatNote: 'Availability is manually confirmed',
    },
  },
  rules: {
    title: 'Rules and conditions summary',
    items: [
      'Maximum guests according to the booking must be respected.',
      'Final cleaning is handled according to agreement and booking terms.',
      'Placeholder times: check-in 16:00, check-out 10:00.',
      'Pets: by agreement (placeholder).',
      'No smoking indoors.',
      'Guests are responsible for damages during their stay.',
      'Cancellation is handled according to booking terms.',
      'Fishing permits, boat rules and safety information must be followed.',
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is my booking confirmed immediately?',
        a: 'No. You send an inquiry and receive manual follow-up from Patric.',
      },
      {
        q: 'How do I pay?',
        a: 'Payment is handled manually after confirmation, for example by Swish or bank transfer.',
      },
      {
        q: 'Is fishing equipment included?',
        a: 'The base offer is accommodation. Equipment and add-ons are confirmed separately.',
      },
      {
        q: 'Do I need a fishing permit?',
        a: 'Yes, many waters require permits. Exact rules depend on area and are shared before arrival.',
      },
      {
        q: 'Can international guests book?',
        a: 'Yes, international booking inquiries are welcome.',
      },
      {
        q: 'What happens if I need to cancel?',
        a: 'Cancellation is handled according to the booking terms shared during confirmation.',
      },
      {
        q: 'Are pets allowed?',
        a: 'Pets may be possible by prior agreement.',
      },
      {
        q: 'How many people can stay?',
        a: 'This MVP setup is configured for up to 4 guests.',
      },
    ],
  },
  bookingForm: {
    title: 'Send booking inquiry',
    intro:
      'Complete the form and Patric will follow up after manually checking availability.',
    fields: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone number',
      country: 'Country',
      guests: 'Number of guests',
      arrivalDate: 'Preferred arrival date',
      departureDate: 'Preferred departure date',
      message: 'Message (optional)',
      termsAccepted: 'I accept the booking terms',
      privacyAccepted: 'I have read the privacy information',
      botField: 'Leave this field empty',
    },
    placeholders: {
      country: 'e.g. Sweden',
      message: 'Share fishing focus, preferences or questions.',
    },
    submit: 'Send inquiry',
    submitting: 'Sending...',
    successTitle: 'Inquiry received',
    successMessage:
      'Thank you. Your booking inquiry has been received. This is not a confirmed booking yet. We will follow up with manual confirmation and payment details.',
    errorTitle: 'Something went wrong',
    errorMessage:
      'We could not submit your inquiry right now. Please try again or contact us directly.',
    helperText:
      'A booking is valid only after manual confirmation and received payment.',
    validation: {
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      invalidPhone: 'Enter a valid phone number.',
      guestsRange: 'Guests must be between {{min}} and {{max}}.',
      invalidDateOrder: 'Departure date must be after arrival date.',
      termsRequired: 'You must accept the booking terms.',
      privacyRequired: 'You must read and accept the privacy information.',
      honeypotDetected: 'Invalid request.',
    },
  },
  privacy: {
    title: 'Privacy information',
    body: [
      'We collect personal data such as name, contact details and booking preferences when you submit a booking inquiry.',
      'The data is used only to handle your inquiry, communicate availability and manage a potential booking.',
      'Borrebutiken is responsible for data handling in relation to the booking dialogue.',
      'You can contact us if you want information, corrections or data removal.',
    ],
  },
  terms: {
    title: 'Booking terms',
    body: [
      'A booking inquiry is not a confirmed booking.',
      'Bookings are confirmed manually after availability review.',
      'Final confirmation requires received payment according to instructions.',
      'Cancellation policy applies according to agreed terms (placeholder).',
      'Guests are responsible for damages and must follow house rules during the stay.',
    ],
  },
  contact: {
    title: 'Contact',
    personLabel: 'Contact person',
    brandLabel: 'Company/brand',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    websiteLabel: 'Website',
  },
  footer: {
    note:
      'MVP version. Bookings are handled manually and are not automatically confirmed after form submission.',
  },
} as const
