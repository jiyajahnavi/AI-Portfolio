"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Award, Trophy, Users, Code, Zap, Target, Workflow, Server, BrainCircuit, Globe, Rocket, Shield, Database, Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_HACKATHONS = [
    {
    title: "Flipkart Gridlock 2.0",
    organizer: "Flipkart",
    achievement: "Rank 190 / 6000+",
    year: "2025",
    icon: <Target className="w-8 h-8 text-primary" />,
    description: "Competed in the national-level engineering hackathon, solving complex algorithmic and system design challenges.",
    tags: ["Problem Solving", "System Design", "Engineering"]
  },
  {
    title: "Zero to Agent Hackathon",
    organizer: "GeeksforGeeks",
    achievement: "Top 5 Developer",
    year: "2026",
    icon: <Workflow className="w-8 h-8 text-primary" />,
    description: "Built and explored agentic AI workflows focused on scalable autonomous systems, rapid iteration, and practical AI execution pipelines.",
    tags: ["AI Agents", "LLMs", "Automation", "AI Systems", "FastAPI", "GenAI"]
  },
  {
    title: "The Anvil Hackathon",
    organizer: "Scaler School of Technology",
    achievement: "Finalist",
    year: "2026",
    icon: <Server className="w-8 h-8 text-secondary" />,
    description: "Worked collaboratively on scalable engineering-focused solutions under strict development timelines and rapid prototyping conditions.",
    tags: ["Full Stack", "AI", "Scalable Systems", "Collaboration", "Problem Solving"]
  },
  {
    title: "Smart India Hackathon 2025",
    organizer: "SIH Innovation Framework",
    achievement: "1st Runner-Up (Internal Round)",
    year: "2025",
    icon: <Shield className="w-8 h-8 text-primary" />,
    description: "Collaborated with team members to design and present innovative problem-solving solutions under the SIH innovation framework.",
    tags: ["Innovation", "National Hackathon", "Team Collaboration", "Problem Solving"]
  },

];

const PARTICIPATION = [
  { name: "Meta OpenENV Hackathon 2026", org: "Meta", year: "2026", icon: <Globe className="w-6 h-6" /> },
  { name: "Amazon HackOn 6.0", org: "Amazon", year: "2026", icon: <Code className="w-6 h-6" /> },
  { name: "Google Rapid Agent Hackathon", org: "Google", year: "2025", icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "Microsoft AI Skill Navigator", org: "Microsoft", year: "2025", icon: <Rocket className="w-6 h-6" /> },
  { name: "Solve for Tomorrow", org: "Samsung", year: "2025", icon: <Target className="w-6 h-6" /> },
  { name: "EY Techathon 6.0", org: "EY", year: "2026", icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "ICPC 2026", org: "ICPC", year: "2026", icon: <Rocket className="w-6 h-6" /> },
  { name: "Zoho Datathon", org: "Zoho", year: "2026", icon: <Database className="w-6 h-6" /> },
  { name: "Code with Cisco", org: "Cisco", year: "2026", icon: <Network className="w-6 h-6" /> },
  { name: "Far Away Japan Hackathon", org: "Far Away", year: "2026", icon: <Globe className="w-6 h-6" /> },
  { name: "CodeFest’26", org: "IIT BHU", year: "2025", icon: <Zap className="w-6 h-6" /> },
  { name: "National Road Safety Hackathon", org: "IIT Madras", year: "2025", icon: <Target className="w-6 h-6" /> },
  { name: "Odoo Gujarat", org: "Odoo", year: "2025", icon: <Code className="w-6 h-6" /> },
{ name: "HP Power Lab 2.0", org: "HP", year: "2025", icon: <Code className="w-6 h-6" /> },
    
];


export default function Hackathons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    // Timeline line animation
    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              <Award className="inline-block w-4 h-4 mr-2 mb-1" />
              Arena & Arenas
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Hackathons  <span className="text-gradient"></span>
            </h2>
           
          </motion.div>
        </div>

        {/* Featured Timeline */}
        <div className="mb-16 md:mb-32">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
            <Trophy className="text-secondary w-6 h-6" /> Featured Achievements
          </h3>
          
          <div ref={timelineRef} className="relative pl-8 md:pl-16 border-l border-white/5 space-y-20">
            {/* Animated Timeline Line */}
            <div className="timeline-line absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent origin-top z-0" />

            {FEATURED_HACKATHONS.map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group z-10"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-6 w-5 h-5 rounded-full bg-midnight border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(245,230,211,0.5)] transition-all duration-300" />
                
                {/* Holographic Card */}
                <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 group-hover:border-primary/40 group-hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-midnight/50 border border-white/10 group-hover:border-primary/30 transition-colors">
                      {event.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {event.title}
                        </h4>
                        <span className="text-secondary font-mono text-sm tracking-widest">{event.year}</span>
                      </div>
                      
                      <div className="text-primary/80 font-medium mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4" /> {event.achievement} 
                        <span className="text-gray-500 mx-2">|</span> 
                        <span className="text-gray-400 font-light">{event.organizer}</span>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-gray-300 bg-midnight/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Participation Grid */}
        <div className="mb-16 md:mb-32">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
            <Users className="text-primary w-6 h-6" /> Engineering Arenas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTICIPATION.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-midnight/50 border border-white/10 group-hover:border-secondary/40 group-hover:text-secondary transition-colors text-gray-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-secondary transition-colors">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.org}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-600">Status: Participated</span>
                  <span className="text-secondary/80">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
