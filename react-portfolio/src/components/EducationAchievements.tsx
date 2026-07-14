import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Compass, Quote } from 'lucide-react';

const certs = [
  { title: "Google AI", desc: "Introduction to Generative AI & LLM Systems" },
  { title: "Machine Learning", desc: "Supervised & Unsupervised Algorithms Model Mapping" },
  { title: "Python Development", desc: "Advanced Data Structures, Scripting, NumPy & Pandas" },
  { title: "Backend Engineering", desc: "REST APIs, Express Systems, and Database Schemas" },
  { title: "Cloud Computing", desc: "Cloud Deployments, Firebase, and Object Databases" },
  { title: "Prompt Engineering", desc: "Cognitive Chains & API Orchestrations" }
];

const achievements = [
  { title: "Director's Honours Award", desc: "awarded for exemplary academic performance and score excellence during Semester 1." },
  { title: "Director's Honours Award", desc: "awarded for secondary consecutive semester score excellence during Semester 2." },
  { title: "Smart India Hackathon", desc: "shortlisted candidate for the national SIH 2025 event, recognized for creative software solutions." },
  { title: "Backend AI Intern", desc: "hired as a backend engineering and cognitive pipeline intern at startup FlyRank AI." }
];

const steps = [
  { num: "01", name: "Research", desc: "Deeply investigating problem architectures and assessing existing user friction grids." },
  { num: "02", name: "Think", desc: "Formulating structural specifications and designing clean database map schedules." },
  { num: "03", name: "Design", desc: "Drafting user-centric API channels and optimizing interactive mock layout views." },
  { num: "04", name: "Develop", desc: "Engineering scalable endpoints and coding cognitive routines with clean structures." },
  { num: "05", name: "Optimize", desc: "Debugging query bottlenecks, reducing code weight, and styling responsive views." },
  { num: "06", name: "Launch", desc: "Deploying systems, gathering analytical review charts, and ensuring real value delivery." }
];

export default function EducationAchievements() {
  return (
    <div className="flex flex-col gap-24">
      
      {/* Education & Certs */}
      <section className="py-12 scroll-mt-20 border-t border-white/5 relative" id="education-certifications">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div className="flex flex-col gap-10">
            <div className="border-b border-white/5 pb-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-red">05 // Foundation</span>
              <h2 className="font-display font-extrabold text-3xl tracking-tight text-white uppercase mt-2">Education</h2>
            </div>
            
            <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-300 flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 text-brand-red text-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-brand-red font-bold uppercase tracking-widest">2024 - 2028</span>
                <h3 className="font-display font-bold text-lg text-white">Bachelor of Technology</h3>
                <h4 className="text-sm font-semibold text-white/90">Artificial Intelligence & Data Science</h4>
                <p className="text-xs text-brand-textMuted font-light mt-1">Amal Jyothi College of Engineering</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-red/10 border border-brand-red/20 text-[9px] font-bold text-brand-red uppercase rounded mt-3 w-fit">
                  Current Semester 3 Student
                </div>
              </div>
            </div>
          </div>
          
          {/* Certs */}
          <div className="flex flex-col gap-10">
            <div className="border-b border-white/5 pb-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-red">06 // Credentials</span>
              <h2 className="font-display font-extrabold text-3xl tracking-tight text-white uppercase mt-2">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {certs.map((cert, idx) => (
                <div key={idx} className="bg-brand-card border border-brand-cardBorder p-5 rounded-xl hover:border-brand-red/25 transition-all duration-300 group">
                  <Award className="text-brand-red mb-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-[10px] text-brand-textMuted">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 scroll-mt-20 border-t border-white/5 relative" id="achievements">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
            <div>
              <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">07 // Excellence</span>
              <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Achievements</h2>
            </div>
            <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ DECORATED MILESTONES ]</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-brand-card border border-brand-cardBorder p-6 rounded-2xl relative overflow-hidden group hover:border-brand-red/35 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red text-lg group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-brand-red tracking-wider uppercase font-bold">Award / Milestone</span>
                  <h3 className="font-display font-bold text-base text-white mt-1">{ach.title}</h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed mt-2">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="py-12 scroll-mt-20 border-t border-white/5 relative" id="philosophy">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
            <div>
              <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">08 // Execution</span>
              <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Work Philosophy</h2>
            </div>
            <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ HOW I THINK ]</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl flex flex-col justify-between h-64 hover:border-brand-red/30 transition-all duration-300 group">
                <span className="font-display font-extrabold text-5xl text-white/5 group-hover:text-brand-red/20 transition-colors leading-none font-mono">{step.num}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{step.name}</h3>
                  <p className="text-xs text-brand-textMuted leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 scroll-mt-20 border-t border-white/5 relative" id="testimonials">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
            <div>
              <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">09 // Endorsements</span>
              <h2 class="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Testimonials</h2>
            </div>
            <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ WHAT CLIENTS SAY ]</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-300 flex flex-col justify-between gap-6">
              <Quote className="w-8 h-8 text-white/5 absolute right-6 top-6 pointer-events-none group-hover:text-brand-red/10 transition-colors" />
              <p className="text-white font-light text-sm italic leading-relaxed relative z-10">
                "Abel joined FlyRank AI as a backend intern and immediately demonstrated outstanding technical maturity. He took complete ownership of our database optimizations, drastically reducing REST endpoint response times. His ability to synthesize complex mathematical frameworks into production-ready API pipelines is impressive."
              </p>
              <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center font-display font-bold text-xs text-brand-red">
                  FR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Dispatcher</h4>
                  <p className="text-[10px] text-brand-textMuted uppercase font-mono tracking-wider">FlyRank AI Team Leader</p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-300 flex flex-col justify-between gap-6">
              <Quote className="w-8 h-8 text-white/5 absolute right-6 top-6 pointer-events-none group-hover:text-brand-red/10 transition-colors" />
              <p className="text-white font-light text-sm italic leading-relaxed relative z-10">
                "Working with Abel during our hackathon sprints has been a stellar experience. He handles both strategic system designs and immediate debugging demands under intense pressure without losing focus. He is not just an exceptionally talented programmer but a highly compelling public orator and team guide."
              </p>
              <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center font-display font-bold text-xs text-brand-red">
                  SI
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Hackathon Partner</h4>
                  <p className="text-[10px] text-brand-textMuted uppercase font-mono tracking-wider">Smart India Hackathon Cohort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
