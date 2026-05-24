"use client";

import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    // Parallax effect on scroll
    if (containerRef.current) {
      gsap.to(".hero-video", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Listen for the custom event from the LoadingScreen button click
    // Because this fires synchronously with a user gesture, the browser allows unmuted playback!
    const handlePlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    };
    
    window.addEventListener('play-hero-video', handlePlayVideo);
    
    return () => {
      window.removeEventListener('play-hero-video', handlePlayVideo);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      
      // If unmuting, make sure it's playing
      if (isMuted) {
        videoRef.current.play().catch(e => console.error("Audio playback blocked:", e));
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-midnight">
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          src="/video.mp4"
          muted={isMuted}
          playsInline
        />
        {/* Dark overlay with noise - adjusted to be darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent z-10" />
      </div>

      {/* Content - Positioned lower to not cover the video */}
      <div className="relative z-20 flex flex-col items-center justify-end text-center px-4 max-w-4xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 text-white drop-shadow-2xl"
        >
          JIYA <span className="text-gradient">JAHNAVI</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-2xl font-light text-gray-300 mb-6 tracking-wide"
        >
          AI Engineering Intern <span className="text-primary px-2">|</span> ML Enthusiast | GenAI Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-2"
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-midnight transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] font-medium tracking-wide text-sm text-center">
            View Projects
          </a>
          <a href="#experience" className="px-6 py-3 rounded-full glass border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-white font-medium tracking-wide text-sm text-center">
            View Experience
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full glass border border-white/10 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 text-white font-medium tracking-wide text-sm text-center">
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-white font-medium tracking-wide text-sm text-center">
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        onClick={toggleMute}
        className="absolute bottom-10 right-10 z-30 glass p-3 rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition-colors text-white"
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-primary glow-primary" />}
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary opacity-70 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
