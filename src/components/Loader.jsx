//affiche le loader pendant le chargement.
//Html un composant de @react-three/drei qui permet d’afficher du HTML/CSS dans une scène 3D, comme une sorte d'overlay 2D.
//useProgress : un hook qui surveille le chargement des ressources (modèles, textures…) dans une scène React Three Fiber.
import { Html, useProgress } from '@react-three/drei'

//Définition d’un composant React appelé Loader.
const Loader = () => {
  //useProgress est un hook de @react-three/drei qui fournit des informations sur le chargement des ressources.
  //Il retourne un objet contenant des informations sur le chargement, y compris le pourcentage de progression.
  //On extrait la propriété progress de l'objet retourné par useProgress.
  const { progress } = useProgress()

  return (
    //Html permet d’afficher du contenu HTML dans la scène 3D.
    // center : centre automatiquement le HTML dans la fenêtre 3D 
    <Html center>
      {/* flex : utilise le modèle de boîte flexible pour centrer le contenu. 
        flex-col : aligne les éléments en colonne.
        items-center : centre les éléments horizontalement.
        justify-center : centre les éléments verticalement. */}
      <div className="flex flex-col items-center justify-center">
        {/* canvas-loader ce trouve den index.css */}
        <span className="canvas-loader" />
        {/*paragraphe qui montre l’avancement du chargement 
        color: '#fff' : blanc.
        fontSize: 14 : petit texte.
        marginTop: 20 : espace au-dessus du texte.
        */}
        <p style={{ color: '#fff', fontSize: 14, marginTop: 35 }}>
          {/* progress.toFixed(0) : arrondi à 0 décimales  100 aux lieux de 100.00%*/}
          {progress.toFixed(0)}% loaded
        </p>
      </div>
    </Html>
  )
}

export default Loader
