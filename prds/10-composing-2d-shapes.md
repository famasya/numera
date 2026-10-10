# C2D: Composing 2D Shapes

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Menyusun, mengganti, dan mengurai bentuk dengan berkurangnya petunjuk siluet.

LT: [PDF resmi daring, hlm. 16–17](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **C2D-R01:** Siluet lengkap mendukung Piece Assembler; jangan otomatis menandainya Shape Composer.
- **C2D-R02:** Hilangkan garis pembagi bertahap dan sediakan lebih dari satu dekomposisi.
- **C2D-R03:** Validator memakai union geometri, celah, dan overlap untuk kombinasi setara.
- **C2D-R04:** Beri kesempatan mengganti satu bentuk dengan beberapa; total bidang harus tetap sama.

Urutan paket pengalaman yang diusulkan: Siluet tiap potongan → beberapa potongan per bagian → tanpa garis → substitusi/dekomposisi → unit gabungan.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| C2D-01 | [hlm. 16, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | fondasi | Mendampingi eksplorasi bentuk satu per satu. | Belum ada |
| C2D-02 | [hlm. 16, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Menyusun gambar dengan peran tiap potongan dan siluet lengkap. | `shape-house`, `shape-boat`, `shape-rocket` |
| C2D-03 | [hlm. 16, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Menggunakan beberapa potongan untuk satu bagian gambar. | Belum ada |
| C2D-04 | [hlm. 16, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Mengurai bentuk mengikuti petunjuk yang terlihat. | Belum ada |
| C2D-05 | [hlm. 16, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Merencanakan kombinasi bentuk termasuk rotasi/pantulan. | `shape-floor`, `shape-bridge` |
| C2D-06 | [hlm. 16, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Mengganti satu potongan dengan gabungan yang setara. | Belum ada |
| C2D-07 | [hlm. 16, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Mengurai bentuk dengan dukungan gambar. | Belum ada |
| C2D-08 | [hlm. 16, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Mengulang bentuk gabungan sebagai satu unit. | Belum ada |
| C2D-09 | [hlm. 16, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | utama | Merencanakan penguraian tanpa garis pemisah. | Belum ada |
| C2D-10 | [hlm. 16, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=16) | lanjutan | Menyusun unit gabungan dari unit gabungan lain. | Belum ada |
| C2D-11 | [hlm. 17, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=17) | lanjutan | Mengurai bentuk dengan unit bertingkat. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **C2D-A01 — Fixture:** Isi siluet lengkap; lalu tutup persegi dengan dua segitiga atau satu persegi tanpa garis pembagi; ganti satu persegi dengan dua segitiga.
- **C2D-A02 — Hasil yang diperiksa:** Union bidang setara diterima; overlap/celah ditolak tanpa mereset bagian benar. Dua kombinasi sah diterima untuk tujuan sama.
- **C2D-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **C2D-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **C2D-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Pattern Making](https://nrich.maths.org/content/id/13250/PatternMaking2022.pdf) (NR-01): Menyalin, melanjutkan, memperbaiki, membuat, dan membahas unit berulang.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
