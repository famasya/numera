# FRC: Fractions

## Penempatan peta

**Peta 2.** Pelabuhan Petualangan. Berbagi buah di peta 1 belum menjadi kegiatan pecahan. Peta 2 masih rencana; lihat [status delivery](23-maps-and-delivery.md).

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membuat bagian sama besar, menjaga keseluruhan acuan, dan memakai bagian untuk berbagi.

LT: [PDF resmi daring, hlm. 11–11](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **FRC-R01:** Empat buah dibagi dua orang bukan otomatis bukti memahami separuh bentuk.
- **FRC-R02:** Validator membandingkan luas/panjang bagian; jumlah potongan sama belum tentu adil.
- **FRC-R03:** Keseluruhan acuan tetap terlihat; dua separuh dari benda berbeda tidak diasumsikan setara.
- **FRC-R04:** Mulai dengan potongan konkret; notasi pecahan tidak menjadi syarat membaca untuk bermain.

Urutan paket pengalaman yang diusulkan: Bagian adil → separuh/sepertiga/seperempat → beberapa unit → notasi opsional → lebih dari satu keseluruhan pada ekstensi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| FRC-01 | [hlm. 11, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | fondasi | Mendampingi perhatian terhadap proporsi. | Belum ada |
| FRC-02 | [hlm. 11, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | utama | Membagi bentuk menjadi bagian sama besar. | Belum ada |
| FRC-03 | [hlm. 11, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | utama | Mengenali separuh melalui pembagian adil. | Belum ada |
| FRC-04 | [hlm. 11, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | utama | Membuat bagian satu dari beberapa bagian sama besar. | Belum ada |
| FRC-05 | [hlm. 11, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | utama | Mengenali bagian pecahan pada beberapa representasi. | Belum ada |
| FRC-06 | [hlm. 11, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | utama | Membangun pecahan dari pengulangan bagian satuan dan mengenalkan notasi opsional. | Belum ada |
| FRC-07 | [hlm. 11, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | batas | Membuat dan membandingkan pecahan dengan acuan jelas. | Belum ada |
| FRC-08 | [hlm. 11, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | batas | Mengulang bagian hingga melewati satu keseluruhan. | Belum ada |
| FRC-09 | [hlm. 11, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | lanjutan | Menggabungkan dan mengambil bagian dengan penyebut sama. | Belum ada |
| FRC-10 | [hlm. 11, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | lanjutan | Memodelkan perkalian/pembagian pecahan melalui bidang. | Belum ada |
| FRC-11 | [hlm. 11, level 11](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=11) | lanjutan | Menghubungkan pecahan, desimal, persen, dan urutan bilangan. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **FRC-A01 — Fixture:** Bagi kue menjadi dua bagian sama luas; bandingkan dengan dua potongan 1/3 dan 2/3; susun tiga bagian seperempat.
- **FRC-A02 — Hasil yang diperiksa:** Dua potongan tidak otomatis separuh; luas harus sama. Tiga seperempat menyisakan seperempat dari keseluruhan yang tetap terlihat.
- **FRC-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **FRC-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **FRC-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [The Doorbell Rang](https://nrich.maths.org/content/id/13534/UsingBooksTheDoorbellRang2022.pdf) (NR-03): Berbagi konkret, memeriksa kesamaan bagian, dan mengubah strategi.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
