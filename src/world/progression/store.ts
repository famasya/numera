import {
  useEffect,
  useState,
  useRef,
  useCallback,
  type SetStateAction,
} from "react";
import {
  missionIds,
  missions,
  previousMission,
  type MissionId,
} from "../../content/missions";
export type Evidence = {
  mission: MissionId;
  attempts: number;
  hints: number;
  solutions: string[];
  variant: string;
  completed: boolean;
};
export type Progress = {
  version: 2;
  completed: MissionId[];
  evidence: Evidence[];
  audio: boolean;
};
export const key = "numbara.progress.v1";
export const initialProgress: Progress = {
  version: 2,
  completed: [],
  evidence: [],
  audio: true,
};
const ids: readonly string[] = missionIds;
export function parseProgress(raw: string | null): Progress {
  try {
    const p = JSON.parse(raw || "null");
    if (
      ![1, 2].includes(p?.version) ||
      !Array.isArray(p.completed) ||
      !Array.isArray(p.evidence)
    )
      return initialProgress;
    const evidence = p.evidence.filter(
      (e: Evidence) =>
        ids.includes(e?.mission) &&
        Number.isInteger(e.attempts) &&
        e.attempts >= 0 &&
        Number.isInteger(e.hints) &&
        e.hints >= 0 &&
        typeof e.completed === "boolean" &&
        typeof e.variant === "string" &&
        Array.isArray(e.solutions) &&
        e.solutions.every((s) => typeof s === "string"),
    );
    const completed = ids.filter(
      (id) =>
        p.completed.includes(id) &&
        (p.version === 2 ||
          evidence.some((e: Evidence) => e.mission === id && e.completed)),
    ) as MissionId[];
    // Repair impossible out-of-order saves instead of unlocking unavailable missions.
    return {
      version: 2,
      completed: completed.filter((id) => {
        const local = missions.filter(
          (m) => m.region === missions.find((m) => m.id === id)!.region,
        );
        return local
          .slice(0, local.findIndex((m) => m.id === id) + 1)
          .every((m) => completed.includes(m.id));
      }),
      evidence: evidence.slice(-200),
      audio: p.audio !== false,
    };
  } catch {
    return initialProgress;
  }
}
export function nodeState(p: Progress, i: number) {
  if (!Number.isInteger(i) || i < 0 || i >= ids.length) return "locked";
  if (p.completed.includes(ids[i] as MissionId)) return "completed";
  const previous = previousMission(i);
  return !previous || p.completed.includes(previous.id) ? "current" : "locked";
}
export function record(p: Progress, e: Evidence): Progress {
  if (!ids.includes(e.mission)) return p;
  const index = ids.indexOf(e.mission);
  const previous = previousMission(index);
  if (previous && !p.completed.includes(previous.id)) return p;
  return {
    ...p,
    completed: e.completed
      ? missionIds.filter((id) => p.completed.includes(id) || id === e.mission)
      : p.completed,
    evidence: [...p.evidence, e].slice(-200),
  };
}
export function useProgress() {
  const [progress, setCurrent] = useState<Progress>(initialProgress);
  const current = useRef(initialProgress);
  const [ready, setReady] = useState(false);
  const [storageOk, setStorageOk] = useState(true);
  useEffect(() => {
    try {
      const loaded = parseProgress(localStorage.getItem(key));
      current.current = loaded;
      setCurrent(loaded);
      localStorage.setItem(key, JSON.stringify(loaded));
    } catch {
      setStorageOk(false);
    }
    setReady(true);
  }, []);
  const setProgress = useCallback((next: SetStateAction<Progress>) => {
    const resolved = typeof next === "function" ? next(current.current) : next;
    current.current = resolved;
    try {
      localStorage.setItem(key, JSON.stringify(resolved));
    } catch {
      setStorageOk(false);
    }
    setCurrent(resolved);
  }, []);
  return { progress, setProgress, ready, storageOk };
}
