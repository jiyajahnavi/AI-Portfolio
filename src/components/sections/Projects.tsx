"use client";

import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Code2, BrainCircuit, Search, Eye, Wind, ExternalLink, ShieldCheck, Database, Terminal, LayoutTemplate, Minimize2, Maximize2, X, Image as ImageIcon, Minus } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.1-.34 6.33-1.53 6.33-6.98 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.6 0C6.2 3.6 5.1 4 5.1 4c-.7 2-.2 3.5-.1 3.8-.9 1-1.4 2.3-1.4 3.8 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const IconWrapper = ({ children, bgClass, className }: { children: React.ReactNode, bgClass: string, className?: string }) => (
  <div className={`flex items-center justify-center ${bgClass} rounded-[22.5%] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.5)] border border-black/20 overflow-hidden ${className || 'w-full h-full'}`}>
    {children}
  </div>
);

const BuggiLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-red-500 via-rose-600 to-orange-500" className={className}>
    <ShieldCheck className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const PatternLabLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" className={className}>
    <Code2 className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const HybridRAGLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-teal-400 via-emerald-500 to-green-600" className={className}>
    <Database className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const AgentSpaceLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-800" className={className}>
    <BrainCircuit className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const NanoJepaLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" className={className}>
    <BrainCircuit className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const SignLanguageLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500" className={className}>
    <Eye className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const SatelliteLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-slate-600 via-slate-800 to-black" className={className}>
    <Eye className="w-3/5 h-3/5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" strokeWidth={2.5} />
  </IconWrapper>
);

const AmiPYQLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500" className={className}>
    <Search className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

const AirQualityLogo = ({ className }: { className?: string }) => (
  <IconWrapper bgClass="bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-500" className={className}>
    <Wind className="w-3/5 h-3/5 text-white drop-shadow-md" strokeWidth={2.5} />
  </IconWrapper>
);

type PreviewType = "image" | "video" | "iframe";

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: React.ReactNode;
  image: string;
  previewType: PreviewType;
  previewUrl: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const PROJECTS_DATA: ProjectData[] = [

  {
    id: "patternlab",
    title: "PatternLab AI",
    tagline: "The First AI-Powered Competitive Programming Practicing Platform",
    category: "GenAI + EdTech",
    icon: <PatternLabLogo />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    features: ["AI-generated hints", "Adaptive learning", "Pattern-based DSA learning", "Contextual explanations", "Coding workspace systems"],
    tech: ["React", "Next.js", "Tailwind", "FastAPI", "AI APIs"],
    liveUrl: "https://pattern-lab-ai.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/PatternLab-AI"
  },

  {
    id: "buggi",
    title: "Buggi",
    tagline: "Autonomous AI-Powered Bug Bounty Research Platform",
    category: "Cybersecurity + AI Agents",
    icon: <BuggiLogo />,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    features: ["Autonomous bug discovery", "Multi-agent architecture", "Memory systems", "Browser automation", "Context-aware vulnerability assessment"],
    tech: ["Python", "FastAPI", "AI Agents", "LangChain"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },

 
 {
    id: "agentspace",
    title: "AgentSpace",
    tagline: "A Modular AI Agent Marketplace & Execution Platform",
    category: "AI Infrastructure",
    icon: <AgentSpaceLogo />,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    features: ["AI agent marketplace", "Secure execution", "Modular workflows", "GitHub-inspired interactions"],
    tech: ["Python", "FastAPI", "Docker", "React"],
    liveUrl: "https://agent-space-ten.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/AgentSpace"
  },
  {
    id: "airquality",
    title: "Air Quality",
    tagline: "Environmental Analytics and Forecasting",
    category: "Machine Learning",
    icon: <AirQualityLogo />,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    features: ["Predictive models", "Data visualization", "Futuristic data systems"],
    tech: ["Scikit-learn", "Pandas", "Matplotlib"],
    liveUrl: "https://github.com/jiyajahnavi/Air-Quality-Prediction",
    githubUrl: "https://github.com/jiyajahnavi/Air-Quality-Prediction"
  },
   {
    id: "nanojepa",
    title: "nanoJEPA",
    tagline: "Research-Oriented JEPA Architecture for Language Reasoning",
    category: "AI Research",
    icon: <NanoJepaLogo />,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    features: ["Latent space representations", "Predictive architectures", "Language reasoning"],
    tech: ["PyTorch", "Deep Learning", "Transformers"],
    liveUrl: "https://github.com/jiyajahnavi/NanoJEPA",
    githubUrl: "https://github.com/jiyajahnavi/NanoJEPA"
  },
  {
    id: "satellite",
    title: "Satellite Vision",
    tagline: "Machine Learning Pipeline for Space Imagery",
    category: "Machine Learning",
    icon: <SatelliteLogo />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    features: ["Horizon & Flare Detection", "Image Quality Evaluation", "Unified Detection Pipeline"],
    tech: ["Python", "Image Processing", "Computer Vision"],
    liveUrl: "https://github.com/jiyajahnavi/Satelite-Image-Classification",
    githubUrl: "https://github.com/jiyajahnavi/Satelite-Image-Classification"
  },
  
  {
    id: "amipyq",
    title: "AmiPYQ",
    tagline: "Centralized Academic Retrieval Platform",
    category: "Educational Infrastructure",
    icon: <AmiPYQLogo />,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    features: ["Document retrieval", "Centralized indexing", "Educational dashboard systems"],
    tech: ["Next.js", "React", "Vector DB"],
    liveUrl: "https://amipyq-main.vercel.app/",
    githubUrl: "https://github.com/jiyajahnavi/amipyq_main"
  },
   {
    id: "signlanguage",
    title: "Sign Language AI",
    tagline: "Real-Time Gesture Tracking and Classification",
    category: "Computer Vision",
    icon: <SignLanguageLogo />,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    features: ["Gesture-tracking overlays", "Real-time prediction", "Deep learning classification"],
    tech: ["OpenCV", "MediaPipe", "TensorFlow"],
    liveUrl: "https://github.com/jiyajahnavi/Sign-Language-Intrepreter",
    githubUrl: "https://github.com/jiyajahnavi/Sign-Language-Intrepreter"
  },
  {
    id: "hybridrag",
    title: "HybridRAG",
    tagline: "Production-Quality Retrieval-Augmented Generation",
    category: "Generative AI + Search",
    icon: <HybridRAGLogo />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    previewType: "image",
    previewUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    features: ["Lexical (BM25) & Semantic (FAISS)", "Cross-Encoder Reranking", "Gemini-2.5-Flash Generation"],
    tech: ["Python", "FAISS", "Gemini API", "LLMs"],
    liveUrl: "https://github.com/jiyajahnavi/Hybrid-RAG",
    githubUrl: "https://github.com/jiyajahnavi/Hybrid-RAG"
  },

];

export default function Projects() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [maximizedWindows, setMaximizedWindows] = useState<string[]>([]);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const constraintsRef = useRef(null);

  const openApp = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows(prev => [...prev, id]);
    }
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    }
    setActiveWindow(id);
  };

  const closeApp = (id: string) => {
    setOpenWindows(prev => prev.filter(wId => wId !== id));
    setMinimizedWindows(prev => prev.filter(wId => wId !== id));
    setMaximizedWindows(prev => prev.filter(wId => wId !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const minimizeApp = (id: string) => {
    if (!minimizedWindows.includes(id)) {
      setMinimizedWindows(prev => [...prev, id]);
    }
    if (activeWindow === id) setActiveWindow(null);
  };

  const toggleMaximizeApp = (id: string) => {
    if (maximizedWindows.includes(id)) {
      setMaximizedWindows(prev => prev.filter(wId => wId !== id));
    } else {
      setMaximizedWindows(prev => [...prev, id]);
    }
    setActiveWindow(id);
  };

  // Organize icons in a grid for the desktop
  const gridColumns = 3;
  const gridRows = Math.ceil(PROJECTS_DATA.length / gridColumns);

  return (
    <section className="relative w-full min-h-[100dvh] bg-black overflow-hidden select-none flex flex-col items-center justify-center pt-24 pb-12">
      
      {/* Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-8 text-center shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <LayoutTemplate className="w-4 h-4" /> Innovation Archive
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
            Projects
          </h2>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A desktop OS-inspired showcase of intelligent systems, AI engineering, and scalable product development.
          </p>
        </motion.div>
      </div>

      {/* Mobile Horizontal Scroll View */}
      <div className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 mt-4 [&::-webkit-scrollbar]:hidden">
        {PROJECTS_DATA.map((project, idx) => (
          <div key={`mobile-project-${project.id}`} className="min-w-[85vw] snap-center shrink-0 flex flex-col bg-midnight/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full aspect-video bg-black/50 relative overflow-hidden shrink-0">
              {project.previewType === 'image' && (
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              {project.previewType === 'video' && (
                <video src={project.previewUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
              )}
              {project.previewType === 'iframe' && (
                <iframe src={project.previewUrl} className="absolute inset-0 w-full h-full border-0 pointer-events-none" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div>
                <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                  <div className="w-6 h-6">{project.icon}</div> {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-light italic line-clamp-2">
                  "{project.tagline}"
                </p>
              </div>

              <div className="flex-1">
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span className="line-clamp-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tech.slice(0, 4).map((t, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl bg-primary/20 border border-primary/40 hover:bg-primary/30 transition-colors text-white text-sm font-medium flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm font-medium flex items-center justify-center gap-2">
                  <GithubIcon className="w-4 h-4" /> Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Container */}
      <div className="hidden md:block relative w-full max-w-[1600px] md:h-auto md:aspect-[16/9] mx-auto mt-8">
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/macbook.jpeg"
            alt="MacBook Device"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* Screen Bounding Box */}
        <div
          className="absolute z-10 overflow-hidden md:top-[8%] md:bottom-[15%] md:left-[12%] md:right-[12%] md:rounded-[1%/2%]"
          ref={constraintsRef}
        >
          {/* Subtle overlay for text readability inside the screen */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Desktop Icons Layer */}
          <div className="relative z-10 w-full h-full p-8 pt-24 flex flex-wrap content-start justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {PROJECTS_DATA.map((project, index) => (
              <div
                key={`icon-${project.id}`}
                className="flex flex-col items-center justify-start gap-2 cursor-pointer group relative w-24"
                onDoubleClick={() => openApp(project.id)}
                onClick={(e) => {
                  if (isMobile) openApp(project.id);
                }}
                onMouseEnter={() => setHoveredIcon(project.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 transition-transform ${openWindows.includes(project.id) ? 'opacity-50' : 'opacity-100'}`}
                >
                  {project.icon}
                </motion.div>
                <span className="text-white text-xs font-medium px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-center drop-shadow-md border border-white/5 line-clamp-2">
                  {project.title}
                </span>

                {/* Hover Preview Window */}
                <AnimatePresence>
                  {hoveredIcon === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-20 left-1/2 -translate-x-1/2 z-50 w-64 rounded-xl overflow-hidden bg-black/80 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-none"
                    >
                      <div className="h-6 bg-gradient-to-b from-white/10 to-transparent flex items-center px-3 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                      </div>
                      <div className="h-36 relative">
                        {project.previewType === 'image' && (
                          <img src={project.previewUrl} alt={project.title} className="w-full h-full object-cover" />
                        )}
                        {project.previewType === 'video' && (
                          <video src={project.previewUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        )}
                        {project.previewType === 'iframe' && (
                          <iframe src={project.previewUrl} className="w-full h-full border-0 pointer-events-none" />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Application Windows Layer */}
          {PROJECTS_DATA.map((project) => {
            if (!openWindows.includes(project.id) || minimizedWindows.includes(project.id)) return null;

            const isMaximized = maximizedWindows.includes(project.id);
            const isActive = activeWindow === project.id;

            return (
              <motion.div
                key={`window-${project.id}`}
                drag={!isMobile && !isMaximized}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragMomentum={false}
                onMouseDown={() => setActiveWindow(project.id)}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  width: isMaximized ? '100%' : (project.featured ? 'min(800px, 100%)' : 'min(600px, 100%)'),
                  height: isMaximized ? 'calc(100% - 80px)' : (project.featured ? 'min(600px, calc(100% - 80px))' : 'min(500px, calc(100% - 80px))'),
                  x: isMaximized ? 0 : undefined,
                  top: isMaximized ? 0 : 'auto',
                  left: isMaximized ? 0 : undefined,
                }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                className={`absolute z-${isActive ? '40' : '30'} flex flex-col bg-midnight/80 backdrop-blur-3xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden ${isMaximized ? 'rounded-none' : 'rounded-2xl mx-auto inset-x-0'
                  }`}
                style={{
                  zIndex: isActive ? 40 : 30
                }}
              >
                {/* Window Title Bar */}
                <div
                  className="h-12 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-between px-4 border-b border-white/10 cursor-grab active:cursor-grabbing shrink-0"
                  onDoubleClick={() => toggleMaximizeApp(project.id)}
                >
                  <div className="flex items-center gap-2">
                    <button onClick={() => closeApp(project.id)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group/btn transition-colors">
                      <X className="w-2 h-2 text-red-900 opacity-0 group-hover/btn:opacity-100" />
                    </button>
                    <button onClick={() => minimizeApp(project.id)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center group/btn transition-colors">
                      <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover/btn:opacity-100" />
                    </button>
                    <button onClick={() => toggleMaximizeApp(project.id)} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center group/btn transition-colors">
                      {isMaximized ? (
                        <Minimize2 className="w-2 h-2 text-green-900 opacity-0 group-hover/btn:opacity-100" />
                      ) : (
                        <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover/btn:opacity-100" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <div className="w-5 h-5">{project.icon}</div> {project.title}
                  </div>
                  <div className="w-16" /> {/* Spacer for symmetry */}
                </div>

                {/* Window Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 pb-24 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  <div className="flex flex-col md:flex-row gap-6 h-full">
                    {/* Left Column: Media */}
                    <div className={`w-full ${project.featured ? 'md:w-1/2' : 'md:w-5/12'} flex flex-col gap-4`}>
                      <div className="w-full aspect-video md:aspect-auto md:h-64 lg:h-72 bg-black/50 rounded-xl overflow-hidden border border-white/10 relative">
                        {project.previewType === 'image' && (
                          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                        )}
                        {project.previewType === 'video' && (
                          <video src={project.previewUrl} autoPlay loop muted playsInline controls className="absolute inset-0 w-full h-full object-cover" />
                        )}
                        {project.previewType === 'iframe' && (
                          <iframe src={project.previewUrl} className="absolute inset-0 w-full h-full border-0" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-primary" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[10px] sm:text-xs font-mono text-gray-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className={`w-full ${project.featured ? 'md:w-1/2' : 'md:w-7/12'} flex flex-col`}>
                      <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                      <p className="text-sm text-gray-300 font-light italic mb-6 pb-4 border-b border-white/10">
                        "{project.tagline}"
                      </p>

                      <div className="mb-6 flex-1">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-secondary" /> Core Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-tight">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(205,140,100,0.8)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-row gap-3 pt-4 border-t border-white/10 mt-auto">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-primary/20 border border-primary/40 hover:bg-primary/30 hover:border-primary text-white transition-all text-sm font-medium flex items-center justify-center gap-2 flex-1 group">
                          <ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> Live Demo
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white transition-all text-sm font-medium flex items-center justify-center gap-2 flex-1 group">
                          <GithubIcon className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" /> Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Floating Dock Layer */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex items-center gap-2">
            {openWindows.map(id => {
              const project = PROJECTS_DATA.find(p => p.id === id);
              if (!project) return null;

              const isActive = activeWindow === id;
              const isMinimized = minimizedWindows.includes(id);

              return (
                <div key={`dock-${id}`} className="relative group/dock">
                  {/* Dock Tooltip Preview */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/dock:opacity-100 transition-opacity pointer-events-none flex flex-col items-center">
                    <div className="px-3 py-1.5 bg-black/90 border border-white/10 rounded-lg text-xs font-medium text-white whitespace-nowrap mb-2 shadow-xl">
                      {project.title}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.2, y: -10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      if (isActive && !isMinimized) minimizeApp(id);
                      else openApp(id);
                    }}
                    className="w-12 h-12 relative flex items-center justify-center transition-transform"
                  >
                    <div className="w-full h-full p-0.5">{project.icon}</div>
                    {isActive && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--primary-rgb),1)]" />
                    )}
                    {!isActive && openWindows.includes(id) && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/50" />
                    )}
                  </motion.button>
                </div>
              );
            })}
            {openWindows.length === 0 && (
              <div className="text-gray-500 text-sm px-4 py-2 font-medium">
                Desktop Workspace
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
