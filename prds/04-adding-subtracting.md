# ADD: Adding / Subtracting

## Penempatan peta

**Peta 1 + peta 2.** Peta 1: Taman Angka dan Menara Misteri memberi konteks awal. Peta 2: Pelabuhan Petualangan untuk perubahan dan unknown. Peta 2 masih rencana; lihat [status delivery](23-maps-and-delivery.md).

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Memodelkan perubahan jumlah, menemukan bagian yang belum diketahui, dan mengembangkan strategi.

LT: [PDF resmi daring, hlm. 7–8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **ADD-R01:** Sediakan cerita hasil, perubahan, dan awal yang belum diketahui; jangan semua menjadi isi lubang.
- **ADD-R02:** Benda boleh dipindah kembali dan anak boleh menghitung semua.
- **ADD-R03:** Persamaan opsional di tahap lanjut; cerita tetap dapat dimainkan secara visual.
- **ADD-R04:** Validator memeriksa keadaan akhir, bukan urutan strategi; rekam perubahan yang relevan tanpa menilai kecepatan.

Urutan paket pengalaman yang diusulkan: Hasil diketahui melalui benda → perubahan belum diketahui → awal belum diketahui → strategi turunan/bundel.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| ADD-01 | [hlm. 7, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | fondasi | Mendampingi perhatian terhadap benda yang datang/pergi. | Belum ada |
| ADD-02 | [hlm. 7, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | fondasi | Menggabungkan dan mengambil kelompok sangat kecil. | Belum ada |
| ADD-03 | [hlm. 7, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Membuat hasil gabungan/pengambilan sampai 5 dengan benda. | `tower-weights` |
| ADD-04 | [hlm. 7, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Memodelkan hasil cerita gabungan dan pengambilan. | Belum ada |
| ADD-05 | [hlm. 7, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Menambah benda sampai jumlah tujuan tercapai. | `missing`, `tower-lights` |
| ADD-06 | [hlm. 7, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Menemukan banyak benda yang harus ditambah atau diambil. | Belum ada |
| ADD-07 | [hlm. 7, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Menggunakan hitung lanjut saat menggabungkan kelompok. | Belum ada |
| ADD-08 | [hlm. 7, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Menghubungkan bagian dan total pada beberapa bentuk masalah. | Belum ada |
| ADD-09 | [hlm. 7, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Menemukan jumlah awal dengan mempertahankan bagian dan total. | Belum ada |
| ADD-10 | [hlm. 7, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=7) | utama | Mengubah masalah menjadi kombinasi yang sudah dikenal. | Belum ada |
| ADD-11 | [hlm. 8, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=8) | utama | Menyelesaikan variasi hasil, perubahan, dan awal yang belum diketahui. | Belum ada |
| ADD-12 | [hlm. 8, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=8) | batas | Menggabungkan puluhan dan satuan dalam perubahan multidigit. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **ADD-A01 — Fixture:** Tiga buah mendapat dua; lima buah kehilangan dua; tiga buah perlu menjadi lima; mula-mula belum diketahui lalu mendapat dua menjadi lima.
- **ADD-A02 — Hasil yang diperiksa:** Hasil 5, 3, perubahan 2, dan awal 3 dibedakan. Validator menerima hitung semua atau hitung lanjut dengan keadaan akhir sama.
- **ADD-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **ADD-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **ADD-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Counting Collections](https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf) (NR-05): Pilihan strategi menghitung, pencatatan, dan menjaga benda yang sudah dihitung.
- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.
- [The Doorbell Rang](https://nrich.maths.org/content/id/13534/UsingBooksTheDoorbellRang2022.pdf) (NR-03): Berbagi konkret, memeriksa kesamaan bagian, dan mengubah strategi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
