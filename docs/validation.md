# Validasi — 9 Oktober 2026

## Logika dan build

- pnpm test: 15 tes lulus. Mencakup 120 urutan penanaman, 32 distribusi bunga/enam partisi, pola deterministik dan readiness, bantuan, progres berurutan, invalid save, snapshot sesi rusak, materi/referensi setiap misi, semua validator tambahan, migrasi v1 ke v2, dua belas completion dan 250 replay dengan history 200.
- pnpm typecheck: lulus setelah perluasan.
- pnpm build akhir setelah perluasan, URL state, snapshot dan polish berhasil untuk produksi TanStack Start + Nitro. Peringatan use client dependensi Router dan debugName bundler tidak menggagalkan build.
- Tautan dokumentasi lokal dan variabel CSS diperiksa: tidak ditemukan tautan hilang atau token tidak terdefinisi pada saat pemeriksaan.

## Chrome

- Tiga misi awal dimainkan pada sesi pertama, termasuk tap/drag mouse nyata, distribusi 5:0 dan 4:1, salah pola, parent journal dan reload.
- Sembilan misi tambahan dimainkan berurutan sampai gerbang: empat bekal, kolam 3/3 dari 4/2, pesanan 3/2, klasifikasi, tiga bunga tambahan, kelompok 1–4, repair AB, pembagian 2/2, pola AA.
- Salah keranjang memberi petunjuk tanpa menghilangkan benda. AA diterima sebagai pola valid.
- Reload menunjukkan dua belas node selesai; Parent Mode menunjukkan 12/12 dan solusi lama. Simpanan awal tiga misi membuka misi keempat.
- Layout tablet 1024×768 diperiksa melalui iframe lokal. Petak, benda, tombol simpan/lanjut, dan guide komposisi berada dalam satu viewport. Pesanan bunga serta parent guide misi aktif diperiksa. Bunga latar tidak lagi membesar/menumpuk.
- Home/peta boleh menggulir sesuai koreksi pengguna. Viewport fitting hanya wajib sejauh mungkin pada aktivitas/misi.

## Batas

Ini uji Chrome desktop dengan ukuran layout tablet, bukan pengujian sentuh tablet fisik atau validasi anak. Ketersediaan voice Indonesia bergantung perangkat. Mobile di bawah 768 CSS pixel sengaja menampilkan tidak didukung; preview mobile dihentikan sesuai instruksi. Wilayah masa depan belum playable. Susunan aktif tersimpan dan dilanjutkan dari URL misi; replay/reset eksplisit memulai sesi baru. Completion tetap disimpan. Tidak ada offline penuh.

## URL dan refresh

Chrome: pada URL /taman-angka/counting, satu bunga sudah ditanam dan bantuan dipakai sebelum reload. Setelah membuka ulang URL, bunga tersebut tetap berada di lubangnya. Setelah lima bunga selesai dan reload, banner selesai tetap tampil. Panel orang tua tetap terbuka setelah refresh dengan query orangtua=true. Catatan counting tetap dua sesi (satu sesi lama dan satu sesi uji baru), sepuluh interaksi dan satu bantuan; refresh tidak menggandakan evidence. Snapshot mempertahankan variasi agar readiness atau jumlah completion tidak mengganti pola di tengah sesi.

## Cluster dan bahasa

Peta sekarang memakai empat marker wilayah saja. Chrome memverifikasi modal Taman Angka berisi dua belas item: completion lama bisa replay, misi berikutnya aktif, sisanya disabled. Membuka /?wilayah=taman-angka menampilkan modal setelah hidrasi. Memilih bekal membuka route misi keempat. Petunjuk gerbang dan judul misi dirapikan; build, 15 tes dan typecheck lulus setelah perubahan.
