import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 md:py-32 scroll-mt-20 border-t border-white/5 relative" id="contact">
      
      {/* Glow Backlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-red">10 // Partnership</span>
        <h2 className="font-display font-extrabold text-4xl md:text-7xl leading-none text-white tracking-tight uppercase">
          Let's Build Something<br />
          <span className="text-transparent stroke-text">Amazing Together.</span>
        </h2>
        
        <p className="text-brand-textMuted text-sm md:text-base max-w-xl font-light leading-relaxed">
          I'm always open to internships, research opportunities, collaborations, AI projects, hackathons, open-source contributions, and innovative software development requests.
        </p>
        
        {/* Large Glowing Email Trigger */}
        <a 
          href="mailto:abelsamphilip@gmail.com" 
          className="inline-flex items-center justify-center px-10 h-16 bg-brand-red hover:bg-brand-red-hover text-white font-semibold rounded text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:shadow-[0_0_50px_rgba(229,9,20,0.7)] hover:scale-[1.02] mt-4"
        >
          Let's Connect
          <Send className="ml-2 w-4 h-4" />
        </a>
        
        {/* Grid cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-16 text-left">
          
          {/* Card: Email */}
          <a 
            href="mailto:abelsamphilip@gmail.com" 
            className="bg-brand-card/60 backdrop-blur-md border border-brand-cardBorder hover:border-brand-red/30 p-5 rounded-xl flex flex-col gap-3 group transition-colors"
          >
            <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-brand-textMuted uppercase tracking-widest">Email Direct</p>
              <p className="text-xs font-bold text-white mt-0.5 truncate">abelsamphilip@gmail.com</p>
            </div>
          </a>
          
          {/* Card: GitHub */}
          <a 
            href="https://github.com/abelsam-2007" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-card/60 backdrop-blur-md border border-brand-cardBorder hover:border-brand-red/30 p-5 rounded-xl flex flex-col gap-3 group transition-colors"
          >
            <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform">
              <Github size={16} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-brand-textMuted uppercase tracking-widest">GitHub Repository</p>
              <p className="text-xs font-bold text-white mt-0.5">github.com/abelsam-2007</p>
            </div>
          </a>
          
          {/* Card: LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-card/60 backdrop-blur-md border border-brand-cardBorder hover:border-brand-red/30 p-5 rounded-xl flex flex-col gap-3 group transition-colors"
          >
            <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform">
              <Linkedin size={16} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-brand-textMuted uppercase tracking-widest">LinkedIn Connect</p>
              <p className="text-xs font-bold text-white mt-0.5">linkedin.com/in/abelsam</p>
            </div>
          </a>
          
          {/* Card: Location */}
          <div className="bg-brand-card/60 backdrop-blur-md border border-brand-cardBorder hover:border-brand-red/30 p-5 rounded-xl flex flex-col gap-3 group">
            <span className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-red">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-[9px] font-mono text-brand-textMuted uppercase tracking-widest">Location</p>
              <p className="text-xs font-bold text-white mt-0.5">Kottayam, India</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
