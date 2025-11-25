import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 mt-16 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap text-sm text-gray-600 dark:text-gray-400">
        <div>© {new Date().getFullYear()} Sneha Pal — Built with ❤️ and React</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-sneha-pink transition-colors">GitHub</a>
          <a href="#" className="hover:text-sneha-pink transition-colors">LinkedIn</a>
          <a href="#contact" className="hover:text-sneha-pink transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
