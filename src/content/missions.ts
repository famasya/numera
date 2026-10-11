import { mapTwoMissions } from "./map-two-missions";
import { newMissions } from "./new-missions";
import type { RegionId } from "./regions";
export const gardenMissions = [
  {
    id: "counting",
    title: "Tanam lima bunga",
    instruction: "Tanam lima bunga.",
    guide: "Pindahkan bunga ke lubang tanam.",
    concept: "Korespondensi satu-satu dan kardinalitas",
  },
  {
    id: "composition",
    title: "Bunga untuk dua petak",
    instruction: "Bagikan lima bunga ke dua petak kebun.",
    guide: "Pindahkan bunga ke petak matahari atau bulan.",
    concept: "Hubungan bagian dan keseluruhan",
  },
  {
    id: "patterns",
    title: "Lengkapi pola bunga",
    instruction: "Lengkapi bagian kosong pada jalan bunga.",
    guide: "Pilih warna bunga yang sesuai dengan pola.",
    concept: "Unit berulang dan perkiraan pola",
  },
  {
    id: "matching",
    title: "Bekal untuk teman",
    instruction: "Berikan satu buah kepada setiap teman.",
    guide: "Pindahkan buah ke tempat bekal teman.",
    concept: "Korespondensi satu-satu dalam konteks berbeda",
  },
  {
    id: "compare",
    title: "Samakan jumlah batu",
    instruction: "Samakan jumlah batu di kedua kolam.",
    guide: "Pindahkan batu ke kolam sebelah.",
    concept: "Membandingkan jumlah dan membuat sama banyak",
  },
  {
    id: "orders",
    title: "Pesanan bunga",
    instruction: "Tanam bunga sesuai jumlah titik pada petak.",
    guide: "Sisakan bunga yang tidak dibutuhkan di keranjang.",
    concept: "Membuat jumlah yang diminta dari persediaan berlebih",
  },
  {
    id: "sorting",
    title: "Rapikan panen",
    instruction: "Pisahkan daun dan bunga ke keranjang.",
    guide: "Masukkan setiap benda ke keranjang dengan gambar yang sesuai.",
    concept: "Pengelompokan menurut jenis benda",
  },
  {
    id: "missing",
    title: "Lengkapi kebun bunga",
    instruction: "Tambahkan bunga hingga jumlahnya lima.",
    guide: "Dua bunga sudah ditanam. Tanam bunga yang tersisa.",
    concept: "Bagian yang melengkapi keseluruhan",
  },
  {
    id: "growing",
    title: "Urutkan kelompok batu",
    instruction: "Susun batu dari sedikit ke banyak.",
    guide: "Mulai dari kelompok dengan batu paling sedikit.",
    concept: "Mengurutkan kelompok menurut jumlah",
  },
  {
    id: "repair",
    title: "Perbaiki jalan bunga",
    instruction: "Ganti bunga yang tidak sesuai dengan pola.",
    guide: "Pilih warna pengganti untuk bunga yang tidak sesuai.",
    concept: "Menemukan dan memperbaiki bagian yang menyimpang dari aturan",
  },
  {
    id: "sharing",
    title: "Bagikan bekal",
    instruction: "Bagikan buah agar kedua teman mendapat jumlah yang sama.",
    guide: "Pindahkan buah ke tempat bekal teman.",
    concept: "Pembagian adil dengan bagian yang sama banyak",
  },
  {
    id: "free-pattern",
    title: "Pola untuk gerbang",
    instruction: "Buat pola bunga untuk membuka gerbang.",
    guide: "Isi dua tempat pertama dengan bunga. Ulangi urutan warnanya.",
    concept: "Membuat unit berulang dengan banyak solusi",
  },
] as const;
export const missions = [
  ...gardenMissions.map((m) => ({ ...m, region: "taman-angka" as const })),
  ...newMissions,
  ...mapTwoMissions,
];
export type MissionId = (typeof missions)[number]["id"];
export const missionIds = missions.map((m) => m.id);
export const regionMissions = (region: RegionId) =>
  missions.filter((m) => m.region === region);
export function previousMission(index: number) {
  const m = missions[index];
  if (!m) return undefined;
  const local = regionMissions(m.region);
  return local[local.findIndex((x) => x.id === m.id) - 1];
}
export const colors = [
  "var(--flower-pink)",
  "var(--flower-yellow)",
  "var(--flower-purple)",
  "var(--flower-pink)",
  "var(--flower-yellow)",
];
