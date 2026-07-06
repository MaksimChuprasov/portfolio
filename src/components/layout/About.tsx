export default function About() {
  // Категории твоего технического стека на основе CV
  const skillsCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Vue.js",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Mobile UI Design", "Cross-Platform Dev"],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "MongoDB", "MySQL"],
    },
    {
      title: "Architecture & Tools",
      skills: [
        "OOP Principles",
        "REST APIs",
        "Git / GitHub",
        "AI-Assisted Dev",
      ],
    },
  ];

  return (
    <section id="about" className="w-full scroll-mt-20 py-20">
      {/* Заголовок секции */}
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="text-accent mb-3 text-[11px] font-bold tracking-[0.25em] uppercase">
          Biography
        </span>
        <h2 className="text-textPrimary text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
      </div>

      {/* Основной контейнер-сетка */}
      <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* ЛЕВАЯ КОЛОНКА (5/12): Текст и Образование */}
        <div className="flex flex-col gap-10 lg:col-span-5">
          {/* Текст о себе */}
          <div className="flex flex-col gap-4">
            <h3 className="text-textPrimary text-xl font-bold">
              My Engineering Mindset
            </h3>
            <p className="text-textSecondary text-sm leading-relaxed font-light tracking-wide">
              I am a Frontend & Mobile Developer dedicated to writing clean,
              efficient, and highly scalable code. With a deep focus on building
              fluid user experiences, I bridge the gap between complex
              engineering logic and pixel-perfect design.
            </p>
            <p className="text-textSecondary text-sm leading-relaxed font-light tracking-wide">
              I love keeping up with modern web trends and constantly adapting
              to new tools. By blending solid computer science fundamentals with
              AI-driven development workflows, I maximize efficiency and deliver
              polished products rapidly.
            </p>
          </div>

          {/* Карточка образования из жидкого стекла */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20">
            <div className="from-accent/10 absolute -inset-px bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="text-accent mb-3 block text-[10px] font-bold tracking-widest uppercase">
              Education
            </span>
            <h4 className="text-textPrimary mb-1 text-base font-bold">
              B.S. in Software Engineering
            </h4>
            <p className="text-textSecondary/90 mb-4 text-sm font-medium">
              Cyprus International University
            </p>
            <div className="text-textSecondary/50 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs font-light">
              <span>Nicosia, Cyprus</span>
              <span className="text-accent font-medium">2022 — Present</span>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА (7/12): Технический Арсенал */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h3 className="text-textPrimary mb-2 text-xl font-bold lg:mb-0">
            Technical Arsenal
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillsCategories.map((category, idx) => (
              <div
                key={idx}
                className="hover:border-accent/20 rounded-2xl border border-white/[0.06] bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.02]"
              >
                {/* Название категории */}
                <h4 className="text-textPrimary mb-4 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                  <span className="bg-accent h-1.5 w-1.5 rounded-full" />
                  {category.title}
                </h4>

                {/* Список навыков в виде аккуратных тегов */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-textSecondary hover:text-textPrimary rounded-md border border-white/[0.04] bg-white/[0.02] px-2.5 py-1 text-xs font-light transition-all duration-200 hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Декоративная разделительная линия снизу секции */}
      <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent pt-20" />
    </section>
  );
}
