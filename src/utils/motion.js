/*Animation de texte :
Monte de 50px vers le haut (y: -50)
Apparaît progressivement (opacity: 0 → 1)
Utilise une animation de type spring (ressort, fluide)
Peut être décalée dans le temps avec delay*/
export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };
  
  /*Animation fade in + slide :
L'élément glisse depuis une direction (left, right, up, down)
Il devient visible en fondu (opacity: 0 → 1)
Tu choisis le type d'animation (par exemple : tween, spring)
Tu définis le délai et la durée*/
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  /* Animation zoom :
L'élément grandit (scale 0 → 1)
Apparaît progressivement (opacity 0 → 1)
Tu peux configurer le délai et la durée*/
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  /*Animation slide "plein écran" :
L’élément vient de hors écran (-100% ou 100%)
Il glisse pour se placer à sa position normale (x: 0, y: 0)*/
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  /*Animation enchaînée de plusieurs éléments enfants :
Utilisé sur un conteneur (<motion.section variants={...}>)
Les enfants apparaissent l’un après l’autre
staggerChildren : délai entre chaque enfant
delayChildren : délai avant que le premier commence*/
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };