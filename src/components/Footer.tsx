import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-white">JCKAY</span>
              <span className="text-brand-lightBlue"> GROUP</span>
            </div>
            <p className="text-gray-300 mb-6">{t('footer.tagline')}</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-lightBlue transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-lightBlue transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-lightBlue transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              {t('footer.usefulLinks')}
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-brand-lightBlue"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('common.aboutUs')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('common.contactUs')}</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              {t('footer.businessHours')}
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-brand-lightBlue"></span>
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="font-medium">{t('footer.monSat')}</span>
                <p>{t('footer.hoursValue')}</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              {t('footer.contactInfo')}
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-brand-lightBlue"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-lightBlue mt-1" size={20} />
                <span className="text-gray-300">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-lightBlue" size={20} />
                <a href="tel:+13059246257" className="text-gray-300 hover:text-white transition-colors">+1 (305) 924-6257</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-lightBlue" size={20} />
                <a href="mailto:jckaygroup@gmail.com" className="text-gray-300 hover:text-white transition-colors">jckaygroup@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} JCKAY GROUP. {t('footer.rights')}
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
