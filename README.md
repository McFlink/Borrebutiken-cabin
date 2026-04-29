# Borrebutiken Cabin MVP

Production-minded MVP website for a fishing cabin rental business in Dalsland, Sweden under the Borrebutiken brand.

This version is intentionally inquiry-based:

- No backend
- No database
- No authentication/admin
- No real payment integration
- No instant booking confirmation

## Tech Stack

- React
- Vite
- TypeScript
- react-hook-form
- zod
- i18next + react-i18next

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  app/
    App.tsx
    AppLayout.tsx
  components/
    layout/
    sections/
    ui/
  config/
    bookingConfig.ts
    businessConfig.ts
    pricingConfig.ts
    seoConfig.ts
  content/
    languages/
      en.ts
      sv.ts
    types.ts
  features/
    booking/
      BookingForm.tsx
      bookingSchema.ts
      bookingSubmissionMock.ts
      bookingSubmissionService.ts
      bookingTypes.ts
  hooks/
    useLanguage.ts
  i18n/
    i18n.ts
  styles/
    globals.css
    tokens.css
  types/
    i18n.ts
  main.tsx
```

## How to Edit Business Info

Edit central business details in:

- `src/config/businessConfig.ts`

Includes:

- Brand/company info
- Contact person, email, phone
- Website URL
- Location and season labels

## How to Edit Translations

Edit language content in:

- `src/content/languages/sv.ts`
- `src/content/languages/en.ts`

All section copy, labels, CTA text, form text, and legal summary text are centralized here.

To add German later:

1. Create `src/content/languages/de.ts` following the same object structure.
2. Register it in `src/i18n/i18n.ts` resources.
3. Add `de` to language options if desired.

## How to Change Pricing, Guests, Rules

- Pricing rows and placeholder status:
  - `src/config/pricingConfig.ts`
- Booking constraints like max guests and policy placeholders:
  - `src/config/bookingConfig.ts`
- Rules, terms summary, FAQ wording:
  - `src/content/languages/sv.ts`
  - `src/content/languages/en.ts`

## Booking Form Architecture (Current MVP)

Form flow is intentionally a booking request/inquiry flow.

Current behavior:

1. User fills and submits inquiry form.
2. Frontend validates with Zod.
3. Form calls an isolated submission service abstraction.
4. MVP mock service returns a simulated result.
5. Success message clearly states that booking is not confirmed yet.

Key files:

- Validation schema: `src/features/booking/bookingSchema.ts`
- Form UI + states: `src/features/booking/BookingForm.tsx`
- Service abstraction entry: `src/features/booking/bookingSubmissionService.ts`
- Current mock implementation: `src/features/booking/bookingSubmissionMock.ts`

## Later: Add EmailJS (Temporary Option)

If needed for quick pilot use, you can add a dedicated EmailJS adapter and switch implementation in:

- `src/features/booking/bookingSubmissionService.ts`

Recommendation:

- Keep EmailJS isolated behind the same service interface.
- Do not spread provider-specific calls across components.

## Later: Add Serverless Function + Brevo (Recommended Path)

Recommended production path:

1. Create a serverless endpoint (for example in Netlify Functions, Vercel Functions, or Cloudflare Workers).
2. Post booking payload from frontend to that endpoint.
3. Call Brevo from server-side code only.
4. Store Brevo API keys in server-side environment variables.

Important security note:

- Never expose Brevo API keys in frontend code.
- Never call Brevo directly from the browser.

## Accessibility and UX Notes

- Semantic sections and headings
- Proper form labels
- Mobile-first responsive layout
- Clear manual-booking process language to avoid instant-booking confusion
