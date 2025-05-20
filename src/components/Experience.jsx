import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component" 
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css' 
import { styles } from "../styles"
import { experiences } from "../constants"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

// Il reçoit une prop unique appelée experience, un objet qui contient les infos d'une expérience (titre, entreprise, date, points, icône…).
const ExperienceCard = ({ experience }) => (
  //VerticalTimelineElement C’est ce qui affiche un élément individuel de la frise chronologique.
  // Tu définis un style personnalisé pour le contenu de la carte
  <VerticalTimelineElement contentStyle={{ background: '#0A1F44', color: '#fff' }}
  // Tu définis un style pour la flèche qui pointe vers le contenu de la carte
  contentArrowStyle={{ borderRight: '10px solid #0A1F44' }}
  //Tu affiches la date date={experience.date}
  // Tu définis la couleur de fond de l'icône
  iconStyle={{ background: experience.iconBg }}
  icon={
    // Tu affiches l'icône de l'expérience
    // flex justify-center items-center w-full h-full : pour centrer l'image horizontalement et verticalement
    // w-full h-full : pour que l'image prenne toute la largeur et la hauteur de son conteneur
    // flex : pour utiliser le modèle de boîte flexible
    // justify-center : pour centrer horizontalement
    // items-center : pour centrer verticalement
    <div className='flex justify-center items-center w-full h-full'>
      {/*className='w-[60%] h-[60%] object-contain' : pour que l'image s'adapte à la taille de son conteneur tout en conservant ses proportions */}
      <img
        src={experience.icon}
        // alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }>
    <div>
      <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
      {/* <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p> */}
    </div>
    {/* ce sont les point balise conteneur  
    ml-5 : marge à gauche
    space-y-2 : espace entre les éléments de la liste
    mt-5 : marge en haut */}
    <ul className='list-disc ml-5 space-y-2 mt-5'>
      {experience.points.map((point, index) => (
        // Tu affiches chaque point dans un élément <li>
        // key={`experience-point-${index}`}: clé unique pour chaque élément de la liste, ce qui aide React à identifier les éléments
        //text-white-100 : blanc doux ou gris clair 
        // text-[14px] : taille de police de 14 pixels
        // pl-1 : padding à gauche de 1 unité
        // tracking-wider : espacement entre les lettres
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  )
const Experience = () => {
  return (
    <>
    {/* variants={textVariant()} signifie que tu utilises un objet textVariant() qui contient des animations prédéfinies (entrée/sortie, apparition, etc.). */}
      <motion.div variants={textVariant()}>
        {/* aligné à gauche  */}
        <p className={`${styles.sectionSubText} text-left`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
        Work Experience.
        </h2>


      </motion.div>
      {/* La classe mt-20 ajoute une marge supérieure de 20 unités (généralement 5rem ou 80px) pour espacer le contenu */}
      {/* flex-col : aligne les éléments enfants en colonne */}
      {/* flex : utilise le modèle de boîte flexible */}
      <div className='mt-20 flex flex-col'>

        {/* VerticalTimeline (probablement de la bibliothèque react-vertical-timeline-component) pour afficher une frise chronologique verticale. */}
        <VerticalTimeline>
          {/* Tu parcours un tableau experiences avec .map()  */}
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience = {experience}/>


          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
  