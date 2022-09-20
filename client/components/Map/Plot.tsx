import * as THREE from "three";
import { useRef } from "react";
import { Vector3 } from "@react-three/fiber";

type Props = {
  position: Vector3;
  size: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ];
  landId: number;
  landInfo: {
    name: string;
    owner: string;
    hasOwner: boolean;
  };
  setLandName: (name: string) => void;
  setLandOwner: (owner: string) => void;
  setHasOwner: (hasOwner: boolean) => void;
  setLandId: (landId: number) => void;
};

export const Plot = (props: JSX.IntrinsicElements["mesh"] & Props) => {
  const ref = useRef<THREE.Mesh>(null!);

  const clickHandler = () => {
    props.setLandName(props.landInfo.name);
    props.setLandId(props.landId);

    if (props.landInfo.owner === "0x0000000000000000000000000000000000000000") {
      props.setLandOwner("No Owner");
      props.setHasOwner(false);
    } else {
      props.setLandOwner(props.landInfo.owner);
      props.setHasOwner(true);
    }
  };

  return (
    <mesh {...props} ref={ref} position={props.position} onClick={clickHandler}>
      <planeBufferGeometry attach="geometry" args={props.size} />
      <meshStandardMaterial color={"#11E169"} metalness={0.5} roughness={0} />
    </mesh>
  );
};