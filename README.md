# YCK homepage redesign

Private preview: https://yck-home-redesign.jammymorel9.chatgpt.site

Buildless homepage in dist/index.html, dist/style.css and dist/app.js. Assets are bundled locally. Existing WordPress pages remain linked for program, article, profile and policy details. New program information opens accessible dialogs.

Run locally: python3 -m http.server 8765 --directory dist

Checked: desktop, 390px mobile and 768px tablet; slider navigation, program filters, all 16 program cards, mobile menu, dialog close and bank copy. No horizontal overflow at tested mobile/tablet sizes, no broken loaded images or console errors. Donate buttons are absent. Affin account is 105190009489.

This preview has not replaced yck.vibrantad.com. The implementation can be adapted to the existing WordPress/Elementor site. Program statuses and contact details that require final confirmation remain documented in the content planning draft.

Refinement: headings reduced, content width capped at 1080px, six outline core icons, decorative wave/halftone accents, floating navbar with compact scroll state (desktop 90→66px; mobile 74→58px). Verified at 390px, 768px and 1440px.
