'use client';

import { useEffect, useState } from 'react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { SITE_META } from '@/lib/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
    >
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{SITE_META.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl font-mono text-cyan-accent">
          Backend & AI/ML Intern
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Shipping backend systems, ML pipelines, and algorithmic trading strategies that run in production.
        </p>

        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-8 w-max">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`group flex items-center py-3 ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                      activeSection === link.id
                        ? 'w-16 bg-white'
                        : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-in-out font-mono ${
                      activeSection === link.id
                        ? 'text-white'
                        : 'text-slate-500 group-hover:text-slate-200'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social media">
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-white transition-colors duration-300 text-slate-400"
            href={SITE_META.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <SiGithub className="h-6 w-6" />
          </a>
        </li>
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-white transition-colors duration-300 text-slate-400"
            href={SITE_META.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="shrink-0 text-xs">
          <a
            className="block hover:text-white transition-colors duration-300 text-slate-400"
            href={SITE_META.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </motion.header>
  );
}
