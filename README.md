# YCK website redesign

## Current — pastel global foundation and homepage (14 October 2026)

Local homepage: http://localhost:8765/ . The approved prototype remains at `/prototype-pastel/` as a design reference.

- `theme-foundation.css` and `global-theme.css` define the approved powder blue / white / sage palette, DM Sans typography, pill controls, shared navbar and component tokens. Linked on all 45 actual pages.
- Main homepage now uses the six-slide paired hero: original prototype content, eBrelle, Gaza, RMT, Dialysis and Kampung Angkat. `hero.css` is scoped to `.home-hero`; `hero.js` owns the carousel and compact navbar state. Assets are in `/assets/`; homepage no longer depends on prototype paths.
- `home.css` and `home-layout.css` implement the three focus cards, introduction, six core cards, eBrelle feature, program listing, mission, activities, articles, collaboration, Affin information and footer using the approved style. Existing program data, filters, all 16 programs, routes and copy-account behavior are retained.
- Inner pages receive the shared foundation/navbar; their detailed content layouts remain the existing templates. Design source of truth: `design-system/yck-pastel/MASTER.md` in the outer project.
- The first hero photo is the labelled AI concept asset approved in the prototype. Other slides retain the original homepage project images and planning labels.

Validation: 45 HTML pages have one H1, unique IDs and resolved local links/assets. Homepage checked at 320, 375, 390, 768, 961, 1024 and 1440px with no horizontal or detected text overflow. All six slides tested on mobile/desktop with matched photo/content indices, stable heights, loaded images and correct CTAs. Mobile hero remains within the first screen and the focus heading below it. Kebajikan filter (3 results), expand/collapse (16 programs), mobile menu/Escape and Affin copy success were verified. Pengenalan, directory, eBrelle, muallaf gallery and privacy page checked at 390/1440px. Color-token contrast: CTA 5.45:1, body 14.52:1, muted 6.27:1 and links 5.61:1. No application-origin console errors; unrelated Chrome extension log entries were excluded.

Publication limitation: the existing manifest's Sites project returned `project not found`, and the current owner's Sites list was empty. The local implementation is complete; no new Site or remote deployment was created. Keep the current Site identity until its account/workspace access can be resolved.

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


## Batch 3 — Enam Teras

- Enam route `/teras-…/` dikekalkan daripada website asal. Pautan home dan Pengenalan kini menuju halaman dalaman.
- `cores.css`: hero berikon dengan wave/halftone, navigasi enam teras, susunan aktiviti responsif, program berkaitan dan rekod komuniti jika tersedia.
- Fokus dan perancangan daripada PPTX slaid 14–19. Senarai aktiviti dilabel sebagai hala tuju/perancangan, bukan semua sudah dilaksanakan.
- Program berkaitan dipadankan mengikut kandungan. Antarabangsa hanya Gaza; Ekonomi memaut Kasih Mama, TVET Mikro dan Kampung Angkat. Tiada tiga kad sama yang diulang pada setiap teras.
- Jejak kebajikan dan muallaf memaut galeri asal sehingga batch media dibina. CTA perbincangan menuju Hubungi Kami, tiada Donate atau bank tambahan.

Validation: 27 halaman HTML termasuk home, satu H1 setiap halaman dan semua fail/anchor tempatan tersedia. Enam teras diperiksa pada 1440px, 768px dan 390px tanpa overflow, gambar rosak atau ralat console. Navigasi Pendidikan→eBrelle dan home→Kelestarian Alam disahkan melalui UI.


## Batch 4 — Media dan Galeri

- `/media/`: direktori tujuh rekod dengan penapis Semua, Komuniti, Kebajikan dan Pendidikan Inklusif. Semua rekod tersedia tanpa JavaScript.
- Lima route galeri asal dikekalkan, tambahan `/gallery/menyantuni-golongan-rentan-dan-kurang-upaya/` dan `/gallery/lawatan-yck-ke-mab/`.
- 15 foto sebenar dipilih daripada PPTX slaid 28–33 dan 37; latar, logo dan ilustrasi slaid tidak dimasukkan sebagai foto aktiviti. WebP quality 87, sisi maksimum 2000px, kira-kira 2.35MB keseluruhan (asal PNG 27.19MB). Foto penuh tidak dipotong dalam galeri dan viewer.
- `media.css`, `media.js`, `gallery.js`: penapis rekod, dialog foto penuh dengan sebelumnya/seterusnya, anak panah papan kekunci, Escape, tutup, fokus kembali dan kunci scroll. Galeri satu foto menyembunyikan kawalan anak panah. Tanpa JavaScript, pautan foto masih membuka fail imej.
- Tarikh acara iftar 27 Mac 2025; tarikh penerbitan website asal lima galeri 24 April 2025 dilabel berasingan. Tiada tarikh acara lain yang direka. Tujuh ialah bilangan rekod galeri, bukan bilangan program yang berasingan. MAB kekal lawatan/perbincangan dan cadangan pusat latihan.
- Navigasi semua halaman, pautan galeri home dan jejak komuniti pada teras menggunakan route baharu; halaman eBrelle memaut galeri lawatan MAB.

Validation: 35 halaman HTML termasuk home, satu H1 dan semua fail/anchor tempatan tersedia. Lapan halaman baru disemak pada 1440px, 768px, 390px tanpa overflow atau gambar rosak. Penapis Pendidikan Inklusif, lightbox tiga/satu foto, next, ArrowRight, Escape dan pemulihan scroll/fokus diuji. Tiada ralat console.


## Final pages (batch 5)

Article archive, 3 full articles, annual report directory and 5 policy pages implemented. All 44 internal routes plus homepage now exist. Article dates remain 22 May 2025; carbon headline corrected to carbon intensity per body. No report PDF was supplied by original source: cards use a real email request instead of fake downloads. Policies preserve source text as clearly marked migration drafts; incorrect organization name corrected, data-service and retail-policy mismatches disclosed for owner review. Primary navigation and footer use local routes.

Validation: 45 HTML files checked for one H1, unique IDs and resolved local links/anchors. Ten final pages verified at 1440, 768 and 390 px with no horizontal overflow or broken images. Mobile menu, article reading navigation and report footer route verified; no browser console errors.

## Shared navbar update

All 45 headers now share grouped About and Programme/Core dropdowns, direct Media, Article and Report routes, and Contact CTA. Added active-route indicators, responsive accordion menu below 961 px, animated hamburger, outside-click closing and Escape/focus handling. Existing glass styling and 480 ms scroll minimize retained. Verified desktop/tablet/mobile breakpoints, nested route navigation, keyboard Tab/Escape, and local links.


## Batch 6 — Audit UI/UX (ui-ux-pro-max)

- `dist/ux-polish.css` dimuatkan selepas `navbar.css` pada 45 halaman: `--muted` #67706c → #5c6561 (4.4:1 → 5.2:1), cincin fokus biru 3px + halo putih (oren lama 2.2:1), lantai saiz teks (label 11/12px, metadata & kawalan 13/14px; sebelum ini 7–10px), sasaran sentuh 44px untuk text-link, penapis, kawalan slider, breadcrumb, footer dan TOC dasar.
- Favicon (`/assets/logo.svg`) ditambah; 404 favicon hilang.
- Home: kawalan slider guna ikon SVG, slide diberi `role="group"`/`aria-roledescription="slide"` + label "n daripada 5", glyph anak panah dalam pautan ditanda `aria-hidden`.
- Imej berat ditukar ke WebP (fail asal dikekalkan): ebrelle 583→24KB, komuniti-iftar 736→69KB, ceo 502→56KB, mab 442→30KB, pengerusi 419→26KB, alam 1066→436KB. Muatan maksimum halaman 2.9MB → 1.8MB.

Validation: 45 halaman × 390/1440px — tiada overflow, tiada ralat console; isu automatik 1007 → 214 (baki: label 11px yang disengajakan, positif palsu kontras teks atas foto, pautan tajuk kad).

## Pastel rollout — semua halaman

Style prototype yang diluluskan kini digunakan pada homepage dan semua 44 halaman dalaman. `dist/inner-theme.css` memadankan template Pengenalan, Organisasi, Hubungi Kami, direktori dan 16 butiran program, enam teras, media dan tujuh galeri, artikel, laporan serta lima dasar dengan token global. Hero berbingkai biru, panel putih, headline ringan dengan kapsul highlight, kad biru/sage, panel bacaan dan footer beradius digunakan mengikut jenis kandungan. Foto galeri kekal penuh; viewer turut menerima style pastel.

Template struktur dan JavaScript asal dikekalkan. Tiada perubahan fakta, status program, teks dasar, routes atau tindakan pembayaran. Versi CSS dikemas kini untuk menyegarkan cache tempatan. Preview: `http://localhost:8765/`; penerbitan Sites masih tertakluk pada isu project asal yang tidak ditemui seperti direkodkan sebelum ini.

Validation rollout: semua 44 halaman dalaman diperiksa pada 320, 390, 768 dan 1440px tanpa page/text overflow. Semua 45 HTML lulus semakan satu H1, ID unik, fail tempatan dan anchor dalaman. Carian eBrelle (1 hasil), kategori Kebajikan (3 hasil), status perancangan (7 hasil), keadaan kosong dan reset (16 hasil) disahkan melalui UI. Penapis media (1/7 dan reset 7/7), galeri 1→2→3/Escape/fokus kembali, menu mobile/dropdown/navigasi organisasi/Escape serta TOC dasar turut diuji. Screenshot desktop dan mobile disimpan di folder outputs.

## Hero seragam dengan home

Semua 44 hero dalaman kini menggunakan struktur dua panel yang sama dengan home: visual kiri 46%, teks kanan 54%, bingkai 1184px maksimum × 620px tinggi minimum pada desktop. `hero-standard.css` dimuatkan terakhir pada semua 45 halaman untuk menyelaraskan ukuran, padding, gap, radius, highlight tajuk dan CTA. Tab profil/teras, fakta program/galeri dan strip direktori diletakkan selepas hero. Foto cover artikel dipindahkan ke panel hero; teks artikel dan dasar asal dikekalkan. Halaman tanpa foto yang sesuai menggunakan panel logo/identiti YCK.

Mobile menggunakan teks dahulu kemudian visual dan tinggi minimum mengikut viewport home; foto galeri/peranti kekal penuh. Semua 44 hero disahkan 620px pada 1440/1024px, 1108px pada 768px dan 748px pada 390×844px. Pada 320×568px, 43 hero ialah 484px; satu galeri dengan penerangan panjang mengembang kepada 522px supaya teks tidak dipotong. Tiada page/text overflow pada empat lebar tersebut. Tajuk/penerangan asal dibandingkan dengan salinan sebelum perubahan; tiada teks berubah. Semua 45 HTML lulus pemeriksaan H1, ID dan fail/anchor tempatan. CTA direktori/artikel dan carian eBrelle turut disahkan melalui UI.

## UI polish — headline dan highlight

Pembaikan berdasarkan screenshot pengguna: highlight ayat dua baris diganti dengan aksen perkataan pendek; berita/galeri memakai tajuk biasa. Home menggunakan dua frasa, dengan kapsul tambahan pada “Membina” dibuang. Font desktop diselaraskan kepada 42px (tajuk panjang 38px), perenggan hero 15px, breadcrumb ikut aliran kandungan, dan highlight ayat bawah home diberi radius kecil. Geometri hero 620px desktop serta minimum viewport mobile dikekalkan. Dimensi 10 imej turut ditambah. Lihat `ui-polish-review.md` untuk skop dan validation; screenshot akhir tersedia dalam folder outputs.

## Gambar HQ daripada pengguna

Empat aset diganti di semua tempat yang berkaitan (15 halaman utama, 34 slot imej termasuk prototype dan data kad dinamik): Gaza → `gaza-hq.webp` (1182×1330), pameran sekolah/Program Inovasi dan Kemahiran → `inovasi-hq.webp` (1092×1440), Makanan Tambahan → `rmt-hq.webp` (1092×1440), Dialisis → `dialisis-hq.webp` (1182×1330). PNG sumber pengguna dikekalkan di Downloads; WebP quality 96 menggunakan resolusi asal tanpa downscale. Empat aset web berjumlah 1.57MiB, berbanding PNG sumber kira-kira 8.95MiB. Fail lama dikekalkan sebagai rujukan.

Semua rujukan HTML/JS termasuk slider, direktori dan program berkaitan memakai fail baharu; dimensi/alt turut dikemas kini. Posisi crop bagi kad dan hero dilaraskan supaya murid, hidangan, bendera dan papan nama dialisis jelas. Status perancangan Dialisis 2027 dikekalkan. Validation: 15 halaman × 390/1440px tanpa overflow atau imej gagal; tiada rujukan empat fail lama dalam HTML/JS/CSS, semua fail tempatan tersedia, syntax app.js/program-data.js lulus.

## Logo horizontal — navbar dan footer

Logo PNG pengguna `YCK 2nd Logo.png` kini digunakan pada semua 45 navbar/footer dan navbar prototype. Fail 2287×614px, 53KB, disalin tanpa perubahan sebagai `/assets/logo-horizontal.png`. `logo.css` mengatur saiz responsif; aspect-ratio dan object-fit hanya mengurangkan ruang transparen canvas. Lebar navbar 250px desktop, 220px pada desktop kecil dan sehingga 220px mobile; footer maksimum 320px. Navbar pill lebar dikekalkan.

Validation: semua 45 halaman memakai logo baharu dalam kedua-dua lokasi; checksum fail sama dengan PNG asal. Sembilan lebar 320–1440px diperiksa tanpa overflow, logo/menu bertindih atau logo footer melampaui kolum. Paparan ketika scroll dan menu mobile turut disemak.

## Heading global semibold

Semua heading H1–H6 dan tajuk hero/sekysen/kad menggunakan token `--font-weight-heading:600` (DM Sans semibold), naik daripada 450–500. Peraturan heading template dan prototype menggunakan token bersama dengan fallback 600; paragraph, label dan butang mengekalkan weight sedia ada. Cache CSS dikemas kini. Validation: 45 halaman × 390/1440px, semua heading computed weight 600; tiada overflow tajuk yang dipaparkan. H1 sr-only homepage dikecualikan daripada semakan visual.

## GitHub dan Vercel

Repository: https://github.com/kmlxly6-del/yck

Project ini ialah laman HTML/CSS/JS static tanpa dependency build. Import repository pada Vercel dengan Framework Preset **Other**, Root Directory repository root, dan Output Directory **dist**. `vercel.json` mengawal output, command kosong dan trailing-slash untuk route direktori sedia ada. Push ke `main` selepas project dihubungkan akan mencetuskan deployment production.

Asas design global disimpan di `docs/design-system.md`. `.gitignore` mengecualikan fail AppleDouble/macOS, cache Vercel, dependencies dan fail environment tempatan.
