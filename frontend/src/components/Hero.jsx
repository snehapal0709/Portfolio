import React from 'react'

export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">Hi, I'm Sneha — Full-Stack Developer & Final Year CSE Student</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">I love building scalable web apps and solving DSA problems.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn accent hover:shadow-lg transform hover:-translate-y-0.5 transition-all" href="#resume">📄 Resume</a>
            <a className="btn border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all" href="https://github.com" target="_blank" rel="noreferrer">🐙 GitHub</a>
            <a className="btn border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all" href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a className="btn border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all" href="mailto:sneha@example.com">✉️ Email</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-sneha-soft to-white dark:from-gray-800 dark:to-charcoal flex items-center justify-center border-2 border-sneha-pink/20">
            <svg className="w-40 h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none">
              <rect width="240" height="240" rx="24" fill="currentColor" fillOpacity="0.05"/>
              <circle cx="120" cy="92" r="44" fill="#FFD1DA" stroke="#FF9EB5" strokeWidth="3"/>
              <rect x="60" y="150" width="120" height="50" rx="12" fill="#FFE8ED" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
