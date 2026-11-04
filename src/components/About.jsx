
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-violet-400 font-medium tracking-widest text-sm">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About <span className="text-violet-500">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Turning ideas into meaningful digital experiences.
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-5">
              I am Alexis Kate N. Pensona, a Bachelor of Science
              in Information Technology student at the University
              of Science and Technology of Southern Philippines.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-5">
              My interests include UI/UX Design, Front-End
              Development, and Web and Mobile Application
              Development. I enjoy designing user-friendly
              interfaces and developing digital solutions
              that address real-world needs.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Through academic projects and collaborative
              development, I continue to improve my technical
              knowledge, creativity, problem-solving skills,
              and ability to work with others.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="p-6 rounded-2xl bg-zinc-800 border border-white/5">
              <h3 className="text-3xl font-bold text-violet-400">01</h3>
              <p className="text-white font-medium mt-3">UI/UX Design</p>
              <p className="text-zinc-500 text-sm mt-2">
                Creating organized and user-friendly interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800 border border-white/5">
              <h3 className="text-3xl font-bold text-violet-400">02</h3>
              <p className="text-white font-medium mt-3">Development</p>
              <p className="text-zinc-500 text-sm mt-2">
                Building web and mobile applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800 border border-white/5">
              <h3 className="text-3xl font-bold text-violet-400">03</h3>
              <p className="text-white font-medium mt-3">Problem Solving</p>
              <p className="text-zinc-500 text-sm mt-2">
                Understanding needs and developing solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-800 border border-white/5">
              <h3 className="text-3xl font-bold text-violet-400">04</h3>
              <p className="text-white font-medium mt-3">Continuous Learning</p>
              <p className="text-zinc-500 text-sm mt-2">
                Exploring technologies and improving my skills.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
