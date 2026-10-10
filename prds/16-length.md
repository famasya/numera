# LEN: Length

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membandingkan dan mengukur panjang dengan acuan dan satuan yang konsisten.

LT: [PDF resmi daring, hlm. 24–25](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **LEN-R01:** Pangkal awal dapat disejajarkan oleh anak; jangan hanya membandingkan bounding box.
- **LEN-R02:** Validator memeriksa celah, overlap, panjang satuan, dan titik awal.
- **LEN-R03:** Satuan dapat dipindah ulang saat jumlah alat terbatas.
- **LEN-R04:** Ukuran shape-sizes bukan bukti panjang; kegiatan perlu objek panjang yang benar-benar dibandingkan.

Urutan paket pengalaman yang diusulkan: Banding langsung → acuan ketiga → seriasi → satuan ujung-ke-ujung → iterasi satuan → jalur pada ekstensi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| LEN-01 | [hlm. 24, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | fondasi | Mendampingi perbandingan panjang intuitif. | Belum ada |
| LEN-02 | [hlm. 24, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | fondasi | Mengenali panjang sebagai atribut terpisah. | Belum ada |
| LEN-03 | [hlm. 24, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Menyelaraskan pangkal dua benda untuk membandingkan panjang. | Belum ada |
| LEN-04 | [hlm. 24, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Memindahkan panjang melalui benda acuan ketiga. | Belum ada |
| LEN-05 | [hlm. 24, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Mengurutkan sampai lima panjang. | Belum ada |
| LEN-06 | [hlm. 24, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Menutup panjang dengan satuan ujung-ke-ujung. | Belum ada |
| LEN-07 | [hlm. 24, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Mengurutkan enam atau lebih panjang. | Belum ada |
| LEN-08 | [hlm. 24, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=24) | utama | Mengulang satu satuan dan menghubungkan ukuran satuan dengan jumlah. | Belum ada |
| LEN-09 | [hlm. 25, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=25) | batas | Mengukur jalur berbelok, titik nol, dan bagian satuan. | Belum ada |
| LEN-10 | [hlm. 25, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=25) | lanjutan | Memakai satuan panjang dalam bayangan untuk pengukuran. | Belum ada |
| LEN-11 | [hlm. 25, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=25) | lanjutan | Menghubungkan keliling dan luas pada beberapa bentuk. | Belum ada |
| LEN-12 | [hlm. 25, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=25) | lanjutan | Menggunakan satuan panjang turunan dan ketelitian pengukuran. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **LEN-A01 — Fixture:** Sejajarkan pangkal tali 3 dan 5 satuan; ukur panjang 6 dengan satu balok 2 satuan yang dipindah tiga kali.
- **LEN-A02 — Hasil yang diperiksa:** Celah/overlap tidak dihitung sebagai ukuran benar. Balok sama diulang tanpa diduplikasi. Unit besar membutuhkan lebih sedikit pengulangan.
- **LEN-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **LEN-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **LEN-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [How Long Are You?](https://nrich.maths.org/content/id/14657/HowLongAreYou2022.pdf) (NR-04): Panjang dengan satuan seragam; celah, overlap, dan ukuran satuan.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
