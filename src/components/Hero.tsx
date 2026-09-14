"use client";

import { motion } from "framer-motion";
import { useRef, useMemo, Suspense } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, useFBX, Center } from "@react-three/drei";
import styles from "./Hero.module.css";
import * as THREE from "three";

interface FloatingCubeProps {
  fbx: THREE.Group;
  position: [number, number, number];
  scale: number;
  color: string;
  emissiveColor: string;
  rotationSpeed: number;
  floatSpeed?: number;
  floatIntensity?: number;
  initialRotation?: [number, number, number];
}

function customizeMaterial(mat: any, accentColor: string, emissiveColor: string) {
  if (!mat) return;
  if (mat.name === "Material.001" || mat.name.includes("001")) {
    mat.color = new THREE.Color(accentColor);
    if (mat.emissive) {
      mat.emissive = new THREE.Color(emissiveColor);
      mat.emissiveIntensity = 0.55;
    }
    if ('roughness' in mat) mat.roughness = 0.2;
    if ('metalness' in mat) mat.metalness = 0.85;
    mat.needsUpdate = true;
  } else {
    // Cuerpo del cubo: acabado Space Black / Obsidiana Mate premium
    mat.color = new THREE.Color("#161618");
    if ('roughness' in mat) mat.roughness = 0.45;
    if ('metalness' in mat) mat.metalness = 0.3;
    mat.needsUpdate = true;
  }
}

function FloatingCube({
  fbx,
  position,
  scale,
  color,
  emissiveColor,
  rotationSpeed,
  floatSpeed = 1.5,
  floatIntensity = 0.5,
  initialRotation = [0.2, 0, 0]
}: FloatingCubeProps) {
  const cubeRef = useRef<THREE.Group>(null);

  // Clonar el modelo FBX y sus materiales para que cada cubo tenga su color propio
  const clonedModel = useMemo(() => {
    const clone = fbx.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((mat) => {
            const m = mat.clone();
            customizeMaterial(m, color, emissiveColor);
            return m;
          });
        } else if (mesh.material) {
          const m = mesh.material.clone();
          customizeMaterial(m, color, emissiveColor);
          mesh.material = m;
        }
      }
    });
    return clone;
  }, [fbx, color, emissiveColor]);

  // Rotación pausada y elegante sobre su propio eje
  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.2} floatIntensity={floatIntensity}>
      <group position={position} rotation={initialRotation}>
        <group ref={cubeRef}>
          <Center>
            <primitive object={clonedModel} scale={scale} />
          </Center>
        </group>
      </group>
    </Float>
  );
}

function Scene() {
  const fbx = useFBX('/cubetry1.fbx');

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[5, 3, 2]} intensity={1.2} color="#2997ff" />
      <pointLight position={[-5, -3, 2]} intensity={1.2} color="#bf5af2" />
      <Environment preset="city" />
      
      {/* 1. Cubo Primario - Azul Eléctrico Apple Pro (Derecha) */}
      <FloatingCube
        fbx={fbx}
        position={[2.4, 1.1, -0.5]}
        scale={0.0068}
        color="#2997ff"
        emissiveColor="#004db3"
        rotationSpeed={0.12}
        floatSpeed={1.4}
        floatIntensity={0.5}
        initialRotation={[0.3, 0.4, 0.1]}
      />

      {/* 2. Cubo Secundario - Siri Glow Violeta / Púrpura (Izquierda) */}
      <FloatingCube
        fbx={fbx}
        position={[-2.4, -1.0, -0.4]}
        scale={0.0065}
        color="#bf5af2"
        emissiveColor="#6b21a8"
        rotationSpeed={-0.10}
        floatSpeed={1.6}
        floatIntensity={0.4}
        initialRotation={[0.2, -0.3, 0.1]}
      />

      {/* 3. Cubo de Fondo - Titanio Esmeralda (Arriba Izquierda) */}
      <FloatingCube
        fbx={fbx}
        position={[-2.1, 1.6, -1.8]}
        scale={0.0050}
        color="#30d158"
        emissiveColor="#065f46"
        rotationSpeed={0.14}
        floatSpeed={1.7}
        floatIntensity={0.4}
        initialRotation={[-0.2, 0.5, 0.2]}
      />

      {/* 4. Cubo de Fondo - Oro Ámbar (Abajo Derecha) */}
      <FloatingCube
        fbx={fbx}
        position={[2.3, -1.4, -1.5]}
        scale={0.0052}
        color="#ffd60a"
        emissiveColor="#92400e"
        rotationSpeed={-0.13}
        floatSpeed={1.3}
        floatIntensity={0.4}
        initialRotation={[0.4, -0.4, -0.1]}
      />

      {/* 5. Cubo Lejano - Cyber Cyan (Profundidad Superior) */}
      <FloatingCube
        fbx={fbx}
        position={[0.7, 2.1, -3.2]}
        scale={0.0038}
        color="#00f0ff"
        emissiveColor="#0369a1"
        rotationSpeed={0.09}
        floatSpeed={1.2}
        floatIntensity={0.3}
        initialRotation={[0.1, 0.3, 0.2]}
      />

      {/* 6. Cubo Lejano - Coral Ruby Neón (Profundidad Inferior) */}
      <FloatingCube
        fbx={fbx}
        position={[-0.5, -2.3, -3.5]}
        scale={0.0034}
        color="#ff375f"
        emissiveColor="#9f1239"
        rotationSpeed={-0.11}
        floatSpeed={1.5}
        floatIntensity={0.3}
        initialRotation={[-0.3, -0.4, 0]}
      />
    </>
  );
}

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 7.0], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      <div className={styles.content}>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          FM Studios
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Científico de Datos & Desarrollador Fullstack. <br />
          Transformando ideas en experiencias digitales premium.
        </motion.p>
        
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="btn-primary">Ver Proyectos</a>
        </motion.div>
      </div>
    </section>
  );
}
