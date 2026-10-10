# Numera

Petualangan matematika dalam dunia kecil yang penuh penemuan. Dibangun dengan **TanStack Start, React, TypeScript dan SVG**, menggunakan **pnpm**.

## Jalankan

```sh
pnpm install
pnpm dev
```

Buka http://localhost:3000. Untuk tablet di jaringan yang sama, gunakan alamat Network yang dicetak Vite. Tidak ada akun atau konfigurasi API.

```sh
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

`pnpm start` menjalankan server Node hasil build Nitro di `.output/server/index.mjs`, sesuai integrasi hosting TanStack Start. Gunakan `PORT=3001 pnpm start` jika server pengembangan masih berjalan. Node 22.12+ disarankan (dikembangkan pada Node 24).

## Mainkan

- Sentuh titik taman atau **Mulai bermain**. Lima bunga dipindahkan ke lima tempat tanam: pilih bunga lalu tempatnya, atau drag. Bunga yang sudah ditanam dapat dipindahkan sebelum misi selesai.
- Bagikan lima bunga ke dua petak kebun. Simpan susunan dengan tombol centang; pindahkan bunga untuk menemukan cara lain. Semua pembagian termasuk petak kosong valid. Tombol panah melanjutkan.
- Isi bagian yang hilang di jalan bunga. Warna yang belum cocok memberi respons lembut, tanpa menghapus kemajuan.
- Lampu memberikan petunjuk bertahap, panah melanjutkan perjalanan, ikon peta kembali. Titik yang selesai dapat dimainkan lagi.
- Suara bisa dimatikan. Jika perangkat memiliki suara Indonesia, ikon speaker membacakan petunjuk. Demonstrasi visual tetap tersedia tanpa suara.
- Di tablet, geser peta dan gunakan zoom/kompas. Ikon perisai membuka catatan untuk orang tua.

Sembilan misi lanjutan mencakup bekal satu per teman, dua kolam sama banyak, pesanan bunga sesuai titik, klasifikasi panen, melengkapi jumlah, mengurutkan kelompok, memperbaiki pola, berbagi adil, dan membuat pola. Mode orang tua menyediakan materi dan referensi untuk setiap misi.

## Batas awal

Taman Angka berisi dua belas misi. Tiga wilayah lain merupakan tujuan masa depan. Progres dan catatan tersimpan di perangkat, bukan cloud. URL misi dan susunan yang sedang dikerjakan tetap tersedia setelah reload. Replay/reset eksplisit memulai sesi baru. Belum ada service worker/offline cache atau rekaman suara manusia. Ketersediaan suara Indonesia tergantung perangkat. Permainan perlu dicoba bersama anak untuk memvalidasi kenyamanan dan pemahaman.

Referensi dan keputusan pendidikan: [pedagogy](docs/pedagogy.md). Arsitektur: [architecture](docs/architecture.md). Catatan validasi: [validation](docs/validation.md). Prompt ilustrasi orisinal: [art-prompt](docs/art-prompt.md).

Panduan instruksi Indonesia: [language](docs/language.md).

## Melanjutkan pengembangan

Mulai dari [AGENTS.md](AGENTS.md), [tujuan](docs/goals.md), [handoff](docs/handoff.md), [rencana 12 misi](docs/mission-plan.md), dan [referensi](references/README.md). Dua belas misi sudah tersedia. Tablet adalah platform utama; desktop didukung. Mobile (viewport di bawah 768 CSS pixel) menampilkan pesan tidak didukung.
