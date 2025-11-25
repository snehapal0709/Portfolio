import React from 'react'

const groups = [
  { title: 'Languages', icon: '💻', items: ['C++', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend', icon: '🎨', items: ['React', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', icon: '⚙️', items: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Database', icon: '🗄️', items: ['MongoDB', 'MySQL'] },
  { title: 'Tools', icon: '🛠️', items: ['Git', 'GitHub', 'Docker', 'Postman'] },
  { title: 'Others', icon: '🧠', items: ['DSA', 'Problem Solving'] }
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-sneha-pink/30 dark:hover:border-sneha-rose/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{g.icon}</span>
              <div className="font-semibold text-gray-900 dark:text-white">{g.title}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-sm px-2 py-1 rounded-lg bg-gradient-to-r from-sneha-soft/20 to-sneha-pink/20 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 font-medium">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
