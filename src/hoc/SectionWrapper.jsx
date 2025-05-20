//une librairie d'animations pour React.
import { motion } from "framer-motion";
//On importe un objet styles depuis un fichier local.
import { styles } from "../styles";
//fonction personnalisée d’animation
import { staggerContainer } from "../utils/motion";
//../styles est situé dans le dossier parent du fichier
//./styles est situé dans le même dossier que le fichier

// Component : un composant React (comme About, Skills, etc.).
// idName : une chaîne de caractères utilisée pour les ancres HTML (ex: "about", "services", etc.).
const StarWrapper = (Component, idName) =>
    //la fonction qui nous renvoit a une autre fonction , hoc-Ce sera le composant React renvoyé par le wrapper.
    function HOC() {
    return (
      //motion.section est un composant de framer-motion qui permet d'animer une section HTML.
      //variants : un objet qui définit les animations possibles pour le composant.
      //initial : l'état initial de l'animation (ici "hidden" signifie caché).
      //whileInView : l'état de l'animation lorsque le composant est visible dans la fenêtre.
      //viewport : définit les conditions de déclenchement de l'animation (ici, une fois que 25% du composant est visible).
      //className : une chaîne de caractères qui définit les classes CSS appliquées au composant.
      //styles.padding : une classe CSS définie dans le fichier styles.js pour ajouter du padding.
      //max-w-7xl : une classe CSS de Tailwind qui définit la largeur maximale du composant.
      //mx-auto : une classe CSS de Tailwind qui centre le composant horizontalement.
      //relative : une classe CSS de Tailwind qui positionne le composant relativement à son parent.
      //z-0 : une classe CSS de Tailwind qui définit l'ordre d'empilement du composant.(z-index).
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >

        {/*span	Un élément inline HTML
        id est utilisé pour spécifier l'ID de la section vers laquelle le lien doit pointer.*/}
        <span className='hash-span' id={idName}>
          {/*&nbsp; = Non-Breaking Space = Espace insécable
          C'est un espace que le navigateur ne coupera jamais même s’il doit aller à la ligne.*/}
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
//On exporte ce Higher-Order Component pour l’utiliser ailleurs
export default StarWrapper;

/*Une animation d’apparition (framer-motion) 
Un identifiant HTML (id) pour le scroll automatique 
Des styles globaux réutilisables (ex: padding, centrage) Éviter de répéter du code sur chaque section de ta page.*/