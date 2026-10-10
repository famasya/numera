# SUB: Subitizing

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Mengenali kelompok kecil dan hubungan bagian–keseluruhan tanpa kewajiban menghitung satu per satu.

LT: [PDF resmi daring, hlm. 3–4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **SUB-R01:** Contoh selalu boleh dilihat; tidak ada paparan cepat wajib atau timer.
- **SUB-R02:** Variasikan susunan, warna, dan jarak tanpa mengubah jumlah.
- **SUB-R03:** Parent Mode membedakan menghitung, melihat langsung, dan melihat bagian; game tidak menebak strategi dari waktu.
- **SUB-R04:** Kegiatan harus menerima konstruksi jumlah setara, bukan hanya memilih kartu jawaban.

Urutan paket pengalaman yang diusulkan: Kelompok 1–3 → kelompok 4–5 → gabungan bagian → struktur sampai 10/20 dan bundel.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| SUB-01 | [hlm. 3, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | fondasi | Mendampingi perhatian terhadap perbedaan kelompok kecil. | Belum ada |
| SUB-02 | [hlm. 3, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | fondasi | Menghubungkan kelompok sangat kecil dengan kata jumlah. | Belum ada |
| SUB-03 | [hlm. 3, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | fondasi | Membuat koleksi kecil yang setara dengan contoh. | `orders` |
| SUB-04 | [hlm. 3, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | fondasi | Mengenali dan menyebut kelompok 1–3. | `orders` |
| SUB-05 | [hlm. 3, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | utama | Mengenali kelompok sampai 4 pada susunan bervariasi. | Belum ada |
| SUB-06 | [hlm. 3, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | utama | Mengenali kelompok sampai 5 di luar susunan yang dihafal. | Belum ada |
| SUB-07 | [hlm. 3, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | utama | Melihat total sampai 5 sebagai gabungan bagian kecil. | Belum ada |
| SUB-08 | [hlm. 3, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=3) | utama | Menggabungkan bagian untuk mengenali 6–7. | Belum ada |
| SUB-09 | [hlm. 4, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=4) | utama | Menggunakan struktur bagian untuk jumlah sampai 10. | Belum ada |
| SUB-10 | [hlm. 4, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=4) | utama | Menggunakan struktur kelompok untuk jumlah 10–20. | Belum ada |
| SUB-11 | [hlm. 4, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=4) | utama | Menggunakan bundel dan nilai tempat untuk mengenali jumlah. | Belum ada |
| SUB-12 | [hlm. 4, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=4) | lanjutan | Menggunakan kelompok perkalian dan nilai tempat untuk jumlah lebih besar. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **SUB-A01 — Fixture:** Buat koleksi setara dengan susunan 2+2 dan 3+1; kemudian 3+2 pada bahan berbeda.
- **SUB-A02 — Hasil yang diperiksa:** Total yang sama diterima pada susunan berbeda. Anak boleh menghitung. Catatan pendamping membedakan strategi; durasi tidak dipakai.
- **SUB-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **SUB-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **SUB-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Hidden Jewels](https://nrich.maths.org/content/id/14002/HiddenJewels2022.pdf) (NR-08): Kelompok kecil, subkelompok, dan menghitung untuk memeriksa.
- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
