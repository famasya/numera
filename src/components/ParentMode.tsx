import { X, Flower2, Lightbulb, Sprout } from "lucide-react";
import { useEffect, useRef } from "react";
import { parentGuides, parentSources } from "../content/parent-guides";
import { missions, type MissionId } from "../content/missions";
import { independentRuns, suggestion } from "../pedagogy/mastery/readiness";
import type { Progress } from "../world/progression/store";
export function ParentMode({
  progress,
  storageOk,
  onClose,
  activeMission,
}: {
  progress: Progress;
  storageOk: boolean;
  onClose: () => void;
  activeMission?: MissionId;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return (
    <dialog ref={dialog} className="parent-dialog" onCancel={onClose}>
      <div className="parent-heading">
        <div>
          <span className="eyebrow">UNTUK ORANG TUA</span>
          <h2>{activeMission ? "Panduan misi ini" : "Catatan bermain"}</h2>
        </div>
        <button
          className="round-button"
          aria-label="Tutup catatan orang tua"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <div
        className="parent-content"
        tabIndex={0}
        aria-label="Isi panduan orang tua"
      >
        <p className="parent-intro">
          {activeMission
            ? "Dampingi anak sesuai kegiatan yang sedang dimainkan. Beri waktu untuk mencoba sebelum membantu."
            : "Pilih materi misi untuk melihat cara mendampingi anak. Panduan Numera mengacu pada sumber yang ditautkan."}
        </p>
        {!storageOk && (
          <p role="alert">
            Penyimpanan perangkat tidak tersedia. Progres saat ini hanya
            tersimpan selama halaman terbuka.
          </p>
        )}
        {!activeMission && (
          <div className="parent-summary">
            <Flower2 />
            <strong>
              {progress.completed.length} dari {missions.length} misi selesai
            </strong>
          </div>
        )}
        {[...missions]
          .filter((m) => !activeMission || m.id === activeMission)
          .map((m) => {
            const runs = progress.evidence.filter((e) => e.mission === m.id);
            const guide = parentGuides[m.id];
            const source = parentSources[guide.source];
            return (
              <article className="parent-mission" key={m.id}>
                <h3>
                  {m.title}
                  <span>
                    {progress.completed.includes(m.id)
                      ? "Selesai"
                      : "Belum selesai"}
                  </span>
                </h3>
                <p>{m.concept}</p>
                <details
                  className="parent-learning"
                  open={m.id === activeMission}
                >
                  <summary>Materi dan cara mendampingi</summary>
                  <p>{guide.meaning}</p>
                  <p>
                    <strong>Dampingi:</strong> {guide.coach}
                  </p>
                  <p>
                    <strong>Amati:</strong> {guide.observe}
                  </p>
                  {guide.nextActivity && (
                    <p>
                      <strong>Coba di rumah:</strong> {guide.nextActivity}
                    </p>
                  )}
                  <p>
                    <strong>Referensi:</strong>{" "}
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                    {guide.additionalSource && (
                      <>
                        <br />
                        <a
                          href={parentSources[guide.additionalSource].url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {parentSources[guide.additionalSource].label}
                        </a>
                      </>
                    )}
                  </p>
                </details>
                <dl>
                  <div>
                    <dt>Sesi bermain</dt>
                    <dd>{runs.length}</dd>
                  </div>
                  <div>
                    <dt>Interaksi</dt>
                    <dd>{runs.reduce((n, e) => n + e.attempts, 0)}</dd>
                  </div>
                  <div>
                    <dt>Bantuan</dt>
                    <dd>{runs.reduce((n, e) => n + e.hints, 0)}</dd>
                  </div>
                  <div>
                    <dt>Selesai tanpa bantuan</dt>
                    <dd>{independentRuns(progress, m.id).length}</dd>
                  </div>
                </dl>
                {m.id === "free-pattern" && (
                  <p>
                    Pola yang dibuat:{" "}
                    {[...new Set(runs.flatMap((e) => e.solutions))]
                      .map((s) =>
                        s
                          .split("-")
                          .map((n) => (n === "0" ? "merah muda" : "kuning"))
                          .join(" → "),
                      )
                      .join(" · ") || "Belum ada pola."}
                  </p>
                )}
              </article>
            );
          })}
        {(!activeMission || activeMission === "composition") && (
          <div className="parent-solutions">
            <h3>
              <Sprout size={18} /> Susunan lima bunga di dua petak kebun
            </h3>
            <p>
              {[
                ...new Set(
                  progress.evidence
                    .filter((e) => e.mission === "composition")
                    .flatMap((e) => e.solutions),
                ),
              ]
                .map((s) => s.replace(":", " dan "))
                .join(" · ") || "Belum ada susunan yang disimpan."}
            </p>
          </div>
        )}
        {!activeMission && (
          <div className="parent-suggestion">
            <h3>
              <Lightbulb size={19} /> Coba bersama selanjutnya
            </h3>
            <p>{suggestion(progress)}</p>
          </div>
        )}
        <p className="privacy-note">
          Hanya disimpan di perangkat ini. Tidak ada akun atau data pribadi.
          Bantuan mencakup petunjuk dan arahan saat susunan belum sesuai.
          Penyelesaian misi tidak berarti konsep sudah dikuasai.
        </p>
      </div>
      <button className="primary" onClick={onClose}>
        Kembali bermain
      </button>
    </dialog>
  );
}
