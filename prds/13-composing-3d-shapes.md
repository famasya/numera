# C3D: Composing 3D Shapes

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membangun struktur ruang dengan penyangga, bukaan, kedalaman, dan unit gabungan.

LT: [PDF resmi daring, hlm. 20–20](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **C3D-R01:** Struktur harus memiliki koordinat 3D, dukungan, volume, dan bukaan yang dapat diperiksa.
- **C3D-R02:** Jembatan grid 2D tidak memenuhi konstruksi jembatan 3D.
- **C3D-R03:** Validator deterministik memeriksa overlap dan penyangga; fisika hanya jika tugas perlu tumpukan bebas/tumbukan.
- **C3D-R04:** Sediakan beberapa bangunan valid untuk tujuan cerita yang sama.

Urutan paket pengalaman yang diusulkan: Baris/tumpukan → lantai/dinding → bukaan/atap → substitusi → beberapa tingkat.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| C3D-01 | [hlm. 20, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | fondasi | Mendampingi eksplorasi balok terpisah. | Belum ada |
| C3D-02 | [hlm. 20, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | fondasi | Mendampingi tumpukan balok. | Belum ada |
| C3D-03 | [hlm. 20, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | fondasi | Mendampingi barisan balok. | Belum ada |
| C3D-04 | [hlm. 20, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | fondasi | Mendampingi tumpukan balok yang cocok. | Belum ada |
| C3D-05 | [hlm. 20, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | fondasi | Menyusun lantai atau dinding sederhana. | Belum ada |
| C3D-06 | [hlm. 20, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | utama | Menyusun struktur dengan beberapa hubungan posisi. | Belum ada |
| C3D-07 | [hlm. 20, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | utama | Merencanakan lengkungan, ruang tertutup, dan atap. | Belum ada |
| C3D-08 | [hlm. 20, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | utama | Mengganti bagian bangunan dengan gabungan balok setara. | Belum ada |
| C3D-09 | [hlm. 20, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=20) | utama | Membangun beberapa tingkat dengan unit struktur gabungan. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **C3D-A01 — Fixture:** Bangun pintu dengan dua penyangga dan satu balok melintang; bangun ruang tertutup dengan atap, lalu ganti satu penyangga dengan dua balok.
- **C3D-A02 — Hasil yang diperiksa:** Bukaan tidak boleh terisi, overlap dilarang, atap memiliki dukungan. Beberapa bangunan yang memenuhi batasan diterima.
- **C3D-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **C3D-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **C3D-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
