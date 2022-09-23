import * as THREE from "three";
import { useRef } from "react";

export const BaseMap = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[120, 120]} />
      <meshStandardMaterial color={"#ADD8E6"} />
    </mesh>
  );
};
