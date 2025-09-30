"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Only import helpers you need

import CanvasLoader from '../loader/loader';
import Computers from '../computers/Computes';


const ComputersCanvas: React.FC = () => {

  const [ isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    // Add a Listener for change to hte screen  size 
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // set the intial value of the 'isMobile' state variable 
    setIsMobile(mediaQuery.matches);
  
    // Define a callback function to handle changes to mediaquery
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    }

    // Add a callback function as a listner for changes to the media query
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      //Remove the listener when the component is unmounted
      return() => {
        mediaQuery.removeEventListener('change',
          handleMediaQueryChange);
      }
   
  }, [])
  
  return (
    <>

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={ <CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
   
    </>
  );
};

export default ComputersCanvas;
