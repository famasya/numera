import type { MissionId } from "./missions";
import type { RegionId } from "./regions";

// Untuk orang tua: kemampuan konseptual yang dikembangkan, bukan instruksi game.
// Tujuan desain dan contoh penggunaan bukan klaim hasil belajar anak.
const importance = {
  count:
    "Hitungan berguna untuk mengetahui berapa banyak benda yang tersedia. Misalnya, anak dapat memeriksa jumlah sendok sebelum menyiapkan meja.",
  parts:
    "Satu jumlah dapat dibentuk dari bagian yang berbeda. Ini memberi cara untuk membagi bekal atau menggabungkan benda tanpa selalu memulai hitungan dari awal.",
  pattern:
    "Aturan berulang memberi dasar untuk memperkirakan apa yang datang berikutnya dan memeriksa urutan. Anak dapat mencoba aturan yang sama dengan manik-manik atau gerakan.",
  matching:
    "Pasangan satu-satu membantu memeriksa kecukupan tanpa harus menyebut angka. Misalnya, setiap orang membutuhkan satu gelas.",
  compare:
    "Perbandingan membantu menentukan mana yang kurang, lebih, atau sama. Misalnya, anak dapat memeriksa apakah dua kelompok punya cukup bekal.",
  production:
    "Jumlah kebutuhan berbeda dari jumlah persediaan. Anak belajar mengambil secukupnya, misalnya tiga sendok dari laci yang berisi banyak sendok.",
  sort: "Aturan pengelompokan membantu menata dan menemukan benda. Misalnya, mainan dapat dipisahkan menurut jenis dengan aturan yang sama untuk seluruh koleksi.",
  missing:
    "Memahami bagian yang belum ada membantu menentukan kebutuhan tambahan. Misalnya, dua gelas sudah tersedia dan masih diperlukan gelas untuk tiga teman lain.",
  repair:
    "Memeriksa aturan memberi alasan untuk memperbaiki susunan. Anak dapat menunjukkan bagian yang perlu diganti sambil mempertahankan bagian yang sudah sesuai.",
  sharing:
    "Pembagian sama banyak memberi cara memeriksa keadilan. Anak dapat membagi bekal satu per satu, lalu membandingkan bagian setiap teman.",
  create:
    "Membuat aturan memberi kesempatan mengambil keputusan dan memeriksa konsistensinya. Pola yang berbeda dapat sama-sama sah jika aturan masing-masing tetap diikuti.",
  transfer:
    "Aturan dapat tetap sama saat bendanya berubah. Misalnya, pola dua warna dapat menjadi gerakan tepuk dan sentuh bahu; anak memperhatikan hubungan antarbagian.",
  resort:
    "Satu benda dapat termasuk kelompok berbeda menurut pertanyaan yang dipakai. Misalnya, balok merah dapat dikelompokkan bersama benda merah atau bersama semua balok.",
  shape:
    "Sifat bentuk membantu mengenali benda meskipun warna atau arahnya berubah. Anak dapat mencari kepingan yang cocok dengan lubang saat merapikan mainan.",
  size: "Ukuran dan jenis menjawab pertanyaan berbeda. Misalnya, dua kotak sama-sama berbentuk persegi, tetapi hanya kotak yang lebih besar cukup untuk sebuah benda.",
  assembly:
    "Bagian dapat disusun menjadi satu keseluruhan dengan posisi yang sesuai. Ini memberi pengalaman untuk menyusun puzzle, membuat gambar, dan membicarakan letak bagian.",
  turn: "Memperkirakan putaran membantu menyesuaikan arah sebelum mencoba. Misalnya, kepingan puzzle perlu diputar agar sisinya cocok dengan ruang kosong.",
  mirror:
    "Pantulan menghubungkan arah dan jarak terhadap garis cermin. Anak dapat membandingkan bentuk kertas dengan bayangannya pada cermin nyata.",
  cover:
    "Kecocokan tiap bagian memengaruhi ruang yang tersisa. Anak dapat mencoba menutup bidang dengan kepingan dan memeriksa celah; ini memberi konteks awal untuk luas.",
  plan: "Rencana dapat diperiksa dan diubah memakai informasi baru. Misalnya, anak mencari jalan lain ketika jalur menuju tempat bermain terhalang.",
  sequence:
    "Urutan tindakan dapat menentukan apakah tujuan tercapai. Misalnya, mengambil bahan mendahului membuat bekal; beberapa langkah lain dapat memiliki urutan yang berbeda.",
  equality:
    "Kesetaraan ditentukan oleh jumlah yang dibandingkan. Anak dapat memasangkan benda untuk memeriksa dua bagian yang sama; bobot titik game tetap satuan rekaan.",
  constraints:
    "Sebuah pilihan perlu memenuhi semua syarat yang berlaku. Anak berlatih memeriksa kembali pilihan, misalnya mencari benda yang jenis dan ukurannya sama-sama cocok.",
};

export const missionPurpose = {
  counting: {
    goal: "Memahami hubungan satu-satu dan bahwa hasil hitungan menyatakan jumlah seluruh benda.",
    why: importance.count,
  },
  composition: {
    goal: "Memahami bahwa satu jumlah dapat diuraikan menjadi beberapa pasangan bagian yang berbeda.",
    why: importance.parts,
  },
  patterns: {
    goal: "Mengenali bagian yang berulang sebagai dasar untuk memperkirakan kelanjutan pola.",
    why: importance.pattern,
  },
  matching: {
    goal: "Memahami bahwa pasangan satu-satu dapat digunakan untuk memeriksa kecukupan.",
    why: importance.matching,
  },
  compare: {
    goal: "Memahami hubungan lebih banyak, lebih sedikit, dan sama banyak antara dua kelompok.",
    why: importance.compare,
  },
  orders: {
    goal: "Menghubungkan jumlah yang diminta dengan banyaknya benda yang perlu diambil.",
    why: importance.production,
  },
  sorting: {
    goal: "Memahami bahwa jenis benda dapat menjadi dasar pengelompokan yang konsisten.",
    why: importance.sort,
  },
  missing: {
    goal: "Memahami hubungan antara jumlah yang sudah ada, bagian yang belum ada, dan jumlah keseluruhan.",
    why: importance.missing,
  },
  growing: {
    goal: "Memahami urutan jumlah melalui perbandingan kelompok yang berdekatan.",
    why: importance.compare,
  },
  repair: {
    goal: "Mengenali penyimpangan dari aturan dan menggunakan aturan tersebut untuk menentukan perbaikan.",
    why: importance.repair,
  },
  sharing: {
    goal: "Memahami bahwa pembagian sama banyak menghasilkan bagian yang setara untuk setiap penerima.",
    why: importance.sharing,
  },
  "free-pattern": {
    goal: "Mengembangkan kemampuan menentukan aturan sendiri dan menjaga konsistensinya.",
    why: importance.create,
  },
  "forest-copy": {
    goal: "Mengenali struktur berulang dan menjaga urutan hubungan antarbagian.",
    why: importance.pattern,
  },
  "forest-next": {
    goal: "Menggunakan keteraturan yang sudah diketahui untuk memperkirakan bagian berikutnya.",
    why: importance.pattern,
  },
  "forest-gap": {
    goal: "Menyimpulkan bagian yang belum diketahui dari hubungan sebelum dan sesudahnya.",
    why: importance.pattern,
  },
  "forest-size": {
    goal: "Memahami bahwa pengulangan dapat didasarkan pada ukuran, bukan hanya warna atau jenis.",
    why: importance.pattern,
  },
  "forest-transfer": {
    goal: "Memahami bahwa aturan yang sama dapat muncul pada benda atau representasi yang berbeda.",
    why: importance.transfer,
  },
  "forest-pairs": {
    goal: "Memahami bahwa satu bagian berulang dapat memuat unsur yang muncul lebih dari sekali.",
    why: importance.pattern,
  },
  "forest-double": {
    goal: "Memahami bahwa posisi unsur yang berulang di dalam satu bagian menentukan aturan pola.",
    why: importance.pattern,
  },
  "forest-three": {
    goal: "Mengenali batas satu bagian berulang dan urutan unsur di dalamnya.",
    why: importance.pattern,
  },
  "forest-repair": {
    goal: "Mengembangkan kemampuan memeriksa konsistensi suatu urutan berdasarkan aturannya.",
    why: importance.repair,
  },
  "forest-colors": {
    goal: "Memahami bahwa benda berbeda jenis dapat memiliki sifat warna yang sama.",
    why: importance.sort,
  },
  "forest-types": {
    goal: "Memahami bahwa keanggotaan kelompok berubah ketika dasar pengelompokannya berubah.",
    why: importance.resort,
  },
  "forest-create": {
    goal: "Mengembangkan kemampuan membuat keteraturan dan menjelaskan bagian yang diulang.",
    why: importance.create,
  },
  "shape-shadows": {
    goal: "Mengenali bentuk berdasarkan ciri tepi dan sisinya.",
    why: importance.shape,
  },
  "shape-sizes": {
    goal: "Memahami bahwa ukuran dan jenis bentuk merupakan sifat yang berbeda.",
    why: importance.size,
  },
  "shape-turned": {
    goal: "Memahami bahwa jenis bentuk tetap sama meskipun orientasi atau panjang sisinya berubah.",
    why: importance.shape,
  },
  "shape-house": {
    goal: "Memahami hubungan bagian dan keseluruhan dalam susunan bentuk.",
    why: importance.assembly,
  },
  "shape-boat": {
    goal: "Memahami bahwa bentuk dan orientasi bagian menentukan kecocokannya dalam suatu susunan.",
    why: importance.assembly,
  },
  "shape-rocket": {
    goal: "Memahami hubungan posisi antarbagian, termasuk di dalam, di atas, dan di samping.",
    why: importance.assembly,
  },
  "shape-turn": {
    goal: "Membayangkan perubahan orientasi suatu bentuk akibat seperempat putaran.",
    why: importance.turn,
  },
  "shape-sails": {
    goal: "Memahami bahwa putaran mengubah orientasi tanpa mengubah jenis bentuk.",
    why: importance.turn,
  },
  "shape-mirror": {
    goal: "Memahami bahwa pantulan membalik orientasi dan mempertahankan jarak terhadap garis cermin.",
    why: importance.mirror,
  },
  "shape-window": {
    goal: "Mengenali hubungan simetri melalui pasangan bagian pada kedua sisi garis cermin.",
    why: importance.mirror,
  },
  "shape-floor": {
    goal: "Memahami bahwa suatu bidang dapat tersusun dari bagian yang menutupnya tanpa celah atau tumpang tindih.",
    why: importance.cover,
  },
  "shape-bridge": {
    goal: "Mengembangkan penalaran tentang hubungan bentuk bagian dengan ruang yang tersisa.",
    why: importance.cover,
  },
  "tower-path": {
    goal: "Mengembangkan kemampuan merencanakan langkah dengan mempertimbangkan posisi dan hambatan.",
    why: importance.plan,
  },
  "tower-detour": {
    goal: "Menggunakan informasi baru untuk meninjau dan mengubah strategi.",
    why: importance.plan,
  },
  "tower-key": {
    goal: "Memahami bahwa beberapa langkah perlu dilakukan dalam urutan tertentu untuk mencapai tujuan.",
    why: importance.sequence,
  },
  "tower-even": {
    goal: "Memahami kesetaraan dua kelompok melalui perbandingan jumlahnya.",
    why: importance.equality,
  },
  "tower-weights": {
    goal: "Memahami bahwa beberapa bagian dapat digabungkan menjadi jumlah yang setara dengan bagian lain.",
    why: importance.parts,
  },
  "tower-lights": {
    goal: "Menalar kombinasi bagian yang dapat membentuk jumlah tertentu.",
    why: importance.production,
  },
  "tower-before": {
    goal: "Memahami bahwa satu hubungan urutan dapat dipenuhi oleh beberapa susunan yang berbeda.",
    why: importance.sequence,
  },
  "tower-between": {
    goal: "Menggabungkan dua hubungan urutan untuk menyimpulkan posisi suatu bagian.",
    why: importance.constraints,
  },
  "tower-chain": {
    goal: "Memahami hubungan urutan berantai dan memeriksa konsistensi antarhubungan.",
    why: importance.sequence,
  },
  "tower-grid": {
    goal: "Mengembangkan kemampuan mempertimbangkan dua syarat sekaligus sebelum menentukan pilihan.",
    why: importance.constraints,
  },
  "tower-grid-three": {
    goal: "Menggunakan informasi yang sudah diketahui untuk mempersempit kemungkinan secara sistematis.",
    why: importance.constraints,
  },
  "tower-beacon": {
    goal: "Mengembangkan kemampuan menyesuaikan rencana sambil mempertahankan tujuan dan urutan yang diperlukan.",
    why: importance.plan,
  },
} satisfies Record<MissionId, { goal: string; why: string }>;

export const regionPurpose = {
  "taman-angka": {
    goal: "Menggunakan jumlah, bagian, perbandingan, dan pembagian untuk memenuhi kebutuhan.",
    why: "Anak dapat memeriksa kecukupan bekal, mengambil jumlah yang diminta, dan membagi benda sama banyak.",
  },
  "hutan-pola": {
    goal: "Mengenali, membuat, dan memindahkan aturan pola serta pengelompokan.",
    why: "Aturan memberi cara memperkirakan urutan, menemukan penyimpangan, dan menata benda menurut pertanyaan yang berbeda.",
  },
  "pulau-bentuk": {
    goal: "Mengenali sifat bentuk dan memeriksa hasil susun, putar, serta pantul.",
    why: "Anak dapat mencari kepingan yang cocok, merencanakan susunan, dan membicarakan posisi bagian saat bermain puzzle atau balok.",
  },
  "menara-misteri": {
    goal: "Merencanakan, menguji, dan memperbaiki langkah dengan memenuhi semua petunjuk.",
    why: "Anak mendapat kesempatan mencoba beberapa strategi, memakai informasi baru, dan memeriksa alasan pilihan saat menghadapi masalah.",
  },
} satisfies Record<RegionId, { goal: string; why: string }>;
