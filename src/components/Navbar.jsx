import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold flex items-center gap-2 text-blue-900" onClick={() => setIsOpen(false)}>
          <FaPlaneDeparture className="text-orange-500" />
          Euro<span className="text-cyan-500">Voyage</span>
        </Link>

        {/* Menu PC */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-gray-600 items-center">
          <li><Link to="/" className="hover:text-cyan-500 transition">Accueil</Link></li>
          <li><Link to="/destinations" className="hover:text-cyan-500 transition">Destinations</Link></li>
          {/* NOUVEAU LIEN ICI */}
          <li><Link to="/partners" className="hover:text-cyan-500 transition">Partenaires</Link></li>
          <li><Link to="/about" className="hover:text-cyan-500 transition">À propos</Link></li>
          <li>
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition transform duration-300">
              Réserver ✈️
            </Link>
          </li>
        </ul>

        {/* Menu Mobile Icon */}
        <div className="md:hidden text-blue-900 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white absolute top-full left-0 w-full flex flex-col items-center space-y-6 py-8 shadow-xl border-t">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-700">Accueil</Link></li>
          <li><Link to="/destinations" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-700">Destinations</Link></li>
          {/* NOUVEAU LIEN MOBILE */}
          <li><Link to="/partners" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-700">Partenaires</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-700">À propos</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold text-orange-500">Réserver</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;