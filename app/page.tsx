import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen text-slate-400 font-sans selection:bg-[#00ff41]/30 selection:text-[#00ff41]">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        
        {/* Full width Hero at the top, matching gazijarin.com V4 style */}
        <Hero />

        {/* Split layout underneath */}
        <div className="lg:flex lg:justify-between lg:gap-4 mt-24">
          <Navigation />
          
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Research />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
