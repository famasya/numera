# ARE: Area

## Penempatan peta

**Peta 1 + peta 2.** Peta 1: tiling di Pulau Bentuk. Peta 2: Lembah Ukuran untuk satuan dan pengukuran bidang. Peta 2 masih rencana; lihat [status delivery](23-maps-and-delivery.md).

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membandingkan bidang, menutup tanpa celah, dan menghubungkan satuan dengan baris/kolom.

LT: [PDF resmi daring, hlm. 26–27](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **ARE-R01:** Pisahkan tiling dengan balok komposit dari mengukur dengan satuan persegi.
- **ARE-R02:** Sediakan persediaan berlebih serta tujuan membuat bidang, bukan selalu memakai semua balok.
- **ARE-R03:** Validator luas memakai bidang tertutup, bukan panjang tepi atau jumlah potongan.
- **ARE-R04:** Tampilkan jumlah satuan yang sama pada bentuk berbeda dan satuan berbeda pada bidang yang sama.

Urutan paket pengalaman yang diusulkan: Superposisi → cover grid → bidang tujuan → unit berbeda → baris/kolom; rumus ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| ARE-01 | [hlm. 26, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26) | fondasi | Mendampingi perhatian terhadap bidang yang tertutup. | Belum ada |
| ARE-02 | [hlm. 26, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26) | utama | Membandingkan bidang lewat penumpukan dan penutupan. | Belum ada |
| ARE-03 | [hlm. 26, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26) | utama | Menutup bidang memakai satuan dengan petunjuk grid. | `shape-floor`, `shape-bridge` |
| ARE-04 | [hlm. 26, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26) | utama | Menutup lengkap dan membuat bidang sesuai banyak satuan. | `shape-floor`, `shape-bridge` |
| ARE-05 | [hlm. 26, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=26) | utama | Mengulang satuan dan membandingkan hasil dengan ukuran satuan berbeda. | Belum ada |
| ARE-06 | [hlm. 27, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=27) | utama | Mengelompokkan satuan bidang menjadi baris atau kelompok. | Belum ada |
| ARE-07 | [hlm. 27, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=27) | lanjutan | Mengurai bagian satuan dan menyusun baris/kolom. | Belum ada |
| ARE-08 | [hlm. 27, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=27) | lanjutan | Menghubungkan baris dan kolom dengan luas tanpa menggambar semua satuan. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **ARE-A01 — Fixture:** Tutup bidang enam satuan dengan enam persegi atau tiga domino; buat bidang empat satuan dari sepuluh ubin; gunakan ubin besar/kecil.
- **ARE-A02 — Hasil yang diperiksa:** Jumlah potongan dibedakan dari jumlah satuan luas. Semua union enam satuan tanpa overlap diterima. Surplus boleh tersisa.
- **ARE-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **ARE-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **ARE-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.
- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
