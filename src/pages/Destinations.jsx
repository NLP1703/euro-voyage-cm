import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinationsData } from '../data'; // Assurez-vous d'avoir le fichier data.js

const Destinations = () => {
  return (
    // bg-transparent permet de voir le dégradé bleu de App.jsx
    <div className="pt-24 pb-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-black text-center mb-4 text-blue-900">
          Nos Destinations <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Du Monde</span>
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg font-medium">Préparez votre passeport, on s'occupe du reste.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <motion.div 
              key={dest.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group border border-white/50"
            >
              <div className="h-64 overflow-hidden relative">
                <span className={`absolute top-4 right-4 ${dest.color} text-white font-bold px-3 py-1 rounded-full z-10 shadow-md text-sm`}>
                  {dest.tag}
                </span>
                
                <img 
                    src={`${dest.image}?auto=format&fit=crop&w=800&q=80`} 
                    alt={dest.country} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-end mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{dest.country}</h3>
                    <span className="text-blue-600 font-bold text-xl">Dès {dest.price}</span>
                </div>
                <p className="text-gray-500 mb-6 line-clamp-2">{dest.desc}</p>
                
                <Link to={`/destinations/${dest.id}`} className={`block w-full text-center ${dest.color} text-white font-bold py-3 rounded-xl shadow-md hover:opacity-90 transition transform active:scale-95`}>
                  Voir les détails
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;