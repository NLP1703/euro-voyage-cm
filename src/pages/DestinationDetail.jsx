import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinationsData } from '../data';
import { FaClock, FaStar, FaArrowLeft, FaCheck } from 'react-icons/fa';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData.find(d => d.id === parseInt(id));

  if (!destination) {
    return <div className="text-center pt-32 text-xl font-bold text-blue-900">Oups ! Destination introuvable.</div>;
  }

  return (
    // Fond transparent pour laisser passer le bleu
    <div className="pt-24 bg-transparent min-h-screen pb-10">
      
      <div className="container mx-auto px-4 mb-6">
        <Link to="/destinations" className="inline-flex items-center gap-2 text-blue-900 hover:text-orange-500 transition font-bold bg-white/50 px-4 py-2 rounded-full">
          <FaArrowLeft /> Retour aux destinations
        </Link>
      </div>

      <div className="container mx-auto px-4">
        {/* La carte reste blanche pour la lisibilité */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          
          <div className="relative h-64 md:h-96">
            <img 
              src={destination.image} 
              alt={destination.country} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 bg-white/95 px-8 py-3 rounded-bl-3xl font-black text-2xl text-blue-900 shadow-lg">
              {destination.price}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-2">{destination.country}</h1>
              <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
                <span className={`px-4 py-1 text-white font-bold rounded-full ${destination.color} shadow-md`}>
                  {destination.tag}
                </span>
                <span className="px-4 py-1 bg-blue-50 text-blue-700 font-bold rounded-full flex items-center gap-2 border border-blue-100">
                  <FaClock /> {destination.duration}
                </span>
                <span className="px-4 py-1 bg-yellow-50 text-yellow-600 font-bold rounded-full flex items-center gap-2 border border-yellow-100">
                  <FaStar /> {destination.rating}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">À propos du voyage</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {destination.fullDesc}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Ce qui est inclus :</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-10 bg-blue-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="bg-green-500 p-1 rounded-full text-white"><FaCheck size={10}/></div>
                Vols Aller/Retour inclus
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="bg-green-500 p-1 rounded-full text-white"><FaCheck size={10}/></div>
                Hébergement 4 étoiles
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="bg-green-500 p-1 rounded-full text-white"><FaCheck size={10}/></div>
                Guide francophone
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="bg-green-500 p-1 rounded-full text-white"><FaCheck size={10}/></div>
                Activités principales
              </div>
            </div>

            <div className="border-t pt-8 text-center md:text-left">
              <Link to="/contact" className={`inline-block w-full md:w-auto text-center ${destination.color} text-white font-bold py-4 px-12 rounded-full hover:shadow-lg hover:scale-105 transition transform text-lg`}>
                Demander un devis maintenant
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;