import React from 'react';

export default function SkillsMatrix() {
  const skillCategories = [
    { title: 'Languages', items: ['JavaScript (ES6+)', 'C++', 'Python', 'Java', 'HTML5', 'CSS3'] },
    { title: 'Graphics & Web', items: ['React 19', 'HTML5 Canvas API', 'Tailwind CSS', 'Lucide React', 'SVG'] },
    { title: 'Core CS & Tools', items: ['Data Structures & Algorithms', 'OOP', 'Git', 'GitHub', 'VS Code'] },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-xl font-mono text-yellow-400 mb-6">Skills Matrix</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-5">
            <h3 className="text-sm font-mono text-neutral-400 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="text-xs font-medium bg-neutral-800/80 text-neutral-200 px-2.5 py-1 rounded-md border border-neutral-700/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}