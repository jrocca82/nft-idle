import * as THREE from "three";
import { useRef, Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { MapControls, Sky, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { BaseMap } from "./BaseMap";
import { Physics } from "@react-three/cannon";
import GrassPlot from "./GrassPlot";

export const InteractiveMap = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [color, setColor] = useState<string>("#CCEEAB");

  const handleClick = (landId: number) => {
    setColor("#FACBC4");
  };

  return (
    <Canvas camera={{ position: [0, 0, 30], up: [0, 0, 1], far: 10000 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Physics>
          <GrassPlot
            position={[-30, 30, 10]}
            landId={0}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-10, 30, 10]}
            landId={1}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[10, 30, 10]}
            landId={2}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[30, 30, 10]}
            landId={3}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-30, 10, 10]}
            landId={4}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-10, 10, 10]}
            landId={5}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[10, 10, 10]}
            landId={6}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[30, 10, 10]}
            landId={7}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-30, -10, 10]}
            landId={8}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-10, -10, 10]}
            landId={9}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[10, -10, 10]}
            landId={10}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[30, -10, 10]}
            landId={11}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-30, -30, 10]}
            landId={12}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[-10, -30, 10]}
            landId={13}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[10, -30, 10]}
            landId={14}
            handleClick={handleClick}
            color={color}
          />
          <GrassPlot
            position={[30, -30, 10]}
            landId={15}
            handleClick={handleClick}
            color={color}
          />
          {/* Load in each cell */}
        </Physics>

        <BaseMap />
      </Suspense>
      <MapControls />
    </Canvas>
  );
};
