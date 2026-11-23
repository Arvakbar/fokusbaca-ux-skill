---
name: fokusbaca-ux
description: Panduan UX-driven implementation, audit, dan evaluasi FokusBaca pada Eksperimen B.
---

# FokusBaca UX Skill

## Kapan digunakan
Gunakan untuk merancang, mengimplementasikan, atau mengaudit komponen dan flow FokusBaca berdasarkan README.md, UX-SPEC.md, DESIGN-SYSTEM.md, INTERACTION-SPEC.md, dan ACCEPTANCE-CRITERIA.md.

## Langkah kerja wajib
1. **Discover:** baca `README.md` dan petakan FR serta AC sebelum menulis kode. Identifikasi kebutuhan UX-01–10 yang mendasari tiap komponen.
2. **Plan:** uraikan flow daftar → cari → detail → informasi kunci → kembali; tentukan state normal, fokus, ukuran teks, pencarian kosong, dan not-found.
3. **Design:** terapkan token visual `DESIGN-SYSTEM.md`; prioritaskan area baca, keterbacaan, dan kontrol yang terlihat. Jangan menempatkan overlay promosi pada teks.
4. **Implement:** buat komponen React berfungsi penuh, konten lokal orisinal, responsive dan keyboard-friendly. Pastikan URL detail dan history stabil.
5. **Inspect:** uji 360, 768, 1366px; toggle mode fokus saat halaman tergulir; 3 ukuran teks; empty state; not-found; keyboard focus.
6. **Verify:** jalankan lint/build; cek AC-01–12 menggunakan lembar di `ACCEPTANCE-CRITERIA.md`; catat PASS/FAIL/NOT RUN dengan bukti.
7. **Document:** perbarui `CHANGELOG.md` dan laporkan asumsi, keterbatasan, serta iterasi nyata.

## UX Guardrails
- Utamakan informasi daripada dekorasi; ringkasan dan label kategori jelas.
- Tidak boleh ada pop-up/overlay yang menghalangi konten utama.
- Mode fokus hanya mengubah presentasi, tetap ada jalan keluar dan tidak menghapus informasi.
- Text-size switch mempertahankan konten/posisi dan menghindari overflow.
- Data harga hanyalah ilustrasi; beri label eksplisit.
- Semua kontrol utama dapat dipakai dengan keyboard, fokus terlihat.
- Tidak boleh memperluas scope PRD atau menyalin kode Eksperimen A.

## Definition of Done
Setiap AC-P1 PASS; seluruh AC lain memiliki status nyata, termasuk NOT RUN jika belum diuji; perubahan terdokumentasi; deployment dan GitHub dikerjakan sesuai instruksi pengguna.
