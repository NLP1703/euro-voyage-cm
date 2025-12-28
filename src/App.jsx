import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import des composants de structure
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Partners from './pages/Partners';

// Petit composant magique pour remonter en haut de page à chaque changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* Container principal */}
      <div className="flex flex-col min-h-screen bg-transparent">
        
        {/* Active le scroll vers le haut automatique */}
        <ScrollToTop />
        
        {/* La barre de navigation (Fixe en haut) */}
        <Navbar />
        
        {/* IMPORTANT : J'ai ajouté 'pt-20' ici !
            Cela crée un espace vide en haut de 80px pour que le texte 
            ne soit pas caché derrière le menu fixe.
        */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Le pied de page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;