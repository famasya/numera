# PRD Numera: LT + NRICH

Keputusan pengguna, 10 Oktober 2026: guideline gabungan Learning Trajectories dan NRICH, batas produk usia **3–7 tahun**, requirements menyeluruh sebelum menetapkan peta tambahan. **48 adalah jumlah misi sekarang, bukan jumlah level kurikulum atau batas konten.**

## Cakupan dan status

PDF [LT resmi daring](https://www.learningtrajectories.org/documents/1691785025839.pdf) memiliki **20 trajectory dan 223 level** yang diinventaris dari 32 halaman. Setiap level mempunyai goal ID, lokasi halaman/urutan level sumber, tujuan kegiatan original, scope, section requirements, dan pemetaan misi. [lt-levels.json](lt-levels.json) menyimpan registry dokumentasi; belum menjadi konten runtime.

| Scope | Jumlah | Aturan perencanaan |
| --- | --- | --- |
| utama | 133 | Seluruh rentang sumber berada dalam 3–7; goal roadmap, bukan kewajiban setiap anak. |
| fondasi | 43 | Rentang dimulai sebelum 3; dukungan masuk/revisit, termasuk yang beririsan dengan 3. Tidak menargetkan bayi. |
| batas | 16 | Rentang dimulai dalam 3–7 dan berakhir setelah 7; ekstensi opsional, perlu review kedalaman. |
| lanjutan | 31 | Level dimulai setelah 7; dicatat agar inventaris lengkap, di luar delivery sekarang. |

Aturan scope ini adalah keputusan produk berbasis rentang yang tertulis, bukan usia diagnosis atau prasyarat unlock. Semua 223 level tercatat; tidak mengajarkan semua level kepada semua anak. Semua goal tambahan berstatus **dirancang**. Audit kode menemukan **34 level dengan dukungan parsial/konteks dari 48 misi**; tidak ada klaim coverage penuh, mastery, atau uji anak baru. [Audit misi](22-existing-missions.md) menjelaskan setiap batas.

## Cara membaca

1. [Requirements bersama](00-foundations.md): kontrak kegiatan, evidence, kesiapan, progres, platform, dan acceptance.
2. Pilih section trajectory di bawah untuk seluruh level dan goal kegiatan.
3. [Problem solving NRICH](21-problem-solving.md): enam goal lintas kegiatan dan sebelas sumber primer.
4. [Audit 48 misi](22-existing-missions.md): perilaku kode, dukungan goal, dan gap.
5. [Peta dan delivery](23-maps-and-delivery.md): paket pengalaman, requirements peta, dan exit criteria.

## Sections dan goal eksplisit

| Section | Goal | Level utama / fondasi / batas / lanjut | PRD |
| --- | --- | --- | --- |
| CNT — Counting | Membentuk jumlah, menjaga korespondensi, dan memakai hitungan untuk memenuhi kebutuhan. | 13 / 3 / 4 / 0 | [01-counting.md](01-counting.md) |
| SUB — Subitizing | Mengenali kelompok kecil dan hubungan bagian–keseluruhan tanpa kewajiban menghitung satu per satu. | 7 / 4 / 0 / 1 | [02-subitizing.md](02-subitizing.md) |
| CMP — Comparing Number | Membandingkan, menyamakan, mengurutkan, dan memperkirakan jumlah dengan alasan yang dapat diperiksa. | 17 / 3 / 1 / 2 | [03-comparing-number.md](03-comparing-number.md) |
| ADD — Adding / Subtracting | Memodelkan perubahan jumlah, menemukan bagian yang belum diketahui, dan mengembangkan strategi. | 9 / 2 / 1 / 0 | [04-adding-subtracting.md](04-adding-subtracting.md) |
| COM — Composing Numbers | Menyusun dan mengurai total yang sama dengan beberapa kombinasi bagian. | 7 / 2 / 1 / 0 | [05-composing-numbers.md](05-composing-numbers.md) |
| MUL — Multiplying / Dividing | Membuat kelompok sama banyak, berbagi, dan menghubungkan jumlah kelompok dengan isi setiap kelompok. | 5 / 1 / 1 / 2 | [06-multiplying-dividing.md](06-multiplying-dividing.md) |
| FRC — Fractions | Membuat bagian sama besar, menjaga keseluruhan acuan, dan memakai bagian untuk berbagi. | 5 / 1 / 2 / 3 | [07-fractions.md](07-fractions.md) |
| PAT — Patterning | Membuat, memeriksa, mentransfer, dan menggeneralisasi aturan pola. | 7 / 2 / 2 / 0 | [08-patterning.md](08-patterning.md) |
| S2D — 2D Shapes | Mengenali dan membangun bentuk berdasarkan sifat, bukan warna atau prototipe tunggal. | 13 / 3 / 0 / 6 | [09-2d-shapes.md](09-2d-shapes.md) |
| C2D — Composing 2D Shapes | Menyusun, mengganti, dan mengurai bentuk dengan berkurangnya petunjuk siluet. | 8 / 1 / 0 / 2 | [10-composing-2d-shapes.md](10-composing-2d-shapes.md) |
| DIS — Disembedding Shapes | Menemukan dan merekonstruksi bentuk di dalam susunan yang saling bertumpuk. | 4 / 0 / 1 / 0 | [11-disembedding-shapes.md](11-disembedding-shapes.md) |
| S3D — 3D Shapes | Mengenali bangun ruang dan permukaannya melalui beberapa pandangan. | 3 / 1 / 0 / 2 | [12-3d-shapes.md](12-3d-shapes.md) |
| C3D — Composing 3D Shapes | Membangun struktur ruang dengan penyangga, bukaan, kedalaman, dan unit gabungan. | 4 / 5 / 0 / 0 | [13-composing-3d-shapes.md](13-composing-3d-shapes.md) |
| VIS — Spatial Visualization | Membayangkan dan memeriksa hasil geser, putar, dan pantul. | 4 / 2 / 0 / 1 | [14-spatial-visualization.md](14-spatial-visualization.md) |
| ORI — Spatial Orientation | Menemukan posisi relatif terhadap landmark dan menghubungkan perjalanan dengan peta. | 4 / 4 / 0 / 2 | [15-spatial-orientation.md](15-spatial-orientation.md) |
| LEN — Length | Membandingkan dan mengukur panjang dengan acuan dan satuan yang konsisten. | 6 / 2 / 1 / 3 | [16-length.md](16-length.md) |
| ARE — Area | Membandingkan bidang, menutup tanpa celah, dan menghubungkan satuan dengan baris/kolom. | 5 / 1 / 0 / 2 | [17-area.md](17-area.md) |
| VOL — Volume | Membandingkan kapasitas dan mengisi ruang dengan satuan yang dapat dipindah dan dihitung. | 3 / 2 / 1 / 2 | [18-volume.md](18-volume.md) |
| ANG — Angle and Turn | Menghubungkan putaran dan belokan dengan sudut yang tetap meskipun panjang sisi berubah. | 3 / 2 / 0 / 1 | [19-angle-turn.md](19-angle-turn.md) |
| DAT — Classification and Data Analysis | Membentuk kategori, mengubah aturan, merekam kasus, dan memakai data untuk keputusan. | 6 / 2 / 1 / 2 | [20-classification-data.md](20-classification-data.md) |

## Keterlacakan

PDF dirujuk melalui URL resmi; repo tidak memuat salinan PDF atau reproduksi lengkap nama/deskripsi/tabel usia level. ID CNT-01 dan sejenisnya milik Numera, bukan ID resmi LT. Locator menyebut halaman dan urutan level pada halaman (mulai dari 1). Nomor tetap dipertahankan saat memperluas konten; perubahan sumber/edisi memerlukan review, bukan penomoran ulang diam-diam. Tujuan ditulis sebagai requirement kegiatan, bukan pernyataan anak telah mampu. Rujukan NRICH menghubungkan prinsip masalah/observasi, tidak memaksakan padanan satu level-satu PDF.

Dokumen terkait: [tujuan](../docs/goals.md), [pedagogi](../docs/pedagogy.md), [kurikulum](../docs/curriculum.md), [sumber LT](../references/learning-trajectories.md), [sumber NRICH](../references/nrich-primary.md), dan [handoff](../docs/handoff.md).
