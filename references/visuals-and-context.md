# Visual, aset, dan konteks pengguna

## Referensi visual

Gambar pulau Shutterstock pada brief adalah referensi genre dan komposisi saja: pulau organik, laut turquoise, landmark, jalur bertitik, dan node progres. Gambar memiliki watermark; jangan simpan sebagai aset game, trace, atau salin landmark khasnya. Gambar asli brief tidak diarsipkan dalam repository.

Latar game adalah ilustrasi original public/art/numera-island.webp. Prompt dan keputusan memperbesar landmark ada dalam [art-prompt.md](../docs/art-prompt.md). Lapisan interaksi berada di kode, bukan baked-in dalam gambar.

## Karakter

Pengguna memilih [Rabbits, FreeSVG](https://freesvg.org/rabbits), lalu memberikan file lokal `/Users/famasya/Downloads/rabbits.svg`. Original ada di public/art/rabbits.svg; derivative kelinci biru ada di public/art/lumi-rabbit.svg. Gunakan karakter ini; jangan mengganti diam-diam. Provenance dan lisensi yang dicatat saat akses awal ada dalam [asset-credits.md](../docs/asset-credits.md).

## Percakapan yang belum dibaca

Pengguna memberikan [percakapan ChatGPT](https://chatgpt.com/c/6ac8f5d5-9fc8-83ec-9f42-5098bc7b9da9) untuk menilai jumlah misi. Chrome menolak akses karena kebijakan domain pada 9 Oktober 2026. Isinya **belum dibaca** dan tidak digunakan sebagai dasar rancangan. Jangan mencoba jalur lain untuk melewati blokir. Bila diperlukan, minta pengguna menempel bagian relevan atau menyediakan ekspor yang dapat dibaca.

## Keputusan pengguna yang sudah diketahui

TanStack Start; pnpm; Chrome bukan BrowserOS; objek dan tulisan lebih besar; kontras lebih kuat; design token dan aturan AGENTS.md; kelinci dari file pengguna; bahasa Indonesia jelas dengan prinsip ASD-STE100; perluas dari tiga menjadi 9–12 misi setelah dokumentasi/handoff dilengkapi.

## Keputusan platform canonical terbaru

Pengguna menetapkan tablet sebagai target utama dan meminta mobile menampilkan tidak didukung. Implementasi memakai viewport minimum 768 CSS pixel; desktop tetap didukung. Preview ponsel tidak perlu dilakukan. Keputusan ini menggantikan bagian mobile-friendly pada brief awal.

Aturan scroll canonical: aktivitas/misi harus muat dalam viewport tablet sejauh mungkin. Home/peta boleh menggulir. Parent Mode boleh menggulir catatan panjang.

Navigasi canonical terbaru: URL menentukan halaman/misi dan panel orang tua. Refresh melanjutkan pekerjaan, bukan kembali ke peta atau mengosongkan benda. Snapshot lokal melengkapi URL; tidak ada backend atau akun.

Peta canonical terbaru: satu cluster per wilayah. Taman Angka membuka modal berisi dua belas item misi; bukan jejak dua belas node di ilustrasi pulau.
