import React from 'react';

const ServiceCard = ({ icon, title, desc, color }) => (
  <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100 group">
    <div className={`text-6xl mb-6 ${color} flex justify-center group-hover:scale-110 transition duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
    <p className="text-gray-500 text-center leading-relaxed">{desc}</p>
  </div>
);

export default ServiceCard;