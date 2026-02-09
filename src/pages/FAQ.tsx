import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building, TreePine, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concreteItems = [
    { q: 'faq.concreteQ1' as const, a: 'faq.concreteA1' as const },
    { q: 'faq.concreteQ2' as const, a: 'faq.concreteA2' as const },
    { q: 'faq.concreteQ3' as const, a: 'faq.concreteA3' as const },
  ];
  const fenceItems = [
    { q: 'faq.fenceQ1' as const, a: 'faq.fenceA1' as const },
    { q: 'faq.fenceQ2' as const, a: 'faq.fenceA2' as const },
    { q: 'faq.fenceQ3' as const, a: 'faq.fenceA3' as const },
  ];
  const generalItems = [
    { q: 'faq.generalQ1' as const, a: 'faq.generalA1' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <HelpCircle className="text-white mr-3" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">{t('faq.heroTitle')}</h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('faq.heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Building className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">{t('faq.aboutConcrete')}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {concreteItems.map((item, index) => (
                <AccordionItem key={index} value={`concrete-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{t(item.q)}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">{t(item.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TreePine className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">{t('faq.aboutFence')}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {fenceItems.map((item, index) => (
                <AccordionItem key={index} value={`fence-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{t(item.q)}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">{t(item.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-brand-lightBlue" size={32} />
              <h2 className="text-3xl font-bold">{t('faq.general')}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {generalItems.map((item, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{t(item.q)}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">{t(item.a)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{t('faq.notFoundCta')}</h3>
            <p className="text-gray-600 mb-6">{t('faq.notFoundCtaDesc')}</p>
            <Link to="/contact" className="btn-primary inline-block">{t('faq.contactUs')}</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
