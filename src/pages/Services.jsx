import ServiceCard from '../components/ServiceCard';
import { FaPlane, FaHotel, FaPassport, FaBus } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="pt-24 pb-12 bg-light min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">Nos Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<FaPlane />} title="Vols" desc="Réservation billets d'avion" />
          <ServiceCard icon={<FaHotel />} title="Hébergement" desc="Hôtels 3 à 5 étoiles" />
          <ServiceCard icon={<FaPassport />} title="Visas" desc="Démarches administratives" />
          <ServiceCard icon={<FaBus />} title="Transport" desc="Transferts aéroports & trains" />
        </div>
      </div>
    </div>
  );
};

export default Services;