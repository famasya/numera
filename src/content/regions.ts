export const regions = [
  {
    id: "taman-angka",
    name: "Taman Angka",
    theme: "garden",
    restored: "Taman sudah berbunga!",
  },
  {
    id: "hutan-pola",
    name: "Hutan Pola",
    theme: "forest",
    restored: "Hutan kembali bercahaya!",
  },
  {
    id: "menara-misteri",
    name: "Menara Misteri",
    theme: "tower",
    restored: "Cahaya menara menyala!",
  },
  {
    id: "pulau-bentuk",
    name: "Pulau Bentuk",
    theme: "shapes",
    restored: "Bengkel bentuk sudah pulih!",
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
} {
  return {
    wilayah: isRegion(search.wilayah) ? search.wilayah : undefined,
    orangtua:
      search.orangtua === true || search.orangtua === "1" ? true : undefined,
  };
}
