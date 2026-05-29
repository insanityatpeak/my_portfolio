'use client';

import { motion } from 'framer-motion';
import { SITE_META } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only font-mono">
          About
        </h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-slate-400 font-sans"
      >
        <p className="mb-4">
          I&apos;m {SITE_META.name} — a backend engineer, AI/ML researcher, and algorithmic trader. Currently interning as a Software Engineer at a YC-backed startup (remote), where I work on scalable backend systems and ML-driven product features.
        </p>
        <p className="mb-4">
          My work lives at the intersection of systems engineering and applied AI — from building anomaly detection pipelines for wireless security protocols to designing low-latency algorithmic trading strategies that run in live markets. I care about the full stack of a problem: the math, the architecture, and the performance.
        </p>
        <p className="mb-4">
          Outside of work, I compete in algorithmic trading simulations, grind competitive programming, and ship side projects with a startup lens — focused on things that could eventually clear a YC application.
        </p>
        <p>
          Currently deep in: distributed backend systems, LLM tooling, cybersecurity research, and building toward early-stage VC funding.
        </p>
      </motion.div>
    </section>
  );
}
