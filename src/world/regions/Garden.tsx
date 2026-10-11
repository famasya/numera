import { isMapTwoMission } from "../../content/map-two-missions";
import { MapTwoBoard } from "../../activities/map-two/MapTwoBoard";
import { MapTwoArt } from "../../components/MapTwoArt";
import {
  MissionSession,
  useSessionValue,
  useMissionSession,
  isBoolean,
  isCount,
} from "../progression/session";
import { useRef, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Volume2,
  Map,
  Check,
} from "lucide-react";
import { missions, regionMissions } from "../../content/missions";
import { regionInfo } from "../../content/regions";
import { puzzles, puzzleFor, type NewMissionId } from "../../content/puzzles";
import { PuzzleBoard } from "../../activities/discovery/PuzzleBoard";
import { RegionArt } from "../../components/RegionArt";
import { GardenArt, Lumi, Flower } from "../../components/Art";
import { Counting } from "../../activities/counting/Counting";
import { Composition } from "../../activities/composition/Composition";
import { Placement } from "../../activities/adventure/Placement";
import { Growing } from "../../activities/adventure/Growing";
import { CreativePattern } from "../../activities/adventure/CreativePattern";
import { Patterns } from "../../activities/patterns/Patterns";
import { readyForRichPattern } from "../../pedagogy/mastery/readiness";
import { scaffoldLevel } from "../../pedagogy/scaffolding/hints";
import {
  chime,
  speak,
  cancelSpeech,
  type SpeechStatus,
} from "../../components/Audio";
import type { Progress, Evidence } from "../progression/store";
type Props = {
  index: number;
  progress: Progress;
  onRecord: (e: Evidence) => void;
  onExit: () => void;
  onNext: (i: number) => void;
};
export function Garden(props: Props) {
  return (
    <MissionSession
      key={missions[props.index].id}
      id={missions[props.index].id}
    >
      <GardenSession {...props} />
    </MissionSession>
  );
}
function GardenSession({ index, progress, onRecord, onExit, onNext }: Props) {
  const session = useMissionSession();
  const mission = missions[index];
  const [speechStatus, setSpeechStatus] = useState<SpeechStatus | null>(null);
  const region = regionInfo(mission.region);
  const localMissions = regionMissions(mission.region);
  const localIndex = localMissions.findIndex((m) => m.id === mission.id);
  const last = localIndex === localMissions.length - 1;
  const completed = localMissions.filter((m) =>
    progress.completed.includes(m.id),
  ).length;
  const [hint, setHint] = useSessionValue("hint", 0, isCount);
  const [misses, setMisses] = useSessionValue("misses", 0, isCount);
  const [done, setDone] = useSessionValue("done", false, isBoolean);
  const [round, setRound] = useSessionValue("round", 0, isCount);
  const [rich] = useSessionValue(
    "rich",
    () =>
      mission.region === "taman-angka"
        ? readyForRichPattern(progress)
        : new Set(
            progress.evidence
              .filter(
                (e) =>
                  missions.find((m) => m.id === e.mission)?.region ===
                    mission.region &&
                  e.completed &&
                  e.hints === 0,
              )
              .map((e) => e.mission),
          ).size >= 2,
    isBoolean,
  );
  const [runs] = useSessionValue(
    "runs",
    () =>
      progress.evidence.filter((e) => e.mission === mission.id && e.completed)
        .length,
    isCount,
  );
  const savedStats = session.values.stats;
  const stats = useRef(
    savedStats &&
      typeof savedStats === "object" &&
      "attempts" in savedStats &&
      isCount(savedStats.attempts) &&
      "hints" in savedStats &&
      isCount(savedStats.hints) &&
      "solutions" in savedStats &&
      Array.isArray(savedStats.solutions) &&
      savedStats.solutions.every((s) => typeof s === "string") &&
      "recorded" in savedStats &&
      isBoolean(savedStats.recorded)
      ? (savedStats as {
          attempts: number;
          hints: number;
          solutions: string[];
          recorded: boolean;
        })
      : { attempts: 0, hints: 0, solutions: [], recorded: done },
  );
  const saveStats = () => session.put("stats", stats.current);
  const level = scaffoldLevel(hint, misses);
  const variant =
    mission.id === "patterns"
      ? rich
        ? "AAB"
        : (runs + round) % 2
          ? "BA"
          : "AB"
      : mission.id === "counting"
        ? (runs + round) % 2
          ? "scattered"
          : "arc"
        : isMapTwoMission(mission.id)
          ? `${mission.id}:${(runs + round) % 2}`
          : `${mission.id}:${rich ? "rich" : "concrete"}`;
  function evidence(completed: boolean, solutions: string[]): Evidence {
    return {
      mission: mission.id,
      attempts: stats.current.attempts,
      hints: stats.current.hints,
      solutions,
      variant,
      completed,
    };
  }
  function finish(solutions: string[]) {
    if (stats.current.recorded) return;
    stats.current.recorded = true;
    saveStats();
    onRecord(evidence(true, solutions));
    setDone(true);
    cancelSpeech();
    setSpeechStatus(null);
    chime(progress.audio);
  }
  function leave() {
    saveStats();
    onExit();
  }
  function reset() {
    if (!stats.current.recorded && stats.current.attempts > 0)
      onRecord(evidence(false, stats.current.solutions));
    session.clear();
    session.put("runs", runs);
    session.put("rich", rich);
    stats.current = { attempts: 0, hints: 0, solutions: [], recorded: false };
    saveStats();
    setDone(false);
    setHint(0);
    setMisses(0);
    setRound((n) => n + 1);
  }
  useEffect(() => {
    return () => {
      cancelSpeech();
    };
  }, []);
  const attempt = () => {
    stats.current.attempts++;
    saveStats();
  };
  function addHint() {
    if (done) return;
    stats.current.hints++;
    saveStats();
    setHint((n) => Math.min(3, n + 1));
    speak(mission.guide, progress.audio);
  }
  return (
    <section
      className={`garden-scene scene-enter mission-${index} region-${region.theme} scaffold-${level} ${done ? "restored" : ""}`}
      aria-label={`Petualangan ${region.name}`}
    >
      {mission.region === "taman-angka" ? (
        <GardenArt
          bloom={(done ? Math.max(localIndex + 1, completed) : completed) / 4}
        />
      ) : region.map === "pembuat" ? (
        <MapTwoArt
          region={region.id}
          completed={done ? Math.max(localIndex + 1, completed) : completed}
        />
      ) : (
        <RegionArt
          region={mission.region}
          completed={done ? Math.max(localIndex + 1, completed) : completed}
        />
      )}
      <div className="garden-top">
        <button
          className="round-button"
          aria-label="Kembali ke peta"
          onClick={leave}
        >
          <ArrowLeft />
        </button>
        <div className="garden-title">
          <span className="eyebrow">{region.name.toUpperCase()}</span>
          <h2>{mission.title}</h2>
        </div>
        <div
          className="mission-leaves"
          aria-label={`Misi ${localIndex + 1} dari ${localMissions.length}`}
        >
          {missions.slice(0, 3).map((m, i) => (
            <span
              key={m.id}
              className={i <= Math.floor(localIndex / 4) ? "lit" : ""}
            >
              {i < Math.floor(localIndex / 4) || (done && last) ? (
                <Check size={18} />
              ) : (
                <Flower
                  color={
                    i === Math.floor(localIndex / 4)
                      ? "var(--flower-yellow)"
                      : "var(--flower-muted)"
                  }
                />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="instruction">
        <p>{done ? "Misi selesai!" : mission.instruction}</p>
        {!done && (
          <button
            aria-label="Dengarkan petunjuk"
            onClick={() =>
              speak(mission.instruction, progress.audio, setSpeechStatus)
            }
          >
            <Volume2 size={21} />
          </button>
        )}
      </div>
      {speechStatus && speechStatus !== "ended" && (
        <p className="speech-status" role="status">
          {
            (
              {
                loading: "Menyiapkan suara…",
                playing: "Petunjuk sedang diputar.",
                muted: "Suara dimatikan. Aktifkan suara di bagian atas.",
                unavailable: "Browser ini belum mendukung petunjuk suara.",
                "missing-voice":
                  "Suara bahasa Indonesia belum tersedia di perangkat ini.",
                failed: "Suara tidak dapat diputar. Coba sekali lagi.",
              } as Partial<Record<SpeechStatus, string>>
            )[speechStatus]
          }
        </p>
      )}
      <div className="garden-play" key={round}>
        {isMapTwoMission(mission.id) ? (
          <MapTwoBoard
            id={mission.id}
            variation={runs + round}
            hint={level}
            done={done}
            onAttempt={attempt}
            onComplete={finish}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
          />
        ) : mission.id in puzzles ? (
          <PuzzleBoard
            puzzle={puzzleFor(mission.id as NewMissionId, rich)}
            hint={level}
            onAttempt={attempt}
            onComplete={finish}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
          />
        ) : mission.id === "counting" || mission.id === "missing" ? (
          <Counting
            hint={level}
            preset={mission.id === "missing"}
            variation={runs + round}
            onAttempt={attempt}
            onComplete={finish}
          />
        ) : index === 1 ? (
          <Composition
            hint={level}
            onAttempt={attempt}
            onComplete={finish}
            onSolution={(s) => {
              stats.current.solutions = [...stats.current.solutions, s];
              saveStats();
              chime(progress.audio);
            }}
          />
        ) : index === 2 ? (
          <Patterns
            hint={level}
            runs={runs + round}
            rich={rich}
            onAttempt={attempt}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
            onComplete={finish}
          />
        ) : mission.id === "growing" ? (
          <Growing
            hint={level}
            onAttempt={attempt}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
            onComplete={finish}
          />
        ) : mission.id === "repair" || mission.id === "free-pattern" ? (
          <CreativePattern
            repair={mission.id === "repair"}
            hint={level}
            onAttempt={attempt}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
            onComplete={finish}
          />
        ) : (
          <Placement
            variation={runs + round}
            kind={mission.id}
            hint={level}
            onAttempt={attempt}
            onMiss={() => {
              setMisses((n) => n + 1);
              stats.current.hints++;
              saveStats();
            }}
            onComplete={finish}
          />
        )}
      </div>
      <div className={`lumi-guide ${done ? "celebrate" : ""}`}>
        <Lumi happy={done} />
        <span className="guide-bubble">
          {done ? "Terima kasih sudah membantu!" : mission.guide}
        </span>
      </div>
      <div className="garden-tools">
        <button
          className="round-button"
          aria-label="Tunjukkan bantuan"
          onClick={addHint}
        >
          <Lightbulb />
        </button>
        <button
          className="round-button"
          aria-label="Mulai ulang misi"
          onClick={reset}
        >
          <RotateCcw />
        </button>
      </div>
      {done && (
        <div className="completion-banner" role="status">
          <div className="bloom-medallion">
            <Flower color="var(--flower-yellow)" />
          </div>
          <div>
            <span className="eyebrow">
              {last ? "SEMUA MISI WILAYAH SELESAI" : "MISI SELESAI"}
            </span>
            <h2>{last ? region.restored : "Terima kasih sudah membantu!"}</h2>
            {last && <p>Kamu boleh menjelajahi wilayah lain di peta.</p>}
          </div>
          {!last ? (
            <button
              className="primary"
              aria-label="Lanjut ke misi berikutnya"
              onClick={() => onNext(index + 1)}
            >
              Lanjut bermain
              <ArrowRight size={20} />
            </button>
          ) : (
            <>
              <button className="secondary" onClick={reset}>
                Main lagi
              </button>
              <button
                className="primary"
                aria-label="Kembali ke peta setelah selesai"
                onClick={onExit}
              >
                <Map size={20} />
                Kembali ke peta
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
