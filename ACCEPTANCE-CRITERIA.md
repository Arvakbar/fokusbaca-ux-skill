# ACCEPTANCE-CRITERIA — FokusBaca

**Versi:** 1.0 | **Sumber kebenaran:** 12 kriteria produk pada README.md. Berkas ini memperluasnya menjadi langkah uji; tidak menambah requirement produk.

## 1. Konvensi
- **PASS:** langkah uji dilakukan dan hasil yang diharapkan terbukti.
- **FAIL:** langkah uji dilakukan dan gagal.
- **NOT RUN:** belum diuji; tidak boleh dianggap PASS.
- **P1:** wajib lulus sebelum demonstrasi. Hasil otomatis, manual, dan usability harus dibedakan.

## 2. Matriks Pengujian
| AC | Prioritas | Skenario uji | Hasil yang diharapkan |
|---|---|---|---|
| AC-01 | P1 | Buka artikel di 360px, 768px, 1366px; gulir seluruh artikel | Tidak ada UI yang menutupi teks utama |
| AC-02 | P1 | Baca artikel dari awal sampai akhir | Tidak perlu menutup overlay |
| AC-03 | P1 | Toggle Mode Fokus di tengah artikel, on/off dan dengan keyboard | Isi tetap utuh, posisi tidak loncat ke atas, kontrol keluar tersedia |
| AC-04 | P2 | Periksa minimal 6 kartu dan buka semuanya | Judul/ringkasan tersedia, detail sesuai |
| AC-05 | P2 | Cari `buthak`, `BUTHaK`, kata tidak ada, dan spasi tepi | Hasil tidak peka kapitalisasi, ada empty state |
| AC-06 | P2 | Periksa detail artikel | H1, subjudul, isi, info kunci tertata semantik |
| AC-07 | P2 | Pilih 3 ukuran pada 360/768/1366px | Teks berubah, tidak terpotong/overflow |
| AC-08 | P2 | Klik tautan informasi kunci | Dapat mencapai dan menemukan kembali bagian relevan |
| AC-09 | P3 | Detail → kembali → artikel lain | Navigasi tidak blank dan orientasi jelas |
| AC-10 | P2 | Tab/Enter/Space semua kontrol inti | Fokus terlihat, kontrol bekerja tanpa mouse |
| AC-11 | P2 | Cari tanpa hasil dan buka slug tidak valid | Pesan pemulihan + aksi kembali/reset |
| AC-12 | P1 | Periksa artikel tiket sampel dan label produk | Nominal contoh diberi keterangan ilustratif, tidak ada afiliasi resmi palsu |

## 3. Non-Functional Checks
- **Build:** `npm run lint` dan `npm run build` harus selesai tanpa error; rekam output dan tanggal.
- **Responsive:** test viewport 360, 768, 1366; dokumentasikan screenshot dan horizontal overflow.
- **Accessibility:** keyboard navigation, label kontrol, focus-visible, hierarki heading, dan kontras utama diaudit; pemeriksaan otomatis tidak menggantikan evaluasi manual.
- **Privacy:** tidak ada autentikasi, analytics/tracking tanpa izin, atau API real-time; preferensi lokal tidak dikirim.
- **Content:** enam artikel demonstrasi adalah konten orisinal/berizin; harga contoh tidak dipresentasikan sebagai tarif terbaru.
- **Deployment:** URL publik memuat daftar, detail, dan fallback routing sebagaimana versi lokal.

## 4. Test Execution Sheet (isi setelah pengujian)
| ID | Metode | Status | Bukti/URL/Screenshot | Catatan |
|---|---|---|---|---|
| AC-01..AC-12 | Manual/otomatis | NOT RUN | — | Isi satu baris per AC saat pengujian |

## 5. Kriteria Penerimaan Rilis
Tidak ada AC-P1 yang gagal; seluruh hasil P2/P3 dicatat jujur; lint/build lulus; website publik terbuka; README dan CHANGELOG tersedia. Jangan menyebut metrik seperti tingkat keberhasilan pengguna 4/5 tercapai sebelum menjalankan usability test nyata.

## 6. Perbandingan Eksperimen
Bandingkan A dan B menggunakan kasus uji dan dataset yang setara. Catat jumlah prompt/iterasi korektif, waktu pengerjaan nyata, hasil lint/build, jumlah AC pass/fail/not run, dan temuan UX; jangan mengarang angka.
