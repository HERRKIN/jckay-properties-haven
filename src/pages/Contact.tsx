import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.toastTitle'),
        description: t('contact.toastDescription'),
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  const serviceOptions = [
    { value: 'concrete', labelKey: 'contactForm.concrete' as const },
    { value: 'fence', labelKey: 'contactForm.fence' as const },
    { value: 'driveway', labelKey: 'contactForm.driveway' as const },
    { value: 'patio', labelKey: 'contactForm.patio' as const },
    { value: 'sidewalk', labelKey: 'contactForm.sidewalk' as const },
    { value: 'repair', labelKey: 'contactForm.repair' as const },
    { value: 'other', labelKey: 'contactForm.other' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('contact.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('contact.heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">{t('contact.getInTouch')}</h2>
              <p className="text-lg text-gray-600 mb-8">{t('contact.intro')}</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1"><Phone className="text-brand-lightBlue" size={24} /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('index.phone')}</h3>
                    <a href="tel:+13059246257" className="text-gray-600 hover:text-brand-blue transition-colors">+1 (305) 924-6257</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1"><Mail className="text-brand-lightBlue" size={24} /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('index.email')}</h3>
                    <a href="mailto:jckaygroup@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">jckaygroup@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1"><Clock className="text-brand-lightBlue" size={24} /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{t('index.hoursLabel')}</h3>
                    <p className="text-gray-600">{t('index.hoursValue')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">{t('index.name')}</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder={t('index.namePlaceholder')} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">{t('index.email')}</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder={t('index.emailPlaceholder')} required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">{t('index.phone')}</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder={t('index.phonePlaceholder')} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2">{t('index.serviceNeeded')}</label>
                    <select id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50">
                      <option value="">{t('index.selectService')}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{t(opt.labelKey)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">{t('index.message')}</label>
                    <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder={t('index.messagePlaceholder')} required></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('index.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t('index.submit')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7411321579!2d-84.56068690459304!3d33.767633772513685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1647443744986!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="JCKAY GROUP location"></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
