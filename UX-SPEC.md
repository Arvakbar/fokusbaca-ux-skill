# UX-SPEC — FokusBaca

**Versi:** 1.0 | **Status:** Panduan eksperimen B | **Acuan:** `README.md` (PRD v1.0), Worksheet 7–8

## 1. UX Objective dan Prinsip
Tujuan: membantu pembaca menemukan informasi relevan dan membaca artikel tanpa interupsi yang menghalangi teks. **Prinsip:** content-first; clarity over decoration; continuity; user control; accessibility; predictable navigation. Kebutuhan UX yang paling kuat didukung testimoni ialah teks tidak tertutup elemen promosi dan alur membaca tidak terputus (UX-01–03). Kebutuhan pendukung dari rekonstruksi journey masih hipotesis yang perlu diuji.

## 2. Persona, Goals, dan Skenario
**Persona kerja:** pembaca berita digital yang mengutamakan informasi cepat, jelas, mudah dipahami. **Goal:** mendapatkan informasi ilustrasi harga tiket Gunung Buthak secara efisien, memahami konteks harga, dan mempertahankan fokus. **Skenario:** (1) mencari artikel, (2) memilih artikel, (3) membuka detail, (4) membaca, (5) menghindari gangguan, (6) memeriksa ulang informasi kunci lalu kembali ke daftar. Artikel dan nominal yang digunakan **hanya data contoh, bukan harga aktual**.

## 3. Information Architecture
```
FokusBaca
├── Daftar Artikel (/ atau #/)
│   ├── Intro dan petunjuk pencarian
│   ├── Cari artikel (judul/ringkasan/kategori)
│   ├── Kartu artikel (minimum 6)
│   └── Empty state hasil pencarian
└── Detail Artikel (#/artikel/:slug atau rute setara)
    ├── Kembali ke daftar
    ├── Judul / metadata / ringkasan
    ├── Mode Fokus (toggle)
    ├── Ukuran teks (kecil, standar, besar)
    ├── Informasi kunci / tautan ke detail relevan
    ├── Isi terstruktur subjudul
    └── Fallback artikel tidak ditemukan
```
Gunakan routing yang berfungsi pada hosting statis; nama path spesifik fleksibel selama link dapat digunakan.

## 4. Page Specifications
**PAGE-01 Daftar:** tampilkan identitas FokusBaca (prototipe independen), label artikel demonstrasi, pencarian berlabel, jumlah/hasil artikel, kartu dengan judul, kategori, tanggal sampel, ringkasan, dan tautan detail. Pencarian mengabaikan kapitalisasi dan spasi tepi, memberi feedback langsung. Jika hasil 0, tampilkan alasan dan aksi hapus kata kunci.

**PAGE-02 Detail:** satu `h1`, metadata, ringkasan, isi dengan `h2` berurutan, panel informasi kunci yang tidak mengklaim data aktual. Kontrol mode fokus dan ukuran teks tetap jelas terlihat/dapat dijangkau. Hindari banner sticky yang menutupi konten. Detail harus dapat dibaca tanpa menutup iklan/overlay.

**PAGE-03 Fallback:** jika slug tidak valid, jelaskan artikel tidak ditemukan dan sediakan tautan kembali ke daftar; tidak boleh halaman kosong.

## 5. User Flows
**Temukan informasi:** Daftar → ketik 'Gunung Buthak' → pilih artikel → temukan panel informasi kunci → buka subbagian terkait → selesai/kembali. **Tanpa hasil:** cari kata acak → empty state → bersihkan → daftar muncul. **Fokus:** buka detail → catat posisi baca → aktifkan Mode Fokus → konten tidak hilang, posisi terjaga → matikan → lanjut. **Teks:** buka detail → pilih 3 ukuran → teks berubah tanpa overflow horizontal → informasi tetap sama.

## 6. UX Requirements dan Traceability
| Need | Expected experience | FR/AC |
|---|---|---|
| UX-01 | Teks utama tidak tertutup | FR-03; AC-01,02 |
| UX-02 | Membaca tanpa interupsi wajib | FR-03,04; AC-02,03 |
| UX-03 | Kontrol gangguan tidak mengganggu konteks | FR-04; AC-03 |
| UX-04 | Hirarki artikel mudah dibaca | FR-03; AC-06 |
| UX-05 | Ukuran dan keterbacaan sesuai kebutuhan | FR-05; AC-07,10 |
| UX-06 | Informasi penting mudah dipindai | FR-06; AC-06,08 |
| UX-07 | Informasi penting mudah ditemukan ulang | FR-06; AC-08 |
| UX-08 | Relevansi artikel terlihat sebelum dibuka | FR-01; AC-04 |
| UX-09 | Pencarian dan judul jelas | FR-01,02; AC-04,05 |
| UX-10 | Kembali tanpa kehilangan orientasi | FR-07; AC-09 |

## 7. Responsive, Accessibility, dan States
Periksa lebar 360, 768, 1366px. Hindari horizontal scrolling untuk teks. Gunakan heading semantik, label eksplisit, fokus keyboard terlihat, target kontras teks utama WCAG AA, tombol operasional dengan keyboard, dan kontrol yang tidak bergantung warna saja. States minimal: normal, input pencarian aktif, no-results, detail 404, mode fokus on/off, ukuran teks terpilih. Kontrol tidak memerlukan hover untuk dapat dipahami di mobile.

## 8. Kriteria dan Validitas
Jangan mengklaim peningkatan UX kuantitatif tanpa uji. Audit semua AC-P1, uji skenario cari–baca–fokus–kembali, dan ukur kelulusan tes dengan bukti. Teks yang menyinggung harga harus diberi label ilustratif. Dokumen ini adalah panduan eksperimen B, tidak mengubah scope PRD.
