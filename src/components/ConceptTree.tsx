import { missionPurpose, regionPurpose } from "../content/learning-purpose";
import { LearningPurpose } from "./LearningPurpose";
import { useEffect, useMemo, useRef, useState } from "react";
import Tree, {
  type CustomNodeElementProps,
  type RawNodeDatum,
} from "react-d3-tree";
import { Minus, Plus, X } from "lucide-react";
import { regionInfo, regions, type RegionId } from "../content/regions";
import { missions } from "../content/missions";
import { parentGuides, parentSources } from "../content/parent-guides";
import { nodeState, type Progress } from "../world/progression/store";

type NodeKind = "root" | "region" | "mission";
export type ConceptSelection =
  | { kind: "region"; region: RegionId }
  | { kind: "mission"; index: number }
  | null;

const nodeSize: Record<NodeKind, { w: number; h: number }> = {
  root: { w: 96, h: 38 },
  region: { w: 148, h: 38 },
  mission: { w: 182, h: 38 },
};

function conceptData(progress: Progress): RawNodeDatum {
  return {
    name: "Numera",
    attributes: { kind: "root" },
    children: regions.map((r) => ({
      name: r.name,
      attributes: {
        kind: "region",
        region: r.id,
      },
      children: missions
        .map((m, index) => ({ m, index }))
        .filter(({ m }) => m.region === r.id)
        .map(({ m, index }) => ({
          name: m.title,
          attributes: {
            kind: "mission",
            index,
            state: nodeState(progress, index),
          },
        })),
    })),
  };
}

function ConceptNode({
  nodeDatum,
  toggleNode,
  onNodeClick,
  picked,
}: CustomNodeElementProps & { picked: boolean }) {
  const kind = (nodeDatum.attributes?.kind ?? "mission") as NodeKind;
  const state = nodeDatum.attributes?.state as string | undefined;
  const { w, h } = nodeSize[kind];
  const cls = `concept-node concept-${kind}${state ? ` ${state}` : ""}${
    picked ? " selected" : ""
  }`;
  if (kind === "root")
    return (
      <foreignObject width={w} height={h} x={-w / 2} y={-h / 2}>
        <div className={cls}>{nodeDatum.name}</div>
      </foreignObject>
    );
  return (
    <foreignObject width={w} height={h} x={-w / 2} y={-h / 2}>
      <button
        type="button"
        className={cls}
        aria-expanded={
          kind === "region" ? !nodeDatum.__rd3t.collapsed : undefined
        }
        onClick={
          kind === "region"
            ? (e) => {
                onNodeClick(e);
                toggleNode();
              }
            : onNodeClick
        }
      >
        <span className="concept-node-label">{nodeDatum.name}</span>
        {kind === "region" &&
          (nodeDatum.__rd3t.collapsed ? (
            <Plus size={15} />
          ) : (
            <Minus size={15} />
          ))}
      </button>
    </foreignObject>
  );
}

export function ConceptTree({
  progress,
  selected,
  onSelect,
}: {
  progress: Progress;
  selected: ConceptSelection;
  onSelect: (sel: ConceptSelection) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<{ width: number; height: number }>();
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDims({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const data = useMemo(() => conceptData(progress), [progress]);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div
      className="concept-map"
      ref={box}
      aria-label="Peta konsep pembelajaran"
    >
      {dims && (
        <Tree
          data={data}
          orientation="horizontal"
          translate={{ x: 64, y: dims.height / 2 }}
          dimensions={dims}
          nodeSize={{ x: 250, y: 46 }}
          separation={{ siblings: 1, nonSiblings: 1.4 }}
          initialDepth={1}
          shouldCollapseNeighborNodes
          zoomable={false}
          transitionDuration={reducedMotion ? 0 : 350}
          pathFunc="elbow"
          pathClassFunc={() => "concept-link"}
          renderCustomNodeElement={(props) => {
            const a = props.nodeDatum.attributes;
            const picked =
              (a?.kind === "mission" &&
                selected?.kind === "mission" &&
                selected.index === a.index) ||
              (a?.kind === "region" &&
                selected?.kind === "region" &&
                selected.region === a.region);
            return <ConceptNode {...props} picked={picked} />;
          }}
          onNodeClick={(node) => {
            const a = node.data.attributes;
            if (a?.kind === "mission")
              onSelect({ kind: "mission", index: a.index as number });
            else if (a?.kind === "region")
              onSelect({ kind: "region", region: a.region as RegionId });
          }}
        />
      )}
    </div>
  );
}

function ConceptDetail({
  selection,
  progress,
  onEnter,
}: {
  selection: ConceptSelection;
  progress: Progress;
  onEnter: (index: number) => void;
}) {
  if (!selection)
    return (
      <p className="concept-detail-empty">
        Pilih wilayah atau misi untuk melihat panduan orang tua.
      </p>
    );
  if (selection.kind === "region") {
    const r = regionInfo(selection.region);
    const local = missions.filter((m) => m.region === r.id);
    const done = local.filter((m) => progress.completed.includes(m.id)).length;
    return (
      <>
        <span className="eyebrow">WILAYAH</span>
        <h3>{r.name}</h3>
        <LearningPurpose purpose={regionPurpose[r.id]} />
        <p>
          {done} dari {local.length} misi selesai.
        </p>
        <p className="concept-detail-hint">
          Buka wilayah di peta konsep untuk melihat daftar misinya.
        </p>
      </>
    );
  }
  const m = missions[selection.index];
  const state = nodeState(progress, selection.index);
  const guide = parentGuides[m.id];
  const source = parentSources[guide.source];
  return (
    <>
      <span className="eyebrow">{regionInfo(m.region).name}</span>
      <h3>{m.title}</h3>
      <p className="concept-detail-state">
        {state === "completed"
          ? "Selesai"
          : state === "current"
            ? "Sedang dimainkan"
            : "Belum terbuka"}
      </p>
      <p>
        <strong>Konsep:</strong> {m.concept}
      </p>
      <p>
        <strong>Instruksi anak:</strong> {m.instruction}
      </p>
      <LearningPurpose purpose={missionPurpose[m.id]} />
      <p className="parent-guide-card">
        <strong>Kegiatan:</strong> {guide.meaning}
      </p>
      <p className="parent-guide-card">
        <strong>Dampingi:</strong> {guide.coach}
      </p>
      <p className="parent-guide-card">
        <strong>Amati:</strong> {guide.observe}
      </p>
      {guide.nextActivity && (
        <p className="parent-guide-card">
          <strong>Coba di rumah:</strong> {guide.nextActivity}
        </p>
      )}
      <p className="parent-guide-card">
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
      <button
        className="primary"
        disabled={state === "locked"}
        onClick={() => onEnter(selection.index)}
      >
        Mainkan misi
      </button>
    </>
  );
}

export function ConceptMapDialog({
  progress,
  onEnter,
  onClose,
}: {
  progress: Progress;
  onEnter: (index: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<ConceptSelection>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return (
    <dialog
      ref={dialog}
      className="concept-dialog"
      aria-labelledby="concept-dialog-title"
      onCancel={onClose}
    >
      <header className="parent-heading">
        <div>
          <span className="eyebrow">UNTUK ORANG TUA</span>
          <h2 id="concept-dialog-title">Peta konsep pembelajaran</h2>
        </div>
        <button
          className="round-button"
          aria-label="Tutup peta konsep"
          onClick={onClose}
        >
          <X />
        </button>
      </header>
      <div className="concept-dialog-body">
        <ConceptTree
          progress={progress}
          selected={selected}
          onSelect={setSelected}
        />
        <aside
          className="concept-detail"
          aria-label="Panduan misi untuk orang tua"
        >
          <ConceptDetail
            selection={selected}
            progress={progress}
            onEnter={onEnter}
          />
        </aside>
      </div>
    </dialog>
  );
}
