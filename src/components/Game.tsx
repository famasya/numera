import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { clearMissionSession } from "../world/progression/session";
import { useEffect, useState } from "react";
import { Volume2, VolumeX, Shield, Leaf, Map } from "lucide-react";
import { WorldMap } from "../world/map/WorldMap";
import { Garden } from "../world/regions/Garden";
import { useProgress, record, nodeState } from "../world/progression/store";
import { Lumi, Sprout } from "./Art";
import { MissionPicker } from "./MissionPicker";
import { ConceptMapDialog } from "./ConceptTree";
import { ParentMode } from "./ParentMode";
import { speak } from "./Audio";
import { regionInfo, isRegion, type RegionId } from "../content/regions";
import { missions } from "../content/missions";
export function Game() {
  const { progress, setProgress, ready, storageOk } = useProgress();
  const params = useParams({ strict: false });
  const navigate = useNavigate();
  const search = useSearch({ strict: false });
  const missionId = "missionId" in params ? params.missionId : undefined;
  const routeRegion = "regionId" in params ? params.regionId : "taman-angka";
  const found = missions.findIndex(
    (m) => m.id === missionId && m.region === routeRegion,
  );
  const scene = found >= 0 ? found : null;
  const parent = search.orangtua === true;
  const concept = search.konsep === true;
  const cluster =
    scene === null && isRegion(search.wilayah) ? search.wilayah : null;
  function openRegion(wilayah: RegionId) {
    void navigate({ to: "/", search: { wilayah } });
  }
  function closeGarden() {
    void navigate({ to: "/", search: {}, replace: true });
  }
  function setConcept(open: boolean) {
    void navigate({
      to: "/",
      search: { konsep: open ? true : undefined },
      replace: true,
    });
  }
  function setParent(open: boolean) {
    if (scene === null)
      void navigate({
        to: "/",
        search: { wilayah: search.wilayah, orangtua: open ? true : undefined },
        replace: true,
      });
    else
      void navigate({
        to: "/$regionId/$missionId",
        params: {
          regionId: missions[scene].region,
          missionId: missions[scene].id,
        },
        search: { wilayah: search.wilayah, orangtua: open ? true : undefined },
        replace: true,
      });
  }

  function goMap() {
    void navigate({ to: "/", search: { orangtua: undefined } });
  }
  useEffect(() => {
    if (
      ready &&
      missionId &&
      (found < 0 || nodeState(progress, found) === "locked")
    ) {
      void navigate({
        to: "/",
        search: { orangtua: undefined },
        replace: true,
      });
    }
  }, [ready, missionId, found, progress.completed, navigate]);
  const [hasVoice, setHasVoice] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [scene]);
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const update = () =>
      setHasVoice(
        window.speechSynthesis
          .getVoices()
          .some((v) => v.lang.toLowerCase().startsWith("id")),
      );
    update();
    window.speechSynthesis.addEventListener("voiceschanged", update);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", update);
  }, []);
  function enter(i: number) {
    if (!ready || nodeState(progress, i) === "locked") return;
    if (progress.completed.includes(missions[i].id))
      clearMissionSession(missions[i].id);
    void navigate({
      to: "/$regionId/$missionId",
      params: { regionId: missions[i].region, missionId: missions[i].id },
      search: { orangtua: undefined },
    });
    speak(missions[i].instruction, progress.audio);
  }
  return (
    <>
      <section
        className="unsupported-device"
        role="status"
        aria-label="Perangkat belum didukung"
      >
        <Lumi />
        <h1>Numera untuk tablet</h1>
        <p>Perangkat ini belum didukung.</p>
        <p>Buka Numera di tablet atau komputer.</p>
      </section>
      <div className="app-shell">
        <header className="site-header">
          <button
            className="wordmark"
            disabled={scene !== null}
            aria-label={scene === null ? "Numera, peta dunia" : "Numera"}
            onClick={goMap}
          >
            <span className="brand-mark">
              <Sprout />
            </span>
            numera<span className="brand-spark">✦</span>
          </button>
          <div className="header-center">
            <span className="status-dot" />
            {scene === null
              ? "Ayo bermain bersama Lumi"
              : `Petualangan di ${regionInfo(missions[scene].region).name}`}
          </div>
          <nav className="header-actions" aria-label="Pengaturan">
            <button
              className="round-button audio-button"
              aria-label={progress.audio ? "Matikan suara" : "Aktifkan suara"}
              aria-pressed={progress.audio}
              onClick={() => setProgress((p) => ({ ...p, audio: !p.audio }))}
            >
              {progress.audio ? <Volume2 size={21} /> : <VolumeX size={21} />}
            </button>
            <button
              className="parent-entry"
              onClick={() => setParent(true)}
              aria-label="Buka mode orang tua"
            >
              <Shield size={17} />
              <span>Orang tua</span>
            </button>
          </nav>
        </header>
        <main>
          {!ready ? (
            <section
              className="progress-loading"
              role="status"
              aria-label="Membuka petualangan"
            >
              <Lumi />
              <p>Membuka petualangan…</p>
            </section>
          ) : scene === null ? (
            <>
              <div className="world-heading">
                <div>
                  <span className="eyebrow">
                    <Leaf size={13} /> SELAMAT DATANG DI NUMERA
                  </span>
                  <h1>
                    Ayo jelajahi <em>Numera.</em>
                  </h1>
                  <p>Pilih wilayah yang ingin kamu jelajahi.</p>
                </div>
                <button
                  className="concept-entry"
                  onClick={() => setConcept(true)}
                  aria-label="Buka peta konsep pembelajaran"
                >
                  <span className="journey-icon">
                    <Map size={23} />
                  </span>
                  <span>
                    Untuk orang tua
                    <strong>
                      Peta konsep <span>↗</span>
                    </strong>
                  </span>
                </button>
              </div>
              <WorldMap progress={progress} onOpenRegion={openRegion} />
              <div className="world-footer">
                <span>
                  <span className="tiny-spark">✧</span> Kamu boleh mencoba lagi.
                </span>
                <span className="footer-leaves">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={
                        progress.completed.length >= (i + 1) * 4 ? "grown" : ""
                      }
                    >
                      <Sprout />
                    </span>
                  ))}
                  <small>Taman Angka</small>
                </span>
              </div>
            </>
          ) : (
            <Garden
              key={scene}
              index={scene}
              progress={progress}
              onRecord={(e) => setProgress((p) => record(p, e))}
              onExit={goMap}
              onNext={enter}
            />
          )}
        </main>
        {concept && !parent && scene === null && (
          <ConceptMapDialog
            progress={progress}
            onEnter={enter}
            onClose={() => setConcept(false)}
          />
        )}
        {cluster && !parent && !concept && (
          <MissionPicker
            region={cluster}
            progress={progress}
            onEnter={enter}
            onClose={closeGarden}
          />
        )}
        {parent && (
          <ParentMode
            progress={progress}
            activeMission={scene === null ? undefined : missions[scene].id}
            storageOk={storageOk}
            onClose={() => setParent(false)}
          />
        )}
        <footer className="site-footer">
          <span>
            NUMERA <i>•</i> A little world of big discoveries
          </span>
          <span>
            {hasVoice
              ? "Petunjuk suara Indonesia tersedia"
              : "Petunjuk visual selalu menemani"}{" "}
            <span className="footer-dot" />
          </span>
        </footer>
      </div>
    </>
  );
}
