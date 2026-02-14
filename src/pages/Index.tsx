import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import { 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  CheckSquare,
  TreePine
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, imgPath } from '../data/projectsData';

const Index = () => {
  const { t } = useTranslation();
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

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - foto real: driveway de concreto y portón */}
      <section className="relative h-[85vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url('${import.meta.env.BASE_URL || '/'}images/projects/concrete-driveway-gate.png')` }}>
        <div className="absolute inset-0 bg-brand-navy/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('index.heroTitle')}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {t('index.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('index.ctaQuote')}
              </a>
              <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 rounded-md font-medium transition-all hover:bg-white/20 shadow-md hover:shadow-lg">
                {t('index.ctaServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title centered">{t('index.servicesTitle')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="animate-on-scroll">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-lightBlue/10 rounded-lg flex items-center justify-center">
                    <Building className="text-brand-lightBlue" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{t('index.concreteTitle')}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t('index.concreteIntro')}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.driveways')}</strong>
                      <p className="text-gray-600">{t('index.drivewaysDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.patios')}</strong>
                      <p className="text-gray-600">{t('index.patiosDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.sidewalks')}</strong>
                      <p className="text-gray-600">{t('index.sidewalksDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.repairs')}</strong>
                      <p className="text-gray-600">{t('index.repairsDesc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-lightBlue/10 rounded-lg flex items-center justify-center">
                    <TreePine className="text-brand-lightBlue" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{t('index.fenceTitle')}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t('index.fenceIntro')}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.privacyFence')}</strong>
                      <p className="text-gray-600">{t('index.privacyFenceDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.horizontalStyle')}</strong>
                      <p className="text-gray-600">{t('index.horizontalStyleDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.gates')}</strong>
                      <p className="text-gray-600">{t('index.gatesDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-brand-lightBlue mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">{t('index.treatment')}</strong>
                      <p className="text-gray-600">{t('index.treatmentDesc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-lightBlue transition-colors">
              <span>{t('index.viewAllServices')}</span>
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
              <h2 className="section-title">{t('index.whyUsTitle')}</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('index.premiumMaterials')}</h3>
                    <p className="text-gray-600">{t('index.premiumMaterialsDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('index.precision')}</h3>
                    <p className="text-gray-600">{t('index.precisionDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('index.cleanup')}</h3>
                    <p className="text-gray-600">{t('index.cleanupDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('index.warranty')}</h3>
                    <p className="text-gray-600">{t('index.warrantyDesc')}</p>
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
            <h2 className="section-title centered">{t('index.featuredTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              {t('index.featuredSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="block animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <ProjectCard
                  image={imgPath(project.gallery[0])}
                  title={t(project.titleKey)}
                  category={t(project.categoryKey)}
                  index={index}
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              {t('index.viewAllProjects')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll opacity-0">{t('index.ctaTitle')}</h2>
            <p className="text-xl text-white/80 mb-8 animate-on-scroll opacity-0">
              {t('index.ctaSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll opacity-0">
              <a href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 shadow-md hover:shadow-lg">
                {t('index.ctaQuote')}
              </a>
              <a href="tel:+13059246257" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-all hover:bg-white/10 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                <Phone size={20} />
                <span>{t('index.callNow')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title centered">{t('index.testimonialsTitle')}</h2>
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
                "{t('index.testimonialQuote')}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-gray-900">{t('index.testimonialAuthor')}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - solo WhatsApp y datos de contacto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-title text-center animate-on-scroll">{t('index.contactTitle')}</h2>
          <p className="text-lg text-gray-600 text-center mb-10 animate-on-scroll">
            {t('index.contactIntro')}
          </p>
          <div className="space-y-6 mb-10 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Phone className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('index.phone')}</h3>
                <a href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-blue transition-colors">+1 (305) 924-6257</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Mail className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('index.email')}</h3>
                <a href="mailto:jckaygroup@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">jckaygroup@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Clock className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('index.hoursLabel')}</h3>
                <p className="text-gray-600">{t('index.hoursValue')}</p>
              </div>
            </div>
          </div>
          <div className="text-center animate-on-scroll">
            <a
              href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('index.ctaQuote')}
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

