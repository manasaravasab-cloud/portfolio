import React from 'react';
import DoodleWidget from './DoodleWidget';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
      <div className="lg:col-span-7 flex flex-col gap-4">
        <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase">
  Manasa R T | CS Student & Developer
</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
  Building AI Vision Systems & Cloud Architecture.
</h1>
       <p className="text-neutral-400 text-base leading-relaxed">
  Specializing in C++, Python, Cloud Run, and Generative AI applications. Core Organizer at GDG REVA & OScode leading tech hackathons and community developer initiatives.
</p>
      </div>
      <div className="lg:col-span-5">
        <DoodleWidget />
      </div>
    </section>
  );
}