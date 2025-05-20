// plus pour les ecriture
const styles = {
  /*Sur les petits écrans (mobiles) : padding horizontal de 24px (px-6)
Sur les écrans plus larges (tablettes, desktops) : padding horizontal de 64px (sm:px-16)*/
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
    /*font-black	Applique une épaisseur de police très forte (le plus gras disponible).
    text-white	Applique une couleur blanche au texte.
    lg:text-[80px]	Sur les grands écrans (lg = ≥1024px), la taille du texte sera de 80 pixels.
    sm:text-[60px]	Sur les petits écrans (sm = ≥640px), taille du texte = 60px.
    xs:text-[50px]	Sur les très petits écrans (xs = ≥475px), taille du texte = 50px.
    text-[40px]	Par défaut (pour les très petits écrans <475px), le texte aura une taille de 40px.
    lg:leading-[98px]	Sur les grands écrans, l’interligne (line-height) est de 98 pixels.
    mt-2	Applique une marge supérieure de 0.5rem (≈8px).*/
      "font-black text-white lg:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] lg:leading-[70px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    /*text-white	Applique une couleur blanche au texte.
    font-black	Applique une épaisseur de police très forte (le plus gras disponible).
    md:text-[60px]	Sur les écrans moyens (md = ≥768px), la taille du texte sera de 60 pixels.
    sm:text-[50px]	Sur les petits écrans (sm = ≥640px), la taille du texte sera de 50 pixels.
    xs:text-[40px]	Sur les très petits écrans (xs = ≥475px), la taille du texte sera de 40 pixels.
    text-[30px]	Par défaut (pour les très petits écrans <475px), le texte aura une taille de 30px.*/
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      /*text-secondary	Applique une couleur secondaire au texte.
      sm:text-[18px]	Sur les petits écrans (sm = ≥640px), la taille du texte sera de 18 pixels.
      text-[14px]	Par défaut (pour les très petits écrans <475px), le texte aura une taille de 14px.
      uppercase	Transforme le texte en majuscules.
      tracking-wider	Augmente l’espacement entre les lettres (tracking) pour un effet visuel plus aéré.*/
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };
  
  export { styles };