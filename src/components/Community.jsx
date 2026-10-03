import React from 'react';

export default function Community() {
  return (
    <section id="community" className="mb-16">
      <h2 className="text-2xl font-bold text-neutral-100 mb-6">
        Community &amp; Leadership
      </h2>
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-400">
          Core Organizer — GDG REVA &amp; OScode
        </h3>
        <p className="text-sm text-neutral-400 mb-4">REVA University | 2025 – Present</p>
        <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm leading-relaxed">
          <li>
            <strong className="text-neutral-100">REVA RIFT 24-Hour Hackathon:</strong> Managed corporate sponsorship outreach, logistics, and execution for 200+ hackers and 45+ competing teams.
          </li>
          <li>
            <strong className="text-neutral-100">HACK.ALGO Hackathon:</strong> Co-led participant onboarding, community engagement, and promotional campaigns.
          </li>
          <li>
            <strong className="text-neutral-100">Peer Workshops:</strong> Facilitated student technical bootcamps covering version control (Git/GitHub), C++ Data Structures, and open-source contributions.
          </li>
        </ul>
      </div>
    </section>
  );
}