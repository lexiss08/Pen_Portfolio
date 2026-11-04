
function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design"],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["React Native", "Expo"],
    },
    {
      title: "Tools & Technologies",
      icon: "⚙️",
      skills: ["Git", "GitHub", "VS Code", "MySQL", "Java"],
    },
  ]

  return (
    <section id="skills" className="bg-zinc-950 px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.25em] mb-3">
            WHAT I WORK WITH
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use in designing, developing, and
            improving digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-7 hover:border-purple-500/50 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm border border-zinc-700 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/40 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
