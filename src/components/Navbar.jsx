import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo (Cliquable partout) */}
        <Link to="/" className="text-3xl font-extrabold flex items-center gap-2 text-blue-900 z-[101]" onClick={closeMenu}>
          <FaPlaneDeparture className="text-orange-500" />
          Euro<span className="text-cyan-500">Voyage</span>
        </Link>

        {/* Menu PC (Caché sur mobile) */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-gray-600 items-center">
          <li><Link to="/" className="hover:text-cyan-500 transition">Accueil</Link></li>
          <li><Link to="/destinations" className="hover:text-cyan-500 transition">Destinations</Link></li>
          <li><Link to="/partners" className="hover:text-cyan-500 transition">Partenaires</Link></li>
          <li><Link to="/about" className="hover:text-cyan-500 transition">À propos</Link></li>
          <li>
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition transform duration-300">
              Réserver ✈️
            </Link>
          </li>
        </ul>

        {/* Bouton Menu Mobile (Hamburger / Croix) */}
        <div className="md:hidden text-blue-900 cursor-pointer z-[101]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* === MENU MOBILE CORRIGÉ (S'affiche en plein écran) === */}
      {/* On utilise 'fixed inset-0' pour couvrir tout l'écran, peu importe la page */}
      <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 99, top: 0 }}>
          
          <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-blue-900 hover:text-orange-500">
            Accueil
          </Link>
          
          <Link to="/destinations" onClick={closeMenu} className="text-2xl font-bold text-blue-900 hover:text-orange-500">
            Destinations
          </Link>
          
          <Link to="/partners" onClick={closeMenu} className="text-2xl font-bold text-blue-900 hover:text-orange-500">
            Partenaires
          </Link>
          
          <Link to="/about" onClick={closeMenu} className="text-2xl font-bold text-blue-900 hover:text-orange-500">
            À propos
          </Link>
          
          <Link to="/contact" onClick={closeMenu} className="text-2xl font-bold text-white bg-orange-500 px-8 py-3 rounded-full shadow-lg">
            Réserver maintenant
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;