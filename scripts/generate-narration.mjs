// Run on macOS: pnpm exec node scripts/generate-narration.mjs
// Generate bundled Indonesian narration from the same content as visible text.
import { build } from "vite";
import { mkdtemp, mkdir, writeFile, access } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";
const run = promisify(execFile);
const temporary = await mkdtemp(join(tmpdir(), "numera-narration-"));
await build({
  configFile: false,
  logLevel: "error",
  build: {
    lib: {
      entry: {
        missions: resolve("src/content/missions.ts"),
        regions: resolve("src/content/regions.ts"),
      },
      formats: ["es"],
      fileName: (_, entry) => `${entry}.mjs`,
    },
    outDir: temporary,
    emptyOutDir: false,
  },
});
const { missions } = await import(
  pathToFileURL(join(temporary, "missions.mjs"))
);
const { regions } = await import(pathToFileURL(join(temporary, "regions.mjs")));
const texts = [
  ...new Set([
    ...missions.flatMap((m) => [m.instruction, m.guide]),
    ...regions.map((r) => `${r.restored} Terima kasih sudah membantu!`),
    "Misi selesai!",
    "Misi selesai. Kamu bisa melanjutkan.",
  ]),
];
await mkdir("public/audio/id", { recursive: true });
const clips = {};
let next = 0;
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (next < texts.length) {
      const text = texts[next++];
      const hash = createHash("sha256").update(text).digest("hex").slice(0, 16);
      const output = `public/audio/id/${hash}.m4a`;
      try {
        await access(output);
      } catch {
        const intermediate = join(temporary, `${hash}.aiff`);
        await run("say", [
          "-v",
          "Damayanti",
          "-r",
          "155",
          "-o",
          intermediate,
          text,
        ]);
        await run("afconvert", [
          "-f",
          "m4af",
          "-d",
          "aac",
          "-b",
          "64000",
          intermediate,
          output,
        ]);
      }
      clips[text] = `/audio/id/${hash}.m4a`;
    }
  }),
);
await writeFile(
  "src/content/narration-clips.ts",
  "// Generated from mission text by scripts/generate-narration.mjs.\nexport const narrationClips: Record<string, string> = " +
    JSON.stringify(clips, null, 2) +
    ";\n",
);
console.log(
  `Generated ${texts.length} Indonesian clips for ${missions.length} missions.`,
);
