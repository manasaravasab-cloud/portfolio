import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-6 md:p-12 selection:bg-yellow-400 selection:text-neutral-950">
      <div className="max-w-4xl mx-auto">
        
        {/* Header / Intro */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 mb-12 border-b border-neutral-800">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white">
              Manasa R T
            </h1>
            <p className="text-lg text-neutral-400 font-medium">
              Computer Science & Engineering Student | Developer
            </p>
          </div>
          <div className="flex items-center gap-5 text-neutral-400">
            <a href="https://github.com/manasaravasab-cloud" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/Manasa R T" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:manasaravasab@gmail.com" className="hover:text-yellow-400 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="text-yellow-400" size={20} />
            <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Undergraduate Computer Science student focused on building scalable software systems, backend logic, and exploring artificial intelligence applications. Passionate about hands-on software development, data structures, and developer communities.
          </p>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-yellow-400" size={20} />
            <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1: AI Vision App */}
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

            {/* Project Card 2: miniproject Repository */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-100">miniproject</h3>
                  <a href="https://github.com/manasaravasab-cloud/miniproject" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-400">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  Academic computer science mini-project hosted on GitHub. Features coursework implementation, modular codebase structure, and core logic components.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                <span className="text-xs font-mono bg-neutral-800 text-yellow-400 px-2.5 py-1 rounded">C++</span>
                <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Data Structures</span>
                <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Git</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="text-yellow-400" size={20} />
            <h2 className="text-2xl font-bold tracking-tight">Skills & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['C++', 'C', 'Python', 'Data Structures & Algorithms', 'Google Cloud Platform', 'Git / GitHub', 'VS Code', 'React', 'Tailwind CSS'].map((skill) => (
              <span key={skill} className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-3.5 py-1.5 rounded-lg text-sm font-mono">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-800 text-center text-xs font-mono text-neutral-500">
          © {new Date().getFullYear()} Manasa R T. Built with React & Tailwind CSS.
        </footer>

      </div>
    </div>
  );
}