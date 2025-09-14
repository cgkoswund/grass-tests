import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import BBGrass from "./BBGrass";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

const BaseCanvas = () => {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <Perf position="top-left" />
          <ambientLight />
          <directionalLight position={[1, 1, 1]} />

          <BBGrass />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default BaseCanvas;
