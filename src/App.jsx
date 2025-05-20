//nous allons cree la mise en page de la page principale
//on import le router de navigateur
import { BrowserRouter } from "react-router-dom"
// tout les fichier qu'il a den components
import {About , Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works , StarsCanvas} from './components'
//point d’entrée de l’application
const App = () => {

  return (
    //permet à tous les composants enfants d’utiliser la navigation
    <BrowserRouter>
       {/* Conteneur principal avec un fond de couleur primaire 
       gérer la position (relative), la profondeur (z-0) et le fond (bg-primary).
       */}

      <div className="relative z-0 bg-primary">
        {/* Dans Tailwind CSS, bg-hero-pattern fait généralement référence à une image définie dans le fichier tailwind.config.js
        qui est utilisée comme arrière-plan.
        bg-cover signifie que l'image d'arrière-plan doit couvrir tout l'élément,
        bg-no-repeat signifie que l'image ne doit pas se répéter,
        et bg-center signifie que l'image doit être centrée dans l'élément.
        Dans ce cas, il s'agit d'une image d'arrière-plan qui est probablement définie dans le fichier de configuration Tailwind CSS.
        Cela signifie que l'image d'arrière-plan est configurée pour couvrir tout l'élément, ne pas se répéter et être centrée. 
        
        */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Barre de navigation */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
          {/* <Feedbacks /> */}
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>)
}
//Ce composant App est exporté pour être utilisé ailleurs, par exemple dans index.js.
export default App
