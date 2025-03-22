
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { 
  Building, 
  PaintRoller, 
  Wrench, 
  ShowerHead,
  Lightbulb,
  Boxes,
  Paintbrush,
  Hammer,
  Scissors,
  TreePine
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Building size={28} />,
      title: "Construction & Remodeling",
      description: "Expert remodeling and construction for residential and commercial spaces, delivering quality results on time and on budget."
    },
    {
      icon: <PaintRoller size={28} />,
      title: "Interior & Exterior Painting",
      description: "Professional painting services to transform your spaces with premium materials and meticulous attention to detail."
    },
    {
      icon: <Wrench size={28} />,
      title: "Maintenance & Repairs",
      description: "Comprehensive maintenance and repair services to keep your property in optimal condition year-round."
    },
    {
      icon: <Boxes size={28} />,
      title: "Pergola Installation",
      description: "Custom design and installation of beautiful, durable pergolas to enhance your outdoor living spaces."
    },
    {
      icon: <Hammer size={28} />,
      title: "Fencing Solutions",
      description: "Expert fabrication and installation of wood and metal fencing for security, privacy, and aesthetic appeal."
    },
    {
      icon: <ShowerHead size={28} />,
      title: "Plumbing Services",
      description: "Professional plumbing installation, maintenance, and repairs to ensure your property's plumbing systems function flawlessly."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Electrical Services",
      description: "Installation and maintenance of electrical and electronic systems for homes and offices, ensuring safety and efficiency."
    },
    {
      icon: <Paintbrush size={28} />,
      title: "Drywall Installation & Repair",
      description: "Expert drywall installation and repair for ceilings and walls, delivering smooth, flawless surfaces."
    },
    {
      icon: <TreePine size={28} />,
      title: "Landscaping & Lawn Care",
      description: "Comprehensive landscaping services including placing and cutting grass to enhance your property's curb appeal."
    },
    {
      icon: <Scissors size={28} />,
      title: "Sidewalk & Window Cleaning",
      description: "Thorough cleaning services for sidewalks, driveways, and windows to maintain your property's appearance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative py-20 bg-brand-blue">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Professional Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            JCKAY GROUP delivers a comprehensive range of property solutions with 
            expertise, quality craftsmanship, and exceptional customer service.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
          </p>
          <a href="/contact" className="btn-primary">
            Get Free Quote
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
