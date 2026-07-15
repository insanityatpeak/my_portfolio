'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS, CERTIFICATION_CATEGORIES } from '@/lib/certifications';
import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCertifications = CERTIFICATIONS.filter((cert) =>
    activeCategory === 'all' ? true : cert.category === activeCategory
  );

  return (
    <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* Sticky mobile/tablet header matching Experience & Projects */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only font-mono">
          Certifications
        </h2>
      </div>

      <div>
        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-border-dim pb-4">
          {CERTIFICATION_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-green-neon/15 text-green-neon border border-green-neon/40 shadow-[0_0_12px_rgba(0,255,65,0.15)] font-semibold'
                    : 'bg-surface/60 text-slate-400 hover:text-slate-200 hover:bg-surface border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Certifications List */}
        <ul className="group/list">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert) => (
              <motion.li
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
              >
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Subtle glowing hover background plate */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                  {/* Period/Year & Issuer metadata column */}
                  <header className="z-10 mb-2 mt-1 flex flex-col sm:col-span-2 font-mono">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {cert.date}
                    </span>
                    <span className="mt-1 text-xs text-cyan-accent/80 font-medium leading-snug">
                      {cert.issuer}
                    </span>
                  </header>

                  {/* Title, Credential ID & Skills column */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-tight text-slate-200 font-sans text-base">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-neon focus-visible:text-green-neon group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span className="mr-1.5 flex items-center self-center text-green-neon/80">
                          <Award className="h-4 w-4 inline" />
                        </span>
                        <span>{cert.title}</span>
                        <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1.5 text-xs">
                          ↗
                        </span>
                      </a>
                    </h3>

                    {cert.credentialId && (
                      <div className="mt-1.5 font-mono text-xs text-slate-400/80 flex items-center gap-2">
                        <span>ID: <code className="text-slate-300">{cert.credentialId}</code></span>
                      </div>
                    )}

                    {cert.skills && cert.skills.length > 0 && (
                      <ul className="mt-3 flex flex-wrap" aria-label="Skills gained">
                        {cert.skills.map((skill) => (
                          <li key={skill} className="mr-1.5 mt-2">
                            <div className="skill-tag flex items-center rounded-full bg-green-neon/10 px-3 py-1 text-xs font-medium leading-5 text-green-neon font-mono">
                              {skill}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-4 flex items-center gap-4 text-slate-400 text-xs font-mono">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center hover:text-green-neon transition-colors font-medium"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        View Official Certificate (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
