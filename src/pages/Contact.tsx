import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/13059246257?text=${encodeURIComponent(msg)}`;

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-title text-center mb-10">{t('contact.getInTouch')}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">{t('contact.intro')}</p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Phone className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('index.phone')}</h3>
                <a href="tel:+13059246257" className="text-gray-600 hover:text-brand-blue transition-colors">
                  +1 (305) 924-6257
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Mail className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('index.email')}</h3>
                <a href="mailto:jckaygroup@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">
                  jckaygroup@gmail.com
                </a>
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
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="text-brand-lightBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{t('contact.addressLabel')}</h3>
                <p className="text-gray-600">{t('footer.address')}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_URL(t('nav.whatsappMessage'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20BD5A] transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('contact.writeWhatsApp')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full bg-gray-200" style={{ height: '400px' }}>
          <iframe
            src="https://www.google.com/maps?q=3064+SE+1st+Drive+unit+12+Homestead+FL+33033&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JCKAY GROUP - 3064 SE 1st Drive, Homestead FL"
          />
        </div>
        <p className="text-center py-2 text-sm text-gray-500 bg-gray-100">
          <a
            href="https://www.google.com/maps/search/?api=1&query=3064+SE+1st+Drive+unit+12+Homestead+FL+33033"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:underline"
          >
            {t('contact.openInGoogleMaps')}
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
