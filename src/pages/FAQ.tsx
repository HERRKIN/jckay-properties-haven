import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building, TreePine, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concreteFAQs = [
    {
      question: "¿Cuánto tiempo debo esperar para caminar o estacionar mi auto en el concreto nuevo?",
      answer: "Puedes caminar sobre él después de 24 horas. Para vehículos ligeros, recomendamos esperar al menos 7 días, y para camiones o maquinaria pesada, lo ideal son 28 días (cuando el concreto alcanza su máxima resistencia)."
    },
    {
      question: "¿El concreto se va a agrietar?",
      answer: "El concreto tiende a expandirse y contraerse. Para evitar grietas descontroladas, instalamos juntas de control estratégicas. Esto guía cualquier movimiento natural y mantiene la estética de la superficie."
    },
    {
      question: "¿Es necesario sellar el concreto?",
      answer: "Sí, lo recomendamos ampliamente. El sellado protege contra manchas de aceite, químicos y el desgaste por el sol, duplicando la vida útil de tu inversión."
    }
  ];

  const fenceFAQs = [
    {
      question: "¿Qué tipo de madera utilizan?",
      answer: "Trabajamos principalmente con Cedro (naturalmente resistente a la rotación e insectos) y Pino Tratado a presión (una opción duradera y económica). Podemos asesorarte sobre cuál conviene más según tu presupuesto."
    },
    {
      question: "¿Cuánto tiempo dura una cerca de madera?",
      answer: "Con el mantenimiento adecuado (limpieza y sellado cada 2-3 años), una cerca de buena calidad puede durar entre 15 y 20 años."
    },
    {
      question: "¿Ustedes se encargan de los permisos de construcción?",
      answer: "Podemos guiarte en el proceso. Generalmente, las regulaciones varían según la ciudad o la asociación de vecinos (HOA). Te proporcionamos los planos o especificaciones técnicas que necesites para el trámite."
    }
  ];

  const generalFAQs = [
    {
      question: "¿Ofrecen presupuestos sin compromiso?",
      answer: "¡Totalmente! Visitamos tu propiedad, tomamos medidas y te entregamos un presupuesto detallado sin costo alguno."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* FAQ Hero */}
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <HelpCircle className="text-white mr-3" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Preguntas Frecuentes</h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de concreto y cercas de madera.
          </p>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Sobre Concreto */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Building className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">Sobre Concreto</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {concreteFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`concrete-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sobre Cercas de Madera */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TreePine className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">Sobre Cercas de Madera</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {fenceFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`fence-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Generales */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">Generales</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
            <p className="text-gray-600 mb-6">
              Estamos aquí para ayudarte. Contáctanos y responderemos todas tus preguntas.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
