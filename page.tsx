import React from 'react';
import { Mail, GitHub, Linkedin, Cpu, Code2, Database, GitBranch, Globe } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2D3748] font-sans selection:bg-[#718096] selection:text-white pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#718096]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">N.</span>
          <div className="flex gap-6 text-sm font-medium text-[#718096]">
            <a href="#about" className="hover:text-[#2D3748] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#2D3748] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#2D3748] transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-32 md:py-48 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#2D3748]">
              Noman
            </h1>
            <h2 className="text-xl md:text-2xl text-[#718096] font-light max-w-xl leading-relaxed">
              Full-Stack Developer <span className="mx-2">|</span> AI Automator <span className="mx-2">|</span> Professional Athlete
            </h2>
            <div className="pt-4 flex gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-[#2D3748] text-white rounded-md text-sm font-medium hover:bg-[#1a202c] transition-colors shadow-sm">
                View Work
              </button>
              <button className="px-8 py-3 border border-[#718096] text-[#2D3748] rounded-md text-sm font-medium hover:bg-[#718096]/5 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            {/* Placeholder for professional photo */}
            <div className="aspect-[4/5] bg-gradient-to-br from-[#f0f0f0] to-[#e2e8f0] rounded-xl border border-[#718096]/20 shadow-sm flex items-center justify-center relative overflow-hidden group">
              <span className="text-[#718096]/50 font-medium tracking-wide">Professional Photo</span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-24 border-t border-[#718096]/20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-sm font-semibold tracking-widest text-[#718096] uppercase">About Me</h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-[#2D3748]">
              As a top-order batsman, I've learned that timing, discipline, and vision are everything.
              I bring that same mindset from the cricket pitch to my code editor, crafting scalable e-commerce
              solutions and intelligent automation systems that perform under pressure.
            </p>
          </div>
        </section>

        {/* Key Projects */}
        <section id="projects" className="py-24 border-t border-[#718096]/20">
          <h3 className="text-sm font-semibold tracking-widest text-[#718096] uppercase mb-12">The Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white p-8 rounded-xl border border-[#718096]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 bg-[#FAFAFA] rounded-lg border border-[#718096]/20 flex items-center justify-center mb-6 text-[#2D3748]">
                <Cpu size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium mb-3">Jarvis AI</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                A personal assistant powered by the Gemini API and local voice engines. Designed for seamless daily automation and conversational intelligence.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group bg-white p-8 rounded-xl border border-[#718096]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 bg-[#FAFAFA] rounded-lg border border-[#718096]/20 flex items-center justify-center mb-6 text-[#2D3748]">
                <Database size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium mb-3">Cricket Analytics Portal</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                A real-time dashboard delivering insights and stats. Built utilizing Python for advanced web scraping and Next.js for a responsive, fast frontend.
              </p>
            </div>

            {/* Project 3 */}
            <div className="group bg-white p-8 rounded-xl border border-[#718096]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 bg-[#FAFAFA] rounded-lg border border-[#718096]/20 flex items-center justify-center mb-6 text-[#2D3748]">
                <Code2 size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-medium mb-3">Hackathon Solutions</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                Battle-tested under pressure. Consistent track record of architecting winning solutions and completing high-stakes coding challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section id="skills" className="py-24 border-t border-[#718096]/20">
          <h3 className="text-sm font-semibold tracking-widest text-[#718096] uppercase mb-12">Technical Stack</h3>
          <div className="flex flex-wrap gap-4">
            <SkillTag icon={<Code2 size={16} />} name="Python" />
            <SkillTag icon={<Globe size={16} />} name="Next.js" />
            <SkillTag icon={<Database size={16} />} name="Web Scraping" />
            <SkillTag icon={<Cpu size={16} />} name="AI Integration (Gemini)" />
            <SkillTag icon={<GitBranch size={16} />} name="Git" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#718096]/20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#718096] text-sm font-light">
            © {new Date().getFullYear()} Noman. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#718096]">
            <a href="#" className="hover:text-[#2D3748] transition-colors"><Github size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#2D3748] transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#2D3748] transition-colors"><Mail size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for skill tags
function SkillTag({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#718096]/20 rounded-full text-[#2D3748] text-sm font-medium hover:border-[#718096]/50 hover:bg-[#FAFAFA] transition-all cursor-default shadow-sm">
      <span className="text-[#718096]">{icon}</span>
      {name}
    </div>
  );
}
