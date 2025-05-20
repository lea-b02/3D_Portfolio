/*useState : pour gérer l'état React (ici la position aléatoire des étoiles).
useRef : pour créer une référence à l’objet 3D (pour le faire tourner).
Suspense : permet de gérer les chargements (comme un loader)*/ 
import { useState, useRef, Suspense } from "react";
//useFrame : hook pour exécuter une fonction à chaque frame (animation).
import { Canvas, useFrame } from "@react-three/fiber";
/*Points : composant optimisé pour afficher des milliers de points.
PointMaterial : matériau spécial pour les Points.
Preload : permet de précharger tous les assets 3D*/
import { Points, PointMaterial, Preload } from "@react-three/drei";
//random : bibliothèque pour générer des positions aléatoires dans une sphère.
import * as random from "maath/random/dist/maath-random.esm";


// Stars : composant qui crée un champ d'étoiles en 3D
// props : propriétés passées au composant (comme la couleur, la taille, etc.).
const Stars = (props) => {
  const ref = useRef();

  // useState : pour gérer l'état de la position des étoiles
  // random.inSphere : génère des positions aléatoires dans une sphère de rayon 1.2
  //Génère 5000 points aléatoires dans une sphère de rayon 1.2
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  //On fait tourner les étoiles autour des axes x et y lentement.
  //delta est le temps écoulé entre deux frames (pour une animation fluide).
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    //On utilise un groupe pour appliquer une rotation à l'ensemble des étoiles.
    //rotation : [x, y, z] en radians.
    <group rotation={[0, 0, Math.PI / 4]}>
      {/*Points : utilisé pour afficher tous les points dans sphere.*/}
      {/*ref : référence pour faire tourner les étoiles.*/}
      {/*positions : positions des étoiles générées aléatoirement.*/}
      {/*stride : nombre de valeurs par point (3 pour x, y, z).*/}
      {/*frustumCulled : pour optimiser le rendu en ne rendant que ce qui est visible.*/}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* transparent : points semi-transparents.
        color : couleur rose (#f272c8).
        size : taille très petite de chaque point.
        sizeAttenuation={true} : les points paraissent plus petits quand ils sont loin.
        depthWrite={false} : ne gêne pas les autres objets 3D avec la profondeur. */}
        <PointMaterial
          transparent
          color='#fff4b1'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    // z-[-1] : place ce canvas derrière tout le reste (en arrière-plan).
    // absolute : positionne le canvas par rapport à son parent.
    // inset-0 : étend le canvas sur toute la largeur et hauteur de son parent.
    // w-full : largeur 100%.
    // h-auto : hauteur automatique (s'adapte au contenu).
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/*On utilise un Canvas pour afficher la scène 3D.
        position : position de la caméra. */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/*On utilise le composant Stars pour afficher les étoiles.*/}
        {/*Suspense sert ici à gérer les composants qui peuvent charger asynchronement.*/}
        {/*fallback : ce qui s'affiche pendant le chargement (ici rien).*/}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        {/*Preload : précharge tous les assets 3D pour éviter les temps de chargement.*/}
        {/*all : précharge tout ce qui est nécessaire.*/}
        {/*Cela garantit que tout est prêt avant d'afficher la scène.*/}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;