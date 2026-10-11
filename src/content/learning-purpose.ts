import { mapTwoMissions } from "./map-two-missions";
import type { MissionId } from "./missions";
import type { RegionId } from "./regions";

// Untuk orang tua: kemampuan konseptual yang dikembangkan, bukan instruksi game.
// Tujuan desain dan contoh penggunaan bukan klaim hasil belajar anak.
const importance = {
  count:
    "Menghitung berguna untuk mengetahui berapa banyak benda yang tersedia. Misalnya, anak dapat memeriksa jumlah sendok sebelum menyiapkan meja.",
  parts:
    "Satu jumlah bisa dibentuk dari bagian yang berbeda-beda. Ini membantu anak membagi bekal atau menggabungkan benda tanpa harus menghitung dari awal.",
  pattern:
    "Aturan yang berulang menjadi dasar untuk memperkirakan bagian yang datang berikutnya dan memeriksa urutannya. Anak dapat mencoba aturan yang sama dengan manik-manik atau gerakan.",
  matching:
    "Memasangkan benda satu per satu membantu memeriksa apakah jumlahnya cukup, tanpa harus menghitung. Misalnya, satu gelas untuk setiap orang.",
  compare:
    "Membandingkan dua kelompok membantu menentukan mana yang lebih banyak, lebih sedikit, atau sama banyak. Misalnya, anak dapat membandingkan bekal dua temannya.",
  production:
    "Jumlah yang dibutuhkan bisa berbeda dari jumlah yang tersedia. Anak belajar mengambil secukupnya, misalnya tiga sendok dari laci yang berisi banyak sendok.",
  sort: "Aturan pengelompokan membantu menata dan menemukan benda. Misalnya, mainan dapat dipisahkan menurut jenisnya dengan aturan yang sama untuk semua mainan.",
  missing:
    "Mengetahui bagian yang belum ada membantu menentukan berapa banyak yang masih dibutuhkan. Misalnya, dua gelas sudah tersedia, tetapi tiga teman masih memerlukan gelas.",
  repair:
    "Memeriksa aturan membantu menemukan bagian yang perlu diperbaiki. Anak dapat menunjukkan bagian yang perlu diganti sambil mempertahankan bagian yang sudah sesuai.",
  sharing:
    "Dengan berbagi sama banyak, anak bisa memeriksa apakah pembagiannya adil. Anak dapat membagi bekal satu per satu, lalu membandingkan bagian setiap teman.",
  create:
    "Membuat aturan sendiri melatih anak mengambil keputusan dan memeriksa konsistensinya. Pola yang berbeda bisa sama-sama benar jika masing-masing mengikuti aturannya.",
  transfer:
    "Aturan bisa tetap sama walaupun bendanya berganti. Misalnya, pola dua warna bisa menjadi gerakan tepuk tangan dan sentuh bahu; anak memperhatikan hubungan antarbagiannya.",
  resort:
    "Satu benda bisa masuk ke kelompok yang berbeda, tergantung aturan yang dipakai. Misalnya, balok merah dapat dikelompokkan dengan benda merah lain atau dengan semua balok.",
  shape:
    "Sifat bentuk membantu mengenali benda meskipun warna atau arahnya berubah. Anak dapat mencari kepingan yang cocok dengan lubang saat merapikan mainan.",
  size: "Ukuran dan jenis menjawab pertanyaan yang berbeda. Misalnya, dua kotak sama-sama berbentuk persegi, tetapi hanya kotak besar yang muat untuk sebuah benda.",
  assembly:
    "Bagian dapat disusun menjadi satu keseluruhan dengan letak yang tepat. Ini sekaligus melatih anak menyusun puzzle, membuat gambar, dan membicarakan posisi tiap bagian.",
  turn: "Memperkirakan putaran membantu menyesuaikan arah sebelum mencoba. Misalnya, kepingan puzzle perlu diputar agar sisinya cocok dengan ruang kosong.",
  mirror:
    "Pantulan menghubungkan arah dan jarak benda terhadap garis cermin. Anak dapat membandingkan bentuk kertas dengan bayangannya di cermin sungguhan.",
  cover:
    "Kecocokan tiap bagian memengaruhi ruang yang tersisa. Anak dapat mencoba menutup bidang dengan kepingan dan memeriksa celah; ini menjadi pengenalan awal tentang luas.",
  plan: "Rencana bisa diperiksa dan diubah dengan informasi baru. Misalnya, anak mencari jalan lain ketika jalan menuju tempat bermain terhalang.",
  sequence:
    "Urutan tindakan menentukan apakah tujuan tercapai. Misalnya, anak mengambil bahan sebelum membuat bekal; langkah lain boleh memiliki urutan yang berbeda.",
  equality:
    "Dua bagian setara bila jumlahnya sama banyak. Anak dapat memasangkan benda untuk memeriksa dua bagian yang sama; titik pada bintang di game adalah satuan buatan.",
  constraints:
    "Satu pilihan perlu memenuhi semua syarat yang berlaku. Anak berlatih memeriksa kembali pilihannya, misalnya mencari benda yang jenisnya dan ukurannya sama-sama cocok.",
};

const mapTwoPurpose = Object.fromEntries(
  mapTwoMissions.map((m) => [m.id, m.purpose]),
) as Record<
  (typeof mapTwoMissions)[number]["id"],
  { goal: string; why: string }
>;
export const missionPurpose = {
  ...mapTwoPurpose,
  counting: {
    goal: "Memahami korespondensi satu-satu dan bahwa hasil hitungan menyatakan jumlah semua benda.",
    why: importance.count,
  },
  composition: {
    goal: "Memahami bahwa satu jumlah dapat dipecah menjadi dua bagian dengan cara yang berbeda-beda.",
    why: importance.parts,
  },
  patterns: {
    goal: "Mengenali bagian yang berulang sebagai dasar untuk memperkirakan kelanjutan pola.",
    why: importance.pattern,
  },
  matching: {
    goal: "Memahami bahwa memasangkan benda satu per satu dapat dipakai untuk memeriksa apakah jumlahnya cukup.",
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
    goal: "Memahami hubungan antara bagian yang sudah ada, bagian yang belum ada, dan jumlah seluruhnya.",
    why: importance.missing,
  },
  growing: {
    goal: "Memahami urutan jumlah dengan membandingkan kelompok yang berdekatan.",
    why: importance.compare,
  },
  repair: {
    goal: "Mengenali bagian yang menyimpang dari aturan dan memakai aturan itu untuk menentukan perbaikannya.",
    why: importance.repair,
  },
  sharing: {
    goal: "Memahami bahwa berbagi adil berarti setiap teman mendapat jumlah yang sama.",
    why: importance.sharing,
  },
  "free-pattern": {
    goal: "Mengembangkan kemampuan membuat aturan sendiri dan menjaga konsistensinya.",
    why: importance.create,
  },
  "forest-copy": {
    goal: "Mengenali susunan yang berulang dan menjaga urutan hubungan antarbagiannya.",
    why: importance.pattern,
  },
  "forest-next": {
    goal: "Menggunakan urutan yang sudah diketahui untuk memperkirakan bagian berikutnya.",
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
    goal: "Memahami bahwa aturan yang sama dapat muncul pada benda atau bahan yang berbeda.",
    why: importance.transfer,
  },
  "forest-pairs": {
    goal: "Memahami bahwa satu bagian berulang dapat berisi benda yang muncul lebih dari sekali.",
    why: importance.pattern,
  },
  "forest-double": {
    goal: "Memahami bahwa posisi benda yang berulang di dalam satu bagian menentukan aturan pola.",
    why: importance.pattern,
  },
  "forest-three": {
    goal: "Mengenali batas satu bagian berulang dan urutan benda di dalamnya.",
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
    goal: "Memahami bahwa isi kelompok berubah ketika aturan pengelompokannya berubah.",
    why: importance.resort,
  },
  "forest-create": {
    goal: "Mengembangkan kemampuan membuat keteraturan dan menjelaskan bagian yang diulang.",
    why: importance.create,
  },
  "shape-shadows": {
    goal: "Mengenali bentuk berdasarkan tepi dan sisinya.",
    why: importance.shape,
  },
  "shape-sizes": {
    goal: "Memahami bahwa ukuran dan jenis bentuk adalah sifat yang berbeda.",
    why: importance.size,
  },
  "shape-turned": {
    goal: "Memahami bahwa jenis bentuk tetap sama meskipun arah atau panjang sisinya berubah.",
    why: importance.shape,
  },
  "shape-house": {
    goal: "Memahami hubungan bagian dan keseluruhan dalam susunan bentuk.",
    why: importance.assembly,
  },
  "shape-boat": {
    goal: "Memahami bahwa bentuk dan arah bagian menentukan kecocokannya dalam satu susunan.",
    why: importance.assembly,
  },
  "shape-rocket": {
    goal: "Memahami hubungan posisi antarbagian, termasuk di dalam, di atas, dan di samping.",
    why: importance.assembly,
  },
  "shape-turn": {
    goal: "Membayangkan perubahan arah suatu bentuk akibat seperempat putaran.",
    why: importance.turn,
  },
  "shape-sails": {
    goal: "Memahami bahwa putaran mengubah arah tanpa mengubah jenis bentuk.",
    why: importance.turn,
  },
  "shape-mirror": {
    goal: "Memahami bahwa pantulan membalik arah dan mempertahankan jarak terhadap garis cermin.",
    why: importance.mirror,
  },
  "shape-window": {
    goal: "Mengenali simetri melalui pasangan bagian pada kedua sisi garis cermin.",
    why: importance.mirror,
  },
  "shape-floor": {
    goal: "Memahami bahwa suatu bidang dapat tersusun dari bagian yang menutupnya tanpa celah atau tumpang tindih.",
    why: importance.cover,
  },
  "shape-bridge": {
    goal: "Melatih penalaran tentang kecocokan bentuk bagian dengan ruang yang tersisa.",
    why: importance.cover,
  },
  "tower-path": {
    goal: "Mengembangkan kemampuan merencanakan langkah dengan mempertimbangkan posisi dan hambatan.",
    why: importance.plan,
  },
  "tower-detour": {
    goal: "Memakai informasi baru untuk memeriksa ulang dan mengubah strategi.",
    why: importance.plan,
  },
  "tower-key": {
    goal: "Memahami bahwa beberapa langkah perlu dilakukan dalam urutan tertentu untuk mencapai tujuan.",
    why: importance.sequence,
  },
  "tower-even": {
    goal: "Memahami kesetaraan dua kelompok dengan membandingkan jumlahnya.",
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
    goal: "Memahami urutan berantai dan memeriksa konsistensi antarhubungannya.",
    why: importance.sequence,
  },
  "tower-grid": {
    goal: "Mengembangkan kemampuan mempertimbangkan dua syarat sekaligus sebelum menentukan pilihan.",
    why: importance.constraints,
  },
  "tower-grid-three": {
    goal: "Menggunakan informasi yang sudah diketahui untuk mempersempit kemungkinan satu per satu.",
    why: importance.constraints,
  },
  "tower-beacon": {
    goal: "Mengembangkan kemampuan menyesuaikan rencana sambil mempertahankan tujuan dan urutan yang diperlukan.",
    why: importance.plan,
  },
} satisfies Record<MissionId, { goal: string; why: string }>;

export const regionPurpose = {
  "lembah-ukuran": {
    goal: "Memahami ukuran melalui satuan yang sama dan perubahan wadahnya.",
    why: "Pengukuran membantu anak membandingkan panjang dan isi dengan acuan yang sama.",
  },
  "desa-data": {
    goal: "Mencatat setiap kejadian, mengelompokkannya, dan memakai catatan untuk menentukan kebutuhan.",
    why: "Dengan catatan, anak dapat memeriksa kebutuhan dan pilihan tanpa harus menghafal semuanya.",
  },
  "bengkel-ruang": {
    goal: "Memahami sifat bangun ruang, sisi yang tersembunyi, dan hubungan penyangga.",
    why: "Bermain dengan bangun ruang melatih anak merencanakan susunan dan memeriksa semua bagian benda nyata.",
  },
  "pelabuhan-petualangan": {
    goal: "Menghubungkan pembagian, perubahan jumlah, dan posisi untuk memecahkan masalah.",
    why: "Masalah gabungan melatih anak memilih strategi dan menerapkannya pada kebutuhan baru.",
  },
  "taman-angka": {
    goal: "Menggunakan jumlah, bagian, perbandingan, dan pembagian untuk menyelesaikan masalah sehari-hari.",
    why: "Anak dapat memeriksa apakah bekalnya cukup, mengambil jumlah yang diminta, dan membagi benda sama banyak.",
  },
  "hutan-pola": {
    goal: "Mengenali, membuat, dan menerapkan aturan pola serta pengelompokan pada benda lain.",
    why: "Aturan membantu anak memperkirakan urutan, menemukan bagian yang menyimpang, dan menata benda dengan cara yang berbeda.",
  },
  "pulau-bentuk": {
    goal: "Mengenali sifat bentuk serta memeriksa hasil menyusun, memutar, dan memantulkannya.",
    why: "Anak dapat mencari kepingan yang cocok, merencanakan susunan, dan membicarakan posisi bagian saat bermain puzzle atau balok.",
  },
  "menara-misteri": {
    goal: "Merencanakan, menguji, dan memperbaiki langkah dengan memenuhi semua petunjuk.",
    why: "Anak mendapat kesempatan mencoba beberapa strategi, memakai informasi baru, dan memeriksa alasan pilihan saat menghadapi masalah.",
  },
} satisfies Record<RegionId, { goal: string; why: string }>;
