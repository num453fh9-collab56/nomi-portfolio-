'use client';

import React, { useState } from 'react';
import { Mail, GitBranch, ExternalLink, Code2, Cpu, Sparkles, Send } from 'lucide-react';

export default function Portfolio() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2D3748] font-sans selection:bg-[#0070F3] selection:text-white pb-20">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#718096]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-2xl tracking-tighter text-[#1A202C]">Numan.</span>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-[#718096]">
            <a href="#about" className="hover:text-[#0070F3] transition-all">About</a>
            <a href="#services" className="hover:text-[#0070F3] transition-all">Services</a>
            <a href="#projects" className="hover:text-[#0070F3] transition-all">Projects</a>
            <a href="#contact" className="hover:text-[#0070F3] transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">

        {/* ========== HERO SECTION ========== */}
        <section className="py-24 md:py-44 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#718096]/10 rounded-full">
              <span className="text-xs font-bold text-[#718096] uppercase tracking-[0.2em]">Available for Projects</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#1A202C] leading-none">
              Full-Stack Web <br /> <span className="font-medium text-[#4A5568]">&amp;</span>
              <br /> Certified Prompt <br /> <span className="font-medium text-[#4A5568]">Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#718096] font-light max-w-xl leading-relaxed">
              Building custom autonomous AI agents, smart workflows, and production-ready web applications.
            </p>
            <div className="pt-6 flex flex-wrap gap-5 justify-center md:justify-start">
              <a href="#projects" className="px-10 py-4 bg-[#0070F3] text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                View Projects
              </a>
              <a href="#contact" className="px-10 py-4 border-2 border-[#0070F3]/20 rounded-xl font-semibold hover:bg-[#0070F3]/5 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Photo Container */}
          <div className="w-full max-w-[340px]">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0070F3]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
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

        {/* ========== ABOUT SECTION ========== */}
        <section id="about" className="py-24 border-t border-[#718096]/10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096]">About Me</h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-[#2D3748]">
              I build modern web platforms and autonomous AI agents. Certified in Prompt and Context Engineering via PIAIC, I combine full-stack development with LLM integration to automate business workflows and deliver clean, scalable digital products.
            </p>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section id="services" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Service 1: Autonomous AI Agents */}
            <div className="group bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-14 w-14 bg-[#718096]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2D3748] group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                <Cpu size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3">Autonomous AI Agents</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                Tool calling, agentic workflows, and business process automation built with cutting-edge LLM architectures.
              </p>
            </div>

            {/* Service 2: Full-Stack Development */}
            <div className="group bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-14 w-14 bg-[#718096]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2D3748] group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                <Code2 size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3">Full-Stack Development</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                Modern, responsive web applications using clean architecture and fast APIs. Built to scale from day one.
              </p>
            </div>

            {/* Service 3: Prompt & Context Engineering */}
            <div className="group bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-14 w-14 bg-[#718096]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2D3748] group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3">Prompt &amp; Context Engineering</h4>
              <p className="text-[#718096] leading-relaxed font-light text-sm">
                Optimizing LLM performance, context window structuring, and reliable prompt design for production systems.
              </p>
            </div>

          </div>
        </section>

        {/* ========== PROJECTS SECTION ========== */}
        <section id="projects" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Project 1: Amir Hardware & Paint Store */}
            <div className="group bg-white p-10 rounded-[2rem] border border-[#718096]/5 hover:border-[#718096]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-14 w-14 bg-[#FAFAFA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                <span className="text-xl font-bold">01</span>
              </div>
              <h4 className="text-2xl font-bold mb-3">Amir Hardware &amp; Paint Store</h4>
              <p className="text-[#718096] mb-8 font-light leading-relaxed">
                Commercial inventory and billing management system built for real-world retail operations. Streamline your stock, sales, and billing with a modern dashboard.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'Node.js', 'Database'].map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-[#718096]/20 rounded-full font-bold uppercase text-[#718096]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Project 2: Autonomous AI Agent */}
            <div className="group bg-white p-10 rounded-[2rem] border border-[#718096]/5 hover:border-[#718096]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
              <div className="h-14 w-14 bg-[#FAFAFA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0070F3] group-hover:text-white transition-colors">
                <span className="text-xl font-bold">02</span>
              </div>
              <h4 className="text-2xl font-bold mb-3">Autonomous AI Agent</h4>
              <p className="text-[#718096] mb-8 font-light leading-relaxed">
                Custom agent handling automated tasks using prompt engineering and tool calling. Built for hackathon-grade performance with smart workflow orchestration.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'OpenAI', 'LLM APIs', 'Prompt Architecture'].map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-[#718096]/20 rounded-full font-bold uppercase text-[#718096]">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========== CREDENTIALS & TECH STACK ========== */}
        <section id="credentials" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">Credentials &amp; Tech Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Credentials */}
            <div className="bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#1A202C]">
                <Sparkles size={20} strokeWidth={1.5} /> Credentials
              </h4>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#718096]/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-[#2D3748]">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A202C]">Certified Prompt &amp; Context Engineer</p>
                    <p className="text-sm text-[#718096]">PIAIC</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#718096]/10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-[#2D3748]">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A202C]">ICS — Computer Science</p>
                    <p className="text-sm text-[#718096]">Formal Education in CS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#1A202C]">
                <Code2 size={20} strokeWidth={1.5} /> Skills &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'JavaScript', 'Python', 'REST APIs', 'Git'].map(tool => (
                  <span key={tool} className="px-5 py-2.5 bg-[#FAFAFA] border border-[#718096]/20 rounded-full text-[#2D3748] text-sm font-medium hover:border-[#718096]/50 hover:bg-white transition-all cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== CONTACT SECTION ========== */}
        <section id="contact" className="py-24 border-t border-[#718096]/10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#718096] mb-16">Get In Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-[#718096] font-light leading-relaxed">
                Have a project in mind or want to discuss how I can help? Let&apos;s connect. I&apos;m always open to discussing new opportunities, creative ideas, or just having a good conversation.
              </p>
              <div className="space-y-5">
                <a href="mailto:num453fh9@gmail.com" className="flex items-center gap-4 text-[#718096] hover:text-[#0070F3] transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                  <span className="text-sm font-medium">num453fh9@gmail.com</span>
                </a>
                <a href="https://github.com/num453fh9-collab56" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#718096] hover:text-[#0070F3] transition-colors">
                  <GitBranch size={20} strokeWidth={1.5} />
                  <span className="text-sm font-medium">github.com/num453fh9-collab56</span>
                </a>
                <a href="https://www.linkedin.com/in/nauman-ali-62b7103a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#718096] hover:text-[#0070F3] transition-colors">
                  <ExternalLink size={20} strokeWidth={1.5} />
                  <span className="text-sm font-medium">linkedin.com/in/nauman-ali</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-[2rem] border border-[#718096]/20 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-[#1A202C] block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#718096]/20 rounded-xl text-[#2D3748] text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1A202C] block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#718096]/20 rounded-xl text-[#2D3748] text-sm focus:outline-none focus:border-[#0070F3] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1A202C] block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#718096]/20 rounded-xl text-[#2D3748] text-sm focus:outline-none focus:border-[#0070F3] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0070F3] text-white rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formSubmitted ? 'Message Sent!' : (
                    <>
                      Send Message <Send size={16} strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#718096]/10 pt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#718096] text-sm">© {new Date().getFullYear()} Numan. All rights reserved.</p>
          <div className="flex gap-6 text-[#718096]">
            <a href="https://github.com/num453fh9-collab56" target="_blank" rel="noopener noreferrer" className="hover:text-[#0070F3] transition-colors">
              <GitBranch size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/nauman-ali-62b7103a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-[#0070F3] transition-colors">
              <ExternalLink size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:num453fh9@gmail.com" className="hover:text-[#0070F3] transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}