//  nécessaires pour créer des composants React et attendre un chargement asynchrone (Suspense).
import React , {Suspense} from 'react'
// conteneur 3D de @react-three/fiber, équivalent à une <canvas> HTML pour afficher la scène.
import { Canvas } from '@react-three/fiber'
/*OrbitControls : permet de faire tourner la caméra avec la souris.

Preload : précharge tous les assets avant le rendu.

Float : animation douce de flottement (fourni par drei).

useTexture : hook pour charger une image comme texture.

Decal : place une image (texture) sur une géométrie comme un autocollant.*/
import { OrbitControls, Preload,Float,useTexture,Decal } from '@react-three/drei'
//un composant personnalisé pour afficher un loader pendant le chargement.
import CanvasLoader from '../Loader'
//props (abréviation de "properties") est un objet contenant toutes les valeurs qu’on transmet à un composant enfant depuis un composant parent.
const Ball = (props) => {
  //props.imgUrl est l'URL de l'image à appliquer.
  // useTexture charge l'image comme texture et retourne un tableau (on extrait le premier élément).
  // decal = une texture (image) chargée
  const [decal] = useTexture([props.imgUrl])
  return (
    /*Float ajoute un effet d'animation flottante.

    speed : vitesse de mouvement.

    rotationIntensity : intensité de rotation.

    floatIntensity : amplitude du flottement.*/
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/*ambientLight : éclaire uniformément toute la scène.
      directionalLight : simule une lumière directionnelle (comme le soleil).*/}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1.2} />
      {/*mesh : un objet 3D dans la scène.éclairé, texturé, animé.
      castShadow : l'objet projette une ombre.
      icosahedronGeometry : une sphère à 20 faces (forme géométrique).
      args={[1, 1]} : rayon = 1, détail = 1 
      */}
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        {/*meshStandardMaterial : un matériau réaliste qui réagit à la lumière.

          polygonOffset et polygonOffsetFactor={-5} : évitent le z-fighting (conflits d'affichage entre la géométrie et la texture).

          flatShading : donne un aspect plus "low poly" (facettes visibles).*/}
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/*Decal : applique la texture (map={decal}) comme un autocollant.

          position : place le décalque en avant de la sphère.

          rotation : oriente l’image.

          scale : réduit la taille du décalque à 75%.*/}
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI *2, 0, 6.25]}
          scale={0.75}
          map={decal}
          
        />
      </mesh>
    </Float>
  )
}

//Canvas crée une scène 3D avec :
//icon === "/images/javascript.png"
//Puis, cette icon est transmise à : <Ball imgUrl={icon} />
//Et ensuite utilisée dans :const [decal] = useTexture([props.imgUrl])
/*
icon	L'URL ou chemin d’une image (logo, icône, etc.)
imgUrl	Nom de prop dans le composant Ball
decal	Texture créée à partir de l'image
Decal	Colle l’image sur une forme 3D
*/
const BallCanvas = ( {icon} ) => {
  //Parce que dans la 3D, rien n’existe sans une scène. C’est la base de tout affichage 3D dans des bibliothèques comme Three.js
  //Canvas crée une scène 3D avec :
  return (
    <Canvas
    /*frameloop="demand" : n'affiche que lorsqu’un changement a lieu (meilleure perf).
      shadows : active les ombres.
      preserveDrawingBuffer: true : garde l’image dans le canvas (utile pour des captures par exemple).*/ 
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}>
        {/*
        
        Suspense attend que la texture soit chargée.

        fallback={<CanvasLoader />} : affiche le loader pendant le chargement.

        OrbitControls permet de tourner autour de la sphère, mais sans zoom (enableZoom={false}).

        Ball : affiche la sphère avec l'image icon appliquée.*/}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      {/*Preload all force le chargement anticipé de tous les assets 3D.*/}
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas


