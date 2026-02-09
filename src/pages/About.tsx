import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyItems = [
    { titleKey: 'about.experienced' as const, descKey: 'about.experiencedDesc' as const },
    { titleKey: 'about.quality' as const, descKey: 'about.qualityDesc' as const },
    { titleKey: 'about.satisfaction' as const, descKey: 'about.satisfactionDesc' as const },
    { titleKey: 'about.comprehensive' as const, descKey: 'about.comprehensiveDesc' as const },
    { titleKey: 'about.timely' as const, descKey: 'about.timelyDesc' as const },
    { titleKey: 'about.pricing' as const, descKey: 'about.pricingDesc' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('about.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('about.heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="JCKAY team" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="section-title">{t('about.ourStory')}</h2>
              <p className="text-lg text-gray-600 mb-6">{t('about.story1')}</p>
              <p className="text-lg text-gray-600 mb-6">{t('about.story2')}</p>
              <p className="text-lg text-gray-600">{t('about.story3')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title centered">{t('about.ourMission')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">{t('about.missionText')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title centered">{t('about.whyChoose')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyItems.map((item, index) => (
              <div key={index} className="p-6 glass-card">
                <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{t(item.titleKey)}</h3>
                <p className="text-gray-600">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{t('about.ctaSubtitle')}</p>
          <Link to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 shadow-md hover:shadow-lg">{t('about.getStarted')}</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
