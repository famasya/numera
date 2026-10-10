# ORI: Spatial Orientation

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Menemukan posisi relatif terhadap landmark dan menghubungkan perjalanan dengan peta.

LT: [PDF resmi daring, hlm. 22–23](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **ORI-R01:** Peta navigasi UI tidak otomatis menjadi kegiatan membaca peta.
- **ORI-R02:** Tugas harus menyandingkan peta dan scene, atau mengubah posisi pengamat terhadap landmark.
- **ORI-R03:** Koordinat perlu integrasi baris dan kolom; grid Latin hanya memeriksa kategori.
- **ORI-R04:** Berjalan dapat kembali dan punya beberapa rute; jangan pakai waktu tempuh atau lintasan terpendek sebagai skor.

Urutan paket pengalaman yang diusulkan: Landmark lokal → perubahan pandangan → peta-ke-dunia → dua koordinat → transformasi peta ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| ORI-01 | [hlm. 22, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | fondasi | Mendampingi perhatian terhadap tempat dan perjalanan. | Belum ada |
| ORI-02 | [hlm. 22, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | fondasi | Mendampingi rute gerak yang diulang. | Belum ada |
| ORI-03 | [hlm. 22, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | fondasi | Mendampingi letak benda terhadap lingkungan akrab. | Belum ada |
| ORI-04 | [hlm. 22, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | fondasi | Menemukan benda dengan landmark dan relasi posisi. | Belum ada |
| ORI-05 | [hlm. 22, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | utama | Menemukan lokasi setelah sudut pandang berubah. | `tower-path`, `tower-detour`, `tower-key`, `tower-beacon` |
| ORI-06 | [hlm. 22, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | utama | Menjaga hubungan posisi beberapa landmark saat berpindah. | `tower-path`, `tower-detour`, `tower-key`, `tower-beacon` |
| ORI-07 | [hlm. 22, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | utama | Menghubungkan peta bergambar dengan lokasi dunia. | Belum ada |
| ORI-08 | [hlm. 22, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | utama | Membaca dan menempatkan lokasi menurut dua koordinat. | Belum ada |
| ORI-09 | [hlm. 22, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=22) | lanjutan | Mengikuti peta rute dengan arah dan jarak. | Belum ada |
| ORI-10 | [hlm. 23, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=23) | lanjutan | Menghubungkan kerangka peta yang berubah dengan lokasi dunia. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **ORI-A01 — Fixture:** Temukan benda di belakang rumah setelah posisi pengamat berubah; pakai peta bergambar untuk lokasi; letakkan benda di perpotongan baris/kolom.
- **ORI-A02 — Hasil yang diperiksa:** Lokasi mengikuti kerangka acuan yang dinyatakan. Kedua koordinat wajib benar; hanya baris benar belum selesai. Gerak boleh kembali.
- **ORI-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **ORI-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **ORI-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Calendar Muddle](https://nrich.maths.org/content/id/13731/CalendarMuddle2022edited.pdf) (NR-10): Urutan kejadian akrab serta sebelum/sesudah.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
