import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext)

  return (
    <header className={`py-6 px-6 sm:px-8 transition-colors ${dark ? 'border-b border-gray-800' : 'border-b border-gray-100'}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sneha-pink to-sneha-soft flex items-center justify-center text-white font-bold text-sm">SP</div>
          <div>
            <div className="text-lg font-semibold">Sneha Pal</div>
            <div className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Full-Stack Developer</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className={`btn transition-all ${dark ? 'border-gray-700 hover:bg-gray-900' : 'border-gray-200 hover:bg-gray-50'} border`}
            aria-label="Toggle theme"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <a className="btn accent hover:shadow-lg" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}