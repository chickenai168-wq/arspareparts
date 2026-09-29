# Production plan

## Target

Move the approved AR Spare Parts site to a maintainable Next.js + TypeScript production project and publish it on `arspareparts.com` through Vercel.

## Release gates

1. Preserve the approved UI and customer-facing content.
2. Import and validate the product catalog.
3. Verify responsive behavior on mobile and desktop.
4. Verify navigation, filters/search, product details and outbound marketplace/social links.
5. Add metadata, canonical URLs, robots and sitemap.
6. Deploy a Vercel Preview and complete QA before domain cutover.
7. Connect apex/www DNS, verify HTTPS and redirects.
8. Keep a known-good release commit for rollback.

## Planned routes

- `/`
- `/arx`
- `/catalog`
- `/guide`
- `/products/[slug]`

## Source migration note

The currently approved ChatGPT Site remains the visual/content baseline until the full application source and product dataset have been migrated into this repository. Do not point the production domain at an incomplete build.
