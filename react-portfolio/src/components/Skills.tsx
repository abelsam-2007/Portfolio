import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Brain, Cpu, Compass, CheckCircle2 } from 'lucide-react';

const programmingSkills = [
  { name: "Python", val: "90%" },
  { name: "Java", val: "80%" },
  { name: "JavaScript / TypeScript", val: "85%" },
  { name: "C / C++", val: "75%" },
  { name: "Flutter", val: "80%" }
];

const backendSkills = [
  { name: "Node.js / Express", val: "85%" },
  { name: "REST API Design & Security", val: "90%" },
  { name: "Relational DBs (PostgreSQL / MySQL)", val: "85%" },
  { name: "NoSQL Databases (MongoDB)", val: "80%" },
  { name: "Authentication (JWT, OAuth)", val: "85%" }
];

const aiSkills = [
  { name: "Machine Learning (Scikit-Learn)", val: "85%" },
  { name: "Deep Learning (TensorFlow / PyTorch)", val: "75%" },
  { name: "Data Analytics & Visualization", val: "80%" },
  { name: "Computer Vision & NLP", val: "75%" },
  { name: "Prompt Engineering & LLM APIs", val: "90%" }
];

const tools = [
  "Git", "GitHub", "Figma", "VS Code", "Postman", "Firebase", "Google Cloud", "Data Analytics"
];

const softSkills = [
  "Strategic Leadership",
  "Professional Oratory",
  "Visual Presentation",
  "Creative Problem Solving",
  "Team Management",
  "Technical Presentation"
];

export default function Skills() {
  return (
    <section className="py-20 md:py-32 scroll-mt-20 border-t border-white/5 relative" id="skills">
      <div className="absolute -right-40 top-1/2 w-[500px] h-[500px] bg-brand-red opacity-[0.015] blur-[150px] pointer-events-none"></div>
      
      <div className="flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-red">03 // Capabilities</span>
            <h2 className="font-display font-extrabold text-3xl md:text-6xl tracking-tight text-white uppercase mt-2">Technical Skills</h2>
          </div>
          <p className="text-brand-textMuted text-sm font-mono mt-4 md:mt-0 uppercase tracking-widest">[ SKILLS MATRIX ]</p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Programming */}
          <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/25 transition-all duration-300">
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <Code className="text-brand-red" size={20} />
              Programming
            </h3>
            
            <div className="flex flex-col gap-4">
              {programmingSkills.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>{item.name}</span>
                    <span className="text-brand-red font-mono">{item.val}</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-brand-red"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Card 2: Backend */}
          <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/25 transition-all duration-300">
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <Layers className="text-brand-red" size={20} />
              Backend Engineering
            </h3>
            
            <div className="flex flex-col gap-4">
              {backendSkills.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>{item.name}</span>
                    <span className="text-brand-red font-mono">{item.val}</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-brand-red"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Card 3: AI & Data Science */}
          <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/25 transition-all duration-300">
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <Brain className="text-brand-red" size={20} />
              AI & Data Science
            </h3>
            
            <div className="flex flex-col gap-4">
              {aiSkills.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>{item.name}</span>
                    <span className="text-brand-red font-mono">{item.val}</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-brand-red"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Card 4: Tools & Devops */}
          <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/25 transition-all duration-300">
            <h3 class="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <Cpu className="text-brand-red" size={20} />
              Tools & Cloud
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-2 bg-white/5 border border-white/5 hover:border-brand-red/20 text-xs font-semibold text-white rounded-lg transition-colors font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {/* Card 5: Soft Skills */}
          <div className="bg-brand-card border border-brand-cardBorder p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/25 md:col-span-2 lg:col-span-2 transition-all duration-300">
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <Compass className="text-brand-red" size={20} />
              Professional Competencies (Soft Skills)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-brand-red/10 transition-colors text-center flex flex-col items-center justify-center">
                  <CheckCircle2 className="text-brand-red mb-2" size={18} />
                  <span className="text-xs font-medium text-white block">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
