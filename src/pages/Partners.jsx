import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

// J'ai remplacé les domaines par des liens directs vers les logos officiels (Wikimedia/PNG)
const airlines = [
  { 
    id: 1, 
    name: 'Brussels Airlines', 
    logo: 'https://epsilonaviation.wordpress.com/wp-content/uploads/2020/05/brussels_airlines_logo-1.png?w=1024', 
    desc: 'La liaison principale Douala/Yaoundé vers l\'Europe.' 
  },
  { 
    id: 2, 
    name: 'Air France', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/1200px-Air_France_Logo.svg.png', 
    desc: 'Vols quotidiens vers Paris Charles de Gaulle.' 
  },
  { 
    id: 3, 
    name: 'Ethiopian', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScth5PAArT8Xb6-ilwAAXF-05RvTbFu2r-xA&s', 
    desc: 'Le hub de l\'Afrique pour vos connexions vers Dubaï et l\'Asie.' 
  },
  { 
    id: 4, 
    name: 'Turkish Airlines', 
    logo: 'https://images.seeklogo.com/logo-png/50/1/turkish-airlines-logo-png_seeklogo-502732.png', 
    desc: 'Idéal pour le shopping à Istanbul et le business.' 
  },
  { 
    id: 5, 
    name: 'Royal Air Maroc', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VTbfiCY-Q0peWB6NMG5mAp4buIxzA9E4VQ&s', 
    desc: 'Connexions via Casablanca pour l\'Europe et le Canada.' 
  },
  { 
    id: 6, 
    name: 'Camair-Co', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJbssy_H1ZDr27oI1ZbFEtVjJfmUiXwPHTQ&s', // Logo officiel Camair-Co
    desc: 'L\'étoile du Cameroun pour vos vols régionaux (Nord, Ouest).' 
  },
  { 
    id: 7, 
    name: 'RwandAir', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jEzTTU3dBVwMt6-mBfUNLiFbHiWwqxcTlA&s', 
    desc: 'Excellent service pour les connexions africaines.' 
  },
  { 
    id: 8, 
    name: 'Emirates', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png', 
    desc: 'Le luxe pour vos voyages vers Dubaï (via partenaires).' 
  },
];

const Partners = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div className="pt-24 pb-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            Nos Partenaires <span className="text-orange-500">Aériens</span>
          </h1>
          <p className="text-lg text-blue-800 font-medium max-w-2xl mx-auto">
            Au départ de Douala et Yaoundé-Nsimalen, nous travaillons avec les compagnies les plus fiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {airlines.map((airline, index) => (
            <motion.div 
              key={airline.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center border border-white/50"
            >
              <div className="h-24 w-24 mb-4 flex items-center justify-center p-2 bg-slate-50 rounded-full border border-slate-100 relative overflow-hidden">
                <img 
                  src={airline.logo} 
                  alt={`Logo ${airline.name}`} 
                  className="w-full h-full object-contain"
                  onError={handleImageError}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-blue-50 text-blue-900 flex-col">
                    <FaPlane className="text-2xl mb-1"/>
                    <span className="text-[10px] font-bold uppercase">{airline.name.slice(0, 3)}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-1">{airline.name}</h3>
              <p className="text-xs text-gray-500">{airline.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;