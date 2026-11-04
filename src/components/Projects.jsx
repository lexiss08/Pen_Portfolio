
function Projects() {
  const projects = [
    {
      number: "01",
      title: "FurEver Paw Care",
      category: "Web & Mobile Application",
      description:
        "A veterinary clinic management system designed to improve pet healthcare services through digital patient records, appointment scheduling, pet monitoring, telemedicine, and SMS notifications.",
      technologies: ["React", "React Native", "Expo", "UI/UX Design"],
      role: "Lead UI Developer",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      number: "02",
      title: "Cemetery Management System",
      category: "Web-Based Application",
      description:
        "A cemetery management system designed to organize cemetery records, locate grave plots, manage announcements, and provide SMS notifications for residents.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      role: "Academic Project",
      gradient: "from-blue-600 to-purple-500",
    },
    {
      number: "03",
      title: "USTP Secure Voting System",
      category: "Web-Based Application",
      description:
        "A secure online voting system designed for student organizations, supporting voter authentication, election management, and reliable vote recording.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      role: "Academic Project",
      gradient: "from-cyan-600 to-blue-500",
    },
    {
      number: "04",
      title: "GainTrack",
      category: "Mobile Application",
      description:
        "A fitness-related application concept focused on helping users organize and track their fitness activities and progress.",
      technologies: ["React Native", "Expo", "JavaScript"],
      role: "Personal Project",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "05",
      title: "ElectraPay",
      category: "Business & System Concept",
      description:
        "An online electricity bill payment concept designed to provide households with a convenient way to pay their electricity bills digitally.",
      technologies: ["UI/UX Design", "System Analysis", "Research"],
      role: "Academic Business Concept",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section
      id="projects"
      className="bg-zinc-950 px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.25em] mb-3">
            MY RECENT WORK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            A collection of academic and personal projects that showcase my
            experience in development, design, and problem-solving.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-1 transition duration-300"
            >
              {/* PROJECT VISUAL */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>

                <span className="relative text-white/90 text-7xl md:text-8xl font-black opacity-30 group-hover:scale-110 transition duration-500">
                  {project.number}
                </span>

                <span className="absolute bottom-4 left-5 text-white text-xs font-semibold tracking-widest uppercase">
                  {project.category}
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>

                  <span className="text-purple-400 text-sm font-semibold">
                    {project.number}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <p className="text-zinc-500 text-xs mb-4">
                  Role: <span className="text-zinc-300">{project.role}</span>
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 text-purple-300 text-xs border border-zinc-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="text-center mt-14">
          <p className="text-zinc-500 text-sm">
            More projects and creative works will be added soon.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects
