# Penguatan peta 1

**Peta 1:** Taman Angka, Hutan Pola, Pulau Bentuk, Menara Misteri. Implementasi dan validasi 10–11 Oktober 2026. Empat cluster dan 48 ID misi tetap dipakai. Ini menutup lima celah mekanik dalam paket penguatan, bukan seluruh roadmap LT usia 3–7.

## Kontrak kegiatan dan acceptance

| Misi / goal | Masalah, tindakan, variasi | Keadaan sah / tidak sah | Bantuan dan pengamatan |
| --- | --- | --- | --- |
| `orders` — CNT-08; konteks CNT-06/SUB-03/SUB-04 | Tujuh bunga tersedia. Buat pesanan 3/2; replay berganti dengan 2/1. Bunga surplus tetap di keranjang. Pilih/drop bunga, kembalikan jika berlebih, lalu periksa pesanan. | 3/2 dengan dua bunga tersisa atau 2/1 dengan empat tersisa sah. Kurang, berlebih, atau kategori di luar kedua petak tidak sah. Identitas bunga yang dipilih bebas. | Gambar titik tetap tersedia; bantuan mengarahkan perhatian ke jumlah. Orang tua menanyakan jumlah total dan mengamati kapan anak berhenti. Validasi jumlah bukan bukti ucapan kardinalitas/subitizing. |
| `forest-transfer` — PAT-03/PAT-05 | Model lingkaran/persegi ungu ditransfer menjadi daun/lentera dengan warna berbeda. Dua korespondensi sah: daun–lentera atau lentera–daun, masing-masing diulang tiga kali. | ABABAB dan BABABA sah; AAAAAA dan pengulangan yang berubah tidak sah. | Contoh memakai bahan sumber, bantuan penuh memberi contoh bahan tujuan. Amati hubungan bergantian pada dua bahan. Unit minimal belum diminta sebagai tindakan tersendiri. |
| `forest-types` — DAT-03/DAT-04/DAT-05 | Empat benda yang sama dipilah menurut warna, lalu menurut jenis. Tombol Ganti aturan memeriksa tahap warna. Identitas dan posisi benda tetap ada ketika aturan berubah; anak memindahkan dua benda yang perlu berpindah. | Warna `[1,0,0,1]`, kemudian jenis `[0,1,0,1]`. Tahap pertama tidak menyelesaikan misi. Susunan warna tidak sah sebagai jawaban tahap jenis. | Gambar keranjang dan teks aturan aktif berubah. Amati benda yang berpindah serta total empat yang tetap. Belum pencatatan kasus atau analisis data. |
| `shape-turned` — S2D-04/S2D-05 | Segitiga tidak simetris dan lebar, dengan orientasi/warna berbeda, dipilah bersama persegi. | Jenis, bukan warna/orientasi/prototipe tunggal, menentukan kategori. Kedua segitiga tetap masuk kategori segitiga. | Arahkan perhatian ke sisi; orang tua memeriksa penjelasan tiga sisi. Variasi persegi panjang, substitusi dan sifat sudut lanjut masih roadmap. |
| `shape-mirror`, `shape-window` — VIS-04/VIS-05 | Susun pantulan daun dan segitiga asimetris di sisi kanan garis vertikal. Dua susunan berbeda memuat token yang sudah diputar. | Urutan terbalik **dan** geometri terpantul harus cocok. Urutan terbalik dari token asli ditolak. Warna/ukuran tetap, arah putaran dibalik oleh refleksi. | Bantuan menonjolkan tempat dan contoh pantulan. Amati arah ujung, sisi, dan jarak dari garis cermin. Belum sumbu miring atau bukti prediksi mental. |

Semua kegiatan mempunyai Parent Mode aktif, prompt praktis, pengamatan dan sumber primer. NRICH tetap memberi konteks masalah; [LT daring](https://www.learningtrajectories.org/documents/1691785025839.pdf) memberi locator goal di PRD trajectory. Tidak mereproduksi tabel LT atau memasukkan PDF ke aplikasi.

## Geometri dan interaksi Pulau Bentuk

- Siluet rumah, perahu, dan roket memakai frame SVG rapat serta rasio canvas tetap. Persegi dan lingkaran mempertahankan proporsi. Pada layar pendek, potongan berada di samping gambar untuk menjaga ukuran dan rasio.
- Rumah memiliki atap, badan persegi, dan pintu; perahu memiliki badan trapesium dan dua layar segitiga siku-siku; roket memiliki badan tegak, ujung, jendela lingkaran dan dua sirip.
- Tiang dan air perahu hanya dekorasi; validator memeriksa potongan deterministik. Preview domino/balok siku memakai frame sesuai batas balok, dengan orientasi Motion yang tersimpan.
- Dekorasi bengkel dipertahankan sesuai klarifikasi pengguna. Bendera mengikuti posisi dan kemiringan tali lengkung, dengan tepi kain melengkung dan lipatan. Tidak menggunakan bendera sebagai target matematika.
- `growing` dapat menukar dua kelompok yang sudah ditempatkan lewat tap, selain drag. `orders` memiliki tombol pengembalian bunga ke keranjang.

## Persistence dan kompatibilitas

- Route dan kunci progres/sesi tetap. Penyelesaian lama tidak dibatalkan dan tidak dianggap mastery.
- Snapshot `orders` lama berisi lima bunga diperluas menjadi tujuh tanpa memindahkan bunga lama; target lama tetap 3/2. Target replay disimpan terpisah agar refresh tidak menggantinya.
- Fase reklasifikasi disimpan sebagai `sort-phase`. Snapshot `forest-types` lama melanjutkan aturan jenis dengan susunannya; fase warna baru tersedia saat replay eksplisit.
- Indeks potongan perahu/roket dan panjang susunan tetap. Siluet serta bentuk visual diperbaiki tanpa menghapus penempatan atau completion lama. Pantulan mempertahankan indeks token asli; pilihan refleksi ditambahkan.
- Skema evidence/kesiapan lama belum diganti dengan goal registry. Dukungan terbaru tidak dikonversi otomatis menjadi penguasaan atau evidence historis baru.

## Bukti dan batas

- Tes deterministik memeriksa surplus, migrasi bunga, dua korespondensi transfer, kedua aturan koleksi yang sama, variasi segitiga, refleksi/putaran, proporsi siluet, serta alternatif sah/tidak sah. Logic, typecheck, dan build dicatat dalam [handoff](../docs/handoff.md).
- Chrome: 48 misi peta 1 dimainkan sampai selesai melalui kontrol UI pada origin pengujian terpisah. Penguatan diuji untuk jawaban berlebih/salah, koreksi, refresh, replay, dan Parent Mode aktif. Ini satu atau beberapa alur per misi, bukan seluruh kombinasi solusi.
- Tablet 1024×768; tambahan 800×600 untuk proporsi siluet/hitbox. Tidak ada scroll halaman pada aktivitas yang diukur; target roket tetap ≥48 CSS pixel. Uji sentuh fisik, anak, dan semua kombinasi viewport belum dilakukan.
- Readiness per goal, unit pola minimal, substitusi bentuk, data untuk keputusan, dan peta-ke-dunia masih kebutuhan terpisah. Peta 2 belum terintegrasi. [Audit](22-existing-missions.md) tetap menyebut dukungan parsial, bukan cakupan penuh semua level.
