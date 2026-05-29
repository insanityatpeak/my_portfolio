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
        muted: '#4a4a4a',
        'border-dim': '#1e1e1e',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'inset(10% 0 30% 0)', transform: 'translate(-2px, 2px)' },
          '50%': { clipPath: 'inset(40% 0 10% 0)', transform: 'translate(2px, -2px)' },
          '100%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(-2px, 0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s ease-in-out infinite',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}
export default config
