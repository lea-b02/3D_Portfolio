import React, { Suspense } from 'react'
//Framer Motion utilisée pour les animations React
import { motion } from 'framer-motion'
//cette ligne permet d'importer le fichier CSS plus les ecriture
import { styles } from '../styles'
//ComputersCanvas, qui affiche un modèle 3D
import { HeaderImageCanvas} from './canvas'
import headerImg from '../../public/header-img.svg';




//c'est la ou on va avoir le model en 3D celui qui et en haut de la page 
const Hero = () => {
  return (
    //(relative) pour positionner les éléments enfants en absolu.
    <section className='relative w-full h-screen mx-auto'>
      {/* Arrière-plan de l'écran d'accueil 
      paddingX ajoute un padding horizontal.
      inset-0 top-[120px] = couvre toute la section mais commence 120px en-dessous du haut.
      max-w-7xl = largeur max.
      mx-auto = centre le contenu horizontalement.
      flex = pour aligner les éléments enfants.
      items-start = aligne les éléments enfants au début de la section.
      gap-5 = espace entre les éléments enfants.*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Un petit cercle bleu Colonne  + Une barre verticale bleue , cercle et ligne (décor à gauche du texte).*/}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3b82f6]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div>
          {/* Titre principal (h1) avec texte blanc et taille responsive définie dans heroHeadText
          Ton nom est mis en bleu clair avec un span.*/}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello , I am <span className='text-[#3b82f6]'> Leah Bitone</span>
          </h1>
          {/*Paragraphe secondaire avec marge haute (mt-2) et texte blanc plus clair (text-white-100). */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web and mobile applications
            {/* React js pour le web 
                react native rien que pour le telephone */}
            <br className='sm:block hidden' /> with React.js and Three.js.
          </p>
        </div>
      </div>

      {/* Modèle 3D */}
      {/* <ComputersCanvas /> */}
      {/* <img src={headerImg} alt="Header Image" className="absolute top-[60%] right-20 transform -translate-y-1/2 w-[450px] h-auto"  /> */}
      <HeaderImageCanvas/>


      {/* le petit buton pour bouget */}
      {/* div positionné en absolute dans la section.
        xs:bottom-10 : sur les petits écrans (taille xs), positionne à 10 unités du bas.
        bottom-32 : par défaut, positionne à 32 unités (≈ 128px) du bas.
        w-full : prend toute la largeur.
        flex justify-center items-center : centre le contenu horizontalement et verticalement (en hauteur du container). */}
      {/* 'absolute bottom-24 sm:bottom-16 md:bottom-10 w-full flex justify-center items-center' */}
      <div className='absolute bottom-10 sm:bottom-6 md:bottom-15 lg:bottom-30 w-full flex justify-center items-center'>
        {/* a : lien qui redirige vers la section "about" quand on clique dessus. */}
        {/* div : conteneur pour le bouton de défilement. */}
        {/* w-[35px] h-[64px] : largeur et hauteur du bouton. */}
        {/* rounded-3xl : arrondit les coins du bouton. */}
        {/* border-4 border-secondary : bordure de 4 unités de couleur secondaire. */}
        {/* flex justify-center items-start p-2 : centre le contenu du bouton. */}
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/*élément animé avec Framer Motion.
            Il s'agit d'un petit cercle qui va faire un mouvement de haut en bas.
            Il a une animation de translation verticale (y) et d'opacité.
            La translation va de 0 à 24 pixels, puis revient à 0.
            L'opacité varie de 0.8 à 1, puis revient à 0.8.
            La durée de l'animation est de 1.5 secondes.
            L'animation se répète indéfiniment avec un type de répétition "loop".
            Il a une largeur et une hauteur de 3 unités, un fond de couleur secondaire et une marge en bas de 1 unité. 
            */}
            <motion.div
              animate={{
                y: [0, 24, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

