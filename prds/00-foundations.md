# Requirements bersama: LT + NRICH, usia 3–7

Status: keputusan cakupan pengguna dan rancangan requirements, 10 Oktober 2026. Dokumen ini tidak menyatakan perluasan sudah playable. [Index](README.md) memisahkan cakupan sumber, kebutuhan, dan audit kode.

## Goal produk

Numera memberi pengalaman matematika melalui petualangan, manipulasi benda, eksplorasi strategi, dan perubahan lingkungan. Cakupan utama usia 3–7. LT mengorganisasi tujuan dan perkembangan; NRICH mendukung problem solving, beberapa solusi, pembicaraan alasan, dan kegiatan nyata. Banyaknya misi mengikuti kebutuhan pengalaman setiap goal, bukan kuota 48 atau satu misi per level.

## Requirements wajib

| ID | Requirement | Acceptance |
| --- | --- | --- |
| F-01 | Satu registry memisahkan trajectory, level/goal, activity, mission, variant, region, map. ID stabil dan banyak-ke-banyak. | Satu misi dapat menunjuk dua goal; satu goal dapat menunjuk beberapa misi di peta berbeda tanpa menggandakan progres cerita. |
| F-02 | URL resmi dan locator halaman/urutan level terpisah dari requirements original, keputusan scope, dan status implementasi. Jangan menerbitkan salinan PDF atau tabel lengkap sumber. | Parent Mode tidak mengubah usia sumber menjadi label kemampuan anak. Registry menyimpan provenance PDF dan rujukan NRICH spesifik. |
| F-03 | Utamakan game visual tanpa kewajiban membaca, mendengar, keyboard, atau persamaan. Gunakan bahasa Indonesia singkat, tujuan visual, dan respons lingkungan. | Tujuan awal dapat dijalankan dengan tap/drag; muted audio tetap playable; simbol lanjut opsional dalam jalur yang membutuhkan representasi itu. |
| F-04 | Setiap goal utama memiliki set pengalaman: pengenalan konkret, tindakan mandiri, variasi konteks/representasi, dan pemeriksaan/transfer. Minimum dua variasi matematis untuk QA. | Activity brief mengidentifikasi semua bagian; pergantian warna saja tidak dihitung variasi. Paket boleh membentang beberapa misi/replay, tidak wajib empat layar. |
| F-05 | Pisahkan story completion, bukti kegiatan digital, pengamatan orang tua, dan saran kesiapan. | Melengkapi lima lubang tidak mengisi status kardinalitas/subitizing sebagai tercapai. Pengamatan yang belum ada ditampilkan belum diamati. Tidak ada skor mastery. |
| F-06 | Kesiapan dihitung per konsep/goal dan variasi relevan; helper deterministik dan transparan. Bantuan tidak menghukum dan umur tidak dipakai untuk unlock. | Sort tanpa hint tidak membuka ABC atau grid 3×3 sebagai bukti konsep lain. Rich variant tersedia berdasar evidence yang relevan atau pilihan pendamping; ambang adalah heuristik produk dan dapat ditinjau. |
| F-07 | Pertahankan completion lama, catatan, dan sesi aktif melalui migrasi versi. Evidence lama menjadi bukti misi saja. | Fixture simpanan tiga misi lama dan 48 misi mempertahankan unlock/catatan; 250 replay tidak menghapus completion. Tidak menghapus local storage pengguna untuk QA. |
| F-08 | Konten, generator, validator, solver, bantuan, evidence, dan renderer dipisahkan. Generator menjamin masalah punya solusi. | Fixture valid/tidak valid mencakup alternatif solusi, identitas unik, batas jumlah/geometri, dan state parsial. Animasi tidak menentukan jawaban. |
| F-09 | Setiap goal yang diimplementasikan mempunyai acceptance khusus, termasuk fixture, expected state, variasi, bantuan, dan batas observasi. | Minimal dua keadaan sah bila tujuan terbuka, satu keadaan belum memenuhi tujuan, dua variasi relevan, dan recovery setelah tindakan tidak sesuai. Tujuan dengan satu hasil sah diuji dengan dua strategi/susunan sah. Ini QA produk, bukan ambang belajar. |
| F-10 | Parent Mode tiap misi hanya menampilkan goal aktif, practical prompt, what to observe, referensi primer, bantuan, solusi, dan catatan lokal. | Ringkasan lintas goal/misi hanya dari peta; panel panjang punya scroll internal; catatan ucapan tidak diwajibkan untuk lanjut cerita. |
| F-11 | Tanpa backend, akun, data pribadi, analytics eksternal, runtime LLM, iklan, timer, ranking, atau hukuman. | Tidak meminta nama/tanggal lahir; tidak merekam audio/video anak. Bukti berupa kejadian deterministik dan checklist pengamatan nonidentifying yang opsional, semuanya lokal. |
| F-12 | Tablet canonical, desktop didukung, viewport di bawah 768 CSS pixel menampilkan unsupported dan menyembunyikan game. Semua kontrol ≥48 CSS pixel. | Alur kegiatan tanpa scroll halaman pada viewport tablet; peta boleh pan/zoom/scroll; tidak mengecilkan seluruh board untuk fit. Token visual bersama dan kontras kuat. |
| F-13 | Pertahankan URL dan refresh state: map, region dialog, misi, parent query, susunan, hint, variant, completion. Multi-map memerlukan aturan URL tambahan sebelum implementasi. | URL lama `/`, `/<regionId>/<missionId>`, route taman lama, `wilayah`, `orangtua` tetap berfungsi. Deep link dan refresh melanjutkan sesi, replay/reset eksplisit memulai sesi baru. |
| F-14 | Peta memakai satu cluster per wilayah; artwork, path/node, hitbox HTML, dan UI terpisah. | Tidak menggambar ratusan level LT sebagai titik peta. Peta lama empat cluster dan modal 12 misi tetap berfungsi sampai rancangan peta baru diimplementasikan. |
| F-15 | Animasi Motion mengikuti state deterministik dan reduced motion; fisika hanya bila kegiatan membutuhkan tumbukan/tumpukan bebas. | Timbangan/geometri/volume benar pada animasi aktif maupun reduced motion; state target identik. Geometri artwork dibedakan dari data matematis. |
| F-16 | Validasi gameplay mencakup logika, pnpm typecheck/build, alur Chrome, persistence, replay, dan alternatif solusi. | Catat hasil aktual per misi/goal. Pengujian Chrome tidak menjadi klaim sentuh tablet fisik atau efektivitas bersama anak. |
| F-17 | Tiap perluasan menyediakan kegiatan nyata yang relevan dan kesempatan anak mencoba/menjelaskan. | Parent guide menyebut benda, prompt, observasi, rujukan dan batas. Jangan menyalin karakter, cerita buku, artwork, atau instruksi sumber. |

## Kontrak activity brief sebelum implementasi

Setiap activity mempunyai: ID dan versi; goal utama/pendukung; halaman LT dan sumber NRICH bila relevan; kebutuhan cerita; input awal dan persediaan; tindakan anak; representasi; batas jumlah/geometri; semua kondisi sah; perilaku saat belum sah; tingkat bantuan; parameter variasi; event digital yang dapat diketahui; observasi orang tua yang tidak dapat diinferensikan; state snapshot; acceptance khusus; batas pengujian. Kegiatan tanpa brief ini belum siap masuk implementasi.

Contoh brief CNT-08: teman meminta tiga bunga melalui tiga titik, keranjang berisi tujuh. Anak memilih bunga dan menaruhnya dalam petak tanpa tiga slot wajib. Sah bila tepat tiga identitas unik, empat tersisa; lebih/kurang tetap dapat diperbaiki. Replay meminta dua atau empat dengan susunan titik berbeda. Hint menampilkan pasangan sebagian tanpa mengisi seluruh petak. Game mencatat jumlah yang dibentuk; orang tua mengamati apakah anak menghitung dan memahami permintaan. Satu completion tidak menetapkan level tercapai.

## Kontrak evidence yang diusulkan

`goalIds`, `activityId`, `missionId`, `variantId`, `representation`, `supportUsed`, `solutionKey`, `completed` mencatat kejadian kegiatan. `parentObservation` opsional menyimpan pilihan strategi yang diamati tanpa teks pribadi atau rekaman. `evidenceSource` membedakan `digital` dan `parent`. Status pengamatan: belum diamati / dengan dukungan / teramati pada variasi tertentu; tidak ada diagnosis atau mastery otomatis.

Ini kebutuhan masa depan, bukan skema storage saat ini. Implementasi harus menentukan versi payload, migrasi, batas retensi, dan penyimpanan ringkasan per goal agar pemangkasan log 200 evidence tidak menghapus completion atau membuat klaim belajar yang keliru. Riwayat singkat boleh menghasilkan saran konservatif; kekurangan bukti tidak menghapus progres.

## Dependensi konsep

- Produksi jumlah memakai korespondensi; tidak wajib menamatkan seluruh Counting untuk masuk bentuk/pola.
- Komposisi dan gabung/ambil berbagi pengalaman bagian–keseluruhan; satu bentuk kegiatan tidak menggantikan semua jenis masalah.
- Kelompok sama mendukung perkalian/pembagian; bagian sama besar dan keseluruhan acuan mendukung pecahan.
- Pencocokan bentuk mendukung komposisi; transformasi dan dekomposisi membutuhkan kegiatan tersendiri.
- Panjang, luas, dan volume mempunyai satuan berbeda. Pengetahuan satu bidang tidak otomatis membuka klaim bidang lain.
- Klasifikasi mendukung frekuensi; recording kasus perlu sebelum grafik dianggap representasi data.

Hubungan ini adalah dependensi desain yang diusulkan, bukan rantai prasyarat universal dari sumber. Jangan menjadikannya pagar keras lintas seluruh trajectory.
