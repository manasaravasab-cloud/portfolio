import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="projects" className="mb-16 font-serif">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-8 border-b border-neutral-800 pb-3">
        <Code2 className="text-amber-400" size={20} />
        <h2 className="text-xl font-normal tracking-widest text-amber-400 uppercase font-sans">
          Featured Engineering &amp; Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1: Lockdown — 3D Online Escape Room */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif text-neutral-100">
                Lockdown — 3D Multiplayer Escape Room
              </h3>
              <span className="text-xs font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full animate-pulse">
                In Active Development
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A browser-based 3D co-op escape room built with Three.js and Socket.IO. Features asymmetric information puzzles requiring real-time team coordination, procedural ambient soundscapes via the Web Audio API, and an AI-driven chaser entity navigating with BFS/A* pathfinding algorithms[cite: 14].
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">Three.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Node.js</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Socket.IO</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Web Audio API</span>
          </div>
        </div>

        {/* Project 2: AI Vision Assistive App */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif text-neutral-100">
                AI Vision Assistive App
              </h3>
              <span className="text-xs font-sans tracking-widest uppercase font-medium bg-amber-400/10 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full animate-pulse">
                In Active Development
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              A voice-first vision assistance application for elders and low-vision individuals[cite: 15]. Interprets visual info (such as medicine labels) in real time and provides spoken feedback using Python, OpenCV, and GCP Cloud Run integration[cite: 15].
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">Python</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">GCP Cloud Run</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Computer Vision</span>
          </div>
        </div>

        {/* Project 3: 2D Vector Graphics Engine */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 md:col-span-2">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-serif text-neutral-100">
                2D Vector Graphics Engine
              </h3>
              <a 
                href="https://github.com/manasaravasab-cloud/miniproject" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed font-serif">
              C++ system engineering project focusing on object-oriented software architecture, direct memory management, and modular custom data structures for interactive vector rendering and shape manipulation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80 font-sans">
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-amber-400 px-2.5 py-1 rounded-md">C++</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">OOP Architecture</span>
            <span className="text-xs tracking-wider uppercase bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">Memory Management</span>
          </div>
        </div>

      </div>
    </section>
  );
}