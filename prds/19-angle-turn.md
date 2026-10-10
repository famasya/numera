# ANG: Angle and Turn

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Menghubungkan putaran dan belokan dengan sudut yang tetap meskipun panjang sisi berubah.

LT: [PDF resmi daring, hlm. 30–30](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **ANG-R01:** Rotasi seperempat putaran mendukung eksplorasi; belum membuktikan sudut terukur.
- **ANG-R02:** Variasikan panjang lengan dengan sudut tetap dan orientasi berbeda.
- **ANG-R03:** Sediakan engsel/dua garis yang dapat diselaraskan; derajat tidak wajib pada kegiatan awal.
- **ANG-R04:** Motion memvisualisasikan nilai sudut deterministik dan menghormati reduced motion.

Urutan paket pengalaman yang diusulkan: Belokan konkret → penyelarasan → pencocokan bukaan → perbandingan besar → pengukuran formal ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| ANG-01 | [hlm. 30, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | fondasi | Mendampingi perhatian terhadap perubahan arah. | Belum ada |
| ANG-02 | [hlm. 30, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | fondasi | Menggunakan belokan intuitif dalam konstruksi. | Belum ada |
| ANG-03 | [hlm. 30, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | utama | Menyelaraskan arah dan sudut dalam kegiatan konkret. | `shape-turn`, `shape-sails` |
| ANG-04 | [hlm. 30, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | utama | Mencocokkan sudut dan membedakan sejajar/tidak sejajar. | Belum ada |
| ANG-05 | [hlm. 30, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | utama | Membandingkan besar sudut dan putaran pada orientasi berbeda. | Belum ada |
| ANG-06 | [hlm. 30, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=30) | lanjutan | Merepresentasikan dan mengukur sudut secara umum. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **ANG-A01 — Fixture:** Cocokkan dua bukaan seperempat putaran dengan lengan panjang berbeda; putar orientasi keduanya lalu bandingkan bukaan.
- **ANG-A02 — Hasil yang diperiksa:** Besar sudut tidak berubah akibat panjang lengan/orientasi. Validator menggunakan sudut, bukan jarak ujung. Derajat tidak wajib.
- **ANG-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **ANG-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **ANG-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Pattern Making](https://nrich.maths.org/content/id/13250/PatternMaking2022.pdf) (NR-01): Menyalin, melanjutkan, memperbaiki, membuat, dan membahas unit berulang.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
