# Audit design — frontend-design skill (18 November 2026)

Rujukan: skill `frontend-design` (anthropics/skills), dipasang di `yck-redesign/.agents/skills/frontend-design`.
Skop: 45 halaman dalam `dist/`. `prototype-pastel/` tidak diubah.

Arah visual yang diluluskan pengguna dikekalkan: palet pastel biru/putih/sage, DM Sans, kapsul highlight tajuk, hero dua panel, motion slider. Skill menyatakan "arahan brief sentiasa menang", jadi audit ini membaiki pelaksanaan dalam arah itu, bukan menukar arah.

## Dapatan

| # | Isu | Bukti | Keterukan | Status |
|---|-----|-------|-----------|--------|
| 1 | Label pendedahan "VISUAL KONSEP" pada foto AI hero hanya 6–8px | `hero.css` `.concept-label` 8px → 7px → 6px mengikut breakpoint | Tinggi: pendedahan foto AI tidak boleh dibaca | Dibaiki: 12px, kapsul putih, kontras penuh |
| 2 | Teks bawah lantai 12px: label hero 7–10px, nota identiti 8–9px, eyebrow 8–11px | Imbasan computed style pada 375/800/1440px | Tinggi (bacaan, aksesibiliti) | Dibaiki: lantai 12px, eyebrow 13px desktop |
| 3 | Label HURUF BESAR dengan tracking lebar di setiap seksyen | 72 rentetan unik, 283 kemunculan (eyebrow 172, nav 45, dll.) | Sederhana: penanda paling biasa reka bentuk templat; sukar dibaca dalam BM | Dibaiki: sentence case, tracking 0. Nama penerima akaun bank dikekalkan |
| 4 | Meta dengan titik tengah "A · B" | "SOROTAN PROJEK · eBRELLE", "ARKIB · 22 MEI 2025", "PEJABAT · TALIAN 01" | Rendah | Dibaiki: "Sorotan projek: eBrelle", "Diterbitkan 22 Mei 2025", "Talian pejabat 1" |
| 5 | Penomboran palsu pada kandungan bukan urutan | Kad fokus home "01/ 02/ 03/", kad teras "01–06", eyebrow teras "03/06" | Rendah–sederhana | Dibaiki: nombor dibuang; teras ditulis "Teras 3 daripada 6" |
| 6 | Manrope dimuatkan tetapi tidak dipakai; `font: … Manrope` tanpa fallback | `style.css` import Manrope 5 weight; `cores/pages/program/media.css` | Sederhana: muatan sia-sia, risiko jatuh ke serif | Dibaiki: Manrope dibuang, rujukan → DM Sans |
| 7 | Font dimuat melalui rantaian `@import` (2× Google Fonts, termasuk dalam `@import` bersarang) | `style.css`, `global-theme.css → theme-foundation.css` | Sederhana: render-blocking berantai | Dibaiki: `preconnect` + satu `<link>` DM Sans variable dalam `<head>` |
| 8 | Lapisan CSS bertindih: 9–11 stylesheet setiap halaman, banyak `!important`, 20 nilai radius berbeza | `hero-standard.css` override `hero.css` override `style.css` | Sederhana (penyelenggaraan) | Dibaiki: 4 fail dalam `css/`, radius 3 nilai, `!important` 79 → 7 |
| 9 | Hover transition pada ~96 elemen | Imbasan computed `transition-duration` | Rendah | Dikekalkan (motion diluluskan) |
| 10 | Glyph anak panah sebagai bullet hero ("↓", "↗") | `hero-values` | Rendah | Dikekalkan (prototype diluluskan) |

## Perubahan

- `dist/design-refine.css` (baharu, dimuatkan terakhir pada 45 halaman): token label, lantai 12px, pendedahan AI; label dekoratif teras yang berulang disembunyikan.
- 45 HTML + `app.js`: teks label kepada sentence case, nombor palsu dibuang, `<link>` font.
- `style.css`, `theme-foundation.css`: `@import` Google Fonts dibuang. `cores/pages/program/media/style.css`: Manrope → DM Sans.
- Versi cache dinaikkan ke `refine1`.

Tiada perubahan pada fakta, status program, teks dasar, route atau nombor akaun.

## Seterusnya (disyorkan)

1. Konsolidasi CSS: gabungkan `style → hero → home → home-layout → inner-theme → hero-standard → ux-polish → design-refine` kepada token + komponen; buang `!important`; tetapkan skala radius 3 nilai (seksyen 32 / kad 24 / kawalan pill).
2. Masukkan peraturan `design-refine.css` ke `theme-foundation.css` selepas konsolidasi.
3. ~~Kemas kini `docs/design-system.md`~~ — selesai (seksyen "Label dan saiz minimum").

## Pengesahan

- 20 halaman × 1440/768/375/320px (80 paparan): tiada overflow mendatar, tiada teks bawah 12px, tiada eyebrow huruf besar, satu H1 setiap halaman. Satu-satunya "imej kosong" ialah `#viewer-image` lightbox galeri yang memang kosong sehingga dibuka (sedia ada).
- 45 HTML: satu H1, semua fail/pautan tempatan wujud. `app.js` lulus `node --check`.
- Visual disemak: hero home desktop/mobile, halaman Teras Ekonomi mobile.
