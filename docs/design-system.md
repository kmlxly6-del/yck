# YCK pastel — asas style global

Status: diluluskan melalui prototype oleh pengguna, 14 Oktober 2026.

Rujukan utama: prototype `outputs/yck-home/dist/prototype-pastel/` dan imej rujukan pengguna. Pilihan pengguna mengatasi cadangan palet automatik.

## Identiti visual

- Latar putih sejuk `#FAFBFC`, panel putih `#FFFFFF`, permukaan biru pastel `#E4EAFA`.
- Highlight tajuk `#CCDCF5`; butang biru pastel `#95B7EE` dengan teks gelap `#233C60`.
- Sage pucat `#F0F4E7` untuk seksyen alternatif; teks utama `#252725`, teks sokongan `#5A625F`.
- Biru teks/pautan `#476998`, berasingan daripada warna latar CTA. Jangan guna biru pastel sebagai teks kecil atas putih.
- Logo YCK asal; foto aktiviti sedia ada dan satu foto konsep AI yang berlabel.
- Navbar dan footer menggunakan logo horizontal PNG `YCK 2nd Logo.png` daripada pengguna, melalui `logo-horizontal.png` dan `logo.css`. Fail transparen dikekalkan; paparan responsif mengurangkan ruang canvas kosong tanpa mengubah artwork.

## Tipografi dan bentuk

DM Sans untuk tajuk dan isi. Tajuk weight 600 (semibold), isi 400–500, label/kawalan 500. Tajuk besar tetapi ringan, dengan kapsul berborder dan highlight biru. Isi biasa 16px dengan line-height 1.6–1.7. Radius seksyen 28–32px, kad 22–24px, butang pill. Border halus, shadow ringan pada navbar dan kad terapung; tiada gradient gelap atau shadow berat.

## Layout

Desktop centered, lebar maksimum seksyen/hero 1184px dan navbar pill 1100px. Semua hero berkongsi geometri melalui `hero-standard.css`: tinggi minimum desktop 620px, visual kiri 46% / teks kanan 54%, gap 18px, padding 14px, radius bingkai 32px dan panel 23px. Tajuk 42px; tajuk panjang memakai 38px untuk muat dengan selesa. Tab, fakta dan strip maklumat berada selepas bingkai hero.

Highlight tajuk ialah aksen pada perkataan pendek yang tidak membalut. Jangan letak seluruh ayat dalam kapsul atau jadikan kapsul bekas teks dua baris. Tajuk berita dan nama aktiviti memakai teks biasa dengan wrapping seimbang. Home memakai dua frasa semantik; teks seperti “Membina” tidak diberi kapsul tambahan yang memecahkan susunan ayat. Highlight ayat dalam seksyen bawah home menggunakan latar lembut beradius kecil yang boleh mengikut teks, bukan kapsul besar.

Mobile satu kolum, teks dahulu kemudian visual, margin sisi 12px dan radius panel 17px. Hero mengisi paparan pertama selepas navbar; seksyen berikutnya bermula selepas hero. Tinggi minimum mengikut viewport; kandungan panjang pada skrin kecil boleh memanjangkan hero tanpa dipotong. Tablet menggunakan dua panel bertindan dengan visual 480px. Galeri dan foto peranti menggunakan `contain` untuk mengekalkan imej penuh; halaman dasar/laporan/hubungi menggunakan panel identiti YCK.

## Interaksi

Hero: content identiti YCK dahulu, kemudian eBrelle, Gaza, Makanan Tambahan, Dialisis dan Kampung Angkat. Foto dan content bergerak serentak. Autoplay 6.5 saat, progress, pause, anak panah, keyboard, swipe dan reduced motion. Tinggi stabil antara slide.

Sasaran sentuh kawalan sekurang-kurangnya 44px, fokus jelas, teks HTML dan alt gambar yang relevan. Projek dalam perancangan dilabel; tiada statistik, testimoni, jumlah kutipan atau status pelaksanaan direka.

## Fail implementasi

- `theme-foundation.css`: token warna, font, bentuk dan komponen asas.
- `global-theme.css`: navbar bersama, digunakan pada 45 halaman.
- `hero.css` dan `hero.js`: hero homepage berasaskan prototype, discoped kepada `.home-hero`.
- `home.css` dan `home-layout.css`: susunan dan kad homepage.
- `inner-theme.css`: hero, panel bacaan, kad program/organisasi/media, galeri, laporan dan dasar pada semua 44 halaman dalaman. Dimuatkan selepas template asal supaya struktur dan interaksi sedia ada kekal.
- `hero-standard.css`: token ukuran bersama dan template hero seragam pada semua 45 halaman, dimuatkan terakhir. `standard-hero`, `inner-hero-copy` dan `inner-hero-visual` menjadi struktur hero dalaman.
- `ux-polish.css`: lantai aksesibiliti sedia ada dikekalkan.

Style pastel kini digunakan pada semua 45 halaman. Hero dalaman menggunakan bingkai biru dan panel putih; butiran program/teras/galeri menggunakan dua panel pada desktop dan satu kolum pada mobile. Artikel dan dasar menggunakan panel bacaan putih dengan lebar teks terkawal. Navbar desktop kekal pill lebar, dan footer dibingkai dengan ruang sisi yang sama.

Semua heading H1–H6, tajuk hero, seksyen dan kad menggunakan token `--font-weight-heading:600`. Komponen menggunakan token bersama supaya perubahan weight global kekal konsisten.
