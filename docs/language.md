# Panduan bahasa Indonesia

Numera menerapkan prinsip penulisan ASD-STE100 dalam bahasa Indonesia. ASD-STE100 mengatur bahasa Inggris. Adaptasi ini bukan kepatuhan formal dan tidak memakai kamus bahasa Inggris sebagai kamus Indonesia.

## Aturan proyek

- Gunakan satu istilah untuk satu objek. Kebun adalah lingkungan bermain; petak kebun adalah tujuan pemindahan bunga.
- Gunakan kata kerja langsung: sentuh, tanam, pindahkan, isi.
- Tulis satu tindakan dalam setiap kalimat instruksi.
- Sebutkan objek dan tujuan tindakan. Hindari “Bisa dibagi dua?”.
- Usahakan maksimal sepuluh kata dalam satu kalimat instruksi anak. Batas ini adalah keputusan proyek.
- Teks tujuan dan suara memakai sumber konten yang sama. Petunjuk gerak mendukung demonstrasi visual; anak tidak wajib membaca.

## Contoh

| Kegiatan | Tujuan                                   | Petunjuk gerak                                |
| -------- | ---------------------------------------- | --------------------------------------------- |
| Menanam  | Tanam lima bunga.                        | Pindahkan bunga ke lubang tanam.              |
| Menyusun | Pindahkan lima bunga ke petak kebun.     | Pindahkan bunga ke petak matahari atau bulan. |
| Pola     | Lengkapi bagian kosong pada jalan bunga. | Pilih warna bunga yang sesuai dengan pola.    |

## Bahasa yang wajar

Kalimat pendek tetap harus terdengar wajar. Jangan memecah petunjuk menjadi “Sentuh batu. Sentuh kolam lain.” Gunakan “Pindahkan batu ke kolam sebelah.” Tujuan matematisnya adalah “Samakan jumlah batu di kedua kolam.” Instruksi tidak wajib menjelaskan klik ketika objek dan tujuan sudah terlihat.

## Dasar

[ASD-STE100, Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf), bagian 5, mendukung kalimat prosedural pendek, satu instruksi per kalimat, dan bentuk perintah. [Penjelasan resmi ASD-STE100](https://asd-ste100.org/about.html) menjelaskan bahasa terkendali dan konsistensi makna kata. Prinsip tersebut diadaptasi untuk instruksi permainan anak dalam bahasa Indonesia; klaim edukasi tetap dijelaskan dalam pedagogy.md.

Gerbang: gunakan “Buat pola bunga untuk membuka gerbang.” Petunjuk “Isi dua tempat pertama dengan bunga. Ulangi urutan warnanya.” Warna boleh sama; jangan meminta dua warna berbeda karena AA dan BB adalah solusi valid. Hindari “Susun dua bunga. Ulangi susunannya.” yang tidak menjelaskan tujuan.

## Petunjuk suara

Petunjuk, bantuan, dan pesan selesai memakai audio Indonesia yang disertakan di `public/audio/id/`, dengan manifest `src/content/narration-clips.ts`. Klip dibuat dari teks konten yang sama memakai suara sintetis Damayanti; bukan rekaman manusia. Pemutaran klip tidak memerlukan suara sistem browser atau layanan TTS runtime.

Setelah mengubah teks, jalankan `pnpm generate:narration` pada macOS yang menyediakan `say`, suara Damayanti, dan `afconvert`. Tes memeriksa bahwa semua instruksi/bantuan mempunyai file yang sesuai. Audio dapat dimatikan; kegagalan pemutaran mempunyai pesan dan batas waktu. Sintesis browser hanya fallback untuk teks yang belum mempunyai klip.
