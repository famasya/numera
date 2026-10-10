# Architecture

TanStack Start + React + TypeScript, Vite, SVG, localStorage. Framework setup follows [TanStack's official build-from-scratch guide](https://tanstack.com/start/latest/docs/framework/react/build-from-scratch). pnpm is the package manager requested by the user.

React/SVG was selected over Phaser: object-placement and pattern puzzles need accessible touch targets, shared DOM interactions and a consistent map coordinate system; physics, spritesheet animation and a continuous simulation are unnecessary. Start handles the document and file route; the game remains client-side after hydration, with no server game logic or data services.

- `world/map`: illustration, normalized overlay and pan/zoom.
- `world/regions`: garden orchestration, session evidence and visible restoration.
- `world/progression`: pure progression functions, schema-aware parsing, SSR-safe persistence hook.
- `activities`: counting, composition, patterns; actual shared drag/tap mechanic in `components/Manipulative`.
- `pedagogy`: deterministic validation, readiness, scaffold thresholds and parent suggestions.
- `content`: separate short instructions, concepts and flower palette.
- `components`: user-provided rabbit, original SVG garden art, audio and parent dialog.
- `styles`: responsive game layout and reduced-motion behavior.

Storage is loaded only after mount. Payload version 2 uses the existing numbara.progress.v1 key and migrates version 1 saves. Completion and up to 200 session evidence records are local. Malformed or incompatible saves recover without crashing. Legacy version 1 unlocks require completion evidence. Version 2 preserves sequential completion independently from the capped evidence history so replay cannot erase older unlocks. URL state selects the mission and parent panel. A per-mission snapshot stores active placements, variations, scaffolding, attempts and completion immediately. The MissionSession context hydrates before mounting activities. Unfinished evidence is recorded on an explicit restart; leaving a page retains the session for continuation. Explicit replay of a completed mission clears only that mission snapshot. Storage failure is reported in Parent Mode.

Voice: only an installed `id` speechSynthesis voice is selected. Without one, visual play still works and synthesized gentle musical notes provide feedback. A future recorded Indonesian voice pack would be a more predictable fallback; none is claimed here. No microphone is used.

An install manifest and SVG app icon provide a PWA-friendly base. Offline caching/service worker is not implemented in this slice. Generated map art is served locally. Nitro supplies the standard Node hosting adapter; `pnpm start` runs `.output/server/index.mjs`. No custom HTTP server is necessary. See TanStack’s [hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting).

## Four-region extension

`content/regions.ts` defines four stable region IDs and URL search validation. `missions.ts` preserves all garden IDs and combines `new-missions.ts`; `puzzles.ts` contains deterministic authored puzzle configurations. The shared scene frame remains in `world/regions/Garden.tsx` for compatibility; it selects the correct region art, instruction, local mission number, and completion transformation. `activities/discovery/PuzzleBoard.tsx` renders ten puzzle mechanics. `pedagogy/puzzles.ts` validates and solves authored puzzles without randomness or runtime inference.

Routes `/<regionId>/<missionId>` and `?wilayah=<regionId>` preserve scene/picker; the static `/taman-angka/$missionId` route still works. Completion is sequential within a region, independent across regions. Existing local storage schema/key and stable garden IDs are preserved; parser repair checks each region independently. Evidence stays bounded to 200 entries, while all completion IDs persist separately. Per-mission snapshots retain puzzle values, paths, rotations, placements, readiness variation, and hints.

## Animasi timbangan

Motion (`motion/react`) menggerakkan batang dan piring timbangan dengan spring. `balancePose` menghitung arah dan batas kemiringan dari selisih berat. `slotsValid` tetap menentukan jawaban secara terpisah. Snapshot hanya menyimpan posisi benda, sehingga animasi dapat dibentuk kembali setelah refresh. Reduced motion memakai transisi instan. Matter.js belum diperlukan untuk perbandingan dua sisi; pertimbangkan hanya untuk aktivitas tumbukan atau susunan benda bebas.

## Gerak benda

`MotionTurn` menjaga putaran seperempat tetap searah jarum jam melalui orientasi modulo empat. `nextQuarterAngle` diuji terpisah. `Manipulative` mengikuti pointer tanpa easing saat drag dan memakai spring teredam setelah release. Token interaksi berada pada `src/styles/movement.ts`; preferensi reduced motion mematikan transisi. Perubahan posisi visual tidak menjadi input validasi matematika. Hasil audit lengkap ada di [movement-review.md](movement-review.md).
