
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { 
  Building, 
  PaintRoller, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  CheckSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const featuredProjects = [
    {
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Kitchen Renovation',
      category: 'Interior Remodeling'
    },
    {
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Custom Wooden Fence Installation',
      category: 'Exterior Construction'
    },
    {
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      title: 'Residential House Painting',
      category: 'Painting Services'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-brand-navy/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-brand-lightBlue/20 backdrop-blur-sm text-white border border-brand-lightBlue/30 animate-fadeIn">
              <span className="text-sm font-medium">Professional Property Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slideUp" style={{ animationDelay: '100ms' }}>
              Your Trusted Partner for Complete <span className="text-brand-lightBlue">Property Solutions</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-slideUp" style={{ animationDelay: '200ms' }}>
              From remodeling and construction to maintenance and repairs, we deliver exceptional results for all your residential and commercial needs.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideUp" style={{ animationDelay: '300ms' }}>
              <Link to="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2.5 rounded-md font-medium transition-all hover:bg-white/20 shadow-md hover:shadow-lg">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="section-title centered">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              We offer a wide range of professional services to meet all your property needs, delivered with expertise and quality craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Building size={28} />} 
              title="Construction & Remodeling" 
              description="Expert remodeling and construction for residential and commercial spaces, delivering quality results on time and on budget."
              delay={100}
            />
            <ServiceCard 
              icon={<PaintRoller size={28} />} 
              title="Interior & Exterior Painting" 
              description="Professional painting services to transform your spaces with premium materials and meticulous attention to detail."
              delay={200}
            />
            <ServiceCard 
              icon={<Wrench size={28} />} 
              title="Maintenance & Repairs" 
              description="Comprehensive maintenance and repair services to keep your property in optimal condition year-round."
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-brand-lightBlue transition-colors">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional team" 
                className="rounded-lg shadow-xl object-cover h-full"
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-title">Why Choose JCKAY GROUP</h2>
              <p className="text-lg text-gray-600 mb-8">
                At JCKAY GROUP, we pride ourselves on delivering exceptional service and quality workmanship on every project. Our experienced team is committed to exceeding your expectations.
              </p>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">Our team brings years of experience and specialized expertise to every project we undertake.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                    <p className="text-gray-600">We take pride in our attention to detail and commitment to delivering the highest quality results.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600">Our clients' satisfaction is our top priority, and we work closely with you to ensure your vision becomes reality.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timely Completion</h3>
                    <p className="text-gray-600">We value your time and are committed to completing projects efficiently without compromising on quality.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="section-title centered">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Take a look at some of our recent projects showcasing our expertise and quality workmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll opacity-0">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-white/80 mb-8 animate-on-scroll opacity-0">
              Contact us today for a free consultation and estimate. Let our expert team bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll opacity-0">
              <Link to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 shadow-md hover:shadow-lg">
                Get Free Quote
              </Link>
              <a href="tel:+1234567890" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-all hover:bg-white/10 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                <Phone size={20} />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="section-title centered">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "JCKAY GROUP transformed our outdated kitchen into a modern, functional space. Their attention to detail and quality craftsmanship exceeded our expectations. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Kitchen Remodeling</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Professional, reliable, and efficient! The team at JCKAY GROUP did an outstanding job on our office renovation. They completed the project on time and within budget."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">Commercial Renovation</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "We hired JCKAY GROUP for exterior painting and fence installation. They were professional from start to finish, and the results are beautiful. We'll definitely use them again!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client" />
                </div>
                <div>
                  <h4 className="font-bold">Emily Thompson</h4>
                  <p className="text-sm text-gray-500">Exterior Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-title">Contact Us Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your project? Have questions about our services? We're here to help! Get in touch with us today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-blue transition-colors">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a href="mailto:info@jckaygroup.com" className="text-gray-600 hover:text-brand-blue transition-colors">info@jckaygroup.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-brand-lightBlue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-gray-600">123 Construction Ave, Building City, GA 30303</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                    >
                      <option value="">Select a Service</option>
                      <option value="remodeling">Remodeling</option>
                      <option value="construction">Construction</option>
                      <option value="painting">Painting</option>
                      <option value="flooring">Flooring</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
