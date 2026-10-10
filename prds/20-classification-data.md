# DAT: Classification and Data Analysis

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membentuk kategori, mengubah aturan, merekam kasus, dan memakai data untuk keputusan.

LT: [PDF resmi daring, hlm. 31–32](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **DAT-R01:** Reklasifikasi memakai koleksi identitas yang sama; dua misi sort terpisah belum membuktikan fleksibilitas.
- **DAT-R02:** Rekam satu benda/kartu per kasus; pindah kategori tidak menduplikasi data.
- **DAT-R03:** Data dipakai untuk keputusan cerita, misalnya bekal yang dibutuhkan; bukan grafik dekoratif.
- **DAT-R04:** Grid Latin bukan klasifikasi multiatribut; setiap benda perlu dua atribut yang benar-benar disilangkan.

Urutan paket pengalaman yang diusulkan: Satu atribut → ubah aturan → kasus dan frekuensi → dua atribut → distribusi abstrak pada ekstensi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| DAT-01 | [hlm. 31, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | fondasi | Mendampingi perhatian terhadap kesamaan. | Belum ada |
| DAT-02 | [hlm. 31, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | fondasi | Mendampingi kelompok benda yang mirip/berbeda. | Belum ada |
| DAT-03 | [hlm. 31, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Mengelompokkan menurut aturan sederhana dan memperbaiki salah tempat. | `sorting`, `forest-colors`, `forest-types`, `shape-sizes` |
| DAT-04 | [hlm. 31, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Memilah menurut atribut yang dinyatakan. | `sorting`, `forest-colors`, `forest-types`, `shape-sizes` |
| DAT-05 | [hlm. 31, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Memilah konsisten lalu memilah ulang koleksi yang sama. | `forest-types` |
| DAT-06 | [hlm. 31, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Merekam satu nilai untuk setiap kasus. | Belum ada |
| DAT-07 | [hlm. 31, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Menggabungkan kasus ke kategori dan membandingkan frekuensi. | Belum ada |
| DAT-08 | [hlm. 31, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=31) | utama | Memilah menurut beberapa atribut sekaligus. | Belum ada |
| DAT-09 | [hlm. 32, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=32) | batas | Membahas distribusi kumpulan data dan kategori abstrak. | Belum ada |
| DAT-10 | [hlm. 32, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=32) | lanjutan | Menghubungkan kategori dan subkategori. | Belum ada |
| DAT-11 | [hlm. 32, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=32) | lanjutan | Membandingkan representasi data, pusat, dan variasi. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **DAT-A01 — Fixture:** Pilah koleksi daun/jamur menurut warna lalu jenis; catat pilihan bekal tiap teman satu kali; bandingkan kategori; pilah warna sekaligus jenis.
- **DAT-A02 — Hasil yang diperiksa:** Identitas koleksi tetap pada reklasifikasi. Setiap kasus punya satu rekaman per pertanyaan. Multiatribut memeriksa kedua atribut; seri kategori sah.
- **DAT-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **DAT-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **DAT-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Counting Collections](https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf) (NR-05): Pilihan strategi menghitung, pencatatan, dan menjaga benda yang sudah dihitung.
- [Calendar Muddle](https://nrich.maths.org/content/id/13731/CalendarMuddle2022edited.pdf) (NR-10): Urutan kejadian akrab serta sebelum/sesudah.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
