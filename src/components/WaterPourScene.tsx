import { Canvas, events, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

type Props = {
  amounts: readonly [number, number];
  total: number;
  source: 0 | 1;
  pouring: boolean;
  tilts: readonly [number, number];
  onSource: (source: 0 | 1) => void;
  onTilt: (source: 0 | 1, tilt: number) => void;
  onStart: (source: 0 | 1) => void;
  onStop: () => void;
};

function useWaterPalette() {
  const [palette, setPalette] = useState({
    glass: "#f3f5e9",
    rim: "#405b47",
    water: "#237b86",
    ink: "#2e4638",
    selected: "#e7b94f",
    ground: "#c6d6a7",
  });
  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setPalette({
      glass:
        styles.getPropertyValue("--color-surface-glass").trim() ||
        palette.glass,
      rim: styles.getPropertyValue("--color-border").trim() || palette.rim,
      water:
        styles.getPropertyValue("--color-water-deep").trim() || palette.water,
      ink: styles.getPropertyValue("--color-ink").trim() || palette.ink,
      selected:
        styles.getPropertyValue("--color-focus").trim() || palette.selected,
      ground:
        styles.getPropertyValue("--color-garden").trim() || palette.ground,
    });
    // Read design tokens once; fallback values keep the scene visible before hydration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return palette;
}

function Vessel({
  side,
  amount,
  total,
  source,
  pouring,
  onSource,
  onTilt,
  onStart,
  onStop,
  tilts,
  palette,
}: Props & {
  side: 0 | 1;
  amount: number;
  palette: ReturnType<typeof useWaterPalette>;
}) {
  const width = side === 0 ? 0.78 : 0.55;
  const height = 2.2;
  const fillFraction = amount / (total * 20);
  const fill = fillFraction * (height - 0.18) * (side === 0 ? 0.4 : 0.8);
  const x = side === 0 ? -1.65 : 1.65;
  const direction = side === 0 ? -1 : 1;
  const angle = (direction * tilts[side] * Math.PI) / 180;
  const lift = Math.sin(Math.abs(angle)) * 0.65;
  const startY = useRef<number | null>(null);
  const pointerStart = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onSource(side);
    onStart(side);
    (
      event.target as unknown as {
        setPointerCapture?: (pointerId: number) => void;
      } | null
    )?.setPointerCapture?.(event.pointerId);
    startY.current = event.nativeEvent.clientY;
    onTilt(side, 0);
  };
  const pointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (startY.current === null) return;
    const tilt = Math.max(
      0,
      Math.min(78, (startY.current - event.nativeEvent.clientY) * 0.85),
    );
    onTilt(side, tilt);
  };
  const pointerEnd = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    startY.current = null;
    onTilt(side, 0);
    onStop();
  };
  return (
    <group position={[x, -0.2 + lift, 0]}>
      <group rotation={[0, 0, angle]}>
        <mesh
          position={[0, 0, 0]}
          onClick={(event) => {
            event.stopPropagation();
            onSource(side);
          }}
        >
          <cylinderGeometry args={[width, width, height, 32, 1, true]} />
          <meshPhysicalMaterial
            color={palette.glass}
            transparent
            opacity={0.24}
            roughness={0.18}
            metalness={0.04}
            side={2}
            depthWrite={false}
          />
        </mesh>
        {amount > 0 && (
          <mesh position={[0, -height / 2 + fill / 2 + 0.06, 0]}>
            <cylinderGeometry args={[width * 0.76, width * 0.76, fill, 32]} />
            <meshStandardMaterial color={palette.water} roughness={0.24} />
          </mesh>
        )}
        <mesh position={[0, height / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[width, 0.055, 10, 32]} />
          <meshStandardMaterial
            color={side === source ? palette.selected : palette.rim}
          />
        </mesh>
        <mesh position={[direction * (width + 0.15), 0.05, 0.02]}>
          <torusGeometry args={[0.26, 0.065, 10, 24]} />
          <meshStandardMaterial
            color={side === source ? palette.selected : palette.rim}
          />
        </mesh>
        <mesh position={[direction * (width + 0.035), 0.05, 0.02]}>
          <boxGeometry args={[0.16, 0.14, 0.14]} />
          <meshStandardMaterial color={palette.rim} />
        </mesh>
        {/* A separate, generous handle is the direct tilt control. */}
        <mesh
          position={[direction * (width + 0.15), 0.05, 0.02]}
          onPointerDown={pointerStart}
          onPointerMove={pointerMove}
          onPointerUp={pointerEnd}
          onPointerCancel={pointerEnd}
          onLostPointerCapture={() => {
            startY.current = null;
            onTilt(side, 0);
            onStop();
          }}
        >
          <sphereGeometry args={[0.22, 16, 12]} />
          <meshBasicMaterial transparent opacity={0.001} depthWrite={false} />
        </mesh>
        <mesh position={[0, -height / 2 - 0.06, 0]}>
          <cylinderGeometry args={[width * 0.92, width * 0.92, 0.12, 32]} />
          <meshStandardMaterial color={palette.rim} />
        </mesh>
      </group>
    </group>
  );
}

export default function WaterPourScene(props: Props) {
  const palette = useWaterPalette();
  const stream = props.pouring && props.tilts[props.source] >= 32;
  const transferred = props.amounts[1 - props.source];
  const flowProgress = (transferred % 20) / 20;
  const sourceX = props.source === 0 ? -1.65 : 1.65;
  const targetX = -sourceX;
  const sourceDirection = props.source === 0 ? -1 : 1;
  const pourAngle =
    (sourceDirection * props.tilts[props.source] * Math.PI) / 180;
  const sourceLift = Math.sin(Math.abs(pourAngle)) * 0.65;
  const lipX = sourceX - Math.sin(pourAngle) * 1.1;
  const lipY = -0.2 + sourceLift + Math.cos(pourAngle) * 1.1;
  const targetLipY = 0.7;
  const streamX = targetX - lipX;
  const streamY = targetLipY - lipY;
  const streamLength = Math.hypot(streamX, streamY);
  const streamAngle = Math.atan2(-streamX, streamY);
  return (
    <Canvas
      aria-label={`Wadah lebar ${props.amounts[0] ? "berisi air" : "kosong"}; wadah sempit ${props.amounts[1] ? "berisi air" : "kosong"}`}
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
      camera={{ position: [0, 0.8, 9], zoom: 72, near: 0.1, far: 30 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 5, 7]} intensity={1.2} />
      <mesh position={[0, -1.45, 0]}>
        <boxGeometry args={[6.8, 0.18, 2.1]} />
        <meshStandardMaterial color={palette.ground} />
      </mesh>
      {([0, 1] as const).map((side) => (
        <Vessel
          key={side}
          {...props}
          side={side}
          amount={props.amounts[side]}
          palette={palette}
        />
      ))}
      {stream && (
        <group
          position={[(lipX + targetX) / 2, (lipY + targetLipY) / 2, 0.12]}
          rotation={[0, 0, streamAngle]}
        >
          <mesh>
            <cylinderGeometry args={[0.075, 0.12, streamLength, 12]} />
            <meshStandardMaterial
              color={palette.water}
              transparent
              opacity={0.9}
            />
          </mesh>
          {[0, 1, 2].map((i) => (
            <mesh
              key={i}
              position={[
                -Math.sin(streamAngle) *
                  (0.48 - ((flowProgress + i / 3) % 1) * 0.96),
                Math.cos(streamAngle) *
                  (0.48 - ((flowProgress + i / 3) % 1) * 0.96),
                0.08,
              ]}
            >
              <sphereGeometry args={[0.09, 12, 8]} />
              <meshStandardMaterial color={palette.water} />
            </mesh>
          ))}
        </group>
      )}
    </Canvas>
  );
}
