import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function RotatingText() {
  const ref = React.useRef();

  // Animation logic for rotation and movement
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t / 2;
    ref.current.rotation.y = t / 4;
    ref.current.position.x = Math.sin(t) * 2;
    ref.current.position.y = Math.cos(t) * 2;
  });

  return (
    <Text
      ref={ref}
      fontSize={1}
      color="cyan"
      anchorX="center"
      anchorY="middle"
      font="/fonts/helvetiker_bold.typeface.json" // Optional custom font
    >
      World of Program
    </Text>
  );
}

function StarterText() {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
      }}
    >
      {/* Add ambient light */}
      <ambientLight intensity={0.5} />
      {/* Add rotating text */}
      <RotatingText />
    </Canvas>
  );
}

export default StarterText;
