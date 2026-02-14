import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import { PROJECTS, imgPath } from '../data/projectsData';

const Projects = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('projects.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('projects.heroSubtitle')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="block mb-8 group"
              >
                <ProjectCard
                  image={imgPath(project.gallery[0])}
                  title={t(project.titleKey)}
                  category={t(project.categoryKey)}
                  index={index}
                  description={t(project.descKey)}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('projects.ctaTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t('projects.ctaSubtitle')}</p>
          <a href={`https://wa.me/13059246257?text=${encodeURIComponent(t('nav.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="btn-primary">{t('index.ctaQuote')}</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
