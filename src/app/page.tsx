'use client';

import React from 'react';

/**
 * Noman's Professional Portfolio 2026
 * Tech Stack: Next.js, Tailwind CSS, AI Integration
 */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2D3748] font-sans selection:bg-[#718096] selection:text-white pb-20">
      
      {/* 1. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#718096]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-2xl tracking-tighter text-[#1A202C]">Nomi.</span>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-[#718096]">
            <a href="#about" className="hover:text-[#1A202C] transition-all">About</a>
            <a href="#projects" className="hover:text-[#1A202C] transition-all">Projects</a>
            <a href="#experience" className="hover:text-[#1A202C] transition-all">Skills</a>
            <a href="mailto:contact@noman.dev" className="text-[#1A202C] border-b-2 border-[#1A202C]">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* 2. HERO SECTION */}
        <section className="py-24 md:py-44 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#718096]/10 rounded-full">
              <span className="text-xs font-bold text-[#718096] uppercase tracking-[0.2em]">Available for Projects</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#1A202C] leading-none">
              Noman <br /> <span className="font-medium text-[#4A5568]">AI Engineer.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#718096] font-light max-w-xl leading-relaxed">
              Crafting autonomous agents and modern web experiences where 
              <span className="text-[#1A202C] font-normal italic"> discipline meets code.</span>
            </p>
            <div className="pt-6 flex flex-wrap gap-5 justify-center md:justify-start">
              <a href="#projects" className="px-10 py-4 bg-[#1A202C] text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                View My Work
              </a>
              <a href="#experience" className="px-10 py-4 border-2 border-[#1A202C]/10 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                The Stack
              </a>
            </div>
          </div>

          {/* Profile Photo Container */}
          <div className="w-full max-w-[340px]">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#718096]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] border border-[#1A202C]/5 shadow-sm overflow-hidden bg-white">
                <img 
                  src="/me.jpeg" 
                  alt="Noman" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) parent.innerHTML = '<div class="flex items-center justify-center h-full text-[#718096] text-sm italic">Image: me.jpeg</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-[#718096]/10">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096]">The Philosophy</h3>
            <div className="md:col-span-2 space-y-6">
              <p className="text-3xl md:text-4xl font-light leading-snug text-[#1A202C]">
                "Cricket pitch ho ya terminal, performance pressure mein hi banti hai."
              </p>
              <p className="text-lg text-[#718096] leading-relaxed">
                As a professional athlete, I bring elite-level discipline to software engineering. 
                Whether I&apos;m fine-tuning a Gemini-powered agent or architecting a Next.js dashboard, 
                my focus remains on speed, accuracy, and scalability.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="group bg-white p-10 rounded-[2rem] border border-[#1A202C]/5 hover:border-[#1A202C]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1A202C] group-hover:text-white transition-colors">
                <span className="text-xl font-bold">01</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Autonomous AI Agents</h4>
              <p className="text-[#718096] mb-8 font-light leading-relaxed">
                Utilizing Claude Code and advanced LLM orchestrations to build agents that handle complex engineering workflows autonomously.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Claude Code', 'LangChain', 'Agentic'].map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-[#718096]/20 rounded-full font-bold uppercase text-[#718096]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="group bg-white p-10 rounded-[2rem] border border-[#1A202C]/5 hover:border-[#1A202C]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1A202C] group-hover:text-white transition-colors">
                <span className="text-xl font-bold">02</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Jarvis: Gemini Assistant</h4>
              <p className="text-[#718096] mb-8 font-light leading-relaxed">
                A custom-built AI assistant powered by Gemini API. Integrates voice recognition with local system automation for developer workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Gemini Flash', 'Python', 'Voice UI'].map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-[#718096]/20 rounded-full font-bold uppercase text-[#718096]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 group bg-white p-10 rounded-[2rem] border border-[#1A202C]/5 hover:border-[#1A202C]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <h4 className="text-3xl font-bold mb-4">Hackathon Web Solutions</h4>
              <p className="text-[#718096] mb-8 font-light leading-relaxed text-lg">
                Award-winning web development focused on modernizing corporate documents and building high-performance dashboards with Next.js.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'PostgreSQL', 'Tailwind', 'Vercel'].map(tag => (
                  <span key={tag} className="text-[10px] px-4 py-1.5 bg-gray-50 rounded-full font-bold uppercase text-[#718096]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. SKILLS GRID */}
        <section id="experience" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">The Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard title="Frontend" items={['Next.js', 'React', 'Tailwind']} />
            <SkillCard title="AI/Backend" items={['Gemini API', 'Claude', 'Python']} />
            <SkillCard title="Data" items={['Selenium', 'BeautifulSoup', 'SQL']} />
            <SkillCard title="Tools" items={['Git', 'Docker', 'Vercel']} />
          </div>
        </section>

      </main>

      <footer className="mt-20 border-t border-[#718096]/10 pt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#718096] text-sm">© 2026 Noman. Designed with focus.</p>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-[#718096]">
            <a href="#" className="hover:text-[#1A202C]">GitHub</a>
            <a href="#" className="hover:text-[#1A202C]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <h5 className="font-bold mb-4 text-[#1A202C] text-sm">{title}</h5>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="text-sm text-[#718096] font-light flex items-center gap-2">
            <div className="w-1 h-1 bg-[#1A202C] rounded-full"></div> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}