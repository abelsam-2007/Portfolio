import React from 'react';
import { Brain, Server, Users, Mic, Cubes, GraduationCap, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const qualities = [
  {
    icon: <Brain className="w-5 h-5 text-brand-red" />,
    title: "AI Development",
    desc: "Designing machine learning models, deploying computer vision APIs, and orchestrating LLM prompt architectures."
  },
  {
    icon: <Server className="w-5 h-5 text-brand-red" />,
    title: "Backend Engineering",
    desc: "Architecting robust Express.js / Node APIs, managing PostgreSQL / MongoDB, and optimizing microservices."
  },
  {
    icon: <Users className="w-5 h-5 text-brand-red" />,
    title: "Leadership & Strategy",
    desc: "Guiding hackathon cohorts, coordinating software sprints, and mapping technical scopes for business targets."
  },
  {
    icon: <Mic className="w-5 h-5 text-brand-red" />,
    title: "Professional Oratory",
    desc: "Presenting product concepts with conviction, pitching engineering plans, and managing tech lectures."
  },
  {
    icon: <Cubes className="w-5 h-5 text-brand-red" />,
    title: "Problem Solving",
    desc: "Solving complex mathematical structures, parsing system performance blocks, and writing clean data flows."
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-brand-red" />,
    title: "Continuous Learning",
    desc: "Consistently studying state-of-the-art ML papers, database design methodologies, and cloud architectures."
  }
];

export default function About() {
  return (
    <section className="py-20 md:py-32 relative scroll-mt-20" id="about">
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-brand-red opacity-[0.015] blur-[150px] pointer-events-none"></div>
      
      <div className="flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">01 // Discover</span>
            <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">About Me</h2>
          </div>
          <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ AI & DATA SCIENCE STUDENT ]</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Qualities Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-brand-card border border-brand-cardBorder hover:border-brand-red/20 p-6 rounded-xl relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red opacity-[0.02] group-hover:opacity-[0.06] rounded-bl-full transition-opacity duration-300"></div>
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-brand-textMuted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Editorial Content Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-6 text-brand-textMuted font-light leading-relaxed text-base md:text-lg"
          >
            <p>
              💻 I am an <strong className="text-white font-semibold">Artificial Intelligence & Data Science Undergraduate</strong> student at Amal Jyothi College of Engineering. With an insatiable appetite for building intelligent software architectures, I explore the intersections of machine learning, system engineering, and elegant front-end design.
            </p>
            <p>
              Currently, I work as a <strong className="text-white font-semibold">Backend AI Engineer Intern</strong> at <strong className="text-brand-red font-semibold">FlyRank AI</strong>. In this capacity, I develop scalable, secure APIs and engineer intelligent automation features, integrating core cognitive pipelines directly into high-traffic business application hubs.
            </p>
            <p>
              I thrive on engineering solutions for real-world pain points—whether that involves designing a live transportation tracking application or analyzing huge telemetry streams to extract predictive insights.
            </p>
            <p>
              Beyond technical tasks, I am deeply committed to strategic leadership, persuasive presentations, and mentoring teams. I believe that technology should always solve meaningful problems while offering exceptional, delightful user experiences.
            </p>
            
            <div className="mt-4 p-6 bg-brand-card border border-brand-cardBorder rounded-xl flex items-center gap-4 group hover:border-brand-red/20 transition-all duration-300">
              <Quote className="w-8 h-8 text-brand-red opacity-40 self-start mt-1 flex-shrink-0" />
              <div>
                <p className="text-white italic text-sm font-light">"Good engineering isn't just about writing code; it's about translating complex mathematical models into business-critical reality with absolute security and reliability."</p>
                <p className="text-xs text-brand-red font-mono uppercase mt-2 tracking-widest">— Abel Sam Philip</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
