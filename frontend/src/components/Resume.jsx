import React from 'react'

export default function Resume(){
  return (
    <section id="resume" className="py-12 sm:py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">Resume</h2>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
        <p className="text-gray-700 dark:text-gray-300 mb-4">If you're a recruiter, download my resume to learn more about my experience and projects.</p>
        <a className="btn accent hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-block" href="resume.pdf" download>
          📥 Download Resume (placeholder)
        </a>
      </div>
    </section>
  )
}
