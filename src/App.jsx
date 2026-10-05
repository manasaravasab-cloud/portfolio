import React from 'react';
import Hero from './components/Hero';
import Community from './components/Community';
import BentoGrid from './components/BentoGrid';
import Writing from './components/Writing';

export default function App() {
  return (
    <main 
      className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-8 max-w-6xl mx-auto"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <Hero />
      <Community />
      <BentoGrid />
      <Writing />
      
      {/* Inline Footer */}
      <footer className="pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500 mt-16">
        © {new Date().getFullYear()} MANASA. Built with React &amp; Tailwind CSS.
      </footer>
    </main>
  );
}