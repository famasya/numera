# CMP: Comparing Number

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membandingkan, menyamakan, mengurutkan, dan memperkirakan jumlah dengan alasan yang dapat diperiksa.

LT: [PDF resmi daring, hlm. 5–6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **CMP-R01:** Ukuran, kepadatan, dan panjang baris harus dapat bervariasi terpisah dari jumlah.
- **CMP-R02:** Sediakan pasangan dan pemeriksaan hitung sebagai strategi alternatif.
- **CMP-R03:** Kesetaraan jumlah dibedakan dari berat dan luas.
- **CMP-R04:** Estimasi diterima sebagai dugaan untuk diperiksa, tanpa skor kedekatan.

Urutan paket pengalaman yang diusulkan: Pasangkan → bandingkan ukuran berbeda → urutkan → jalur bilangan/estimasi → nilai tempat.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| CMP-01 | [hlm. 5, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | fondasi | Mendampingi perhatian terhadap perubahan jumlah. | Belum ada |
| CMP-02 | [hlm. 5, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | fondasi | Memasangkan koleksi sangat kecil untuk menemukan kesetaraan. | `matching` |
| CMP-03 | [hlm. 5, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | fondasi | Membandingkan kelompok yang jelas berbeda. | Belum ada |
| CMP-04 | [hlm. 5, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Menempatkan benda pertama dan kedua dalam cerita. | Belum ada |
| CMP-05 | [hlm. 5, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Membandingkan jumlah kecil benda sejenis. | Belum ada |
| CMP-06 | [hlm. 5, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Memasangkan jumlah kecil dari jenis benda berbeda. | Belum ada |
| CMP-07 | [hlm. 5, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Membandingkan kelompok lewat pasangan satu-satu. | `compare`, `sharing`, `tower-even` |
| CMP-08 | [hlm. 5, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Memeriksa dua koleksi kecil dengan menghitung. | `compare` |
| CMP-09 | [hlm. 5, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=5) | utama | Membuat dugaan sedikit/banyak lalu memeriksanya. | Belum ada |
| CMP-10 | [hlm. 6, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Membandingkan sampai 5 saat ukuran benda berbeda. | Belum ada |
| CMP-11 | [hlm. 6, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Menempatkan jumlah sampai 5 pada jalur berurutan. | Belum ada |
| CMP-12 | [hlm. 6, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Mengurutkan jumlah sampai 5. | `growing` |
| CMP-13 | [hlm. 6, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Memakai posisi urutan pertama sampai kesepuluh. | Belum ada |
| CMP-14 | [hlm. 6, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Membandingkan koleksi sampai 10 saat ukuran berbeda. | Belum ada |
| CMP-15 | [hlm. 6, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Menempatkan hubungan jumlah sampai 10 pada jalur. | Belum ada |
| CMP-16 | [hlm. 6, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Mengurutkan enam atau lebih jumlah. | Belum ada |
| CMP-17 | [hlm. 6, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Memperkirakan kelompok kecil, sedang, dan besar. | Belum ada |
| CMP-18 | [hlm. 6, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Membandingkan bilangan dengan bundel nilai tempat. | Belum ada |
| CMP-19 | [hlm. 6, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Menempatkan hubungan bilangan sampai 100. | Belum ada |
| CMP-20 | [hlm. 6, level 11](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | utama | Memperkirakan jumlah dengan pemindaian kelompok. | Belum ada |
| CMP-21 | [hlm. 6, level 12](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | batas | Menjelajahi posisi bilangan sampai 1000. | Belum ada |
| CMP-22 | [hlm. 6, level 13](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | lanjutan | Menggunakan kelompok acuan untuk estimasi. | Belum ada |
| CMP-23 | [hlm. 6, level 14](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=6) | lanjutan | Memecah kelompok besar untuk estimasi total. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **CMP-A01 — Fixture:** Bandingkan empat batu kecil dengan tiga batu besar; samakan 4/2; urutkan kelompok 1–5 yang urutannya diacak.
- **CMP-A02 — Hasil yang diperiksa:** Ukuran tidak mengubah validasi jumlah. Semua pasangan/setara valid. Urutan meningkat diterima; pertukaran dua kelompok belum memenuhi tujuan.
- **CMP-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **CMP-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **CMP-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.
- [Counting Collections](https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf) (NR-05): Pilihan strategi menghitung, pencatatan, dan menjaga benda yang sudah dihitung.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
