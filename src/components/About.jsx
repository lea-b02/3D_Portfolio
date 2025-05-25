//Importe React (obligatoire pour créer des composants fonctionnels)
import React from 'react'
//Importe motion pour créer des éléments animés avec Framer Motion
import { motion } from 'framer-motion'
//Importe un objet styles contenant probablement des classes CSS personnalisées.
import { styles } from '../styles'
//Tilt est un composant qui donne un effet d'inclinaison 3D à un élément HTML lors du survol
import Tilt from 'react-parallax-tilt';
//Liste d'objets (tableau) avec les infos des services (titre, icône…), probablement
import {services} from '../constants'
//Importe les animations de la bibliothèque utils/motion
import { fadeIn, textVariant } from '../utils/motion'
//Importe le composant SectionWrapper qui est un HOC (Higher Order Component) pour encapsuler la section
import { SectionWrapper } from '../hoc'

//componet generit
// index : utilisé pour déterminer l’ordre d’animation.
// title : le nom du service affiché.
// icon : l’icône/image représentant le service.
const ServiceCard = ({index,title,icon}) => {
  return (
    // effet 3D tilt,largeur de 250px sur les très petits écrans (xs),w-full pour prendre toute la largeur disponible sinon.
    <Tilt className="xs:w-[250px] w-full">
      {/* motion.div : un élément p animé */}
      {/* variants : définit les animations à appliquer */}
      {/* fadeIn : une fonction d’animation importée */}
      {/* 'up' : direction de l’animation */}
      {/* 'spring' : type d’animation */}
      {/* index * 0.5 : délai d’animation basé sur l’index */}
      {/* 0.75 : durée de l’animation */}
      <motion.div   variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      //le contour de la carte est arrondi avec une ombre
      // rounded-[20px] : arrondi de 20 pixels
      // shadow-card : une ombre personnalisée 
      // bg-zinc-900 : couleur de fond gris foncé
      // p-[1px] : padding de 1 pixel
        className='w-full blue-violet-gradient p-[1px] rounded-[20px] shadow-card'
      > 
        {/* div qui contient le contenu de la carte et qui cree la carte en elle meme */}
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} 
        // fond gris-noir,rounded-[20px] : même arrondi que le conteneur extérieur
        // py-5 px-12 : padding vertical de 5 et horizontal de 12
        // min-h-[280px] : hauteur minimale de 280 pixels
        // flex : utilise le modèle de boîte flexible
        // justify-evenly : espace égal entre les éléments enfants
        // items-center : centre les éléments enfants sur l'axe transversal
        // flex-col : aligne les éléments enfants en colonne
        className='bg-zinc-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div> 
      </motion.div>
    </Tilt>
  )

}
// conponeta about qui utilise une autre componet ServiceCard
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        {/* aligné à gauche  */}
        <p className={`${styles.sectionSubText} text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Overview.
        </h2>
      </motion.div>

      {/* C’est une version animée du composant HTML <p> (paragraphe). */}
      <motion.p
        variants={fadeIn('', '', 0.2, 0.5)}
        // mt = margin-top Cela ajoute un espacement vertical au-dessus du paragraphe 
        // text-secondary = couleur secondaire du texte
        // text-[17px] = Taille de texte personnalisée (valeur précise) = 17 pixels.
        // max-w-3xl = Largeur maximale de l'élément (3xl = 768px)
        // leading-[30px] = Hauteur de ligne personnalisée (valeur précise) = 30 pixels.
        // text-left = Alignement du texte à gauche
        // mx-auto = marges horizontales automatiques pour centrer l'élément
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left mx-auto'
      >
      I'm a passionate developer dedicated to building innovative and functional applications. 
      My expertise in technologies like React.js for the web and React Native for mobile allows me to design user experiences 
      that are both effective and engaging. Always curious, I'm constantly looking for new challenges in this field to continue learning, evolving, and innovating.
      </motion.p> 

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* .map() : crée une carte pour chaque service dans le tableau services */}
        {/* service : chaque objet du tableau services */}
        {/* index : l'index de l'élément actuel dans le tableau */}
        {/* key : une clé unique pour chaque élément de la liste, ici c'est le titre du service */}
        {/* {...service} : passe toutes les propriétés de l'objet service au composant ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            // title={service.title}
            // icon={service.icon}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")