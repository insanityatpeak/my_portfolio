# Priyanshu Rawat - Portfolio

Minimal, high-performance personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Interactions:** Custom HTML5 Canvas physics engine

## Running Locally

```bash
npm install
npm run dev
```

## Core Features
- **Zero-Latency Custom Cursor:** Highly optimized custom cursor utilizing Framer Motion's `useMotionValue` to bypass React's render cycle.
- **Particle Physics Engine:** ASCII art that organically assembles via randomized spring physics and scatters on hover using repulsive forces.
- **Performance Optimized:** Off-screen canvas rendering is automatically paused using `IntersectionObserver` to save CPU/GPU overhead.

## Author
[Priyanshu Rawat (insanityatpeak)](https://github.com/insanityatpeak)
