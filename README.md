# YCK website redesign

Private preview: https://yck-home-redesign.jammymorel9.chatgpt.site

Buildless homepage in dist/index.html, dist/style.css and dist/app.js. Assets are bundled locally. Internal profile, organization and contact pages are implemented. Existing WordPress pages remain linked for programs, articles, reports and policies. New program information opens accessible dialogs.

Run locally: python3 -m http.server 8765 --directory dist

Checked: desktop, 390px mobile and 768px tablet; slider navigation, program filters, all 16 program cards, mobile menu, dialog close and bank copy. No horizontal overflow at tested mobile/tablet sizes, no broken loaded images or console errors. Donate buttons are absent. Affin account is 105190009489.

This preview has not replaced yck.vibrantad.com. The implementation can be adapted to the existing WordPress/Elementor site. Program statuses and contact details that require final confirmation remain documented in the content planning draft.

Refinement: headings reduced, content width capped at 1080px, six outline core icons, decorative wave/halftone accents, floating navbar with compact scroll state (desktop 90→66px; mobile 74→58px). Verified at 390px, 768px and 1440px.

Motion update: navbar size/logo morph over 480ms, translucent glass surfaces and hover/press states. Hero advances every 5000ms, with pause/play, hover/focus/dialog/visibility pauses, and reduced-motion support.

Batch 1: /pengenalan/, /carta-organisasi/, /hubungi-kami/. Shared site.js and pages.css provide navigation, glass styling and mobile layouts. Profile photos and community photo are extracted from the supplied PPTX. Names use Roselan bin Abd Rahman (slide 6) and Abdul Aziz bin Ishak (slide 10); final spelling remains a content confirmation item. Contact uses only the official phone numbers/address and Affin account from slides 11/38; no unconfigured submission form is displayed.
