
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  iconBgColor = 'bg-brand-lightBlue',
  delay = 0
}) => {
  return (
    <div 
      className="service-card animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center text-white mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
