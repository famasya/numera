# Nama proyek — Numera

Nama canonical sejak 10 Oktober 2026 adalah **Numera**. Nama paket, tampilan, metadata halaman, manifest dan dokumentasi memakai nama baru. Artwork peta berada di `public/art/numera-island.webp`. Kunci `numbara.progress.v1` dan `numbara.session.v1.<missionId>` sengaja dipertahankan untuk membaca progres pengguna yang sudah ada; jangan menggantinya tanpa migrasi. Validasi rename: 97 tes, typecheck, dan build produksi lulus; Chrome memeriksa judul/brand Numera, peta termuat, dan progres lama tetap terlihat. Direktori checkout saat ini tetap `/Users/famasya/dev/abid/numbara`.

---

# Pembaruan tinjauan gerak — 10 Oktober 2026

Lihat [movement-review.md](movement-review.md). Rotasi panah/layar/balok memakai Motion dan terus searah jarum jam saat orientasi kembali ke nol. Balok tersimpan tetap menunjukkan orientasinya; drag balok tidak memakai orientasi pilihan lain. Manipulative memakai gerak pointer langsung dan spring teredam saat kembali. Perayaan Lumi dibatasi dua lompatan. Token gerak dibagikan dalam `src/styles/movement.ts`; dekorasi tetap CSS dengan reduced motion. 97 tes, typecheck, build lulus. Chrome memeriksa rotasi 360° dan persistensi orientasi balok; drag fisik dan reduced-motion OS belum diuji.

---

# Pembaruan 10 Oktober 2026 — Motion dan timbangan

- Motion 14 dipasang melalui pnpm. `PuzzleBoard` menggunakan animasi spring untuk piring dan batang timbangan pada tower-even dan tower-weights. Preferensi reduced motion mematikan transisi.
- `src/pedagogy/balance.ts` menghitung kemiringan visual secara deterministik. Validasi jawaban tetap memakai `slotsValid`; animasi tidak menentukan penyelesaian. Ini model perbandingan berat dengan lengan sama panjang, bukan simulasi tumbukan atau massa bebas.
- Istilah kegiatan diubah menjadi timbangan/piring timbangan. Bekal cahaya tetap memakai rak dan petunjuknya menyebut lentera.
- Empat wilayah memiliki 48 konfigurasi misi. Catatan lama di bawah menggambarkan implementasi sebelumnya. Validasi Chrome perlu dilanjutkan untuk Menara Misteri misi 6–12; jangan menyatakan seluruh 48 alur telah diuji lewat browser.
- Validasi perubahan ini: 95 tes lulus, typecheck lulus, produksi build lulus. Build mengeluarkan warning module-level `use client` dari Motion; tidak menggagalkan build.
- Chrome: replay Bintang berbobot, sisi kiri/kanan turun sesuai berat, benda dapat dipilih ulang, refresh mempertahankan susunan, 1+2 seimbang dengan 3 dan menyelesaikan misi. Tablet 1024×768: tinggi halaman 768 tanpa scroll vertikal. Belum diuji pada tablet fisik atau bersama anak.

---

# Handoff agent — 9 Oktober 2026

## Baca dahulu

[AGENTS.md](../AGENTS.md) berisi aturan kerja. [goals.md](goals.md) adalah tujuan produk canonical. [mission-plan.md](mission-plan.md) mencatat dua belas misi dan ID stabil. [references/README.md](../references/README.md) menjelaskan sumber dan batas akses. Instruksi pengguna terbaru mengalahkan dokumen.

## Status implementasi

**Dua belas misi Taman Angka sudah diimplementasikan**, dari tiga misi awal. ID lama counting/composition/patterns tetap sama. Sembilan tambahan: matching, compare, orders, sorting, missing, growing, repair, sharing, free-pattern. Tiga wilayah lain masih landmark masa depan.

- TanStack Start + React/TypeScript, adapter Nitro, pnpm. Route utama src/routes/index.tsx, tanpa backend.
- Peta original empat wilayah, pan/zoom, SVG viewBox 1200×800, satu cluster taman + tiga node wilayah masa depan; cluster membuka modal 12 misi. Guide berada di bawah canvas agar tidak menutupi node.
- Counting dan missing: lima identitas bunga; missing mulai dengan dua yang sudah ditanam.
- Composition: lima bunga, dua petak, enam partisi termasuk kosong, beberapa discovery, bebas lanjut setelah satu.
- Patterns: AB/BA; AAB setelah dua sesi independen dengan variasi berbeda. Repair memperbaiki satu penyimpangan. Free-pattern menerima AA/AB/BA/BB.
- Placement: satu buah per teman; kolam 4/2 disamakan menjadi 3/3; pesanan bunga 3/2; klasifikasi daun/bunga; pembagian buah 2/2. Growing mengurutkan kelompok 1–4.
- Lumi memakai kelinci biru file pengguna. SVG bunga diberi dimensi intrinsik agar bunga dekorasi tidak menjadi raksasa pada SVG latar.
- Bahasa anak sudah dirapikan menjadi tindakan yang wajar. Contoh: “Samakan jumlah batu di kedua kolam.” / “Pindahkan batu ke kolam sebelah.” Jangan mengembalikan fragmen robotik yang ditolak pengguna. Gerbang kini memakai “Buat pola bunga untuk membuka gerbang.” dengan petunjuk “Isi dua tempat pertama dengan bunga. Ulangi urutan warnanya.”
- Modal MissionPicker memakai query wilayah=taman-angka, gambar misi, dan status unlock/replay. Parent Mode memiliki query URL orangtua=true dan menyediakan materi, pendampingan, pengamatan dan referensi tiap misi melalui src/content/parent-guides.ts; misi aktif tampil pertama dan panduannya terbuka.

## Keputusan platform canonical

Tablet adalah target utama; desktop didukung. Di bawah 768 CSS pixel, tampilkan pesan perangkat tidak didukung dan sembunyikan game. Batas adalah ukuran viewport, bukan deteksi model perangkat. Jangan membuat preview mobile. **Layar aktivitas/misi sebisa mungkin tanpa scroll vertikal; home/peta boleh digulir.** Catatan orang tua juga boleh digulir. Pertahankan objek, teks dan hitbox besar; jangan mengecilkan seluruh scene.

## Persistence dan kejadian state

Local storage tetap memakai key numbara.progress.v1, dengan payload version 2. Parser memigrasikan version 1. Completion berurutan terpisah dari evidence 200 sesi agar replay tidak menghapus unlock lama; ada tes regresi 250 replay. Susunan aktif sekarang disimpan dalam numbara.session.v1.<missionId>. Route `/taman-angka/$missionId` dan query orangtua=true menyimpan state halaman. Refresh melanjutkan susunan, variasi, bantuan, percobaan dan layar selesai. Replay dari peta atau reset eksplisit memulai sesi baru. Snapshot dihidrasi sebelum activity mount untuk menghindari reset sementara atau perbedaan SSR. Progres completion ditulis langsung saat berubah. Progres terpisah per origin; jangan menghapus data pengguna saat mengetes.

Keluhan “state tidak tersimpan” sebelumnya ternyata berarti tidak ada next stage setelah pola. Ketiga completion lama tetap ada setelah reload. Perluasan sekarang membuka misi keempat tanpa mengulang tiga pertama.

## Titik kode utama

| Area               | File                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| Konten dan panduan | src/content/missions.ts; src/content/parent-guides.ts                    |
| Scene/transisi     | src/components/Game.tsx; src/world/regions/Garden.tsx                    |
| Peta               | src/world/map/WorldMap.tsx                                               |
| Penyimpanan        | src/world/progression/store.ts                                           |
| Matematika         | src/pedagogy/concepts.ts                                                 |
| Adaptasi           | src/pedagogy/mastery/readiness.ts; src/pedagogy/scaffolding/hints.ts     |
| Mekanik baru       | src/activities/adventure/{Placement,Growing,CreativePattern,Objects}.tsx |
| Tap/drag           | src/components/Manipulative.tsx                                          |
| UI/token           | src/styles/game.css; src/styles/tokens.css                               |
| Tes                | tests/logic.test.ts                                                      |

## Validasi dan batas

Parent Mode dalam route misi sekarang hanya menampilkan satu panduan untuk misi aktif (materi, pendampingan, pengamatan, referensi dan catatan sesi). Semua misi dan saran umum tetap tersedia ketika panel dibuka dari peta. Susunan komposisi hanya muncul di misi composition atau ringkasan peta.

Panel orang tua memakai scroll internal pada `.parent-content`; judul, tombol tutup, dan tombol kembali berada di luar area scroll. Dialog dibatasi tinggi viewport dan tidak menggulir keseluruhan panel.

Perbaikan interaksi seret: `Manipulative` memisahkan state visual `dragging` dari flag penekanan klik setelah drag. State visual dihapus pada pointer-up/cancel agar bunga, apel, batu, dan daun bisa dipilih lagi setelah drop berhasil maupun ditolak. Chrome memverifikasi apel setelah salah drop dan setelah dipindahkan kembali ke keranjang; 15 tes, typecheck, dan build lulus.

Lihat [validation.md](validation.md) untuk hasil dan batas. Lima belas tes, typecheck, dan build produksi lulus pada akhir sesi. Chrome telah memainkan sembilan tambahan sampai selesai, memeriksa migrasi dan reload dua belas completion, parent guide aktif dengan link referensi, serta tampilan tablet 1024×768. Refresh di tengah counting mempertahankan bunga/hint; setelah selesai banner tetap tampil, parent query tetap terbuka, dan evidence tidak ganda. Belum ada uji anak atau tablet/Android fisik. Mobile sengaja tidak didukung. Offline penuh dan rekaman suara manusia belum tersedia. AAB dan readiness merupakan heuristik, bukan diagnosis.

## Melanjutkan

1. Inspeksi kode terbaru dan preserve perubahan yang ada.
2. Prioritaskan pengamatan bermain bersama anak dan pengujian sentuh tablet fisik; lihat apakah tujuan visual, bantuan, dan peta dapat dipahami.
3. Perbaiki masalah yang terbukti; variasikan strategi sebelum menambah angka atau membuka wilayah baru.
4. Uji regresi migrasi, unlock, replay, alternatif solusi, dan layout tablet saat mengubah gameplay.
5. Perbarui goals/status/references hanya jika keputusan atau bukti berubah. Jangan mengarang isi sumber yang terblokir.

Jalankan pnpm install, pnpm dev, localhost:3000. Validasi: pnpm test, pnpm typecheck, pnpm build. Produksi: pnpm start (PORT=3001 jika dev aktif). Build artifact dan routeTree.gen.ts dihasilkan otomatis; jangan diedit manual. Browser yang diminta adalah Chrome, bukan BrowserOS; ikuti skill dan blokir kebijakan domain.
