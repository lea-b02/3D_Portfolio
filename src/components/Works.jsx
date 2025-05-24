import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { github } from "../assets"

// index : position du projet (utile pour délais d'animation)
const ProjectCard = ({ index, name, description, image, source_code_link ,tags}) => {
  return (
    // Animation de la carte entière de github (le fond derier la carte)
    // bg-tertiary : couleur de fond
    // p-[1px] : padding de 1 pixel
    // rounded-[20px] : coins arrondis de 20 pixels
    // shadow-card : ombre de la carte
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className=" bg-tertiary p-[1px] rounded-[20px] shadow-card"
    >
      {/* Tilt : effet de basculement sur la carte 
      max : inclinaison max à 45°,
      scale : échelle (1 = normal),
      speed : vitesse de réaction.*/}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        className = "bg-tertiary p-5 rounded-[20px] sm:w-[360px] w-full h-[500px] w-full "
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Icône GitHub en overlay */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          {/* Nom et description */}
          <div className="mt-5">
            {/* le titre Github profile */}
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {/* le text en desous */}
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {
              // Affichage des tags Assuming `tags` is an array of objects with `name` and `color` properties
              tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))
            }
          </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    {/* motion.div c'est comme p avec des animation */}
    {/* textVariant() est probablement une fonction qui retourne un objet de configuration pour une animation  */}
      <motion.div variants={textVariant()}>
        {/*text-left qui aligne le texte à gauche */}
        <p className={`${styles.sectionSubText} text-left`}>
          My Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
        Projects
        </h2>
      </motion.div>
      {/* w-full: pour que l'image prenne toute la largeur de son conteneur
      flex : pour utiliser le modèle de boîte flexible
     */}
      <div className="w-full flex">
        {/* effet d’animation de type fadeIn (fondu). cest une fonction qui et import */}
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          /*mt-3 : marge en haut.
          text-secondary : couleur personnalisée. 
          text-[17px] : taille de texte.
          max-w-3xl : largeur maximale (layout responsive).
          leading-[30px] : interligne.
          text-left : texte aligné à gauche.*/ 
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-left">
        "I've developed a variety of projects that highlight different skills and technologies. You can explore their source code on my GitHub."
        </motion.p>
      </div>
      {/* flex-wrap : pour que les éléments s’enroulent sur plusieurs lignes si nécessaire
      gap-7 : espace entre les éléments
      mt-20 : marge supérieure de 20 unités (généralement 5rem ou 80px) pour espacer le contenu */}
      <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard
        // key={project-${index}} : clé unique pour React
        key={`project-${index}`}
        // index={index} : index de l'élément dans le tableau
        // {...project} : opérateur de propagation pour passer toutes les propriétés de l'objet project
        index={index}
        {...project} 
        />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")