# Tujuan Numera

## Tujuan utama

**Numera: A Little World of Big Discoveries.** Anak menjelajahi dunia, membantu makhluk ramah, dan memulihkan lingkungan melalui pemikiran matematika. Ini proyek pribadi untuk satu anak TK A; bukan platform EdTech komersial.

Pengalaman harus terasa seperti permainan yang ingin dijelajahi. Anak dapat menemukan tempat baru, memindahkan benda, mencoba beberapa strategi, melihat akibat tindakannya, dan mencoba lagi tanpa takut salah.

## Platform canonical

Tablet adalah perangkat utama. Desktop tetap dapat digunakan. Mobile tidak didukung: viewport di bawah 768 CSS pixel menampilkan pesan “Perangkat ini belum didukung.” dan menyembunyikan permainan. Batas lebar adalah keputusan produk, bukan deteksi model perangkat. Jangan membuat atau memprioritaskan preview ponsel. Pertahankan target sentuh besar dan optimalkan komposisi tablet. Hindari scroll vertikal halaman hanya saat aktivitas/misi; home dan peta boleh menggunakan halaman panjang yang digulir. Peta juga boleh dipan dan catatan orang tua boleh menggulir.

## Tujuan belajar

Bangun intuisi bilangan, korespondensi satu-satu, kardinalitas, hubungan bagian–keseluruhan, pola, klasifikasi, penalaran spasial, dan pemecahan masalah. Fondasi ini dapat mendukung penalaran lanjut pada masa depan. Jangan mempercepat materi kelas atau memulai latihan olimpiade formal untuk anak ini.

Gunakan guided play dengan tujuan jelas, lintasan belajar sesuai bukti pemahaman, benda konkret digital dan representasi visual yang dapat dikunjungi ulang. Nilai pemahaman dari variasi interaksi selama beberapa sesi. Jangan menyebut satu jawaban benar sebagai mastery. Rujukan dan batas interpretasi ada dalam [pedagogy.md](pedagogy.md).

## State dan navigasi canonical

Halaman mengikuti URL: `/` adalah peta; `/<regionId>/<missionId>` adalah misi; `orangtua=true` membuka panel orang tua pada halaman yang sama. `?wilayah=<regionId>` membuka modal pemilihan 12 misi wilayah tersebut. Misi pertama setiap wilayah terbuka; kelanjutannya berurutan dalam wilayah, tanpa prasyarat menyelesaikan wilayah lain. Peta memakai satu cluster per wilayah; bukan dua belas node taman. Refresh harus melanjutkan misi dan susunan benda yang sedang dikerjakan. Snapshot sesi lokal menyimpan variasi, bantuan, percobaan dan status selesai. Membuka ulang misi selesai melalui peta berarti replay baru; reset juga eksplisit.

## Siklus permainan

Jelajahi peta → pilih lokasi → temukan masalah → manipulasi benda → terima respons → lingkungan berubah → lanjutkan perjalanan. Tidak wajib membaca, mendengar, memakai keyboard, atau menyelesaikan tutorial panjang.

## Dunia

| Wilayah        | Fokus                                           | Status awal             |
| -------------- | ----------------------------------------------- | ----------------------- |
| Taman Angka    | Bilangan, kuantitas, komposisi, aritmetika awal | Dua belas misi tersedia |
| Hutan Pola     | Pola, klasifikasi, aturan                       | Dua belas misi tersedia |
| Pulau Bentuk   | Bentuk, rotasi, komposisi spasial, simetri      | Dua belas misi tersedia |
| Menara Misteri | Logika, eksplorasi sistematis, masalah nonrutin | Dua belas misi tersedia |

Pulau utama harus terlihat sebagai ilustrasi utuh: pantai organik, laut turquoise, vegetasi, sungai/jembatan, landmark besar, jalur bertitik dan node interaktif. Jangan menyalin landmark atau memakai gambar Shutterstock ber-watermark dari brief.

## Target yang disetujui

Brief awal meminta vertical slice tiga misi. Setelah dimainkan, pengguna merasa jumlahnya terlalu sedikit dan meminta **9–12 misi**. Instruksi terbaru pada 10 Oktober 2026 melengkapi **empat wilayah, masing-masing 12 misi**. Daftar tambahan ada dalam [world-missions.md](world-missions.md). Daftar dan tujuan tiap misi ada dalam [mission-plan.md](mission-plan.md). Mekanik boleh digunakan ulang, tetapi masalah dan alasan tindakannya harus berbeda; pergantian warna saja bukan misi baru.

Sebelum menyebut perluasan selesai, pastikan:

- Seluruh 48 misi bisa dimainkan, dilanjutkan, dan diulang melalui peta.
- Item misi dalam modal menunjukkan selesai, saat ini, atau belum terbuka sesuai progres yang benar. Peta hanya memiliki satu titik untuk wilayah taman.
- Variasi solusi diakui; bantuan tidak menghukum dan tidak menghapus pekerjaan benar.
- Pemulihan taman terlihat bertahap, bukan hanya banner akhir.
- Simpanan tiga misi lama tetap terbaca. Reload tidak menghapus halaman aktif atau susunan pekerjaan. Replay/reset eksplisit memulai sesi baru tanpa menghapus penyelesaian.
- Bahasa Indonesia menggunakan prinsip ASD-STE100 yang diadaptasi; teks dan benda besar, kontras kuat, semua gaya UI memakai token.
- Parent Mode menampilkan konsep, dukungan yang digunakan, solusi berbeda, dan saran kegiatan nyata.
- Tes matematika/progres, typecheck, build, alur Chrome, serta layout tablet berhasil. Pengujian anak dan perangkat fisik dicatat terpisah.

## Di luar lingkup sekarang

Akun, cloud, ranking, timer, sertifikasi mastery, backend, runtime LLM, data anak, dan monetisasi. Offline penuh dan audio rekaman manusia belum tersedia. Tidak ada klaim kepatuhan formal ASD-STE100 untuk bahasa Indonesia.
