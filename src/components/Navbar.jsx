
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <a href="#home" className="text-xl font-bold">
          <span className="text-violet-500">ALEXIS</span>
          <span className="text-white">.DEV</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-violet-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm transition"
        >
          Let's Talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-5">
          <div className="flex flex-col gap-5 text-sm text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-violet-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-violet-600 hover:bg-violet-700 text-white text-center py-3 rounded-lg transition"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
