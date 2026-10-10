# VIS: Spatial Visualization

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membayangkan dan memeriksa hasil geser, putar, dan pantul.

LT: [PDF resmi daring, hlm. 21–21](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **VIS-R01:** Sediakan operasi geser, putar, dan flip yang berbeda; reverse urutan bukan flip geometri.
- **VIS-R02:** Gunakan bentuk asimetris agar arah pantulan terlihat.
- **VIS-R03:** Izinkan prediksi dengan ghost placement sebelum mencoba, tanpa jawaban verbal wajib.
- **VIS-R04:** Catat pilihan transformasi; niat dan citra mental hanya melalui pengamatan pendamping.

Urutan paket pengalaman yang diusulkan: Geser/putar → flip nyata → kombinasi operasi → diagonal/sumbu miring → mental bebas ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| VIS-01 | [hlm. 21, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | fondasi | Mendampingi eksplorasi perpindahan dan kecocokan benda. | Belum ada |
| VIS-02 | [hlm. 21, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | fondasi | Mendampingi geser, putar, dan balik dengan mencoba. | Belum ada |
| VIS-03 | [hlm. 21, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | utama | Menggeser dan memutar bentuk pada tugas sederhana. | `shape-turn`, `shape-sails`, `shape-bridge` |
| VIS-04 | [hlm. 21, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | utama | Memilih geser/putar/pantul lalu mengoreksi hasil. | `shape-mirror`, `shape-window` |
| VIS-05 | [hlm. 21, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | utama | Merencanakan transformasi dengan bantuan benda. | `shape-mirror`, `shape-window` |
| VIS-06 | [hlm. 21, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | utama | Menggunakan geser diagonal dan pantulan sumbu miring. | Belum ada |
| VIS-07 | [hlm. 21, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=21) | lanjutan | Membayangkan hasil transformasi beragam tanpa bantuan benda. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **VIS-A01 — Fixture:** Putar bentuk L, pantulkan terhadap sumbu vertikal/horizontal, lalu pantulkan terhadap sumbu miring pada tahap lanjut.
- **VIS-A02 — Hasil yang diperiksa:** Rotasi dan pantulan menghasilkan geometri berbeda untuk bentuk asimetris. Empat seperempat putaran kembali ke awal. Prediksi dan percobaan tetap terpisah.
- **VIS-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **VIS-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **VIS-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Pattern Making](https://nrich.maths.org/content/id/13250/PatternMaking2022.pdf) (NR-01): Menyalin, melanjutkan, memperbaiki, membuat, dan membahas unit berulang.
- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
