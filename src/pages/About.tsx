
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* About Hero */}
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About JCKAY GROUP</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your trusted partner for comprehensive property solutions, delivering excellence in every project.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="JCKAY team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                JCKAY GROUP was founded with a simple mission: to provide comprehensive property solutions delivered with expertise, integrity, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small family business has grown into a trusted name in the industry, serving both residential and commercial clients throughout the region.
              </p>
              <p className="text-lg text-gray-600">
                Our passion for quality craftsmanship and attention to detail has earned us a reputation for excellence in every project we undertake, from small repairs to major renovations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title centered">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
            At JCKAY GROUP, our mission is to enhance the value, functionality, and beauty of our clients' properties through expert craftsmanship, innovative solutions, and exceptional customer service. We are committed to delivering quality results that exceed expectations and stand the test of time.
          </p>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title centered">Why Choose JCKAY GROUP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Experienced Professionals</h3>
              <p className="text-gray-600">
                Our team brings years of experience and specialized expertise to every project we undertake, ensuring quality results.
              </p>
            </div>
            
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We take pride in our attention to detail and commitment to delivering the highest quality workmanship on every project.
              </p>
            </div>
            
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We work closely with you to ensure your vision becomes reality.
              </p>
            </div>
            
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Services</h3>
              <p className="text-gray-600">
                From remodeling and construction to maintenance and repairs, we offer a wide range of solutions for all your property needs.
              </p>
            </div>
            
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Timely Completion</h3>
              <p className="text-gray-600">
                We value your time and are committed to completing projects efficiently without compromising on quality.
              </p>
            </div>
            
            <div className="p-6 glass-card">
              <div className="w-16 h-16 rounded-full bg-brand-lightBlue flex items-center justify-center text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer fair, transparent pricing for all our services, delivering excellent value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project needs and discover how JCKAY GROUP can help bring your vision to life.
          </p>
          <Link to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 shadow-md hover:shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
