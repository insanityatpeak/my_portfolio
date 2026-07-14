'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { ArrowDown, Mail } from 'lucide-react';
import GlitchText from './GlitchText';
import { useTypewriter } from '@/hooks/useTypewriter';
import { SITE_META } from '@/lib/constants';
import AsciiArt from './AsciiArt';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const { displayText } = useTypewriter([
    "Backend Engineer",
    "AI/ML Researcher",
    "Algorithmic Trader",
    "Systems Engineer"
  ], 80);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScroll(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center relative z-10 pt-16 md:pt-0"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        {/* Left Side: ASCII Art */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end shrink-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px]">
            <AsciiArt imageSrc="/profile.png" width={600} height={600} fontSize={4} />
          </div>
        </div>

        {/* Right Side: Text & Info */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="font-mono text-green-neon text-sm mb-4">
            $ whoami
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-end mb-4 flex-wrap gap-x-3">
            <span className="text-4xl md:text-6xl font-bold tracking-tightest leading-none text-white">hi,</span>
            <GlitchText
              text={SITE_META.name}
              className="text-4xl md:text-6xl font-bold tracking-tightest leading-none text-green-neon"
            />
            <span className="text-4xl md:text-6xl font-bold tracking-tightest leading-none text-white">here.</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-cyan-accent font-mono mb-6 h-8">
            &gt; {displayText}
            <span className="animate-blink">_</span>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-muted max-w-xl text-base md:text-lg mb-10 leading-relaxed">
            Shipping backend systems, ML pipelines, and algorithmic trading strategies that run in production.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            {SITE_META.email && (
              <a 
                href={`mailto:${SITE_META.email}`}
                className="border border-green-neon/50 text-green-neon px-6 py-2.5 min-h-[44px] font-mono text-sm hover:bg-green-neon/10 transition-colors flex items-center justify-center gap-3 rounded-md"
              >
                <Mail size={16} />
                Say hi!
              </a>
            )}
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-transparent text-slate-300 px-4 py-2 min-h-[44px] font-mono hover:text-green-neon transition-colors flex items-center justify-center gap-2"
            >
              Resume ↗
            </a>
            
            <div className="flex items-center gap-3 ml-1 md:ml-4">
              <a href={SITE_META.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <SiGithub size={22} />
              </a>
              <a href={SITE_META.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-[#0077b5] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin size={22} />
              </a>
              <a href={SITE_META.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-muted hover:text-[#ffa116] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <SiLeetcode size={22} />
              </a>
              {SITE_META.x && (
                <a href={SITE_META.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <SiX size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-green-neon animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </motion.div>
  );
}
