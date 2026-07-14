import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Robot, Calculator, Star, Github, Info, FolderOpen } from 'lucide-react';

export default function ProjectCaseStudy() {
  return (
    <section className="py-20 md:py-32 scroll-mt-20 border-t border-white/5 relative" id="projects">
      <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] bg-brand-red opacity-[0.015] blur-[150px] pointer-events-none"></div>
      
      <div className="flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">04 // Creations</span>
            <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Case Study</h2>
          </div>
          <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ SELECTED CREATIONS ]</p>
        </div>
        
        {/* Main Project Card */}
        <div className="bg-brand-card border border-brand-cardBorder rounded-3xl overflow-hidden relative group hover:border-brand-red/20 transition-all duration-500 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Columns (Left 7) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[350px] overflow-hidden bg-[#0c1825]">
              <div className="absolute inset-0 bg-brand-red/5 z-10 opacity-30 mix-blend-color"></div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-brand-dark/20 to-brand-dark z-10"></div>
              
              {/* Screenshot mockup */}
              <img 
                src="/assets/images/privelgo_dashboard.png" 
                alt="Privelgo App Dashboard" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 origin-center"
              />
              
              {/* Tech Tags */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-white rounded font-mono uppercase">Flutter</span>
                <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-white rounded font-mono uppercase">Node.js</span>
                <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-white rounded font-mono uppercase">PostgreSQL</span>
                <span className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-white rounded font-mono uppercase">GPS Integration</span>
              </div>
            </div>
            
            {/* Context Columns (Right 5) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between gap-8 bg-brand-card">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">Featured Project</span>
                </div>
                
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Privelgo</h3>
                <h4 className="text-sm font-semibold text-brand-textMuted uppercase tracking-wider mb-2">Private Bus Tracking App</h4>
                
                <p className="text-sm text-brand-textMuted font-light leading-relaxed">
                  A modern, intelligent private bus tracking platform. Designed to bridge the gaps in traditional public transportation grids, featuring real-time GPS fleet tracking, AI-powered travel assistants, smart fare estimators, passenger reviews, and optimized route dispatch controls.
                </p>
                
                {/* Features list */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <MapPin size={10} />
                    </span>
                    <span className="text-xs text-white font-medium">Live GPS Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <Robot size={10} />
                    </span>
                    <span className="text-xs text-white font-medium">AI Assistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <Calculator size={10} />
                    </span>
                    <span className="text-xs text-white font-medium">Fare Calculator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <Star size={10} />
                    </span>
                    <span className="text-xs text-white font-medium">Passenger Reviews</span>
                  </div>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                <a 
                  href="https://github.com/abelsam-2007/Privelgo---Private-Bus-Tracking-app/tree/main" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 h-12 bg-white text-brand-dark hover:bg-brand-red hover:text-white font-semibold rounded text-xs uppercase tracking-wider transition-all duration-300 flex-1 sm:flex-initial"
                >
                  <Github className="mr-2 w-4 h-4" />
                  GitHub Repository
                </a>
                
                <a 
                  href="https://github.com/abelsam-2007/Privelgo---Private-Bus-Tracking-app/tree/main" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-12 h-12 border border-white/10 hover:border-brand-red hover:text-brand-red transition-all duration-300 rounded" 
                  title="View Case Study"
                >
                  <Info className="w-4 h-4" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Coming Soon card */}
        <div className="bg-brand-card/50 border border-brand-cardBorder border-dashed rounded-3xl p-12 text-center relative overflow-hidden group hover:border-brand-red/35 transition-colors duration-500 py-16">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/[0.01] to-transparent pointer-events-none"></div>
          <div className="w-16 h-16 rounded-full bg-brand-red/5 border border-brand-red/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <FolderOpen className="text-brand-red animate-pulse" size={24} />
          </div>
          <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 uppercase">More Projects Coming Soon</h3>
          <p className="text-brand-textMuted text-xs max-w-sm mx-auto font-light leading-relaxed">
            I am currently designing and building several backend microservices and deep learning analytical pipelines. Stay tuned.
          </p>
          <div className="mt-6 flex justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-red/30 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-brand-red/60"></span>
            <span class="w-2 h-2 rounded-full bg-brand-red"></span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
