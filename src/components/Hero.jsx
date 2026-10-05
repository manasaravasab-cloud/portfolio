import React from 'react';
import { Mail } from 'lucide-react';
import DoodleWidget from './DoodleWidget';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
      {/* Left Column: Name, Role, Contacts & Bio */}
      <div className="lg:col-span-6 flex flex-col gap-5">
        
        {/* 1. MANASA & Highlighted Role */}
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-neutral-100 uppercase">
            MANASA
          </h1>
          <p className="text-xl md:text-2xl font-bold text-yellow-400 mt-2 tracking-wide font-mono">
            CS Student &amp; Developer
          </p>
        </div>

        {/* 2. Highlighted Contact & Social Actions */}
        <div className="flex flex-wrap gap-3 my-1">
          {/* GitHub Button */}
          <a
            href="https://github.com/manasaravasab-cloud"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-900/90 text-sm font-mono text-neutral-200 border border-neutral-700/80 hover:border-yellow-400/80 hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-yellow-400/10"
          >
            <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/Manasa%20R%20T"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-900/90 text-sm font-mono text-neutral-200 border border-neutral-700/80 hover:border-sky-400/80 hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-sky-400/10"
          >
            <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:manasaravasab@gmail.com"
            className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-900/90 text-sm font-mono text-neutral-200 border border-neutral-700/80 hover:border-emerald-400/80 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-emerald-400/10"
          >
            <Mail size={16} className="transition-transform duration-300 group-hover:scale-110" />
            <span>Email</span>
          </a>
        </div>

        {/* 3. Secondary Heading */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-200 leading-snug">
          Building AI Vision Systems &amp; Cloud Architecture
        </h2>

        {/* 4. Detailed Bio */}
        <p className="text-neutral-400 text-base leading-relaxed">
          Currently pursuing a B.Tech in Computer Science and Engineering. Specializing in C++, Python, Cloud Run, and Generative AI applications. Active GDG REVA Dev Team member and OScode PR &amp; Marketing Team member with cross-functional technical contributions, organizing developer hackathons (200+ hackers) and open-source initiatives.
        </p>
      </div>

      {/* Right Column: Larger Interactive Doodle Canvas */}
      <div className="lg:col-span-6 w-full min-h-[380px] flex justify-center items-center">
        <DoodleWidget />
      </div>
    </section>
  );
}