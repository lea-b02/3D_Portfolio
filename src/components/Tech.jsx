// Un composant probablement personnalisé qui affiche une icône dans un canvas (peut-être animé en 3D).
import { BallCanvas } from "./canvas"
// Une liste d’objets représentant différentes technologies (comme React, JavaScript, etc.), chaque objet contenant probablement un name et un icon.
import { technologies } from "../constants"
// Un Higher Order Component (HOC) qui sert probablement à envelopper Tech pour lui ajouter du style ou des animations sectionnelles.
import { SectionWrapper } from "../hoc"
import {motion} from 'framer-motion'
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import 'react-vertical-timeline-component/style.min.css' 
// On définit un composant fonctionnel React nommé Tech. qui retourn quelque chose.
const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Skills.
        </h2>
        <p className={`${styles.sectionSubText} text-left`}>
          Programming Languages:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-9">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
          </div>
        ))}
      </div>
    </div>
  )
}


/*SectionWrapper :

C’est une fonction (probablement un Higher Order Component).

Elle prend un composant en argument (Tech ici) et retourne un nouveau composant avec des fonctionnalités supplémentaires (comme du style, de l'animation, du scroll reveal, etc.).

Tech :

C’est le composant qu’on vient de définir juste avant (dans ta première question).

"" (la chaîne vide) :

Il s’agit probablement d’un identifiant ou d’un nom de section que SectionWrapper utilise, par exemple pour ancrer la section dans la page (id HTML, effet d'animation, etc.).

Si tu vois SectionWrapper(Tech, "about"), cela signifie qu'on applique un wrapper à la section "about" de la page.

export default :

On exporte le composant résultant de SectionWrapper(Tech, "") comme composant principal de ce fichier.*/
export default SectionWrapper(Tech, "");


