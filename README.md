# Baked by Afshan

Premium, responsive React 19 JSX + Tailwind CSS bakery website. Seven routes, real supplied photography, filterable gallery and accessible lightbox, six-step quote builder, live illustrative estimate, image upload, contact enquiries, FAQs and newsletter capture.

## Run locally

Requires Node 22.13 or newer. Install with `npm install` (or use the committed pnpm lockfile with pnpm), then `npm run dev`. The JSX application lives in `app/` and `components/bakery/`. Vinext supplies file-based routing, React rendering and route splitting; Vite builds the application.

For full local form persistence:

1. Run `npm run build`.
2. Apply the migration once:
   `node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_bouncy_night_thrasher.sql`
3. Run `npm run start` to preview the built Worker with local D1/R2.

## Business details to complete

Edit `data/business.js` with the verified phone/WhatsApp number, email and Instagram URL. The floating button currently opens the supplied Facebook page; adding an international-format phone number switches it to WhatsApp automatically. No phone, email, opening hours or founder photo was invented.

All prices in `data/cakesData.js` and `estimate()` are **illustrative estimates**, clearly labelled in the UI. Replace with approved prices before customer launch. Flavours are preferences subject to confirmation. Wedding photos and dated company milestones were not supplied; no false portfolio or historical claims were added.

Add permissioned real reviews to `testimonials` with `{id,name,rating,text,cakeType,date,avatar}`. The average is calculated from actual records. The empty state is intentional; there are no fabricated reviews.

## Forms and data

`POST /api/inquiries` validates contact details, lead time and order options. JPG/PNG/WebP uploads are restricted to 5 MB and checked for file signatures. Enquiries are saved to D1 `inquiries`; private reference images are stored in R2 under `references/<request UUID>`. The UI provides the reference and asks the customer to continue on Facebook. There are **no automatic email notifications, payments, inventory checks or automatic booking confirmations**.

`POST /api/newsletter` stores email opt-ins in `subscribers`. Newsletter delivery requires an email marketing provider; capture alone does not send campaigns.

Owner access to records: use the Site's database tools or the hosting provider's protected database interface. No public read endpoint exposes customer details. No admin dashboard was requested. Keep the Site private until business information is approved and public launch is requested.

## Hosting

The project is a Cloudflare-compatible Worker using logical `DB` and `BUCKET` bindings in `.openai/hosting.json`. Sites provisions the resources and applies committed Drizzle migrations on deployment. Keep `sites()` in `vite.config.ts`. Do not deploy this as static-only hosting if you need form persistence. There are no API keys in this package.

## Assets

All photography and brand artwork come from the twelve user uploads. WebP copies preserve the photographs; the original logo is displayed from the supplied profile screenshot. The arched hero and card crops are CSS display treatments. Images below the hero load lazily.

## Verification

TypeScript no-emit check and production build passed. Gallery category filtering, modal detail view and order-step interactions were checked in the browser. Layout uses responsive grids and navigation at mobile breakpoints, keyboard-accessible primitives and reduced-motion support.
