# Rencana 12 misi Taman Angka

Status: perluasan 9–12 misi disetujui pengguna pada 9 Oktober 2026. Dua belas misi adalah pilihan implementasi. Status terbaru: seluruh dua belas misi sudah diimplementasikan. Bukti pengujian dan batas tersedia dalam validation.md. Gunakan angka 1–5; tingkatkan kedalaman dan variasi sebelum rentang bilangan.

| Urutan | ID stabil    | Masalah dalam cerita                    | Tujuan                              | Interaksi dan solusi                                                                     |
| ------ | ------------ | --------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 1      | counting     | Lubang tanam kosong                     | Korespondensi, kardinalitas         | Tanam lima bunga; semua identitas tepat satu kali                                        |
| 2      | composition  | Dua petak kebun                         | Bagian dan keseluruhan              | Pindahkan lima bunga; keenam partisi valid, boleh simpan beberapa                        |
| 3      | patterns     | Jalan bunga putus                       | Unit berulang                       | Isi pola AB/BA; AAB hanya setelah bukti kesiapan                                         |
| 4      | matching     | Bekal untuk teman taman                 | Korespondensi dalam konteks berbeda | Berikan satu buah kepada setiap teman; empat buah, empat teman                           |
| 5      | compare      | Dua kolam perlu seimbang                | Membandingkan dan menyamakan        | Pindahkan enam batu dari kelompok 4/2 menjadi 3/3; tanpa persamaan wajib                 |
| 6      | orders       | Permintaan bunga bergambar              | Kuantitas sesuai representasi titik | Isi dua petak sesuai tiga dan dua titik; pindahkan/correct benda                         |
| 7      | sorting      | Keranjang panen tercampur               | Klasifikasi menurut atribut         | Pindahkan daun/bunga ke keranjang bergambar; identitas dan jumlah tetap                  |
| 8      | missing      | Sebagian bunga masih di keranjang       | Hubungan bagian–keseluruhan         | Lengkapi lima bunga dari dua yang sudah ditanam; benda konkret selalu terlihat           |
| 9      | growing      | Jalan batu dari sedikit ke banyak       | Urutan kuantitas                    | Susun kelompok 1–4 pada jalan; gunakan titik/benda, bukan pilihan angka                  |
| 10     | repair       | Jalan bunga salah susun                 | Menguji aturan pola                 | Ganti elemen yang mengganggu pola AB; bagian benar tetap utuh                            |
| 11     | sharing      | Bekal dua teman                         | Pembagian adil                      | Bagikan empat buah sama banyak, satu per satu atau dua sekaligus                         |
| 12     | free-pattern | Gerbang kebun menunggu pola buatan anak | Membuat aturan, banyak solusi       | Pilih unit dua bunga lalu ulangi dua kali; AA, AB, BA, BB valid. Rayakan pemulihan akhir |

## Prinsip implementasi

- Pertahankan tiga ID lama dalam migrasi. Jangan memaksa pengguna mengulang untuk mempertahankan progres yang sudah dicapai.
- Kelompok enam pada misi 5 adalah pengecualian terbatas untuk pembagian 3/3; jangan menaikkan rentang bilangan secara umum.
- Setiap misi membutuhkan tujuan visual, gerakan tap/drag, bantuan parsial, kondisi selesai deterministik, dan perubahan lingkungan.
- Untuk pola buatan, AA/BB tetap sah sebagai unit yang diulang. Jangan membatasi anak pada contoh AB.
- Distribusi 0/5 pada misi komposisi valid; pada pembagian adil kondisi sama banyak wajib. Jangan memakai validator yang menyamakan dua tujuan tersebut.
- Skema evidence menyimpan ID, variasi, percobaan, bantuan, dan solusi. Catatan bukan diagnosis. Adaptasi tidak berdasarkan waktu.
- Desain akhir dapat diperbaiki berdasarkan uji permainan anak; catat perubahan tujuan/ID dan dampak migrasinya.
