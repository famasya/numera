import type { Progress } from "../../world/progression/store";
import { missions, type MissionId } from "../../content/missions";
export function independentRuns(p: Progress, id: MissionId) {
  return p.evidence.filter(
    (e) => e.mission === id && e.completed && e.hints === 0,
  );
}
export function readyForRichPattern(p: Progress) {
  const runs = independentRuns(p, "patterns");
  return runs.length >= 2 && new Set(runs.map((e) => e.variant)).size >= 2;
}
export function suggestion(p: Progress) {
  const supported = [...p.evidence].reverse().find((e) => e.hints >= 2);
  if (supported)
    return `Coba kembali kegiatan “${missions.find((m) => m.id === supported.mission)?.title}” dengan benda nyata. Beri waktu untuk mencoba dan menceritakan caranya.`;
  if (readyForRichPattern(p))
    return "Coba pola AAB yang tersedia saat bermain ulang. Buat pola tepuk–tepuk–diam bersama.";
  if (p.completed.length === missions.length)
    return "Mainkan lagi dengan susunan baru. Tanyakan: adakah cara lain membagi lima bunga?";
  return "Temani anak menjelajah bebas. Ajak anak menunjuk setiap bunga dan menceritakan apa yang berubah.";
}
