import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-neutral-800 text-center text-xs font-mono text-neutral-500">
      © {new Date().getFullYear()} Manasa R T. Built with React &amp; Tailwind CSS.
    </footer>
  );
}