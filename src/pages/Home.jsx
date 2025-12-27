import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPassport, FaPlane, FaExchangeAlt, FaSuitcase, FaHeadset, FaClock, FaComments, FaSearchDollar, FaLock, FaTicketAlt, FaPlaneDeparture } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="overflow-hidden">
      
      {/* === HERO SECTION === */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Voyageurs aéroport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl uppercase"
          >
            DÉCOLLEZ DEPUIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-red-500 to-yellow-400">DOUALA & YAOUNDÉ</span>
          </motion.h1>
          
          <p className="text-xl md:text-3xl text-white font-medium mb-10 drop-shadow-lg">
            Billets Nationaux & Internationaux • Visa • Assistance 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/destinations" className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300 text-lg">
              Nos Offres Spéciales 🔥
            </Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-lg">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* === BANDEAU DE CONFIANCE === */}
      <div className="bg-white py-8 shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center p-4">
                <FaPlane className="text-4xl text-blue-600 mb-2" />
                <h3 className="font-bold text-gray-800 uppercase">Vols Monde & Locaux</h3>
                <p className="text-sm text-gray-500">International & Camair-Co</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <FaExchangeAlt className="text-4xl text-blue-600 mb-2" />
                <h3 className="font-bold text-gray-800 uppercase">Flexibilité</h3>
                <p className="text-sm text-gray-500">Modification & Annulation faciles</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <FaHeadset className="text-4xl text-blue-600 mb-2" />
                <h3 className="font-bold text-gray-800 uppercase">Service Client</h3>
                <p className="text-sm text-gray-500">Assistance avant, pendant et après vol</p>
            </div>
        </div>
      </div>

      {/* === NOUVELLE SECTION : LE PROCESSUS EN 5 ÉTAPES === */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-blue-900 mb-4">Votre voyage en <span className="text-orange-500">5 étapes simples</span></h2>
            <p className="text-gray-600">Fini le stress. Voici comment nous procédons pour vous faire voyager.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 text-center relative">
            {/* Ligne de connexion (visible seulement sur grand écran) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-blue-100 -z-10"></div>

            {/* Étape 1 */}
            <div className="bg-white p-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <FaComments className="text-3xl text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">1. Contact</h3>
              <p className="text-sm text-gray-500 mt-2">Vous nous contactez par WhatsApp, appel ou à l'agence.</p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white p-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <FaSearchDollar className="text-3xl text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">2. Propositions</h3>
              <p className="text-sm text-gray-500 mt-2">Nous trouvons les meilleurs vols/prix selon vos dates.</p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white p-4">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <FaLock className="text-3xl text-orange-500" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">3. Paiement Sûr</h3>
              <p className="text-sm text-gray-500 mt-2">Paiement sécurisé en Agence ou via Orange/MTN Money.</p>
            </div>

            {/* Étape 4 */}
            <div className="bg-white p-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <FaTicketAlt className="text-3xl text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">4. Émission</h3>
              <p className="text-sm text-gray-500 mt-2">Vous recevez votre billet électronique instantanément.</p>
            </div>

            {/* Étape 5 */}
            <div className="bg-white p-4">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <FaPlaneDeparture className="text-3xl text-green-500" />
              </div>
              <h3 className="font-bold text-lg text-blue-900">5. Voyage</h3>
              <p className="text-sm text-gray-500 mt-2">Assistance 24/7 jusqu'à votre arrivée à destination.</p>
            </div>

          </div>
        </div>
      </section>

      {/* === SECTION SERVICES === */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              Ce que nous faisons <span className="text-orange-500">pour vous</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-blue-800">Une offre complète pour voyager l'esprit tranquille.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl text-blue-600">
                    <FaPlane />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Billetterie Complète</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✈️ Vente de billets internationaux</li>
                    <li>🇨🇲 Vente de billets nationaux (Cameroun)</li>
                    <li>🏢 Tarifs négociés entreprises</li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500 hover:-translate-y-2 transition duration-300">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl text-orange-500">
                    <FaSuitcase />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Assistance & Conseils</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                    <li>📄 Assistance Visa (Schengen, Dubaï...)</li>
                    <li>🧳 Conseils bagages et douanes</li>
                    <li>📋 Vérification des documents de voyage</li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500 hover:-translate-y-2 transition duration-300">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl text-green-500">
                    <FaClock />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Service Après-Vente</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                    <li>🔁 Modification de billets</li>
                    <li>❌ Gestion des annulations / Remboursements</li>
                    <li>📞 Assistance 24/7 en cas d'urgence</li>
                </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;