import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaGlobeAfrica, FaCheckCircle, FaUserCheck, FaFileContract, FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
          >
            Qui Sommes-<span className="text-orange-500">Nous ?</span>
          </motion.h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Section Présentation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Agence Euro Voyage Cameroun" 
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </motion.div>
          
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">L'Expertise Camerounaise depuis 2015</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              <strong>Euro Voyage CM</strong> est une agence de voyage agréée, née de la volonté de faciliter les déplacements des Camerounais vers le monde entier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Basée stratégiquement à <strong>Yaoundé (Tropicana)</strong> et <strong>Douala (Akwa)</strong>, nous avons accompagné plus de 10 000 voyageurs.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <FaAward className="text-4xl text-orange-500" />
              <div>
                <h4 className="font-bold text-blue-900">Agence Agréée & Partenaire Officiel</h4>
                <p className="text-sm text-blue-800">Nous sommes accrédités auprès des grandes compagnies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 text-center">
            <FaGlobeAfrica className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Notre Vision</h3>
            <p className="text-gray-600">Devenir la référence numéro 1 du voyage au Cameroun.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 text-center">
            <FaHandshake className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Notre Mission</h3>
            <p className="text-gray-600">Offrir un service fiable, transparent et sécurisé.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 text-center">
            <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Engagement Qualité</h3>
            <p className="text-gray-600">Disponibilité 7j/7, tarifs transparents en FCFA.</p>
          </div>
        </div>

        {/* --- NOUVELLE SECTION : LE PARCOURS CLIENT SIMPLIFIÉ --- */}
        <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Notre processus de travail</h2>
            <p className="text-blue-200">La transparence à chaque étape pour vous rassurer.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <FaUserCheck className="text-3xl text-orange-400 mb-4" />
              <h4 className="font-bold mb-2">1. Analyse</h4>
              <p className="text-sm text-blue-200">Nous écoutons votre besoin et votre budget.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <FaFileContract className="text-3xl text-orange-400 mb-4" />
              <h4 className="font-bold mb-2">2. Devis Clair</h4>
              <p className="text-sm text-blue-200">Aucun frais caché. Tout est expliqué avant achat.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <FaCheckCircle className="text-3xl text-orange-400 mb-4" />
              <h4 className="font-bold mb-2">3. Validation</h4>
              <p className="text-sm text-blue-200">Paiement sécurisé et émission immédiate.</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <FaSmile className="text-3xl text-orange-400 mb-4" />
              <h4 className="font-bold mb-2">4. Suivi</h4>
              <p className="text-sm text-blue-200">Nous veillons sur vous jusqu'au retour.</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
            <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full transition transform hover:scale-105 shadow-lg">
              Parler à un conseiller maintenant
            </Link>
        </div>

      </div>
    </div>
  );
};

export default About;