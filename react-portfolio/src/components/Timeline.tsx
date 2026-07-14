import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';

export default function Timeline() {
  return (
    <section className="py-20 md:py-32 scroll-mt-20 border-t border-white/5 relative" id="experience">
      <div className="absolute -left-40 top-1/2 w-[500px] h-[500px] bg-brand-red opacity-[0.015] blur-[150px] pointer-events-none"></div>
      
      <div className="flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">02 // Experience</span>
            <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Work History</h2>
          </div>
          <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ TIMELINE OF IMPACT ]</p>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-32 before:absolute before:left-[11px] md:before:left-[31px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-cardBorder">
          
          {/* Timeline Item 1 */}
          <div className="relative mb-16 last:mb-0">
            {/* Timeline Node */}
            <div className="absolute -left-[20px] md:-left-[106px] top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-red flex items-center justify-center z-10 shadow-[0_0_10px_rgba(229,9,20,0.5)]">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
            </div>
            
            {/* Desktop Date Badge */}
            <div className="hidden md:block absolute -left-[240px] top-1.5 w-[110px] text-right font-mono text-sm tracking-widest text-brand-textMuted uppercase">
              Current
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-300"
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Left Column: Job Info */}
              <div className="lg:col-span-5 relative z-10 flex flex-col gap-2">
                <span className="md:hidden font-mono text-xs tracking-widest text-brand-red uppercase">Current</span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">Backend AI Engineer Intern</h3>
                <h4 class="text-brand-red font-semibold text-sm">FlyRank AI</h4>
                <p className="text-xs text-brand-textMuted mt-2 flex items-center gap-1.5">
                  <MapPin size={12} /> Remote / Hybrid
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] font-semibold text-white rounded font-mono">Node.js</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] font-semibold text-white rounded font-mono">Express</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] font-semibold text-white rounded font-mono">PostgreSQL</span>
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] font-semibold text-white rounded font-mono">REST APIs</span>
                </div>
              </div>
              
              {/* Right Column: Roles and Detail */}
              <div className="lg:col-span-7 relative z-10 flex flex-col gap-4 text-brand-textMuted text-sm font-light">
                <p className="text-white font-medium">Core Responsibilities & Technical Work:</p>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3">
                    <span className="text-brand-red mt-1"><ChevronRight size={14} /></span>
                    <p><strong className="text-white font-semibold">AI-Powered Systems:</strong> Architecting and implementing cognitive intelligence backend microservices to extract structure from unorganized data.</p>
                  </li>
                  <li className="flex gap-3">
                    <span class="text-brand-red mt-1"><ChevronRight size={14} /></span>
                    <p><strong className="text-white font-semibold">API Development:</strong> Designing and deploying robust REST API schemas, optimized for security, performance, and cross-platform mobile bindings.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-red mt-1"><ChevronRight size={14} /></span>
                    <p><strong className="text-white font-semibold">Database Optimization:</strong> Tuning relational query maps and transactional indices inside PostgreSQL to lower latencies on concurrent datasets.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-red mt-1"><ChevronRight size={14} /></span>
                    <p><strong className="text-white font-semibold">Intelligent Automation:</strong> Developing automated server pipelines, task hooks, and batch schedules to handle heavy server calculations offline.</p>
                  </li>
                </ul>
              </div>
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
