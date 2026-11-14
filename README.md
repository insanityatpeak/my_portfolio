<div align="center">

# Priyanshu Rawat — Developer Portfolio

A sleek, ultra-fast personal portfolio and interactive digital resume engineered with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a modern, high-contrast dark aesthetic featuring neon green (`#00ff41`) and cyan (`#00d4ff`) accents.

[![Live Demo](https://img.shields.io/badge/Live_Demo-my--portfolio--alpha--nine--82.vercel.app-00ff41?style=for-the-badge&logo=vercel&logoColor=black)](https://my-portfolio-alpha-nine-82.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.dot.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Explore Live Site](https://my-portfolio-alpha-nine-82.vercel.app/) · [Report Bug](https://github.com/insanityatpeak/my_portfolio/issues) · [Request Feature](https://github.com/insanityatpeak/my_portfolio/issues)

</div>

---

## ✨ Core Highlights & Features

### 🌟 Interactive Certifications Showcase
- **Category Filtering**: Instant, animated tab bar (`All Credentials | AI & Machine Learning | Cloud & Systems`) powered by Framer Motion layout animations (`<AnimatePresence mode="popLayout">`).
- **Official Local e-Certificates**: Directly opens locally hosted high-resolution Oracle Cloud Infrastructure (OCI) 2025 official PDFs (`/certificates/...`) for instant credential verification.
- **Glowing Hover Aesthetics**: High-impact cards with ambient glow effects and custom typography.

### 📌 Live Pinned Repositories Integration
- **Real-Time GitHub Sync**: Utilizes `useSWR` to fetch and sort live data directly from GitHub (`api.github.com`), displaying your featured repositories in precise profile order:
  1. `Juro`
  2. `CivicLens`
  3. `chunkd`
  4. `kryptonite-ai`
  5. `smart_campus`
  6. `Chatgpt_from_temu`
  7. `Blue-Berry-Berry-or-NOTHING`
  8. `The-Word-Project`
  9. `nalayak_beta`
- **Offline & Fallback Resilience**: Automatically falls back to a curated static project list if network rates limit or offline access occurs.

### ⚡ Performance & Physics Engine
- **Zero-Latency Custom Cursor**: Highly optimized custom pointer utilizing Framer Motion's `useMotionValue` to bypass React's standard re-render cycle.
- **ASCII Particle Physics Engine**: Custom HTML5 Canvas physics engine where ASCII characters assemble via randomized spring equations and scatter dynamically on cursor repulsion.
- **IntersectionObserver Optimization**: Automatically pauses canvas rendering cycles and scroll tracking whenever sections exit the viewport, ensuring peak 60+ FPS performance and zero CPU/GPU waste.

---

## 🛠️ Architecture & Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14** | Modern React App Router architecture with server and client components |
| **Language** | **TypeScript 5** | Strict type safety across data stores, API responses, and UI props |
| **Styling** | **Tailwind CSS** | Custom design tokens (`font-mono`, `green-neon`, `cyan-accent`, glassmorphism) |
| **Animation** | **Framer Motion** | Layout animations, spring physics, scroll-triggered reveal animations |
| **Data Fetching** | **SWR** | Stale-while-revalidate client-side data synchronization for live GitHub repos |
| **Graphics** | **HTML5 Canvas** | Custom physics rendering and interactive particle simulations |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `>= 18.17.0`
- **npm** or **pnpm** or **yarn**

### Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/insanityatpeak/my_portfolio.git
   cd my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:** Navigate to [`http://localhost:3000`](http://localhost:3000) to view the live portfolio.

---

## 📁 Project Structure

```text
my_portfolio/
├── app/
│   ├── page.tsx               # Main layout structure & section mounting
│   ├── layout.tsx             # Root layout, fonts, and metadata setup
│   └── globals.css            # Global CSS variables & Tailwind directives
├── components/
│   ├── Navigation.tsx         # Scroll-spy navigation sidebar
│   ├── Certifications.tsx     # Interactive certifications showcase component
│   ├── Projects.tsx           # Pinned repositories & SWR showcase
│   ├── Hero.tsx               # ASCII canvas & physics engine banner
│   ├── Skills.tsx             # Categorized technical skill tags
│   └── ...                    # About, Experience, Research, Contact
├── lib/
│   ├── certifications.ts      # Oracle certifications typed data store
│   └── constants.ts           # Static fallback constants & site metadata
└── public/
    └── certificates/          # Locally hosted official e-certificate PDFs
```

---

## 👤 About the Author

**Priyanshu Rawat (`@insanityatpeak`)**  
*Full-Stack Developer • DevOps Engineer • AI Systems • Digital Strategist*

- **GitHub:** [@insanityatpeak](https://github.com/insanityatpeak)
- **LinkedIn:** [Priyanshu Rawat](https://www.linkedin.com/in/priyanshu-rawat-235518242/)
- **Live Portfolio:** [https://my-portfolio-alpha-nine-82.vercel.app/](https://my-portfolio-alpha-nine-82.vercel.app/)

---

<div align="center">
  <p className="text-xs text-slate-500 font-mono">Engineered with precision. All rights reserved.</p>
</div>
