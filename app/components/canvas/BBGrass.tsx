import {
  Billboard,
  type BillboardProps,
  Text,
  Merged,
  Instance,
} from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";

const BBGrass = () => {
  // Generate positions for the grass instances
  const grassPositions = useMemo(() => {
    return Array.from({ length: 100_000 }).map(() => {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const z = Math.random() * 10 - 5;
      return [x, y / 100, z];
    });
  }, []);

  // Create a mesh template for the text
  const textMesh = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: "green",
    });
    return new THREE.Mesh(geometry, material);
  }, []);

  return (
    <>
      <Merged meshes={[textMesh]}>
        {(MergedText) => (
          <>
            {grassPositions.map((position, i) => (
              //   <Billboard
              //     key={i}
              //     follow={true}
              //
              //     lockX={true}
              //     lockY={false}
              //     lockZ={false}
              //   >
              <MergedText
                key={i}
                position={[position[0], position[1], position[2]]}
                scale={[0.2, 0.2, 0.2]}
              />
              //   </Billboard>
            ))}
          </>
        )}
      </Merged>
    </>
  );
};

export default BBGrass;
