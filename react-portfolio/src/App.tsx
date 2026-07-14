import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Top scroll indicator percentage calculation
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrollPercentage);

      // Header background blur threshold
      setIsHeaderScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseGlowRef.current) {
        // Smoothly position mouse glow container in React
        const glow = mouseGlowRef.current;
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        glow.style.opacity = '0.05';
      }
    };

    const handleMouseLeave = () => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      
      {/* Background Graphic Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Moving ambient light blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-red opacity-[0.025] blur-[120px] -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-red opacity-[0.02] blur-[150px] top-1/2 -right-40 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-red opacity-[0.015] blur-[100px] bottom-10 left-1/3 animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80"></div>
        
        {/* Film Noise layer */}
        <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none"></div>
        
        {/* Interactive Mouse follow Glow spot */}
        <div 
          ref={mouseGlowRef} 
          className="absolute w-[350px] h-[350px] rounded-full bg-brand-red opacity-0 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500" 
          style={{ left: '0px', top: '0px' }}
        ></div>
      </div>

      {/* Top Scroll Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-brand-red z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Main Header / Navigation */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${isHeaderScrolled ? 'py-4 bg-brand-dark/80 backdrop-blur-xl border-brand-red/10 shadow-lg' : 'py-6 bg-brand-dark/0'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-extrabold text-xl tracking-tight text-white hover:opacity-80 transition-opacity flex items-center gap-1.5">
            ABEL SAM PHILIP<span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-textMuted">
            <a href="#about" className="hover:text-white transition-colors relative group py-1">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="hover:text-white transition-colors relative group py-1">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="hover:text-white transition-colors relative group py-1">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-white transition-colors relative group py-1">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#achievements" className="hover:text-white transition-colors relative group py-1">
              Achievements
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* CTA Link and Toggle */}
          <div class="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-5 h-10 text-xs font-semibold uppercase tracking-wider text-white border border-white/10 hover:border-brand-red hover:bg-brand-red/10 transition-all rounded duration-300">
              Let's Connect
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-white hover:text-brand-red transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 flex flex-col gap-6 text-lg font-medium text-brand-textMuted transition-all">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">About Me</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">Experience</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">Featured Projects</a>
            <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">Achievements</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center h-12 text-sm font-semibold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover transition-colors rounded">
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* Main Structural Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Skills />
        <ProjectCaseStudy />
        <EducationAchievements />
        <Contact />
      </main>

      {/* Premium minimal luxury footer */}
      <footer className="border-t border-white/5 bg-brand-darker py-16 mt-20 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center pointer-events-none select-none my-8 opacity-[0.03]">
            <h2 className="font-display font-extrabold text-[8vw] leading-none text-white tracking-tighter uppercase">ABEL SAM PHILIP</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 text-xs text-brand-textMuted">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <p className="font-bold text-white text-sm">ABEL SAM PHILIP</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-brand-red">AI • DATA SCIENCE • BACKEND</p>
            </div>
            
            <p className="text-center">&copy; 2026 Abel Sam Philip. All Rights Reserved. Engineered with precision.</p>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Back to Top</a>
              <a href="https://github.com/abelsam-2007/Privelgo---Private-Bus-Tracking-app/tree/main" className="hover:text-white transition-colors">Featured App</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
