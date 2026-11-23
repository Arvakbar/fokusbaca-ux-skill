const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

export function formatArticleDate(date) {
  return dateFormatter.format(new Date(date))
}

export const articles = [
  {
    slug: 'tiket-gunung-buthak-via-batu',
    category: 'Perjalanan',
    date: '2026-11-20',
    title: 'Ilustrasi biaya pendakian Gunung Buthak via Kota Batu',
    summary: 'Simak contoh nominal tiket, apa saja yang tercakup, dan hal yang perlu dikonfirmasi sebelum berangkat.',
    facts: [
      { label: 'Tiket masuk', value: 'Rp25.000 per orang (ilustrasi)', section: 'biaya-tiket' },
      { label: 'Konteks', value: 'Contoh anggaran via Kota Batu', section: 'cakupan-biaya' },
      { label: 'Verifikasi', value: 'Konfirmasi ke pengelola jalur', section: 'cek-sebelum-berangkat' },
    ],
    priceExample: true,
    sections: [
      {
        id: 'biaya-tiket',
        title: 'Contoh nominal tiket',
        paragraphs: [
          'Dalam skenario demonstrasi ini, tiket masuk dianggarkan Rp25.000 per orang. Nominal tersebut hanya ilustrasi untuk latihan membaca rincian biaya.',
          'Anggaran rombongan bisa dimulai dengan mengalikan jumlah peserta dengan nominal contoh per orang. Tulis jumlah peserta dan satuan biayanya agar pembaca lain bisa mengikuti cara hitungnya.',
        ],
      },
      {
        id: 'cakupan-biaya',
        title: 'Apa saja yang tercakup?',
        paragraphs: [
          'Tiket dalam simulasi ini hanya mencakup pos masuk pendaki via Kota Batu. Parkir, transportasi ke titik kumpul, dan perlengkapan dicatat sebagai pos terpisah.',
          'Simpan rincian itu bersama catatan perjalanan. Saat satu pos berubah, rombongan bisa memperbarui bagian tersebut dan melihat pengaruhnya pada total anggaran.',
        ],
      },
      {
        id: 'cek-sebelum-berangkat',
        title: 'Yang perlu dicek sebelum berangkat',
        paragraphs: [
          'Hubungi pengelola jalur untuk memastikan tarif yang berlaku, jam registrasi, dokumen yang diperlukan, dan status jalur pada tanggal keberangkatan.',
          'Catat tanggal konfirmasi dan bagikan informasi yang sudah diperiksa kepada rombongan. Bila jadwal bergeser, ulangi pengecekan sebelum berangkat.',
        ],
      },
    ],
  },
  {
    slug: 'membaca-nonfiksi-15-menit',
    category: 'Literasi',
    date: '2026-11-19',
    title: 'Membaca nonfiksi dalam 15 menit',
    summary: 'Mulai dari satu pertanyaan dan akhiri dengan satu catatan yang bisa dipakai saat kembali membaca.',
    facts: [
      { label: 'Durasi contoh', value: '15 menit', section: 'sesi-pertama' },
      { label: 'Hasil sesi', value: 'Satu catatan singkat', section: 'catatan-baca' },
    ],
    sections: [
      {
        id: 'sesi-pertama',
        title: 'Mulai dengan satu pertanyaan',
        paragraphs: [
          'Sebelum membuka halaman pertama, tuliskan apa yang ingin Anda pahami. Jika bukunya membahas kebun kota, misalnya, cari tahu tanaman apa yang cocok untuk ruang yang Anda punya.',
          'Dalam sesi contoh 15 menit, lihat daftar isi, pilih bagian yang paling relevan, lalu baca beberapa halaman sambil mengingat pertanyaan awal.',
        ],
      },
      {
        id: 'catatan-baca',
        title: 'Tinggalkan satu catatan',
        paragraphs: [
          'Tutup buku sejenak dan tulis satu kalimat dengan kata-kata Anda sendiri. Tambahkan nomor halaman agar bagian yang penting mudah dibuka kembali.',
          'Jika pertanyaan awal belum terjawab, tulis pertanyaan lanjutan dan gunakan sebagai titik mulai pada sesi berikutnya.',
        ],
      },
    ],
  },
  {
    slug: 'kunjungan-pertama-perpustakaan-kota',
    category: 'Kota',
    date: '2026-11-18',
    title: 'Kunjungan pertama ke perpustakaan kota',
    summary: 'Siapkan judul yang ingin dicari dan kenali alur peminjaman saat tiba.',
    facts: [
      { label: 'Persiapan', value: 'Catat judul dan pengarang', section: 'sebelum-datang' },
      { label: 'Saat tiba', value: 'Tanya aturan peminjaman', section: 'saat-tiba' },
    ],
    sections: [
      {
        id: 'sebelum-datang',
        title: 'Sebelum datang',
        paragraphs: [
          'Catat judul dan pengarang buku yang ingin dibaca. Jika katalog tersedia, simpan nomor panggil untuk membantu menemukan lokasi buku di rak.',
          'Periksa jam layanan pada hari kunjungan. Siapkan satu judul cadangan agar waktu membaca tetap bisa dipakai bila buku pertama sedang dipinjam.',
        ],
      },
      {
        id: 'saat-tiba',
        title: 'Mencari buku dan meminjam',
        paragraphs: [
          'Tunjukkan nomor panggil kepada petugas bila belum mengenal tata letak ruang. Sebagian koleksi mungkin perlu diminta melalui meja layanan.',
          'Sebelum pulang, konfirmasi tanggal pengembalian dan cara memperpanjang pinjaman. Simpan tanggal itu di kalender yang biasa Anda gunakan.',
        ],
      },
    ],
  },
  {
    slug: 'menata-sudut-baca',
    category: 'Gaya Hidup',
    date: '2026-11-17',
    title: 'Menata sudut baca di ruang kecil',
    summary: 'Temukan posisi duduk dan arah cahaya yang nyaman dengan perabot yang sudah tersedia.',
    facts: [
      { label: 'Prioritas', value: 'Cahaya merata dan minim pantulan', section: 'atur-cahaya' },
      { label: 'Percobaan', value: 'Baca satu halaman sambil duduk', section: 'uji-posisi' },
    ],
    sections: [
      {
        id: 'atur-cahaya',
        title: 'Atur arah cahaya',
        paragraphs: [
          'Pilih kursi yang dapat didekatkan ke jendela atau lampu. Coba posisi menyamping dan lihat apakah cahaya jatuh cukup merata di permukaan buku.',
          'Untuk membaca di layar, ubah sedikit sudut duduk bila bayangan jendela atau lampu memantul dan menyulitkan Anda melihat teks.',
        ],
      },
      {
        id: 'uji-posisi',
        title: 'Uji dengan satu halaman',
        paragraphs: [
          'Baca satu halaman di tempat baru dan perhatikan posisi bahu, leher, dan tangan. Buku dapat disangga dengan bantal bila posisi yang lebih tinggi terasa nyaman.',
          'Letakkan penanda buku dan bahan bacaan berikutnya dalam jangkauan agar sesi berikutnya mudah dimulai.',
        ],
      },
    ],
  },
  {
    slug: 'menyimpan-artikel-untuk-dibaca-lagi',
    category: 'Teknologi',
    date: '2026-11-16',
    title: 'Menyimpan artikel agar mudah ditemukan lagi',
    summary: 'Gunakan penanda peramban dan catatan singkat untuk mengingat alasan Anda menyimpan sebuah bacaan.',
    facts: [
      { label: 'Alat', value: 'Penanda di peramban', section: 'buat-penanda' },
      { label: 'Petunjuk', value: 'Catat bagian yang ingin dibuka lagi', section: 'catat-alasan' },
    ],
    sections: [
      {
        id: 'buat-penanda',
        title: 'Beri nama yang mudah diingat',
        paragraphs: [
          'Simpan tautan dengan fitur penanda di peramban. Jika judul halaman terlalu umum, tambahkan topik yang kemungkinan akan Anda cari kembali.',
          'Untuk proyek yang melibatkan beberapa bacaan, letakkan penanda dalam satu folder dengan nama proyek tersebut.',
        ],
      },
      {
        id: 'catat-alasan',
        title: 'Catat bagian yang berguna',
        paragraphs: [
          'Simpan satu kalimat tentang hal yang Anda perlukan dari bacaan itu. Nama subjudul atau istilah khusus bisa membantu menemukan bagian tersebut.',
          'Ketika membuka artikel lagi, cari istilah tadi di halaman dan baca paragraf di sekitarnya agar konteksnya tetap jelas.',
        ],
      },
    ],
  },
  {
    slug: 'mengamati-burung-di-taman',
    category: 'Lingkungan',
    date: '2026-11-15',
    title: 'Mengamati burung di taman sekitar rumah',
    summary: 'Mulai dengan mendengar dan mencatat perilaku burung dari jarak yang nyaman.',
    facts: [
      { label: 'Titik amatan', value: 'Tempat tenang di tepi jalur', section: 'pilih-tempat' },
      { label: 'Catatan', value: 'Waktu, suara, dan perilaku', section: 'isi-catatan' },
    ],
    sections: [
      {
        id: 'pilih-tempat',
        title: 'Pilih tempat dan tunggu sebentar',
        paragraphs: [
          'Berdiri atau duduk di tepi jalur yang tidak mengganggu orang lewat. Dengarkan dari tempat itu dan amati dahan atau semak tempat suara berasal.',
          'Amati dari jarak yang nyaman bagi burung. Pindah tempat bila kehadiran Anda mengganggu satwa atau menghalangi pengguna taman.',
        ],
      },
      {
        id: 'isi-catatan',
        title: 'Tulis apa yang terlihat dan terdengar',
        paragraphs: [
          'Catat waktu, bentuk tubuh, warna yang terlihat, dan pola suara. Bila jenisnya belum jelas, tandai bagian itu sebagai belum teridentifikasi.',
          'Bandingkan catatan dari beberapa kunjungan untuk melihat lokasi atau waktu yang paling sering memberi kesempatan mengamati.',
        ],
      },
    ],
  },
]
