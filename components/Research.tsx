'use client';

import { motion } from 'framer-motion';
import { RESEARCH } from '@/lib/constants';

export default function Research() {
  return (
    <section id="research" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only font-mono">
          Research
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {RESEARCH.map((item, idx) => (
            <li key={item.id || idx} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 font-mono">
                  {item.year}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-tight text-slate-200 group-hover:text-green-neon transition-colors duration-300 font-sans text-base">
                    {item.title}
                  </h3>
                  <div className="text-cyan-accent text-sm font-mono mt-1">
                    {item.venue}
                  </div>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {item.abstract}
                  </p>
                  
                  <div className="mt-4">
                    <button className="flex items-center text-sm font-medium text-slate-200 hover:text-green-neon transition-colors group/btn">
                      <span>Read Paper</span>
                      <span className="ml-1 inline-block transition-transform group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
