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
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-slate-400 font-sans leading-relaxed"
      >
        <p className="mb-4">
          I&apos;m {SITE_META.name}, a builder and founder working on distributed systems, system design,
          and AI full-stack SaaS. I&apos;m Founder &amp; CTO of The Founder Den, where I build REST APIs,
          webhook handlers, and async job queues with auth, rate limiting, and idempotency.
        </p>
        <p className="mb-4">
          I&apos;ve won 5 national-level AI hackathons with JURO, a multi-agent claims adjudication system.
          I also built Chunkd, a GFS-style distributed file system in Go that survived 2 of 5 node failures
          with zero data loss. I&apos;ve solved 470+ LeetCode problems and I&apos;m a GSSoC 2026 contributor.
        </p>
        <p>
          Right now I&apos;m going deep on distributed backends, scalable system design, and LLM-powered
          products. I&apos;m building in public toward early-stage startups and a YC-ready company.
        </p>
      </motion.div>
    </section>
  );
}
