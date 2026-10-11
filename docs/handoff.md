# Penyelesaian misi tanpa ucapan — 11 Oktober 2026

- Semua misi memakai handler selesai bersama tanpa narasi otomatis. Petunjuk yang masih diputar dihentikan dan status suara dibersihkan. Tombol petunjuk disembunyikan setelah selesai; bunyi pendek nonverbal tetap mengikuti pengaturan suara.
- Validasi: 126 tes, typecheck, dan build lulus. Alur Chrome tidak diulang untuk perubahan ini.

---

# Petunjuk suara bundel — 11 Oktober 2026

- Masalah direproduksi di Chrome: mode suara aktif, tetapi sintesis browser tidak memberi event mulai/gagal sehingga “Menyiapkan suara…” bertahan. Kode lama juga diam ketika suara Indonesia belum tersedia. Tidak mengklaim penyebab internal layanan suara Chrome sudah diketahui.
- Jalur utama sekarang file AAC/M4A lokal: 129 klip asli dari teks instruksi/bantuan seluruh 60 misi dan pesan selesai. Dibuat dengan suara sintetis Indonesia Damayanti, total sekitar 3.8 MB. Manifest menghubungkan teks yang sama dengan URL. [Generator](../scripts/generate-narration.mjs), perintah `pnpm generate:narration` pada macOS; tes mendeteksi konten yang belum mempunyai klip. Tidak mengirim teks/identitas anak ke layanan luar.
- Pemutaran mempunyai timeout mulai 4 detik, pesan loading/playing/mute/error, penanganan penolakan autoplay, dan pembatalan suara sebelumnya/ketika keluar misi. Sintesis browser hanya fallback teks baru, menunggu voiceschanged dan mempunyai timeout. Tombol misi selesai membaca teks selesai yang tampil.
- Validasi: 126 tes dalam tujuh file, typecheck, dan build lulus. Chrome pada localhost:3000 memeriksa klik petunjuk Tanam lima bunga: event playing diterima dan status hilang setelah ended. Format AAC mono berdurasi positif diperiksa; semua 60 instruksi/bantuan mempunyai file. Pengujian tidak membuktikan suara terdengar dari speaker pengguna atau kenyamanan suara pada tablet fisik.

---

# Event klik setiap sisi kubus — 11 Oktober 2026

- Handler pasangan pointer-down/up diganti `onClick` React Three Fiber pada enam bidang hitbox 3D ber-ID tetap. Raycaster memakai clientX/clientY relatif bounds canvas; garis dan titik penanda tidak ikut hit testing. Mode penandaan tidak diblokir flag drag lama. Tampilan, tombol animasi, serta validator enam ID dipertahankan.
- Chrome pada dev server pengguna: replay melalui pilihan misi, klik langsung kiri/kanan/bawah, dua sisi baru setelah putaran samping, lalu atas setelah tombol atas/bawah. Seluruh enam sisi berubah warna dan bertitik; klik ulang menampilkan “Sisi sudah ditandai.” dan tidak melepas tanda. Pemeriksaan akhir menyelesaikan misi. Tidak memakai penandaan keyboard untuk alur ini.
- 120 tes, typecheck, build, dan whitespace lulus. Replay memakai UI dan mempertahankan completion lama. Sentuhan tablet fisik belum diuji. [PRD](../prds/25-map-2-first-adventures.md) diperbarui.

---

# Kubus: pisahkan penandaan dan putaran — 11 Oktober 2026

- Instruksi pengguna terbaru: misi semua sisi kubus memakai sentuhan sisi hanya untuk memasang tanda. Sentuhan ulang tidak melepas tanda. Putaran dilakukan melalui tombol samping/atas-bawah dengan animasi Motion dan token gerak bersama; reduced motion langsung mengganti pandangan. Area kubus tidak menerima drag/pinch/roda zoom pada misi ini. Eksplorasi ruang lainnya tetap memakai kontrol sebelumnya. Keyboard memakai tombol putar dan Enter/Space untuk tanda sisi depan.
- Sudut tujuan serta ID sisi tersimpan; animasi hanya mengubah rendering, bukan validator enam sisi. [PRD](../prds/25-map-2-first-adventures.md) diperbarui. Perubahan bahasa “sisi” serta header yang sedang ditambahkan pengguna dipertahankan.
- Validasi: 120 tes, typecheck, dan build lulus. Chrome pada server pengguna memeriksa kedua tombol dan screenshot sudut antara/akhir putaran. Reduced motion OS dan tablet fisik belum diuji pada revisi ini. Tidak menghapus progres untuk pengujian.

---

# Peta 2 playable dan penyederhanaan interaksi — 11 Oktober 2026

- Pulau Para Pembuat kini mempunyai selector URL `?peta=pembuat`, empat cluster, dan 12 misi awal (3 per wilayah). Peta 1 tetap 48 misi; total 60. [Brief dan acceptance](../prds/25-map-2-first-adventures.md). Registry 223 goal kini mencatat 49 dukungan parsial; tidak ada klaim coverage penuh atau mastery. Parent Help/peta konsep memperoleh tujuan konseptual, manfaat, kegiatan, prompt, observasi, kegiatan rumah, dan sumber untuk seluruh misi baru.
- Model panjang, pengulangan satuan, pemindahan air, data per kasus, frekuensi termasuk seri/kategori kosong, klasifikasi dua atribut, bangun ruang, enam permukaan, penyangga struktur, separuh luas, perubahan jumlah, serta peta bergambar memakai validator deterministik. Snapshot, replay, deep link, dan progres lama dipertahankan.
- React Three Fiber/Three merender benda dan gerbang 3D secara lazy dengan SVG fallback. Tidak ada putaran otomatis atau fisika yang menentukan jawaban. Drag memutar, pinch/roda/+/− zoom terbatas, panah keyboard memutar, Home mengembalikan pandangan. Orientasi dan zoom tersimpan. Kubus diperbesar dan disentuh langsung; pilihan gambar permukaan bawah dihapus. Sentuhan singkat memasang/melepas tanda, drag tidak menandai. Enter/Space menandai permukaan depan untuk keyboard.
- Lembah Ukuran: keping persediaan menyerupai keping jalur dan mendukung drag/pilih–sentuh; alat ukur terlihat sejak awal dan ujung pengukuran berikutnya diberi batas; wadah dinamai dan air dibuat lebih kontras. Rak dua aturan menampilkan tiap benda sekali, mempunyai drag preview dan tujuan tap/keyboard yang tidak tertutup benda. Panel Lumi dipindahkan di luar artwork agar tidak menutupi label wilayah. Garis kubus, air, fokus, serta batas kontrol memakai token bersama.
- Validasi: **120 tes dalam enam file**, typecheck, dan build produksi lulus. Chrome memakai dev server pengguna `localhost:3000`: 12 alur awal selesai melalui UI; tambahan replay rak menguji jawaban salah, koreksi, keyboard dan drag nyata. Kubus diuji melalui sentuhan langsung, putaran drag, keyboard putar/zoom/penandaan, serta refresh tanda/pandangan. Pengukuran awal diuji dengan overlap, pengulangan alat, pemindahan dan pengembalian air, serta refresh. Tidak semua variasi gameplay atau semua viewport diuji setelah revisi terakhir.
- Chrome 1024×768 memeriksa perubahan kubus/rak; empat label wilayah tidak beririsan dengan panel Lumi berdasarkan DOM. Pengujian Chrome desktop bukan bukti sentuhan/pinch tablet fisik, reduced-motion seluruh aktivitas, atau uji anak. Build masih memberi warning dependency/chunk; scene 3D dimuat terpisah. Readiness/evidence masih model lama, roadmap 133 goal utama belum selesai. Skenario [QA visual](qa-tests.md) pengguna dipertahankan dan belum seluruhnya dijalankan.

---

# Skenario QA kerusakan visual — 11 Oktober 2026

- [tests/qa-tests/visual-breakage.md](../tests/qa-tests/visual-breakage.md) berisi 40+ skenario uji yang berpeluang merusak tampilan: boundary viewport 767/768, soft-lock oleh `overflow:hidden` pada tinggi pendek, drop target tertumpuk (`elementFromPoint`), `map-bloom` peta 2 di koordinat peta 1, `pan-note` yang tidak pernah tampil, affordance hint yang hilang pada reduced motion, dan overlay/dialog pada layar kecil.
- Checklist pemeriksaan per skenario mencatat status, tanggal, hasil, dan bukti; kolom "Sumber terdampak" memetakan skenario ke file — perubahan pada file itu membatalkan hasil dan mewajibkan re-check.
- Prioritas P0: V-02/S-11/V-03 (kontrol selesai terpotong), S-08/S-10/S-17 (drop salah target), M-02/M-05b (bug yang sudah terlihat di kode), E-01 (reduced motion), V-01 (zoom browser).
- Perubahan dokumentasi saja; tidak ada perubahan kode atau tes yang dijalankan.

---

# Klarifikasi tujuan belajar untuk orang tua — 11 Oktober 2026

- Seluruh 48 tujuan belajar ditulis ulang sebagai kemampuan konseptual yang ingin dikembangkan pada anak. Kata-kata tugas seperti mengambil kunci, menyusun roket, atau menempatkan bunga diganti dengan hubungan jumlah, struktur pola, sifat bentuk, posisi, urutan, serta strategi yang relevan.
- Parent Help dan peta konsep tetap memakai sumber bersama. Rincian tindakan misi berada di kartu Kegiatan; tujuan bukan pernyataan bahwa anak sudah menguasainya.
- Validasi perubahan teks: typecheck dan whitespace diperiksa. Mekanik, rendering, dan progres tidak berubah; tes gameplay/build/Chrome tidak diulang.

---

# Kartu panduan orang tua — 11 Oktober 2026

- Setiap bagian panduan menjadi kartu terpisah: tujuan belajar, mengapa penting, kegiatan, dampingi, amati, coba di rumah (bila tersedia), dan referensi. Parent Help dan detail peta konsep memakai gaya kartu yang sama dengan token warna, jarak, border, dan radius proyek.
- Typecheck dan build lulus; Chrome memeriksa tujuh kartu Pesanan bunga melalui DOM dan screenshot. Tidak ada perubahan gameplay atau progres; tes logika tidak diulang untuk perubahan tampilan ini.

---

# Tujuan dan manfaat konsep di panduan orang tua — 11 Oktober 2026

- Sesuai klarifikasi pengguna, informasi hadir di Parent Help serta detail peta konsep baru. Setiap dari 48 misi mempunyai “Tujuan belajar” dan “Mengapa penting”; empat wilayah mempunyai ringkasan pada peta konsep.
- `src/content/learning-purpose.ts` menjadi sumber bersama; `LearningPurpose` dipakai kedua panel. Tujuan khusus kegiatan dipisahkan dari makna, prompt, observasi, dan sumber yang sudah ada. Contoh sehari-hari adalah penjelasan desain, bukan klaim efektivitas atau mastery.
- Peta konsep/dependency/CSS yang baru ditambahkan pengguna dipertahankan. Perubahan ini hanya mengintegrasikan penjelasan ke detailnya; tidak mengubah mekanik, progres, atau instruksi anak.
- Validasi: 108 tes, typecheck, dan build produksi lulus. Chrome memeriksa ringkasan wilayah Taman Angka, detail Pesanan bunga, tombol masuk misi, dan Parent Help aktif dengan teks yang sama. Screenshot Parent Help diperiksa; semua 48 panel dan tablet fisik belum diperiksa satu per satu.
- F-18 dan pedagogi diperbarui. Langkah berikutnya: penjelasan tujuan untuk kegiatan baru saat peta 2 diimplementasikan.

---

# Penguatan dan verifikasi peta 1 — 11 Oktober 2026

- Lima celah mekanik diperkuat: pesanan dari tujuh bunga dengan surplus/variasi 3–2 dan 2–1; transfer AB lingkaran/persegi ke daun/lentera dengan dua korespondensi sah; koleksi yang sama dipilah warna lalu jenis; segitiga tidak simetris/lebar; pantulan geometri daun/segitiga beserta pembalikan posisi. [Brief dan acceptance](../prds/24-map-1-reinforcement.md).
- Pulau Bentuk: frame SVG rapat dan rasio canvas tetap memperbaiki siluet rumah/perahu/roket. Perahu memakai trapesium dan layar siku-siku; roket memakai badan tegak, ujung, jendela lingkaran serta sirip. Preview balok mengisi frame geometri. Pada layar pendek, gambar dan palette berdampingan; hitbox tidak diperkecil.
- Klarifikasi pengguna: latar harus lebih natural, bukan netral; dekorasi disukai. Dekorasi bengkel dipertahankan. Bendera sekarang melekat pada tali lengkung dengan sudut mengikuti tali, tepi kain melengkung, dan lipatan.
- Bug yang ditemukan dalam alur Chrome: susunan kelompok batu yang terisi tidak dapat ditukar lewat tap. `growing` kini menukar kelompok lewat tap maupun drag. Pesanan mempunyai tombol eksplisit untuk mengembalikan bunga ke keranjang.
- Route, 48 ID misi, dan kunci progres tetap. Snapshot lima bunga diperluas tanpa memindahkan bunga; fase sort dan target pesanan tersimpan. Penyelesaian lama tetap, tanpa konversi menjadi mastery. Snapshot sort lama melanjutkan aturan jenis; replay memulai warna dahulu.
- Seluruh PRD mencantumkan penempatan peta/wilayah; indeks mempunyai kolom Peta. Registry/audit kini 35 goal dengan dukungan parsial setelah menambahkan PAT-05. Peta 2 masih aset/desain dan rencana kegiatan, belum runtime.
- Validasi: **108 tes dalam lima file**, typecheck dan build produksi lulus. Build masih mengeluarkan warning module-level directives dari dependency; tidak menggagalkan build. Tautan lokal PRD/docs, registry 223 goal/35 dukungan, serta whitespace diperiksa.
- Chrome pada origin pengujian `127.0.0.1:3010`: **seluruh 48 misi** dimainkan hingga selesai lewat UI, termasuk ABB/AAB/ABC hutan dan grid 3×3 menara. Perbaikan diuji dengan jumlah berlebih, alternatif transfer, dua fase sort, pantulan asli yang ditolak, tap swap kelompok, kunci sebelum pintu, replay pesanan, refresh susunan/fase/pantulan/target/completion, serta panduan aktif. Satu alur per misi tidak membuktikan semua kombinasi solusi/variasi.
- Layout diukur pada 1024×768; tambahan 800×600 untuk siluet. Area gambar mempertahankan rasio 1.44, lingkaran tetap bulat, target roket ≥48 CSS px, dan aktivitas yang diukur tanpa scroll halaman. Sentuh tablet fisik, anak, drag seluruh mekanik, dan semua viewport belum diuji. Dekorasi dan perbaikan bentuk diperiksa melalui screenshot Chrome.
- Perubahan CSS peta/guide yang sudah ada di working tree selama kelanjutan ini dipertahankan; bukan bagian penguatan gameplay ini. Jangan menimpa pekerjaan tersebut.
- Langkah berikutnya: evidence dan kesiapan per goal, brief peta 2, unit pola minimal/parsial, substitusi bentuk, data untuk keputusan, dan peta-ke-dunia. Lima perbaikan dan 48 alur tidak berarti seluruh roadmap 133 goal utama sudah selesai.

---

# Desain peta kedua — 10 Oktober 2026

- Pengguna meminta desain peta kedua; pulau pertama tetap dipertahankan. Artwork dibuat memakai built-in imagegen dengan pulau pertama sebagai referensi gaya.
- Aset: `design/maps/numera-island-2.png` (master 1536×1024) dan `public/art/numera-island-2.webp` (354896 byte, Sharp quality 86). [Design brief dan prompt final](map-2-design.md).
- Empat landmark: Lembah Ukuran, Desa Data, Bengkel Bangun Ruang, Pelabuhan Petualangan. Nama pulau “Pulau Para Pembuat” dan ID/koordinat wilayah adalah usulan desain.
- PNG dan WebP diperiksa visual: empat destinasi terpisah, gaya/palet selaras, tanpa teks atau UI baked-in. Asset belum dihubungkan ke runtime; belum ada gameplay, manifest, route, progres, atau validasi Chrome/tablet/anak peta kedua.
- Langkah berikutnya: activity briefs dan manifest tujuan pulau kedua; implementasi selector dua peta dengan URL/migrasi kompatibel; cluster HTML, label, dan path sebagai lapisan terpisah; validasi Chrome/tablet sesuai requirements.
- Perubahan aset/dokumentasi saja. Tautan lokal dan whitespace diperiksa; tes logic/typecheck/build/Chrome tidak dijalankan.

---

# Pembaruan rujukan LT daring — 10 Oktober 2026

- Instruksi terbaru: gunakan versi daring LT sebagai rujukan canonical. Semua tautan LT di PRD/docs/references menunjuk URL penerbit.
- `/references/LT.pdf` dikecualikan melalui `.gitignore`; berkas asli pengguna tetap lokal dan tidak dihapus. PDF tidak ditambahkan ke aset aplikasi.
- Registry dokumentasi memakai URL, halaman/urutan level, scope, dan requirements original; tidak mereproduksi tabel lengkap nama/deskripsi/usia level LT. Seluruh 223 goal requirements dan audit 48 misi tetap tersedia. NRICH tetap dipertahankan.
- Locator berarti nomor halaman PDF dan urutan level pada halaman mulai 1; registry versi 2 ini hanya dokumentasi, bukan versi progres game.
- Verifikasi akhir mencakup 223 locator terhadap sumber, 48 ID misi, tautan lokal, pengecualian Git, dan whitespace. Tidak ada perubahan gameplay atau tes browser baru. URL resmi dapat diakses pada sesi ini.

---

# Pembaruan PRD LT + NRICH — 10 Oktober 2026

- Keputusan terbaru: guideline **gabungan LT + NRICH**, usia 3–7; problem solving tetap dipertahankan. Requirements lengkap berada di [prds/README.md](../prds/README.md).
- Seluruh 20 trajectory/223 level diinventaris: 133 utama, 43 fondasi, 16 batas, 31 lanjut ditunda. Setiap level memiliki goal ID, locator sumber, tujuan kegiatan, scope, dan dukungan misi di `prds/lt-levels.json`; 20 section memuat requirements dan acceptance.
- Seluruh 48 misi diaudit dari konten, konfigurasi, renderer, validator, readiness, dan storage; [audit](../prds/22-existing-missions.md) menemukan 34 level dengan dukungan parsial/konteks. Tidak ada klaim coverage penuh/mastery atau browser proof baru.
- Requirements bersama mencakup activity briefs, evidence, kesiapan per konsep, migrasi, URL, tablet, Parent Mode, solver, dan QA. Enam goal problem solving serta sebelas sumber NRICH tetap ada. Peta/paket delivery adalah proposal; jumlah misi/peta baru belum ditetapkan.
- `docs/pedagogy.md` dirapikan menjadi sumber/prinsip/batas saat ini, tanpa riwayat percobaan akses yang gagal; NRICH tetap dipertahankan. Tidak ada perubahan kode gameplay atau local storage.
- Pemeriksaan dokumentasi: kelengkapan 223 level terhadap ekstraksi PDF, konsistensi 48 ID misi dengan kode, goal references, tautan lokal, dan diff whitespace. Tes gameplay/typecheck/build/Chrome tidak dijalankan untuk perubahan dokumentasi ini.
- Langkah berikutnya: activity briefs paket penguatan, kontrak/migrasi goal evidence, lalu implementasi celah dan uji gameplay. Dokumen historis berikut merekam status sebelumnya; pembaruan ini menggantikan pernyataan bahwa inventaris belum disusun.

---

# Pembaruan cakupan kurikulum — 10 Oktober 2026

- Keputusan pengguna: LT menjadi guideline; batas usia terbaru 3–7 tahun menggantikan batas awal TK A/4–5 tahun untuk perencanaan produk.
- `references/LT.pdf` tersedia, 32 halaman, identik secara SHA-256 dengan PDF daring yang dibaca. Catatan bidang/halaman: [learning-trajectories.md](../references/learning-trajectories.md).
- [curriculum.md](curriculum.md) memisahkan trajectory, level, kegiatan/variasi, dan peta. Jumlah peta tambahan belum ditentukan; target implementasi sekarang tetap 48 misi.
- Belum ada inventaris seluruh level atau audit keselarasan 48 misi untuk usia 3–7. Langkah berikutnya: inventaris level, pilih cakupan, petakan misi dan celah pengalaman sebelum menetapkan peta baru.
- Perubahan dokumentasi saja; tidak ada perubahan gameplay, progres, atau readiness. Tes gameplay, typecheck, build, dan Chrome tidak dijalankan pada pembaruan ini. Tautan lokal dokumen yang diubah diperiksa.
- PDF PAUD lokal juga tersedia; belum ditelaah pada pembaruan ini. Dokumen historis di bawah mempertahankan konteks usia dan implementasi sebelumnya.

---

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
