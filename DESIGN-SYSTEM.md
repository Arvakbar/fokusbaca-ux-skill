# DESIGN-SYSTEM — FokusBaca

**Versi:** 1.0 | **Tujuan:** konsistensi visual untuk Eksperimen B, bukan perluasan scope PRD.

## 1. Design Direction
**Editorial, calm, readable, content-first.** Antarmuka berita terinspirasi keterbacaan penerbitan editorial tetapi bukan salinan Kompas.com. Keputusan visual berorientasi pada kebutuhan UX-01–07. Identitas prototipe harus jelas.

## 2. Color Tokens
Palet usulan (dapat diterapkan sebagai CSS custom properties):

| Token | Nilai | Penggunaan |
|---|---|---|
| `--bg` | `#FAF9F6` | Background bacaan |
| `--surface` | `#FFFFFF` | Kartu/panel |
| `--text` | `#1D2924` | Teks utama |
| `--muted` | `#50645B` | Metadata/teks sekunder |
| `--primary` | `#184B37` | Link, tombol primer |
| `--primary-hover` | `#103626` | Hover |
| `--border` | `#D4DDD6` | Pembatas |
| `--focus` | `#B45309` | Outline fokus |
| `--warning-surface` | `#FFF5DD` | Label data ilustratif |

Verifikasi rasio kontras teks terhadap permukaan sebelum mengklaim WCAG AA; warna bukan satu-satunya penanda status. Mode fokus mempertahankan kontras baca.

## 3. Typography
Judul editorial gunakan font serif yang tersedia lokal melalui `Georgia, 'Times New Roman', serif`; isi artikel gunakan `system-ui, -apple-system, 'Segoe UI', sans-serif` atau serif yang konsisten sesuai keputusan implementasi. Ukuran utama: body 16–18px, line-height 1.65–1.8, heading h1 responsif `clamp(2rem, 4vw, 3.5rem)`; paragraph line-length 55–75ch. Ukuran teks artikel kecil/standar/besar: 16/18/21px, dengan line-height tetap memadai. Jangan mengandalkan unduhan font eksternal.

## 4. Spacing, Layout, Responsive
Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px. Konten artikel maksimal 720px; lebar daftar maksimal 1120px; padding mobile 16–20px, desktop 24–40px. Breakpoint referensi: `<= 600px` mobile, `601–1023px` tablet, `>=1024px` desktop. Pada 360px semua kontrol harus muat; kartu grid menurun menjadi satu kolom.

## 5. Components
- **Site Header:** identitas FokusBaca dan navigasi yang ringkas; tidak sticky di atas teks bila mengurangi area baca.
- **Search Field:** label eksplisit, placeholder hanya contoh, status no-results dan opsi reset.
- **Article Card:** kategori/tanggal, judul, ringkasan, tautan terfokus; keseluruhan kartu boleh clickable asalkan semantik dan fokus jelas.
- **Article Hero:** `h1`, metadata, ringkasan; tidak mengalahkan isi artikel.
- **Key Facts Panel:** ringkasan informasi penting; label `Ilustrasi/Data contoh` apabila berisi nominal demo; tautan ke subjudul relevan.
- **Focus Toggle:** dua state dengan label yang menjelaskan aksi, tetap terlihat/terjangkau ketika aktif.
- **Text-Size Control:** pilihan Kecil/Standar/Besar, status pilihan jelas selain warna; pertahankan posisi baca.
- **Empty / Not Found:** pesan singkat dan tindakan pemulihan.

## 6. Interaction & States
Hover dibedakan secara halus, active/selected jelas, outline fokus `2–3px` dengan offset; klik/keyboard harus identik. Hindari animasi yang menggeser posisi teks; hormati `prefers-reduced-motion`. Jangan gunakan modal promosi.

## 7. Iconography and Accessibility
Ikon hanya jika menambah kejelasan; selalu sertakan label atau `aria-label` untuk kontrol berbasis ikon. Tidak perlu paket ikon tambahan jika CSS/teks cukup. Jangan menggunakan logo/atribut merek Kompas.com.

## 8. Tokens Example
```css
:root {
  --bg:#FAF9F6; --surface:#FFFFFF; --text:#1D2924;
  --muted:#50645B; --primary:#184B37; --border:#D4DDD6;
  --focus:#B45309; --reading-max:720px;
}
```
Semua nilai adalah keputusan desain untuk eksperimen B, bukan temuan riset. Catat perubahan dari token ini dalam CHANGELOG dan jelaskan alasannya.
