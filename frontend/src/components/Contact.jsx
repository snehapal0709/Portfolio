import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function onChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function onSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const json = await res.json()
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }catch(err){
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sneha-pink to-sneha-rose bg-clip-text text-transparent">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <a href="mailto:sneha.pal@example.com" className="text-sneha-pink hover:text-sneha-rose transition-colors font-medium">sneha.pal@example.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🐙</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
              <a href="https://github.com" className="text-sneha-pink hover:text-sneha-rose transition-colors font-medium">github.com/snehapal</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">💼</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
              <a href="https://linkedin.com/in/snehapal" className="text-sneha-pink hover:text-sneha-rose transition-colors font-medium">linkedin.com/in/snehapal</a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Name</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={onChange} 
            required
            className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-sneha-pink transition-colors" 
            placeholder="Your name"
          />
          
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Email</label>
          <input 
            name="email" 
            type="email"
            value={form.email} 
            onChange={onChange} 
            required
            className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-sneha-pink transition-colors" 
            placeholder="your.email@example.com"
          />
          
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Message</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={onChange} 
            required
            rows={4} 
            className="w-full px-4 py-2 rounded-lg mb-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-sneha-pink transition-colors resize-none" 
            placeholder="Your message here..."
          />
          
          <div className="flex items-center gap-3">
            <button type="submit" className="btn accent hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              {status === 'sending' ? '⏳ Sending...' : '✉️ Send Message'}
            </button>
            {status === 'sent' && <span className="text-green-600 font-medium">✓ Sent — Thank you!</span>}
            {status === 'error' && <span className="text-red-600 font-medium">✗ Error — Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
