import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cette fonction force la fermeture du menu quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    // CORRECTION ICI : 'fixed top-0 left-0' pour l'ancrer en haut
    // 'z-50' pour être sûr qu'il est au-dessus de tout
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center h-20">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold flex items-center gap-2 text-blue-900" onClick={closeMenu}>
          <FaPlaneDeparture className="text-orange-500" />
          Euro<span className="text-cyan-500">Voyage</span>
        </Link>

        {/* MENU ORDINATEUR (Caché sur mobile) */}
        <ul className="hidden md:flex space-x-8 font-bold text-gray-700 items-center">
          <li><Link to="/" className="hover:text-orange-500 transition duration-300">Accueil</Link></li>
          <li><Link to="/destinations" className="hover:text-orange-500 transition duration-300">Destinations</Link></li>
          <li><Link to="/partners" className="hover:text-orange-500 transition duration-300">Partenaires</Link></li>
          <li><Link to="/about" className="hover:text-orange-500 transition duration-300">À propos</Link></li>
          <li>
            <Link to="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-lg transform hover:scale-105">
              Réserver
            </Link>
          </li>
        </ul>

        {/* BOUTON MENU MOBILE (Visible uniquement sur mobile) */}
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {/* On change l'icône si ouvert ou fermé */}
          <button className="text-blue-900 focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* === MENU MOBILE PLEIN ÉCRAN (CORRIGÉ) === */}
      {/* Ce bloc couvre tout l'écran quand isOpen est vrai */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '0', left: '0', width: '100vw', height: '100vh' }}
      >
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
          
          <Link to="/contact" onClick={closeMenu} className="text-xl font-bold text-white bg-orange-500 px-10 py-4 rounded-full shadow-xl">
            Réserver maintenant
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;