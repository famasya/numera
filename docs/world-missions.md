# Misi tiga wilayah tambahan

Canonical: 12 misi per wilayah, total 48 bersama Taman Angka. Implementasi original berdasarkan prinsip sumber primer; pemetaan dan batas ada dalam [referensi NRICH](../references/nrich-primary.md).

## Hutan Pola

| ID stabil | Misi | Konsep |
| --- | --- | --- |
| forest-copy | Jalan jamur | Menyalin pola AB |
| forest-next | Lanjutkan jalan | Melanjutkan unit berulang |
| forest-gap | Jamur yang hilang | Melengkapi pola di tengah |
| forest-size | Daun kecil dan besar | Pola menurut ukuran |
| forest-transfer | Daun dan lentera | Pola pada jenis benda |
| forest-pairs | Dua jamur berdampingan | Unit AB atau ABB sesuai kesiapan |
| forest-double | Jejak jamur kembar | Unit AB atau AAB sesuai kesiapan |
| forest-three | Tiga warna hutan | Unit AB atau ABC sesuai kesiapan |
| forest-repair | Rapikan jalan jamur | Menguji aturan pola |
| forest-colors | Keranjang warna | Klasifikasi menurut warna |
| forest-types | Keranjang hutan | Mengganti aturan klasifikasi |
| forest-create | Lentera hutan | Membuat dan mempertahankan aturan |

## Pulau Bentuk

| ID stabil | Misi | Konsep |
| --- | --- | --- |
| shape-shadows | Bentuk dan bayangan | Mengenali bentuk dasar |
| shape-sizes | Bentuk kecil dan besar | Membandingkan ukuran |
| shape-turned | Bentuk yang berputar | Ketetapan bentuk saat diputar |
| shape-house | Rumah Lumi | Komposisi bentuk menjadi gambar |
| shape-boat | Perahu bentuk | Komposisi dan orientasi |
| shape-rocket | Roket bengkel | Komposisi beberapa bagian |
| shape-turn | Penunjuk arah | Rotasi seperempat putaran |
| shape-sails | Putar layar | Orientasi bentuk |
| shape-mirror | Cermin bengkel | Simetri melalui pantulan |
| shape-window | Jendela kembar | Simetri dengan beberapa bagian |
| shape-floor | Lantai bengkel | Menutup bidang tanpa celah |
| shape-bridge | Jembatan bengkel | Komposisi spasial dengan banyak solusi |

## Menara Misteri

| ID stabil | Misi | Konsep |
| --- | --- | --- |
| tower-path | Jalan menuju pintu | Merencanakan jalur |
| tower-detour | Jalan memutar | Mengubah strategi |
| tower-key | Kunci pintu | Dua tujuan berurutan |
| tower-even | Rak bintang | Kesetaraan melalui benda |
| tower-weights | Bintang berbobot | Komposisi kuantitas |
| tower-lights | Bekal cahaya | Memilih bagian untuk jumlah tertentu |
| tower-before | Antrean bentuk | Relasi urutan dengan banyak solusi |
| tower-between | Tempat di tengah | Menggabungkan dua hubungan |
| tower-chain | Urutan lentera | Penalaran berantai |
| tower-grid | Jendela menara | Dua batasan bersamaan |
| tower-grid-three | Jendela cahaya | Eksplorasi sistematis sesuai kesiapan |
| tower-beacon | Nyalakan menara | Menggabungkan perencanaan dan urutan tujuan |

## Progres dan bantuan

Setiap wilayah bisa dijelajahi dari misi pertamanya. Misi berikutnya terbuka setelah penyelesaian sebelumnya dalam wilayah yang sama. Story completion tidak berarti mastery. AB tersedia sebelum unit tiga benda; grid 2×2 tersedia sebelum 3×3. Dua misi berbeda yang selesai tanpa bantuan dalam wilayah adalah ambang konservatif rekayasa; kecepatan tidak dipakai. Variasi sesi disimpan agar refresh tidak mengganti tantangan.

Tiap masalah memiliki validator dan solver deterministik untuk membuktikan keterpecahan. Susunan tetap bisa diperbaiki; tidak ada timer, skor, hukuman, atau jawaban angka wajib. Jalur, balok, unit buatan, komposisi bintang, dan sebagian urutan menerima beberapa solusi.
