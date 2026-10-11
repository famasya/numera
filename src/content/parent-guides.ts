import { mapTwoMissions } from "./map-two-missions";
import type { MissionId } from "./missions";
import { newMissions } from "./new-missions";
const pdf =
  "https://www.naeyc.org/sites/default/files/globally-shared/downloads/PDFs/resources/position-statements/psmath.pdf";
export const parentSources = {
  nrichCounting: {label:"NRICH — Counting Collections, hlm. 1–2",url:"https://nrich.maths.org/content/id/14917/CountingCollections2022edited.pdf"},
  nrichShow: {label:"NRICH — Show Me, hlm. 1–2",url:"https://nrich.maths.org/content/id/12747/ShowMe2022.pdf"},
  nrichTidying: {label:"NRICH — Tidying, hlm. 1–2",url:"https://nrich.maths.org/content/id/8856/Tidying2022.pdf"},
  nrichHidden: {label:"NRICH — Hidden Jewels, hlm. 1–2",url:"https://nrich.maths.org/content/id/14002/HiddenJewels2022.pdf"},
  nrichPresents: {label:"NRICH — Presents, hlm. 1–2",url:"https://nrich.maths.org/content/id/9720/Presents2022.pdf"},
  nrichCalendar: {label:"NRICH — Calendar Muddle, hlm. 1–2",url:"https://nrich.maths.org/content/id/13731/CalendarMuddle2022edited.pdf"},
  nrichWrapping: {label:"NRICH — Wrapping Parcels, hlm. 1–2",url:"https://nrich.maths.org/content/id/13535/WrappingParcels2022.pdf"},
  nrichPatterns: {
    label: "NRICH — Pattern Making, hlm. 1–2",
    url: "https://nrich.maths.org/content/id/13250/PatternMaking2022.pdf",
  },
  nrichPacking: {
    label: "NRICH — Packing, hlm. 1–2",
    url: "https://nrich.maths.org/content/id/9719/Packing2022.pdf",
  },
  nrichSharing: {
    label: "NRICH — Using Books: The Doorbell Rang, hlm. 1–2",
    url: "https://nrich.maths.org/content/id/13534/UsingBooksTheDoorbellRang2022.pdf",
  },
  nrichMeasure: {
    label: "NRICH — How Long Are You?, hlm. 1–2",
    url: "https://nrich.maths.org/content/id/14657/HowLongAreYou2022.pdf",
  },
  geometry: {
    label: "NAEYC/NCTM — bentuk, komposisi, dan ruang, hlm. 20",
    url: `${pdf}#page=20`,
  },
  counting: {
    label: "NAEYC/NCTM — jumlah dan menghitung, hlm. 19",
    url: `${pdf}#page=19`,
  },
  reasoning: {
    label: "NAEYC/NCTM — penalaran dan bermain, rekomendasi 4 dan 8",
    url: `${pdf}#page=3`,
  },
  parts: {
    label: "NAEYC/NCTM — operasi melalui benda, hlm. 20",
    url: `${pdf}#page=20`,
  },
  patterns: {
    label: "NAEYC/NCTM — pola dan pengelompokan, hlm. 21",
    url: `${pdf}#page=21`,
  },
  sharing: {
    label: "NAEYC/NCTM — berbagi dalam kehidupan sehari-hari, hlm. 1",
    url: `${pdf}#page=1`,
  },
};
type Guide = {
  meaning: string;
  coach: string;
  observe: string;
  source: keyof typeof parentSources;
  nextActivity?: string;
  additionalSource?: keyof typeof parentSources;
};
const gardenGuides = {
  counting: {
    meaning:
      "Anak memasangkan satu bunga dengan satu lubang. Jumlah bunga tetap lima meskipun posisinya berubah.",
    coach:
      "Ajak anak menunjuk bunga satu per satu. Setelah menghitung, tanyakan berapa semuanya.",
    observe: "Apakah ada bunga yang terlewat atau dihitung dua kali?",
    source: "counting",
  },
  composition: {
    meaning:
      "Lima bunga dapat dibagi dengan beberapa cara. Jumlah seluruhnya tetap sama; petak kosong juga boleh.",
    coach:
      "Tanyakan apakah ada susunan lain. Biarkan anak memindahkan bunga dan membandingkan hasilnya.",
    observe:
      "Apakah anak melihat hubungan antara kedua petak dan jumlah semua bunga?",
    source: "parts",
  },
  patterns: {
    meaning:
      "Pola memiliki bagian yang berulang. Anak mencari warna yang melanjutkan urutan itu.",
    coach:
      "Bacakan urutan warna bersama anak. Berhenti sebelum bagian kosong dan beri waktu anak untuk mencoba.",
    observe:
      "Apakah anak mengenali bagian yang diulang, atau menebak setiap bunga?",
    source: "patterns",
  },
  matching: {
    meaning:
      "Setiap teman mendapat satu buah. Ini membantu anak memasangkan dua kelompok satu per satu.",
    coach:
      "Ajak anak memeriksa teman yang belum mendapat bekal tanpa menunjukkan jawabannya.",
    observe:
      "Apakah anak memeriksa semua teman, termasuk yang sudah mendapat buah?",
    source: "counting",
  },
  compare: {
    meaning:
      "Anak membandingkan dua kelompok. Memindahkan satu batu mengurangi satu kelompok dan menambah kelompok lain.",
    coach:
      "Tanyakan kolam mana yang berisi batu lebih banyak. Anak boleh menghitung atau memasangkan batunya.",
    observe:
      "Apakah anak dapat menjelaskan mengapa jumlah kedua kolam sudah sama?",
    source: "reasoning",
  },
  orders: {
    meaning:
      "Titik menunjukkan jumlah pesanan. Tujuh bunga tersedia; anak menanam jumlah yang diminta dan menyisakan sisanya di keranjang. Pesanan pertama tiga dan dua; saat bermain ulang berganti menjadi dua dan satu.",
    coach:
      "Tanyakan jumlah bunga yang dibutuhkan setiap petak. Biarkan anak menghitung atau memasangkan, lalu tanyakan berapa semuanya sebelum memeriksa pesanan.",
    observe: "Apakah anak berhenti pada jumlah yang diminta, menyisakan bunga berlebih, dan menyebut jumlah tanpa menghitung ulang? Penyelesaian game belum membuktikan anak paham jumlah akhir atau bisa menyebut jumlah tanpa menghitung.",
    source: "counting",
  },
  sorting: {
    meaning:
      "Benda dikelompokkan berdasarkan jenisnya. Jumlah total tetap sama setelah dipisahkan.",
    coach:
      "Tanyakan mengapa sebuah benda masuk ke keranjang tertentu. Coba juga mengelompokkan benda nyata menurut warna.",
    observe: "Apakah anak memakai aturan yang sama untuk semua benda?",
    source: "patterns",
  },
  missing: {
    meaning:
      "Dua bunga sudah ditanam. Anak melengkapi bagian yang belum ada agar jumlahnya menjadi lima.",
    coach:
      "Biarkan anak menghitung semua bunga atau menghitung lanjut dari dua. Bunga tetap terlihat untuk dihitung.",
    observe:
      "Apakah anak memahami bunga lama dan bunga tambahan sebagai satu kelompok?",
    source: "parts",
  },
  growing: {
    meaning:
      "Kelompok disusun menurut jumlah batu, bukan warna atau posisi awalnya.",
    coach:
      "Mulai dengan dua kelompok. Tanyakan kelompok mana yang lebih sedikit, lalu bandingkan kelompok berikutnya.",
    observe: "Apakah anak memeriksa jumlah setiap kelompok saat menyusun urutan?",
    source: "reasoning",
  },
  repair: {
    meaning:
      "Anak memeriksa aturan pola dan menemukan bagian yang tidak mengikuti aturan itu.",
    coach:
      "Ajak anak mengikuti urutan dari awal. Tanyakan bagian mana yang berbeda dari pengulangan sebelumnya.",
    observe: "Apakah anak bisa menunjukkan alasan memilih warna pengganti?",
    source: "patterns",
  },
  sharing: {
    meaning:
      "Berbagi adil berarti kedua teman mendapat jumlah yang sama. Empat buah dapat dibagi menjadi dua dan dua.",
    coach:
      "Anak boleh membagi satu per satu. Ajak anak membandingkan bekal kedua teman setelah selesai.",
    observe:
      "Apakah anak memeriksa kesetaraan, bukan hanya menghabiskan isi keranjang?",
    source: "sharing",
  },
  "free-pattern": {
    meaning:
      "Anak membuat unit dua bunga, lalu mengulanginya. Dua bunga dengan warna sama juga boleh.",
    coach:
      "Minta anak menunjukkan bagian yang diulang. Coba membuat pola lain dengan gerakan atau benda nyata.",
    observe:
      "Apakah anak mempertahankan aturan pilihannya saat melanjutkan pola?",
    source: "patterns",
  },
} satisfies Partial<Record<MissionId, Guide>>;
export const parentGuides = {
  ...gardenGuides,
  ...Object.fromEntries(mapTwoMissions.map(m => [m.id, m.parent])),
  ...Object.fromEntries(newMissions.map((m) => [m.id, m.parent])),
} as Record<MissionId, Guide>;
for (const m of newMissions) {
  if (m.region === "hutan-pola")
    parentGuides[m.id].source =
      m.id === "forest-colors" || m.id === "forest-types"
        ? "nrichPacking"
        : "nrichPatterns";
}
parentGuides.sharing.source = "nrichSharing";
parentGuides.counting.source="nrichCounting";
parentGuides.orders.source="nrichShow";
parentGuides.composition.additionalSource="nrichShow";
parentGuides.missing.source="nrichTidying";
parentGuides["shape-shadows"].additionalSource="nrichTidying";
parentGuides.orders.nextActivity="Tunjukkan satu sampai tiga benda dalam susunan berbeda. Anak boleh menyebut jumlah langsung atau menghitung untuk memeriksa. Tidak perlu membatasi waktu melihatnya.";
parentGuides.orders.additionalSource="nrichHidden";
parentGuides["tower-weights"].nextActivity="Di rumah, bandingkan dua benda menggunakan timbangan seimbang. Benda yang lebih besar belum tentu lebih berat. Titik pada bintang game adalah satuan berat rekaan, bukan ukuran berat benda nyata.";
parentGuides["tower-weights"].additionalSource="nrichPresents";
parentGuides["tower-before"].nextActivity="Susun tiga gambar kegiatan sehari-hari bersama anak. Bicarakan kegiatan yang dilakukan sebelum dan sesudah kegiatan lain. Teka-teki bentuk game memakai hubungan urutan abstrak yang lebih terbatas.";
parentGuides["tower-before"].additionalSource="nrichCalendar";
parentGuides["shape-house"].nextActivity="Coba menutup kotak kecil dengan kertas. Periksa apakah kertas cukup untuk semua sisi. Beri waktu untuk mencoba posisi kotak dan ukuran kertas yang berbeda.";
parentGuides["shape-house"].additionalSource="nrichWrapping";
parentGuides["shape-sizes"].nextActivity =
  "Di rumah, bandingkan panjang dua pita. Ukur pita yang sama dengan sendok seukuran, lalu dengan balok seukuran. Susun lurus tanpa celah atau tumpang tindih. Bicarakan mengapa jumlah satuannya berbeda.";
parentGuides["shape-sizes"].additionalSource = "nrichMeasure";
parentGuides["shape-floor"].nextActivity =
  "Coba memasukkan balok nyata ke kotak. Perhatikan bentuk kotak, ruang yang tersisa, dan apakah semua balok muat. Kegiatan kotak ini memperluas pengamatan ruang pada lantai game.";
parentGuides["shape-floor"].additionalSource = "nrichPacking";
