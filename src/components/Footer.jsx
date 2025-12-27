import React from 'react';
import { FaPlaneDeparture, FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-auto border-t-4 border-orange-500">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          
          {/* COLONNE 1 : ID */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-2xl font-black mb-4">
              <FaPlaneDeparture className="text-orange-500" />
              Euro<span className="text-cyan-400">Voyage</span> CM
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Agence agréée. Billetterie, Visa et Tourisme.<br/>
              Votre partenaire de confiance au Cameroun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-500"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-green-500"><FaWhatsapp size={24} /></a>
            </div>
          </div>

          {/* COLONNE 2 : CONTACT RAPIDE (MIS À JOUR) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-orange-400 mb-4 uppercase text-sm tracking-wider">Nous Contacter</h3>
            <div className="space-y-3 text-sm text-blue-100">
               <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaPhone className="text-orange-500" /> 
                  <span>Orange : 656 76 33 41</span>
               </div>
               <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaPhone className="text-orange-500" /> 
                  <span>MTN : 683 81 84 47</span>
               </div>
               <div className="flex items-center gap-2 justify-center md:justify-start">
                  <FaMapMarkerAlt className="text-orange-500" /> 
                  <span>Carrefour Tropicana, Yaoundé</span>
               </div>
            </div>
          </div>

          {/* COLONNE 3 : HORAIRES */}
          <div className="flex flex-col items-center md:items-start">
             <h3 className="font-bold text-orange-400 mb-4 uppercase text-sm tracking-wider">Horaires d'ouverture</h3>
             <ul className="space-y-2 text-sm text-blue-100">
               <li className="flex justify-between w-full max-w-[200px]">
                 <span>Lundi - Vendredi :</span>
                 <span className="font-bold">08h - 18h</span>
               </li>
               <li className="flex justify-between w-full max-w-[200px]">
                 <span>Samedi :</span>
                 <span className="font-bold">09h - 14h</span>
               </li>
               <li className="text-orange-300 mt-2">Fermé le Dimanche</li>
             </ul>
          </div>

        </div>

        {/* MENTIONS LÉGALES */}
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-300 text-sm mb-2">
             © 2025 Euro Voyage Cameroun. Tous droits réservés.
          </p>
          <p className="text-[10px] text-blue-400 uppercase tracking-widest">
            RC: RC/YAE/2015/B/1234 • NIU: M0123456789X
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;