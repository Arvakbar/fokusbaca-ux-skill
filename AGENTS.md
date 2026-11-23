# AGENTS.md — Instruksi AI Coding Agent (Eksperimen B)

## 1. Project Context
Anda adalah AI Software Engineer yang mengimplementasikan prototipe FokusBaca untuk tugas Rekayasa Interaksi. FokusBaca adalah produk independen yang meneliti pengalaman membaca berita digital; bukan replika resmi Kompas.com. Dokumentasi ini hanya berlaku untuk **Eksperimen B (PRD + UX Skill)**.

## 2. Mandatory Documentation
Sebelum memodifikasi kode, baca secara urut:
1. `README.md` — PRD v1.0, scope dan kebutuhan produk **otoritas tertinggi**.
2. `UX-SPEC.md` — journey, information architecture, page spec.
3. `DESIGN-SYSTEM.md` — token visual dan aturan komponen.
4. `INTERACTION-SPEC.md` — state, feedback dan behavior.
5. `ACCEPTANCE-CRITERIA.md` — test cases dan standar penerimaan.
6. `.agents/skills/fokusbaca-ux/SKILL.md` — workflow UX Skill.

Jika dokumen saling bertentangan, PRD menang atas scope/fitur; spesifikasi lain mengisi rincian implementasi tanpa memperluas fitur. Laporkan konflik, asumsi, dan keputusan.

## 3. Engineering Principles
- Implementasikan fungsi nyata, bukan mockup statis.
- Gunakan React + Vite dan komponen yang terpisah secara masuk akal.
- Hindari dependencies/backend yang tidak diperlukan untuk MVP.
- Data artikel harus orisinal dan memiliki label demo yang jelas, terutama nominal/harga.
- Pertahankan konten ketika mode fokus dan ukuran teks diubah.
- Tampilkan fallback ketika pencarian kosong atau slug invalid.
- Utamakan semantik HTML, keyboard accessibility, responsive design.

## 4. Workflow
1. Audit workspace kosong/template dan tulis rencana ringkas.
2. Validasi daftar fitur terhadap FR-01–08 dan AC-01–12.
3. Buat artikel lokal min. 6 (original; minimal satu skenario Gunung Buthak dengan nominal ilustratif).
4. Implementasikan daftar, search, detail, focus toggle, size control, key facts, navigation, dan fallback.
5. Terapkan design tokens dan aturan interaksi dari dokumen.
6. Jalankan `npm run lint`, `npm run build`; uji manual saat browser tersedia.
7. Perbarui `CHANGELOG.md` sesuai perubahan aktual dan status pengujian.
8. Berikan completion report dengan file yang diubah, features delivered, hasil pengujian, gaps, dan asumsi.

## 5. Scope Protection
Jangan menambahkan autentikasi, backend, CMS, iklan sungguhan, scraping, data tiket aktual, maupun branding/logo Kompas.com. Jangan copy source code Eksperimen A. Jangan mengubah isi PRD/README tanpa instruksi eksplisit.

## 6. Code Quality
Jaga nama komponen deskriptif, props/state terkontrol, list keys stabil, cleanup event listeners, dan aksesibilitas kontrol. Hindari `dangerouslySetInnerHTML` untuk konten tidak tepercaya. Jika menggunakan localStorage, validasi nilai opsi. Tidak boleh ada runtime error atau horizontal overflow utama.

## 7. Testing and Reporting
Berikan status PASS/FAIL/NOT RUN per AC berdasarkan bukti, jangan klaim seluruhnya lulus hanya karena build sukses. Catat waktu mulai/selesai dan jumlah prompt revisi **berdasarkan observasi nyata**, jangan diperkirakan. Tandai pengujian usability yang belum dilakukan.

## 8. Agent Skill Usage
Ikuti workflow `.agents/skills/fokusbaca-ux/SKILL.md` saat implementasi UI/UX. Jika lingkungan AI tidak auto-discover skill, baca path skill secara eksplisit. Skill adalah panduan desain dan verifikasi, bukan izin menambah requirement produk.
