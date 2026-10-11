@/Users/famasya/.codex/RTK.md

# Numera: petunjuk untuk agent

## Baca sebelum bekerja

1. `docs/goals.md`: tujuan, batas produk, dan target yang disetujui.
2. `docs/handoff.md`: keadaan implementasi, risiko, dan langkah berikutnya.
3. `references/README.md`: sumber, status akses, dan batas klaim.
4. `references/nrich-primary.md` untuk sebelas PDF NRICH yang sudah dibaca.
5. `references/learning-trajectories.md`, `docs/curriculum.md`, dan `prds/README.md` untuk guideline gabungan LT + NRICH, pemetaan requirements, dan batas usia 3–7 tahun.
6. `docs/pedagogy.md`, `docs/language.md`, dan `docs/world-design.md` saat mengubah kegiatan, bahasa, atau peta.

Instruksi terbaru pengguna mengalahkan dokumen ini. Pisahkan fakta kode, keputusan pengguna, usulan, dan hasil yang belum diverifikasi. Perbarui handoff setelah perubahan yang berarti.

## Tujuan dan batas

- Bangun permainan petualangan matematika dengan batas cakupan usia 3–7 tahun. Konteks awal adalah proyek pribadi untuk satu anak; usia bukan syarat unlock atau bukti kesiapan. Peta dunia adalah navigasi utama. Matematika muncul melalui tindakan dan perubahan lingkungan.
- Platform canonical: tablet; desktop tetap didukung. Mobile tidak didukung. Pada viewport di bawah 768 CSS pixel, tampilkan pesan perangkat tidak didukung dan sembunyikan game. Jangan menghabiskan waktu membuat preview atau gameplay ponsel.
- Target canonical terbaru: empat wilayah playable, masing-masing 12 misi (48 total). Gunakan `docs/mission-plan.md` dan `docs/world-missions.md` sebagai daftar misi. Status aktual ada dalam handoff; jangan menyatakan fitur selesai sebelum benar-benar playable dan diverifikasi.
- Utamakan kedalaman penalaran sebelum besarnya angka. Jangan memakai lembar soal, kuis pilihan ganda, skor, peringkat, timer, atau hukuman.
- Pertahankan eksplorasi, beberapa solusi valid, bantuan bertahap, dan replay. Penyelesaian cerita bukan bukti penguasaan konsep.
- Tanpa backend, autentikasi, data pribadi, analitik eksternal, iklan, atau inferensi LLM runtime. Simpan progres di perangkat.

- Gunakan URL sebagai state halaman: `/` untuk peta, `/<regionId>/<missionId>` untuk misi (route Taman Angka lama tetap berlaku), dan query `orangtua=true` untuk panel orang tua. Refresh harus mempertahankan halaman, susunan benda, bantuan, dan status selesai. Replay/reset eksplisit boleh memulai sesi baru.

## Cara bekerja dan arsitektur

- Gunakan TanStack Start, React, TypeScript, SVG, dan pnpm. Server produksi menggunakan adapter Nitro dan `.output/server/index.mjs`; jangan menambahkan `scripts/serve.mjs` tanpa kebutuhan nyata.
- Awali dengan inspeksi kode dan perubahan yang ada. Jangan menimpa pekerjaan lain atau menghapus progres lokal pengguna untuk pengujian.
- Gunakan Motion untuk animasi interaksi seperti timbangan. Hitung berat dan validasi jawaban dengan logika deterministik; jangan menjadikan posisi animasi sebagai jawaban. Hormati reduced motion. Engine fisika hanya diperlukan bila misi membutuhkan tumbukan atau tumpukan bebas.
- Pisahkan konten, validasi matematika, bantuan, kesiapan belajar, progres, dan rendering. Gunakan fungsi deterministik untuk menghasilkan dan memvalidasi masalah.
- Misi memakai ID stabil; jangan mengandalkan indeks tiga misi yang lama saat memperluas konten. Migrasikan simpanan lama tanpa menghapus penyelesaian atau catatan.
- Navigasi peta canonical: satu cluster per wilayah. Setiap wilayah membuka modal dengan 12 misi; jangan mengembalikan 12 jejak/titik individual di peta. Query `wilayah=<regionId>` mempertahankan modal saat refresh. Wilayah memiliki progres berurutan sendiri; misi pertama tiap wilayah tersedia.
- Pertahankan HTML hitbox dan sistem koordinat peta. Satu ilustrasi pulau menjadi latar; path, node, animasi, dan UI menjadi lapisan terpisah.
- Browser pilihan pengguna adalah Chrome, bukan BrowserOS. Ikuti skill Chrome dan blokir kebijakan akses; jangan mencari jalan memutar. Pengujian perangkat desktop tidak membuktikan kenyamanan sentuh fisik.
- Jalankan tes logika, typecheck, build, dan uji alur Chrome untuk perubahan gameplay. Untuk perubahan dokumentasi saja, periksa tautan lokal dan konsistensi dengan kode; jangan mengklaim tes baru bila tidak dijalankan.
- Sebelum handoff, catat perubahan, bukti pengujian, batas, dan langkah lanjutan. Jangan berhenti pada mockup bila tugas meminta gameplay.

## Design rules

- Use shared design tokens for colors, typography, spacing, radii, shadows and control sizes. Define foundations in `src/styles/tokens.css`; component styles must consume those tokens rather than introduce literal visual values.
- Keep text large and readable. Numera is for a young child; labels and instructions must be readable on tablets. Small decorative typography must never carry information required for play.
- Maintain strong text and control contrast against their backgrounds. Prefer dark text on light surfaces; do not use pale text for meaningful labels, instructions or navigation.
- Use at least 48 CSS pixels for interactive controls. Preserve large flowers, planting spots and pattern pieces; pan/zoom the map rather than shrinking interactions.
- Native CSS media-query breakpoints may be literal because CSS variables cannot be used in media queries. Illustration paths and normalized world coordinates are artwork geometry, not UI design tokens. Use shared palette tokens for authored interactive SVG colors where practical; preserve colors of user-supplied artwork unless asked to change them.
- Default to Indonesian in the child experience, support visual play without reading or audio, and respect reduced motion.
- Use pnpm. Preserve unrelated changes. Use Chrome for browser validation when requested by the user.

- Avoid page-level vertical scroll during play. Fit activities to the tablet viewport. Home/world map page scrolling, panning inside the map, and scrolling long Parent Mode records are allowed. Keep object and text sizes usable; do not achieve fit by shrinking the whole game.
- Each mission must include a Parent Mode guide with the mathematical idea, a practical prompt, what to observe, and a primary reference. Keep this material separate from the child flow.
- Di dalam misi, Parent Mode hanya menampilkan panduan dan catatan misi aktif. Ringkasan seluruh misi serta saran umum tersedia dari peta; jangan menampilkan semua panduan bersama dalam setiap stage.

## Indonesian writing rules

- Apply ASD-STE100 writing principles to Indonesian: use consistent terms, direct verbs, short sentences, and one action per instruction sentence. This is a project adaptation, not formal ASD-STE100 compliance.
- Name the object and destination. Use “bunga”, “lubang tanam”, “petak kebun”, “matahari”, and “bulan” consistently. Avoid vague instructions such as “Bisa dibagi dua?” or figurative wording that hides the action.
- Prefer at most ten words per child instruction sentence. Keep the same instruction in visible text and voice; use natural Indonesian descriptions such as “Pindahkan bunga ke lubang tanam.” Avoid robotic fragments such as “Sentuh batu. Sentuh kolam lain.”
- Write for readers, not translators. Avoid calques such as “memberi cara/dasar/alasan untuk …” — use direct verbs (“membantu anak memeriksa”, “menjadi acuan”). Prefer plain words: “kelompok” bukan “kategori”, “kejadian” bukan “kasus”, “sifat” bukan “atribut”, “jumlah pilihan” bukan “frekuensi”, “bayangan” bukan “siluet”, “awal” bukan “pangkal”, “arah” bukan “orientasi”, “sisi” bukan “permukaan” untuk bangun ruang, “yang benar/boleh” bukan “valid/sah”, “tanpa bantuan” bukan “sesi mandiri”, “penanda” bukan “landmark”, “cukup” bukan “kecukupan”. Keep accepted pedagogy terms in parent material: “korespondensi satu-satu”, “kardinalitas”, “bangun ruang”, “kesiapan”, “simetri”, “seperempat putaran”, “garis cermin”, “satuan”.
