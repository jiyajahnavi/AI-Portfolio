"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Network, Database, LayoutTemplate, GitMerge, BrainCircuit, LineChart, Code2, Users, Rocket } from "lucide-react";

const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "Infosys",
    duration: "June - July",
    category: "AI Engineering ",
    icon: <Network className="w-8 h-8 text-primary" />,
    description: "Hands-on exposure to enterprise-level AI workflows, scalable engineering environments, and practical AI system integration.",
    highlights: [
      "AI-driven workflows",
      "Enterprise engineering exposure",
      "Backend systems",
      "Scalable architecture understanding",
      "Problem-solving in production environments",
      "Collaborative engineering"
    ],
    tech: ["Python", "AI Systems", "APIs", "Backend Engineering", "ML Workflows"]
  },
  {
    role: "Machine Learning Intern",
    company: "RYM Grenergy Pvt Ltd",
    duration: "April – May",
    category: "Machine Learning ",
    icon: <LineChart className="w-8 h-8 text-secondary" />,
    description: "Working on machine learning-driven systems, data-focused workflows, and analytical engineering approaches.",
    highlights: [
      "Machine learning workflows",
      "Data-driven systems",
      "Analytics",
      "Predictive modeling",
      "Technical experimentation",
      "Applied ML engineering"
    ],
    tech: ["Python", "Machine Learning", "Data Analysis", "Predictive Systems"]
  },
  {
    role: "Freelance",
    company: "Web & App Developer",
    duration: "Project Based",
    category: "Product Development / Full Stack Engineering",
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    description: "Built a scalable multi-role digital infrastructure platform designed to streamline academic management and intelligent workflow automation.",
    highlights: [
      "Full-stack architecture",
      "Scalable design",
      "Real-world deployment",
      "Responsive UI systems",
      "Intelligent workflow integration",
      "Multi-user system design"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Databases", "APIs"],
    panels: ["Super Admin", "Admin", "Teacher", "Student"]
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSOC) 2025",
    duration: "Summer 2025",
    category: "Open Source Development ",
    icon: <GitMerge className="w-8 h-8 text-secondary" />,
    description: "Actively contributing to collaborative open-source ecosystems through development, problem solving, contribution workflows, and community-driven engineering.",
    highlights: [
      "Open-source collaboration",
      "Git workflows",
      "Contribution-based development",
      "Community participation",
      "Debugging and issue solving",
      "Scalable collaborative engineering"
    ],
    tech: ["Git", "GitHub", "JavaScript", "React", "APIs", "Backend Systems"]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight">
      
      {/* Cinematic Animated Background */}
      <motion.div style={{ y: yOffset }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNDUsMjMwLDIxMSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-50" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-40 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-6 block">
              <Briefcase className="inline-block w-4 h-4 mr-2 mb-1" />
              Professional Trajectory
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
              Experience  <span className="text-gradient"></span>
            </h2>
            
          </motion.div>
        </div>

        {/* Vertical Engineering Timeline */}
        <div className="relative mb-40">
          
          {/* Animated Connecting Timeline */}
          <div className="absolute left-[39px] md:left-[50px] top-10 bottom-10 w-1 bg-white/5 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary h-full origin-top"
              style={{ scaleY: pathLength }}
            />
          </div>

          <div className="space-y-32">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                {/* Node Icon */}
                <div className="relative z-10 p-5 rounded-2xl bg-midnight border border-white/10 group-hover:border-primary/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] shrink-0">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                  {exp.icon}
                </div>

                {/* Content Panel */}
                <div className="flex-1 glass p-8 md:p-12 rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden w-full">
                  
                  {/* Holographic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] mask-image:radial-gradient(circle,black,transparent) opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col xl:flex-row gap-12">
                    
                    {/* Left Info Column */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-xs font-mono text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                          {exp.category}
                        </span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-gray-300 mb-6 font-medium">@ {exp.company}</h4>
                      
                      <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                        {exp.description}
                      </p>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                          <Code2 className="w-4 h-4 text-primary" /> Engineering Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((item, i) => (
                            <span key={i} className="text-xs font-mono px-3 py-1.5 rounded bg-midnight border border-white/10 text-gray-300 group-hover:border-primary/30 transition-colors cursor-default">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights/Dashboards Column */}
                    <div className="flex-1 xl:max-w-md">
                      <div className="glass p-6 rounded-2xl border border-white/5 h-full relative overflow-hidden group/highlights">
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent z-10 pointer-events-none" />
                        
                        <span className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6 block relative z-20 flex items-center gap-2">
                          <BrainCircuit className="w-4 h-4 text-secondary" /> Core Responsibilities
                        </span>
                        
                        <div className="space-y-4 relative z-20 mb-8">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover/highlights:bg-primary transition-colors mt-2 shrink-0" />
                              <span className="text-sm text-gray-300 leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Special Visuals for specific roles */}
                        {exp.panels && (
                          <div className="relative z-20 pt-4 border-t border-white/10">
                            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">System Dashboards Built</span>
                            <div className="grid grid-cols-2 gap-2">
                              {exp.panels.map(panel => (
                                <div key={panel} className="px-3 py-2 text-xs font-mono text-center border border-white/10 rounded-lg bg-white/5 text-gray-400">
                                  {panel} Panel
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Animated Terminal Decoration */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 font-mono text-[10px] text-primary/30 opacity-50 z-0">
                          <motion.div
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                          >
                            &gt; sys_log: tracking_progress...<br/>
                            &gt; state: optimized
                          </motion.div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
