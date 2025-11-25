import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm Sneha Pal, a final year Computer Science student based in Bangalore. I'm a Full-Stack
            Developer experienced with React, Node.js, Express, MongoDB, JavaScript and TypeScript.
            I have a strong foundation in C++ and Data Structures & Algorithms, enjoy clear and
            beginner-friendly explanations when learning, and I love building real-world applications
            that solve problems.
          </p>

          <p>
            I'm actively looking for a 6-month SDE internship and full-time SDE roles in Bangalore.
            I enjoy solving DSA problems and am continuously improving my GitHub with deployable
            projects. I qualified for JEE Advanced and have honed my problem-solving skills through
            competitive programming and project development.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-sneha-soft to-white dark:from-gray-800 dark:to-charcoal flex items-center justify-center border-2 border-sneha-pink/20 shadow-lg">
            <svg className="w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" fill="none">
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
