import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';
import DoodleWidget from './components/DoodleWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-yellow-400 selection:text-neutral-950">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation Header */}
        <header className="flex items-center justify-between pb-8 mb-12 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <span className="font-mono font-semibold tracking-tight text-lg text-neutral-100">manasa.dev</span>
          </div>
          <div className="flex items-center gap-5 text-neutral-400">
            <a href="https://github.com/manasaravasab-cloud" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/Manasa R T" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:manasaravasab@gmail.com" className="hover:text-yellow-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase">
              Computer Science & Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-100 leading-tight">
              Building intelligent systems & modern frontend experiences.
            </h1>
            <p className="text-neutral-400 text-base leading-relaxed">
              Focusing on C++, DSA, cloud infrastructure on GCP, and responsive React applications. Passionate about engineering clean architecture and interactive web tools.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#projects" className="bg-yellow-400 hover:bg-yellow-500 text-neutral-950 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors">
                View Projects
              </a>
              <a href="mailto:manasaravasab@gmail.com" className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <DoodleWidget />
          </div>
        </section>

        {/* Featured Projects Section */}
    {/* Featured Projects Section */}
        <section id="projects" className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-yellow-400" size={20} />
            <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1: AI Vision App (In Development) */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-100">AI Vision Assistive App</h3>
                  <span className="text-xs font-mono font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-2.5 py-1 rounded-full">
                    In Development
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  Voice-activated vision assistance mobile application designed to help elderly and visually impaired individuals interpret surrounding visual information in real time. Currently refining multimodal AI models and Cloud Run integration.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                <span className="text-xs font-mono bg-neutral-800 text-yellow-400 px-2.5 py-1 rounded">Python</span>
                <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">GCP</span>
                <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Computer Vision</span>
              </div>
            </div>

            


        {/* Tech Stack & Focus Area Bento */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Cpu className="text-yellow-400" size={20} />
            <h2 className="text-2xl font-bold tracking-tight">Technical Foundations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h4 className="font-mono text-sm text-yellow-400 mb-2">Languages</h4>
              <p className="text-neutral-300 text-sm">C++, C, Python, JavaScript</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h4 className="font-mono text-sm text-yellow-400 mb-2">Frontend & Web</h4>
              <p className="text-neutral-300 text-sm">React 19, Vite, Tailwind CSS</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <h4 className="font-mono text-sm text-yellow-400 mb-2">Cloud & Tools</h4>
              <p className="text-neutral-300 text-sm">GCP (Cloud Run, Pub/Sub), VS Code, Git</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-800 text-center text-xs font-mono text-neutral-500">
          Designed & built with React 19 + Tailwind CSS v4
        </footer>
      </div>
    </div>
  );
}