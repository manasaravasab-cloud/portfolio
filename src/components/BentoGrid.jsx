import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="projects" className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="text-yellow-400" size={20} />
        <h2 className="text-xl font-mono text-yellow-400">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1: AI Vision Assistive App */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-neutral-100">AI Vision Assistive App</h3>
              <span className="text-xs font-mono font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-2.5 py-1 rounded-full animate-pulse">
                Currently Building
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
              A voice-activated vision assistance application in active development. Designed to help elderly and visually impaired individuals interpret surrounding visual information in real time using Python, OpenCV, and GCP Cloud Run.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
            <span className="text-xs font-mono bg-neutral-800 text-yellow-400 px-2.5 py-1 rounded">Python</span>
            <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">GCP Cloud Run</span>
            <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Computer Vision</span>
          </div>
        </div>

        {/* Project 2: C++ Vector Graphics Editor */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-neutral-100">2D Vector Graphics Engine</h3>
              <a 
                href="https://github.com/manasaravasab-cloud/miniproject" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-yellow-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
              C++ coursework project focusing on object-oriented system design, memory management, and modular data structure implementations for interactive vector manipulation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
            <span className="text-xs font-mono bg-neutral-800 text-yellow-400 px-2.5 py-1 rounded">C++</span>
            <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">OOP</span>
            <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Data Structures</span>
          </div>
        </div>
      </div>
    </section>
  );
}