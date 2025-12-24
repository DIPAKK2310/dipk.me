"use client"
import React from "react";
import { useGLTF } from "@react-three/drei";
import {GLTF} from "three-stdlib"


interface ComputerProps {
    isMobile: boolean;
}

type GLTFResult = GLTF ;

const Computers: React.FC<ComputerProps>= ({ isMobile})=> {
  const computer = useGLTF('/models/desktop_pc/scene.gltf') as GLTFResult;

  return (
    <mesh scale={isMobile? 1.0: 1.8}>
      {/* HemisphereLight and PointLight are now properly used as Three.js objects */}
      <hemisphereLight intensity={1.0} groundColor="black" /> 
      <pointLight intensity={1.2} />
       <spotLight
        position={[-15, 35, 10]}
        angle={0.4}
        penumbra={1}
        intensity={1.2}
        castShadow
       shadow-mapSize-width={1024}

        shadow-mapSize-height={1024}
       
       />
      <primitive 
        object={computer.scene} 
        // scale={ isMobile ? 0.7 : 0.75} 
        position={isMobile ? [ 0, -3, -2.2] : [ 0, -3.25, -1.5]}
      />
    </mesh>
  );
};


export default Computers;
useGLTF.preload('/models/desktop_pc/scene.gltf');// Preload the model for better performance 