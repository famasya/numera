import { Canvas, events } from "@react-three/fiber";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BoxGeometry } from "three";
import type { SpatialProps } from "./SpatialView";
const threeFaceIds = [3, 2, 5, 4, 1, 0];
function CubeEdges({
  size,
  color,
}: {
  size: [number, number, number];
  color: string;
}) {
  const [x, y, z] = size;
  const box = useMemo(() => new BoxGeometry(x, y, z), [x, y, z]);
  useEffect(() => () => box.dispose(), [box]);
  return (
    <lineSegments raycast={() => {}}>
      <edgesGeometry args={[box]} />
      <lineBasicMaterial color={color} />
    </lineSegments>
  );
}
const faceMarkers: {
  position: [number, number, number];
  rotation: [number, number, number];
}[] = [
  { position: [0, 0, -1.012], rotation: [0, Math.PI, 0] },
  { position: [0, 0, 1.012], rotation: [0, 0, 0] },
  { position: [-1.012, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  { position: [1.012, 0, 0], rotation: [0, Math.PI / 2, 0] },
  { position: [0, -1.012, 0], rotation: [Math.PI / 2, 0, 0] },
  { position: [0, 1.012, 0], rotation: [-Math.PI / 2, 0, 0] },
];
function usePalette() {
  const [colors, setColors] = useState<Record<string, string>>({});
  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const names = [
      "--color-basket",
      "--color-basket-edge",
      "--flower-yellow",
      "--flower-purple",
      "--color-ocean",
      "--color-soft",
      "--flower-pink",
      "--flower-leaf",
      "--color-ink",
      "--color-primary",
      "--color-basket-rim",
      "--color-basket-stripe",
      "--color-soil-light",
      "--color-warm",
    ];
    setColors(
      Object.fromEntries(
        names.map((name) => [name, style.getPropertyValue(name).trim()]),
      ),
    );
  }, []);
  return colors;
}
export default function SpatialScene({
  fallback,
  ...p
}: SpatialProps & { fallback: ReactNode }) {
  const colors = usePalette();
  if (!colors["--color-basket"]) return fallback;
  const tint = p.color?.startsWith("var(")
    ? colors[p.color.slice(4, -1)]
    : p.color;
  const height = p.height ?? 2;
  return (
    <Canvas
      events={(state) => ({
        ...events(state),
        compute: (event, current) => {
          const rect = current.gl.domElement.getBoundingClientRect();
          current.pointer.set(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1,
          );
          current.raycaster.setFromCamera(current.pointer, current.camera);
        },
      })}
      orthographic
      flat
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 12],
        zoom: (p.filled ? 34 : p.marked ? 65 : 50) * (p.zoom ?? 1),
        near: 0.1,
        far: 50,
      }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      fallback={fallback}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 7, 8]} intensity={1.3} />
      <group rotation={[(p.pitch * Math.PI) / 180, 0, 0]}>
        <group rotation={[0, (p.yaw * Math.PI) / 180, 0]}>
          {p.filled ? (
            <group position={[0, -(height + 1) / 2, 0]}>
              {p.filled.map((filled, i) => {
                const beam = i === height * 2;
                return (
                  <mesh
                    key={i}
                    position={
                      beam
                        ? [0, height + 0.5, 0]
                        : [i % 2 ? 1 : -1, Math.floor(i / 2) + 0.5, 0]
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      p.onBlock?.(i);
                    }}
                  >
                    <boxGeometry args={beam ? [3, 1, 1] : [1, 1, 1]} />
                    <meshStandardMaterial
                      color={
                        filled
                          ? colors["--color-basket"]
                          : colors["--color-soft"]
                      }
                      transparent={!filled}
                      opacity={filled ? 1 : 0.15}
                      depthWrite={filled}
                    />
                    <CubeEdges
                      size={beam ? [3, 1, 1] : [1, 1, 1]}
                      color={colors["--color-ink"]}
                    />
                  </mesh>
                );
              })}
              <mesh position={[0, -0.07, 0]}>
                <boxGeometry args={[4, 0.12, 2]} />
                <meshStandardMaterial color={colors["--flower-leaf"]} />
              </mesh>
            </group>
          ) : (
            <mesh>
              {p.kind === "sphere" ? (
                <sphereGeometry args={[1, 32, 24]} />
              ) : p.kind === "cylinder" ? (
                <cylinderGeometry args={[1, 1, 2, 32]} />
              ) : (
                <boxGeometry args={[2, 2, 2]} />
              )}
              {(p.kind ?? "cube") === "cube" ? (
                threeFaceIds.map((id, i) => (
                  <meshBasicMaterial
                    key={id}
                    attach={`material-${i}`}
                    color={
                      p.marked?.includes(id)
                        ? colors["--flower-yellow"]
                        : (tint ??
                          colors[
                            [
                              "--color-basket-edge",
                              "--color-basket-rim",
                              "--color-soil-light",
                              "--color-basket",
                              "--color-basket-stripe",
                              "--color-warm",
                            ][id]
                          ])
                    }
                  />
                ))
              ) : (
                <meshStandardMaterial
                  color={
                    tint ??
                    colors[
                      p.kind === "sphere" ? "--flower-purple" : "--color-ocean"
                    ]
                  }
                />
              )}
              {(p.kind ?? "cube") === "cube" && (
                <>
                  {p.onFace &&
                    faceMarkers.map((face, id) => (
                      <mesh
                        key={`surface-${id}`}
                        position={face.position}
                        rotation={face.rotation}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (
                            p.interaction === "mark" ||
                            p.canPick?.() !== false
                          )
                            p.onFace?.(id);
                        }}
                      >
                        <planeGeometry args={[2, 2]} />
                        <meshBasicMaterial
                          transparent
                          opacity={0}
                          depthWrite={false}
                        />
                      </mesh>
                    ))}
                  <CubeEdges size={[2, 2, 2]} color={colors["--color-ink"]} />
                  {p.marked?.map((id) => (
                    <mesh
                      key={id}
                      raycast={() => {}}
                      position={faceMarkers[id].position}
                      rotation={faceMarkers[id].rotation}
                    >
                      <circleGeometry args={[0.15, 24]} />
                      <meshBasicMaterial color={colors["--color-primary"]} />
                    </mesh>
                  ))}
                </>
              )}
            </mesh>
          )}
        </group>
      </group>
    </Canvas>
  );
}
