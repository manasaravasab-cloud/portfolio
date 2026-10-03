import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 border-b border-neutral-800 mb-12">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
        <span className="font-mono font-bold tracking-tight text-neutral-100">manasa.dev</span>
      </div>
      <div className="flex items-center gap-4 text-neutral-400">
        <a href="https://github.com/manasaravasab-cloud" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/Manasa R T" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:manasaravasab@gmail.com" className="hover:text-yellow-400 transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
}