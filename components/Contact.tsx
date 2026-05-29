'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only font-mono">
          Contact
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-8 text-slate-400 font-sans">
          I&apos;m currently open to new opportunities, freelance work, and open-source collaborations. 
          Whether you have a question or just want to say hi, my inbox is always open. 
          I&apos;ll try my best to get back to you!
        </p>

        <a
          href="mailto:priyanshurawat2104@gmail.com"
          className="inline-flex items-center justify-center rounded-md border border-green-neon/50 bg-green-neon/10 px-8 py-4 text-sm font-medium text-green-neon transition-colors hover:bg-green-neon hover:text-black focus:outline-none focus:ring-2 focus:ring-green-neon focus:ring-offset-2 focus:ring-offset-[#0a0a0a] font-mono"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
