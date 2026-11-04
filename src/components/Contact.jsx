
function Contact() {
  const contactDetails = [
    {
      label: "Email",
      value: "alexiskatepensona@gmail.com",
      icon: "✉",
      link: "alexiskatepensona@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/your-username",
      icon: "⌘",
      link: "https://github.com/your-username",
    },
    {
      label: "Location",
      value: "Balingasag, Misamis Oriental",
      icon: "⌖",
      link: null,
    },
  ]

  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 md:px-12 lg:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.25em] mb-3">
            LET'S CONNECT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get In <span className="text-purple-400">Touch</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            I'm open to internship opportunities, collaborations, and
            conversations about design and development. Feel free to reach out!
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's work together.
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Whether you have an opportunity, a project idea, or simply want
              to connect, I would be happy to hear from you.
            </p>

            <div className="space-y-6">
              {contactDetails.map((contact) => (
                <div key={contact.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
                    {contact.icon}
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">{contact.label}</p>

                    {contact.link ? (
                      <a
                        href={contact.link}
                        target={contact.label === "GitHub" ? "_blank" : undefined}
                        rel={contact.label === "GitHub" ? "noreferrer" : undefined}
                        className="text-white hover:text-purple-400 transition break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative bg-gradient-to-br from-purple-600/20 via-zinc-900 to-pink-500/10 border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col justify-center overflow-hidden">
            <div className="absolute w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -top-10 -right-10"></div>

            <div className="relative">
              <p className="text-purple-400 font-semibold text-sm tracking-widest mb-4">
                CURRENTLY LOOKING FOR
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Internship & OJT Opportunities
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                Interested in opportunities related to UI/UX Design,
                Front-End Development, and Quality Assurance where I can
                continue learning and contribute my skills.
              </p>

              <a
                href="mailto:your-email@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300"
              >
                Email Me <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
