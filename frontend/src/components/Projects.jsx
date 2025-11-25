import React from 'react'

function ProjectCard({ p }) {
  return (
    <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-sneha-pink/50 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white flex-1">{p.title}</h3>
        <a href={p.repo || '#'} className="text-sneha-pink hover:text-sneha-rose transition-colors" target="_blank" rel="noreferrer" aria-label="GitHub repo">
          🔗
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(p.tech || []).map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-sneha-soft/20 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{t}</span>
        ))}
      </div>
      <div className="mt-4">
        <a className="btn accent text-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all" href={p.url || '#'}>View Project →</a>
      </div>
    </div>
  )
}

export default function Projects({ projects = [] }) {
  const display = projects.length ? projects : [
    { id: 1, title: '[project]', description: 'Short project description...', tech: ['React', 'Node.js'], url: '#', repo: '#' },
    { id: 2, title: '[project]', description: 'Short project description...', tech: ['TypeScript'], url: '#', repo: '#' },
    { id: 3, title: '[project]', description: 'Short project description...', tech: ['React', 'Tailwind'], url: '#', repo: '#' },
    { id: 4, title: '[project]', description: 'Short project description...', tech: ['Node.js', 'MySQL'], url: '#', repo: '#' }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {display.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
