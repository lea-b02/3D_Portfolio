//la on va creer le composant qui va nous permettre d'afficher le model 3D
import React, { Suspense, useState, useEffect } from 'react'
//conteneur 3D 
import { Canvas } from '@react-three/fiber'
//OrbitControls : permet de faire tourner la caméra autour du modèle.
//Preload : charge les ressources à l'avance.
//useGLTF : charge un modèle .gltf ou .glb.
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
//Loader : affiche un indicateur de chargement pendant le chargement du modèle.
import CanvasLoader from '../Loader'
import { useThree } from '@react-three/fiber'


// Composant qui charge le modèle GLTF
//isMobile est une props pour ajuster l'affichage selon la taille d'écran.
const Computers = ({isMobile}) => {
  const computer = useGLTF('./hello/scene.gltf')

  return (
    //mesh est un conteneur 3D pour les lumières et le modèle.
    <mesh>
      {/* Deux points lumineux pointLight : lumière ponctuelle (comme une ampoule)*/}
      <pointLight position={[0, -4, -1.5]} intensity={8}  />
      {/*cree des point lumier hemisphereLight : lumière ambiante entre ciel et sol*/}
      <hemisphereLight intensity={7} groundColor="black" />
      <pointLight intensity={1} />
      {/* <spotLight position={[0 , 5 , 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/*primitive est un composant de base pour afficher des objets 3D dans React Three Fiber.
      object={computer.scene} : le modèle 3D chargé.
      scale={isMobile ? 0.1: 0.15} : ajuste la taille du modèle selon la taille d'écran.
      position={isMobile ? [0,-4.2,-1]:[0, -4.2, -1]} : positionne le modèle dans l'espace 3D.
      rotation={[-0.01, 1, -0.1]} : ajuste l'orientation du modèle.*/}
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.12: 0.15}
        position={isMobile ? [-1,-3,-1]:[-3, -3, -1]}
        rotation={[-0.01, 1, -0.1]}
      />
    </mesh>
  )
}


// ComputersCanvas — c’est le conteneur principal
const ComputersCanvas = () => {
  //isMobile détermine si l'utilisateur est sur un écran petit (<500px).
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // window.matchMedia : permet de vérifier si l'écran est petit (<500px).
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)
    // handleMediaQueryChange : met à jour isMobile lorsque la taille de l'écran change en temp reel.
    // event.matches : renvoie true si l'écran est petit.
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    //Canvas et rendu du modèle
    //frameloop='demand' : le rendu est effectué uniquement lorsque la scène change.
    //shadows : active les ombres.
    //camera : positionne la caméra et définit le champ de vision.
    //gl={{ preserveDrawingBuffer: true }} : permet de conserver le dessin dans le tampon.
    //preserveDrawingBuffer : permet de conserver le dessin dans le tampon.
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/*Suspense affiche un loader pendant le chargement. */}
      <Suspense fallback={<CanvasLoader />}>
        {/*OrbitControls permet de faire tourner la caméra autour du modèle.*/}
        {/*enableZoom={false} : désactive le zoom.*/}
        {/*maxPolarAngle et minPolarAngle : limitent la rotation de la caméra.*/}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/*Computers est le composant qui charge le modèle 3D.*/}
        {/*isMobile est une props pour ajuster l'affichage selon la taille d'écran.*/}
        <Computers isMobile = {isMobile} />
      </Suspense>
      {/*Preload charge les ressources à l'avance.*/}
      {/*all : charge toutes les ressources.*/}
      <Preload all />
    </Canvas>
  )
}
//On exporte ce composant pour pouvoir l’utiliser ailleurs (comme dans Hero.jsx)
export default ComputersCanvas
