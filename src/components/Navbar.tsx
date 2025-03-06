
import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-brand-navy text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex space-x-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-brand-lightBlue transition-colors">
              <Phone size={16} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@jckaygroup.com" className="flex items-center gap-2 hover:text-brand-lightBlue transition-colors">
              <Mail size={16} />
              <span>info@jckaygroup.com</span>
            </a>
          </div>
          <div className="text-sm md:text-base">
            <span>Mon-Fri: 8:00AM - 6:00PM</span>
          </div>
        </div>
      </div>
      
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-brand-blue">
                <span>JCKAY</span>
                <span className="text-brand-lightBlue"> GROUP</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2">
                Home
              </Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2">
                Services
              </Link>
              <Link to="/projects" className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2">
                Projects
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2">
                About
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-blue transition-colors py-2">
                Contact
              </Link>
            </nav>
            
            <div className="hidden md:block">
              <Link to="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 md:hidden animate-fadeIn">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className="text-xl font-medium px-4 py-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-xl font-medium px-4 py-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className="text-xl font-medium px-4 py-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/about" 
                className="text-xl font-medium px-4 py-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-xl font-medium px-4 py-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
              
              <div className="pt-4 flex flex-col space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} />
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:info@jckaygroup.com" className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} />
                  <span>info@jckaygroup.com</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
