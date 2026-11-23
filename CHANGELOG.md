# Changelog — FokusBaca UX Skill Experiment

## [0.2.0] — Implementasi MVP Eksperimen B (2026-11-24)

Pengerjaan dimulai pukul 05:43:20 dan selesai pukul 05:51:36 WIB, 24 November 2026. Prompt revisi pengguna selama pengerjaan ini berjumlah **0**.

### Implementasi dan iterasi

- Template React + Vite diganti dengan daftar enam artikel demonstrasi orisinal, pencarian langsung, jumlah hasil, dan aksi hapus pencarian. Artikel Gunung Buthak via Kota Batu menandai Rp25.000 sebagai nominal ilustratif.
- Detail artikel menampilkan metadata, ringkasan, subjudul, panel informasi kunci, dan tautan yang memindahkan fokus ke subjudul tujuan. Mode fokus menyederhanakan tampilan sambil mempertahankan isi. Ukuran isi artikel tersedia dalam 16, 18, dan 21 px.
- Rute hash dan aset relatif mendukung hosting statis di subpath. Kembali ke daftar mempertahankan pencarian selama aplikasi terbuka. Mode fokus dan ukuran teks berlaku dalam sesi halaman dan kembali ke default saat muat ulang. Rute invalid dan kegagalan render memiliki aksi pemulihan.
- Dokumen yang dipakai meliputi PRD README.md, UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, ACCEPTANCE-CRITERIA.md, AGENTS.md, dan skill fokusbaca-ux. Tidak ditemukan konflik fitur antardokumen. Nilai token inti dipertahankan, dengan warna tambahan untuk permukaan panel, teks label ilustrasi, dan batas kontrol. Kontrol baca menempel di kolom terpisah pada desktop dan berada dalam alur dokumen pada tablet dan ponsel.
- Sampul lokal disimpan di `src/assets/buthak-cover.jpg` sebagai JPEG 960 × 877 px. Tool bawaan ImageGen, dengan prompt berikut.

  > Use case: photorealistic-natural. Landscape editorial cover for an Indonesian reading prototype. An illustrative, non-documentary East Java highland scene, a narrow grassy hiking trail in the foreground, dark emerald ridges and low clouds receding under late afternoon golden light. Calm atmosphere, realistic photography, gentle film grain, muted warm greens, wide landscape framing with main ridge visible in a near-square center crop. No people, buildings, graphics, text, logos or watermark.

- Pada iterasi pengujian, skrip browser diperbaiki agar menangani path Windows dan pemilih kartu jamak. Pemeriksaan posisi baca kemudian mencakup bagian tengah dan batas bawah halaman. Pemeriksaan visual menemukan bidang kosong di bawah gambar sampul desktop. Tata letak gambar diperbaiki dan seluruh pengujian dijalankan kembali.
- SHA-256 README.md sebelum dan sesudah implementasi sama. Dependency proyek tetap menggunakan konfigurasi template.

### Hasil pengujian, 24 November 2026

`npm run lint` **PASS** tanpa pesan diagnostik. `npm run build` **PASS** dengan Vite 8.3.8. Build menghasilkan `dist/`. Pengujian otomatis menggunakan Playwright pada Chrome 158.0.8127.36, dengan build statis disajikan lokal di subpath `/fokusbaca/`. Tangkapan layar seluruh halaman daftar dan detail di 360, 768, dan 1366 px dihasilkan dan dipakai untuk inspeksi visual.

| ID | Status | Bukti |
|---|---|---|
| AC-01 | PASS | Pemeriksaan titik pada potongan baris teks saat digulir: 40 pada 360 px, 26 pada 768 px, dan 26 pada 1366 px. Seluruh titik dapat dijangkau. |
| AC-02 | PASS | Paragraf terakhir dapat digulir hingga terlihat penuh tanpa tindakan penutupan. |
| AC-03 | PASS | Space dan Enter mengaktifkan serta menonaktifkan mode fokus saat detail desktop tergulir. URL dan teks sama. Posisi paragraf stabil dalam toleransi 2 px. |
| AC-04 | PASS | Enam kartu dengan slug unik dibuka satu per satu. Judul dan ringkasan cocok dengan detail masing-masing. |
| AC-05 | PASS | `buthak`, kapitalisasi campuran, spasi tepi, kata dalam ringkasan, kategori, dan pencarian tanpa hasil diuji. |
| AC-06 | PASS | Detail Buthak memiliki satu H1, tiga H2 bagian isi, enam paragraf isi, dan panel semantik berisi tiga fakta. |
| AC-07 | PASS | 16, 18, dan 21 px terukur pada tiga viewport. Teks tetap sama dan tidak melampaui lebar konten. Posisi baca desktop diperiksa saat ukuran berubah. |
| AC-08 | PASS | Tiga tautan fakta memindahkan fokus dan scroll ke H2 tujuan. Klik ulang dan muat ulang tautan bagian juga diuji. |
| AC-09 | PASS | Kembali menyimpan kata kunci, artikel lain dapat dibuka, dan tombol Back/Forward browser berfungsi. |
| AC-10 | PASS | Tab, Enter, dan Space mengoperasikan pencarian dan reset, navigasi, toggle fokus, ukuran teks, serta tautan fakta. Outline fokus terukur minimal 2 px pada kontrol yang diuji. |
| AC-11 | PASS | Hasil kosong dapat direset. Slug tidak dikenal menampilkan pesan pemulihan dan tautan kembali. |
| AC-12 | PASS | Daftar dan panel fakta memuat label ilustratif. Nominal di isi artikel diberi konteks demonstrasi, dan masthead mengidentifikasi prototipe independen. |

Pengukuran kontras teks utama pada latar bacaan menghasilkan **14,30:1**, metadata pada panel hijau **5,63:1**, dan label ilustrasi **7,38:1**. Selama rangkaian uji tidak tercatat error runtime, respons gagal, atau permintaan jaringan ke luar origin lokal.

Bukti lokal tersimpan di `%TEMP%/fokusbaca-eksperimen-b-qa-20261124/`, termasuk `hasil-uji.txt` dan tangkapan layar `daftar-*.png` serta `detail-*.png`.

### Cakupan verifikasi

Uji usability dengan peserta, validasi pada perangkat fisik, dan pengukuran waktu muat melalui jaringan produksi berstatus **NOT RUN**. Sesi implementasi ini mencakup workspace lokal. Publikasi GitHub dan deployment publik belum dikerjakan. Kesetaraan artikel dengan dataset Eksperimen A belum diverifikasi.

## [0.1.0] — Persiapan dokumentasi (2026-11-24)
- Menyalin PRD v1.0 yang sama dengan eksperimen A sebagai README.md.
- Menambahkan UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, ACCEPTANCE-CRITERIA.md, AGENTS.md, dan UX Skill.
- **Status:** Implementasi aplikasi dan pengujian belum dilakukan. Hasil berikutnya harus diisi dari eksekusi nyata.

