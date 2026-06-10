"use client";

import { motion } from "framer-motion";
import { Award, BrainCircuit, Database, CheckCircle2, ShieldCheck, Network, Cpu, ExternalLink } from "lucide-react";

const AI_CERTIFICATIONS = [
  {
    title: "AI Fluency Framework & Foundations",
    org: "Anthropic",
    category: "AI Systems",
    description: "Explored AI systems thinking, generative AI foundations, and practical AI fluency concepts.",
    tags: ["AI Systems", "LLMs", "Reasoning", "GenAI"],
    link: "#",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />
  },
  {
    title: "Generative AI",
    org: "Infosys Springboard",
    category: "GenAI",
    description: "Deep dive into generative models, architectures, and real-world implementations.",
    tags: ["Generative AI", "LLMs", "Prompt Engineering", "AI Applications"],
    link: "#",
    icon: <Network className="w-6 h-6 text-secondary" />
  },
  {
    title: "Prompt Engineering",
    org: "Infosys Springboard",
    category: "GenAI",
    description: "Mastered prompt design and interaction strategies for large language models.",
    tags: ["Prompt Design", "LLMs", "AI Interaction", "GenAI"],
    link: "#",
    icon: <Cpu className="w-6 h-6 text-primary" />
  },
  {
    title: "Computer Vision",
    org: "Infosys Springboard",
    category: "Vision",
    description: "Comprehensive study of image processing, CNNs, and deep learning for vision.",
    tags: ["Computer Vision", "CNNs", "Image Processing", "Deep Learning"],
    link: "#",
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />
  },
  {
    title: "Complete Machine Learning with Real World Deployment",
    org: "Udemy / Online",
    category: "MLOps",
    description: "End-to-end machine learning pipeline creation, training, and production deployment.",
    tags: ["Machine Learning", "Deployment", "Model Training", "Production Systems"],
    link: "#",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />
  },
  {
    title: "DSMP 1",
    org: "CampusX",
    category: "Data Science",
    description: "Foundational data science and machine learning concepts and Python programming.",
    tags: ["Machine Learning", "Data Science", "Python", "ML Systems"],
    link: "#",
    icon: <Award className="w-6 h-6 text-secondary" />
  },
  {
    title: "Prime AI ML",
    org: "Apna College",
    category: "AI/ML",
    description: "Core artificial intelligence and machine learning principles using Python.",
    tags: ["AI", "ML Foundations", "Python"],
    link: "#",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />
  },
  {
    title: "SQL from Beginner to Advanced",
    org: "Online Curriculum",
    category: "Database Engineering",
    description: "Advanced querying, database systems architecture, and query optimization.",
    tags: ["SQL", "Database Systems", "Query Optimization", "Data Engineering"],
    link: "#",
    icon: <Database className="w-6 h-6 text-secondary" />
  }
];




export default function Certifications() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen relative z-10 overflow-hidden">
      
      {/* Background Neural Network Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-midnight to-midnight" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,230,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,230,211,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 block">
              <ShieldCheck className="inline-block w-4 h-4 mr-2 mb-1" />
              Digital Archive
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Certifications & <span className="text-gradient">Learning</span>
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-3xl mx-auto leading-relaxed">
              Continuous exploration across AI systems, machine learning, backend engineering, computer vision, and generative AI.
            </p>
          </motion.div>
        </div>

        {/* AI Vault Section */}
        <div className="mb-12 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-10 flex items-center gap-3 border-b border-white/10 pb-4 inline-flex pr-12"
          >
            <BrainCircuit className="text-primary w-6 h-6" /> AI & GenAI Vault
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
              >
                {/* Holographic Glow */}
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {cert.icon}
                </div>

                <div className="mb-6 relative z-10">
                  <div className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">{cert.category}</div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors">{cert.title}</h4>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors shrink-0 p-1">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-400">{cert.org}</div>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {cert.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
}
