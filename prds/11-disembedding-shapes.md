# DIS: Disembedding Shapes

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Menemukan dan merekonstruksi bentuk di dalam susunan yang saling bertumpuk.

LT: [PDF resmi daring, hlm. 18–18](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **DIS-R01:** Bentuk yang tersembunyi harus benar-benar perlu ditemukan, bukan slot dengan label bentuk.
- **DIS-R02:** Anak menelusuri tepi atau membangun ulang; jangan memakai kuis pilihan ganda.
- **DIS-R03:** Pisahkan overlap, containment, dan struktur sekunder dalam variasi.
- **DIS-R04:** Validator menerima semua kontur target yang sah; bantuan menyorot sebagian tepi saja.

Urutan paket pengalaman yang diusulkan: Bentuk terpisah → overlap → containment → struktur sekunder → kompleks opsional.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| DIS-01 | [hlm. 18, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18) | utama | Mengingat dan membangun kembali bentuk terpisah. | Belum ada |
| DIS-02 | [hlm. 18, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18) | utama | Menelusuri bentuk pada gambar yang saling bertumpuk. | Belum ada |
| DIS-03 | [hlm. 18, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18) | utama | Menemukan bentuk di dalam bentuk lain. | `shape-rocket` |
| DIS-04 | [hlm. 18, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18) | utama | Menemukan struktur yang tidak mengikuti tepi utama gambar. | Belum ada |
| DIS-05 | [hlm. 18, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=18) | batas | Menemukan bentuk pada susunan kompleks beragam. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **DIS-A01 — Fixture:** Temukan persegi pada dua persegi bertumpuk; temukan lingkaran dalam persegi; bangun ulang segitiga tersembunyi.
- **DIS-A02 — Hasil yang diperiksa:** Kontur utuh target diterima; kontur yang kehilangan sisi belum lengkap. Hint menyorot sebagian tepi tanpa memilih semua.
- **DIS-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **DIS-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **DIS-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Tidying](https://nrich.maths.org/content/id/8856/Tidying2022.pdf) (NR-07): Memeriksa koleksi belum lengkap serta pencocokan bentuk dan siluet.
- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
