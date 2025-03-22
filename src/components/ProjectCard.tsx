
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md relative h-64 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        opacity: 1 // Set initial opacity to 1 to prevent the card from being invisible
      }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
        <p className="text-brand-lightBlue font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
