
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { 
  Building, 
  TreePine,
  Hammer,
  Wrench,
  CheckSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concreteServices = [
    {
      icon: <Building size={28} />,
      title: "Driveways y Entradas",
      description: "Resistencia garantizada para tus vehículos. Creamos entradas duraderas que soportan el peso y el uso constante."
    },
    {
      icon: <Building size={28} />,
      title: "Patios y Terrazas",
      description: "Diseños en concreto estampado o pulido. Transformamos tus espacios exteriores en áreas funcionales y estéticas."
    },
    {
      icon: <Building size={28} />,
      title: "Aceras y Caminos",
      description: "Seguridad y flujo para tu propiedad. Diseñamos caminos que guían y conectan los espacios de tu hogar."
    },
    {
      icon: <Wrench size={28} />,
      title: "Reparaciones y Mantenimiento",
      description: "Alargamos la vida de tus superficies. Servicios de reparación y mantenimiento para mantener tu concreto en perfecto estado."
    }
  ];

  const fenceServices = [
    {
      icon: <TreePine size={28} />,
      title: "Cercas de Privacidad",
      description: "Estilo Cedar o Pino - El refugio perfecto para tu familia. Ofrecemos privacidad total con materiales de primera calidad."
    },
    {
      icon: <Hammer size={28} />,
      title: "Estilo Horizontal Moderno",
      description: "Dale un toque contemporáneo a tu fachada. Diseños modernos que combinan funcionalidad y estética."
    },
    {
      icon: <Building size={28} />,
      title: "Portones Personalizados",
      description: "Funcionalidad con acabados de primera. Portones diseñados según tus necesidades específicas."
    },
    {
      icon: <Wrench size={28} />,
      title: "Tratamiento y Sellado",
      description: "Protegemos la madera contra el clima y la humedad. Mantenimiento profesional para prolongar la vida de tu cerca."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Somos expertos en acabados de concreto y cercas de madera personalizadas. 
            Calidad que resiste el tiempo en propiedad.
          </p>
        </div>
      </section>
      
      {/* Concrete Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Building className="text-brand-lightBlue" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">Soluciones en Concreto</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creamos superficies funcionales y estéticas para tu propiedad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {concreteServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fence Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <TreePine className="text-brand-lightBlue" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">Cercas de Madera</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Privacidad, seguridad y belleza natural para tu hogar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fenceServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Contáctanos hoy para una consulta y presupuesto gratuito. Nuestro equipo está listo para hacer realidad tu visión.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-white/90">
            Presupuesto Gratis
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
