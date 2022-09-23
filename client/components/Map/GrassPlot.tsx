import * as THREE from "three";
import { useRef, useState } from "react";
import { Vector3 } from "@react-three/fiber";
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

type Props = {
  position: Vector3;
  landId: number;
};

const GrassPlot = (props: JSX.IntrinsicElements["mesh"] & Props) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref} position={props.position}>
      <planeBufferGeometry attach="geometry" args={[10, 10, 10, 10]} />
      <meshStandardMaterial color={"#CCEEAB"} />
    </mesh>
  );
};

export default GrassPlot;