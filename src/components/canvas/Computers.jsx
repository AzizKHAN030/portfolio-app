import React , {Suspense, useContext, useEffect, useState} from 'react'

import {Canvas} from '@react-three/fiber';
import {useGLTF, OrbitControls, Preload} from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.5 :0.75}
        position={isMobile? [0, -1.75, -1.75] :[0, -3.25, -1.5]}  
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', (e)=>{
      setIsMobile(e.matches);
    })

    return () => {
      mediaQuery.removeEventListener('change', (e)=>{
        setIsMobile(e.matches);
      })
    }
  },[])


  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas