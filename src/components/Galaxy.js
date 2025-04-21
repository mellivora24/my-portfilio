import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function GalaxyParticles() {
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  const ref = useRef();

  for (let i = 0; i < particlesCount * 3; i += 3) {
    const radius = Math.random() * 10;
    const angle = Math.random() * Math.PI * 2;
    positions[i] = Math.cos(angle) * radius;
    positions[i + 1] = (Math.random() - 0.5) * 2;
    positions[i + 2] = Math.sin(angle) * radius;

    const color = Math.random() > 0.7 ? [0.2, 0.6, 0.8] : [1, 1, 1];
    colors[i] = color[0];
    colors[i + 1] = color[1];
    colors[i + 2] = color[2];
  }

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Sun() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial emissive={'#ffaa00'} emissiveIntensity={2} />
      <pointLight color={'#ffaa00'} intensity={4} distance={50} />
    </mesh>
  );
}

function Planet({ radius, size, speed, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 50, 50]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function GalaxyScene() {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: 'black' }}
      camera={{ position: [0, 5, 10], fov: 50 }}
    >
      <ambientLight intensity={0.2} />
      <GalaxyParticles />
      <Sun />
      <Planet radius={4} size={0.3} speed={0.4} color="#1e90ff" />
      <Planet radius={6} size={0.5} speed={0.2} color="#ff6347" />
      <Planet radius={8} size={0.7} speed={0.1} color="#7fffd4" />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={0.1} />
      
      {/* Hiệu ứng glow / bloom */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
}

export default GalaxyScene;
