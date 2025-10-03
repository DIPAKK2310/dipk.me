"use client"
import React from "react";
import { useGLTF } from "@react-three/drei";
import {GLTF} from "three-stdlib"


interface ComputerProps {
    isMobile: boolean;
}
type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};


const Computers: React.FC<ComputerProps>= ({ isMobile})=> {
  const computer = useGLTF('/models/desktop_pc/scene.gltf') as GLTFResult;

  return (
    <group scale={isMobile? 0.75: 1.5}>
      {/* HemisphereLight and PointLight are now properly used as Three.js objects */}
      <hemisphereLight intensity={1.7} groundColor="black" /> 
      <pointLight intensity={1} />
       <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
       shadow-mapSize-width={1024}

        shadow-mapSize-height={1024}
       
       />
      <primitive 
        object={computer.scene} 
        // scale={ isMobile ? 0.7 : 0.75} 
        position={isMobile ? [ 0, -3, -2.2] : [ 0, -3.25, -1.5]}
      />
    </group>
  );
};


export default Computers;