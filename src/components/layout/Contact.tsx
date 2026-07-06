export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "maxchuprasov07@gmail.com",
      href: "mailto:maxchuprasov07@gmail.com",
      icon: "/images/gmail-logo.png",
      label: "Send a message",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/maksim-chuprasov",
      href: "https://linkedin.com/in/maksim-chuprasov",
      icon: "/images/linkedin-logo.png",
      label: "Let's connect",
    },
    {
      name: "GitHub",
      value: "github.com/Maksim-Chuprasov",
      href: "https://github.com/Maksim-Chuprasov",
      icon: "/images/git-logo.png",
      label: "Check my code",
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-[60vh] w-full scroll-mt-20 flex-col justify-between pt-20 pb-10"
    >
      <div className="my-auto w-full">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-accent mb-3 text-[11px] font-bold tracking-[0.25em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-textPrimary mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-textSecondary max-w-md text-sm leading-relaxed font-light">
            I am currently open to new job opportunities, freelance projects,
            and interesting collaborations. Drop me a line!
          </p>
        </div>

        <div className="mx-auto mb-20 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-accent/30 flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(124,58,237,0.04)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                  <img className="w-10" src={link.icon} alt="link-logo" />
                </span>
                <span className="text-accent text-[10px] font-bold tracking-wider uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {link.label} →
                </span>
              </div>

              <div>
                <h3 className="text-textSecondary/50 mb-1 text-xs font-bold tracking-wider uppercase">
                  {link.name}
                </h3>
                <p className="text-textPrimary group-hover:text-accent truncate text-sm font-medium transition-colors duration-300">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
