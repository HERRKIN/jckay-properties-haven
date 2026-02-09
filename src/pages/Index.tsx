import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { 
  Building, 
  PaintRoller, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  CheckSquare,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const observerRefs = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(el);
      observerRefs.current.push(el as HTMLElement);
    });
    
    return () => {
      observer.disconnect();
      observerRefs.current = [];
    };
  }, []);

  const featuredProjects = [
    {
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Cerca de Madera Moderna',
      category: 'Cercas de Privacidad'
    },
    {
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Driveway de Concreto Estampado',
      category: 'Acabados de Concreto'
    },
    {
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Patio con Concreto Pulido',
      category: 'Acabados de Concreto'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-brand-navy/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Construimos las bases y la privacidad de tu hogar.
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Somos expertos en acabados de concreto y cercas de madera personalizadas. Calidad que resiste el tiempo en propiedad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Presupuesto Gratis
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 rounded-md font-medium transition-all hover:bg-white/20 shadow-md hover:shadow-lg">
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title centered">Nuestros Servicios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Soluciones en Concreto */}
            <div className="animate-on-scroll">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-lightBlue/10 rounded-lg flex items-center justify-center">
                    <Building className="text-brand-lightBlue" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Soluciones en Concreto</h3>
                </div>
                <p className="text-gray-600 mb-6">Creamos superficies funcionales y estéticas:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Driveways y Entradas:</strong>
                      <p className="text-gray-600">Resistencia garantizada para tus vehículos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Patios y Terrazas:</strong>
                      <p className="text-gray-600">Diseños en concreto estampado o pulido.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Aceras y Caminos:</strong>
                      <p className="text-gray-600">Seguridad y flujo para tu propiedad.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Reparaciones y Mantenimiento:</strong>
                      <p className="text-gray-600">Alargamos la vida de tus superficies.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cercas de Madera */}
            <div className="animate-on-scroll">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-lightBlue/10 rounded-lg flex items-center justify-center">
                    <TreePine className="text-brand-lightBlue" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Cercas de Madera</h3>
                </div>
                <p className="text-gray-600 mb-6">Privacidad, seguridad y belleza natural:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Cercas de Privacidad:</strong>
                      <p className="text-gray-600">Estilo Cedar o Pino - El refugio perfecto para tu familia.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Estilo "Horizontal Moderno":</strong>
                      <p className="text-gray-600">Dale un toque contemporáneo a tu fachada.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Portones Personalizados:</strong>
                      <p className="text-gray-600">Funcionalidad con acabados de primera.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Tratamiento y Sellado:</strong>
                      <p className="text-gray-600">Protegemos la madera contra el clima y la humedad.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-lightBlue transition-colors">
              <span>Ver Todos los Servicios</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional team" 
                className="rounded-lg shadow-xl object-cover h-full"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="section-title">¿Por qué elegirnos?</h2>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Materiales Premium</h3>
                    <p className="text-gray-600">Solo usamos concreto de alta resistencia y madera tratada de primera calidad.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precisión Técnica</h3>
                    <p className="text-gray-600">Nivelación perfecta y postes profundamente anclados.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Limpieza Total</h3>
                    <p className="text-gray-600">Dejamos tu propiedad impecable al terminar la obra.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Garantía de Obra</h3>
                    <p className="text-gray-600">Respaldamos cada proyecto con garantía por escrito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title centered">Proyectos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Conoce algunos de nuestros proyectos recientes que muestran nuestra experiencia y calidad en acabados de concreto y cercas de madera.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll opacity-0">¿Listo para comenzar tu próximo proyecto?</h2>
            <p className="text-xl text-white/80 mb-8 animate-on-scroll opacity-0">
              Contáctanos hoy para una consulta y presupuesto gratuito. Deja que nuestro equipo experto haga realidad tu visión.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll opacity-0">
              <Link to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 shadow-md hover:shadow-lg">
                Presupuesto Gratis
              </Link>
              <a href="tel:+13059246257" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-all hover:bg-white/10 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                <Phone size={20} />
                <span>Llámanos Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title centered">Testimonios</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 animate-on-scroll">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                "Increíble atención al detalle. Mi cerca quedó perfectamente alineada y el nuevo driveway cambió por completo la vista de mi casa. 100% recomendados."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Cliente Satisfecho</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="section-title">Contáctanos Hoy</h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Listo para comenzar tu proyecto? ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte. Contáctanos hoy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Teléfono</h3>
                    <a href="tel:+13059246257" className="text-gray-600 hover:text-brand-blue transition-colors">+1 (305) 924-6257</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Correo Electrónico</h3>
                    <a href="mailto:jckaygroup@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">jckaygroup@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Horarios</h3>
                    <p className="text-gray-600">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Presupuesto Gratis</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                        placeholder="Tu Nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Correo</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                        placeholder="Tu Correo"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                      placeholder="Tu Número de Teléfono"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2">Servicio Necesario</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                    >
                      <option value="">Selecciona un Servicio</option>
                      <option value="concrete">Acabados de Concreto</option>
                      <option value="fence">Cercas de Madera</option>
                      <option value="driveway">Driveway</option>
                      <option value="patio">Patio/Terraza</option>
                      <option value="sidewalk">Aceras</option>
                      <option value="repair">Reparaciones</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                      placeholder="Cuéntanos sobre tu proyecto"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

