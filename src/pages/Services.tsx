import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { useTranslation } from 'react-i18next';
import { Building, TreePine, Hammer, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concreteServices = [
    { icon: <Building size={28} />, titleKey: 'services.drivewaysTitle' as const, descKey: 'services.drivewaysDesc' as const },
    { icon: <Building size={28} />, titleKey: 'services.patiosTitle' as const, descKey: 'services.patiosDesc' as const },
    { icon: <Building size={28} />, titleKey: 'services.sidewalksTitle' as const, descKey: 'services.sidewalksDesc' as const },
    { icon: <Wrench size={28} />, titleKey: 'services.repairsTitle' as const, descKey: 'services.repairsDesc' as const },
  ];

  const fenceServices = [
    { icon: <TreePine size={28} />, titleKey: 'services.privacyFenceTitle' as const, descKey: 'services.privacyFenceDesc' as const },
    { icon: <Hammer size={28} />, titleKey: 'services.horizontalTitle' as const, descKey: 'services.horizontalDesc' as const },
    { icon: <Building size={28} />, titleKey: 'services.gatesTitle' as const, descKey: 'services.gatesDesc' as const },
    { icon: <Wrench size={28} />, titleKey: 'services.treatmentTitle' as const, descKey: 'services.treatmentDesc' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('services.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('services.heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Building className="text-brand-lightBlue" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">{t('services.concreteTitle')}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('services.concreteIntro')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {concreteServices.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={t(service.titleKey)} description={t(service.descKey)} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <TreePine className="text-brand-lightBlue" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold">{t('services.fenceTitle')}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('services.fenceIntro')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fenceServices.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={t(service.titleKey)} description={t(service.descKey)} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('services.ctaTitle')}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{t('services.ctaSubtitle')}</p>
          <a href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-brand-blue hover:bg-white/90">{t('index.ctaQuote')}</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
