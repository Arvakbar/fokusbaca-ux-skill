# FOKUSBACA — Product Requirements Document (PRD)

**Versi:** 1.0 (Baseline)  
**Status:** Draft untuk implementasi dan validasi  
**Pemilik dokumen:** Muhammad Arief Akbar — 202310370311035  
**Mata kuliah:** Rekayasa Interaksi  
**Produk:** FokusBaca, prototipe pengalaman membaca berita digital, studi kasus UX Kompas.com

> **Catatan penelitian:** FokusBaca adalah produk prototipe independen, bukan situs resmi atau afiliasi Kompas.com. Materi artikel dalam demonstrasi harus berupa konten contoh orisinal atau berizin. Nama Kompas.com digunakan untuk menyatakan konteks studi UX, bukan identitas aplikasi.

## 1. Product Overview

### 1.1 Latar Belakang
Worksheet 7 memetakan enam tahap pengguna ketika mencari informasi harga tiket pendakian Gunung Buthak via Kota Batu: mencari informasi, memilih artikel, membuka halaman, membaca isi, mengatasi gangguan, dan menyelesaikan bacaan. Testimoni yang menjadi dasar studi menyatakan isi artikel informatif, tetapi elemen iklan terkadang menutupi area baca dan mengharuskan pengguna menutupnya sehingga fokus terganggu. Masalah yang paling didukung bukti terjadi pada tahap membaca isi dan mengatasi gangguan. Beberapa masalah pendukung dalam journey adalah rekonstruksi analitis, bukan hasil observasi langsung di seluruh tahapan.

### 1.2 Product Vision
Menyediakan pengalaman membaca berita digital yang jelas, nyaman, mudah dipindai, dan tidak terganggu elemen yang menutupi teks, sehingga pengguna cepat menemukan informasi yang dibutuhkan.

### 1.3 Target Pengguna
Pembaca berita digital yang mengutamakan informasi cepat, jelas, dan mudah dipahami pada desktop maupun perangkat mobile. Persona kerja ini mengikuti Worksheet 7; identitas persona spesifik perlu dicocokkan dengan Worksheet 6 final.

## 2. User Problem

**Masalah utama (terdukung testimoni):** gangguan visual berupa iklan yang terkadang menutupi konten dan memaksa pembaca melakukan tindakan tambahan. **Masalah pendukung (hipotesis dari journey):** relevansi artikel sebelum dibuka belum selalu jelas, struktur artikel dapat menyulitkan pemindaian, dan informasi kunci mungkin perlu dicari kembali.

**Problem statement:** Pembaca berita digital membutuhkan akses ke isi artikel yang tetap terlihat, alur membaca kontinu, dan informasi inti yang mudah ditemukan, agar memperoleh informasi secara efisien tanpa kehilangan fokus.

## 3. User Persona

**Persona kerja:** Pembaca berita digital pencari informasi praktis.  
**Konteks:** mencari harga tiket pendakian Gunung Buthak via Kota Batu.  
**Goals:** menentukan artikel relevan, menemukan nominal dan konteks harga, membaca secara kontinu, memverifikasi ulang detail.  
**Pain points:** kemungkinan iklan menutup area baca; perlunya tindakan tambahan untuk mengatasi gangguan; potensi kesulitan memindai informasi (perlu validasi).  
**Perangkat:** desktop dan mobile (skenario prototipe; preferensi aktual perlu diuji).

## 4. Product Goals & Success Metrics

1. Menjamin area teks artikel utama tidak tertutup elemen antarmuka non-esensial selama skenario membaca.
2. Memungkinkan pengguna menemukan informasi sasaran tanpa mengatasi overlay.
3. Menyediakan struktur artikel yang jelas dan mudah dipindai.
4. Mempertahankan konteks dan posisi membaca ketika pengguna mengubah preferensi tampilan.

| Metric | Target prototipe (hipotesis untuk diuji, bukan hasil riset) | Pengukuran |
|---|---|---|
| Overlay yang menutupi konten utama | 0 | Audit UI pada viewport desktop dan mobile |
| Interupsi wajib untuk melanjutkan bacaan | 0 | Observasi skenario tugas |
| Keberhasilan menemukan detail harga pada artikel sampel | ≥ 4 dari 5 peserta | Usability task test (jika peserta tersedia) |
| Kembali ke posisi baca setelah mengubah preferensi | 100% skenario | Pengujian fungsi |
| Kelulusan acceptance criteria prioritas P1 | 100% | Checklist QA |

## 5. Functional Requirements

**FR-01 — Daftar Artikel.** Aplikasi menampilkan setidaknya 6 artikel **konten demonstrasi orisinal** dengan judul, kategori, tanggal sampel, ringkasan, dan tautan membuka detail. Setidaknya satu artikel membahas informasi tiket pendakian fiktif/ilustratif, diberi label jelas sebagai data contoh dan bukan sumber harga aktual.

**FR-02 — Pencarian Artikel.** Pengguna dapat mencari artikel berdasarkan kata kunci dalam judul, ringkasan, atau kategori. Hasil langsung diperbarui, dapat dibersihkan, dan menampilkan empty state jika tidak ada kecocokan.

**FR-03 — Halaman Detail Artikel.** Menampilkan judul, kategori, tanggal sampel, ringkasan, isi berstruktur subjudul, dan area informasi kunci yang mudah dikenali. Teks artikel tidak boleh ditutupi banner atau overlay promosi.

**FR-04 — Mode Fokus.** Pengguna dapat mengaktifkan atau menonaktifkan mode fokus pada halaman detail. Mode fokus mengurangi elemen navigasi dan dekorasi non-esensial **tanpa menyembunyikan isi artikel**, tetap mempertahankan kontrol keluar dari mode fokus, dan tidak mengubah URL atau posisi baca secara tak terduga.

**FR-05 — Pengaturan Keterbacaan.** Pengguna dapat memilih ukuran teks minimal dalam tiga tingkat (kecil, standar, besar) melalui kontrol berlabel. Pilihan berlaku pada teks artikel; tidak memotong konten dan tidak menuntut scrolling horizontal pada viewport yang diuji. Preferensi boleh disimpan lokal dalam browser.

**FR-06 — Informasi Kunci.** Artikel bertipe informasi praktis memiliki panel ringkasan fakta penting (mis. nominal contoh, konteks, catatan verifikasi), dengan tautan atau navigasi menuju bagian relevan di dalam artikel.

**FR-07 — Navigasi.** Pengguna dapat kembali dari detail ke daftar artikel, mengenali lokasi navigasi saat ini, dan membuka artikel lain tanpa halaman kosong. Jika memungkinkan, kondisi pencarian dipertahankan saat kembali.

**FR-08 — Konten & Error State.** Sediakan state 'hasil tidak ditemukan' dan 'artikel tidak ditemukan' dengan aksi yang jelas untuk kembali ke daftar. Konten dan UI harus dapat digunakan tanpa API berita real-time.

## 6. Non-Functional Requirements

**NFR-01 — Responsive:** halaman dapat digunakan pada layar 360px, 768px, dan 1366px tanpa teks terpotong atau horizontal overflow yang tidak disengaja.  
**NFR-02 — Accessibility:** heading semantik, label kontrol, focus keyboard terlihat, dan kontras warna teks yang cukup (target WCAG AA untuk teks utama).  
**NFR-03 — Performance:** aset lokal ringan; aplikasi dapat dibangun untuk deployment statis. Uji manual pengalaman loading di koneksi normal, tanpa mengklaim hasil performa sebelum diukur.  
**NFR-04 — Reliability:** pencarian, navigasi, pengaturan ukuran teks, dan mode fokus tidak menghasilkan error runtime.  
**NFR-05 — Privacy:** tanpa login, tracking, atau pengumpulan informasi personal pada MVP; preferensi lokal tidak dikirim ke server.  
**NFR-06 — Content integrity:** konten demonstrasi ditandai dengan jelas; tidak mengklaim harga tiket sampel sebagai harga aktual.

## 7. Business Rules

1. Tidak boleh ada overlay promosi yang menutupi konten utama selama membaca.
2. Mode fokus hanya mengubah presentasi, bukan isi artikel.
3. Kontrol keluar dari mode fokus selalu tersedia dan dapat diakses dengan keyboard.
4. Ukuran teks dibatasi pada opsi yang telah ditentukan dan tidak membuat tampilan rusak.
5. Pencarian tidak peka huruf besar-kecil dan mengabaikan spasi ekstra pada tepi kata kunci.
6. Setiap artikel memiliki ID/slug unik dan rute detail yang valid.
7. Informasi tiket atau harga di data demo diberi label ilustratif, bukan data aktual.

## 8. User Stories

- **US-01:** Sebagai pembaca, saya ingin melihat judul dan ringkasan artikel agar bisa memilih informasi yang relevan. (UX-08, UX-09)
- **US-02:** Sebagai pembaca, saya ingin mencari artikel dengan kata kunci agar cepat menemukan topik yang dibutuhkan. (UX-09)
- **US-03:** Sebagai pembaca, saya ingin membaca teks yang tidak terhalang agar tetap fokus. (UX-01, UX-02)
- **US-04:** Sebagai pembaca, saya ingin mengaktifkan tampilan yang lebih sederhana agar distraksi berkurang. (UX-02)
- **US-05:** Sebagai pembaca, saya ingin mengatur ukuran teks agar bacaan lebih nyaman. (UX-05)
- **US-06:** Sebagai pembaca, saya ingin menemukan ringkasan informasi kunci agar tidak perlu mencari ulang seluruh artikel. (UX-06, UX-07)
- **US-07:** Sebagai pembaca, saya ingin kembali ke daftar sebelumnya agar tidak kehilangan orientasi. (UX-10)

## 9. Scope

**In scope (MVP):** daftar dan detail artikel lokal; pencarian; mode fokus; kontrol ukuran teks; ringkasan informasi kunci; navigasi kembali; responsive design; empty/error states; keyboard accessibility dasar.

**Out of scope:** autentikasi, akun pengguna, komentar, integrasi berita real-time, scraping Kompas.com, iklan pihak ketiga nyata, CMS, backend/database, personalisasi berbasis AI, pembelian tiket, data tiket aktual, monetisasi, dan replikasi branding resmi Kompas.com.

## 10. Assumptions & Dependencies

**Assumptions:** artikel demonstrasi dibuat khusus untuk prototipe; browser modern tersedia; studi usability menggunakan skenario menemukan informasi harga tiket yang jelas diberi label contoh; hasil kuantitatif baru tersedia setelah pengujian.

**Dependencies:** Node.js, npm, Git, browser, GitHub, dan hosting statis. **Rekomendasi stack:** React + Vite + CSS atau Tailwind CSS; versi dan konfigurasi dikunci sama pada kedua eksperimen.

## 11. Expected Deliverables

1. Frontend aplikasi yang dapat dijalankan lokal dengan perintah pada README.
2. Homepage daftar dan pencarian artikel.
3. Halaman detail artikel, mode fokus, pengaturan keterbacaan, dan panel informasi kunci.
4. Repository GitHub, source code, deployment publik, serta CHANGELOG.md.
5. Checklist hasil pengujian yang mengacu pada acceptance criteria.
6. Eksperimen terpisah: baseline PRD Only dan UX-Driven dengan UX Skill serta AGENTS.md.

## 12. Product Acceptance Criteria

- **AC-01 (P1):** Pada halaman detail, tidak ada elemen UI yang menutupi teks utama di viewport 360px, 768px, dan 1366px.
- **AC-02 (P1):** Pengguna dapat membaca artikel hingga selesai tanpa harus menutup overlay.
- **AC-03 (P1):** Mode fokus dapat diaktifkan dan dinonaktifkan dengan kontrol yang dapat diakses; teks tetap utuh dan posisi baca tidak kembali ke atas karena toggle.
- **AC-04 (P2):** Enam artikel sampel dapat dibuka dari halaman utama; setiap judul dan ringkasan ditampilkan.
- **AC-05 (P2):** Pencarian mencocokkan kata kunci tanpa memperhatikan kapitalisasi dan menampilkan pesan saat hasil kosong.
- **AC-06 (P2):** Detail artikel menampilkan hierarki judul, subjudul, isi, dan informasi kunci.
- **AC-07 (P2):** Tiga opsi ukuran teks berfungsi tanpa memotong informasi atau menyebabkan horizontal overflow.
- **AC-08 (P2):** Informasi kunci dapat dituju dan ditemukan kembali pada halaman artikel.
- **AC-09 (P3):** Navigasi kembali berfungsi dan tidak menghasilkan halaman kosong.
- **AC-10 (P2):** Seluruh kontrol inti dapat dijalankan dengan keyboard serta memperlihatkan indikator focus.
- **AC-11 (P2):** Artikel tidak ditemukan dan pencarian kosong mempunyai fallback informatif.
- **AC-12 (P1):** Nominal atau data contoh diidentifikasi sebagai ilustrasi, bukan informasi resmi terkini.

**Kebijakan kelulusan prototipe:** semua kriteria P1 harus lulus sebelum demo; hasil P2/P3 dicatat sesuai kondisi aktual. Jangan menyatakan metrik keberhasilan pengguna sudah tercapai tanpa pengujian.

---

## Traceability: Worksheet 8 → PRD

| UX Need | Requirement yang mendukung |
|---|---|
| UX-01 | FR-03, AC-01, AC-02 |
| UX-02 | FR-03, FR-04, AC-02, AC-03 |
| UX-03 | FR-04, AC-03 (menghilangkan kebutuhan menutup overlay pada MVP) |
| UX-04 | FR-03, AC-06 |
| UX-05 | FR-05, AC-07, AC-10 |
| UX-06 | FR-03, FR-06, AC-06, AC-08 |
| UX-07 | FR-06, AC-08 |
| UX-08 | FR-01, AC-04 |
| UX-09 | FR-01, FR-02, AC-04, AC-05 |
| UX-10 | FR-07, AC-09 |

## Experiment Control

**A — PRD Only:** berikan kepada AI Coding Agent hanya PRD baseline ini sebagai masukan spesifikasi; jangan berikan dokumentasi UX Skill, design system, interaction spec, maupun agent instructions tambahan dari eksperimen B. README.md berisi PRD ini.

**B — PRD + UX Skill:** gunakan PRD yang **identik** lalu tambahkan UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, ACCEPTANCE-CRITERIA.md, AGENTS.md, dan UX Skill. Catat sumber instruksi tambahan yang benar-benar digunakan.

Kedua eksperimen menggunakan platform/model AI, stack, data sampel, target fitur, dan skenario uji yang sama. Catat waktu mulai/akhir, jumlah prompt revisi, perubahan kode, serta hasil pengujian dalam catatan eksperimen dan CHANGELOG.md masing-masing. Jangan menyatakan hasil perbandingan sebelum implementasi dan pengujian selesai.

## Sumber Internal

- Worksheet 7 User Journey Map — Muhammad Arief Akbar (2026), halaman 1–2.
- Worksheet 8 UX Requirements — dokumen kebutuhan pengguna hasil turunan Worksheet 7.
- Contoh struktur PRD.md dan PRD Overview dari folder Google Drive materi dosen. Isi studi kasus kalender tugas tidak diterapkan pada FokusBaca.
