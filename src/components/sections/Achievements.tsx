"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Trophy, Crown, Palette, ShieldAlert, Users, Target, Zap, Swords } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 w-full min-h-screen relative overflow-hidden bg-midnight">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,230,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,230,211,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block">
              <Trophy className="inline-block w-4 h-4 mr-2 mb-1" />
              Command Center
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
              Achievements & <span className="text-gradient">Milestones</span>
            </h2>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A journey shaped by competitive problem solving, AI engineering, strategic thinking, creativity, discipline, and continuous learning.
            </p>
          </motion.div>
        </div>

        {/* Section 1: Competitive Programming */}
        <div className="mb-20 md:mb-40">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
          >
            <Terminal className="text-primary w-8 h-8" />
            Competitive Programming & Problem Solving
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LeetCode */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group col-span-1 md:col-span-2"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Algorithm & DSA</div>
                <h4 className="text-4xl font-bold text-white mb-6">Top 29% on LeetCode</h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                  Solved 200+ DSA and algorithmic problems across multiple coding patterns and competitive programming concepts.
                </p>
                <div className="h-1.5 w-full bg-midnight rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "79%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="h-full bg-primary glow-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* HackerRank */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-white/10 hover:border-secondary/40 transition-all duration-300 flex-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">5★ Python</h4>
                  <div className="text-secondary font-mono text-xs uppercase tracking-widest mb-4">HackerRank</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Achieved advanced problem-solving proficiency in Python through algorithmic and programming challenges.
                  </p>
                </div>
              </motion.div>
              
              {/* ICPC */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 flex-1 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">ICPC 2026</h4>
                  <div className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Participant</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Focusing on advanced algorithmic thinking and competitive problem solving under pressure in the arena.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 2: Chess */}
        <div className="mb-20 md:mb-40">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
          >
            <Crown className="text-secondary w-8 h-8" />
            Chess & Strategic Thinking
          </motion.h3>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 z-0 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-10 lg:p-16 rounded-[3rem] border border-secondary/20 relative z-10 overflow-hidden group"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="text-secondary font-mono text-sm uppercase tracking-widest mb-4">Tactical Mastery</div>
                  <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    3-Time Gold Medalist
                  </h4>
                  <div className="text-xl text-gray-300 font-light mb-8">Inter-College Chess Competitions</div>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-secondary/50 pl-4">
                    Chess strengthened strategic thinking, long-term planning, analytical reasoning, decision-making under pressure, and pattern recognition abilities.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 shrink-0">
                  {["Strategic Planning", "Pattern Recognition", "Decision Making", "Analytical Reasoning"].map((skill, i) => (
                    <div key={skill} className="p-4 bg-midnight/80 border border-white/5 rounded-xl text-center text-sm font-mono text-gray-300 hover:border-secondary/40 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grid for Creativity & Discipline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-40">
          
          {/* Section 3: Creativity */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Palette className="text-primary w-6 h-6" />
              Creativity & Visual Expression
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass h-full p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-2xl font-bold text-white mb-2">District-Level Winner</h4>
              <div className="text-primary font-mono text-xs uppercase tracking-widest mb-6">Painting Competition</div>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                Painting shaped creativity, visual storytelling, design thinking, artistic experimentation, and UI/UX sensitivity.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Design Thinking", "UI/UX", "Visual Storytelling", "Creativity"].map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          
              

        </div>

        {/* Section 5: Leadership */}
        <div className="mb-20 md:mb-40">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-4 text-center justify-center"
          >
            <Users className="text-primary w-8 h-8" />
            Leadership, Open Source & Community
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Google Arcade Facilitator",
                desc: "Facilitated learning and engagement through cloud and developer-focused educational programs.",
                icon: <Target className="w-6 h-6 text-primary" />
              },
              {
                title: "GSSOC Contributor",
                desc: "Contributed to collaborative open-source ecosystems through development and community interaction.",
                icon: <Code className="w-6 h-6 text-secondary" />
              },
              {
                title: "Serving Nicely Foundation",
                desc: "Participated in volunteering and community-focused social initiatives.",
                icon: <ShieldAlert className="w-6 h-6 text-primary" />
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors text-center flex flex-col items-center"
              >
                <div className="p-4 bg-midnight/50 rounded-2xl border border-white/5 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
