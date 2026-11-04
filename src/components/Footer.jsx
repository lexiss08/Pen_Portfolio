
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">

          {/* LOGO */}
          <a href="#home" className="text-2xl font-bold">
            <span className="text-violet-500">ALEXIS</span>
            <span className="text-white">.DEV</span>
          </a>

          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-purple-400 hover:border-purple-500 transition"
            >
              GH
            </a>

            <a
              href="mailto:your-email@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-purple-400 hover:border-purple-500 transition"
            >
              @
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-zinc-500">
          <p>
            © {currentYear} Alexis Kate N. Pensona. All rights reserved.
          </p>

          <a
            href="#home"
            className="hover:text-purple-400 transition"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
