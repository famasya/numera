# Cakupan kurikulum Numera

Keputusan pengguna, 10 Oktober 2026: gunakan **gabungan LT dan NRICH**, dengan batas cakupan usia **3–7 tahun**. LT mengorganisasi goal/perkembangan; NRICH mendukung kegiatan berbasis masalah, beberapa solusi, strategi, dan observasi. [PRD lengkap](../prds/README.md) menjadi acuan requirements perluasan.

## Struktur dan cakupan

Trajectory → level/goal → kegiatan dan variasi. Peta/wilayah menampung kegiatan dari beberapa trajectory. Satu level dapat membutuhkan beberapa misi; satu misi dapat mendukung beberapa level. Jumlah peta/misi baru belum ditetapkan.

Seluruh 20 trajectory dan 223 level dalam [LT.pdf](https://www.learningtrajectories.org/documents/1691785025839.pdf) sudah diinventaris: 133 goal utama, 43 fondasi pendukung, 16 ekstensi batas, 31 level lanjut di luar usia sekarang. Aturan scope dan goal per level ada dalam [index PRD](../prds/README.md); [registry JSON](../prds/lt-levels.json) mencatat URL/lokasi sumber, tujuan original, scope, dan dukungan misi.

Rentang usia adalah konteks perencanaan, bukan diagnosis, tenggat kemampuan, atau syarat unlock. Usia 8 dicatat untuk kelengkapan sumber tetapi tidak dijadwalkan. Level sebelum 3 menjadi fondasi pendukung, tanpa memperluas produk ke bayi.

## Audit implementasi

[48 misi](../prds/22-existing-missions.md) terpetakan seluruhnya. Ada 34 level dengan dukungan parsial/konteks; tidak ada klaim coverage penuh atau pencapaian anak. Target kode saat ini tetap empat wilayah × 12 misi. Readiness dan evidence belum diubah untuk registry goal baru.

Problem solving tetap menjadi tujuan lintas section dan Menara Misteri. [PS-01–PS-06](../prds/21-problem-solving.md) mempertahankan peran sebelas sumber NRICH, tanpa mengarang padanan LT untuk maze atau Latin grid.

## Langkah berikutnya

1. Lengkapi activity briefs untuk penguatan misi yang ada sesuai F-04/F-09.
2. Implementasikan registry goal/evidence dengan migrasi yang mempertahankan progres lama.
3. Tutup celah produksi jumlah, transfer pola, variasi bentuk, flip geometri, dan reklasifikasi.
4. Tambahkan pengalaman baru untuk pecahan, bangun ruang, pengukuran, kapasitas, dan data.
5. Tetapkan peta dari paket pengalaman yang siap; uji gameplay dan catat batas pengamatan.

[Requirements peta dan delivery](../prds/23-maps-and-delivery.md) memisahkan roadmap ambisius dari status playable. Penyelesaian cerita tidak menjadi mastery.
