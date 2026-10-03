import React from 'react';
import DoodleWidget from './DoodleWidget';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
      <div className="lg:col-span-7 flex flex-col gap-4">
        {/* Updated Tagline */}
        <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase">
          Manasa R T | CS Student &amp; Developer
        </span>

        {/* Updated Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
          Building AI Vision Systems &amp; Cloud Architecture.
        </h1>

        {/* Updated Bio Paragraph with Community & Tech Focus */}
        <p className="text-neutral-400 text-base leading-relaxed">
          Specializing in C++, Python, Cloud Run, and Generative AI applications. 
          Core Organizer at GDG REVA &amp; OScode, leading tech hackathons (200+ hackers) 
          and community developer initiatives.
        </p>

        {/* Call to Action Links */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://portfolio-acme-0459.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-400 text-neutral-900 font-semibold rounded hover:bg-yellow-300 transition-colors text-sm"
          >
            Live Portfolio
          </a>
          <a
            href="#community"
            className="px-4 py-2 border border-neutral-700 text-neutral-300 font-semibold rounded hover:bg-neutral-800 transition-colors text-sm"
          >
            View Community Work
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <DoodleWidget />
      </div>
    </section>
  );
}