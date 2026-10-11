# Peta 2: interaksi langsung dengan benda

Status: prioritas P1 untuk `measure-water` sudah diimplementasikan dan diuji lewat Chrome pada 11 Oktober 2026. Interaksi P2/P3/berikutnya masih berupa requirements. Penempatan: **Peta 2 — Pulau Para Pembuat**. Ini peningkatan misi yang sudah ada, bukan penambahan misi atau coverage kurikulum. Batas verifikasi tercatat di [handoff](../docs/handoff.md).

## Masalah dan hasil yang dituju

Pada `/lembah-ukuran/measure-water`, tombol memindahkan satu bagian air antara dua gambar SVG. Anak belum dapat mengangkat atau memiringkan wadah dan melihat aliran mengikuti tindakannya. Perubahan yang dituju: anak memanipulasi wadah secara langsung, menghentikan tuangan, dan mengembalikan isi untuk membandingkan kedua wadah.

Interaksi mengikuti konsep matematika. Three.js/React Three Fiber dipakai ketika kedalaman, bentuk wadah, atau penyangga membantu penalaran. Kegiatan panjang, data, dan pembagian luas tetap dapat memakai 2D. [Brief awal](25-map-2-first-adventures.md) menjadi baseline perilaku yang sudah tersedia; dokumen ini menjelaskan perubahan berikutnya.

## Prioritas dan penempatan

| Prioritas           | Wilayah / ID misi                                                                   | Requirement interaksi                                                                                                                               | Representasi / goal terkait                                                                             |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| P1                  | Lembah Ukuran / `measure-water`                                                     | Tarik pegangan untuk mengangkat dan memiringkan wadah; hentikan tuangan lalu tuangkan kembali.                                                      | 3D, VOL-03, PS-02. Detail delivery pertama di bawah.                                                    |
| P2                  | Bengkel Bangun Ruang / `space-build`                                                | Angkat balok dari persediaan dan susun pada penyangga; lepaskan kembali bagian atas sebelum penyangga.                                              | 3D, C3D-06/07. Target penempatan diskret; bukan tumpukan bebas.                                         |
| P3                  | Bengkel Bangun Ruang / `space-solids`                                               | Putar benda dan coba gerakkan pada baki sebelum mengelompokkan. Bola menggelinding; kubus bergeser; silinder berbeda ketika berdiri atau rebah.     | 3D, S3D-02/03. Gerak yang dibatasi dan dapat diulang; bukan penilaian berdasarkan jarak atau kecepatan. |
| Pertahankan         | Bengkel Bangun Ruang / `space-faces`                                                | Klik sisi memasang tanda; tombol khusus memutar. Jangan menggabungkan drag putaran dengan penandaan.                                                | 3D, S3D-04. Perilaku sekarang dipertahankan.                                                            |
| Berikutnya          | Pelabuhan Petualangan / `harbor-halves`                                             | Buat garis potong pada batas petak, pisahkan bagian, lalu bandingkan luas untuk dua penerima. Pembagian petak yang sudah ada tetap dapat digunakan. | 2D, FRC-02/03. Semua pembagian sama luas tetap sah.                                                     |
| Berikutnya          | Lembah Ukuran / `measure-path`, `measure-unit`                                      | Perjelas seret keping/alat, pangkal, ujung sebelumnya, dan jejak penempatan.                                                                        | 2D, LEN-06/08. Memperbaiki interaksi yang sudah ada; 3D tidak wajib.                                    |
| Berikutnya          | Desa Data / `data-votes`, `data-packing`, `data-cross`; Pelabuhan / `harbor-change` | Pindahkan benda langsung ke kategori, keranjang, atau rak; tiap benda tetap mempunyai identitas tunggal.                                            | 2D, DAT-06/07/08, CNT-08, ADD-03. Target besar dan pekerjaan benar tetap tersedia.                      |
| Eksplorasi tertunda | Pelabuhan Petualangan / `harbor-map`                                                | Gerakkan Lumi di dunia berkamera tetap sambil mencocokkan landmark pada peta kecil.                                                                 | ORI-07. Kebutuhan 3D harus ditinjau melalui prototipe; belum menjadi syarat delivery.                   |

P2/P3 memerlukan rincian model, variasi, dan acceptance sebelum implementasi. Urutan ini bukan izin mengimplementasikan seluruh daftar sekaligus.

## P1: Air untuk kincir

### Tujuan dan alur anak

Tujuan untuk orang tua: memahami bahwa banyaknya isi tetap saat dipindahkan, walaupun tinggi permukaannya berubah. Misi tetap mendukung VOL-03 secara parsial; menyelesaikan transfer bukan bukti anak memahami konservasi isi.

1. Tampilkan wadah lebar berisi air dan wadah sempit kosong pada jarak tuang di atas baki. Kamera tetap; kedua alas dan permukaan air terlihat bersamaan.
2. Anak menarik pegangan ke atas. Wadah terangkat dan miring; kedua wadah sudah berada pada jarak yang memungkinkan air mengalir ke tujuan. Menyentuh badan wadah memilih sisi yang menjadi sumber.
3. Pegangan mengatur kemiringan. Kamera tidak menerima drag/pinch putaran. Kedua wadah tidak perlu dipindahkan secara horizontal sebelum menuang.
4. Kemiringan melewati batas tuang membuat aliran terlihat dari bibir sumber ke dalam wadah tujuan. Kembali tegak, melepas jari, pointer cancel, atau keluar halaman menghentikan aliran segera.
5. Isi sumber berkurang dan tujuan bertambah bersamaan. Setelah dilepas, wadah kembali tegak pada tempatnya; jumlah yang telah dipindahkan tetap.
6. Anak boleh memindahkan kembali air dari wadah sempit ke wadah lebar. Tombol “Periksa isi” tersedia ketika wadah sudah tegak dan tidak sedang dipindahkan.

Instruksi utama tetap “Pindahkan semua air ke wadah sempit.” Petunjuk memakai kalimat pendek seperti “Tarik pegangan untuk menuang air.” dan “Lepaskan pegangan untuk berhenti.” Petunjuk audio harus memakai teks yang sama dan dibuat ulang bila konten berubah. Penyelesaian tidak membacakan feedback suara.

### Model isi dan rendering

- Variasi awal tetap enam atau empat bagian air. **Kedua wadah sama tinggi.** Perbedaan hanya pada lebar dan luas penampang; wadah sempit kira-kira 70% lebar wadah besar (sekitar setengah luas penampang). Jumlah air untuk misi menempati sekitar 40% tinggi wadah lebar dan 80% wadah sempit saat jumlahnya sama. Air tujuan tetap punya ruang di atas permukaan; model tidak menampilkan wadah penuh atau meluap.
- Volume disimpan sebagai bilangan bulat dalam satuan internal yang lebih kecil dari bagian awal. Misalnya satu bagian dipecah menjadi sejumlah langkah tetap; faktor final ditetapkan saat implementasi. Transfer selalu mengurangi sumber dan menambah tujuan dengan jumlah identik. Kedua gambar air memakai satu skala volume per satuan luas; kapasitas misi dibatasi agar tinggi akhir aman pada wadah sempit. Tidak memakai penjumlahan pecahan floating point sebagai state volume.
- Kemiringan menentukan laju transfer melalui aturan terbatas. Perubahan volume memakai langkah simulasi tetap berdasarkan waktu aktif, bukan jumlah frame; waktu tidak menjadi skor, deadline, atau bukti pemahaman.
- Animasi aliran dan posisi wadah mengikuti state volume. Pada visual interaksi pertama, bidang air ikut miring di dalam wadah supaya hubungan antara tarikan dan tuangan terlihat jelas; geometri volume dan validasi tetap deterministik. Aliran keluar dari sisi mulut yang mengarah ke tujuan, bukan dari titik dekoratif tetap.
- Tahap pertama tidak mempunyai tumpahan, kehilangan air, atau overflow. Di luar posisi tuang yang sah, air tidak mengalir dan tujuan ditunjukkan secara visual. Anak dapat memperbaiki posisi tanpa hukuman.
- Validasi selesai tetap sumber kosong dan seluruh volume berada di wadah sempit, setelah pemeriksaan eksplisit. Tuang balik boleh dilakukan sebelum pemeriksaan berhasil. Tidak ada simulasi cairan penuh atau engine fisika yang menentukan jawaban.

### Kontrol, akses, dan tampilan

- Drag utama memakai satu pointer. Jangan mewajibkan pinch, multitouch, double click, atau ketepatan sudut kecil. Target dan pegangan minimal 48 CSS pixel.
- Sediakan alternatif pilih–sentuh: pilih wadah, sentuh tujuan, lalu tahan kontrol “Tuangkan air”; melepas kontrol menghentikan aliran. Keyboard memakai kontrol HTML yang sama melalui Enter/Space. Pointer cancel, keyup, blur, dan unmount harus menghentikan transfer; menahan tombol tidak menghasilkan beberapa loop bersamaan.
- Air berwarna gelap dan kontras terhadap wadah transparan serta baki terang. Jangan menutup permukaan air dengan label atau tangan dekoratif. Wadah memiliki tinggi dan dasar visual yang sama, tetapi lebar berbeda dengan jelas; angka volume tidak wajib bagi anak.
- Kamera tetap dan pembesaran benda ditetapkan oleh layout. Aktivitas harus muat pada tablet tanpa scroll halaman atau mengecilkan seluruh game. Warna, ukuran kontrol, dan gerak memakai token bersama.
- Reduced motion mengurangi riak dan gerak kembali ke tempat. Perubahan isi serta tanda tuang tetap terlihat; tidak boleh membuat kegiatan kehilangan informasi.
- Jika WebGL tidak tersedia atau scene gagal dimuat, pertahankan kegiatan 2D dan transfer satu bagian melalui tombol, dengan tujuan, konservasi isi, dan progres yang sama. Loading/error tidak boleh membuat misi tidak bisa dilanjutkan.

### Sesi, kompatibilitas, dan pendampingan

- Pertahankan route, mission ID, variasi, completion, catatan, serta kunci penyimpanan lama. Snapshot lama `[sumber, tujuan]` dikonversi ke satuan internal tanpa mengubah jumlah atau menghapus sesi.
- Snapshot baru menyimpan versi model, isi kedua wadah, variasi, bantuan, percobaan, dan selesai. Posisi seret serta kemiringan adalah state sementara: refresh melanjutkan jumlah terakhir dengan wadah tegak; tidak memulai aliran otomatis.
- Pembatalan gesture atau perpindahan halaman menyimpan isi terakhir yang sah. Reload berulang tidak menggandakan atau mengurangi isi. Snapshot tidak valid mengikuti penanganan sesi yang ada; tidak menghapus completion lama.
- Satu gesture/menuang yang disengaja dihitung sebagai satu tindakan, bukan satu percobaan per langkah simulasi. Penggunaan alternatif tombol mempunyai pencatatan yang setara. Tidak memakai durasi atau kecepatan untuk menilai kesiapan.
- Parent Help dan peta konsep tetap menampilkan tujuan konseptual dan alasan penting. Kartu kegiatan diperbarui untuk menuang interaktif. Prompt: “Apakah air bertambah setelah dipindahkan?” Observasi: apakah anak memakai pemindahan balik untuk membandingkan, bukan tinggi saja. Game tidak dapat memastikan alasan anak tanpa pengamatan orang tua.
- Pertahankan rujukan LT/NRICH dari brief awal dan kegiatan nyata dengan gelas di atas baki. Menuang digital adalah desain original Numera; jangan menyatakan Packing sebagai sumber simulasi aliran atau validasi konservasi isi.

## Acceptance P1

| Area       | Bukti yang diperlukan sebelum status implemented                                                                                                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Konservasi | Pada kedua variasi, setiap transfer dan tuang balik menjaga total persis; sumber tidak negatif, tujuan tidak melebihi kapasitas. Uji sumber kosong, tujuan penuh, pembatalan, dan transfer berulang.                             |
| Aliran     | Volume yang dipindahkan pada durasi/sudut sama konsisten pada laju frame berbeda; jeda tab tidak dihitung sebagai waktu menuang dan tidak menghasilkan transfer besar saat kembali.                                              |
| Gesture    | Chrome: menarik pegangan memiringkan wadah dan menuang; melepas menghentikan; tuang balik bekerja. Air terlihat mengikuti kemiringan wadah. Gesture tidak memutar kamera atau mengaktifkan target di belakangnya.                |
| Alternatif | Alur pilih–sentuh dan keyboard menyelesaikan kedua variasi; tahan/lepas, blur, dan pergantian input tidak meninggalkan aliran aktif.                                                                                             |
| Sesi       | Refresh saat sebagian isi berpindah, navigasi pergi/kembali, migrasi snapshot lama, dan replay mempertahankan kontrak volume dan progres.                                                                                        |
| Matematika | Wadah sempit lebih tinggi untuk isi sama; tinggi mengikuti volume/geometri. Hasil parsial belum selesai; semua isi di tujuan dapat diperiksa; tuang balik tetap sah.                                                             |
| Tampilan   | Chrome pada tablet landscape dan portrait dengan lebar minimal 768 CSS pixel: wadah, pegangan, petunjuk, dan pemeriksaan terlihat tanpa scroll halaman, overlap, atau target kecil. Reduced motion dan fallback WebGL diperiksa. |
| Integrasi  | Tes logika, typecheck, build, serta alur Chrome lulus. Petunjuk audio manual tetap bekerja; selesai tidak memutar narasi. Parent Help hanya menampilkan panduan misi aktif.                                                      |
| Perangkat  | Sentuhan tablet fisik serta pengamatan anak dicatat terpisah dari Chrome desktop; status belum diuji tidak boleh ditulis sebagai bukti kenyamanan.                                                                               |

## Delivery dan batas

Delivery pertama hanya P1, setelah implementasi diminta. P1 sudah diimplementasikan sebagai interaksi menuang dengan pegangan pada wadah. Sebelum status implemented penuh, verifikasi seluruh kriteria acceptance, termasuk variasi, sesi, input alternatif, fallback, tampilan tablet, dan perangkat fisik.

P2 memakai slot dan penyangga deterministik dengan preview penempatan sah; P3 memakai percobaan gerak terkontrol dengan reset yang dapat diulang. Keduanya tidak menambahkan fisika bebas, kegagalan karena motorik, atau klaim mastery. Pemotongan roti, peningkatan data/panjang, dan dunia pelabuhan memerlukan brief lanjutan sebelum delivery.

Rujukan internal: [fondasi](00-foundations.md), [volume](18-volume.md), [bangun ruang](12-3d-shapes.md), [komposisi ruang](13-composing-3d-shapes.md), [NRICH](21-problem-solving.md), [pedagogi](../docs/pedagogy.md). Rujukan teknis: [event React Three Fiber](https://r3f.docs.pmnd.rs/api/events), mendukung interaksi pointer pada mesh; perilaku menuang dan model volume adalah requirements Numera.
