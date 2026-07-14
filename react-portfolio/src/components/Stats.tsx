import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = target;
    const duration = target > 500 ? 2000 : 1500; // ms
    const incrementTime = 16; // ~60fps
    const totalSteps = duration / incrementTime;
    const stepIncrement = (end - start) / totalSteps;
    
    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-12 border-t border-b border-white/5 relative overflow-hidden" id="stats">
      {/* Ambient glow light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-brand-red/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
        
        {/* Card 1 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">Experience</p>
          <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-1 text-white">Intern</div>
          <p className="text-[10px] text-brand-textMuted leading-tight">Backend AI Engineer<br/>@ FlyRank AI</p>
        </div>

        {/* Card 2 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">Awards</p>
          <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-1 text-white">
            <Counter target={2} suffix="X" />
          </div>
          <p className="text-[10px] text-brand-textMuted leading-tight">Director's Honours<br/>Academic Awards</p>
        </div>

        {/* Card 3 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">National</p>
          <div className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-1 text-white uppercase py-1 leading-none">SIH 2025</div>
          <p class="text-[10px] text-brand-textMuted leading-tight">Smart India Hackathon<br/>Shortlisted Candidate</p>
        </div>

        {/* Card 4 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">Builds</p>
          <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-1 text-white">
            <Counter target={10} suffix="+" />
          </div>
          <p className="text-[10px] text-brand-textMuted leading-tight">Software Projects<br/>Developed</p>
        </div>

        {/* Card 5 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">Tech</p>
          <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-1 text-white">
            <Counter target={20} suffix="+" />
          </div>
          <p className="text-[10px] text-brand-textMuted leading-tight">Languages, Frameworks<br/>& Cloud Tools</p>
        </div>

        {/* Card 6 */}
        <div className="bg-brand-card/30 border border-brand-cardBorder/40 hover:border-brand-red/30 backdrop-blur-md px-6 py-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 group">
          <p className="text-xs text-brand-textMuted font-mono uppercase tracking-widest mb-2 group-hover:text-brand-red transition-colors">Algorithms</p>
          <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-1 text-white">
            <Counter target={1000} suffix="+" />
          </div>
          <p className="text-[10px] text-brand-textMuted leading-tight">Coding Challenges<br/>Solved</p>
        </div>

      </div>
    </section>
  );
}
