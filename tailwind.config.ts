import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        card: '#0d1117',
        'green-neon': '#00ff41',
        'cyan-accent': '#00d4ff',
        muted: '#8a8f98',
        'border-dim': '#1a1a1a',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      // Flat box-shadow values — no var() chains in paint-critical paths
      boxShadow: {
        'level1': '0 1px 1px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
        'level2': '0 1px 1px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)',
        'level3': '0 2px 4px rgba(0,0,0,0.4), 0 8px 16px -4px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.05)',
        'neon-green': '0 0 12px rgba(0,255,65,0.15), 0 0 36px rgba(0,255,65,0.06)',
        'neon-cyan':  '0 0 12px rgba(0,212,255,0.15), 0 0 36px rgba(0,212,255,0.06)',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // One-shot animations only — no infinite loops in keyframes
        // (infinite loops on many elements thrash the compositor)
        glitch: {
          '0%':   { clipPath: 'inset(10% 0 30% 0)', transform: 'translate(-2px, 2px)' },
          '50%':  { clipPath: 'inset(40% 0 10% 0)', transform: 'translate(2px, -2px)' },
          '100%': { clipPath: 'inset(80% 0 5% 0)',  transform: 'translate(-2px, 0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        // Used only on the scroll-down arrow (single element) — acceptable
        bounce: {
          '0%, 100%': { transform: 'translateY(-20%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%':      { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s ease-in-out infinite',
        blink:  'blink 0.7s step-end infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
}
export default config
