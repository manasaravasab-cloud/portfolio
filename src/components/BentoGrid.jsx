import React from 'react';
import { Code2 } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="projects" className="mb-16 font-serif">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-8 border-b border-neutral-800 pb-3">
        <Code2 className="text-amber-400" size={20} />
        <h2 className="text-xl font-normal tracking-widest text-amber-400 uppercase font-sans">
          Engineering &amp; Systems
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1: Lockdown */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-2xl font-serif text-neutral-100">
                Lockdown
              </h3>
              <span className="text-[10px] font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-full animate-pulse whitespace-nowrap">
                In Active Development
              </span>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-amber-500 mb-3">
              3D Online Multiplayer Escape Room
            </p>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A browser-based co-op escape room featuring asymmetric information puzzles that enforce real-time team communication. Includes procedural audio generation and pathfinding AI (BFS/A*) for dynamic chaser mechanics.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">Three.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Node.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Socket.IO</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Web Audio API</span>
          </div>
        </div>

        {/* Project 2: Iris */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-2xl font-serif text-neutral-100">
                Iris
              </h3>
              <span className="text-[10px] font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-full animate-pulse whitespace-nowrap">
                In Active Development
              </span>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-amber-500 mb-3">
              Voice-First Assistive Engine
            </p>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A visual assistant designed for elders and low-vision users. Parses physical objects and medicine labels in real time through mobile camera feeds, returning immediate spoken answers with safety verification safeguards.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">Python</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">FastAPI</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Vision Models</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Web Speech API</span>
          </div>
        </div>

        {/* Project 3: Planora */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-2xl font-serif text-neutral-100">
                Planora
              </h3>
              <span className="text-[10px] font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-full animate-pulse whitespace-nowrap">
                In Active Development
              </span>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-amber-500 mb-3">
              Event Directory &amp; Escrow Marketplace
            </p>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A marketplace platform connecting customers with verified event organizers across Bangalore. Implements direct quote requests, deposit holding logic, and split-settlement payment workflows.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">React</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Node.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">PostgreSQL</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Payment Gateways</span>
          </div>
        </div>

        {/* Project 4: Zoyo */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-2xl font-serif text-neutral-100">
                Zoyo
              </h3>
              <span className="text-[10px] font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-full animate-pulse whitespace-nowrap">
                In Active Development
              </span>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-amber-500 mb-3">
              Cinema Experience Discovery Engine
            </p>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A discovery web application that ranks theater halls by real experience metrics (audio systems, seating quality, screen specs) with spatial distance queries and affiliate booking deep links.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">Next.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">FastAPI</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">PostGIS</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Google Places API</span>
          </div>
        </div>

      </div>
    </section>
  );
}