// Manifest awal peta 2; kegiatan original, dukungan goal parsial.
export const mapTwoMissions = [
  {
    id: "measure-path",
    region: "lembah-ukuran",
    title: "Jalur kincir",
    instruction: "Tutupi jalur dengan keping tanpa celah.",
    guide: "Mulai dari awal jalur. Sambungkan ujung keping.",
    concept: "Pengukuran panjang dengan satuan seragam",
    goalIds: ["LEN-06"],
    purpose: {
      goal: "Memahami panjang sebagai banyaknya satuan seragam yang tersusun tanpa celah.",
      why: "Dengan satuan yang sama ukurannya, anak dapat membandingkan panjang secara adil. Misalnya, mengukur pita memakai balok seukuran.",
    },
    parent: {
      meaning:
        "Keping dua satuan menutup jalur. Keping boleh tersisa; celah dan tumpang tindih belum memenuhi tujuan.",
      coach:
        "Tanyakan di mana keping berikutnya dimulai. Biarkan anak memperbaiki celah.",
      observe: "Apakah anak memperhatikan awal, ujung, dan ukuran satuan?",
      nextActivity: "Ukur pita dengan balok sama ukuran tanpa celah.",
      source: "nrichMeasure",
    },
  },
  {
    id: "measure-unit",
    region: "lembah-ukuran",
    title: "Alat ukur berjalan",
    instruction: "Pindahkan alat ukur sampai ujung jalur.",
    guide: "Letakkan alat mulai dari ujung jejak sebelumnya.",
    concept: "Pengulangan satuan dan hubungan ukuran satuan",
    goalIds: ["LEN-08"],
    purpose: {
      goal: "Memahami bahwa panjang tetap sama meskipun ukuran satuan dan jumlah pengulangannya berubah.",
      why: "Satuan yang lebih besar membutuhkan lebih sedikit pengulangan. Ini menjelaskan mengapa hasil pengukuran perlu menyebut satuannya.",
    },
    parent: {
      meaning:
        "Alat dua satuan digeser berulang, lalu alat satu satuan. Jejak kedua pengukuran tetap terlihat.",
      coach: "Tanyakan apakah jalurnya berubah ketika alat diganti.",
      observe:
        "Apakah anak memindahkan alat dari ujung terakhir dan membandingkan jejak kedua alat?",
      nextActivity:
        "Ukur meja dengan satu balok yang dipindah berulang, lalu dengan benda yang lebih panjang.",
      source: "nrichMeasure",
    },
  },
  {
    id: "measure-water",
    region: "lembah-ukuran",
    title: "Air untuk kincir",
    instruction: "Pindahkan semua air ke wadah sempit.",
    guide: "Tuangkan satu bagian. Air boleh dikembalikan.",
    concept: "Isi tetap sama meskipun wadahnya berubah",
    goalIds: ["VOL-03"],
    purpose: {
      goal: "Memahami bahwa banyaknya isi tetap ketika dipindahkan, meskipun tinggi permukaannya berubah.",
      why: "Wadah sempit dapat membuat air terlihat lebih tinggi. Membandingkan isi melalui pemindahan membantu memisahkan tinggi permukaan dari banyaknya air.",
    },
    parent: {
      meaning:
        "Setiap tuangan memindahkan satu bagian antara wadah lebar dan sempit. Luas alas berbeda, tetapi isi seluruhnya tetap. Model ini bukan simulasi aliran air.",
      coach:
        "Tanyakan apakah air bertambah setelah berpindah. Ajak anak mencoba mengembalikan isi.",
      observe:
        "Apakah anak membandingkan isi melalui pemindahan, bukan tinggi saja?",
      nextActivity:
        "Pindahkan air antara gelas lebar dan sempit di atas baki bersama orang tua.",
      source: "nrichPacking",
    },
  },
  {
    id: "data-votes",
    region: "desa-data",
    title: "Pilihan teman",
    instruction: "Kelompokkan kartu sesuai pilihan buah setiap teman.",
    guide: "Setiap teman punya satu kartu pilihan.",
    concept: "Satu kartu untuk satu teman",
    goalIds: ["DAT-06", "DAT-07"],
    purpose: {
      goal: "Memahami bahwa catatan mewakili kejadian dan setiap kejadian dicatat satu kali.",
      why: "Dengan catatan, anak tidak perlu menghafal kebutuhan. Misalnya, satu kartu untuk setiap teman mencatat buah yang dipilihnya.",
    },
    parent: {
      meaning:
        "Setiap kartu menunjukkan satu teman dan buah yang dipilihnya. Kartu boleh dipindah, tetapi jumlah teman tidak berubah.",
      coach: "Ajak anak mencocokkan kartu dengan teman dan kelompok buahnya.",
      observe:
        "Apakah semua teman tercatat satu kali, termasuk kelompok yang lebih sedikit?",
      nextActivity:
        "Catat pilihan buah tiga boneka dengan satu gambar per boneka.",
      source: "nrichCounting",
    },
  },
  {
    id: "data-packing",
    region: "desa-data",
    title: "Bekal dari catatan",
    instruction: "Siapkan buah sesuai kartu pilihan teman.",
    guide: "Bandingkan setiap kelompok kartu dengan bekalnya.",
    concept: "Menggunakan jumlah pilihan untuk menentukan kebutuhan",
    goalIds: ["DAT-07", "CNT-08"],
    purpose: {
      goal: "Menggunakan catatan yang ada untuk menentukan kebutuhan setiap kelompok.",
      why: "Data dapat menjadi dasar tindakan. Misalnya, jumlah pilihan apel menentukan berapa apel yang perlu disiapkan, termasuk saat dua kelompok sama banyak.",
    },
    parent: {
      meaning:
        "Catatan pilihan tetap terlihat. Bekal harus sesuai jumlah kartu setiap buah; kelompok kosong juga boleh.",
      coach:
        "Ajak anak memasangkan satu buah dengan satu kartu. Tanyakan bekal yang masih kurang.",
      observe:
        "Apakah anak memakai catatan, menerima jumlah yang sama, dan menyisakan kelompok kosong?",
      nextActivity:
        "Gunakan kartu pilihan boneka untuk menyiapkan bekal mainan.",
      source: "nrichCounting",
    },
  },
  {
    id: "data-cross",
    region: "desa-data",
    title: "Rak dua aturan",
    instruction: "Tempatkan benda sesuai jenis dan warna rak.",
    guide: "Periksa gambar di atas dan di samping rak.",
    concept: "Mengelompokkan benda menurut dua sifat sekaligus",
    goalIds: ["DAT-08"],
    purpose: {
      goal: "Memahami bahwa satu benda dapat memenuhi dua sifat sekaligus.",
      why: "Dua sifat dapat mempersempit pencarian. Misalnya, mencari balok merah berarti memeriksa jenis dan warnanya.",
    },
    parent: {
      meaning:
        "Empat petak menggabungkan baris warna dengan kolom jenis. Memenuhi satu sifat saja belum cukup.",
      coach: "Tanyakan jenis dan warna benda sebelum menentukan petaknya.",
      observe: "Apakah anak memeriksa gambar di kedua sisi rak untuk benda yang sama?",
      nextActivity: "Susun mainan pada rak menurut jenis dan warna sekaligus.",
      source: "nrichPacking",
    },
  },
  {
    id: "space-solids",
    region: "bengkel-ruang",
    title: "Benda bengkel",
    instruction: "Kelompokkan kubus, bola, dan silinder.",
    guide: "Putar benda untuk melihat sisinya.",
    concept: "Mengenali bangun ruang dari beberapa arah",
    goalIds: ["S3D-02", "S3D-03"],
    purpose: {
      goal: "Mengenali bangun ruang berdasarkan sisi dan bentuknya dari beberapa arah.",
      why: "Mengenali sifat bangun ruang membantu anak memilih wadah dan menyusun benda nyata. Benda yang diputar tetap jenis yang sama.",
    },
    parent: {
      meaning:
        "Kubus, bola, dan silinder digambarkan dengan kedalaman serta kontrol putar. Warna tidak menentukan jenis.",
      coach: "Tanyakan sisi mana yang datar dan mana yang melengkung.",
      observe:
        "Apakah anak membandingkan sisinya dari beberapa arah, bukan warnanya saja?",
      nextActivity:
        "Kelompokkan kotak kubus, bola, dan kaleng bersama orang tua.",
      source: "nrichPacking",
    },
  },
  {
    id: "space-faces",
    region: "bengkel-ruang",
    title: "Semua sisi kubus",
    instruction: "Tandai setiap sisi kubus.",
    guide: "Putar kubus untuk menemukan sisi yang belum ditandai.",
    concept: "Menelusuri semua sisi bangun",
    goalIds: ["S3D-04"],
    purpose: {
      goal: "Mengembangkan kemampuan melacak bagian yang terlihat dan tersembunyi tanpa menghitungnya dua kali.",
      why: "Memberi tanda membantu anak menjaga bagian yang sudah diperiksa. Misalnya, anak dapat memeriksa semua sisi kotak dengan memutarnya.",
    },
    parent: {
      meaning:
        "Keenam sisi selalu sama. Sisi belakang dan bawah bisa dilihat dengan memutar kubus; tanda tetap menempel pada sisinya.",
      coach:
        "Tanyakan sisi mana yang belum terlihat. Anak boleh menandai lalu memutar.",
      observe:
        "Apakah anak mengenali sisi yang sudah ditandai saat muncul kembali? Game tidak membuktikan kemampuan menghitung dengan suara.",
      nextActivity:
        "Tempel tanda yang bisa dilepas pada setiap sisi kotak kubus.",
      source: "nrichWrapping",
    },
  },
  {
    id: "space-build",
    region: "bengkel-ruang",
    title: "Gerbang balok",
    instruction: "Bangun kedua tiang lalu pasang balok atas.",
    guide: "Balok atas membutuhkan kedua tiang sebagai penyangga.",
    concept: "Hubungan bagian dan penyangga dalam struktur",
    goalIds: ["C3D-06", "C3D-07"],
    purpose: {
      goal: "Memahami bahwa posisi dan penyangga memengaruhi susunan bangunan.",
      why: "Rencana bangunan perlu mempertimbangkan bagian yang menopang bagian lain. Anak dapat mencoba membuat gerbang dengan balok nyata.",
    },
    parent: {
      meaning:
        "Model sederhana: dua tiang dan satu balok panjang membentuk gerbang. Tiang harus selesai sebelum balok atas; ini bukan simulasi kestabilan fisik.",
      coach: "Tanyakan bagian mana yang perlu dibangun dahulu.",
      observe:
        "Apakah anak mempertahankan bentuk gerbang dan memeriksa kedua penyangganya?",
      nextActivity: "Bangun gerbang dari balok besar di lantai.",
      source: "nrichPacking",
    },
  },
  {
    id: "harbor-halves",
    region: "pelabuhan-petualangan",
    title: "Roti untuk dua teman",
    instruction: "Bagikan roti agar kedua bagian sama besar.",
    guide: "Pilih teman, lalu tandai petak bagian rotinya.",
    concept: "Membagi dua sama besar dari keseluruhan yang sama",
    goalIds: ["FRC-02", "FRC-03"],
    purpose: {
      goal: "Memahami bahwa setengah berarti satu dari dua bagian yang sama besar dari keseluruhan yang sama.",
      why: "Jumlah potongan saja tidak menjamin bagian sama besar. Kalau dibagi dari roti yang sama, anak bisa melihat langsung apakah bagiannya adil.",
    },
    parent: {
      meaning:
        "Satu roti persegi panjang dibagi menjadi petak-petak yang sama luas. Banyak cara pembagian boleh; roti utuhnya tetap.",
      coach: "Tanyakan apakah kedua teman mendapat bagian yang sama besar.",
      observe:
        "Apakah anak menghubungkan setiap bagian dengan roti utuhnya, bukan hanya warna?",
      nextActivity:
        "Lipat kertas persegi panjang menjadi dua bagian yang sama besar.",
      source: "nrichSharing",
    },
  },
  {
    id: "harbor-change",
    region: "pelabuhan-petualangan",
    title: "Bekal yang berubah",
    instruction: "Sesuaikan jumlah bekal dengan jumlah titik.",
    guide: "Pindahkan benda antara bekal dan persediaan.",
    concept: "Perubahan jumlah melalui tambah dan ambil",
    goalIds: ["ADD-03"],
    purpose: {
      goal: "Memahami hubungan antara jumlah awal, perubahan, dan jumlah akhir.",
      why: "Kebutuhan dapat bertambah atau berkurang. Anak dapat menentukan apa yang perlu diubah ketika jumlah teman yang mendapat bekal berubah.",
    },
    parent: {
      meaning:
        "Benda berpindah antara persediaan dan bekal; saat bermain ulang, tugas berganti antara mengurangi tiga menjadi satu dan menambah dua menjadi empat.",
      coach: "Tanyakan apakah bekal perlu bertambah atau berkurang.",
      observe: "Apakah anak menghubungkan perubahan dengan jumlah tujuan?",
      nextActivity:
        "Siapkan bekal untuk boneka lalu ubah jumlah boneka yang ikut.",
      source: "nrichSharing",
    },
  },
  {
    id: "harbor-map",
    region: "pelabuhan-petualangan",
    title: "Peta pelabuhan",
    instruction: "Bantu Lumi menuju tempat yang ditandai pada peta kecil.",
    guide: "Cocokkan gambar penanda pada peta dengan tempat di pelabuhan.",
    concept: "Menghubungkan peta dengan lokasi",
    goalIds: ["ORI-07"],
    purpose: {
      goal: "Menghubungkan posisi pada peta bergambar dengan posisi penanda di pelabuhan.",
      why: "Benda penanda menjadi acuan untuk menemukan tempat. Anak dapat mencocokkan gambar denah sederhana dengan letak benda di ruangan.",
    },
    parent: {
      meaning:
        "Peta kecil dan pelabuhan memakai susunan tiga penanda yang sama. Tujuan ditandai pada peta; anak bergerak melalui petak yang berdampingan.",
      coach: "Tanyakan penanda mana yang sama pada peta dan pelabuhan.",
      observe:
        "Apakah anak menggunakan posisi penanda untuk menentukan arah perjalanan?",
      nextActivity:
        "Gambar denah tiga benda di meja lalu cari tempat yang ditandai.",
      source: "reasoning",
    },
  },
] as const;
export type MapTwoMissionId = (typeof mapTwoMissions)[number]["id"];
export const isMapTwoMission = (id: string): id is MapTwoMissionId =>
  mapTwoMissions.some((m) => m.id === id);
