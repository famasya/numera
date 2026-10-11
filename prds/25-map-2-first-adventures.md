# Peta 2: petualangan pertama

Status: 12 misi awal diimplementasikan. Bukti dan batas pengujian ada di [handoff](../docs/handoff.md).

## Cakupan dan state

Permintaan pengguna 11 Oktober 2026: mulai peta 2. Paket implementasi awal memakai Pulau Para Pembuat dengan empat wilayah, masing-masing tiga misi. Jumlah ini mengikuti dua belas brief berikut; bukan kuota akhir atau penyelesaian seluruh roadmap LT. Peta 1 tetap 48 misi.

Home memakai `?peta=pembuat`; `/` tanpa query tetap peta 1. Query `wilayah`, `orangtua`, dan `konsep` mempertahankan peta aktif. Route misi tetap `/<regionId>/<missionId>`; peta asal ditentukan dari wilayah. Back dan refresh mengikuti URL. Progres tetap versi 2 serta kunci lama; ID baru ditambahkan, tidak mengganti ID lama. Misi pertama setiap wilayah tersedia tanpa menamatkan peta 1. Replay/reset mengganti variasi; sesi aktif menyimpan variasi dan pekerjaan.

## Brief dan acceptance

Semua model deterministik; tidak ada angka skor atau batas waktu. Anak memanipulasi representasi, lalu memeriksa hasil. Kesalahan bisa diperbaiki tanpa menghapus bagian benar. Goal berikut adalah dukungan parsial, bukan klaim seluruh level terimplementasi.

| Misi / wilayah | Goal terkait | Input, tindakan, dan kondisi sah | Variasi serta bantuan |
| --- | --- | --- | --- |
| `measure-path` / Lembah Ukuran | LEN-06, PS-02 | Jalur enam satuan, lima keping dua satuan. Pilih keping lalu tempatkan pada posisi ujung-ke-ujung; tepat menutup jalur tanpa overlap atau keluar. Surplus boleh tersisa. Celah belum sah. | Replay jalur delapan satuan. Hint menyorot pangkal dan mengarahkan ke ujung keping terakhir; demonstrasi sebagian tidak menyelesaikan. |
| `measure-unit` / Lembah Ukuran | LEN-08, PS-05 | Pindahkan satu alat ukur dua satuan sepanjang jalur enam satuan; setiap penempatan harus mulai di ujung pengukuran sebelumnya. Ulangi dengan alat satu satuan, bandingkan jejak. Selesai setelah kedua alat mencapai ujung. | Replay panjang empat. Hint menyorot ujung terakhir; alat besar membutuhkan tiga/dua pengulangan, kecil enam/empat. |
| `measure-water` / Lembah Ukuran | VOL-03, PS-02 | Enam unit air di wadah lebar; tuangkan satu unit per tindakan ke wadah sempit dan kembalikan bila perlu. Volume total tetap; wadah tujuan kapasitas enam. Selesai saat semua isi berpindah, tinggi berbeda karena luas alas berbeda. | Replay empat unit. Wadah awal/tujuan berkapasitas enam; kelebihan transfer ditolak tanpa kehilangan volume. Hint memperlihatkan satu unit dan kedua wadah. |
| `data-votes` / Desa Data | DAT-06, DAT-07 | Enam kartu teman menunjukkan pilihan buah. Setiap identitas ditempatkan ke kategori pilihannya, tidak dapat diduplikasi. Selesai bila seluruh kasus tercatat benar. | Replay empat kasus dengan frekuensi seri. Hint membandingkan satu kartu dengan kategori; bukan counter jawaban otomatis. |
| `data-packing` / Desa Data | DAT-07, CNT-08, PS-03 | Data pilihan teman tetap terlihat. Anak menambah/mengurangi buah tiap kategori untuk membuat bekal tepat sesuai frekuensi, lalu memeriksa. Jumlah berlebih/kurang belum sah. | Distribusi 3/2/1 lalu 2/2/0, seri dan kategori kosong sah. Hint memasangkan satu kasus dengan satu buah. |
| `data-cross` / Desa Data | DAT-08 | Empat benda punya jenis dan warna. Anak menempatkan setiap identitas pada empat perpotongan warna×jenis. Satu atribut benar tetapi atribut lain salah belum sah. | Replay posisi awal/urutan benda berubah, kedua atribut tetap harus diperiksa. Hint menyorot header baris dan kolom. |
| `space-solids` / Bengkel Bangun Ruang | S3D-02, S3D-03 | Enam solid kubus/bola/silinder dapat diputar dan dikelompokkan berdasarkan jenis. Warna tidak menentukan jenis. Semua identitas masuk kelompok yang sesuai. | Replay orientasi awal berbeda. Hint menyoroti permukaan datar/lengkung; pengenalan benda fisik tetap pengamatan pendamping. |
| `space-faces` / Bengkel Bangun Ruang | S3D-04 | Kubus dengan enam face ID; putar pandangan dan tandai permukaan yang belum ditandai. Face belakang muncul dari pandangan lain. Selesai setelah enam ID unik ditandai; toggle tidak menduplikasi. | Replay sudut awal berbeda. Hint mengajak putar ke belakang; penandaan permukaan bukan bukti menghitung verbal. |
| `space-build` / Bengkel Bangun Ruang | C3D-06, C3D-07 | Dua tiang masing-masing dua kubus dan satu balok atas sepanjang tiga satuan membentuk gerbang. Slot bawah menopang slot atas; balok atas membutuhkan kedua tiang lengkap. Bagian dapat dilepas, pelepasan penyangga dengan bagian atas masih ada ditolak. | Replay tinggi model berubah. Hint mengarahkan ke penyangga, lalu bagian atas. Model susunan diskret, bukan fisika bebas. |
| `harbor-halves` / Pelabuhan Petualangan | FRC-02, FRC-03 | Satu roti persegi panjang berisi enam petak sama luas. Tandai setiap petak untuk satu dari dua penerima; keduanya harus mendapatkan separuh luas keseluruhan. Banyak pembagian diterima. | Replay empat petak; bukan pembagian kumpulan buah. Hint membandingkan bagian berwarna dengan keseluruhan tetap. |
| `harbor-change` / Pelabuhan Petualangan | ADD-03, PS-02 | Jumlah bekal awal tiga, gambar kebutuhan satu. Pindahkan benda antara bekal dan persediaan hingga tepat; tambah maupun ambil bisa dibalik. Benda tetap terlacak. | Replay awal dua, kebutuhan empat; perubahan turun/naik sungguh berbeda. Hint memasangkan kebutuhan dengan benda, tanpa persamaan wajib. |
| `harbor-map` / Pelabuhan Petualangan | ORI-07, PS-02 | Peta kecil menunjukkan tiga landmark, lokasi awal, dan lokasi tujuan; dunia memakai landmark sama pada petak besar. Anak memilih petak berdampingan hingga landmark tujuan. Hambatan tetap terlihat; dua jalur sah. | Replay tujuan landmark berbeda. Hint mencocokkan satu landmark peta dengan dunia, kemudian tetangga posisi kini. Bukan koordinat formal atau model ruang nyata. |

## Kontrak bersama

Setiap misi mempunyai tujuan konseptual dan alasan penting untuk orang tua, makna kegiatan, prompt, observasi, kegiatan nyata, dan rujukan primer. Konten ini muncul sebagai kartu Parent Help dan peta konsep. Dalam misi hanya guide aktif.

Snapshot menyimpan ID/variasi, susunan/isi/face ID/jejak, pilihan aktif, bantuan, status pemeriksaan, dan done/stats. Validasi snapshot menolak angka di luar batas, duplikasi posisi, serta state tak konsisten; completion lama tidak diubah menjadi mastery. Perubahan alat ukur menyimpan fase dan jejak sebelumnya.

Acceptance teknis: model benar/salah/alternatif pada kedua variasi, konservasi isi, syarat penyangga, enam face unik dari rotasi, serialisasi progres 48 ID lama+12 baru, route/query, deep link, refresh, replay, Parent Help, serta seluruh dua belas alur Chrome pada tablet. Uji browser terpisah dari tablet fisik/anak. Status bukti di handoff setelah implementasi.

Referensi: [requirements bersama](00-foundations.md), [LT/NRICH](README.md), [desain](../docs/map-2-design.md), [NRICH primer](../references/nrich-primary.md). Kode/brief ini tidak menyalin instruksi atau gambar sumber.

## Penyederhanaan interaksi

- Keping jalur memakai bentuk dan panjang yang sama di persediaan serta jalur. Pilih–sentuh dan drag tersedia; keping boleh dikembalikan.
- Alat ukur terlihat sejak awal, lokasi penempatan berikutnya mempunyai batas jelas, dan jejak alat besar tetap terlihat ketika alat diganti. Wadah diberi nama dan isi memakai warna gelap.
- Rak dua aturan menampilkan setiap benda di satu lokasi. Drag menyertakan preview; pilihan–sentuh serta keyboard tetap tersedia. Gambar jenis memakai gaya yang sama dengan benda, dan panah tujuan dapat disentuh tanpa mengenai benda yang sudah diletakkan.
- Pada misi semua sisi kubus, sentuhan hanya memasang tanda; sentuhan ulang tidak melepas tanda. Tombol samping memutar 90° dan tombol atas/bawah mengganti pandangan dengan animasi Motion. Drag/pinch tidak memutar atau memperbesar kubus pada misi ini. Reduced motion langsung memperbarui pandangan. Enter/Space menandai sisi depan; tombol putar dapat dipakai lewat keyboard. Tidak ada pilihan gambar sisi di bawahnya. ID sisi dan sudut tujuan tetap tersimpan. Eksplorasi drag/pinch pada kegiatan ruang lainnya dipertahankan.
- Panel Lumi berada di luar artwork yang bisa dipan agar tidak menutupi label wilayah. Palet, garis batas, fokus, dan ukuran kontrol memakai token bersama.

Klik kubus memakai event `onClick` React Three Fiber pada enam bidang hitbox 3D dengan ID tetap. Raycaster menggunakan koordinat client relatif terhadap bounds canvas. Garis dan penanda dekoratif tidak ikut raycast. Tidak memerlukan pasangan pointer-down/up atau identifikasi indeks segitiga untuk menentukan sisi.
