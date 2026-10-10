# COM: Composing Numbers

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Menyusun dan mengurai total yang sama dengan beberapa kombinasi bagian.

LT: [PDF resmi daring, hlm. 9–9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **COM-R01:** Semua partisi yang sesuai cerita valid, termasuk bagian kosong bila konteks mengizinkan.
- **COM-R02:** Anak dapat menyimpan alternatif dan lanjut setelah satu; enumerasi lengkap tidak wajib.
- **COM-R03:** Memindahkan benda ke dua petak belum membuktikan anak dapat menyebut kombinasi.
- **COM-R04:** Tawarkan tujuan total yang berubah dan persediaan berlebih; jangan selalu membagi semua benda yang sudah tersedia.

Urutan paket pengalaman yang diusulkan: Partisi bebas → melengkapi total → alternatif komposisi → kelompok 7/10 → puluhan/satuan.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| COM-01 | [hlm. 9, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | fondasi | Mendampingi tindakan mengumpulkan bagian. | Belum ada |
| COM-02 | [hlm. 9, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | fondasi | Menggabungkan koleksi sambil membahas keseluruhan. | Belum ada |
| COM-03 | [hlm. 9, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Membandingkan bagian dengan keseluruhan secara konkret. | `composition`, `tower-even` |
| COM-04 | [hlm. 9, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Membangun berbagai pasangan bagian untuk total 4–5. | `composition`, `missing`, `tower-weights`, `tower-lights` |
| COM-05 | [hlm. 9, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Membangun berbagai bagian untuk total sampai 7. | Belum ada |
| COM-06 | [hlm. 9, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Membangun berbagai bagian untuk total sampai 10. | Belum ada |
| COM-07 | [hlm. 9, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Menyusun dan membuka puluhan/satuan untuk total 20 lebih. | Belum ada |
| COM-08 | [hlm. 9, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Menurunkan kombinasi baru dari kombinasi yang dikenal. | Belum ada |
| COM-09 | [hlm. 9, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | utama | Memakai hubungan bagian–keseluruhan pada masalah beragam. | Belum ada |
| COM-10 | [hlm. 9, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=9) | batas | Mengurai dan menyusun bilangan multidigit. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **COM-A01 — Fixture:** Total lima dapat menjadi 0/5, 1/4, 2/3 dan pasangan baliknya; total tujuan empat diambil dari tujuh bunga.
- **COM-A02 — Hasil yang diperiksa:** Semua partisi diterima dan dapat disimpan tanpa wajib lengkap. Produksi total empat tidak memaksa semua persediaan dipakai.
- **COM-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **COM-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **COM-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.
- [Hidden Jewels](https://nrich.maths.org/content/id/14002/HiddenJewels2022.pdf) (NR-08): Kelompok kecil, subkelompok, dan menghitung untuk memeriksa.
- [Counting Collections](https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf) (NR-05): Pilihan strategi menghitung, pencatatan, dan menjaga benda yang sudah dihitung.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
