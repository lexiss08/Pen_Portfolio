
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - INTRODUCTION */}
        <div>
          <p className="text-violet-400 font-medium mb-4 tracking-widest">
            HELLO, WORLD! I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Alexis Kate
            <span className="block text-violet-500">
              N. Pensona
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-300 mt-6">
            BS Information Technology Student
          </h2>

          <p className="text-zinc-400 leading-relaxed mt-5 max-w-xl">
            Passionate about UI/UX Design, Front-End Development,
            and building digital solutions that combine creativity
            and functionality.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg text-white transition"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 hover:border-violet-500 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex gap-8 text-sm text-zinc-500">
            <div>
              <p className="text-2xl font-bold text-white">BSIT</p>
              <p>Student</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">2027</p>
              <p>Expected Graduation</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">IT</p>
              <p>Enthusiast</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="relative flex justify-center md:justify-end items-center py-10">

          {/* Background glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-violet-600/10 blur-3xl"></div>

          {/* Decorative circle */}
          <div className="absolute top-5 right-5 md:right-10 w-24 h-24 border border-violet-500/30 rounded-full"></div>

          <div className="relative w-72 sm:w-80 md:w-96">

            {/* Offset frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl border-2 border-violet-500/60"></div>

            {/* Main portrait */}
            <div className="relative h-[380px] md:h-[460px] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-violet-900/30">

              <img
                src="/images/profile.jpg"
                alt="Alexis Kate Pensona"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-3 md:-left-8 bg-zinc-900 border border-violet-500/30 rounded-xl px-5 py-4 shadow-xl">
              <p className="text-xs text-violet-400 tracking-widest">
                CREATIVE DEVELOPER
              </p>

              <p className="text-white font-semibold mt-1">
                Design. Develop. Create.
              </p>
            </div>

            {/* Initials badge */}
            <div className="absolute top-8 -right-3 bg-violet-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-violet-900/50">
              <span className="text-white text-lg font-bold">AK</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
