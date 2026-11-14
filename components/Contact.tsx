'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_META } from '@/lib/constants';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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
        className="flex flex-col gap-8"
      >
        <p className="text-slate-400 font-sans max-w-md">
          I&apos;m open to new opportunities, freelance work, and open-source collaborations.
          Drop a message below or reach me directly at{' '}
          {SITE_META.email ? (
            <a
              href={`mailto:${SITE_META.email}`}
              className="text-green-neon hover:underline font-mono"
            >
              {SITE_META.email}
            </a>
          ) : (
            <span className="text-green-neon font-mono">my inbox</span>
          )}
          .
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-name" className="text-xs font-mono text-muted uppercase tracking-wider">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-transparent border border-green-neon/20 text-slate-200 px-4 py-3 min-h-[44px] text-sm font-mono placeholder:text-muted focus:outline-none focus:border-green-neon/60 transition-colors rounded-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="contact-email" className="text-xs font-mono text-muted uppercase tracking-wider">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-transparent border border-green-neon/20 text-slate-200 px-4 py-3 min-h-[44px] text-sm font-mono placeholder:text-muted focus:outline-none focus:border-green-neon/60 transition-colors rounded-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className="text-xs font-mono text-muted uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="What's on your mind?"
              className="bg-transparent border border-green-neon/20 text-slate-200 px-4 py-3 text-sm font-mono placeholder:text-muted focus:outline-none focus:border-green-neon/60 transition-colors rounded-sm resize-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 border border-green-neon/50 bg-green-neon/10 px-6 py-3 min-h-[44px] text-sm font-mono text-green-neon transition-colors hover:bg-green-neon hover:text-black focus:outline-none focus:ring-2 focus:ring-green-neon focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {SITE_META.email && (
              <a
                href={`mailto:${SITE_META.email}?subject=${encodeURIComponent('Portfolio Contact from ' + (form.name || 'Visitor'))}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`}
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-2 border border-border-dim text-sm font-mono text-slate-300 hover:text-green-neon hover:border-green-neon/40 transition-colors rounded-sm"
              >
                <Mail size={14} />
                Email directly ({SITE_META.email})
              </a>
            )}
          </div>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-3 p-4 border border-green-neon/30 bg-green-neon/10 rounded-sm text-green-neon text-sm font-mono"
            >
              <div className="flex items-center gap-2" role="status">
                <CheckCircle size={16} />
                <span>Message sent. I&apos;ll reply to the email you provided.</span>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-3 p-4 border border-red-500/30 bg-red-500/10 rounded-sm text-red-400 text-sm font-mono"
            >
              <div className="flex items-center gap-2">
                <AlertCircle size={16} />
                <span role="alert">Couldn&apos;t send your message. Your text is kept above; please email me directly:</span>
              </div>
              <a
                href={`mailto:${SITE_META.email}?subject=${encodeURIComponent('Portfolio Contact: ' + form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`}
                className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-red-500 text-white font-semibold text-xs rounded hover:bg-red-600 transition-colors"
              >
                <Mail size={14} />
                Send via Email App
              </a>
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
