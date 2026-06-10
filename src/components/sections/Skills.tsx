"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Network, BrainCircuit, Eye, Terminal, TestTube2, LineChart, Cloud } from "lucide-react";

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

// Map indices to visual radar chart positions
const getAngle = (i: number) => {
  switch (i) {
    case 0: return 240; // ML (TL)
    case 1: return 300; // CV (TR)
    case 2: return 180; // Backend (L)
    case 3: return 0;   // Frameworks (R)
    case 4: return 120; // Data (BL)
    case 5: return 60;  // Cloud (BR)
    default: return 0;
  }
};

const getLevel = (i: number) => [0.95, 0.88, 0.90, 0.85, 0.92, 0.80][i] || 0.8;

const SVG_SIZE = 1000;
const CENTER = SVG_SIZE / 2;
const RADIUS = 400;
const GRID_ANGLES = [0, 60, 120, 180, 240, 300];

const getPoint = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180;
  return `${CENTER + radius * Math.cos(rad)},${CENTER + radius * Math.sin(rad)}`;
};

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  
  // High-performance cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Generate floating orbs
  const ORBS = useMemo(() => {
    let seed = 12345;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    return SKILL_DOMAINS.flatMap(domain => 
      domain.nodes.map((node, i) => {
        const angle = random() * Math.PI * 2;
        // Keep them mostly outside the radar, but overlapping slightly
        const radiusPercent = 35 + random() * 15; 
        const x = 50 + radiusPercent * Math.cos(angle);
        const y = 50 + radiusPercent * Math.sin(angle);
        
        return {
          id: `${domain.id}-${i}`,
          name: node,
          domainId: domain.id,
          color: domain.color,
          x,
          y,
          duration: 15 + random() * 20,
          delay: random() * -20,
        };
      })
    );
  }, []);

  // Generate grid polygons
  const gridPolygons = [0.2, 0.4, 0.6, 0.8, 1.0].map(level => {
    return GRID_ANGLES.map(angle => getPoint(angle, RADIUS * level)).join(" ");
  });

  // Generate data polygon points
  const dataPoints = useMemo(() => {
    const points = SKILL_DOMAINS.map((d, i) => ({
      angle: getAngle(i),
      level: getLevel(i)
    })).sort((a, b) => a.angle - b.angle);
    
    return points.map(p => getPoint(p.angle, RADIUS * p.level)).join(" ");
  }, []);

  const activeDomainData = SKILL_DOMAINS.find(d => d.id === activeDomain);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-16 md:py-24 w-full min-h-[100dvh] relative overflow-hidden bg-midnight flex flex-col items-center justify-center cursor-crosshair"
    >
      
      {/* Immersive Holographic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-midnight to-midnight opacity-60 blur-[120px]" />
        
        {/* Animated Particle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      {/* Header */}
      <div className="absolute top-12 md:top-24 text-center relative z-10 w-full max-w-4xl mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <Network className="w-4 h-4" /> Systems Overview
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matrix</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[1200px] aspect-square flex-1 flex items-center justify-center z-10">
        
        {/* Floating Skill Orbs */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          {ORBS.map((orb) => (
            <div
              key={orb.id}
              className="absolute"
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
              }}
            >
              <motion.div
                className={`flex items-center justify-center px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg
                  ${orb.color === 'primary' ? 'bg-primary/10 text-primary shadow-primary/20' : 'bg-secondary/10 text-secondary shadow-secondary/20'}
                  ${activeDomain && activeDomain !== orb.domainId ? 'opacity-20 scale-90' : 'opacity-80 scale-100'} transition-all duration-500`}
                style={{ x: "-50%", y: "-50%" }}
                animate={{
                  rotate: -360,
                  y: ["-50%", "calc(-50% - 15px)", "-50%"],
                }}
                transition={{
                  rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                  y: { duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay },
                }}
              >
                <span className="text-[10px] md:text-xs font-mono tracking-wider whitespace-nowrap drop-shadow-md">
                  {orb.name}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Hero Radar Chart */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
          className="relative w-full max-w-[800px] lg:max-w-[1000px] aspect-square"
        >
          {/* Background Core Glow */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="w-full h-full drop-shadow-[0_0_30px_rgba(245,230,211,0.15)] overflow-visible">
            <defs>
              <linearGradient id="heroPolygonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(245,230,211,0.4)" />
                <stop offset="50%" stopColor="rgba(245,230,211,0.1)" />
                <stop offset="100%" stopColor="rgba(139,90,43,0.4)" />
              </linearGradient>
              <filter id="heroGlow">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Grid Polygons */}
            {gridPolygons.map((points, i) => (
              <polygon
                key={i}
                points={points}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={i === 4 ? "3" : "1"}
                className="transition-all duration-1000"
              />
            ))}

            {/* Axis Lines */}
            {GRID_ANGLES.map(angle => (
              <line
                key={angle}
                x1={CENTER}
                y1={CENTER}
                x2={CENTER + RADIUS * Math.cos(angle * Math.PI / 180)}
                y2={CENTER + RADIUS * Math.sin(angle * Math.PI / 180)}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            ))}

            {/* Data Polygon */}
            <motion.polygon
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: 'center' }}
              points={dataPoints}
              fill="url(#heroPolygonGrad)"
              stroke="rgba(245,230,211,0.8)"
              strokeWidth="4"
              filter="url(#heroGlow)"
              className="drop-shadow-[0_0_20px_rgba(245,230,211,0.5)] cursor-crosshair hover:fill-primary/20 transition-colors duration-500"
            />

            {/* Interactive Vertices */}
            {SKILL_DOMAINS.map((domain, i) => {
              const angle = getAngle(i);
              const level = getLevel(i);
              const [x, y] = getPoint(angle, RADIUS * level).split(",");
              const isActive = activeDomain === domain.id;
              const isOtherActive = activeDomain && activeDomain !== domain.id;
              
              return (
                <g 
                  key={`vertex-${domain.id}`}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                  className="cursor-pointer group/vertex"
                >
                  {/* Invisible larger hit area for easier hover/tap on mobile */}
                  <circle cx={x} cy={y} r="80" fill="transparent" />
                  
                  {/* Outer Pulsing Ring */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? 25 : 0}
                    fill="none"
                    stroke={domain.color === 'primary' ? 'rgba(245,230,211,0.8)' : 'rgba(139,90,43,0.8)'}
                    strokeWidth="3"
                    className="transition-all duration-300 pointer-events-none"
                    animate={isActive ? { scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  
                  {/* Core Vertex */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 12 : 8}
                    fill={domain.color === 'primary' ? '#F5E6D3' : '#8B5A2B'}
                    className={`transition-all duration-300 pointer-events-none ${isActive ? 'drop-shadow-[0_0_15px_rgba(255,255,255,1)]' : 'drop-shadow-lg'} ${isOtherActive ? 'opacity-30' : 'opacity-100'}`}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/80 border-2 border-primary/50 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(245,230,211,0.3)]">
              <Network className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
              <div className="absolute inset-[-10px] rounded-full border border-primary/30 border-dashed animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-secondary/30 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Sticky Detail Card */}
      <AnimatePresence>
        {activeDomainData && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-none"
          >
            <div className={`glass w-full p-5 rounded-2xl border bg-black/90 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]
              ${activeDomainData.color === 'primary' ? 'border-primary/50 shadow-primary/20' : 'border-secondary/50 shadow-secondary/20'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 border ${activeDomainData.color === 'primary' ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}>
                  {activeDomainData.icon}
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {activeDomainData.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {activeDomainData.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeDomainData.nodes.map(node => (
                  <span 
                    key={node}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border 
                      ${activeDomainData.color === 'primary' ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/10 border-secondary/30 text-secondary'}`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating HUD Tooltip */}
      <AnimatePresence>
        {activeDomainData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ x: springX, y: springY }}
            className="hidden md:block fixed top-0 left-0 z-50 pointer-events-none ml-6 mt-6"
          >
            <div className={`glass w-80 p-5 rounded-2xl border bg-black/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]
              ${activeDomainData.color === 'primary' ? 'border-primary/50 shadow-primary/20' : 'border-secondary/50 shadow-secondary/20'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 border ${activeDomainData.color === 'primary' ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}>
                  {activeDomainData.icon}
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {activeDomainData.title}
                </h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {activeDomainData.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeDomainData.nodes.map(node => (
                  <span 
                    key={node}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border 
                      ${activeDomainData.color === 'primary' ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/10 border-secondary/30 text-secondary'}`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
