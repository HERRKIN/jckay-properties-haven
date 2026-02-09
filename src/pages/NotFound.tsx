import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-lg mx-auto glass-card p-10">
            <h1 className="text-8xl font-bold text-brand-blue mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-8">{t('notFound.title')}</p>
            <p className="text-gray-500 mb-8">{t('notFound.description')}</p>
            <Link to="/" className="btn-primary inline-block">{t('notFound.backHome')}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
