'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const generateJsonLines = () => {
    const lines = [];
    lines.push(<span className="text-muted">{'{'}</span>);
    
    const entries = Object.entries(SKILLS);
    entries.forEach(([key, values], i) => {
      lines.push(
        <>
          <span className="text-cyan-accent">  &quot;{key}&quot;</span>
          <span className="text-muted">: [</span>
        </>
      );
      
      values.forEach((val, j) => {
        const isLastVal = j === values.length - 1;
        lines.push(
          <>
            <span className="text-green-neon">    &quot;{val}&quot;</span>
            {!isLastVal && <span className="text-white">,</span>}
          </>
        );
      });
      
      const isLastCategory = i === entries.length - 1;
      lines.push(
        <>
          <span className="text-muted">  ]</span>
          {!isLastCategory && <span className="text-white">,</span>}
        </>
      );
    });
    
    lines.push(<span className="text-muted">{'}'}</span>);
    return lines;
  };

  const jsonLines = generateJsonLines();

  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6">
      <div className="font-mono text-green-neon text-sm mb-8">
        // 04. skills
      </div>

      <div className="bg-card border border-border-dim rounded-md overflow-hidden shadow-2xl">
        {/* Terminal Chrome */}
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border-dim">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-xs font-mono text-muted flex-grow text-center mr-16">
            skills.json — zsh
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
          <div className="mb-4">
            <span className="text-green-neon mr-2">$</span>
            <span className="text-white">cat skills.json</span>
          </div>

          <motion.pre
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col"
          >
            {jsonLines.map((line, idx) => (
              <motion.div key={idx} variants={lineVariants} className="whitespace-pre">
                {line}
              </motion.div>
            ))}
            <motion.div variants={lineVariants} className="mt-4 flex items-center">
              <span className="text-green-neon mr-2">$</span>
              <span className="animate-blink bg-green-neon/80 w-2.5 h-5 inline-block" />
            </motion.div>
          </motion.pre>
        </div>
      </div>
    </section>
  );
}
