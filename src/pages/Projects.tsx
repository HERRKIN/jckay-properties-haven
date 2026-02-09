
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Cerca de Privacidad en Cedro',
      category: 'Cercas de Madera',
      description: 'Instalación de cerca de privacidad estilo tradicional en madera de cedro, proporcionando seguridad y privacidad total para la propiedad.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Driveway de Concreto Estampado',
      category: 'Acabados de Concreto',
      description: 'Driveway con diseño estampado que combina resistencia y estética, transformando la entrada de la propiedad.'
    },
    {
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Cerca Horizontal Moderna',
      category: 'Cercas de Madera',
      description: 'Diseño contemporáneo con tablas horizontales que dan un toque moderno y elegante a la fachada de la propiedad.'
    },
    {
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Patio con Concreto Pulido',
      category: 'Acabados de Concreto',
      description: 'Patio exterior con acabado pulido que ofrece una superficie lisa y moderna, perfecta para áreas de entretenimiento.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Portón Personalizado en Madera',
      category: 'Cercas de Madera',
      description: 'Portón diseñado a medida con acabados de primera calidad, combinando funcionalidad y diseño personalizado.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Terraza con Concreto Estampado',
      category: 'Acabados de Concreto',
      description: 'Terraza con diseño estampado que imita texturas naturales, creando un espacio exterior único y duradero.'
    },
    {
      image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Aceras y Caminos de Concreto',
      category: 'Acabados de Concreto',
      description: 'Sistema de caminos y aceras que conectan los espacios de la propiedad con seguridad y flujo perfecto.'
    },
    {
      image: 'https://images.unsplash.com/photo-1606946184955-a8cb11e66336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Cerca de Pino Tratado a Presión',
      category: 'Cercas de Madera',
      description: 'Cerca de privacidad en pino tratado a presión, opción duradera y económica con tratamiento contra la humedad.'
    },
    {
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Reparación y Sellado de Concreto',
      category: 'Acabados de Concreto',
      description: 'Servicio de reparación y sellado profesional que alarga la vida útil de las superficies de concreto existentes.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Projects Hero */}
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Proyectos Destacados</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explora nuestro portafolio de proyectos completados, mostrando nuestra experiencia en 
            acabados de concreto y cercas de madera personalizadas.
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="mb-8" style={{ opacity: 1 }}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  index={index}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contáctanos hoy para discutir tu visión. Déjanos ayudarte a hacer realidad tu proyecto con nuestra experiencia y calidad en acabados de concreto y cercas de madera.
          </p>
          <a href="/contact" className="btn-primary">
            Presupuesto Gratis
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
