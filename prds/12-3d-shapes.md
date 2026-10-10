# S3D: 3D Shapes

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Mengenali bangun ruang dan permukaannya melalui beberapa pandangan.

LT: [PDF resmi daring, hlm. 19–19](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **S3D-R01:** Bangun dapat diputar; kedalaman dan permukaan belakang harus dapat diperiksa.
- **S3D-R02:** Bedakan wajah 2D dari bangun 3D; satu gambar persegi tidak memenuhi kubus.
- **S3D-R03:** Tandai permukaan yang sudah dihitung secara opsional; bukan counter jawaban otomatis.
- **S3D-R04:** Sediakan kegiatan benda nyata; keberhasilan rotasi layar tidak membuktikan pengenalan bangun fisik.

Urutan paket pengalaman yang diusulkan: Benda akrab → beberapa solid/wajah → hitung permukaan → jaring-jaring ditunda.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| S3D-01 | [hlm. 19, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | fondasi | Mendampingi pengamatan benda saat diputar. | Belum ada |
| S3D-02 | [hlm. 19, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | utama | Mengenali kubus dan bola dalam benda akrab. | Belum ada |
| S3D-03 | [hlm. 19, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | utama | Mengenali beberapa bangun ruang dan bentuk permukaannya. | Belum ada |
| S3D-04 | [hlm. 19, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | utama | Melacak dan menghitung semua permukaan tanpa duplikasi. | Belum ada |
| S3D-05 | [hlm. 19, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | lanjutan | Menghubungkan sifat bangun dengan jaring-jaring. | Belum ada |
| S3D-06 | [hlm. 19, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=19) | lanjutan | Mengelompokkan bangun ruang menurut sifat. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **S3D-A01 — Fixture:** Putar kubus, bola, dan silinder; tandai semua permukaan kubus dari beberapa pandangan.
- **S3D-A02 — Hasil yang diperiksa:** Permukaan kubus terhitung enam sekali masing-masing. Bentuk 2D wajah dibedakan dari solid. Wajah tersembunyi dapat diakses.
- **S3D-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **S3D-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **S3D-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Packing](https://nrich.maths.org/content/id/9719/Packing2022.pdf) (NR-02): Memilah benda dan memeriksa kecocokan benda dengan wadah.
- [Wrapping Parcels](https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf) (NR-11): Membandingkan penutup permukaan, benda ruang, dan posisi.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
