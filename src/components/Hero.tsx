import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

// 👇 To use your own photo, import it like this (if using a bundler like Vite/CRA):
// import profilePhoto from './assets/your-photo.jpg';
// Then replace the `src` below with {profilePhoto}
// OR just paste in a URL string like: src="https://your-image-url.com/photo.jpg"

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            {/* 
              PROFILE IMAGE:
              Replace the src below with your image path or URL.
              e.g. src="/images/profile.jpg"  or  src={profilePhoto}
            */}
            <img
              src="src/assets/Deergh.jpg"
              alt="Deergh Kataria"
              className="w-52 h-52 mx-auto mb-8 rounded-full object-cover shadow-2xl border-4 border-blue-500"
              onError={(e) => {
                // Fallback to DK initials if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback DK circle — hidden once a real image loads */}
            <div
              style={{ display: 'none' }}
              className="w-52 h-52 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full items-center justify-center text-3xl font-bold text-white shadow-2xl"
            >
              DK
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hello World! I'm
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Deergh Kataria
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Software Engineer @ Microsoft Azure
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            RPA & Automation Developer turned Software Engineer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/DeerghKataria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/deergh-kataria-544564236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:deerghkatariabusiness@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
