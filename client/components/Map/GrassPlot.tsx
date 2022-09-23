import * as THREE from "three";
import { useRef } from "react";
import { Vector3 } from "@react-three/fiber";

type Props = {
  position: Vector3;
  landId: number;
  handleClick: () => void;
  color: string;
};

const GrassPlot = (props: JSX.IntrinsicElements["mesh"] & Props) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref} position={props.position} onClick={props.handleClick}>
      <planeBufferGeometry attach="geometry" args={[10, 10, 10, 10]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default GrassPlot;