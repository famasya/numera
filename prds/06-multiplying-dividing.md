# MUL: Multiplying / Dividing

## Penempatan peta

**Peta 1 + peta 2.** Peta 1: berbagi di Taman Angka. Peta 2: Pelabuhan Petualangan untuk kelompok dan penerima berbeda. Peta 2 masih rencana; lihat [status delivery](23-maps-and-delivery.md).

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membuat kelompok sama banyak, berbagi, dan menghubungkan jumlah kelompok dengan isi setiap kelompok.

LT: [PDF resmi daring, hlm. 10–10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **MUL-R01:** Bedakan berapa per kelompok dan berapa kelompok; kedua masalah harus punya kegiatan.
- **MUL-R02:** Variasikan dua hingga beberapa penerima; jangan hanya empat buah untuk dua teman.
- **MUL-R03:** Anak boleh membagikan satu per satu, per kelompok, atau mengoreksi distribusi.
- **MUL-R04:** Jika pembagian menyisakan benda, cerita harus menerima sisa atau memberi pilihan memecah benda; jangan diam-diam membuangnya.

Urutan paket pengalaman yang diusulkan: Bagikan satu per satu → kelompok sama → jumlah kelompok versus isi → tambah berulang/strategi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| MUL-01 | [hlm. 10, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | fondasi | Mendampingi kegiatan memberi bagian kepada teman. | Belum ada |
| MUL-02 | [hlm. 10, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | utama | Membuat kelompok kecil dan membagikan satu per satu. | `sharing` |
| MUL-03 | [hlm. 10, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | utama | Membuat beberapa kelompok sama banyak dan memeriksanya. | `sharing` |
| MUL-04 | [hlm. 10, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | utama | Memodelkan kebutuhan kelompok dan pembagian dengan benda. | Belum ada |
| MUL-05 | [hlm. 10, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | utama | Mengubah jumlah penerima sambil mempertahankan total. | Belum ada |
| MUL-06 | [hlm. 10, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | utama | Menggunakan tambah berulang atau hitungan kelompok. | Belum ada |
| MUL-07 | [hlm. 10, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | batas | Mengurai kelompok untuk menurunkan hasil perkalian. | Belum ada |
| MUL-08 | [hlm. 10, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | lanjutan | Memilih strategi pada masalah kelompok beragam. | Belum ada |
| MUL-09 | [hlm. 10, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=10) | lanjutan | Menemukan isi setiap kelompok dari total dan jumlah kelompok. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **MUL-A01 — Fixture:** Enam buah dibagi tiga teman; buat tiga keranjang masing-masing dua; ubah enam buah dari dua ke tiga penerima.
- **MUL-A02 — Hasil yang diperiksa:** 2/2/2 dan tiga kelompok berisi dua sama-sama sah sesuai tujuan. 1/2/3 belum sama banyak. Jumlah tetap enam saat penerima berubah.
- **MUL-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **MUL-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **MUL-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [The Doorbell Rang](https://nrich.maths.org/content/id/13534/UsingBooksTheDoorbellRang2022.pdf) (NR-03): Berbagi konkret, memeriksa kesamaan bagian, dan mengubah strategi.
- [Counting Collections](https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf) (NR-05): Pilihan strategi menghitung, pencatatan, dan menjaga benda yang sudah dihitung.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
