"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  "Home", "About","Experience", "Projects", "Education", "Skills",  
  "Hackathons", "Achievements", "Certifications", 
  "Contact"
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple section tracking
      const sections = NAV_ITEMS.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "glass border-b border-white/5 py-3 shadow-[0_4_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center relative w-full">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={clsx(
                  "px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-300 relative group overflow-hidden border",
                  activeSection === item 
                    ? "text-white border-primary/40 shadow-[0_0_20px_rgba(255,42,133,0.3)]" 
                    : "text-gray-400 hover:text-white border-white/10 glass hover:bg-white/10 hover:border-white/20"
                )}
              >
                {/* Active Apple Glass Glow */}
                {activeSection === item && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/5 backdrop-blur-xl z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Hover glow effect for non-active */}
                {activeSection !== item && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white absolute right-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-midnight/90 flex flex-col items-center justify-center pt-20"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={clsx(
                  "py-3 text-2xl font-light tracking-wider",
                  activeSection === item ? "text-primary glow-text" : "text-gray-400"
                )}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
