import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const roles = [
  "AI Engineer",
  "Backend Developer",
  "Data Science Student",
  "Creative Problem Solver",
  "Innovation Builder",
  "Professional Presenter"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-24 relative overflow-hidden" id="hero">
      
      {/* Background Graphic Watermarks */}
      <div className="absolute inset-0 -z-10 flex flex-col justify-center pointer-events-none select-none opacity-[0.02] md:opacity-[0.03]">
        <div className="font-display font-extrabold text-[12vw] leading-none text-white tracking-tighter uppercase">PORTFOLIO</div>
        <div className="font-display font-extrabold text-[12vw] leading-none text-white tracking-tighter uppercase self-end">CREATIVE</div>
        <div className="font-display font-extrabold text-[12vw] leading-none text-transparent stroke-text tracking-tighter uppercase">AI ENGINEER</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Identity Info */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping"></span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-textMuted">Available for Internships & Projects</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col text-left"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-brand-red mb-2 block">Hello, I'm</span>
            <span className="font-display font-extrabold text-5xl md:text-8xl tracking-tight text-white leading-[0.9] uppercase">
              Abel
            </span>
            <span className="font-display font-extrabold text-4xl md:text-7xl tracking-tight text-transparent stroke-text leading-[0.9] uppercase mt-1">
              Sam Philip
            </span>
          </motion.h1>
          
          {/* Animated subtitle carousel */}
          <div className="h-10 overflow-hidden flex items-center mt-2">
            <span className="text-lg md:text-2xl font-mono font-semibold text-brand-red flex items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="border-r-2 border-brand-red pr-1 min-h-[30px]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-textMuted text-base md:text-lg max-w-xl font-light leading-relaxed border-l border-brand-red/30 pl-4 mt-2"
          >
            "Building intelligent software, solving real-world problems with AI, and designing technology that creates meaningful impact."
          </motion.p>
          
          {/* CTA Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <a href="#projects" className="inline-flex items-center justify-center px-8 h-14 bg-brand-red hover:bg-brand-red-hover text-white font-semibold rounded text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6)]">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            
            <a href="#contact" className="inline-flex items-center justify-center px-8 h-14 bg-transparent border border-white/20 hover:border-brand-red hover:bg-brand-red/5 text-white font-semibold rounded text-sm uppercase tracking-wider transition-all duration-300">
              Contact Me
            </a>
            
            <a href="https://github.com/abelsam-2007" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 bg-brand-card/80 border border-brand-cardBorder rounded hover:border-brand-red hover:text-brand-red transition-all duration-300" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-14 h-14 bg-brand-card/80 border border-brand-cardBorder rounded hover:border-brand-red hover:text-brand-red transition-all duration-300" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        
        {/* Right Side: Glow Graphic Image Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-72 h-96 md:w-80 md:h-[450px] group"
          >
            {/* Ambient glows behind frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-red/30 to-transparent rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
            
            {/* Outline design grids */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 group-hover:border-brand-red/30 transition-colors duration-500"></div>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-red z-20"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-red z-20"></div>
            
            {/* Floating Tag */}
            <div className="absolute -right-8 top-16 bg-brand-card/90 border border-brand-cardBorder backdrop-blur-xl px-4 py-3 rounded-lg z-30 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="text-left">
                  <p class="text-[9px] text-brand-textMuted uppercase tracking-widest font-semibold">Active Internship</p>
                  <p class="text-xs font-bold text-white">FlyRank AI Intern</p>
                </div>
              </div>
            </div>
            
            {/* Profile cutout image wrapper */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-brand-card border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10 opacity-60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay z-10 opacity-30"></div>
              
              <img 
                src="/assets/images/portrait.jpg" 
                alt="Abel Sam Philip Portrait" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -left-12 bottom-6 z-30 rotate-180 select-none font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 [writing-mode:vertical-lr]">
              AI & DATA SCIENCE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
