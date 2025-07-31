import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

// --- 3D NODE DATA ---
// Example: 20 random node positions
const NODES = [
  [-0.95, -0.55, 2.15], [-2.70, -2.11, -0.58], [0.79, -0.91, -1.89], [-0.44, -1.38, 1.44], [-1.65, 1.15, 1.12],
  [0.95, 1.88, 2.39], [2.23, -0.63, 1.37], [-2.03, 2.19, -2.44], [1.55, 2.06, 2.97], [2.89, -2.07, -0.38],
  [-0.53, 0.24, -2.44], [-1.91, 0.88, -1.05], [-0.71, -2.87, -0.30], [-0.61, 2.56, -1.35], [-0.01, -2.84, -1.16],
  [1.18, 0.40, -2.60], [-2.40, -0.85, 1.36], [0.97, -0.04, -1.44], [0.96, 0.07, 2.19], [-2.47, 0.87, 2.78]
];
const EDGES = [
  [0,3],[0,16],[0,18],[1,12],[1,16],[1,14],[2,17],[2,15],[2,10],[3,16],[3,18],[4,19],[4,16],[5,8],[5,18],[6,18],[6,9],
  [7,13],[7,11],[7,10],[8,18],[9,17],[10,15],[10,17],[11,13],[12,14],[15,17]
];

// --- 3D COMPONENTS ---
function Node({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.13, 20, 20]} />
      <meshStandardMaterial
        color="#b980ff"
        emissive="#a249ff"
        emissiveIntensity={1.7}
        metalness={0.15}
        roughness={0.3}
      />
    </mesh>
  );
}

function Connection({ from, to }) {
  const points = [from, to].map(([x, y, z]) => new THREE.Vector3(x, y, z));
  return (
    <line>
      <bufferGeometry setFromPoints={points} />
      <lineBasicMaterial color="#ffffff" opacity={0.4} transparent />
    </line>
  );
}

export default function NetworkBackground() {
  const group = useRef();
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += 0.09 * delta;
      group.current.rotation.x += 0.018 * delta;
    }
  });

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <group ref={group}>
          {EDGES.map(([start, end], i) => (
            <Connection key={i} from={NODES[start]} to={NODES[end]} />
          ))}
          {NODES.map((pos, i) => (
            <Node key={i} position={pos} />
          ))}
        </group>
        <ambientLight intensity={0.6} />
        <pointLight intensity={0.92} position={[0, 3, 6]} color="#fff0fa" />
      </Canvas>
    </div>
  );
}
