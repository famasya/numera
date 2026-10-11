export const maps = [
  { id: "penemuan", name: "Pulau Penemuan", art: "/art/numera-island.webp" },
  {
    id: "pembuat",
    name: "Pulau Para Pembuat",
    art: "/art/numera-island-2.webp",
  },
] as const;
export type MapId = (typeof maps)[number]["id"];
export const regions = [
  {
    id: "taman-angka",
    name: "Taman Angka",
    map: "penemuan",
    theme: "garden",
    restored: "Taman sudah berbunga!",
  },
  {
    id: "hutan-pola",
    name: "Hutan Pola",
    map: "penemuan",
    theme: "forest",
    restored: "Hutan kembali bercahaya!",
  },
  {
    id: "menara-misteri",
    name: "Menara Misteri",
    map: "penemuan",
    theme: "tower",
    restored: "Cahaya menara menyala!",
  },
  {
    id: "pulau-bentuk",
    name: "Pulau Bentuk",
    map: "penemuan",
    theme: "shapes",
    restored: "Bengkel bentuk sudah pulih!",
  },
  {
    id: "lembah-ukuran",
    name: "Lembah Ukuran",
    map: "pembuat",
    theme: "measure",
    restored: "Kincir kembali mengalir!",
  },
  {
    id: "desa-data",
    name: "Desa Data",
    map: "pembuat",
    theme: "data",
    restored: "Bekal desa sudah siap!",
  },
  {
    id: "bengkel-ruang",
    name: "Bengkel Bangun Ruang",
    map: "pembuat",
    theme: "space",
    restored: "Gerbang bengkel sudah berdiri!",
  },
  {
    id: "pelabuhan-petualangan",
    name: "Pelabuhan Petualangan",
    map: "pembuat",
    theme: "harbor",
    restored: "Pelabuhan siap berpetualang!",
  },
] as const;
export type RegionId = (typeof regions)[number]["id"];
export const isRegion = (v: unknown): v is RegionId =>
  regions.some((r) => r.id === v);
export function regionInfo(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}
export function gameSearch(search: Record<string, unknown>): {
  orangtua?: boolean;
  wilayah?: RegionId;
  konsep?: boolean;
  peta?: MapId;
} {
  return {
    peta: search.peta === "pembuat" ? "pembuat" : undefined,
    wilayah: isRegion(search.wilayah) ? search.wilayah : undefined,
    orangtua:
      search.orangtua === true || search.orangtua === "1" ? true : undefined,
    konsep: search.konsep === true || search.konsep === "1" ? true : undefined,
  };
}
