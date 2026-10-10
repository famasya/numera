# PAT: Patterning

Status: requirements dirancang, belum implementasi perluasan. Ditinjau 10 Oktober 2026.

## Goal section

Membuat, memeriksa, mentransfer, dan menggeneralisasi aturan pola.

LT: [PDF resmi daring, hlm. 12–13](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12). Rujukan halaman/urutan mengarah ke sumber daring; goal dan requirements ditulis sebagai rancangan Numera. Nama dan tabel usia level sumber tidak direproduksi lengkap di repo. Berlaku [requirements bersama](00-foundations.md) dan [integrasi NRICH](21-problem-solving.md).

## Requirements kegiatan

- **PAT-R01:** Pisahkan menyalin, melanjutkan unit utuh/parsial, memperbaiki, membuat, dan transfer lintas media.
- **PAT-R02:** Transfer menampilkan sumber dan bahan tujuan berbeda; menyalin daun-lentera sejenis belum memenuhi transfer.
- **PAT-R03:** AA/BB tetap valid sebagai kreasi bebas; jangan klaim unit minimal dua jika unit minimal sebenarnya satu.
- **PAT-R04:** Grid Latin bukan bukti pola relasional atau aljabar; aturan kuantitas harus benar-benar dimainkan.

Urutan paket pengalaman yang diusulkan: AB beberapa tugas → unit tiga/empat → unit terkecil dan transfer → kuantitas → kesetaraan/relasi.

Setiap goal di bawah wajib memiliki kegiatan original, sedikitnya dua variasi yang berbeda secara matematis, bantuan bertahap, validator, Parent Mode, dan acceptance per goal sesuai F-04/F-09. Angka dua adalah minimum QA produk, bukan ambang penguasaan anak. Tidak harus satu misi per goal.

## Pemetaan seluruh level

| Goal ID | Lokasi level pada PDF resmi | Cakupan | Tujuan kegiatan Numera | Dukungan kode sekarang |
| --- | --- | --- | --- | --- |
| PAT-01 | [hlm. 12, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | fondasi | Mendampingi pengulangan gerak atau benda. | Belum ada |
| PAT-02 | [hlm. 12, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | fondasi | Mengenali urutan berulang sederhana. | Belum ada |
| PAT-03 | [hlm. 12, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | utama | Menyalin, mengisi, memperbaiki, dan melanjutkan AB. | `patterns`, `repair`, `free-pattern`, `forest-copy`, `forest-next`, `forest-gap`, `forest-size`, `forest-transfer`, `forest-pairs`, `forest-double`, `forest-three`, `forest-repair`, `forest-create` |
| PAT-04 | [hlm. 12, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | utama | Membangun pola dengan unit AAB, ABB, ABC dan lebih kompleks. | `patterns`, `forest-pairs`, `forest-double`, `forest-three` |
| PAT-05 | [hlm. 12, level 5](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | utama | Mengidentifikasi unit terkecil dan memindah aturan ke bahan lain. | Belum ada |
| PAT-06 | [hlm. 12, level 6](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | utama | Menghubungkan pola gambar dengan urutan kuantitas. | Belum ada |
| PAT-07 | [hlm. 12, level 7](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=12) | utama | Menjelajahi aturan bilangan dan kesetaraan dua susunan. | Belum ada |
| PAT-08 | [hlm. 13, level 1](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=13) | utama | Menggunakan hubungan tambah/kurang tanpa selalu menghitung semua. | Belum ada |
| PAT-09 | [hlm. 13, level 2](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=13) | utama | Menjelajahi hubungan yang sama dengan jumlah belum diketahui. | Belum ada |
| PAT-10 | [hlm. 13, level 3](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=13) | batas | Menggunakan hubungan kelompok perkalian pada pola. | Belum ada |
| PAT-11 | [hlm. 13, level 4](https://www.learningtrajectories.org/documents/1691785025839.pdf#page=13) | batas | Menghubungkan dua kumpulan yang berubah menurut aturan. | Belum ada |

- **fondasi:** Fondasi pendukung; tidak menargetkan bayi atau meminta umur anak.
- **utama:** Goal roadmap usia 3–7; kedalaman dipilih dari kesiapan per konsep.
- **batas:** Ekstensi opsional di batas 7/8; tidak wajib untuk cakupan utama.
- **lanjutan:** Di luar batas usia sekarang; tercatat untuk kelengkapan, tidak dijadwalkan.

Semua tautan misi di tabel berarti **dukungan parsial/konteks**, bukan cakupan penuh atau pencapaian level. Batas tiap misi ada di [audit 48 misi](22-existing-missions.md). Tidak adanya misi berarti kebutuhan kegiatan baru.

## Acceptance section

- **PAT-A01 — Fixture:** Salin AB, lanjutkan ABABA, perbaiki ABBABB dengan penyimpangan; ubah merah/biru menjadi daun/lentera.
- **PAT-A02 — Hasil yang diperiksa:** Urutan yang memenuhi unit diterima termasuk start parsial. Transfer harus menjaga relasi kategori lintas bahan. AA/BB kreasi tetap sah.
- **PAT-A03 — Variasi:** uji fixture pada susunan lain serta benda/bahan lain; pertahankan tujuan matematis dan jangan memberi petunjuk jawaban lewat warna/ukuran yang tidak relevan.
- **PAT-A04 — Batas bukti:** pisahkan keadaan digital yang tervalidasi dari ucapan, penjelasan, strategi mental, dan keterampilan fisik. Catatan orang tua opsional; ketidakhadirannya berarti belum diamati.
- **PAT-A05 — Per-goal:** untuk setiap goal utama yang diimplementasikan, dokumentasikan fixture sah/tidak sah, keluaran validator, variasi, bantuan, dan observasi yang khusus tujuan tersebut. Fixture section di atas tidak menggantikan acceptance untuk goal yang lebih lanjut.

## NRICH dan problem solving

- [Pattern Making](https://nrich.maths.org/content/id/13250/PatternMaking2022.pdf) (NR-01): Menyalin, melanjutkan, memperbaiki, membuat, dan membahas unit berulang.
- [Show Me](https://nrich.maths.org/content/id/12747/ShowMe2022.pdf) (NR-06): Jumlah sama pada susunan berbeda dan hubungan benda/titik/bagian.

NRICH memberi konteks dan prinsip kegiatan; tidak menyatakan PDF NRICH di atas mencakup semua level section ini. Tujuan lanjut bertumpu pada LT dan desain original; rujukan rinci NRICH ada dalam [catatan primer](../references/nrich-primary.md).
