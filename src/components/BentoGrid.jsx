import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-mono text-yellow-400 mb-6 flex items-center gap-2">
        <Code2 size="{20}"/> Selected Projects & Case Studies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase">Featured Project</span>
              <a href="[https://github.com/manasaravasab-cloud/miniproject](https://github.com/manasaravasab-cloud/miniproject)" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-400">
                <ExternalLink size="{18}"/>
              </a>
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">2D Vector Graphics Editor</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              A lightweight custom 2D graphics editing environment engineered to handle dynamic geometric shape rendering and transform matrix calculations.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['C++', 'HTML5 Canvas', 'JavaScript', 'Algorithms'].map((tech) => (
              <span key={tech} className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded border border-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase">Interactive Tool</span>
            </div>
            <h3 className="text-lg font-bold text-neutral-100 mb-2">Algorithmic Pathfinding Visualizer</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Interactive grid visualizing BFS, DFS, and Dijkstra pathfinding with animated pop-art cell states and path traversal feedback.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Data Structures', 'Grid Math'].map((tech) => (
              <span key={tech} className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded border border-neutral-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}