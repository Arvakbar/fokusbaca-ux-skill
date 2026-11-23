# INTERACTION-SPEC — FokusBaca

**Versi:** 1.0 | **Referensi:** README.md, UX-SPEC.md, DESIGN-SYSTEM.md.

## 1. Prinsip Global
Setiap aksi memiliki respons terlihat, tidak menghasilkan halaman kosong, dapat dioperasikan dengan keyboard, dan tidak menghilangkan konten atau posisi baca secara tak terduga. Hindari tindakan tersembunyi, overlay, dan interupsi wajib.

## 2. Navigasi dan Routing
- Klik kartu artikel → buka rute detail untuk ID/slug unik; judul, metadata, dan isi cocok dengan kartu.
- Klik kembali → kembali ke daftar (idealnya mempertahankan query pencarian). Jika history browser kosong, navigasi ke daftar default.
- Link detail tidak valid → state Artikel tidak ditemukan + tombol kembali ke daftar.
- Refresh pada URL detail harus tetap berfungsi pada deployment statis (gunakan hash routing atau fallback hosting yang sesuai).

## 3. Pencarian
**Trigger:** pengguna mengetik dalam input berlabel `Cari artikel`. **Behavior:** filter `title`, `summary`, `category` secara case-insensitive dan trim spasi pinggir; hasil tampil langsung tanpa tombol Submit. **Empty:** tampilkan `Tidak ada artikel yang cocok` dan aksi `Hapus pencarian`. **Clear:** semua artikel tampil lagi. Tidak perlu API/permintaan jaringan.

## 4. Mode Fokus
**Trigger:** toggle `Aktifkan Mode Fokus` pada detail. **On:** sembunyikan/de-emphasize navigasi, dekorasi, dan konten non-esensial, tetapi tidak meniadakan isi artikel, panel informasi kunci, atau kontrol keluar. **Off:** kembalikan tampilan normal. **Invariants:** URL artikel tidak berubah, posisi baca tetap secara praktis stabil, tidak ada scroll otomatis ke atas. Bila layout berubah, hindari re-mount isi artikel. Jangan buat overlay penuh layar.

## 5. Ukuran Teks
**Trigger:** pilih `Kecil`, `Standar`, atau `Besar`. **Behavior:** ubah ukuran teks isi artikel dan tandai pilihan aktif secara visual dan semantik (`aria-pressed` atau kelompok radio). **Invariants:** tidak kehilangan informasi, tidak overflow horizontal pada 360/768/1366px, tidak memaksa kembali ke awal. Penyimpanan browser lokal opsional dan tidak boleh mengirim data pengguna.

## 6. Informasi Kunci
Panel ringkasan informasi penting dapat ditelusuri menuju subbagian artikel terkait. Ketika tautan ditekan, fokus/posisi scroll menuju heading target secara dapat diprediksi, tidak tertutup header sticky. Untuk harga tiket demonstrasi, tampilkan `Ilustrasi — bukan harga aktual`. Tidak memberi kesan situs resmi Kompas.com.

## 7. Form, Empty, Error, dan Loading
Tidak ada CRUD atau backend untuk MVP. Pencarian tidak ditemukan = empty state, bukan error. Rute tidak ditemukan = halaman pemulihan yang jelas. Jika data lokal gagal dirender, tampilkan fallback aman; jangan tampilkan blank screen. Komponen kontrol mempunyai default, hover/focus, selected, dan disabled jika relevan. Pengecekan build tidak boleh menjadi alasan mengklaim jaringan produksi sehat tanpa uji.

## 8. Responsive/Keyboard Behavior
Urutan fokus: navigasi → search (pada daftar) atau kembali → mode fokus → ukuran teks → konten/tautan. `Enter`/`Space` mengaktifkan tombol; `Tab` menavigasi, fokus terlihat. Kontrol tidak boleh tertutup pada mobile. Hormati `prefers-reduced-motion` bila ada animasi.

## 9. Skenario Interaksi Kritis
1. Masukkan `buthak` → hasil relevan → buka → temukan panel ringkasan.
2. Toggle mode fokus pada tengah bacaan → isi tetap ada, posisi relatif stabil → toggle kembali.
3. Pilih ketiga ukuran → tidak terpotong/overflow → informasi tetap sama.
4. Cari string tanpa kecocokan → empty state → reset → 6 artikel kembali.
5. Buka slug tidak valid → fallback → kembali ke daftar.
6. Gunakan seluruh kontrol tanpa mouse.
