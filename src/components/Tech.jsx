// Un composant probablement personnalisé qui affiche une icône dans un canvas (peut-être animé en 3D).
import { BallCanvas } from "./canvas"
// Une liste d’objets représentant différentes technologies (comme React, JavaScript, etc.), chaque objet contenant probablement un name et un icon.
import { technologies ,frontendlogo ,utilisers  , databaselogo , backendlogo} from "../constants"
// Un Higher Order Component (HOC) qui sert probablement à envelopper Tech pour lui ajouter du style ou des animations sectionnelles.
import { SectionWrapper } from "../hoc"
import {motion} from 'framer-motion'
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import 'react-vertical-timeline-component/style.min.css' 
import { SkillItem } from "./canvas"

// On définit un composant fonctionnel React nommé Tech. qui retourn quelque chose.
const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        {/* aligné à gauche  */}
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Skills.
        </h2>
        <p className={`${styles.sectionSubText} text-left`}>
          Programming Languages:
        </p>
      </motion.div>
    {/* flex : active Flexbox
    flex-row : aligne les enfants horizontalement
    flex-wrap : permet le retour à la ligne si nécessaire mettre les éléments sur plusieurs lignes
    justify-center : centre les éléments horizontalement
    gap-10 : espace de 2.5rem entre les éléments */}
        <div className="flex flex-row flex-wrap justify-center gap-9 mt-3"> 
          {/* Pour chaque élément de technologies, on crée un composant enfant. */}
          {technologies.map((technology) => (
          <div key={technology.id} className="w-28 h-28">
            <SkillItem icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>

        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left mt-4`}>
          Frontend:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-9 mt-3"> 
          {frontendlogo.map((frontend) => (
          <div key={frontend.id} className="w-28 h-28">
            <SkillItem icon={frontend.icon} name={frontend.name} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left mt-4`}>
          Technologies:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-9 mt-3"> 
          {utilisers.map((utiliser) => (
          <div key={utiliser.id} className="w-28 h-28">
            <SkillItem icon={utiliser.icon} name={utiliser.name} />
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left mt-4`}>
          DataBases:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-9 mt-3"> 
        {databaselogo.map((databases) => (
          <div className="w-28 h-28" key={databases.name}>
              <BallCanvas icon={databases.icon} /> 
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left mt-4`}>
          Backend:
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-9 mt-3"> 
        {backendlogo.map((backends) => (
        // <div className="w-28 h-28"> : carré de 112px x 112px (28 * 4px)
        // key={technology.name} : nécessaire pour que React suive les éléments dans la liste
        // <BallCanvas icon={technology.icon} /> : affiche l’icône de la technologie à l’intérieur d’un canvas stylisé (effets 3D ou autre)
          <div className="w-28 h-28" key={backends.name}>
              <BallCanvas icon={backends.icon} /> 
          </div>
        ))}
      </div>

      {/* <div className="flex flex-row flex-wrap justify-center gap-9"> 
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> 
          </div>
        ))}
      </div>*/}
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


