# YCK website redesign

Private preview: https://yck-home-redesign.jammymorel9.chatgpt.site

Buildless homepage in dist/index.html, dist/style.css and dist/app.js. Assets are bundled locally. Internal profile, organization and contact pages are implemented. Existing WordPress pages remain linked for programs, articles, reports and policies. New program information opens accessible dialogs.

Run locally: python3 -m http.server 8765 --directory dist

Checked: desktop, 390px mobile and 768px tablet; slider navigation, program filters, all 16 program cards, mobile menu, dialog close and bank copy. No horizontal overflow at tested mobile/tablet sizes, no broken loaded images or console errors. Donate buttons are absent. Affin account is 105190009489.

This preview has not replaced yck.vibrantad.com. The implementation can be adapted to the existing WordPress/Elementor site. Program statuses and contact details that require final confirmation remain documented in the content planning draft.

Refinement: headings reduced, content width capped at 1080px, six outline core icons, decorative wave/halftone accents, floating navbar with compact scroll state (desktop 90→66px; mobile 74→58px). Verified at 390px, 768px and 1440px.

Motion update: navbar size/logo morph over 480ms, translucent glass surfaces and hover/press states. Hero advances every 5000ms, with pause/play, hover/focus/dialog/visibility pauses, and reduced-motion support.

Batch 1: /pengenalan/, /carta-organisasi/, /hubungi-kami/. Shared site.js and pages.css provide navigation, glass styling and mobile layouts. Profile photos and community photo are extracted from the supplied PPTX. Names use Roselan bin Abd Rahman (slide 6) and Abdul Aziz bin Ishak (slide 10); final spelling remains a content confirmation item. Contact uses only the official phone numbers/address and Affin account from slides 11/38; no unconfigured submission form is displayed.


## Batch 2 — Program & Inisiatif

- `/senaraiprojek/`: direktori 16 program dengan carian nama/fokus/penerima, kategori, status perancangan, kiraan hasil dan reset. Semua kad tersedia tanpa JavaScript. Filter disimpan dalam query URL.
- 16 halaman butiran mengikut route dalam `program-data.js`; route lama `/projek_derma/` dikekalkan. Lima program tambahan menggunakan `/program/`.
- `program-data.js` membekalkan home, `program.css` menyusun direktori/butiran, `program.js` mengawal penapis direktori. Hero home, kad home dan sorotan eBrelle menuju halaman lengkap.
- eBrelle memuatkan kerjasama EDOTE dan lawatan MAB; pusat latihan kekal cadangan. Tiada tuntutan spesifikasi/kelulusan yang belum disahkan.
- Dialisis dan enam rancangan lain ditandakan sebagai perancangan. Tarikh Integrasi Belia dikekalkan: Disember 2026 (slaid 24), September 2026 (slaid 25), tanpa menganggap dua fasa atau pencapaian.
- Sasaran Kasih Mama 50 peserta, bukan pencapaian. Tiada jumlah subsidi, syarat permohonan atau lokasi program yang direka. Tiada Donate. Akaun Affin sahaja pada halaman sedia ada.
- Grafik SVG bagi program budaya, integrasi belia dan empat rancangan baharu mengelakkan penggunaan foto aktiviti lain sebagai bukti pelaksanaan.

Validation: 21 halaman HTML, satu H1 setiap halaman, fail/anchor dalaman tersedia. Carian/kategori/perancangan/hasil kosong/reset lulus. Kesemua 16 butiran lulus semakan lebar 390px tanpa overflow atau gambar rosak; direktori dan halaman sampel turut disemak pada 768px dan 1440px.
