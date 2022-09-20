import * as THREE from "three";
import { useRef } from "react";

export const Plane = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[50, 50]} />
      <meshStandardMaterial color={"#404040"} />
    </mesh>
  );
};