"use client";

export default function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-20 text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-accent relative inline-flex h-2 w-2 rounded-full"></span>
        </span>
        <span className="text-textSecondary text-[11px] font-bold tracking-[0.2em] uppercase">
          Open to new opportunities
        </span>
      </div>

      <h1 className="from-textPrimary via-textPrimary mb-8 max-w-4xl bg-gradient-to-b to-white/30 bg-clip-text text-4xl leading-[1.1] font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
        Building High-Performance <br />
        <span className="from-accent bg-gradient-to-r via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Web & Mobile Apps
        </span>
      </h1>

      <p className="text-textSecondary mb-12 max-w-2xl text-base leading-relaxed font-light tracking-wide sm:text-lg">
        Hi, I&apos;m Maksim. A Frontend Developer focused on building clean,
        efficient, and scalable digital interfaces.
      </p>

      <div className="z-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="group bg-textPrimary text-background relative w-full overflow-hidden rounded-full px-8 py-4 text-center text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.15)] sm:w-auto"
        >
          Explore Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="text-textPrimary w-full rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-center text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
        >
          {"Get In Touch"}
        </a>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
