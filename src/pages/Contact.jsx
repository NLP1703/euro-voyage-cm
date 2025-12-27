import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // === MODIFICATION ICI : C'EST LE NUMÉRO MTN QUI REÇOIT LE WHATSAPP ===
    const phoneNumber = "237683818447"; 
    
    // Construction du message
    const whatsappMessage = `Je suis ${formData.name}%0A%0A${formData.message}%0A%0A${formData.email}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Ouverture de WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-12 bg-transparent min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-blue-900 drop-shadow-sm mb-4">Contactez nos agents</h1>
          <p className="text-blue-800 text-lg">Une réponse rapide pour tous vos besoins de voyage.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          
          {/* === COLONNE GAUCHE : INFOS === */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-white/50 h-full">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Nos Coordonnées</h3>
            
            <div className="space-y-8">
               
               {/* ADRESSE */}
               <div className="flex items-start gap-4">
                 <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaMapMarkerAlt size={20} /></div>
                 <div>
                   <p className="text-sm text-gray-500 font-bold uppercase">Adresse Physique</p>
                   <p className="text-lg font-bold text-blue-900">Carrefour Tropicana, Yaoundé</p>
                   <p className="text-sm text-gray-600">Succursale : Akwa, Douala</p>
                 </div>
               </div>

               {/* TÉLÉPHONES */}
               <div className="flex items-start gap-4">
                 <div className="bg-orange-100 p-3 rounded-full text-orange-600"><FaPhoneAlt size={20} /></div>
                 <div>
                   <p className="text-sm text-gray-500 font-bold uppercase">Service Client</p>
                   {/* Affichage des deux numéros */}
                   <p className="text-lg font-bold text-blue-900">MTN : (+237) 683 81 84 47 <span className="text-green-500 text-xs ml-1">(WhatsApp)</span></p>
                   <p className="text-lg font-bold text-blue-900">Orange : (+237) 656 76 33 41</p>
                 </div>
               </div>

               {/* EMAIL */}
               <div className="flex items-start gap-4">
                 <div className="bg-purple-100 p-3 rounded-full text-purple-600"><FaEnvelope size={20} /></div>
                 <div>
                   <p className="text-sm text-gray-500 font-bold uppercase">Email Professionnel</p>
                   <p className="text-lg font-bold text-blue-900 text-sm md:text-lg break-all">pharelndongo2005@gmail.com</p>
                 </div>
               </div>

               {/* HEURES D'OUVERTURE */}
               <div className="flex items-start gap-4">
                 <div className="bg-green-100 p-3 rounded-full text-green-600"><FaClock size={20} /></div>
                 <div>
                   <p className="text-sm text-gray-500 font-bold uppercase">Heures d'ouverture</p>
                   <div className="text-gray-700 font-medium">
                     <p>Lundi - Vendredi : <span className="text-blue-900 font-bold">08h00 - 18h00</span></p>
                     <p>Samedi : <span className="text-blue-900 font-bold">09h00 - 14h00</span></p>
                     <p className="text-red-500 text-sm mt-1">Fermé le Dimanche</p>
                   </div>
                 </div>
               </div>

               {/* BOUTON WHATSAPP DIRECT (Sur le numéro MTN) */}
               <div className="pt-4">
                 <a 
                   href="https://wa.me/237683818447" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition transform hover:scale-105 shadow-md"
                 >
                   <FaWhatsapp size={24} />
                   Discussion Directe WhatsApp
                 </a>
               </div>

            </div>
          </div>

          {/* === COLONNE DROITE : FORMULAIRE === */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h3>
            <p className="text-gray-600 mb-6 text-sm">Remplissez ce formulaire et vous serez redirigé vers WhatsApp avec votre message pré-rempli.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-blue-900 mb-2 font-bold text-sm">Nom complet</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-white border border-blue-100 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition" 
                  placeholder="Votre nom" 
                  required 
                />
              </div>
              <div>
                <label className="block text-blue-900 mb-2 font-bold text-sm">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-white border border-blue-100 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition" 
                  placeholder="Votre email" 
                  required 
                />
              </div>
              <div>
                <label className="block text-blue-900 mb-2 font-bold text-sm">Votre demande</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-white border border-blue-100 rounded-xl h-40 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition" 
                  placeholder="Bonjour, je souhaite un devis pour..." 
                  required
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="w-full mt-6 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition transform text-lg">
               Envoyer ma demande ✈️
            </button>
          </form>

        </div>

        {/* === SECTION GOOGLE MAPS === */}
        <div className="bg-white p-4 rounded-3xl shadow-lg">
           <h3 className="text-xl font-bold text-center text-blue-900 mb-4">Retrouvez-nous à Yaoundé</h3>
           <div className="w-full h-80 rounded-2xl overflow-hidden">
             <iframe 
               title="Carte Euro Voyage CM"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31845.89537968453!2d11.5000!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54991207908!2sTropicana%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;