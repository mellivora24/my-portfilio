import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function GalaxyScene() {  
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: 'black' }}
      camera={{ position: [0, 5, 10], fov: 50 }}
    >
      <ambientLight intensity={0.2} />
      <Stars radius={100} depth={24} count={5000} factor={4} fade />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.1} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
}

export default GalaxyScene;
