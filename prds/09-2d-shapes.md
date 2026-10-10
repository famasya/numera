# S2D: 2D Shapes

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Mengenali dan membangun bentuk berdasarkan sifat, bukan warna atau prototipe tunggal.

LT: [PDF resmi daring, hlm. 14–15](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **S2D-R01:** Variasikan orientasi, proporsi, ukuran, dan warna secara independen; sertakan noncontoh.
- **S2D-R02:** Bentuk interaktif mengikuti geometri sebenarnya; persegi tidak menjadi persegi panjang melalui stretch ilustrasi.
- **S2D-R03:** Bangun dari sisi/sudut membutuhkan mekanik tepi, bukan sekadar menaruh shape token.
- **S2D-R04:** Penyebutan nama/sifat perlu pengamatan orang tua; game boleh memakai pencocokan visual.

Urutan paket pengalaman yang diusulkan: Variasi prototipe → sisi/sudut → bentuk lebih banyak → konstruksi dari tepi → sifat/kelas pada ekstensi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| S2D-01 | [hlm. 14, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | fondasi | Mendampingi pencocokan bentuk benda nyata. | Belum ada |
| S2D-02 | [hlm. 14, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | fondasi | Mencocokkan bentuk pada ukuran dan orientasi berbeda. | `shape-shadows` |
| S2D-03 | [hlm. 14, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | fondasi | Mengenali bentuk dasar yang akrab. | Belum ada |
| S2D-04 | [hlm. 14, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Mencocokkan variasi bentuk dan gabungan bentuk. | `shape-shadows`, `shape-turned` |
| S2D-05 | [hlm. 14, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Mengenali lingkaran, persegi, dan segitiga yang tidak selalu prototipikal. | `shape-turned` |
| S2D-06 | [hlm. 14, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Membuat bentuk dari bagian tepi yang tampak sesuai. | Belum ada |
| S2D-07 | [hlm. 14, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Mengenali persegi panjang dengan proporsi dan orientasi berbeda. | Belum ada |
| S2D-08 | [hlm. 14, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Memeriksa sisi sebagai bagian bentuk. | Belum ada |
| S2D-09 | [hlm. 14, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Membandingkan atribut bentuk secara menyeluruh. | Belum ada |
| S2D-10 | [hlm. 14, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Memeriksa sudut sebagai bagian bentuk. | Belum ada |
| S2D-11 | [hlm. 14, level 11](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Mengenali lebih banyak jenis bentuk. | Belum ada |
| S2D-12 | [hlm. 14, level 12](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=14) | utama | Membedakan bentuk dan menyebut sifat yang relevan. | Belum ada |
| S2D-13 | [hlm. 15, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | utama | Menemukan sudut pada belokan dan konteks berbeda. | Belum ada |
| S2D-14 | [hlm. 15, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | utama | Mengidentifikasi bagian penyusun bentuk. | Belum ada |
| S2D-15 | [hlm. 15, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | utama | Menumpuk bentuk untuk memeriksa kecocokan penuh. | Belum ada |
| S2D-16 | [hlm. 15, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | utama | Membangun bentuk tepat dari sisi dan sambungan sudut. | Belum ada |
| S2D-17 | [hlm. 15, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Merepresentasikan konteks sudut dengan garis acuan. | Belum ada |
| S2D-18 | [hlm. 15, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Menjelaskan kecocokan melalui sifat dan transformasi. | Belum ada |
| S2D-19 | [hlm. 15, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Mengelompokkan menurut kelas bentuk. | Belum ada |
| S2D-20 | [hlm. 15, level 8](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Menjelaskan sifat tetap saat bentuk ditransformasi. | Belum ada |
| S2D-21 | [hlm. 15, level 9](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Menghubungkan kelas dan sifat bentuk secara hierarkis. | Belum ada |
| S2D-22 | [hlm. 15, level 10](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=15) | lanjutan | Menghubungkan sudut sebagai putaran, pojok, dan kemiringan. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **S2D-A01 — Fixture:** Kelompokkan segitiga ramping, tumpul, dan diputar; bandingkan persegi panjang dengan jajargenjang; bangun segitiga dari tiga sisi.
- **S2D-A02 — Hasil yang diperiksa:** Warna/orientasi tidak menentukan kategori. Sisi yang tidak menutup belum membentuk target. Penyebutan sifat tidak disimpulkan dari penempatan.
- **S2D-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **S2D-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **S2D-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Tidying](https://nrich.maths.org/content/id/8856/Tidying2022.pdf) (NR-07): Memeriksa koleksi belum lengkap serta pencocokan bentuk dan siluet.
- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
