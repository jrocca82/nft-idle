import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { MapControls, Sky, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { BaseMap } from "./BaseMap";
import { Physics } from "@react-three/cannon";
import GrassPlot from "./GrassPlot";

export const InteractiveMap = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <Canvas camera={{ position: [0, 0, 30], up: [0, 0, 1], far: 10000 }}>
        <Suspense fallback={null}>

          <ambientLight intensity={0.5} />
          <Physics>
            <GrassPlot position={[-30, 30, 10]} landId={0}/>
            <GrassPlot position={[-10, 30, 10]} landId={1}/>
            <GrassPlot position={[10, 30, 10]} landId={2}/>
            <GrassPlot position={[30, 30, 10]} landId={3}/>
            <GrassPlot position={[-30, 10, 10]} landId={4}/>
            <GrassPlot position={[-10, 10, 10]} landId={5}/>
            <GrassPlot position={[10, 10, 10]} landId={6}/>
            <GrassPlot position={[30, 10, 10]} landId={7}/>
            <GrassPlot position={[-30, -10, 10]} landId={8}/>
            <GrassPlot position={[-10, -10, 10]} landId={9}/>
            <GrassPlot position={[10, -10, 10]} landId={10}/>
            <GrassPlot position={[30, -10, 10]} landId={11}/>
            <GrassPlot position={[-30, -30, 10]} landId={12}/>
            <GrassPlot position={[-10, -30, 10]} landId={13}/>
            <GrassPlot position={[10, -30, 10]} landId={14}/>
            <GrassPlot position={[30, -30, 10]} landId={15}/>
             {/* Load in each cell */}
          </Physics>

          <BaseMap />
        </Suspense>
        <MapControls/>
      </Canvas>
    
  );
};
