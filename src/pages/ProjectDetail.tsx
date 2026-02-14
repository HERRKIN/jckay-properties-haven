import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { getProjectById, imgPath } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxIndex(null);
      };
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">{t('notFound.title')}</p>
            <Link to="/projects" className="btn-primary inline-block">
              {t('projects.backToProjects')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const coverImage = project.gallery[0];
  const gallery = project.gallery;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header con portada */}
      <section className="relative pt-24 pb-12 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={imgPath(coverImage)}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t('projects.backToProjects')}</span>
          </Link>
          <p className="text-brand-lightBlue font-medium mb-1">
            {t(project.categoryKey)}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t(project.titleKey)}
          </h1>
        </div>
      </section>

      {/* Descripción y galería */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-600 mb-12">
            {t(project.descKey)}
          </p>
          <h2 className="text-2xl font-bold mb-6">{t('projects.galleryTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((filename, index) => (
              <button
                key={filename}
                type="button"
                className="block rounded-lg overflow-hidden shadow-md aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={imgPath(filename)}
                  alt={`${t(project.titleKey)} - ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-label="Galería"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={imgPath(gallery[lightboxIndex])}
            alt={`${t(project.titleKey)} - ${lightboxIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
                }}
                aria-label="Anterior"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors rotate-180"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % gallery.length);
                }}
                aria-label="Siguiente"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
