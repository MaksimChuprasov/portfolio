"use client";

export default function Header() {
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
    <header className="sticky top-4 z-50 w-full px-2 pt-2 sm:top-6 sm:px-0">
      <div className="flex w-full items-center justify-between rounded-full border border-white/15 bg-neutral-900/50 px-4 py-3 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-3xl transition-all duration-500 hover:border-white/30 hover:bg-neutral-900/70 sm:px-8 sm:py-4">
        <a
          href="#"
          onClick={(e) => handleScroll(e, "top")}
          className="text-textPrimary flex items-center text-xs font-bold uppercase transition-opacity duration-300 hover:opacity-80 sm:text-sm"
        >
          <span className="hidden tracking-[0.3em] sm:inline">
            MAKSIM CHUPRASOV
          </span>
          <span className="inline bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-sm font-extrabold tracking-[0.15em] text-transparent sm:hidden">
            MC
          </span>
        </a>
        <nav className="flex items-center gap-0.5 rounded-full border border-white/[0.06] bg-black/40 p-0.5 font-medium backdrop-blur-2xl sm:gap-1 sm:p-1">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="text-textSecondary hover:text-textPrimary rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white/[0.06] sm:px-6 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-textSecondary hover:text-textPrimary rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white/[0.06] sm:px-6 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-textSecondary hover:text-textPrimary rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white/[0.06] sm:px-6 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]"
          >
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
}
