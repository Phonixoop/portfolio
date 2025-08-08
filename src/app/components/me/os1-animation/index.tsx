"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import * as THREE from "three";

export function TubeCurve() {
  const animStep = useRef<number>(0);
  const acceleration = useRef<number>(0);
  const groupRef = useRef<THREE.Group>(null);
  const tubeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringCoverRef = useRef<THREE.Mesh>(null);
  const [toEnd, setToEnd] = useState<boolean>(false);

  const pi2 = Math.PI * 2;
  const length = 30;
  const radius = 5.6;

  const easing = (t: number, b: number, c: number, d: number): number => {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  };

  useFrame(() => {
    animStep.current = Math.max(
      0,
      Math.min(240, toEnd ? animStep.current + 1 : animStep.current - 4),
    );
    acceleration.current = easing(animStep.current, 0, 1, 240);
    const acc = acceleration.current;

    if (tubeRef.current) tubeRef.current.rotation.x += 0.035 + acc;
    if (
      groupRef.current &&
      tubeRef.current &&
      ringRef.current &&
      ringCoverRef.current
    ) {
      if (acc > 0.35) {
        let progress = (acc - 0.35) / 0.65;
        groupRef.current.rotation.y = (-Math.PI / 2) * progress;
        groupRef.current.position.z = 50 * progress;

        let fade = Math.max(0, (acc - 0.97) / 0.03);
        (tubeRef.current.material as THREE.Material).opacity = 1 - fade;
        (ringCoverRef.current.material as THREE.Material).opacity = (
          ringRef.current.material as THREE.Material
        ).opacity = fade;
        ringRef.current.scale.x = ringRef.current.scale.y = 0.9 + 0.1 * fade;
      }
    }
    setTimeout(() => {
      setToEnd(true);
    }, 600);
  });

  const handlePointerDown = () => setToEnd(true);
  const handlePointerUp = () => setToEnd(false);

  const curve = new CustomTubeCurve(length, radius);

  return (
    <group
      ref={groupRef}

      //   onPointerDown={handlePointerDown}
      //   onPointerUp={handlePointerUp}
    >
      <mesh
        ref={tubeRef}
        geometry={new THREE.TubeGeometry(curve, 200, 1.1, 2, true)}
      >
        <meshBasicMaterial attach="material" color={0xe2c9ad} transparent />
      </mesh>
      <mesh
        ref={ringCoverRef}
        position={[length + 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        {/* <planeGeometry args={[50, 15]} /> */}
        <meshBasicMaterial color={0xd1684e} opacity={0} transparent />
      </mesh>
      <mesh
        ref={ringRef}
        position={[length + 1.1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <ringGeometry args={[4.3, 5.55, 32]} />
        <meshBasicMaterial color={0xe2c9ad} opacity={0} transparent />
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, 0, -2.5 + i * 0.5]}>
          <planeGeometry args={[length * 2 + 1, radius * 3]} />
          <meshBasicMaterial color={0xd1684e} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

class CustomTubeCurve extends THREE.Curve<THREE.Vector3> {
  private length: number;
  private radius: number;
  private pi2: number;

  constructor(length: number, radius: number) {
    super();
    this.length = length;
    this.radius = radius;
    this.pi2 = Math.PI * 2;
  }

  getPoint(percent: number): THREE.Vector3 {
    const { length, radius, pi2 } = this;
    let x = length * Math.sin(pi2 * percent);
    let y = radius * Math.cos(pi2 * 3 * percent);
    let t = (percent % 0.25) / 0.25;
    t = (percent % 0.25) - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);
    if (Math.floor(percent / 0.25) === 0 || Math.floor(percent / 0.25) === 2) {
      t *= -1;
    }
    let z = radius * Math.sin(pi2 * 2 * (percent - t));
    return new THREE.Vector3(x, y, z);
  }
}
