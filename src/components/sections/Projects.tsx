"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Code2, BrainCircuit, Search, Eye, Activity, Wind, BookOpen, ExternalLink, ShieldCheck, Database, Terminal, LayoutTemplate } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.98 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.2 3.6 5.1 4 5.1 4c-.7 2-.2 3.5-.1 3.8-.9 1-1.4 2.3-1.4 3.8 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

// Project Data (No Cover Page)
const BOOK_PAGES = [
  {
    id: "patternlab",
    type: "project",
    title: "PatternLab AI",
    tagline: "The First AI-Powered Competitive Programming Practicing Platform",
    category: "GenAI + EdTech + AI Systems",
    icon: <Code2 className="w-16 h-16 text-primary mb-4" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    features: ["AI-generated hints", "Adaptive learning", "Pattern-based DSA learning", "Contextual explanations", "Coding workspace systems"],
    tech: ["React", "Next.js", "Tailwind", "FastAPI", "AI APIs", "Framer Motion"],
    liveUrl: "https://pattern-lab-ai.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/PatternLab-AI"
  },
  
  {
    id: "nanojepa",
    type: "project",
    title: "nanoJEPA",
    tagline: "Research-Oriented JEPA Architecture for Language Reasoning",
    category: "AI Research + Deep Learning",
    icon: <Database className="w-16 h-16 text-primary mb-4" />,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    features: ["Latent space representations", "Predictive architectures", "Language reasoning", "Research-lab modeling"],
    tech: ["PyTorch", "Deep Learning", "Transformers", "Python"],
    liveUrl: "https://github.com/jiyajahnavi/NanoJEPA",
    githubUrl: "https://github.com/jiyajahnavi/NanoJEPA"
  },
   {
    id: "hybridrag",
    type: "project",
    title: "HybridRAG",
    tagline: "Production-Quality Retrieval-Augmented Generation",
    category: "Generative AI + Search Systems",
    icon: <Database className="w-16 h-16 text-primary mb-4" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    features: ["Lexical (BM25) & Semantic (FAISS)", "Cross-Encoder Reranking", "Gemini-2.5-Flash Generation", "Multi-format Knowledge Base"],
    tech: ["Python", "FAISS", "Gemini API", "Vector Search", "LLMs"],
    liveUrl: "https://github.com/jiyajahnavi/Hybrid-RAG",
    githubUrl: "https://github.com/jiyajahnavi/Hybrid-RAG"
  },
  {
    id: "agentspace",
    type: "project",
    title: "AgentSpace",
    tagline: "A Modular AI Agent Marketplace & Execution Platform",
    category: "AI Infrastructure + Agentic Systems",
    icon: <BrainCircuit className="w-16 h-16 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    features: ["AI agent marketplace", "Secure execution", "Modular workflows", "Reusable AI pipelines", "GitHub-inspired interactions"],
    tech: ["Python", "FastAPI", "Docker", "AI Agents", "React"],
    liveUrl: "https://agent-space-ten.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/AgentSpace"
  },
  {
    id: "signlanguage",
    type: "project",
    title: "Sign Language Recognition",
    tagline: "Real-Time Gesture Tracking and Classification",
    category: "Computer Vision + Deep Learning",
    icon: <Eye className="w-16 h-16 text-primary mb-4" />,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    features: ["Gesture-tracking overlays", "Real-time prediction", "Deep learning classification"],
    tech: ["OpenCV", "MediaPipe", "TensorFlow", "Python"],
    liveUrl: "https://github.com/jiyajahnavi/Sign-Language-Intrepreter",
    githubUrl: "https://github.com/jiyajahnavi/Sign-Language-Intrepreter"
  },
  {
    id: "satellite",
    type: "project",
    title: "Satellite Image Classification",
    tagline: "Machine Learning Pipeline for Space Imagery",
    category: "Machine Learning + Computer Vision",
    icon: <Eye className="w-16 h-16 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    features: ["Horizon & Flare Detection", "Image Quality Evaluation", "Unified Detection Pipeline", "Data Compression"],
    tech: ["Python", "Machine Learning", "Image Processing", "Computer Vision"],
    liveUrl: "https://github.com/jiyajahnavi/Satelite-Image-Classification",
    githubUrl: "https://github.com/jiyajahnavi/Satelite-Image-Classification"
  },
  
 
  {
    id: "amipyq",
    type: "project",
    title: "AmiPYQ",
    tagline: "Centralized Academic Retrieval Platform",
    category: "Educational Infrastructure",
    icon: <Search className="w-16 h-16 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    features: ["Document retrieval", "Centralized indexing", "Educational dashboard systems"],
    tech: ["Next.js", "React", "Vector DB", "APIs"],
    liveUrl: "https://amipyq-main.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/amipyq_main"
  },
  {
    id: "airquality",
    type: "project",
    title: "Air Quality Prediction",
    tagline: "Environmental Analytics and Forecasting",
    category: "Machine Learning + Predictive Analytics",
    icon: <Wind className="w-16 h-16 text-primary mb-4" />,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    features: ["Predictive models", "Data visualization", "Futuristic data systems"],
    tech: ["Scikit-learn", "Pandas", "Matplotlib", "Python"],
    liveUrl: "https://github.com/jiyajahnavi/Air-Quality-Prediction",
    githubUrl: "https://github.com/jiyajahnavi/Air-Quality-Prediction"
  },
  
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const next = currentPage + newDirection;
    if (next >= 0 && next < BOOK_PAGES.length) {
      setDirection(newDirection);
      setCurrentPage(next);
    }
  };

  const rightPageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      zIndex: 10,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      zIndex: 0,
    })
  };

  const activeData = BOOK_PAGES[currentPage] || BOOK_PAGES[0];

  return (
    <section className="py-20 md:py-32 w-full min-h-screen relative overflow-hidden bg-midnight flex flex-col items-center justify-center perspective-[2000px]">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block flex items-center justify-center gap-2">
            <LayoutTemplate className="w-4 h-4" /> Innovation Archive
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white drop-shadow-2xl">
            Projects <span className="text-gradient"></span>
          </h2>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            An interactive flipbook of intelligent systems, AI engineering, research exploration, and scalable product development.
          </p>
        </motion.div>
      </div>

      {/* Mobile Swipe Gallery (Hidden on Desktop) */}
      <div className="w-full relative z-10 flex lg:hidden overflow-x-auto snap-x snap-mandatory px-6 gap-6 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {BOOK_PAGES.map((project, idx) => (
          <div key={`mobile-page-${idx}`} className="w-[85vw] sm:w-[70vw] shrink-0 snap-center flex flex-col bg-midnight/95 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden transform-gpu">
            
            {/* Image Section */}
            <div className="w-full h-64 sm:h-80 relative overflow-hidden group flex items-center justify-center bg-black">
              {project.type === "project" ? (
                <>
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
                  <div className="relative z-10 bg-midnight/50 p-4 rounded-3xl backdrop-blur-md border border-white/10">
                    {project.icon}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-secondary mb-4 animate-pulse" />
                  <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">{project.title}</h2>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-4 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
              <p className="text-sm text-gray-300 font-light italic mb-6 pb-4 border-b border-white/10">
                &quot;{project.tagline}&quot;
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-secondary" /> Core Features
                </h4>
                <ul className="space-y-2">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-primary" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-row gap-3 pt-4 border-t border-white/10">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 hover:border-primary text-white text-sm font-medium flex items-center justify-center gap-2 flex-1">
                  <ExternalLink className="w-4 h-4 text-primary" /> Live
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white text-sm font-medium flex items-center justify-center gap-2 flex-1">
                  <GithubIcon className="w-4 h-4 text-gray-300" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Container (Desktop Only) */}
      <div className="w-full max-w-[90rem] px-2 md:px-12 lg:px-24 mx-auto relative z-10 hidden lg:flex flex-col items-center">
        
        {/* Edge Navigation Controls */}
        <button 
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 md:p-4 lg:p-6 rounded-full glass border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all disabled:opacity-0 disabled:pointer-events-none z-50 group shadow-[0_0_30px_rgba(245,230,211,0.1)]"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={() => paginate(1)}
          disabled={currentPage === BOOK_PAGES.length - 1}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 md:p-4 lg:p-6 rounded-full glass border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all disabled:opacity-0 disabled:pointer-events-none z-50 group shadow-[0_0_30px_rgba(245,230,211,0.1)]"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* 3D Book Layout */}
        <div className="relative w-full h-[700px] sm:h-[750px] lg:h-[750px] lg:aspect-[2/1] transform-style-preserve-3d shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-2xl border border-white/10 bg-midnight/95 backdrop-blur-3xl flex overflow-hidden">
          
          {/* Visual Book Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -ml-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-40 hidden lg:block shadow-[0_0_15px_rgba(0,0,0,1)]" />
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-30 hidden lg:block pointer-events-none" />

          <AnimatePresence custom={direction} mode="wait">
            
            <motion.div
              key={`page-${currentPage}`}
              className="absolute inset-0 w-full h-full flex flex-col lg:flex-row"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              
              {/* LEFT PAGE (Visuals / Images) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full lg:w-1/2 h-[30%] sm:h-[40%] lg:h-full bg-gradient-to-br from-black to-midnight relative overflow-hidden flex flex-col items-center justify-center text-center group"
              >
                {activeData.type === "project" ? (
                  <>
                    <img 
                      src={activeData.image} 
                      alt={activeData.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent" />
                    
                    {/* Centered Floating Icon on Image */}
                    <div className="relative z-10 bg-midnight/50 p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      {activeData.icon}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full p-4 md:p-8 lg:p-12">
                    <ShieldCheck className="w-24 h-24 text-secondary mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-2xl max-w-sm">
                      {activeData.title}
                    </h2>
                  </div>
                )}
              </motion.div>

              {/* RIGHT PAGE (Details) - With Spine Flip Animation */}
              <motion.div 
                custom={direction}
                variants={rightPageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 h-[70%] sm:h-[60%] lg:h-full p-4 md:p-8 lg:p-16 relative overflow-y-auto origin-top lg:origin-left transform-style-preserve-3d border-t lg:border-t-0 border-white/5"
              >
                {/* Page Shadow for 3D realism */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 to-transparent w-8 hidden lg:block" />

                {/* Page Shadow for 3D realism */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 to-transparent w-8 hidden lg:block" />
                  <div className="max-w-xl mx-auto min-h-full flex flex-col justify-center py-2">
                    <div className="hidden lg:inline-block text-[10px] md:text-xs font-mono text-primary uppercase tracking-widest mb-2 md:mb-6 px-2 py-0.5 md:px-3 md:py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                      {activeData.category}
                    </div>
                    <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-1 lg:mb-4 leading-tight">{activeData.title}</h3>
                    <p className="text-xs md:text-lg lg:text-xl text-gray-300 font-light italic mb-2 md:mb-8 pb-2 md:pb-6 border-b border-white/10">
                      &quot;{activeData.tagline}&quot;
                    </p>

                    <div className="mb-2 md:mb-8">
                      <h4 className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider mb-2 md:mb-4 flex items-center gap-1 md:gap-2">
                        <Database className="w-3 h-3 md:w-4 md:h-4 text-secondary" /> Core Features
                      </h4>
                      <ul className="space-y-1.5 md:space-y-3">
                        {activeData.features?.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-400 text-[10px] sm:text-sm lg:text-base leading-tight">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-secondary mt-1.5 md:mt-2 shrink-0 shadow-[0_0_10px_rgba(205,140,100,0.8)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-2 md:mb-10">
                      <h4 className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider mb-2 md:mb-4 flex items-center gap-1 md:gap-2">
                        <Terminal className="w-3 h-3 md:w-4 md:h-4 text-primary" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {activeData.tech?.map((t, i) => (
                          <span key={i} className="px-2 py-1 md:px-3 md:py-1.5 rounded bg-white/5 border border-white/10 text-[9px] md:text-xs font-mono text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-row gap-2 md:gap-3 pt-2 lg:pt-4 border-t border-white/10">
                       <a href={activeData.liveUrl} target="_blank" rel="noopener noreferrer" className="px-3 md:px-6 py-2 md:py-3 rounded-xl bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 text-white transition-all text-[10px] md:text-sm font-medium flex items-center justify-center gap-1.5 md:gap-2 flex-1 group">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-primary group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Live Project</span><span className="sm:hidden">Live</span>
                       </a>
                       <a href={activeData.githubUrl} target="_blank" rel="noopener noreferrer" className="px-3 md:px-6 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white transition-all text-[10px] md:text-sm font-medium flex items-center justify-center gap-1.5 md:gap-2 flex-1 group">
                        <GithubIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-300 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Source Code</span><span className="sm:hidden">Code</span>
                       </a>
                    </div>
                  </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Progress Indicator */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-3">
          {BOOK_PAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentPage 
                  ? "w-12 bg-primary shadow-[0_0_15px_rgba(245,230,211,0.5)]" 
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to chapter ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
