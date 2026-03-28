"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.1}>
      <mesh ref={meshRef} position={[0, 0.2, 0]}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const positions = useMemo(() => {
   const count = isMobile ? 520 : 260;
    const spreadX = isMobile ? 8 : 10;
    const spreadY = isMobile ? 10 : 12;
    const spreadZ = isMobile ? 5 : 6;

    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spreadX;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
    }

    return arr;
  }, [isMobile]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
     <PointMaterial
  transparent
  color="#67e8f9"
  size={isMobile ? 2.2 : 1.2}
  sizeAttenuation={false}
  depthWrite={false}
  opacity={1}
/>
    </Points>
  );
}

export default function HeroScene() {
  return (
    <div className="h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 3]} intensity={1.5} />
        <Particles />
        <Orb />
      </Canvas>
    </div>
  );
}