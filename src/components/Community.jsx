import React from 'react';

export default function Community() {
  return (
    <section id="community" className="mb-16">
      <h2 className="text-xl font-mono text-yellow-400 mb-6">Experience &amp; Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* GDG REVA - Dev Team */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase">Engineering &amp; Tech</span>
            <h3 className="text-lg font-bold text-neutral-100 mt-1">Dev Team Member — GDG REVA</h3>
            <p className="text-xs font-mono text-neutral-500 mb-4">REVA University | 2025 – Present</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm leading-relaxed">
              <li>Engineered web platforms and technical assets for campus developer workshops and community initiatives.</li>
              <li>Collaborated on technical execution and developer onboarding for major club events like REVA RIFT (200+ hackers, 45+ teams).</li>
              <li>Facilitated peer learning sessions covering Git/GitHub, version control, and open-source practices.</li>
            </ul>
          </div>
        </div>

        {/* OScode - PR & Marketing + Tech Contributor */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase">Outreach &amp; Cross-Functional</span>
            <h3 className="text-lg font-bold text-neutral-100 mt-1">PR &amp; Marketing / Tech Contributor — OScode</h3>
            <p className="text-xs font-mono text-neutral-500 mb-4">REVA University | 2025 – Present</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm leading-relaxed">
              <li>Spearheaded public relations, promotional campaigns, and student engagement across campus developer networks.</li>
              <li>Cross-collaborated with internal tech leads to assist in open-source repository maintenance and event technical setups.</li>
              <li>Drove promotion and participant onboarding for open-source initiatives and developer hackathons.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}