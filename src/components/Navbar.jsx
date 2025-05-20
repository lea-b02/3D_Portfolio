import React ,{useEffect , useState}from 'react'
//Link permet la navigation dans une SPA (Single Page Application) sans recharger la page.
import { Link } from 'react-router-dom'
//les sinboles de la barre de navigation
import { logo , menu , close } from '../assets'
import { styles } from '../styles'
//si j'apuit sur about je vais sur la page about
import { navLinks } from "../constants";
const Navbar = () => {
  //Tu crées un état active pour savoir quel lien est actuellement sélectionné.
  const [active, setActive] = useState("");
  //Tu crées un état toggle pour savoir si le menu mobile est ouvert ou fermé.
  const [toggle, setToggle] = useState(false);
  return (
    <nav
    /*paddingX (espacement horizontal)
    w-full : largeur totale
    fixed top-0 : barre fixe en haut
    z-20 : au-dessus des autres éléments
    bg-primary : fond de couleur principale*/
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        {/* pointer vers une bar oblique */}
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          {/*setActive("") pour désélectionner tout lien actif.*/}
          setActive("");
          {/*Scroll jusqu'en haut de la page*/}
          window.scrollTo(0, 0);
          }}>
          {/*Affiche le logo avec une taille fixe et un contenu qui s'adapte.*/}
          <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
          <p className='text-white text-[15px] font-bold cursor-pointer flex'>Leah Bitone &nbsp;
            <span className='sm:block hidden'>| Developer</span></p>
        </Link>
        {/*ul : liste non ordonnée
        flex : pour aligner les éléments
        flex-row : pour les aligner horizontalement
        gap-10 : espacement entre les éléments*/}
        {/*map : pour parcourir les liens de navigation et créer un élément de liste pour chacun d'eux*/}
        {/*active : pour savoir quel lien est actuellement sélectionné*/}
        {/*className : pour appliquer des styles conditionnels en fonction de l'état actif*/}
        {/*hover:text-white : pour changer la couleur au survol*/}
        {/*text-[15px] : taille de la police
        font-medium : épaisseur de la police
        cursor-pointer : pour changer le curseur au survol*/}
        {/*onClick : pour changer l'état actif et faire défiler la page vers la section correspondante*/}
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              active === link.title
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
        {/*peu etre que motre navigateur sera mobile */}
        {/*sm:hidden : caché sur les écrans plus grands
        flex : pour afficher le menu hamburger
        justify-end : pour aligner à droite
        items-center : pour centrer verticalement*/}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/*Affiche le bouton menu ou close selon toggle.
          Un clic inverse l’état toggle.*/}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/*Affiché seulement si toggle est true.
          Positionné en haut à droite avec un fond noir (black-gradient).
          Flex pour aligner les éléments.
          Min-w-[140px] pour une largeur minimale.
          Coins arrondis (rounded-xl).*/}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            {/*ul : liste non ordonnée
            flex-col : pour aligner les éléments verticalement
            Justify-end pour les aligner à droite.
            Items-start pour les aligner en haut.
            gap-4 : espacement entre les éléments*/}
            {/*map : pour parcourir les liens de navigation et créer un élément de liste pour chacun d'eux*/}
            {/*active : pour savoir quel lien est actuellement sélectionné*/}
            {/*className : pour appliquer des styles conditionnels en fonction de l'état actif*/}
            {/*text-white : couleur du texte
            font-medium : épaisseur de la police
            cursor-pointer : pour changer le curseur au survol*/}
            {/*onClick : pour changer l'état actif et faire défiler la page vers la section correspondante*/}
          
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  {/*a-est l’attribut principal qui contient l’URL href : pour naviguer vers la section correspondante*/}
                  {/*id : pour identifier chaque lien*/}
                  {/*title : pour afficher le texte du lien*/}
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

            </ul>
          </div> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar