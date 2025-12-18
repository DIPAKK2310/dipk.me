"use client"
import React, { Suspense, useEffect, useState } from 'react';
import  { Canvas }  from '@react-three/fiber';
import { OrbitControls, Preload} from '@react-three/drei'; // Only import helpers you need

import CanvasLoader from '../loader/Loader';
import Computers from './Computers';


const ComputersCanvas: React.FC = () => {

  const [ isMobile,setIsMobile] = useState(false);
  const [mounted, setmounted] = useState(false)

  useEffect(() => {
    setmounted(true);
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

  if (!mounted) return null;
  
  return (
    <div>

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [15, 5, 10], 
      fov: 40 }}
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
   
    </div>
  );
};

export default ComputersCanvas;
