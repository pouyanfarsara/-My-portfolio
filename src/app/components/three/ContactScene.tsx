"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[1.8, 0.2, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

export default function ContactScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 2]} intensity={1.2} />
        <Particles />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}
