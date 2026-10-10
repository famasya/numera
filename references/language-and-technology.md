# Bahasa dan teknologi

- [ASD-STE100 Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf), bagian 5, serta [penjelasan resmi](https://asd-ste100.org/about.html): dasar kalimat prosedural pendek, kata kerja langsung, satu instruksi per kalimat, dan istilah konsisten. Ditelaah pada sesi awal. Standar bahasa Inggris diadaptasi ke bahasa Indonesia; tidak mengklaim kepatuhan formal. Batas sepuluh kata adalah aturan proyek. Lihat [language.md](../docs/language.md).
- [TanStack Start: build from scratch](https://tanstack.com/start/latest/docs/framework/react/build-from-scratch) dan [hosting](https://tanstack.com/start/latest/docs/framework/react/guide/hosting): rujukan setup dan adapter hosting. Implementasi aktual dan versi terkunci ada dalam package.json/pnpm-lock.yaml; dokumen latest dapat berubah.
- Browser speech synthesis menggunakan voice `id` yang terpasang. Kode aktual berada di src/components/Audio.ts. Ketersediaan suara tidak dijamin oleh build atau Chrome desktop. Tidak menggunakan microphone atau suara bahasa lain sebagai fallback. Visual dan bunyi pendek tetap mendukung permainan.

Untuk perubahan API/dependensi, verifikasi dokumentasi resmi terhadap versi proyek. Jangan mengganti TanStack Start dengan Vite SPA atau menambahkan server custom untuk menyelesaikan masalah tanpa memeriksa adapter standar dahulu.
