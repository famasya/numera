import { useEffect, useRef } from "react";
import { X, Check, LockKeyhole, ArrowRight } from "lucide-react";
import { type RegionId, regionInfo } from "../content/regions";
import { puzzles } from "../content/puzzles";
import { TokenArt } from "./TokenArt";
import { missions } from "../content/missions";
import { nodeState, type Progress } from "../world/progression/store";
import { Flower, Lumi } from "./Art";
import { ObjectArt, Dots } from "../activities/adventure/Objects";
function MissionPicture({ index }: { index: number }) {
  const m = missions[index];
  if (m.id in puzzles) {
    const p = puzzles[m.id as keyof typeof puzzles];
    const tokens =
      "tokens" in p
        ? p.tokens
        : [
            { kind: "star" as const, color: 0 },
            { kind: "arrow" as const, color: 1 },
          ];
    return (
      <span className="mission-picture">
        {tokens.slice(0, 2).map((t, i) => (
          <TokenArt token={t} key={i} />
        ))}
      </span>
    );
  }
  if (index === 3 || index === 10)
    return (
      <span className="mission-picture">
        <ObjectArt kind="friend" />
        <ObjectArt kind="fruit" />
      </span>
    );
  if (index === 4 || index === 8)
    return (
      <span className="mission-picture">
        <ObjectArt kind="stone" />
        <ObjectArt kind="stone" />
      </span>
    );
  if (index === 6)
    return (
      <span className="mission-picture">
        <ObjectArt kind="leaf" />
        <Flower />
      </span>
    );
  if (index === 5)
    return (
      <span className="mission-picture">
        <Dots count={3} />
        <Flower />
      </span>
    );
  return (
    <span className="mission-picture">
      <Flower />
      <Flower
        color={
          index === 0 || index === 7
            ? "var(--flower-pink)"
            : "var(--flower-yellow)"
        }
      />
    </span>
  );
}
export function MissionPicker({
  progress,
  region,
  onEnter,
  onClose,
}: {
  progress: Progress;
  region: RegionId;
  onEnter: (index: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return (
    <dialog
      ref={dialog}
      className="mission-picker"
      aria-labelledby="mission-picker-title"
      onCancel={onClose}
    >
      <header className="picker-heading">
        <Lumi />
        <div>
          <h2 id="mission-picker-title">{regionInfo(region).name}</h2>
          <p>Pilih misi yang ingin dimainkan.</p>
        </div>
        <button
          className="round-button"
          aria-label="Tutup pilihan misi"
          onClick={onClose}
        >
          <X />
        </button>
      </header>
      <div className="mission-grid">
        {missions.map((m, i) => {
          if (m.region !== region) return null;
          const state = nodeState(progress, i);
          return (
            <button
              key={m.id}
              className={`mission-choice ${state}`}
              disabled={state === "locked"}
              aria-label={`${m.title}${state === "completed" ? ", main lagi" : state === "locked" ? ", belum terbuka" : ", mulai bermain"}`}
              onClick={() => onEnter(i)}
            >
              <MissionPicture index={i} />
              <span className="mission-choice-title">{m.title}</span>
              <span className="mission-choice-status">
                {state === "completed" ? (
                  <Check />
                ) : state === "locked" ? (
                  <LockKeyhole />
                ) : (
                  <ArrowRight />
                )}
              </span>
            </button>
          );
        })}
      </div>
      <p className="picker-note">
        Misi berikutnya terbuka setelah misi sebelumnya selesai.
      </p>
    </dialog>
  );
}
