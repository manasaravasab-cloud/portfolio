import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
      <div className="lg:col-span-7 flex flex-col gap-4">
        {/* Tagline */}
        <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase">
          Nova | CS Student &amp; Developer
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
          Building AI Vision Systems &amp; Cloud Architecture.
        </h1>

        {/* Bio Paragraph 1: Education */}
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
          Currently pursuing a B.Tech in Computer Science and Engineering at REVA University, Bangalore. Passionate about computer science fundamentals, modular software design, and building real-world developer tools.
        </p>

        {/* Bio Paragraph 2: Specialization & Community Roles */}
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
          Specializing in C++, Python, Cloud Run, and Generative AI applications. Active GDG REVA Dev Team member and OScode PR Lead &amp; Technical Contributor, organizing developer hackathons (200+ hackers) and open-source initiatives.
        </p>

        {/* Call to Action / Social Links */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://github.com/manasaravasab-cloud"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-yellow-400 transition-colors bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/Manasa%20R%20T"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-yellow-400 transition-colors bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="mailto:manasaravasab@gmail.com"
            className="flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-yellow-400 transition-colors bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}