"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Network, BrainCircuit, Eye, Terminal, TestTube2, LineChart, Cloud, LayoutTemplate, Zap, ExternalLink } from "lucide-react";

const SKILL_DOMAINS = [
  {
    id: "ml",
    title: "Machine Learning & AI",
    icon: <BrainCircuit className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "RAG", "Agentic AI", "Data Analytics"],
    description: "Architecting predictive systems, large language models, and autonomous AI agents.",
    position: "left"
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: <Eye className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["OpenCV", "MediaPipe", "Computer Vision"],
    description: "Engineering real-time visual intelligence and tracking systems.",
    position: "right"
  },
  {
    id: "backend",
    title: "Programming & Backend",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["Python", "FastAPI", "Pydantic", "APIs", "SQL", "Git"],
    description: "Building scalable infrastructure and secure data pipelines.",
    position: "left"
  },
  {
    id: "frameworks",
    title: "AI Frameworks",
    icon: <TestTube2 className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["LangChain", "Hugging Face", "PyTorch", "Scikit-learn"],
    description: "Orchestrating model workflows and deep learning operations.",
    position: "right"
  },
  {
    id: "data",
    title: "Data Science",
    icon: <LineChart className="w-5 h-5 text-primary" />,
    color: "primary",
    nodes: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    description: "Analyzing, manipulating, and visualizing complex datasets.",
    position: "left"
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-secondary" />,
    color: "secondary",
    nodes: ["Docker", "AWS"],
    description: "Deploying distributed and containerized architectures.",
    position: "right"
  },
  
];

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 w-full relative overflow-hidden bg-midnight flex flex-col items-center">
      
      {/* Immersive Holographic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-50 blur-[100px]" />
        
        {/* Animated Particle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Header */}
      <div className="mb-24 text-center relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
        
        </motion.div>
      </div>

      {/* Interactive Neural Tree Container */}
      <div className="relative w-full max-w-6xl flex-1 flex flex-col items-center justify-center z-10 mt-10 md:mt-16 mb-10">
        
        {/* Central SVG Connecting Lines (Desktop only) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-30">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="lineGradLeft" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="rgba(245,230,211,0.8)" />
                <stop offset="100%" stopColor="rgba(245,230,211,0)" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(139,90,43,0.8)" />
                <stop offset="100%" stopColor="rgba(139,90,43,0)" />
              </linearGradient>
            </defs>
            {/* The vertical stem */}
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Central Core Node */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative z-30 mb-20 md:mb-32 group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/40 transition-all duration-700" />
          <div className="glass p-8 md:p-10 lg:p-16 rounded-full border-2 border-primary/50 flex flex-col items-center justify-center relative bg-midnight/80 backdrop-blur-xl shadow-[0_0_50px_rgba(245,230,211,0.2)] group-hover:shadow-[0_0_80px_rgba(245,230,211,0.4)] transition-all duration-500 hover:scale-105 cursor-default">
            <Network className="w-12 h-12 text-primary mb-4 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
              Skills <br/><span className="text-primary font-light"></span>
            </h3>
            
            {/* Orbital Rings */}
            <div className="absolute inset-[-20px] rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-secondary/20 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </motion.div>

        {/* Domain Branches Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 relative z-20">
          {SKILL_DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, x: domain.position === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
              onMouseEnter={() => setActiveDomain(domain.id)}
              onMouseLeave={() => setActiveDomain(null)}
              className={`relative flex ${domain.position === "left" ? "lg:justify-end" : "lg:justify-start"}`}
            >
              
              {/* Connection Line (Desktop) */}
              <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[100px] h-[2px] z-0
                ${domain.position === "left" ? "-right-[100px] bg-gradient-to-l from-primary/50 to-transparent" : "-left-[100px] bg-gradient-to-r from-secondary/50 to-transparent"}
                ${activeDomain === domain.id ? "opacity-100 shadow-[0_0_10px_currentColor] text-white" : "opacity-30"} transition-all duration-500`} 
              />

              {/* Node Card */}
              <div className={`glass w-full lg:w-[450px] p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden z-10 cursor-pointer
                ${activeDomain === domain.id 
                  ? domain.color === 'primary' ? 'border-primary/50 shadow-[0_0_30px_rgba(245,230,211,0.15)] bg-white/[0.05]' : 'border-secondary/50 shadow-[0_0_30px_rgba(139,90,43,0.15)] bg-white/[0.05]' 
                  : 'border-white/10 hover:border-white/20'}`}
              >
                {/* Background Energy Flow */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 pointer-events-none
                  ${domain.color === 'primary' ? 'from-primary/10' : 'from-secondary/10'} 
                  ${activeDomain === domain.id ? 'opacity-100' : ''} to-transparent`} 
                />

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-midnight/50 border transition-colors shadow-lg
                    ${activeDomain === domain.id 
                      ? domain.color === 'primary' ? 'border-primary/50' : 'border-secondary/50' 
                      : 'border-white/10'}`}
                  >
                    {domain.icon}
                  </div>
                  <h4 className={`text-2xl font-bold transition-colors
                    ${activeDomain === domain.id ? 'text-white' : 'text-gray-300'}`}
                  >
                    {domain.title}
                  </h4>
                </div>

                {/* Sub-Nodes */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {domain.nodes.map(node => (
                    <div 
                      key={node} 
                      className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-300
                        ${activeDomain === domain.id 
                          ? domain.color === 'primary' 
                            ? 'bg-primary/10 border-primary/30 text-primary shadow-[0_0_10px_rgba(245,230,211,0.2)]' 
                            : 'bg-secondary/10 border-secondary/30 text-secondary shadow-[0_0_10px_rgba(139,90,43,0.2)]'
                          : 'bg-midnight border-white/5 text-gray-400'}`}
                    >
                      {node}
                    </div>
                  ))}
                </div>

                {/* Expanding Information */}
                <div className={`overflow-hidden transition-all duration-500 relative z-10
                  ${activeDomain === domain.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {domain.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-primary hover:text-white transition-colors cursor-pointer w-fit">
                      <Zap className="w-3 h-3" /> Execute Sub-Routine
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className={`absolute top-6 right-6 w-2 h-2 rounded-full transition-all duration-500
                  ${activeDomain === domain.id 
                    ? domain.color === 'primary' ? 'bg-primary glow-primary' : 'bg-secondary glow-secondary' 
                    : 'bg-gray-600'}`} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
