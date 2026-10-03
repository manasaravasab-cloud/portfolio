import React from 'react';
import Hero from './components/Hero';
import Community from './components/Community';
import BentoGrid from './components/BentoGrid';
import Writing from './components/Writing';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-8 max-w-6xl mx-auto font-sans">
      <Hero />
      <Community />
      <BentoGrid />
      <Writing />
      <Footer />
    </main>
  );
}