import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Deergh</span>Kataria
            </h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Software Engineer @ Microsoft Azure · RPA & Automation · MSc UCD Dublin
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Deergh Kataria. Made with 
              <Heart size={16} className="text-red-500" /> 
              in Dublin, Ireland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
