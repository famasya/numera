# VOL: Volume

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membandingkan kapasitas dan mengisi ruang dengan satuan yang dapat dipindah dan dihitung.

LT: [PDF resmi daring, hlm. 28–29](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **VOL-R01:** Pisahkan kapasitas cairan dan packing kubus; keduanya butuh model deterministik.
- **VOL-R02:** Tinggi cairan di wadah berbeda bukan ukuran volume yang sama; bentuk wadah harus dimodelkan.
- **VOL-R03:** Pemindahan mempertahankan volume; overflow dinyatakan dan dapat dipulihkan.
- **VOL-R04:** Unit tersembunyi dan sisa ruang dapat diperiksa lewat rotasi/cutaway; animasi tidak menentukan volume.

Urutan paket pengalaman yang diusulkan: Isi/transfer → terisi dan sisa → unit berulang → unit tersembunyi → lapisan/rumus ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| VOL-01 | [hlm. 28, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | fondasi | Mendampingi perhatian terhadap isi ruang. | Belum ada |
| VOL-02 | [hlm. 28, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | fondasi | Mendampingi pengenalan kapasitas sebagai atribut. | Belum ada |
| VOL-03 | [hlm. 28, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | utama | Mengisi dan membandingkan wadah melalui pemindahan isi. | Belum ada |
| VOL-04 | [hlm. 28, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | utama | Memeriksa bagian terisi, sisa ruang, dan unit pengisi. | Belum ada |
| VOL-05 | [hlm. 28, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | utama | Mengulang satuan dan membandingkan dua ukuran satuan. | Belum ada |
| VOL-06 | [hlm. 28, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=28) | batas | Mengisi ruang sambil memperhitungkan unit yang tersembunyi. | Belum ada |
| VOL-07 | [hlm. 29, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=29) | lanjutan | Mengelompokkan kubus menjadi baris dan lapisan. | Belum ada |
| VOL-08 | [hlm. 29, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=29) | lanjutan | Menghubungkan dimensi ruang dengan susunan unit 3D. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **VOL-A01 — Fixture:** Pindahkan enam unit cairan antara wadah lebar dan sempit; isi ruang 2×2×2 dengan delapan kubus; ulangi scoop besar dua unit.
- **VOL-A02 — Hasil yang diperiksa:** Volume tetap enam walau tinggi berubah. Kubus tersembunyi dihitung, overlap dilarang. Scoop dua unit butuh tiga kali untuk enam.
- **VOL-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **VOL-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **VOL-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
