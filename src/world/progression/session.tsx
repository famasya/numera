import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { MissionId } from "../../content/missions";
export const sessionKey = (id: MissionId) => `numbara.session.v1.${id}`;
export function parseSession(raw: string | null): Record<string, unknown> {
  try {
    const parsed = JSON.parse(raw || "null");
    return parsed?.version === 1 &&
      parsed.values &&
      typeof parsed.values === "object" &&
      !Array.isArray(parsed.values)
      ? parsed.values
      : {};
  } catch {
    return {};
  }
}
export function clearMissionSession(id: MissionId) {
  try {
    localStorage.removeItem(sessionKey(id));
  } catch {
    /* Progress UI reports unavailable local storage. */
  }
}
type Session = {
  values: Record<string, unknown>;
  put: (name: string, value: unknown) => void;
  clear: () => void;
};
const Context = createContext<Session | null>(null);
export function MissionSession({
  id,
  children,
}: {
  id: MissionId;
  children: ReactNode;
}) {
  const values = useRef<Record<string, unknown>>({});
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      values.current = parseSession(localStorage.getItem(sessionKey(id)));
    } catch {
      values.current = {};
    }
    setReady(true);
  }, [id]);
  const session = useMemo<Session>(
    () => ({
      get values() {
        return values.current;
      },
      put(name, value) {
        values.current = { ...values.current, [name]: value };
        try {
          localStorage.setItem(
            sessionKey(id),
            JSON.stringify({ version: 1, values: values.current }),
          );
        } catch {
          /* No remote data collection. */
        }
      },
      clear() {
        values.current = {};
        clearMissionSession(id);
      },
    }),
    [id],
  );
  return ready ? (
    <Context.Provider value={session}>{children}</Context.Provider>
  ) : (
    <div className="progress-loading" role="status">
      Membuka misi…
    </div>
  );
}
export function useMissionSession() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("Mission session is missing");
  return ctx;
}
export function useSessionValue<T>(
  name: string,
  initial: T | (() => T),
  valid: (value: unknown) => boolean,
): [T, (next: SetStateAction<T>) => void] {
  const ctx = useMissionSession();
  const [value, setValue] = useState<T>(() =>
    valid(ctx.values[name])
      ? (ctx.values[name] as T)
      : typeof initial === "function"
        ? (initial as () => T)()
        : initial,
  );
  const current = useRef(value);
  useEffect(() => {
    ctx.put(name, current.current);
  }, [ctx, name]);
  return [
    value,
    (next) => {
      const resolved =
        typeof next === "function"
          ? (next as (v: T) => T)(current.current)
          : next;
      current.current = resolved;
      ctx.put(name, resolved);
      setValue(resolved);
    },
  ];
}
export const isBoolean = (v: unknown) => typeof v === "boolean";
export const isCount = (v: unknown) =>
  Number.isInteger(v) && (v as number) >= 0;
export const isText = (v: unknown) => typeof v === "string";
export const isStrings = (v: unknown) =>
  Array.isArray(v) && v.every((x) => typeof x === "string");
export function isPlaces(v: unknown, length: number, max: number, min = 0) {
  return (
    Array.isArray(v) &&
    v.length === length &&
    v.every((x) => x === null || (Number.isInteger(x) && x >= min && x <= max))
  );
}
