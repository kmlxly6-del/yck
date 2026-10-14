# UI polish — 14 Oktober 2026

Skop: hero, headline, highlight, breadcrumb dan seksyen home yang menggunakan aksen kapsul.

## Pembaikan

- dist/hero-standard.css:18 — kapsul ayat panjang/two-line → aksen satu perkataan, `white-space: nowrap`; teks asal kekal.
- dist/hero-standard.css:113 — home tiga baris terpisah → dua frasa semantik; bentuk kapsul tambahan pada “Membina” dibuang.
- dist/hero-standard.css:8 — breadcrumb terapung dengan gap besar → ikut aliran kandungan, pautan kembali dengan ikon.
- dist/hero-standard.css:121 — highlight ayat bawah home → latar lembut beradius kecil; bukan kapsul yang membalut ayat.
- dist/artikel/index.html — dua ayat dibungkus sebagai frasa, hanya “berkembang.” diserlahkan. Headline berita/galeri memakai teks biasa.
- dist/*/index.html — 10 imej tanpa dimensi diberi width/height daripada fail sebenar.

## Semakan

225 paparan halaman: semua 45 halaman pada lebar 320, 390, 768, 961 dan 1440px. Tiada page/headline overflow atau highlight tajuk dua baris. Home turut diperiksa pada 375, 560, 561, 820, 960, 1024, 1280 dan 1920px. Keenam-enam slide mengekalkan pasangan visual/content, tajuk asal dan tinggi 620px pada desktop. Semua 45 HTML lulus pemeriksaan H1/ID unik serta fail/anchor dalaman. Perkataan tajuk asal dibandingkan dengan salinan sebelum pembaikan.

Rujukan review: [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) dan UI/UX Pro Max, kategori Heading Line Balance / Compact Label Layout. Cadangan digunakan mengikut style pastel yang diluluskan pengguna.
