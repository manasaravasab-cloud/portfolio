import React from 'react';
import { PenTool, ExternalLink } from 'lucide-react';

export default function Writing() {
  return (
    <section id="writing" className="mb-16">
      <h2 className="text-xl font-mono text-yellow-400 mb-6 flex items-center gap-2">
        <PenTool size={20} /> Technical Writing
      </h2>
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-neutral-700 transition-colors">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-yellow-400 uppercase">Upcoming Post</span>
          </div>
          <h3 className="text-lg font-bold text-neutral-100">
            Building an AI Vision Assistant with Cloud Run
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
            A technical guide on designing voice-activated image description APIs with Python and OpenCV, deployed using GCP Cloud Run triggers.
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400 bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded whitespace-nowrap">
          Publishing on Dev.to
        </span>
      </div>
    </section>
  );
}