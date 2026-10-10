# Organisasi peta dan delivery

Status: proposal organisasi requirements, 10 Oktober 2026. Pengguna menyetujui pemetaan lengkap LT + NRICH usia 3–7. Nama peta, jumlah wilayah/misi baru, dan jadwal implementasi belum ditetapkan. Empat wilayah/48 misi yang ada tetap target implementasi saat ini.

## Goal organisasi

Anak melihat dunia yang mudah dijelajahi; orang tua dan pembuat konten dapat menelusuri seluruh goal. Peta mengelompokkan petualangan yang masuk akal, sementara registry kurikulum tetap utuh di belakang layar. Trajectory dapat membentang banyak peta; variasi satu goal tidak harus tinggal di satu wilayah.

| ID | Requirement | Acceptance |
| --- | --- | --- |
| MAP-01 | Peta memiliki ID stabil, cerita, wilayah, dan manifest misi. Hubungan goal-misi terpisah dari posisi landmark. | Memindahkan misi ke paket cerita baru tidak mengganti ID atau menghapus completion lama; URL lama tetap mengarah ke misi yang sama. |
| MAP-02 | Peta pertama tetap empat cluster, tiap wilayah membuka modal 12 misi. Peta tambahan memakai cluster per wilayah dan modal misi, dengan jumlah sesuai kebutuhan. | Tidak menambahkan 223 titik LT pada satu pulau; kontrol tetap besar, pan/zoom tersedia. |
| MAP-03 | Pintu masuk tersedia per bidang; kesiapan lanjut berdasarkan konsep relevan. | Anak dapat bermain bentuk meski belum selesai counting; tidak ada pagar umur atau keharusan menamatkan semua pulau. |
| MAP-04 | Setiap paket misi mempunyai goal utama, pengalaman baru, variasi, dan kegiatan gabungan PS. | Manifest bisa ditelusuri ke PRD/goal; reskin tidak dihitung kebutuhan baru; satu puzzle gabungan tidak menjadi bukti semua goal sekaligus. |
| MAP-05 | State peta aktif dan wilayah terbuka disimpan dalam URL; sesi tetap berdasarkan ID misi stabil. | Sebelum coding, tentukan ekstensi route/query dan tes deep link peta lama/baru, refresh, Back, parent query, replay, dan migrasi. Jangan mengganti route canonical tanpa desain kompatibilitas. |
| MAP-06 | Parent Mode peta menyediakan ringkasan kegiatan/goal dan saran nyata; anak tidak melihat daftar level atau umur. | Panel misi tetap hanya guide aktif; ringkasan menampilkan status konten dan pengamatan secara terpisah. |

## Paket pengalaman yang diusulkan

| Paket | Tujuan | Section yang disentuh | Hasil yang harus tersedia |
| --- | --- | --- | --- |
| Penguatan pulau sekarang | Tutup celah fondasi dari 48 misi, pertahankan replay/progres. | CNT/SUB/CMP/COM/PAT/S2D/C2D/VIS/DAT + PS | Produksi dari surplus; transfer pola nyata; variasi bentuk; flip geometri; reklasifikasi koleksi yang sama. |
| Hubungan dan perubahan | Gabung/ambil, kelompok adil, bagian sama besar, hubungan ruang/peta. | ADD/MUL/FRC/ORI/PAT + PS | Beberapa jenis unknown; perubahan penerima; acuan keseluruhan; peta-ke-dunia. |
| Membangun dan mengukur | Konstruksi, bidang, panjang, ruang/kapasitas. | S3D/C3D/DIS/LEN/ARE/VOL/ANG + PS | Model ruang deterministik; satuan yang dapat diulang; occlusion yang dapat diperiksa. |
| Strategi dan representasi | Perluas strategi dari bukti relevan, tanpa mengejar angka besar semata. | Level utama lanjut CNT/CMP/ADD/COM/MUL/PAT/VIS/ORI/DAT | Bundel terbuka; relasi kuantitas; data untuk keputusan; representasi optional. |
| Ekstensi batas | Level sumber yang beririsan dengan usia 7–8 atau 6–8. | 16 goal berlabel batas | Brief per-goal dan evaluasi kesiapan sebelum dijadwalkan; tidak wajib untuk cakupan utama. |

Paket bukan peta yang sudah disetujui dan tidak mempunyai kuota misi. Jumlah misi ditentukan setelah activity brief F-04/F-09: satu goal dapat memerlukan banyak konteks; satu misi dapat mendukung beberapa goal. Jangan menjadikan 133 goal utama sebagai janji 133 misi atau menyebut 48 misi sudah cukup.

## Urutan delivery dan exit criteria

1. **Registry dan audit:** seluruh 223 level terdaftar, scope jelas, seluruh 48 ID misi terpetakan; PRD saat ini memenuhi tahap dokumentasi ini. Coverage masih audit kode, bukan uji belajar.
2. **Brief kegiatan dan evidence:** tetapkan model goal/variant serta migrasi; lengkapi kontrak brief untuk paket penguatan. Belum diimplementasikan.
3. **Penguatan gameplay:** implementasikan celah konkret, jalankan logic/typecheck/build/Chrome dan pengamatan tablet/anak sesuai ketersediaan. Catat batas bukti.
4. **Paket pengalaman baru:** kembangkan kebutuhan yang belum punya mekanik; tentukan peta/route setelah activity briefs cukup, pertahankan kompatibilitas.
5. **Cakupan utama lengkap:** setiap dari 133 goal utama punya kegiatan dan variasi yang benar-benar mendukung tujuan, Parent Mode, acceptance khusus, serta status uji yang jujur. Ini target roadmap; tidak berarti setiap anak harus mencapai semua goal.
6. **Ekstensi batas:** 16 goal batas dipilih satu per satu setelah evaluasi. 31 level sumber usia 8 tidak dijadwalkan; 43 fondasi digunakan sebagai dukungan, bukan produk untuk bayi.

## Definition of done per paket

Manifest goal → activity → misi → variasi dapat ditelusuri; soal punya solusi; alternatif sah diterima; Parent Mode dan source provenance lengkap; URL/persistence/migrasi teruji; layout tablet dan Chrome teruji; batas fisik/anak tercatat; handoff diperbarui. Completion cerita dan validasi teknis tidak menjadi klaim penguasaan anak.

## Desain peta kedua tersedia

Pengguna meminta desain peta kedua pada 10 Oktober 2026. [Desain visual](../docs/map-2-design.md) menyediakan Lembah Ukuran, Desa Data, Bengkel Bangun Ruang, dan Pelabuhan Petualangan sebagai empat landmark. Artwork sudah dibuat; nama/ID/posisi merupakan usulan. Paket misi, routing dua peta, dan progres belum diimplementasikan. Activity briefs serta MAP-01–MAP-06 tetap menjadi prasyarat implementasi.
