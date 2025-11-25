import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const { dark } = useContext(ThemeContext)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Try fetching from backend; fallback to empty array (frontend uses placeholders)
    fetch('/api/projects')
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects([]))
  }, [])

  return (
    <div className={`min-h-screen transition-colors ${dark ? 'bg-charcoal' : 'bg-white'}`}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}